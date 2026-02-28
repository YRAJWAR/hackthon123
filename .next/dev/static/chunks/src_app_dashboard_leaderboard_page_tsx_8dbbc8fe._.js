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
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        style: {
                            color: '#0f172a'
                        },
                        children: "🏆 SDG Impact Leaderboard"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm mt-1",
                        style: {
                            color: '#64748b'
                        },
                        children: "Top SDG contributors ranked by impact score with badges and filters"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
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
                                    className: "text-xs font-medium mb-1 block",
                                    style: {
                                        color: '#64748b'
                                    },
                                    children: "Sort By"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        {
                                            key: 'impact',
                                            label: '🎯 Impact Score',
                                            color: '#3b82f6'
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
                                            className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
                                            style: {
                                                background: sortBy === opt.key ? opt.color + '15' : '#f8fafc',
                                                color: sortBy === opt.key ? opt.color : '#94a3b8',
                                                border: `1.5px solid ${sortBy === opt.key ? opt.color + '40' : '#e2e8f0'}`
                                            },
                                            children: opt.label
                                        }, opt.key, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium mb-1 block",
                                    style: {
                                        color: '#64748b'
                                    },
                                    children: "SDG Filter"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 82,
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
                                            lineNumber: 85,
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
                                                lineNumber: 86,
                                                columnNumber: 48
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-medium mb-1 block",
                                    style: {
                                        color: '#64748b'
                                    },
                                    children: "Region"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 90,
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
                                            lineNumber: 93,
                                            columnNumber: 29
                                        }, this),
                                        uniqueStates.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 52
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            filtered.length >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
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
                        className: "glass-card p-5 text-center",
                        style: i === 0 ? {
                            border: '2px solid #3b82f6',
                            boxShadow: '0 4px 16px rgba(59,130,246,0.1)'
                        } : undefined,
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
                                className: "w-14 h-14 rounded-full mx-auto mt-3 flex items-center justify-center text-xl font-bold text-slate-900",
                                style: {
                                    background: i === 0 ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : i === 1 ? 'linear-gradient(135deg, #94a3b8, #64748b)' : 'linear-gradient(135deg, #b45309, #a16207)'
                                },
                                children: ngo.name.charAt(0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 108,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold mt-3",
                                style: {
                                    color: '#0f172a'
                                },
                                children: ngo.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 116,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: ngo.location.state
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 117,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold mt-2",
                                style: {
                                    color: i === 0 ? '#3b82f6' : i === 1 ? '#64748b' : '#b45309'
                                },
                                children: ngo.impact_score
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px]",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: "Impact Score"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-1 mt-2",
                                children: getBadges(ngo.id).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] px-1.5 py-0.5 rounded-full",
                                        style: {
                                            background: '#eff6ff',
                                            color: '#3b82f6',
                                            border: '1px solid #bfdbfe'
                                        },
                                        children: b
                                    }, b, false, {
                                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 123,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-1 mt-2",
                                children: ngo.sdg_focus.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `sdg-${s} text-[9px] px-1.5 py-0.5 rounded`,
                                        children: [
                                            "SDG ",
                                            s
                                        ]
                                    }, s, true, {
                                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 131,
                                columnNumber: 29
                            }, this)
                        ]
                    }, ngo.id, true, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 105,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.2
                },
                className: "glass-card p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold",
                                style: {
                                    color: '#0f172a'
                                },
                                children: "All Organizations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 145,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: [
                                    filtered.length,
                                    " organizations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            filtered.map((ngo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        delay: 0.03 * i
                                    },
                                    className: "flex items-center gap-4 p-4 rounded-xl transition-all",
                                    style: {
                                        background: '#f8fafc',
                                        border: '1px solid #e2e8f0'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#f1f5f9';
                                        e.currentTarget.style.borderColor = '#cbd5e1';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = '#f8fafc';
                                        e.currentTarget.style.borderColor = '#e2e8f0';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold w-8 text-center",
                                            style: {
                                                color: '#94a3b8'
                                            },
                                            children: i < 3 ? medals[i] : `#${i + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-slate-900",
                                            style: {
                                                background: '#3b82f6'
                                            },
                                            children: ngo.name.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold truncate",
                                                            style: {
                                                                color: '#0f172a'
                                                            },
                                                            children: ngo.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 37
                                                        }, this),
                                                        getBadges(ngo.id).map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[8px] px-1.5 py-0.5 rounded-full whitespace-nowrap",
                                                                style: {
                                                                    background: b.includes('Top') ? '#eff6ff' : b.includes('Transparent') ? '#f5f3ff' : '#ecfdf5',
                                                                    color: b.includes('Top') ? '#3b82f6' : b.includes('Transparent') ? '#8b5cf6' : '#10b981'
                                                                },
                                                                children: b
                                                            }, b, false, {
                                                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 41
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: '#94a3b8'
                                                    },
                                                    children: [
                                                        ngo.location.state,
                                                        " • ",
                                                        ngo.projects_count,
                                                        " projects • ",
                                                        ngo.beneficiaries.toLocaleString(),
                                                        " beneficiaries"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1.5 flex-shrink-0",
                                            children: ngo.sdg_focus.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `sdg-${s} text-[10px] px-1.5 py-0.5 rounded`,
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right ml-2 flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold",
                                                    style: {
                                                        color: '#3b82f6'
                                                    },
                                                    children: ngo.impact_score
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-1.5 rounded-full overflow-hidden mt-1",
                                                    style: {
                                                        background: '#e2e8f0'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full",
                                                        style: {
                                                            width: `${ngo.impact_score / 1000 * 100}%`,
                                                            background: '#3b82f6'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, ngo.id, true, {
                                    fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this)),
                            filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-center py-8",
                                style: {
                                    color: '#94a3b8'
                                },
                                children: "No organizations match the selected filters"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                        lineNumber: 148,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/leaderboard/page.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(LeaderboardPage, "rAmCZ3kw9drp6Qfrov9RLtJo1ic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = LeaderboardPage;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_leaderboard_page_tsx_8dbbc8fe._.js.map