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
"[project]/src/app/api/public/organizations/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/middleware/errorHandler.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/utils/index.ts [app-route] (ecmascript)");
;
;
;
// ──────────────────────────────────────────────────────────────
// GET /api/public/organizations
// Public read-only listing of verified organizations.
// Sensitive financial details excluded.
// ──────────────────────────────────────────────────────────────
const FALLBACK_ORGS = [
    {
        id: 'u1',
        name: 'GreenFuture Foundation',
        type: 'NGO',
        state: 'Maharashtra',
        district: 'Mumbai',
        verification_status: 'VERIFIED',
        project_count: 3,
        total_beneficiaries: 80000,
        impact_score: 847,
        sdg_focus: [
            6,
            3,
            7,
            4
        ]
    },
    {
        id: 'org2',
        name: 'EcoIndia Trust',
        type: 'NGO',
        state: 'Karnataka',
        district: 'Bengaluru',
        verification_status: 'VERIFIED',
        project_count: 1,
        total_beneficiaries: 120000,
        impact_score: 890,
        sdg_focus: [
            11,
            12,
            13
        ]
    },
    {
        id: 'org3',
        name: 'HealthBridge India',
        type: 'NGO',
        state: 'Odisha',
        district: 'Koraput',
        verification_status: 'VERIFIED',
        project_count: 1,
        total_beneficiaries: 35000,
        impact_score: 935,
        sdg_focus: [
            3,
            1,
            10
        ]
    },
    {
        id: 'org4',
        name: 'BlueOcean NGO',
        type: 'NGO',
        state: 'Kerala',
        district: 'Kochi',
        verification_status: 'VERIFIED',
        project_count: 1,
        total_beneficiaries: 15000,
        impact_score: 802,
        sdg_focus: [
            14,
            12,
            13
        ]
    },
    {
        id: 'org5',
        name: 'EduRise Foundation',
        type: 'NGO',
        state: 'Delhi',
        district: null,
        verification_status: 'VERIFIED',
        project_count: 2,
        total_beneficiaries: 20000,
        impact_score: 768,
        sdg_focus: [
            4,
            5,
            8
        ]
    },
    {
        id: 'org6',
        name: 'AgroSustain India',
        type: 'NGO',
        state: 'Madhya Pradesh',
        district: 'Bhopal',
        verification_status: 'VERIFIED',
        project_count: 2,
        total_beneficiaries: 45000,
        impact_score: 812,
        sdg_focus: [
            2,
            1,
            15
        ]
    }
];
async function GET() {
    try {
        try {
            const prismaModule = await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)");
            const prisma = prismaModule.default;
            const orgs = await prisma.organization.findMany({
                where: {
                    verification_status: 'VERIFIED'
                },
                select: {
                    id: true,
                    name: true,
                    type: true,
                    state: true,
                    district: true,
                    verification_status: true,
                    projects: {
                        select: {
                            beneficiaries_count: true,
                            sdg_tags: {
                                select: {
                                    sdg_id: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    name: 'asc'
                }
            });
            if (orgs.length === 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])({
                    organizations: FALLBACK_ORGS
                }, {
                    source: 'fallback'
                }));
            }
            const orgIds = orgs.map((o)=>o.id);
            const scores = await prisma.impactScore.findMany({
                where: {
                    organization_id: {
                        in: orgIds
                    }
                },
                orderBy: {
                    calculated_at: 'desc'
                },
                distinct: [
                    'organization_id'
                ],
                select: {
                    organization_id: true,
                    final_score: true
                }
            });
            const scoreMap = new Map();
            for (const s of scores)scoreMap.set(s.organization_id, Number(s.final_score));
            const result = orgs.map((o)=>({
                    id: o.id,
                    name: o.name,
                    type: o.type,
                    state: o.state,
                    district: o.district,
                    verification_status: o.verification_status,
                    project_count: o.projects.length,
                    total_beneficiaries: o.projects.reduce((s, p)=>s + p.beneficiaries_count, 0),
                    impact_score: scoreMap.get(o.id) ?? 0,
                    sdg_focus: [
                        ...new Set(o.projects.flatMap((p)=>p.sdg_tags.map((t)=>t.sdg_id)))
                    ]
                }));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])({
                organizations: result
            }, {
                source: 'database'
            }));
        } catch  {
        // DB unavailable
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$utils$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["successResponse"])({
            organizations: FALLBACK_ORGS
        }, {
            source: 'fallback'
        }));
    } catch (error) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$middleware$2f$errorHandler$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleApiError"])(error);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9065cb67._.js.map