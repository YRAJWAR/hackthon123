import { NextResponse } from 'next/server';

// ──────────────────────────────────────────────────────────────
// GET /api/leaderboard
// Returns top 20 organizations ranked by final_score descending
// Includes: organization name, final_score, transparency_score,
//           efficiency_score
// ──────────────────────────────────────────────────────────────

interface LeaderboardEntry {
    rank: number;
    organization_id: string;
    organization_name: string;
    organization_type: string;
    final_score: number;
    transparency_score: number;
    efficiency_score: number;
    calculated_at: string;
}

// ─── In-memory fallback data ─────────────────────────────────

const FALLBACK_LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, organization_id: 'org3', organization_name: 'Rural Health Foundation', organization_type: 'NGO', final_score: 872, transparency_score: 95, efficiency_score: 180, calculated_at: new Date().toISOString() },
    { rank: 2, organization_id: 'org2', organization_name: 'EduReach India', organization_type: 'NGO', final_score: 834, transparency_score: 88, efficiency_score: 170, calculated_at: new Date().toISOString() },
    { rank: 3, organization_id: 'org1', organization_name: 'Swachh Bharat Initiative', organization_type: 'NGO', final_score: 780, transparency_score: 80, efficiency_score: 160, calculated_at: new Date().toISOString() },
    { rank: 4, organization_id: 'org5', organization_name: 'Infosys Foundation', organization_type: 'CORPORATE', final_score: 756, transparency_score: 75, efficiency_score: 155, calculated_at: new Date().toISOString() },
    { rank: 5, organization_id: 'org4', organization_name: 'AgroTech Solutions', organization_type: 'NGO', final_score: 745, transparency_score: 70, efficiency_score: 150, calculated_at: new Date().toISOString() },
    { rank: 6, organization_id: 'org6', organization_name: 'NITI Aayog SDG Cell', organization_type: 'GOVERNMENT', final_score: 720, transparency_score: 85, efficiency_score: 140, calculated_at: new Date().toISOString() },
];

export async function GET() {
    try {
        // Try DB-backed leaderboard
        try {
            const prismaModule = await import('@/lib/prisma');
            const prisma = prismaModule.default;

            // Get the latest impact score per organization using a subquery approach:
            // 1. Get all orgs with their most recent score
            const orgs = await prisma.organization.findMany({
                select: {
                    id: true,
                    name: true,
                    type: true,
                    impact_scores: {
                        orderBy: { calculated_at: 'desc' },
                        take: 1,
                        select: {
                            final_score: true,
                            transparency_score: true,
                            efficiency_score: true,
                            calculated_at: true,
                        },
                    },
                },
            });

            type OrgWithScores = {
                id: string;
                name: string;
                type: string;
                impact_scores: Array<{
                    final_score: unknown;
                    transparency_score: unknown;
                    efficiency_score: unknown;
                    calculated_at: Date;
                }>;
            };

            // Filter to only orgs with at least one score, flatten, sort, take 20
            const ranked = (orgs as OrgWithScores[])
                .filter(org => org.impact_scores.length > 0)
                .map(org => ({
                    organization_id: org.id,
                    organization_name: org.name,
                    organization_type: org.type,
                    final_score: Number(org.impact_scores[0].final_score),
                    transparency_score: Number(org.impact_scores[0].transparency_score),
                    efficiency_score: Number(org.impact_scores[0].efficiency_score),
                    calculated_at: org.impact_scores[0].calculated_at.toISOString(),
                }))
                .sort((a, b) => b.final_score - a.final_score)
                .slice(0, 20)
                .map((entry, i) => ({ rank: i + 1, ...entry }));

            if (ranked.length > 0) {
                return NextResponse.json({
                    leaderboard: ranked,
                    total: ranked.length,
                    source: 'database',
                });
            }
        } catch {
            // DB not available — fall through to fallback
        }

        // Fallback: return static demo data
        return NextResponse.json({
            leaderboard: FALLBACK_LEADERBOARD,
            total: FALLBACK_LEADERBOARD.length,
            source: 'fallback',
        });
    } catch (error) {
        console.error('Leaderboard error:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve leaderboard' },
            { status: 500 }
        );
    }
}
