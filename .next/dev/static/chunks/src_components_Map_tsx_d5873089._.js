(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SDGHeatmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const CircleMarker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.CircleMarker), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = CircleMarker;
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Popup), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c3 = Popup;
function normalize(value, min, max) {
    if (max === min) return 0.5;
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
}
function computeMetrics(regions) {
    const map = new Map();
    // Compute raw ranges
    const fundings = regions.map((r)=>r.funding);
    const bens = regions.map((r)=>r.beneficiaries);
    const ngos = regions.map((r)=>r.ngo_count);
    const projs = regions.map((r)=>r.projects);
    const efficiencies = regions.map((r)=>r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0);
    const [minF, maxF] = [
        Math.min(...fundings),
        Math.max(...fundings)
    ];
    const [minB, maxB] = [
        Math.min(...bens),
        Math.max(...bens)
    ];
    const [minN, maxN] = [
        Math.min(...ngos),
        Math.max(...ngos)
    ];
    const [minP, maxP] = [
        Math.min(...projs),
        Math.max(...projs)
    ];
    const [minE, maxE] = [
        Math.min(...efficiencies),
        Math.max(...efficiencies)
    ];
    // National averages for risk calculation
    const avgFundingPerBen = fundings.reduce((a, b)=>a + b, 0) / bens.reduce((a, b)=>a + b, 0);
    for (const r of regions){
        const fundingNorm = normalize(r.funding, minF, maxF);
        const beneficiaryNorm = normalize(r.beneficiaries, minB, maxB);
        const ngoDensityNorm = normalize(r.ngo_count, minN, maxN);
        const projectNorm = normalize(r.projects, minP, maxP);
        const eff = r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0;
        const efficiencyNorm = 1 - normalize(eff, minE, maxE); // lower cost = higher score
        // Composite: weighted multi-factor score
        const compositeScore = fundingNorm * 0.20 + beneficiaryNorm * 0.30 + ngoDensityNorm * 0.15 + projectNorm * 0.15 + efficiencyNorm * 0.20;
        // Density tier based on composite
        let densityTier;
        if (compositeScore >= 0.8) densityTier = 'critical';
        else if (compositeScore >= 0.6) densityTier = 'high';
        else if (compositeScore >= 0.4) densityTier = 'medium';
        else if (compositeScore >= 0.2) densityTier = 'low';
        else densityTier = 'minimal';
        // Risk: inverse — regions with low funding per beneficiary = high risk
        const localFPB = r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0;
        const riskLevel = Math.max(0, Math.min(1, 1 - localFPB / (avgFundingPerBen * 2)));
        map.set(r.name, {
            fundingNorm,
            beneficiaryNorm,
            ngoDensityNorm,
            projectNorm,
            efficiency: eff,
            efficiencyNorm,
            compositeScore,
            densityTier,
            riskLevel
        });
    }
    return map;
}
// ──────────────────────────────────────────────────────────────
// Color Engine — density-aware gradient
// ──────────────────────────────────────────────────────────────
function getDensityColor(intensity, mode) {
    // intensity is 0-1, higher = more intense / denser
    // Clamp
    const t = Math.max(0, Math.min(1, intensity));
    switch(mode){
        case 'composite':
            // Green to Yellow to Orange to Red gradient
            if (t < 0.25) return interpolateColor([
                34,
                197,
                94
            ], [
                34,
                197,
                94
            ], t / 0.25, 0.25 + t * 0.5);
            if (t < 0.5) return interpolateColor([
                34,
                197,
                94
            ], [
                250,
                204,
                21
            ], (t - 0.25) / 0.25, 0.45 + t * 0.3);
            if (t < 0.75) return interpolateColor([
                250,
                204,
                21
            ], [
                249,
                115,
                22
            ], (t - 0.5) / 0.25, 0.55 + t * 0.25);
            return interpolateColor([
                249,
                115,
                22
            ], [
                239,
                68,
                68
            ], (t - 0.75) / 0.25, 0.7 + t * 0.2);
        case 'funding':
            // Dark green to bright green to gold
            if (t < 0.5) return interpolateColor([
                22,
                163,
                74
            ], [
                34,
                197,
                94
            ], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([
                34,
                197,
                94
            ], [
                250,
                204,
                21
            ], (t - 0.5) / 0.5, 0.55 + t * 0.3);
        case 'beneficiaries':
            // Teal gradient
            if (t < 0.5) return interpolateColor([
                20,
                184,
                166
            ], [
                6,
                182,
                212
            ], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([
                6,
                182,
                212
            ], [
                56,
                189,
                248
            ], (t - 0.5) / 0.5, 0.55 + t * 0.35);
        case 'ngo_density':
            // Purple gradient
            if (t < 0.5) return interpolateColor([
                88,
                28,
                135
            ], [
                139,
                92,
                246
            ], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([
                139,
                92,
                246
            ], [
                196,
                181,
                253
            ], (t - 0.5) / 0.5, 0.55 + t * 0.35);
        case 'efficiency':
            // Blue gradient (high efficiency = blue, low = red)
            if (t >= 0.5) return interpolateColor([
                34,
                197,
                94
            ], [
                6,
                182,
                212
            ], (t - 0.5) / 0.5, 0.5 + t * 0.3);
            return interpolateColor([
                249,
                115,
                22
            ], [
                34,
                197,
                94
            ], t / 0.5, 0.4 + t * 0.3);
        case 'risk':
            // Green (safe) to red (high risk)
            if (t < 0.3) return interpolateColor([
                34,
                197,
                94
            ], [
                250,
                204,
                21
            ], t / 0.3, 0.3 + t * 0.5);
            if (t < 0.6) return interpolateColor([
                250,
                204,
                21
            ], [
                249,
                115,
                22
            ], (t - 0.3) / 0.3, 0.5 + t * 0.3);
            return interpolateColor([
                249,
                115,
                22
            ], [
                239,
                68,
                68
            ], (t - 0.6) / 0.4, 0.65 + t * 0.25);
        case 'sdg':
            return `rgba(139, 92, 246, ${0.3 + t * 0.65})`;
        default:
            return `rgba(34, 197, 94, ${0.3 + t * 0.65})`;
    }
}
function interpolateColor(from, to, t, alpha) {
    const r = Math.round(from[0] + (to[0] - from[0]) * t);
    const g = Math.round(from[1] + (to[1] - from[1]) * t);
    const b = Math.round(from[2] + (to[2] - from[2]) * t);
    return `rgba(${r}, ${g}, ${b}, ${Math.min(0.95, alpha)})`;
}
function getBorderColor(mode) {
    switch(mode){
        case 'composite':
            return '#f59e0b';
        case 'funding':
            return '#22c55e';
        case 'beneficiaries':
            return '#06b6d4';
        case 'ngo_density':
            return '#8b5cf6';
        case 'efficiency':
            return '#3b82f6';
        case 'risk':
            return '#ef4444';
        case 'sdg':
            return '#a855f7';
        default:
            return '#22c55e';
    }
}
// ──────────────────────────────────────────────────────────────
// Radius Engine — multi-variable sizing
// ──────────────────────────────────────────────────────────────
function getRadius(intensity, scale = 1) {
    // Non-linear scaling: sqrt makes small values more visible
    const base = 10 + Math.sqrt(intensity) * 32;
    return Math.max(8, Math.min(50, base * scale));
}
function SDGHeatmap({ regions, colorBy, selectedSDG, showLabels = true, intensityScale = 1 }) {
    _s();
    // Compute all region metrics
    const metricsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SDGHeatmap.useMemo[metricsMap]": ()=>computeMetrics(regions)
    }["SDGHeatmap.useMemo[metricsMap]"], [
        regions
    ]);
    // Filter by SDG
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SDGHeatmap.useMemo[filtered]": ()=>{
            return selectedSDG ? regions.filter({
                "SDGHeatmap.useMemo[filtered]": (r)=>r.primary_sdgs.includes(selectedSDG)
            }["SDGHeatmap.useMemo[filtered]"]) : regions;
        }
    }["SDGHeatmap.useMemo[filtered]"], [
        regions,
        selectedSDG
    ]);
    // Get intensity value for each region based on mode
    const getIntensity = (region)=>{
        const metrics = metricsMap.get(region.name);
        if (!metrics) return 0;
        switch(colorBy){
            case 'composite':
                return metrics.compositeScore;
            case 'funding':
                return metrics.fundingNorm;
            case 'beneficiaries':
                return metrics.beneficiaryNorm;
            case 'ngo_density':
                return metrics.ngoDensityNorm;
            case 'efficiency':
                return metrics.efficiencyNorm;
            case 'risk':
                return metrics.riskLevel;
            case 'sdg':
                return metrics.projectNorm;
            default:
                return metrics.compositeScore;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[600px] rounded-2xl overflow-hidden relative",
        style: {
            border: '1px solid #e2e8f0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                center: [
                    22.5,
                    78.9
                ],
                zoom: 5,
                style: {
                    width: '100%',
                    height: '100%',
                    background: '#0a0f1e'
                },
                scrollWheelZoom: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                        attribution: '© <a href="https://carto.com/">CARTO</a>',
                        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 230,
                        columnNumber: 17
                    }, this),
                    filtered.map((region)=>{
                        const intensity = getIntensity(region);
                        if (intensity < 0.6) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircleMarker, {
                            center: [
                                region.lat,
                                region.lng
                            ],
                            radius: getRadius(intensity, intensityScale) * 1.6,
                            pathOptions: {
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.08,
                                color: 'transparent',
                                weight: 0
                            }
                        }, `glow-${region.name}`, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 240,
                            columnNumber: 25
                        }, this);
                    }),
                    filtered.map((region)=>{
                        const intensity = getIntensity(region);
                        if (intensity < 0.35) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircleMarker, {
                            center: [
                                region.lat,
                                region.lng
                            ],
                            radius: getRadius(intensity, intensityScale) * 1.25,
                            pathOptions: {
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.15,
                                color: 'transparent',
                                weight: 0
                            }
                        }, `mid-${region.name}`, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 259,
                            columnNumber: 25
                        }, this);
                    }),
                    filtered.map((region)=>{
                        const intensity = getIntensity(region);
                        const metrics = metricsMap.get(region.name);
                        const radius = getRadius(intensity, intensityScale);
                        const tierColors = {
                            critical: '#ef4444',
                            high: '#f59e0b',
                            medium: '#22c55e',
                            low: '#06b6d4',
                            minimal: '#64748b'
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircleMarker, {
                            center: [
                                region.lat,
                                region.lng
                            ],
                            radius: radius,
                            pathOptions: {
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.75,
                                color: getBorderColor(colorBy),
                                weight: intensity > 0.6 ? 2.5 : 1.5,
                                opacity: 0.6 + intensity * 0.4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Popup, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: '#e2e8f0',
                                        minWidth: 260,
                                        fontFamily: 'Inter, system-ui, sans-serif'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontWeight: 800,
                                                        fontSize: 15,
                                                        color: '#ffffff',
                                                        margin: 0
                                                    },
                                                    children: region.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 41
                                                }, this),
                                                metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: 10,
                                                        padding: '3px 8px',
                                                        borderRadius: 8,
                                                        fontWeight: 700,
                                                        textTransform: 'uppercase',
                                                        background: tierColors[metrics.densityTier] + '25',
                                                        color: tierColors[metrics.densityTier],
                                                        border: `1px solid ${tierColors[metrics.densityTier]}40`
                                                    },
                                                    children: metrics.densityTier
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 298,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'grid',
                                                gridTemplateColumns: '1fr 1fr',
                                                gap: 6,
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                                    icon: "💰",
                                                    label: "Funding",
                                                    value: `₹${(region.funding / 100000).toFixed(1)}L`,
                                                    color: "#22c55e"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                                    icon: "👥",
                                                    label: "Beneficiaries",
                                                    value: region.beneficiaries.toLocaleString(),
                                                    color: "#06b6d4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                                    icon: "🏢",
                                                    label: "NGOs",
                                                    value: String(region.ngo_count),
                                                    color: "#8b5cf6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatItem, {
                                                    icon: "📁",
                                                    label: "Projects",
                                                    value: String(region.projects),
                                                    color: "#f59e0b"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 316,
                                            columnNumber: 37
                                        }, this),
                                        metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        fontSize: 10,
                                                        color: '#94a3b8',
                                                        marginBottom: 4
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Composite Score"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Map.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 700,
                                                                color: '#ffffff'
                                                            },
                                                            children: [
                                                                Math.round(metrics.compositeScore * 100),
                                                                "/100"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Map.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        height: 6,
                                                        borderRadius: 4,
                                                        background: 'rgba(255,255,255,0.1)',
                                                        overflow: 'hidden'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            height: '100%',
                                                            borderRadius: 4,
                                                            width: `${metrics.compositeScore * 100}%`,
                                                            background: `linear-gradient(90deg, #22c55e, ${metrics.compositeScore > 0.7 ? '#ef4444' : metrics.compositeScore > 0.4 ? '#f59e0b' : '#22c55e'})`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Map.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 330,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 325,
                                            columnNumber: 41
                                        }, this),
                                        metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 10
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBar, {
                                                    label: "Funding Intensity",
                                                    value: metrics.fundingNorm,
                                                    color: "#22c55e"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBar, {
                                                    label: "Beneficiary Reach",
                                                    value: metrics.beneficiaryNorm,
                                                    color: "#06b6d4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBar, {
                                                    label: "NGO Density",
                                                    value: metrics.ngoDensityNorm,
                                                    color: "#8b5cf6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBar, {
                                                    label: "Efficiency",
                                                    value: metrics.efficiencyNorm,
                                                    color: "#3b82f6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniBar, {
                                                    label: "Risk Level",
                                                    value: metrics.riskLevel,
                                                    color: "#ef4444"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 341,
                                            columnNumber: 41
                                        }, this),
                                        metrics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: 10,
                                                color: '#94a3b8',
                                                marginBottom: 8,
                                                padding: '6px 8px',
                                                borderRadius: 8,
                                                background: 'rgba(255,255,255,0.04)'
                                            },
                                            children: [
                                                "⚡ ₹",
                                                Math.round(metrics.efficiency).toLocaleString(),
                                                " per beneficiary",
                                                metrics.efficiency < 50 ? ' — Excellent' : metrics.efficiency < 100 ? ' — Good' : ' — Needs attention'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 352,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 10,
                                                        color: '#64748b',
                                                        marginBottom: 4
                                                    },
                                                    children: "SDG Focus:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: 4,
                                                        flexWrap: 'wrap'
                                                    },
                                                    children: region.primary_sdgs.map((s)=>{
                                                        const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].find((i)=>i.id === s);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: 10,
                                                                padding: '2px 8px',
                                                                borderRadius: 6,
                                                                background: (info?.color || '#666') + '30',
                                                                color: info?.color || '#fff',
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                info?.icon,
                                                                " SDG ",
                                                                s
                                                            ]
                                                        }, s, true, {
                                                            fileName: "[project]/src/components/Map.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 53
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Map.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Map.tsx",
                                            lineNumber: 359,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Map.tsx",
                                    lineNumber: 296,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Map.tsx",
                                lineNumber: 295,
                                columnNumber: 29
                            }, this)
                        }, region.name, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 283,
                            columnNumber: 25
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                    background: 'rgba(15, 23, 42, 0.92)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 12,
                    padding: '12px 16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    minWidth: 180
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: 10,
                            fontWeight: 700,
                            color: '#94a3b8',
                            marginBottom: 8,
                            textTransform: 'uppercase',
                            letterSpacing: 1
                        },
                        children: colorBy === 'composite' ? '🔥 Composite Density' : colorBy === 'funding' ? '💰 Funding Intensity' : colorBy === 'beneficiaries' ? '👥 Beneficiary Reach' : colorBy === 'ngo_density' ? '🏢 NGO Density' : colorBy === 'efficiency' ? '⚡ Efficiency Score' : colorBy === 'risk' ? '⚠️ Risk Level' : '🎯 SDG Focus'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9,
                                    color: '#64748b'
                                },
                                children: "Low"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Map.tsx",
                                lineNumber: 401,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    height: 8,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    background: colorBy === 'composite' ? 'linear-gradient(90deg, #22c55e, #facc15, #f97316, #ef4444)' : colorBy === 'funding' ? 'linear-gradient(90deg, #166534, #22c55e, #facc15)' : colorBy === 'beneficiaries' ? 'linear-gradient(90deg, #14b8a6, #06b6d4, #38bdf8)' : colorBy === 'ngo_density' ? 'linear-gradient(90deg, #581c87, #8b5cf6, #c4b5fd)' : colorBy === 'efficiency' ? 'linear-gradient(90deg, #f97316, #22c55e, #06b6d4)' : colorBy === 'risk' ? 'linear-gradient(90deg, #22c55e, #facc15, #f97316, #ef4444)' : 'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(139,92,246,0.95))'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Map.tsx",
                                lineNumber: 402,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: 9,
                                    color: '#64748b'
                                },
                                children: "High"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Map.tsx",
                                lineNumber: 412,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 400,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: 8
                        },
                        children: [
                            {
                                label: 'Minimal',
                                color: '#64748b'
                            },
                            {
                                label: 'Low',
                                color: '#06b6d4'
                            },
                            {
                                label: 'Med',
                                color: '#22c55e'
                            },
                            {
                                label: 'High',
                                color: '#f59e0b'
                            },
                            {
                                label: 'Critical',
                                color: '#ef4444'
                            }
                        ].map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: tier.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Map.tsx",
                                        lineNumber: 425,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 8,
                                            color: '#64748b'
                                        },
                                        children: tier.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Map.tsx",
                                        lineNumber: 426,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, tier.label, true, {
                                fileName: "[project]/src/components/Map.tsx",
                                lineNumber: 424,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 416,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 385,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    zIndex: 1000,
                    background: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 12,
                    padding: '10px 14px',
                    border: '1px solid rgba(255,255,255,0.1)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                            label: "Regions",
                            value: String(filtered.length)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 440,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                            label: "Total ₹",
                            value: `${(filtered.reduce((s, r)=>s + r.funding, 0) / 10000000).toFixed(1)}Cr`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 441,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                            label: "Beneficiaries",
                            value: `${(filtered.reduce((s, r)=>s + r.beneficiaries, 0) / 1000).toFixed(0)}K`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 442,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MiniStat, {
                            label: "NGOs",
                            value: String(filtered.reduce((s, r)=>s + r.ngo_count, 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Map.tsx",
                            lineNumber: 443,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Map.tsx",
                    lineNumber: 439,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 433,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 221,
        columnNumber: 9
    }, this);
}
_s(SDGHeatmap, "yhYto38CcbGPjBfat/hXjsVGvMc=");
_c4 = SDGHeatmap;
// ──────────────────────────────────────────────────────────────
// Sub-components for popups
// ──────────────────────────────────────────────────────────────
function StatItem({ icon, label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '6px 8px',
            borderRadius: 8,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 10,
                    color: '#64748b'
                },
                children: [
                    icon,
                    " ",
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 461,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    fontWeight: 700,
                    color
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 462,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 456,
        columnNumber: 9
    }, this);
}
_c5 = StatItem;
function MiniBar({ label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginBottom: 4
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 9,
                    color: '#64748b',
                    marginBottom: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 471,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#94a3b8',
                            fontWeight: 600
                        },
                        children: [
                            Math.round(value * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Map.tsx",
                        lineNumber: 472,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 470,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 3,
                    borderRadius: 2,
                    background: 'rgba(255,255,255,0.08)',
                    overflow: 'hidden'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        height: '100%',
                        borderRadius: 2,
                        width: `${value * 100}%`,
                        background: color,
                        transition: 'width 0.6s'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Map.tsx",
                    lineNumber: 475,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 474,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 469,
        columnNumber: 9
    }, this);
}
_c6 = MiniBar;
function MiniStat({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    fontWeight: 800,
                    color: '#ffffff'
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 484,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 8,
                    color: '#64748b',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Map.tsx",
                lineNumber: 485,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Map.tsx",
        lineNumber: 483,
        columnNumber: 9
    }, this);
}
_c7 = MiniStat;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "CircleMarker");
__turbopack_context__.k.register(_c3, "Popup");
__turbopack_context__.k.register(_c4, "SDGHeatmap");
__turbopack_context__.k.register(_c5, "StatItem");
__turbopack_context__.k.register(_c6, "MiniBar");
__turbopack_context__.k.register(_c7, "MiniStat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_Map_tsx_d5873089._.js.map