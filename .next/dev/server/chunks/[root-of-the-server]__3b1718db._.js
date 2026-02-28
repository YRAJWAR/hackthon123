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
"[project]/src/app/api/public/organizations/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// ──────────────────────────────────────────────────────────────
// GET /api/public/organizations/:id
//
// Public read-only profile of a single organization.
// Returns: profile, impact score breakdown, SDG tags, transparency
//          level, geo impact data, project summaries (no financials).
// ──────────────────────────────────────────────────────────────
const FALLBACK_ORG = {
    id: 'u1',
    name: 'GreenFuture Foundation',
    type: 'NGO',
    state: 'Maharashtra',
    district: 'Mumbai',
    verification_status: 'VERIFIED',
    impact: {
        scale_score: 88,
        outcome_score: 85,
        efficiency_score: 79,
        geographic_need_score: 82,
        transparency_score: 92,
        final_score: 847,
        calculation_version: '2.0'
    },
    sdg_focus: [
        6,
        3,
        7,
        4
    ],
    transparency: {
        total_activities: 7,
        verified_activities: 5,
        verification_rate: 71,
        has_geo_tags: true,
        has_proof_uploads: true,
        level: 'High'
    },
    projects: [
        {
            id: 'p1',
            title: 'Clean Water for Rural Maharashtra',
            status: 'ACTIVE',
            beneficiaries: 25000,
            sdg_tags: [
                6,
                3,
                1
            ],
            location: 'Maharashtra'
        },
        {
            id: 'p2',
            title: 'Solar Schools Initiative',
            status: 'ACTIVE',
            beneficiaries: 50000,
            sdg_tags: [
                7,
                4,
                13
            ],
            location: 'Rajasthan'
        },
        {
            id: 'p3',
            title: 'Women Skill Development Program',
            status: 'ACTIVE',
            beneficiaries: 5000,
            sdg_tags: [
                5,
                8,
                4
            ],
            location: 'Bihar'
        }
    ],
    geo_impact: [
        {
            district: 'Mumbai',
            state: 'Maharashtra',
            sdg_id: 6,
            total_beneficiaries: 25000
        },
        {
            district: 'Jaipur',
            state: 'Rajasthan',
            sdg_id: 7,
            total_beneficiaries: 50000
        },
        {
            district: 'Patna',
            state: 'Bihar',
            sdg_id: 5,
            total_beneficiaries: 5000
        }
    ]
};
async function GET(req, { params }) {
    try {
        const { id } = await params;
        try {
            const prismaModule = await __turbopack_context__.A("[project]/src/lib/prisma.ts [app-route] (ecmascript, async loader)");
            const prisma = prismaModule.default;
            const org = await prisma.organization.findUnique({
                where: {
                    id
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
                            id: true,
                            title: true,
                            status: true,
                            beneficiaries_count: true,
                            latitude: true,
                            longitude: true,
                            sdg_tags: {
                                select: {
                                    sdg_id: true
                                }
                            },
                            activities: {
                                select: {
                                    proof_url: true,
                                    latitude: true,
                                    longitude: true
                                }
                            }
                        }
                    }
                }
            });
            if (!org) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Organization not found'
                }, {
                    status: 404
                });
            }
            // Impact score
            const score = await prisma.impactScore.findFirst({
                where: {
                    organization_id: id
                },
                orderBy: {
                    calculated_at: 'desc'
                }
            });
            // Transparency calculation
            let totalActivities = 0;
            let verifiedActivities = 0;
            let hasGeo = false;
            let hasProof = false;
            for (const proj of org.projects){
                for (const act of proj.activities){
                    totalActivities++;
                    if (act.proof_url) {
                        verifiedActivities++;
                        hasProof = true;
                    }
                    if (act.latitude && act.longitude) hasGeo = true;
                }
                if (proj.latitude && proj.longitude) hasGeo = true;
            }
            const verificationRate = totalActivities > 0 ? Math.round(verifiedActivities / totalActivities * 100) : 0;
            const transparencyLevel = verificationRate >= 80 ? 'Very High' : verificationRate >= 60 ? 'High' : verificationRate >= 40 ? 'Medium' : 'Low';
            // Build SDG focus
            const allSDGs = [
                ...new Set(org.projects.flatMap((p)=>p.sdg_tags.map((t)=>t.sdg_id)))
            ];
            // Geo impact
            const geoImpact = org.projects.map((p)=>({
                    project_title: p.title,
                    status: p.status,
                    beneficiaries: p.beneficiaries_count,
                    sdg_tags: p.sdg_tags.map((t)=>t.sdg_id),
                    latitude: p.latitude ? Number(p.latitude) : null,
                    longitude: p.longitude ? Number(p.longitude) : null
                }));
            // Project summaries (NO financials — budget/spent excluded)
            const projects = org.projects.map((p)=>({
                    id: p.id,
                    title: p.title,
                    status: p.status,
                    beneficiaries: p.beneficiaries_count,
                    sdg_tags: p.sdg_tags.map((t)=>t.sdg_id)
                }));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                id: org.id,
                name: org.name,
                type: org.type,
                state: org.state,
                district: org.district,
                verification_status: org.verification_status,
                impact: score ? {
                    scale_score: Number(score.scale_score),
                    outcome_score: Number(score.outcome_score),
                    efficiency_score: Number(score.efficiency_score),
                    geographic_need_score: Number(score.geographic_need_score),
                    transparency_score: Number(score.transparency_score),
                    final_score: Number(score.final_score),
                    calculation_version: score.calculation_version || '1.0'
                } : null,
                sdg_focus: allSDGs,
                transparency: {
                    total_activities: totalActivities,
                    verified_activities: verifiedActivities,
                    verification_rate: verificationRate,
                    has_geo_tags: hasGeo,
                    has_proof_uploads: hasProof,
                    level: transparencyLevel
                },
                projects,
                geo_impact: geoImpact,
                source: 'database'
            });
        } catch  {
        // DB unavailable
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...FALLBACK_ORG,
            source: 'fallback'
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch organization'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b1718db._.js.map