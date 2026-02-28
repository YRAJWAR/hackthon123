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
"[project]/src/app/api/classify-sdg/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sdgClassifierService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/sdgClassifierService.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/middleware/errorHandler.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/utils/index.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    try {
        const { description } = await request.json();
        if (!description || typeof description !== 'string' || description.trim().length < 10) {
            throw __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppError"].badRequest('Validation failed', [
                'description: Required, minimum 10 characters'
            ]);
        }
        const sanitized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeString"])(description);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$sdgClassifierService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["classifyProjectSDGs"])(sanitized);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])(result));
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dd5836e7._.js.map