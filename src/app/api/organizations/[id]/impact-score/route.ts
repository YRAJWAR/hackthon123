import { NextRequest, NextResponse } from 'next/server';
import { getOrgScore, getOrgScoreHistory, recalculateOrgScore } from '@/services/impactScoringService';

// ──────────────────────────────────────────────────────────────
// GET /api/organizations/:id/impact-score
// Returns the latest impact score + score history for an org
//
// Query params:
//   ?recalculate=true   — Force recalculation from DB
//   ?history=true        — Include score history for trend charts
// ──────────────────────────────────────────────────────────────

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: orgId } = await params;

        if (!orgId) {
            return NextResponse.json({ error: 'Organization ID is required' }, { status: 400 });
        }

        const { searchParams } = new URL(request.url);
        const forceRecalc = searchParams.get('recalculate') === 'true';
        const includeHistory = searchParams.get('history') === 'true';

        // Get or recalculate score
        const score = forceRecalc
            ? await recalculateOrgScore(orgId)
            : await getOrgScore(orgId, false);

        // Build response
        const response: Record<string, unknown> = {
            organization_id: score.organization_id,
            score: {
                scale: { value: score.scale_score, weight: 0.30, max: 300, label: 'Beneficiary Scale' },
                outcome: { value: score.outcome_score, weight: 0.25, max: 250, label: 'Outcome Impact' },
                efficiency: { value: score.efficiency_score, weight: 0.20, max: 200, label: 'Funding Efficiency' },
                geographic_need: { value: score.geographic_need_score, weight: 0.15, max: 150, label: 'Geographic Need' },
                transparency: { value: score.transparency_score, weight: 0.10, max: 100, label: 'Transparency' },
            },
            final_score: score.final_score,
            calculated_at: score.calculated_at,
            metadata: {
                project_count: score.project_count,
                total_beneficiaries: score.total_beneficiaries,
                total_budget: score.total_budget,
                total_spent: score.total_spent,
                persisted: score.persisted,
            },
        };

        // Optionally include score history
        if (includeHistory) {
            const history = await getOrgScoreHistory(orgId);
            response.history = history.scores;
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error('Impact score error:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve impact score' },
            { status: 500 }
        );
    }
}
