import { NextRequest, NextResponse } from 'next/server';
import { classifyProjectSDGs, type ClassificationResult } from '@/services/sdgClassifierService';
import { calculateProjectScore } from '@/services/impactScoring';
import { recalculateOrgScore } from '@/services/impactScoringService';

// ──────────────────────────────────────────────────────────────
// POST /api/projects — Create project with AI SDG classification
// ──────────────────────────────────────────────────────────────
// 1. Receives project data
// 2. Calls SDG classifier service (OpenAI → local fallback)
// 3. Calculates impact score
// 4. Saves project + ProjectSDGs (with confidence) to DB
// 5. Returns full project with SDG tags, confidence, reasoning
// ──────────────────────────────────────────────────────────────

interface ProjectInput {
    title: string;
    description: string;
    organization_id: string;
    organization_name?: string;
    budget_allocated: number;
    budget_utilized: number;
    beneficiaries_count: number;
    outcome_metric_value?: number;
    latitude?: number;
    longitude?: number;
    location_name?: string;
    start_date?: string;
    end_date?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ProjectInput = await request.json();

        // ─── Validation ──────────────────────────────────────
        const errors: string[] = [];
        if (!body.title?.trim()) errors.push('title is required');
        if (!body.description?.trim() || body.description.trim().length < 10) {
            errors.push('description must be at least 10 characters');
        }
        if (!body.organization_id) errors.push('organization_id is required');
        if (!body.budget_allocated || body.budget_allocated <= 0) errors.push('budget_allocated must be positive');
        if (body.beneficiaries_count == null || body.beneficiaries_count < 0) errors.push('beneficiaries_count must be non-negative');

        if (errors.length > 0) {
            return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 });
        }

        // ─── Step 1: AI SDG Classification ───────────────────
        let classification: ClassificationResult;
        try {
            classification = await classifyProjectSDGs(body.description);
        } catch (classifyError) {
            console.error('Classification failed, using defaults:', classifyError);
            classification = {
                sdg_tags: [17],
                classifications: [{ sdg_id: 17, sdg_name: 'Partnerships for the Goals', confidence: 0.5 }],
                reasoning: 'Default classification — SDG classifier encountered an error.',
                source: 'local',
            };
        }

        // ─── Step 2: Impact Score ────────────────────────────
        const impactScore = calculateProjectScore(
            body.beneficiaries_count,
            body.budget_allocated,
            body.budget_utilized || 0,
            body.location_name || 'India',
            body.outcome_metric_value || 0,
            0,
            'active',
        );

        // ─── Step 3: Build project record ────────────────────
        // Uses Prisma if DB is connected, otherwise returns in-memory result
        const projectId = crypto.randomUUID();
        const now = new Date().toISOString();

        // Try Prisma DB persistence
        let savedToDb = false;
        try {
            // Dynamic import to avoid build errors when DB isn't configured
            const prismaModule = await import('@/lib/prisma');
            const prisma = prismaModule.default;

            // Create project
            const dbProject = await prisma.project.create({
                data: {
                    id: projectId,
                    organization_id: body.organization_id,
                    title: body.title,
                    description: body.description,
                    budget_allocated: body.budget_allocated,
                    budget_utilized: body.budget_utilized || 0,
                    beneficiaries_count: body.beneficiaries_count,
                    outcome_metric_value: body.outcome_metric_value ?? null,
                    latitude: body.latitude ?? null,
                    longitude: body.longitude ?? null,
                    status: 'ACTIVE',
                },
            });

            // Create ProjectSDG entries with AI confidence scores
            for (const cls of classification.classifications) {
                await prisma.projectSDG.create({
                    data: {
                        project_id: dbProject.id,
                        sdg_id: cls.sdg_id,
                        ai_confidence_score: cls.confidence,
                    },
                });
            }

            // Create initial activity entry
            const activityContent = `Project "${body.title}" created | Budget: ₹${body.budget_allocated.toLocaleString()} | Beneficiaries: ${body.beneficiaries_count.toLocaleString()} | SDGs: ${classification.sdg_tags.join(', ')}`;
            const hashBuffer = new TextEncoder().encode(activityContent + now);
            const hashArray = await crypto.subtle.digest('SHA-256', hashBuffer);
            const hashHex = Array.from(new Uint8Array(hashArray)).map(b => b.toString(16).padStart(2, '0')).join('');

            await prisma.projectActivity.create({
                data: {
                    project_id: dbProject.id,
                    activity_title: 'Project Created',
                    description: activityContent,
                    latitude: body.latitude ?? null,
                    longitude: body.longitude ?? null,
                    hash_value: hashHex,
                },
            });

            savedToDb = true;

            // Recalculate org score after project creation
            await recalculateOrgScore(body.organization_id);
        } catch {
            // DB not available — continue with in-memory response
            console.warn('Prisma DB not available — returning in-memory project response');
        }

        // ─── Step 4: Build response ──────────────────────────
        const response = {
            project: {
                id: projectId,
                title: body.title,
                description: body.description,
                organization_id: body.organization_id,
                budget_allocated: body.budget_allocated,
                budget_utilized: body.budget_utilized || 0,
                beneficiaries_count: body.beneficiaries_count,
                outcome_metric_value: body.outcome_metric_value,
                latitude: body.latitude,
                longitude: body.longitude,
                status: 'ACTIVE',
                impact_score: impactScore,
                created_at: now,

                // SDG Tags with confidence
                sdg_tags: classification.sdg_tags,
                sdg_classifications: classification.classifications,
                sdg_reasoning: classification.reasoning,
                sdg_source: classification.source,
            },
            persisted: savedToDb,
        };

        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        console.error('Project creation error:', error);
        return NextResponse.json(
            { error: 'Project creation failed' },
            { status: 500 }
        );
    }
}
