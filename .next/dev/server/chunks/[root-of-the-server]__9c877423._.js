module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/services/sdgClassifierService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ──────────────────────────────────────────────────────────────
// SDG Classifier Service (Backend)
// OpenAI-first → local keyword fallback
// Returns top 3 SDGs with confidence scores
// ──────────────────────────────────────────────────────────────
// ─── Types ───────────────────────────────────────────────────
__turbopack_context__.s([
    "classifyProjectSDGs",
    ()=>classifyProjectSDGs,
    "getSDGName",
    ()=>getSDGName
]);
// ─── SDG Reference Data ──────────────────────────────────────
const SDG_NAMES = {
    1: 'No Poverty',
    2: 'Zero Hunger',
    3: 'Good Health and Well-Being',
    4: 'Quality Education',
    5: 'Gender Equality',
    6: 'Clean Water and Sanitation',
    7: 'Affordable and Clean Energy',
    8: 'Decent Work and Economic Growth',
    9: 'Industry, Innovation and Infrastructure',
    10: 'Reduced Inequalities',
    11: 'Sustainable Cities and Communities',
    12: 'Responsible Consumption and Production',
    13: 'Climate Action',
    14: 'Life Below Water',
    15: 'Life on Land',
    16: 'Peace, Justice and Strong Institutions',
    17: 'Partnerships for the Goals'
};
// ─── Keyword Map for Local Fallback ──────────────────────────
const SDG_KEYWORDS = {
    1: [
        'poverty',
        'poor',
        'income',
        'livelihood',
        'economic empowerment',
        'slum',
        'welfare',
        'microfinance',
        'social protection'
    ],
    2: [
        'hunger',
        'food',
        'nutrition',
        'agriculture',
        'farming',
        'crop',
        'meal',
        'malnutrition',
        'food security'
    ],
    3: [
        'health',
        'medical',
        'hospital',
        'clinic',
        'disease',
        'vaccine',
        'healthcare',
        'sanitation',
        'maternal',
        'mortality',
        'telemedicine',
        'mental health'
    ],
    4: [
        'education',
        'school',
        'learning',
        'literacy',
        'student',
        'training',
        'skill',
        'teacher',
        'digital literacy',
        'scholarship',
        'vocational'
    ],
    5: [
        'gender',
        'women',
        'girl',
        'female',
        'equality',
        'empowerment',
        'maternal',
        'domestic violence',
        'reproductive'
    ],
    6: [
        'water',
        'sanitation',
        'hygiene',
        'drinking',
        'purification',
        'clean water',
        'well',
        'borewell',
        'watershed',
        'sewage'
    ],
    7: [
        'energy',
        'solar',
        'renewable',
        'electricity',
        'power',
        'fuel',
        'clean energy',
        'biogas',
        'wind energy',
        'electrification'
    ],
    8: [
        'employment',
        'job',
        'work',
        'labour',
        'economic growth',
        'entrepreneur',
        'livelihood',
        'self-employment',
        'startup',
        'msme'
    ],
    9: [
        'infrastructure',
        'innovation',
        'industry',
        'technology',
        'manufacturing',
        'iot',
        'digital',
        'broadband',
        'connectivity',
        'r&d'
    ],
    10: [
        'inequality',
        'discrimination',
        'inclusion',
        'tribal',
        'marginalized',
        'vulnerable',
        'disability',
        'caste',
        'refugee'
    ],
    11: [
        'urban',
        'city',
        'sustainable city',
        'housing',
        'transport',
        'waste',
        'smart city',
        'slum rehabilitation',
        'public space'
    ],
    12: [
        'consumption',
        'recycling',
        'waste management',
        'sustainable',
        'circular economy',
        'reuse',
        'e-waste',
        'plastic reduction'
    ],
    13: [
        'climate',
        'carbon',
        'emission',
        'global warming',
        'environment',
        'green',
        'decarbonization',
        'adaptation',
        'resilience'
    ],
    14: [
        'ocean',
        'marine',
        'fish',
        'coastal',
        'sea',
        'aquatic',
        'plastic pollution',
        'coral',
        'mangrove'
    ],
    15: [
        'forest',
        'biodiversity',
        'land',
        'wildlife',
        'ecosystem',
        'tree',
        'plantation',
        'reforestation',
        'desertification'
    ],
    16: [
        'peace',
        'justice',
        'governance',
        'institution',
        'law',
        'corruption',
        'transparency',
        'accountability',
        'human rights'
    ],
    17: [
        'partnership',
        'collaboration',
        'cooperation',
        'international',
        'development',
        'multi-stakeholder',
        'capacity building'
    ]
};
// ─── OpenAI Classification ───────────────────────────────────
const OPENAI_SYSTEM_PROMPT = `You are an expert UN Sustainable Development Goals (SDG) classifier. Given a project description, classify it into the top 3 most relevant SDGs (numbered 1–17).

For each SDG, assign a confidence score between 0.0 and 1.0 indicating how strongly the project aligns with that goal.

Return ONLY valid JSON in this exact format:
{
  "classifications": [
    { "sdg_id": <number 1-17>, "confidence": <float 0.0-1.0> },
    { "sdg_id": <number 1-17>, "confidence": <float 0.0-1.0> },
    { "sdg_id": <number 1-17>, "confidence": <float 0.0-1.0> }
  ],
  "reasoning": "<one paragraph explaining why these SDGs were selected>"
}

Rules:
- Return exactly 3 SDGs
- Sort by confidence descending
- confidence must be between 0.0 and 1.0
- Do not include any text outside the JSON object`;
async function classifyWithOpenAI(description) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return null;
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: OPENAI_SYSTEM_PROMPT
                    },
                    {
                        role: 'user',
                        content: `Classify this project:\n\n${description}`
                    }
                ],
                temperature: 0.2,
                max_tokens: 500
            })
        });
        if (!response.ok) {
            console.error(`OpenAI API error: ${response.status} ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content?.trim();
        if (!content) return null;
        // Parse JSON — handle potential markdown code fences
        const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsed = JSON.parse(jsonStr);
        // Validate structure
        if (!parsed.classifications || !Array.isArray(parsed.classifications) || parsed.classifications.length === 0) {
            return null;
        }
        const classifications = parsed.classifications.slice(0, 3).map((c)=>({
                sdg_id: Math.min(17, Math.max(1, Math.round(c.sdg_id))),
                sdg_name: SDG_NAMES[Math.min(17, Math.max(1, Math.round(c.sdg_id)))] || 'Unknown',
                confidence: Math.min(1, Math.max(0, parseFloat(String(c.confidence))))
            }));
        return {
            sdg_tags: classifications.map((c)=>c.sdg_id),
            classifications,
            reasoning: parsed.reasoning || 'Classified by AI.',
            source: 'openai'
        };
    } catch (error) {
        console.error('OpenAI classification failed:', error);
        return null;
    }
}
// ─── Local Keyword Classifier ────────────────────────────────
function classifyLocally(description) {
    const desc = description.toLowerCase();
    const scores = [];
    for (const [sdgId, keywords] of Object.entries(SDG_KEYWORDS)){
        let score = 0;
        for (const kw of keywords){
            if (desc.includes(kw)) score += 1;
        }
        if (score > 0) {
            scores.push({
                sdg: parseInt(sdgId),
                score,
                maxPossible: keywords.length
            });
        }
    }
    scores.sort((a, b)=>b.score - a.score);
    const top3 = scores.slice(0, 3);
    // Fallback if nothing matched
    if (top3.length === 0) {
        top3.push({
            sdg: 17,
            score: 1,
            maxPossible: 1
        }, {
            sdg: 1,
            score: 1,
            maxPossible: 1
        });
    }
    const classifications = top3.map((s)=>({
            sdg_id: s.sdg,
            sdg_name: SDG_NAMES[s.sdg],
            confidence: parseFloat(Math.min(0.95, 0.5 + s.score / s.maxPossible * 0.45).toFixed(3))
        }));
    const sdg_tags = classifications.map((c)=>c.sdg_id);
    const reasons = classifications.map((c)=>`SDG ${c.sdg_id} (${c.sdg_name})`);
    return {
        sdg_tags,
        classifications,
        reasoning: `This project aligns with ${reasons.join(', ')} based on keyword analysis of its focus areas, target population, and expected outcomes.`,
        source: 'local'
    };
}
async function classifyProjectSDGs(description) {
    if (!description || description.trim().length < 10) {
        throw new Error('Project description must be at least 10 characters');
    }
    // 1. Try OpenAI
    const openaiResult = await classifyWithOpenAI(description);
    if (openaiResult) return openaiResult;
    // 2. Fallback to local
    return classifyLocally(description);
}
function getSDGName(id) {
    return SDG_NAMES[id] || 'Unknown';
}
}),
"[project]/src/data/povertyIndex.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock District-Level Poverty Index (0-100, higher = more poverty)
// Used for Geographic Need Score calculation
__turbopack_context__.s([
    "POVERTY_INDEX",
    ()=>POVERTY_INDEX,
    "getPovertyScore",
    ()=>getPovertyScore,
    "isUnderservedRegion",
    ()=>isUnderservedRegion
]);
const POVERTY_INDEX = {
    'jharkhand': 87,
    'bihar': 82,
    'odisha': 78,
    'madhya pradesh': 75,
    'uttar pradesh': 72,
    'assam': 70,
    'west bengal': 65,
    'rajasthan': 62,
    'maharashtra': 45,
    'tamil nadu': 40,
    'karnataka': 42,
    'telangana': 38,
    'gujarat': 35,
    'kerala': 30,
    'punjab': 32,
    'delhi': 25
};
function getPovertyScore(locationName) {
    const key = locationName.toLowerCase().trim();
    for (const [region, score] of Object.entries(POVERTY_INDEX)){
        if (key.includes(region) || region.includes(key)) {
            return score;
        }
    }
    return 50; // default mid-range
}
function isUnderservedRegion(locationName) {
    return getPovertyScore(locationName) >= 65;
}
}),
"[project]/src/services/impactScoring.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assessRisk",
    ()=>assessRisk,
    "calculateDetailedScore",
    ()=>calculateDetailedScore,
    "calculateImpactScore",
    ()=>calculateImpactScore,
    "calculateOrgImpactScore",
    ()=>calculateOrgImpactScore,
    "calculateProjectScore",
    ()=>calculateProjectScore,
    "getImpactPerRupee",
    ()=>getImpactPerRupee,
    "getScoreTrend",
    ()=>getScoreTrend
]);
// ============================================================
// Impact Scoring Engine — Enhanced
// Formula: (Scale × 0.30) + (Outcome × 0.25) + (Efficiency × 0.20) + (Geographic Need × 0.15) + (Transparency × 0.10)
// ============================================================
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$povertyIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/povertyIndex.ts [app-route] (ecmascript)");
;
// Sector medians for normalization
const SECTOR_MEDIAN_BENEFICIARIES = 20000;
const SECTOR_MEDIAN_COST_PER_BENEFICIARY = 500; // ₹500 per beneficiary
// Scale Score (0-300): (Beneficiaries / Sector Median) normalized and capped
function calculateScaleScore(beneficiaryCount) {
    const ratio = beneficiaryCount / SECTOR_MEDIAN_BENEFICIARIES;
    const normalized = Math.min(ratio, 1.5); // Cap at 1.5x median
    return Math.round(normalized / 1.5 * 300);
}
// Outcome Score (0-250): Normalized outcome improvement %
function calculateOutcomeScore(outcomeMetric, activitiesCount, status) {
    let base = outcomeMetric * 2; // 0-200 from outcome metric
    if (activitiesCount > 0) base += Math.min(activitiesCount * 5, 30); // bonus for activities
    if (status === 'completed') base += 20;
    return Math.min(Math.round(base), 250);
}
// Efficiency Score (0-200): (Beneficiaries / Budget) compared to sector median
function calculateEfficiencyScore(budgetUtilized, budgetAllocated, beneficiaries) {
    if (budgetAllocated === 0 || beneficiaries === 0) return 100;
    const costPerBeneficiary = budgetUtilized / beneficiaries;
    const efficiencyRatio = SECTOR_MEDIAN_COST_PER_BENEFICIARY / costPerBeneficiary;
    const normalized = Math.min(efficiencyRatio, 2.0); // Cap at 2x efficiency
    let score = Math.round(normalized / 2.0 * 160);
    // Budget utilization bonus (good if between 50-95%)
    const utilization = budgetUtilized / budgetAllocated;
    if (utilization >= 0.5 && utilization <= 0.95) score += 40;
    else if (utilization > 0.95) score += 20;
    return Math.min(score, 200);
}
// Geographic Need Score (0-150): Higher weight if poverty index is high
function calculateGeographicNeedScore(locationName) {
    const povertyScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$povertyIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPovertyScore"])(locationName);
    return Math.round(povertyScore / 100 * 150);
}
// Transparency Score (0-100): Based on verified activities, geo-tags, proof uploads
function calculateTransparencyScore(verifiedActivities, totalActivities, hasGeoTag, hasProofUploads) {
    let score = 0;
    // Verified activities component (0-60)
    if (totalActivities > 0) {
        score += Math.round(verifiedActivities / totalActivities * 60);
    } else {
        score += 30; // base score if no activities yet
    }
    // Geo-tag presence (0-20)
    if (hasGeoTag) score += 20;
    // Proof uploads (0-20)
    if (hasProofUploads) score += 20;
    return Math.min(score, 100);
}
function calculateDetailedScore(input) {
    const scaleScore = calculateScaleScore(input.beneficiaryCount);
    const outcomeScore = calculateOutcomeScore(input.outcomeMetricValue, input.activitiesCount, input.projectStatus);
    const efficiencyScore = calculateEfficiencyScore(input.budgetUtilized, input.budgetAllocated, input.beneficiaryCount);
    const geographicNeedScore = calculateGeographicNeedScore(input.locationName);
    const transparencyScore = calculateTransparencyScore(input.verifiedActivities, input.activitiesCount, input.hasGeoTag, input.hasProofUploads);
    const finalScore = Math.round(scaleScore * 0.30 + outcomeScore * 0.25 + efficiencyScore * 0.20 + geographicNeedScore * 0.15 + transparencyScore * 0.10);
    const rawScaleValue = input.beneficiaryCount;
    const rawOutcomeValue = input.outcomeMetricValue;
    const rawEfficiencyValue = input.beneficiaryCount > 0 ? input.budgetUtilized / input.beneficiaryCount : 0;
    const rawGeoValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$povertyIndex$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPovertyScore"])(input.locationName);
    const rawTransparencyValue = input.activitiesCount > 0 ? input.verifiedActivities / input.activitiesCount * 100 : 0;
    return {
        scaleScore,
        outcomeScore,
        efficiencyScore,
        geographicNeedScore,
        transparencyScore,
        finalScore,
        rawScaleValue,
        rawOutcomeValue,
        rawEfficiencyValue,
        rawGeoValue,
        rawTransparencyValue
    };
}
function calculateImpactScore(input) {
    return calculateDetailedScore(input).finalScore;
}
function calculateProjectScore(beneficiaryCount, budgetAllocated, budgetUtilized, locationName, activitiesCount, verifiedActivities, status) {
    return calculateImpactScore({
        beneficiaryCount,
        budgetAllocated,
        budgetUtilized,
        outcomeMetricValue: status === 'completed' ? 75 : 50,
        activitiesCount,
        verifiedActivities,
        hasGeoTag: true,
        hasProofUploads: verifiedActivities > 0,
        locationName,
        projectStatus: status
    });
}
function calculateOrgImpactScore(projectScores) {
    if (projectScores.length === 0) return 0;
    return Math.round(projectScores.reduce((sum, s)=>sum + s, 0) / projectScores.length);
}
function getImpactPerRupee(totalBudget, beneficiaries) {
    if (totalBudget === 0) return 0;
    return Math.round(beneficiaries / (totalBudget / 100000)); // Lives per ₹1 lakh
}
function getScoreTrend(orgId) {
    // Generate realistic trend data
    const baseScores = {
        'u1': 780,
        'org2': 830,
        'org3': 870,
        'org4': 750,
        'org5': 700,
        'org6': 760
    };
    const base = baseScores[orgId] || 700;
    const months = [
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb'
    ];
    return months.map((month, i)=>({
            month,
            score: Math.round(base + i * 12 + (Math.random() * 30 - 15)),
            efficiency: Math.round(60 + i * 3 + (Math.random() * 10 - 5))
        }));
}
function assessRisk(trend) {
    if (trend.length < 3) return {
        isAtRisk: false,
        riskType: 'none',
        riskLevel: 'low',
        message: 'Insufficient data'
    };
    const recent3 = trend.slice(-3);
    const efficiencyDeclining = recent3[0].efficiency > recent3[1].efficiency && recent3[1].efficiency > recent3[2].efficiency;
    const scoreDeclining = recent3[0].score > recent3[1].score && recent3[1].score > recent3[2].score;
    if (efficiencyDeclining && scoreDeclining) {
        return {
            isAtRisk: true,
            riskType: 'both',
            riskLevel: 'high',
            message: 'Efficiency and performance declining over 3 consecutive periods'
        };
    }
    if (efficiencyDeclining) {
        return {
            isAtRisk: true,
            riskType: 'efficiency_decline',
            riskLevel: 'medium',
            message: 'Efficiency declining over 3 consecutive periods'
        };
    }
    if (scoreDeclining) {
        return {
            isAtRisk: true,
            riskType: 'funding_decline',
            riskLevel: 'medium',
            message: 'Performance declining over 3 consecutive periods'
        };
    }
    return {
        isAtRisk: false,
        riskType: 'none',
        riskLevel: 'low',
        message: 'Performance stable'
    };
}
}),
"[project]/src/services/impactScoringService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOrgScore",
    ()=>getOrgScore,
    "getOrgScoreHistory",
    ()=>getOrgScoreHistory,
    "recalculateOrgScore",
    ()=>recalculateOrgScore
]);
// ──────────────────────────────────────────────────────────────
// Impact Scoring Service (Backend)
// Aggregates all project data for an organization, calculates
// the 5-component weighted score, and persists to ImpactScores table.
//
// Formula:
//   Final = (Scale × 0.30) + (Outcome × 0.25) + (Efficiency × 0.20)
//         + (Geographic Need × 0.15) + (Transparency × 0.10)
//
// Triggered on: project creation, activity added, funding updated
// ──────────────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/impactScoring.ts [app-route] (ecmascript)");
;
// ─── In-Memory Fallback Store ────────────────────────────────
// Used when DB is not connected
const scoreCache = new Map();
// ─── Core: Compute organization score from DB ────────────────
async function aggregateFromDB(orgId) {
    try {
        const prismaModule = await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)");
        const prisma = prismaModule.default;
        // 1. Fetch all projects for this org
        const projects = await prisma.project.findMany({
            where: {
                organization_id: orgId
            },
            include: {
                activities: true,
                sdg_tags: true
            }
        });
        if (projects.length === 0) return null;
        // 2. Aggregate metrics across all projects
        let totalBeneficiaries = 0;
        let totalBudget = 0;
        let totalSpent = 0;
        let totalOutcomeMetric = 0;
        let totalActivities = 0;
        let verifiedActivities = 0;
        let projectsWithGeo = 0;
        let projectsWithProof = 0;
        let completedProjects = 0;
        for (const proj of projects){
            totalBeneficiaries += proj.beneficiaries_count;
            totalBudget += Number(proj.budget_allocated);
            totalSpent += Number(proj.budget_utilized);
            totalOutcomeMetric += Number(proj.outcome_metric_value || 0);
            totalActivities += proj.activities.length;
            // Count verified activities (ones with proof)
            for (const act of proj.activities){
                if (act.proof_url) verifiedActivities++;
            }
            if (proj.latitude && proj.longitude) projectsWithGeo++;
            if (proj.activities.some((a)=>a.proof_url)) projectsWithProof++;
            ;
            if (proj.status === 'COMPLETED') completedProjects++;
        // Collect location info for geographic need
        // We'll use org state from the org record
        }
        // Average outcome metric across projects
        const avgOutcome = projects.length > 0 ? totalOutcomeMetric / projects.length : 50;
        const bestStatus = completedProjects > 0 ? 'completed' : 'active';
        // 3. Get org location for geographic need
        const org = await prisma.organization.findUnique({
            where: {
                id: orgId
            },
            select: {
                state: true,
                district: true
            }
        });
        const locationName = org?.district || org?.state || 'India';
        // 4. Calculate detailed score
        const input = {
            beneficiaryCount: totalBeneficiaries,
            budgetAllocated: totalBudget,
            budgetUtilized: totalSpent,
            outcomeMetricValue: avgOutcome,
            activitiesCount: totalActivities,
            verifiedActivities,
            hasGeoTag: projectsWithGeo > 0,
            hasProofUploads: projectsWithProof > 0,
            locationName,
            projectStatus: bestStatus
        };
        const detailed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateDetailedScore"])(input);
        const now = new Date().toISOString();
        // 5. Persist to ImpactScores table
        await prisma.impactScore.create({
            data: {
                organization_id: orgId,
                scale_score: detailed.scaleScore,
                outcome_score: detailed.outcomeScore,
                efficiency_score: detailed.efficiencyScore,
                geographic_need_score: detailed.geographicNeedScore,
                transparency_score: detailed.transparencyScore,
                final_score: detailed.finalScore,
                calculation_version: "2.0",
                raw_scale_value: detailed.rawScaleValue,
                raw_outcome_value: detailed.rawOutcomeValue,
                raw_efficiency_value: detailed.rawEfficiencyValue,
                raw_geo_value: detailed.rawGeoValue,
                raw_transparency_value: detailed.rawTransparencyValue
            }
        });
        const result = {
            organization_id: orgId,
            scale_score: detailed.scaleScore,
            outcome_score: detailed.outcomeScore,
            efficiency_score: detailed.efficiencyScore,
            geographic_need_score: detailed.geographicNeedScore,
            transparency_score: detailed.transparencyScore,
            final_score: detailed.finalScore,
            calculated_at: now,
            project_count: projects.length,
            total_beneficiaries: totalBeneficiaries,
            total_budget: totalBudget,
            total_spent: totalSpent,
            persisted: true
        };
        scoreCache.set(orgId, result);
        return result;
    } catch  {
        return null;
    }
}
// ─── In-Memory Calculation (when DB is not available) ────────
function aggregateInMemory(orgId, projectData) {
    const data = projectData || {
        beneficiaries: 10000,
        budget: 2000000,
        spent: 1500000,
        outcomeMetric: 65,
        activitiesCount: 5,
        verifiedActivities: 3,
        location: 'India',
        status: 'active',
        hasGeo: true,
        hasProof: true
    };
    const input = {
        beneficiaryCount: data.beneficiaries,
        budgetAllocated: data.budget,
        budgetUtilized: data.spent,
        outcomeMetricValue: data.outcomeMetric,
        activitiesCount: data.activitiesCount,
        verifiedActivities: data.verifiedActivities,
        hasGeoTag: data.hasGeo,
        hasProofUploads: data.hasProof,
        locationName: data.location,
        projectStatus: data.status
    };
    const detailed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateDetailedScore"])(input);
    const now = new Date().toISOString();
    const result = {
        organization_id: orgId,
        scale_score: detailed.scaleScore,
        outcome_score: detailed.outcomeScore,
        efficiency_score: detailed.efficiencyScore,
        geographic_need_score: detailed.geographicNeedScore,
        transparency_score: detailed.transparencyScore,
        final_score: detailed.finalScore,
        calculated_at: now,
        project_count: 1,
        total_beneficiaries: data.beneficiaries,
        total_budget: data.budget,
        total_spent: data.spent,
        persisted: false
    };
    scoreCache.set(orgId, result);
    return result;
}
async function recalculateOrgScore(orgId) {
    // Try DB-backed calculation first
    const dbResult = await aggregateFromDB(orgId);
    if (dbResult) return dbResult;
    // Fallback to cached or in-memory
    const cached = scoreCache.get(orgId);
    if (cached) return cached;
    return aggregateInMemory(orgId);
}
async function getOrgScore(orgId, force = false) {
    if (!force) {
        const cached = scoreCache.get(orgId);
        if (cached) return cached;
    }
    return recalculateOrgScore(orgId);
}
async function getOrgScoreHistory(orgId) {
    try {
        const prismaModule = await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)");
        const prisma = prismaModule.default;
        const scores = await prisma.impactScore.findMany({
            where: {
                organization_id: orgId
            },
            orderBy: {
                calculated_at: 'desc'
            },
            take: 20,
            select: {
                final_score: true,
                scale_score: true,
                outcome_score: true,
                efficiency_score: true,
                geographic_need_score: true,
                transparency_score: true,
                calculated_at: true
            }
        });
        return {
            scores: scores.map((s)=>({
                    final_score: Number(s.final_score),
                    scale_score: Number(s.scale_score),
                    outcome_score: Number(s.outcome_score),
                    efficiency_score: Number(s.efficiency_score),
                    geographic_need_score: Number(s.geographic_need_score),
                    transparency_score: Number(s.transparency_score),
                    calculated_at: s.calculated_at.toISOString()
                }))
        };
    } catch  {
        // Return cached score as single entry if DB unavailable
        const cached = scoreCache.get(orgId);
        if (cached) {
            return {
                scores: [
                    {
                        final_score: cached.final_score,
                        scale_score: cached.scale_score,
                        outcome_score: cached.outcome_score,
                        efficiency_score: cached.efficiency_score,
                        geographic_need_score: cached.geographic_need_score,
                        transparency_score: cached.transparency_score,
                        calculated_at: cached.calculated_at
                    }
                ]
            };
        }
        return {
            scores: []
        };
    }
}
}),
"[project]/src/server/config/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// ──────────────────────────────────────────────────────────────
// SDG Nexus — Environment Configuration
// Enterprise-grade config with validation
// ──────────────────────────────────────────────────────────────
const config = {
    // ─── Server ──────────────────────────────────────────────
    nodeEnv: ("TURBOPACK compile-time value", "development") || 'development',
    isProduction: ("TURBOPACK compile-time value", "development") === 'production',
    isDevelopment: ("TURBOPACK compile-time value", "development") !== 'production',
    // ─── Database ────────────────────────────────────────────
    databaseUrl: process.env.DATABASE_URL || '',
    // ─── JWT ─────────────────────────────────────────────────
    jwtSecret: process.env.JWT_SECRET || 'sdg-nexus-dev-secret-change-in-production',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
    jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '7d',
    // ─── Bcrypt ──────────────────────────────────────────────
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || '12', 10),
    // ─── Rate Limiting ───────────────────────────────────────
    rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW || '900000', 10),
    rateLimitMaxRequests: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
    rateLimitSensitiveMax: parseInt(process.env.RATE_LIMIT_SENSITIVE_MAX || '10', 10),
    // ─── Scoring ─────────────────────────────────────────────
    scoringVersion: process.env.SCORING_VERSION || '2.0',
    maxImpactScore: 1000,
    scoreRecalcBatchSize: parseInt(process.env.SCORE_RECALC_BATCH_SIZE || '50', 10),
    // ─── Background Jobs ─────────────────────────────────────
    riskScanIntervalMs: parseInt(process.env.RISK_SCAN_INTERVAL_MS || '86400000', 10),
    fundingGapRecalcIntervalMs: parseInt(process.env.FUNDING_GAP_RECALC_INTERVAL_MS || '86400000', 10),
    // ─── Pagination ──────────────────────────────────────────
    defaultPageSize: 20,
    maxPageSize: 100,
    // ─── OpenAI (optional) ───────────────────────────────────
    openaiApiKey: process.env.OPENAI_API_KEY || ''
};
const __TURBOPACK__default__export__ = config;
}),
"[project]/src/server/utils/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ──────────────────────────────────────────────────────────────
// SDG Nexus — Utility Functions
// Hashing, calculations, sanitization
// ──────────────────────────────────────────────────────────────
/**
 * Generate SHA-256 hash from content string.
 */ __turbopack_context__.s([
    "buildPaginationMeta",
    ()=>buildPaginationMeta,
    "capScore",
    ()=>capScore,
    "errorResponse",
    ()=>errorResponse,
    "logNormalize",
    ()=>logNormalize,
    "parsePagination",
    ()=>parsePagination,
    "sanitizeString",
    ()=>sanitizeString,
    "sha256",
    ()=>sha256,
    "successResponse",
    ()=>successResponse
]);
async function sha256(content) {
    const buffer = new TextEncoder().encode(content);
    const hashArray = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashArray)).map((b)=>b.toString(16).padStart(2, '0')).join('');
}
function sanitizeString(input) {
    return input.replace(/[<>]/g, '') // strip angle brackets
    .replace(/javascript:/gi, '') // strip js protocol
    .replace(/on\w+\s*=/gi, '') // strip inline event handlers
    .trim();
}
function logNormalize(value, median, maxScore = 100) {
    if (value <= 0) return 0;
    const normalized = Math.log10(value + 1) / Math.log10(median + 1) * (maxScore / 2);
    return Math.min(Math.round(normalized * 100) / 100, maxScore);
}
function capScore(score, min = 0, max = 100) {
    return Math.max(min, Math.min(max, Math.round(score * 100) / 100));
}
function parsePagination(searchParams, defaults = {
    page: 1,
    pageSize: 20,
    maxPageSize: 100
}) {
    const page = Math.max(1, parseInt(searchParams.get('page') || `${defaults.page}`, 10));
    const pageSize = Math.min(defaults.maxPageSize, Math.max(1, parseInt(searchParams.get('page_size') || `${defaults.pageSize}`, 10)));
    return {
        page,
        pageSize,
        skip: (page - 1) * pageSize
    };
}
function buildPaginationMeta(page, pageSize, total) {
    const totalPages = Math.ceil(total / pageSize);
    return {
        page,
        page_size: pageSize,
        total,
        total_pages: totalPages,
        has_next: page < totalPages,
        has_previous: page > 1
    };
}
function successResponse(data, meta) {
    return {
        success: true,
        data,
        meta,
        timestamp: new Date().toISOString()
    };
}
function errorResponse(message, errorCode, details) {
    return {
        success: false,
        error: {
            message,
            error_code: errorCode,
            details
        },
        timestamp: new Date().toISOString()
    };
}
}),
"[project]/src/server/types/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ──────────────────────────────────────────────────────────────
// SDG Nexus — Shared TypeScript Types
// Enterprise-grade type definitions
// ──────────────────────────────────────────────────────────────
// ─── Standard API Response ───────────────────────────────────
__turbopack_context__.s([
    "ERROR_CODES",
    ()=>ERROR_CODES
]);
const ERROR_CODES = {
    // Auth
    AUTH_REQUIRED: 'AUTH_REQUIRED',
    AUTH_INVALID_TOKEN: 'AUTH_INVALID_TOKEN',
    AUTH_EXPIRED_TOKEN: 'AUTH_EXPIRED_TOKEN',
    AUTH_INSUFFICIENT_ROLE: 'AUTH_INSUFFICIENT_ROLE',
    // Validation
    VALIDATION_FAILED: 'VALIDATION_FAILED',
    INVALID_INPUT: 'INVALID_INPUT',
    // Not Found
    NOT_FOUND: 'NOT_FOUND',
    ORG_NOT_FOUND: 'ORG_NOT_FOUND',
    PROJECT_NOT_FOUND: 'PROJECT_NOT_FOUND',
    // Conflict
    DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
    // Business Logic
    SCORE_CALCULATION_FAILED: 'SCORE_CALCULATION_FAILED',
    RISK_DETECTION_FAILED: 'RISK_DETECTION_FAILED',
    FUNDING_GAP_FAILED: 'FUNDING_GAP_FAILED',
    // Rate Limiting
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
    // IDOR
    ACCESS_DENIED: 'ACCESS_DENIED',
    // Internal
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    DB_UNAVAILABLE: 'DB_UNAVAILABLE'
};
}),
"[project]/src/server/middleware/errorHandler.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppError",
    ()=>AppError,
    "handleApiError",
    ()=>handleApiError
]);
// ──────────────────────────────────────────────────────────────
// SDG Nexus — Centralized Error Handling
// AppError class + error middleware + structured error responses
// ──────────────────────────────────────────────────────────────
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/config/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/utils/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/types/index.ts [app-route] (ecmascript)");
;
;
;
;
class AppError extends Error {
    statusCode;
    errorCode;
    details;
    isOperational;
    constructor(message, statusCode, errorCode, details){
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.details = details;
        this.isOperational = true;
        Object.setPrototypeOf(this, AppError.prototype);
    }
    static badRequest(message, details) {
        return new AppError(message, 400, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].VALIDATION_FAILED, details);
    }
    static unauthorized(message = 'Authentication required') {
        return new AppError(message, 401, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].AUTH_REQUIRED);
    }
    static forbidden(message = 'Insufficient permissions') {
        return new AppError(message, 403, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].AUTH_INSUFFICIENT_ROLE);
    }
    static notFound(entity) {
        return new AppError(`${entity} not found`, 404, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].NOT_FOUND);
    }
    static conflict(message) {
        return new AppError(message, 409, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].DUPLICATE_ENTRY);
    }
    static rateLimited() {
        return new AppError('Rate limit exceeded. Try again later.', 429, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].RATE_LIMIT_EXCEEDED);
    }
    static internal(message = 'Internal server error') {
        return new AppError(message, 500, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].INTERNAL_ERROR);
    }
}
function handleApiError(error) {
    // Known operational error
    if (error instanceof AppError) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(error.message, error.errorCode, error.details), {
            status: error.statusCode
        });
    }
    // Prisma-specific errors
    if (error && typeof error === 'object' && 'code' in error) {
        const prismaError = error;
        if (prismaError.code === 'P2002') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])('Duplicate entry', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].DUPLICATE_ENTRY, prismaError.meta?.target ? [
                `Unique constraint failed on: ${prismaError.meta.target.join(', ')}`
            ] : undefined), {
                status: 409
            });
        }
        if (prismaError.code === 'P2025') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])('Record not found', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].NOT_FOUND), {
                status: 404
            });
        }
    }
    // Unknown error
    const message = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isProduction ? 'Internal server error' : error instanceof Error ? error.message : 'Unknown error';
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].isProduction) {
        console.error('[SDG Nexus Error]', error);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorResponse"])(message, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$types$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ERROR_CODES"].INTERNAL_ERROR), {
        status: 500
    });
}
}),
"[project]/src/server/validators/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ──────────────────────────────────────────────────────────────
// SDG Nexus — Zod Validation Schemas
// All input validation for API payloads
// ──────────────────────────────────────────────────────────────
// Using a lightweight validation approach compatible with any runtime
// (Zod-like schema validation without the dependency)
__turbopack_context__.s([
    "validateActivityCreate",
    ()=>validateActivityCreate,
    "validateCSRAllocation",
    ()=>validateCSRAllocation,
    "validateDonationCreate",
    ()=>validateDonationCreate,
    "validateImpactScoreInput",
    ()=>validateImpactScoreInput,
    "validateOrganizationCreate",
    ()=>validateOrganizationCreate,
    "validateProjectCreate",
    ()=>validateProjectCreate
]);
function validateProjectCreate(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (!d.title || typeof d.title !== 'string' || d.title.trim().length < 3) errors.push('title: Required, minimum 3 characters');
    if (!d.description || typeof d.description !== 'string' || d.description.trim().length < 10) errors.push('description: Required, minimum 10 characters');
    if (!d.organization_id || typeof d.organization_id !== 'string' || d.organization_id.trim().length < 1) errors.push('organization_id: Required (UUID format)');
    if (d.budget_allocated == null || typeof d.budget_allocated !== 'number' || d.budget_allocated <= 0) errors.push('budget_allocated: Required, must be positive number');
    if (d.budget_utilized != null && (typeof d.budget_utilized !== 'number' || d.budget_utilized < 0)) errors.push('budget_utilized: Must be non-negative number');
    if (d.beneficiaries_count == null || typeof d.beneficiaries_count !== 'number' || d.beneficiaries_count < 0) errors.push('beneficiaries_count: Required, must be non-negative');
    if (d.outcome_metric_value != null && (typeof d.outcome_metric_value !== 'number' || d.outcome_metric_value < 0 || d.outcome_metric_value > 100)) errors.push('outcome_metric_value: Must be between 0 and 100');
    if (d.latitude != null && (typeof d.latitude !== 'number' || d.latitude < -90 || d.latitude > 90)) errors.push('latitude: Must be between -90 and 90');
    if (d.longitude != null && (typeof d.longitude !== 'number' || d.longitude < -180 || d.longitude > 180)) errors.push('longitude: Must be between -180 and 180');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
function validateActivityCreate(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (!d.project_id || typeof d.project_id !== 'string') errors.push('project_id: Required (UUID format)');
    if (!d.activity_title || typeof d.activity_title !== 'string' || d.activity_title.trim().length < 3) errors.push('activity_title: Required, minimum 3 characters');
    if (!d.description || typeof d.description !== 'string' || d.description.trim().length < 5) errors.push('description: Required, minimum 5 characters');
    if (d.proof_url != null && typeof d.proof_url === 'string' && d.proof_url.length > 500) errors.push('proof_url: Maximum 500 characters');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
function validateDonationCreate(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (!d.project_id || typeof d.project_id !== 'string') errors.push('project_id: Required (UUID format)');
    if (!d.donor_id || typeof d.donor_id !== 'string') errors.push('donor_id: Required (UUID format)');
    if (d.amount == null || typeof d.amount !== 'number' || d.amount <= 0) errors.push('amount: Required, must be positive number');
    if (typeof d.amount === 'number' && d.amount > 1_000_000_000) errors.push('amount: Exceeds maximum allowed value');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
function validateOrganizationCreate(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (!d.name || typeof d.name !== 'string' || d.name.trim().length < 2) errors.push('name: Required, minimum 2 characters');
    if (!d.type || ![
        'NGO',
        'CORPORATE',
        'GOVERNMENT'
    ].includes(d.type)) errors.push('type: Required, must be NGO, CORPORATE, or GOVERNMENT');
    if (!d.state || typeof d.state !== 'string') errors.push('state: Required');
    if (d.registration_number != null && typeof d.registration_number === 'string' && d.registration_number.length > 100) errors.push('registration_number: Maximum 100 characters');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
function validateCSRAllocation(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (!d.corporate_org_id || typeof d.corporate_org_id !== 'string') errors.push('corporate_org_id: Required (UUID format)');
    if (!d.project_id || typeof d.project_id !== 'string') errors.push('project_id: Required (UUID format)');
    if (d.amount_committed == null || typeof d.amount_committed !== 'number' || d.amount_committed <= 0) errors.push('amount_committed: Required, must be positive number');
    if (d.amount_disbursed != null && (typeof d.amount_disbursed !== 'number' || d.amount_disbursed < 0)) errors.push('amount_disbursed: Must be non-negative number');
    if (!d.financial_year || typeof d.financial_year !== 'string' || !/^\d{4}-\d{4}$/.test(d.financial_year)) errors.push('financial_year: Required, format YYYY-YYYY');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
function validateImpactScoreInput(data) {
    const errors = [];
    const d = data;
    if (!d || typeof d !== 'object') return {
        success: false,
        errors: [
            'Request body must be an object'
        ]
    };
    if (d.beneficiaries_count == null || typeof d.beneficiaries_count !== 'number' || d.beneficiaries_count < 0) errors.push('beneficiaries_count: Required, non-negative');
    if (d.budget_allocated == null || typeof d.budget_allocated !== 'number' || d.budget_allocated <= 0) errors.push('budget_allocated: Required, positive');
    if (d.budget_utilized == null || typeof d.budget_utilized !== 'number' || d.budget_utilized < 0) errors.push('budget_utilized: Required, non-negative');
    if (!d.location_name || typeof d.location_name !== 'string') errors.push('location_name: Required');
    if (errors.length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: d
    };
}
}),
"[project]/src/server/repositories/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ──────────────────────────────────────────────────────────────
// SDG Nexus — Database Repository Layer
// All Prisma database access goes through here.
// Services NEVER call Prisma directly.
// ──────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "activityRepo",
    ()=>activityRepo,
    "auditLogRepo",
    ()=>auditLogRepo,
    "donationRepo",
    ()=>donationRepo,
    "impactScoreRepo",
    ()=>impactScoreRepo,
    "organizationRepo",
    ()=>organizationRepo,
    "projectRepo",
    ()=>projectRepo,
    "riskFlagRepo",
    ()=>riskFlagRepo
]);
// Helper to get Prisma instance safely
async function getPrisma() {
    const mod = await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)");
    return mod.default;
}
const organizationRepo = {
    async findById (id) {
        const prisma = await getPrisma();
        return prisma.organization.findUnique({
            where: {
                id
            }
        });
    },
    async findAll (pagination, filters) {
        const prisma = await getPrisma();
        const where = {};
        if (filters?.type) where.type = filters.type;
        if (filters?.state) where.state = filters.state;
        if (filters?.status) where.verification_status = filters.status;
        const [items, total] = await Promise.all([
            prisma.organization.findMany({
                where,
                skip: (pagination.page - 1) * pagination.page_size,
                take: pagination.page_size,
                orderBy: {
                    name: 'asc'
                }
            }),
            prisma.organization.count({
                where
            })
        ]);
        return {
            items,
            total
        };
    },
    async create (data) {
        const prisma = await getPrisma();
        return prisma.organization.create({
            data: data
        });
    },
    async updateVerificationStatus (id, status) {
        const prisma = await getPrisma();
        return prisma.organization.update({
            where: {
                id
            },
            data: {
                verification_status: status
            }
        });
    }
};
const projectRepo = {
    async findById (id) {
        const prisma = await getPrisma();
        return prisma.project.findUnique({
            where: {
                id
            },
            include: {
                sdg_tags: {
                    include: {
                        sdg: true
                    }
                },
                organization: {
                    select: {
                        id: true,
                        name: true,
                        state: true,
                        district: true
                    }
                }
            }
        });
    },
    async findByOrgId (orgId) {
        const prisma = await getPrisma();
        return prisma.project.findMany({
            where: {
                organization_id: orgId
            },
            include: {
                sdg_tags: {
                    select: {
                        sdg_id: true
                    }
                },
                activities: {
                    select: {
                        id: true,
                        proof_url: true,
                        created_at: true
                    }
                }
            }
        });
    },
    async findAll (pagination, filters) {
        const prisma = await getPrisma();
        const where = {};
        if (filters?.status) where.status = filters.status;
        if (filters?.org_id) where.organization_id = filters.org_id;
        const [items, total] = await Promise.all([
            prisma.project.findMany({
                where,
                skip: (pagination.page - 1) * pagination.page_size,
                take: pagination.page_size,
                orderBy: {
                    created_at: 'desc'
                },
                include: {
                    sdg_tags: {
                        select: {
                            sdg_id: true
                        }
                    }
                }
            }),
            prisma.project.count({
                where
            })
        ]);
        return {
            items,
            total
        };
    },
    /**
     * Create project with SDG tags and initial activity in a single transaction.
     */ async createWithTransaction (data) {
        const prisma = await getPrisma();
        return prisma.$transaction(async (tx)=>{
            // 1. Create project
            const project = await tx.project.create({
                data: {
                    id: data.id,
                    organization_id: data.organization_id,
                    title: data.title,
                    description: data.description,
                    budget_allocated: data.budget_allocated,
                    budget_utilized: data.budget_utilized,
                    beneficiaries_count: data.beneficiaries_count,
                    outcome_metric_value: data.outcome_metric_value ?? null,
                    latitude: data.latitude ?? null,
                    longitude: data.longitude ?? null,
                    status: 'ACTIVE'
                }
            });
            // 2. Create SDG mappings
            for (const cls of data.sdg_classifications){
                await tx.projectSDG.create({
                    data: {
                        project_id: project.id,
                        sdg_id: cls.sdg_id,
                        ai_confidence_score: cls.confidence
                    }
                });
            }
            // 3. Create initial activity log
            await tx.projectActivity.create({
                data: {
                    project_id: project.id,
                    activity_title: 'Project Created',
                    description: data.activity_description,
                    latitude: data.latitude ?? null,
                    longitude: data.longitude ?? null,
                    hash_value: data.activity_hash
                }
            });
            return project;
        });
    }
};
const impactScoreRepo = {
    async findLatestByOrgId (orgId) {
        const prisma = await getPrisma();
        return prisma.impactScore.findFirst({
            where: {
                organization_id: orgId
            },
            orderBy: {
                calculated_at: 'desc'
            }
        });
    },
    async findHistoryByOrgId (orgId, limit = 10) {
        const prisma = await getPrisma();
        return prisma.impactScore.findMany({
            where: {
                organization_id: orgId
            },
            orderBy: {
                calculated_at: 'desc'
            },
            take: limit
        });
    },
    async create (data) {
        const prisma = await getPrisma();
        return prisma.impactScore.create({
            data: data
        });
    },
    async getLeaderboard (limit = 20) {
        const prisma = await getPrisma();
        const orgs = await prisma.organization.findMany({
            select: {
                id: true,
                name: true,
                type: true,
                impact_scores: {
                    orderBy: {
                        calculated_at: 'desc'
                    },
                    take: 1,
                    select: {
                        final_score: true,
                        transparency_score: true,
                        efficiency_score: true,
                        calculated_at: true
                    }
                }
            }
        });
        return orgs.filter((o)=>o.impact_scores.length > 0).map((o)=>({
                organization_id: o.id,
                organization_name: o.name,
                organization_type: o.type,
                final_score: Number(o.impact_scores[0].final_score),
                transparency_score: Number(o.impact_scores[0].transparency_score),
                efficiency_score: Number(o.impact_scores[0].efficiency_score),
                calculated_at: o.impact_scores[0].calculated_at
            })).sort((a, b)=>b.final_score - a.final_score).slice(0, limit);
    },
    async getAllOrgIds () {
        const prisma = await getPrisma();
        const orgs = await prisma.organization.findMany({
            select: {
                id: true
            }
        });
        return orgs.map((o)=>o.id);
    }
};
const donationRepo = {
    /**
     * Create donation + update project budget in a transaction.
     */ async createWithTransaction (data) {
        const prisma = await getPrisma();
        return prisma.$transaction(async (tx)=>{
            const project = await tx.project.findUnique({
                where: {
                    id: data.project_id
                },
                select: {
                    id: true,
                    organization_id: true,
                    budget_utilized: true
                }
            });
            if (!project) throw new Error('PROJECT_NOT_FOUND');
            const donation = await tx.donation.create({
                data: {
                    project_id: data.project_id,
                    donor_id: data.donor_id,
                    amount: data.amount
                }
            });
            await tx.project.update({
                where: {
                    id: data.project_id
                },
                data: {
                    budget_utilized: Number(project.budget_utilized) + data.amount
                }
            });
            return {
                donation,
                organizationId: project.organization_id
            };
        });
    }
};
const activityRepo = {
    async create (data) {
        const prisma = await getPrisma();
        return prisma.projectActivity.create({
            data: data
        });
    },
    async findByProjectId (projectId) {
        const prisma = await getPrisma();
        return prisma.projectActivity.findMany({
            where: {
                project_id: projectId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    },
    async getProjectOrgId (projectId) {
        const prisma = await getPrisma();
        const project = await prisma.project.findUnique({
            where: {
                id: projectId
            },
            select: {
                organization_id: true
            }
        });
        return project?.organization_id ?? null;
    }
};
const auditLogRepo = {
    async create (entry) {
        try {
            const prisma = await getPrisma();
            return await prisma.auditLog.create({
                data: {
                    actor_id: entry.actor_id,
                    actor_role: entry.actor_role,
                    action: entry.action,
                    entity_type: entry.entity_type,
                    entity_id: entry.entity_id,
                    previous_value: entry.previous_value ? JSON.stringify(entry.previous_value) : null,
                    new_value: entry.new_value ? JSON.stringify(entry.new_value) : null,
                    ip_address: entry.ip_address ?? null
                }
            });
        } catch  {
            // Audit logging should never break the main flow
            console.warn('[Audit] Failed to log:', entry.action, entry.entity_type, entry.entity_id);
            return null;
        }
    },
    async findByEntity (entityType, entityId) {
        try {
            const prisma = await getPrisma();
            return await prisma.auditLog.findMany({
                where: {
                    entity_type: entityType,
                    entity_id: entityId
                },
                orderBy: {
                    created_at: 'desc'
                },
                take: 50
            });
        } catch  {
            return [];
        }
    }
};
const riskFlagRepo = {
    async findByOrgId (orgId) {
        const prisma = await getPrisma();
        return prisma.riskFlag.findMany({
            where: {
                organization_id: orgId
            },
            orderBy: {
                created_at: 'desc'
            }
        });
    },
    async findUnresolved (orgId, riskType) {
        const prisma = await getPrisma();
        return prisma.riskFlag.findFirst({
            where: {
                organization_id: orgId,
                risk_type: riskType,
                resolved: false
            }
        });
    },
    async create (data) {
        const prisma = await getPrisma();
        return prisma.riskFlag.create({
            data: data
        });
    },
    async resolve (id) {
        const prisma = await getPrisma();
        return prisma.riskFlag.update({
            where: {
                id
            },
            data: {
                resolved: true
            }
        });
    }
};
}),
"[project]/src/app/api/projects/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sdgClassifierService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/sdgClassifierService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/impactScoring.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoringService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/impactScoringService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/middleware/errorHandler.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$validators$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/validators/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/repositories/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/utils/index.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        // ─── Validation ──────────────────────────────────────
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$validators$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateProjectCreate"])(body);
        if (!validation.success) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"].badRequest('Validation failed', validation.errors);
        }
        const input = validation.data;
        // ─── Sanitize inputs ─────────────────────────────────
        input.title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(input.title);
        input.description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(input.description);
        // ─── Step 1: AI SDG Classification ───────────────────
        let classification;
        try {
            classification = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sdgClassifierService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifyProjectSDGs"])(input.description);
        } catch  {
            classification = {
                sdg_tags: [
                    17
                ],
                classifications: [
                    {
                        sdg_id: 17,
                        sdg_name: 'Partnerships for the Goals',
                        confidence: 0.5
                    }
                ],
                reasoning: 'Default classification — SDG classifier encountered an error.',
                source: 'local'
            };
        }
        // ─── Step 2: Impact Score ────────────────────────────
        const impactScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoring$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateProjectScore"])(input.beneficiaries_count, input.budget_allocated, input.budget_utilized || 0, input.location_name || 'India', input.outcome_metric_value || 0, 0, 'active');
        // ─── Step 3: Transaction-safe DB persistence ─────────
        const projectId = crypto.randomUUID();
        const now = new Date().toISOString();
        const activityContent = `Project "${input.title}" created | Budget: ₹${input.budget_allocated.toLocaleString()} | Beneficiaries: ${input.beneficiaries_count.toLocaleString()} | SDGs: ${classification.sdg_tags.join(', ')}`;
        const activityHash = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sha256"])(activityContent + now);
        let savedToDb = false;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectRepo"].createWithTransaction({
                id: projectId,
                organization_id: input.organization_id,
                title: input.title,
                description: input.description,
                budget_allocated: input.budget_allocated,
                budget_utilized: input.budget_utilized || 0,
                beneficiaries_count: input.beneficiaries_count,
                outcome_metric_value: input.outcome_metric_value ?? null,
                latitude: input.latitude ?? null,
                longitude: input.longitude ?? null,
                sdg_classifications: classification.classifications,
                activity_description: activityContent,
                activity_hash: activityHash
            });
            savedToDb = true;
            // Recalculate org score after project creation
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$impactScoringService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recalculateOrgScore"])(input.organization_id);
            // Audit log
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auditLogRepo"].create({
                actor_id: input.organization_id,
                actor_role: 'NGO',
                action: 'PROJECT_CREATED',
                entity_type: 'Project',
                entity_id: projectId,
                new_value: {
                    title: input.title,
                    budget: input.budget_allocated,
                    sdgs: classification.sdg_tags
                }
            });
        } catch  {
            console.warn('Prisma DB not available — returning in-memory project response');
        }
        // ─── Step 4: Standardized response ───────────────────
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])({
            project: {
                id: projectId,
                title: input.title,
                description: input.description,
                organization_id: input.organization_id,
                budget_allocated: input.budget_allocated,
                budget_utilized: input.budget_utilized || 0,
                beneficiaries_count: input.beneficiaries_count,
                outcome_metric_value: input.outcome_metric_value,
                status: 'ACTIVE',
                impact_score: impactScore,
                sdg_tags: classification.sdg_tags,
                sdg_classifications: classification.classifications,
                sdg_reasoning: classification.reasoning,
                sdg_source: classification.source,
                created_at: now
            },
            persisted: savedToDb
        }), {
            status: 201
        });
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const { page, pageSize, skip } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePagination"])(searchParams);
        const status = searchParams.get('status') || undefined;
        const orgId = searchParams.get('org_id') || undefined;
        try {
            const { items, total } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$repositories$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectRepo"].findAll({
                page,
                page_size: pageSize
            }, {
                status,
                org_id: orgId
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(items, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginationMeta"])(page, pageSize, total)));
        } catch  {
            // DB unavailable fallback
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])([], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginationMeta"])(1, pageSize, 0)));
        }
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c877423._.js.map