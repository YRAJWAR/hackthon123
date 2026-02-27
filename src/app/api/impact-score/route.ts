import { NextRequest, NextResponse } from 'next/server';
import { calculateDetailedScore, type ScoreInput } from '@/services/impactScoring';

export async function POST(request: NextRequest) {
    try {
        const body: ScoreInput = await request.json();
        const result = calculateDetailedScore(body);
        return NextResponse.json(result);
    } catch {
        return NextResponse.json({ error: 'Score calculation failed' }, { status: 500 });
    }
}
