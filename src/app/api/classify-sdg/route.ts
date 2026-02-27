import { NextRequest, NextResponse } from 'next/server';
import { classifyProjectSDGs } from '@/services/sdgClassifierService';

export async function POST(request: NextRequest) {
    try {
        const { description } = await request.json();

        if (!description || description.trim().length < 10) {
            return NextResponse.json(
                { error: 'Description must be at least 10 characters' },
                { status: 400 }
            );
        }

        const result = await classifyProjectSDGs(description);

        return NextResponse.json(result);
    } catch (error) {
        console.error('SDG classification error:', error);
        return NextResponse.json(
            { error: 'Classification failed' },
            { status: 500 }
        );
    }
}
