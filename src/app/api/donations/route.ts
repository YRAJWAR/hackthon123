import { NextRequest, NextResponse } from 'next/server';
import { recalculateOrgScore } from '@/services/impactScoringService';

// ──────────────────────────────────────────────────────────────
// POST /api/donations — Record a donation
// Updates project budget_utilized and triggers score recalculation
// ──────────────────────────────────────────────────────────────

interface DonationInput {
    project_id: string;
    donor_id: string;
    amount: number;
}

export async function POST(request: NextRequest) {
    try {
        const body: DonationInput = await request.json();

        // Validation
        const errors: string[] = [];
        if (!body.project_id) errors.push('project_id is required');
        if (!body.donor_id) errors.push('donor_id is required');
        if (!body.amount || body.amount <= 0) errors.push('amount must be positive');
        if (errors.length > 0) {
            return NextResponse.json({ error: 'Validation failed', details: errors }, { status: 400 });
        }

        let savedToDb = false;

        try {
            const prismaModule = await import('@/lib/prisma');
            const prisma = prismaModule.default;

            // Verify project exists and get org ID
            const project = await prisma.project.findUnique({
                where: { id: body.project_id },
                select: { id: true, organization_id: true, budget_utilized: true },
            });

            if (!project) {
                return NextResponse.json({ error: 'Project not found' }, { status: 404 });
            }

            // Create donation record
            const donation = await prisma.donation.create({
                data: {
                    project_id: body.project_id,
                    donor_id: body.donor_id,
                    amount: body.amount,
                },
            });

            // Update project's budget_utilized
            await prisma.project.update({
                where: { id: body.project_id },
                data: {
                    budget_utilized: Number(project.budget_utilized) + body.amount,
                },
            });

            savedToDb = true;

            // Recalculate impact score (funding efficiency component changes)
            const updatedScore = await recalculateOrgScore(project.organization_id);

            return NextResponse.json({
                donation: {
                    id: donation.id,
                    project_id: body.project_id,
                    donor_id: body.donor_id,
                    amount: body.amount,
                    created_at: donation.created_at.toISOString(),
                },
                impact_score_updated: {
                    organization_id: project.organization_id,
                    final_score: updatedScore.final_score,
                },
                persisted: true,
            }, { status: 201 });
        } catch {
            // DB not available
        }

        return NextResponse.json({
            donation: {
                id: crypto.randomUUID(),
                ...body,
                created_at: new Date().toISOString(),
            },
            impact_score_updated: null,
            persisted: savedToDb,
        }, { status: 201 });
    } catch (error) {
        console.error('Donation creation error:', error);
        return NextResponse.json({ error: 'Donation creation failed' }, { status: 500 });
    }
}
