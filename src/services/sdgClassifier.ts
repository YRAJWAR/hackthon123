// SDG AI Classifier — Simulated OpenAI response
// In production, this would call the OpenAI API

import { SDG_INFO } from '@/data/mockData';

interface ClassificationResult {
    sdg_tags: number[];
    reasoning: string;
}

// Keyword maps for heuristic SDG classification
const SDG_KEYWORDS: Record<number, string[]> = {
    1: ['poverty', 'poor', 'income', 'livelihood', 'economic', 'slum', 'welfare'],
    2: ['hunger', 'food', 'nutrition', 'agriculture', 'farming', 'crop', 'meal'],
    3: ['health', 'medical', 'hospital', 'clinic', 'disease', 'vaccine', 'healthcare', 'sanitation', 'maternal'],
    4: ['education', 'school', 'learning', 'literacy', 'student', 'training', 'skill', 'teacher', 'digital'],
    5: ['gender', 'women', 'girl', 'female', 'equality', 'empowerment', 'maternal'],
    6: ['water', 'sanitation', 'hygiene', 'drinking', 'purification', 'clean water', 'well'],
    7: ['energy', 'solar', 'renewable', 'electricity', 'power', 'fuel', 'clean energy'],
    8: ['employment', 'job', 'work', 'labour', 'economic growth', 'entrepreneur', 'livelihood'],
    9: ['infrastructure', 'innovation', 'industry', 'technology', 'manufacturing', 'iot', 'digital'],
    10: ['inequality', 'discrimination', 'inclusion', 'tribal', 'marginalized', 'vulnerable'],
    11: ['urban', 'city', 'sustainable city', 'housing', 'transport', 'waste', 'smart city'],
    12: ['consumption', 'recycling', 'waste management', 'sustainable', 'circular economy'],
    13: ['climate', 'carbon', 'emission', 'global warming', 'environment', 'green'],
    14: ['ocean', 'marine', 'fish', 'coastal', 'sea', 'aquatic', 'plastic'],
    15: ['forest', 'biodiversity', 'land', 'wildlife', 'ecosystem', 'tree', 'plantation'],
    16: ['peace', 'justice', 'governance', 'institution', 'law', 'corruption', 'transparency'],
    17: ['partnership', 'collaboration', 'cooperation', 'international', 'development'],
};

export async function classifySDGs(description: string): Promise<ClassificationResult> {
    // Simulate 1.5s AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const desc = description.toLowerCase();
    const scores: { sdg: number; score: number }[] = [];

    for (const [sdgId, keywords] of Object.entries(SDG_KEYWORDS)) {
        let score = 0;
        for (const kw of keywords) {
            if (desc.includes(kw)) score += 1;
        }
        if (score > 0) scores.push({ sdg: parseInt(sdgId), score });
    }

    scores.sort((a, b) => b.score - a.score);
    const top3 = scores.slice(0, 3);

    if (top3.length === 0) {
        // Default if no keywords matched
        top3.push({ sdg: 1, score: 1 }, { sdg: 17, score: 1 });
    }

    const tags = top3.map(s => s.sdg);
    const reasons = tags.map(t => {
        const info = SDG_INFO.find(s => s.id === t);
        return `SDG ${t} (${info?.name})`;
    });

    return {
        sdg_tags: tags,
        reasoning: `This project aligns with ${reasons.join(', ')} based on its focus areas and target outcomes.`,
    };
}
