import { NextRequest, NextResponse } from 'next/server';
import { recalculateOrgScore } from '@/services/impactScoringService';

// ──────────────────────────────────────────────────────────────
// POST /api/activities — Log a new project activity
// Triggers impact score recalculation for the org
// ──────────────────────────────────────────────────────────────

interface ActivityInput {
    project_id: string;
    activity_title: string;
    description: string;
    latitude?: number;
    longitude?: number;
    proof_url?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ActivityInput = await request.json();

        // Validation
        const errors: string[] = [];
        if (!body.project_id) errors.push('project_id is required');
        if (!body.activity_title?.trim()) errors.push('activity_title is required');
        if (!body.description?.trim()) errors.push('description is required');
        if (errors.length > 0) {
            return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 });
        }

        // Generate SHA-256 hash
        const content = `${body.activity_title}|${body.description}|${new Date().toISOString()}`;
        const hashBuffer = new TextEncoder().encode(content);
        const hashArray = await crypto.subtle.digest('SHA-256', hashBuffer);
        const hashHex = Array.from(new Uint8Array(hashArray))
            .map(b => b.toString(16).padStart(2, '0')).join('');

        let savedToDb = false;
        let orgId: string | null = null;

        try {
            const prismaModule = await import('@/lib/prisma');
            const prisma = prismaModule.default;

            // Fetch the project to get org ID
            const project = await prisma.project.findUnique({
                where: { id: body.project_id },
                select: { organization_id: true },
            });

            if (!project) {
                return NextResponse.json({ error: 'Project not found' }, { status: 404 });
            }

            orgId = project.organization_id;

            // Create activity
            const activity = await prisma.projectActivity.create({
                data: {
                    project_id: body.project_id,
                    activity_title: body.activity_title,
                    description: body.description,
                    latitude: body.latitude ?? null,
                    longitude: body.longitude ?? null,
                    proof_url: body.proof_url ?? null,
                    hash_value: hashHex,
                },
            });

            savedToDb = true;

            // Recalculate impact score for the organization
            const updatedScore = await recalculateOrgScore(orgId!);

            return NextResponse.json({
                activity: {
                    id: activity.id,
                    ...body,
                    hash_value: hashHex,
                    created_at: activity.created_at.toISOString(),
                },
                impact_score_updated: {
                    organization_id: orgId,
                    final_score: updatedScore.final_score,
                },
                persisted: true,
            }, { status: 201 });
        } catch {
            // DB not available — return in-memory result
        }

        return NextResponse.json({
            activity: {
                id: crypto.randomUUID(),
                ...body,
                hash_value: hashHex,
                created_at: new Date().toISOString(),
            },
            impact_score_updated: null,
            persisted: savedToDb,
        }, { status: 201 });
    } catch (error) {
        console.error('Activity creation error:', error);
        return NextResponse.json({ error: 'Activity creation failed' }, { status: 500 });
    }
}
