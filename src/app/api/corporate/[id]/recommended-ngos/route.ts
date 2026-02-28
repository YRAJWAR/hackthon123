import { NextResponse } from 'next/server';
import { handleApiError, AppError } from '@/server/middleware/errorHandler';
import { successResponse } from '@/server/utils';
import { getRecommendedNGOs } from '@/services/smartMatchingService';

// ──────────────────────────────────────────────────────────────
// GET /api/corporate/:id/recommended-ngos
// ──────────────────────────────────────────────────────────────
// Enterprise-grade:
// ✓ Input validation
// ✓ Structured responses
// ✓ Centralized error handling
// ──────────────────────────────────────────────────────────────

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        if (!id || id.trim().length === 0) {
            throw AppError.badRequest('Corporate organization ID is required');
        }

        const recommendations = await getRecommendedNGOs(id);

        return NextResponse.json(successResponse({
            corporate_id: id,
            recommendations: recommendations.slice(0, 5),
            total_matches: recommendations.length,
        }));
    } catch (error) {
        return handleApiError(error);
    }
}
