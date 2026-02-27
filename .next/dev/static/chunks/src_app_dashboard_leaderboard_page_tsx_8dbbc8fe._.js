(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/leaderboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/DataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LeaderboardPage() {
    _s();
    const { organizations } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('impact');
    const [sdgFilter, setSDGFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [regionFilter, setRegionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const medals = [
        '🥇',
        '🥈',
        '🥉'
    ];
    // Compute badges
    const badges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeaderboardPage.useMemo[badges]": ()=>{
            const sorted = [
                ...organizations
            ].sort({
                "LeaderboardPage.useMemo[badges].sorted": (a, b)=>b.impact_score - a.impact_score
            }["LeaderboardPage.useMemo[badges].sorted"]);
            const top = sorted[0]?.id;
            const mostTransparent = [
                ...organizations
            ].sort({
                "LeaderboardPage.useMemo[badges]": (a, b)=>b.projects_count - a.projects_count
            }["LeaderboardPage.useMemo[badges]"])[0]?.id;
            const highEff = [
                ...organizations
            ].sort({
                "LeaderboardPage.useMemo[badges]": (a, b)=>b.beneficiaries / (b.funding_need || 1) - a.beneficiaries / (a.funding_need || 1)
            }["LeaderboardPage.useMemo[badges]"])[0]?.id;
            return {
                topPerformer: top,
                mostTransparent,
                highestEfficiency: highEff
            };
        }
    }["LeaderboardPage.useMemo[badges]"], [
        organizations
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LeaderboardPage.useMemo[filtered]": ()=>{
            let list = [
                ...organizations
            ];
            if (sdgFilter) list = list.filter({
                "LeaderboardPage.useMemo[filtered]": (n)=>n.sdg_focus.includes(sdgFilter)
            }["LeaderboardPage.useMemo[filtered]"]);
            if (regionFilter) list = list.filter({
                "LeaderboardPage.useMemo[filtered]": (n)=>n.location.state.toLowerCase().includes(regionFilter.toLowerCase())
            }["LeaderboardPage.useMemo[filtered]"]);
            switch(sortBy){
                case 'impact':
                    list.sort({
                        "LeaderboardPage.useMemo[filtered]": (a, b)=>b.impact_score - a.impact_score
                    }["LeaderboardPage.useMemo[filtered]"]);
                    break;
                case 'efficiency':
                    list.sort({
                        "LeaderboardPage.useMemo[filtered]": (a, b)=>b.beneficiaries / (b.funding_need || 1) - a.beneficiaries / (a.funding_need || 1)
                    }["LeaderboardPage.useMemo[filtered]"]);
                    break;
                case 'transparency':
                    list.sort({
                        "LeaderboardPage.useMemo[filtered]": (a, b)=>b.projects_count - a.projects_count
                    }["LeaderboardPage.useMemo[filtered]"]);
                    break;
                case 'beneficiaries':
                    list.sort({
                        "LeaderboardPage.useMemo[filtered]": (a, b)=>b.beneficiaries - a.beneficiaries
                    }["LeaderboardPage.useMemo[filtered]"]);
                    break;
            }
            return list;
        }
    }["LeaderboardPage.useMemo[filtered]"], [
        organizations,
        sortBy,
        sdgFilter,
        regionFilter
    ]);
    const uniqueStates = [
        ...new Set(organizations.map((o)=>o.location.state))
    ].sort();
    function getBadges(id) {
        const b = [];
        if (badges.topPerformer === id) b.push('🏅 Top Performer');
        if (badges.mostTransparent === id) b.push('🔍 Most Transparent');
        if (badges.highestEfficiency === id) b.push('⚡ Highest Efficiency');
        return b;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 max-w-5xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-white",
                        children: "🏆 SDG Impact Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mt-1",
                        children: "Top SDG contributors ranked by impact score with badges and filters"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.05
                },
                className: "glass-card p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-end gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-gray-500 mb-1 block",
                                    children: "Sort By"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        {
                                            key: 'impact',
                                            label: '🎯 Impact Score',
                                            color: '#06b6d4'
                                        },
                                        {
                                            key: 'efficiency',
                                            label: '⚡ Efficiency',
                                            color: '#10b981'
                                        },
                                        {
                                            key: 'transparency',
                                            label: '🔍 Transparency',
                                            color: '#8b5cf6'
                                        },
                                        {
                                            key: 'beneficiaries',
                                            label: '👥 Beneficiaries',
                                            color: '#f59e0b'
                                        }
                                    ].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSortBy(opt.key),
                                            className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                                            style: {
                                                background: sortBy === opt.key ? opt.color + '20' : 'rgba(255,255,255,0.03)',
                                                color: sortBy === opt.key ? opt.color : '#94a3b8',
                                                border: `1px solid ${sortBy === opt.key ? opt.color + '40' : 'rgba(255,255,255,0.06)'}`
                                            },
                                            children: opt.label
                                        }, opt.key, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-gray-500 mb-1 block",
                                    children: "SDG Filter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: sdgFilter || '',
                                    onChange: (e)=>setSDGFilter(e.target.value ? parseInt(e.target.value) : null),
                                    className: "input-dark w-auto text-sm py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All SDGs"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s.id,
                                                children: [
                                                    s.icon,
                                                    " SDG ",
                                                    s.id,
                                                    ": ",
                                                    s.name
                                                ]
                                            }, s.id, true, {
                                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                lineNumber: 87,
                                                columnNumber: 48
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs text-gray-500 mb-1 block",
                                    children: "Region"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: regionFilter,
                                    onChange: (e)=>setRegionFilter(e.target.value),
                                    className: "input-dark w-auto text-sm py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "All Regions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this),
                                        uniqueStates.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                lineNumber: 95,
                                                columnNumber: 52
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            filtered.length >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.1
                },
                className: "grid grid-cols-3 gap-4",
                children: filtered.slice(0, 3).map((ngo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `glass-card p-5 text-center ${i === 0 ? 'glow-cyan' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: medals[i]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 107,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-full mx-auto mt-3 flex items-center justify-center text-xl font-bold",
                                style: {
                                    background: i === 0 ? 'linear-gradient(135deg, #f59e0b, #f43f5e)' : i === 1 ? 'linear-gradient(135deg, #94a3b8, #64748b)' : 'linear-gra