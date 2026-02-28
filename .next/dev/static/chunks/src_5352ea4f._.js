(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/ImpactGauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImpactGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ImpactGauge({ score, maxScore = 1000, size = 180, label = 'Impact Score' }) {
    _s();
    const [animated, setAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const percentage = score / maxScore * 100;
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - animated / 100 * circumference;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImpactGauge.useEffect": ()=>{
            const timer = setTimeout({
                "ImpactGauge.useEffect.timer": ()=>setAnimated(percentage)
            }["ImpactGauge.useEffect.timer"], 200);
            return ({
                "ImpactGauge.useEffect": ()=>clearTimeout(timer)
            })["ImpactGauge.useEffect"];
        }
    }["ImpactGauge.useEffect"], [
        percentage
    ]);
    const getColor = ()=>{
        if (percentage >= 80) return '#10b981';
        if (percentage >= 60) return '#06b6d4';
        if (percentage >= 40) return '#f59e0b';
        return '#f43f5e';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    width: size,
                    height: size
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: size,
                        height: size,
                        className: "-rotate-90",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: size / 2,
                                cy: size / 2,
                                r: radius,
                                fill: "none",
                                stroke: "rgba(255,255,255,0.05)",
                                strokeWidth: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: size / 2,
                                cy: size / 2,
                                r: radius,
                                fill: "none",
                                stroke: getColor(),
                                strokeWidth: "10",
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                strokeDashoffset: offset,
                                style: {
                                    transition: 'stroke-dashoffset 1.5s ease-out',
                                    filter: `drop-shadow(0 0 6px ${getColor()}40)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl font-bold",
                                style: {
                                    color: getColor()
                                },
                                children: score
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "/ ",
                                    maxScore
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-gray-400 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ImpactGauge.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/ImpactGauge.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(ImpactGauge, "OcUzDGx+9B4WN1Q0XyNL7W8Xw5k=");
_c = ImpactGauge;
var _c;
__turbopack_context__.k.register(_c, "ImpactGauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SDGBarChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SDGBarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
'use client';
;
;
;
function SDGBarChart({ data, height = 300 }) {
    const chartData = data.map((d)=>({
            name: `SDG ${d.sdg}`,
            score: d.score,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].find((s)=>s.id === d.sdg)?.color || '#06b6d4',
            fullName: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].find((s)=>s.id === d.sdg)?.name || `SDG ${d.sdg}`
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
        width: "100%",
        height: height,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
            data: chartData,
            margin: {
                top: 10,
                right: 10,
                left: -10,
                bottom: 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                    strokeDasharray: "3 3",
                    stroke: "rgba(255,255,255,0.05)"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                    dataKey: "name",
                    tick: {
                        fill: '#64748b',
                        fontSize: 11
                    },
                    axisLine: {
                        stroke: 'rgba(255,255,255,0.1)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                    tick: {
                        fill: '#64748b',
                        fontSize: 11
                    },
                    axisLine: {
                        stroke: 'rgba(255,255,255,0.1)'
                    },
                    domain: [
                        0,
                        1000
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    contentStyle: {
                        background: 'rgba(17,24,39,0.95)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 12,
                        color: '#e2e8f0'
                    },
                    formatter: (value, _name, props)=>[
                            `${value} / 1000`,
                            props?.payload?.fullName ?? ''
                        ]
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                    dataKey: "score",
                    radius: [
                        6,
                        6,
                        0,
                        0
                    ],
                    barSize: 32,
                    children: chartData.map((entry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                            fill: entry.color,
                            fillOpacity: 0.8
                        }, idx, false, {
                            fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/SDGBarChart.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/SDGBarChart.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/SDGBarChart.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_c = SDGBarChart;
var _c;
__turbopack_context__.k.register(_c, "SDGBarChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AnimatedCounter({ target, duration = 2000, prefix = '', suffix = '', decimals = 0 }) {
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval({
                "AnimatedCounter.useEffect.timer": ()=>{
                    start += increment;
                    if (start >= target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }
            }["AnimatedCounter.useEffect.timer"], 16);
            return ({
                "AnimatedCounter.useEffect": ()=>clearInterval(timer)
            })["AnimatedCounter.useEffect"];
        }
    }["AnimatedCounter.useEffect"], [
        target,
        duration
    ]);
    const formatted = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString('en-IN');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums font-bold",
        children: [
            prefix,
            formatted,
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnimatedCounter.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(AnimatedCounter, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = AnimatedCounter;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/reportGenerator.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateImpactReport",
    ()=>generateImpactReport
]);
// PDF Report Generator using jsPDF
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
;
;
function generateImpactReport(data) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    const pageWidth = doc.internal.pageSize.getWidth();
    // Brand Colors (Typed as Tuples for jsPDF)
    const primaryBlue = [
        59,
        130,
        246
    ]; // #3b82f6
    const darkSlate = [
        15,
        23,
        42
    ]; // #0f172a
    const lightSlate = [
        100,
        116,
        139
    ]; // #64748b
    const muttedSlate = [
        148,
        163,
        184
    ]; // #94a3b8
    const surfaceGray = [
        241,
        245,
        249
    ]; // #f1f5f9
    // Header (Light Surface with Blue Accents)
    doc.setFillColor(...surfaceGray);
    doc.rect(0, 0, pageWidth, 45, 'F');
    doc.setDrawColor(...primaryBlue);
    doc.setLineWidth(1.5);
    doc.line(15, 40, pageWidth - 15, 40);
    doc.setTextColor(...primaryBlue);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('SDG Nexus', 15, 22);
    doc.setFontSize(10);
    doc.setTextColor(...lightSlate);
    doc.setFont('helvetica', 'normal');
    doc.text('Impact Assessment & SDG Intelligence Report', 15, 30);
    doc.setFontSize(8);
    doc.text(`ID: NEX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, 15, 36);
    // Org Info
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(data.organizationName, pageWidth - 15, 22, {
        align: 'right'
    });
    doc.setFontSize(10);
    doc.setTextColor(...primaryBlue);
    doc.text(data.role.toUpperCase() + ' PORTFOLIO', pageWidth - 15, 30, {
        align: 'right'
    });
    doc.setFontSize(8);
    doc.setTextColor(...muttedSlate);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}`, pageWidth - 15, 36, {
        align: 'right'
    });
    // Summary Section
    let y = 60;
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Executive Impact Summary', 15, y);
    y += 10;
    const summaryData = [
        [
            'Total Projects Managed',
            data.projects.length.toString()
        ],
        [
            'Total Lives Impacted',
            data.totalBeneficiaries.toLocaleString()
        ],
        [
            'Total Capital Allocated',
            `₹${(data.totalBudget / 100000).toFixed(1)} Lakhs`
        ],
        [
            'Total Capital Utilized',
            `₹${(data.totalSpent / 100000).toFixed(1)} Lakhs`
        ],
        [
            'Utilization Efficiency',
            `${data.totalBudget > 0 ? (data.totalSpent / data.totalBudget * 100).toFixed(1) : 0}%`
        ],
        [
            'Portfolio Health',
            data.projects.every((p)=>p.status === 'completed' || p.status === 'active') ? 'OPTIMAL' : 'REQUIRES ATTENTION'
        ]
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: y,
        head: [
            [
                'Strategic Metric',
                'Certified Value'
            ]
        ],
        body: summaryData,
        theme: 'striped',
        headStyles: {
            fillColor: primaryBlue,
            textColor: [
                255,
                255,
                255
            ],
            fontSize: 10,
            fontStyle: 'bold'
        },
        bodyStyles: {
            textColor: darkSlate,
            fontSize: 10
        },
        alternateRowStyles: {
            fillColor: [
                250,
                250,
                250
            ]
        },
        styles: {
            cellPadding: 5
        },
        columnStyles: {
            0: {
                fontStyle: 'bold',
                cellWidth: 100
            }
        },
        margin: {
            left: 15,
            right: 15
        }
    });
    // Impact Score Breakdown
    y = doc.lastAutoTable.finalY + 18;
    if (data.impactScore) {
        if (y > 240) {
            doc.addPage();
            y = 20;
        }
        doc.setTextColor(...darkSlate);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Verified Impact Performance', 15, y);
        y += 10;
        const scoreData = [
            [
                'Overall Final Score',
                `${data.impactScore.overall_score} / 1000`
            ],
            [
                'Beneficiary Reach Scale',
                `${data.impactScore.beneficiary_scale}%`
            ],
            [
                'Outcome Verification',
                `${data.impactScore.outcome_score}%`
            ],
            [
                'Geographic Need Index',
                `${data.impactScore.geographic_need}%`
            ],
            [
                'Capital Deployment Efficiency',
                `${data.impactScore.funding_efficiency}%`
            ],
            [
                'Data Integrity & Transparency',
                `${data.impactScore.verification_score}%`
            ]
        ];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: y,
            head: [
                [
                    'Performance Component',
                    'Assessment Score'
                ]
            ],
            body: scoreData,
            theme: 'grid',
            headStyles: {
                fillColor: darkSlate,
                textColor: [
                    255,
                    255,
                    255
                ],
                fontSize: 10
            },
            bodyStyles: {
                textColor: darkSlate,
                fontSize: 9
            },
            styles: {
                cellPadding: 5
            },
            columnStyles: {
                0: {
                    fontStyle: 'bold',
                    cellWidth: 110
                }
            },
            margin: {
                left: 15,
                right: 15
            }
        });
    }
    // SDG Breakdown
    y = doc.lastAutoTable.finalY + 18;
    if (y > 230) {
        doc.addPage();
        y = 20;
    }
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('SDG Multi-Stakeholder Alignment', 15, y);
    y += 10;
    const allSDGs = new Set();
    data.projects.forEach((p)=>p.sdg_tags.forEach((s)=>allSDGs.add(s)));
    const sdgRows = Array.from(allSDGs).sort((a, b)=>a - b).map((sdg)=>{
        const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].find((s)=>s.id === sdg);
        const projectCount = data.projects.filter((p)=>p.sdg_tags.includes(sdg)).length;
        return [
            `SDG ${sdg}: ${info?.name || ''}`,
            projectCount.toString(),
            `${(projectCount / data.projects.length * 100).toFixed(0)}%`
        ];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: y,
        head: [
            [
                'Sustainable Development Goal',
                'Project Count',
                'Portfolio Weight'
            ]
        ],
        body: sdgRows,
        theme: 'striped',
        headStyles: {
            fillColor: primaryBlue,
            textColor: [
                255,
                255,
                255
            ],
            fontSize: 10
        },
        styles: {
            fontSize: 9,
            cellPadding: 5
        },
        columnStyles: {
            0: {
                fontStyle: 'bold',
                cellWidth: 110
            }
        },
        margin: {
            left: 15,
            right: 15
        }
    });
    // Project Details (Large Table)
    doc.addPage();
    y = 20;
    doc.setTextColor(...primaryBlue);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Detailed Project Inventory', 15, y);
    y += 12;
    const projectRows = data.projects.map((p)=>[
            p.title,
            p.sdg_tags.map((s)=>`SDG ${s}`).join(', '),
            p.beneficiary_count.toLocaleString(),
            `₹${(p.budget / 100000).toFixed(1)}L`,
            `${p.budget > 0 ? (p.spent / p.budget * 100).toFixed(0) : 0}%`,
            p.status.toUpperCase()
        ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: y,
        head: [
            [
                'Project Name',
                'Target SDGs',
                'Reach',
                'Budget',
                'Utilization',
                'Status'
            ]
        ],
        body: projectRows,
        theme: 'grid',
        headStyles: {
            fillColor: darkSlate,
            textColor: [
                255,
                255,
                255
            ],
            fontSize: 8
        },
        styles: {
            fontSize: 8,
            cellPadding: 4
        },
        columnStyles: {
            0: {
                cellWidth: 50,
                fontStyle: 'bold'
            }
        },
        margin: {
            left: 15,
            right: 15
        }
    });
    // Footer & Certification
    const pageCount = doc.getNumberOfPages();
    for(let i = 1; i <= pageCount; i++){
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(...muttedSlate);
        // Horizontal footer line
        doc.setDrawColor(...surfaceGray);
        doc.setLineWidth(0.5);
        doc.line(15, doc.internal.pageSize.getHeight() - 15, pageWidth - 15, doc.internal.pageSize.getHeight() - 15);
        doc.text(`SDG Nexus IMPACT_CERTIFICATE_V1 • Page ${i} of ${pageCount}`, 15, doc.internal.pageSize.getHeight() - 10);
        doc.text('© 2026 SDG Nexus Blockchain Ledger - Verified Immutable Record', pageWidth - 15, doc.internal.pageSize.getHeight() - 10, {
            align: 'right'
        });
    }
    doc.save(`Impact_Report_${data.organizationName.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/ngo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NGODashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/DataContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImpactGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ImpactGauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SDGBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SDGBarChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnimatedCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/reportGenerator.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const fadeIn = (delay)=>({
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4,
            delay
        }
    });
function NGODashboard() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { projects, activities, impactScores } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"])();
    const myProjects = projects.filter((p)=>p.organization_id === user?.id);
    const allProjects = myProjects.length > 0 ? myProjects : projects.filter((p)=>p.organization_id === 'u1');
    const impactData = impactScores.find((s)=>s.organization_id === (user?.id || 'u1'));
    const totalBeneficiaries = allProjects.reduce((s, p)=>s + p.beneficiary_count, 0);
    const totalBudget = allProjects.reduce((s, p)=>s + p.budget, 0);
    const totalSpent = allProjects.reduce((s, p)=>s + p.spent, 0);
    const recentActivities = activities.slice(0, 4);
    const [apiScoreData, setApiScoreData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "NGODashboard.useEffect": ()=>{
            if (user?.id) {
                fetch(`/api/organizations/${user.id}/impact-breakdown`).then({
                    "NGODashboard.useEffect": (r)=>r.json()
                }["NGODashboard.useEffect"]).then({
                    "NGODashboard.useEffect": (json)=>{
                        const payload = json.data || json;
                        if (!payload.error) setApiScoreData(payload);
                    }
                }["NGODashboard.useEffect"]).catch(console.error);
            }
        }
    }["NGODashboard.useEffect"], [
        user?.id
    ]);
    const handleExportReport = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$reportGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateImpactReport"])({
            organizationName: user?.organization_name || 'Organization',
            role: user?.role || 'ngo',
            projects: allProjects,
            impactScore: impactData,
            totalBeneficiaries,
            totalBudget,
            totalSpent
        });
    };
    const statCards = [
        {
            label: 'Active Projects',
            value: allProjects.length,
            icon: '📁',
            bgColor: '#eff6ff',
            iconBg: '#dbeafe',
            color: '#3b82f6'
        },
        {
            label: 'Total Beneficiaries',
            value: totalBeneficiaries,
            icon: '👥',
            bgColor: '#ecfdf5',
            iconBg: '#d1fae5',
            color: '#10b981'
        },
        {
            label: 'Budget Utilized',
            value: Math.round(totalSpent / totalBudget * 100),
            icon: '💰',
            bgColor: '#fffbeb',
            iconBg: '#fef3c7',
            color: '#f59e0b',
            suffix: '%'
        },
        {
            label: 'Impact Score',
            value: apiScoreData?.final_score || impactData?.overall_score || 847,
            icon: '⚡',
            bgColor: '#f5f3ff',
            iconBg: '#ede9fe',
            color: '#8b5cf6'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeIn(0),
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                style: {
                                    color: '#0f172a'
                                },
                                children: [
                                    "Welcome back, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text-cyan",
                                        children: user?.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mt-1",
                                style: {
                                    color: '#64748b'
                                },
                                children: [
                                    user?.organization_name,
                                    " • NGO Dashboard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleExportReport,
                        className: "btn-neon text-xs px-4 py-2.5 flex items-center gap-2",
                        children: "📄 Export Impact Report"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                children: statCards.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeIn(0.1 * (i + 1)),
                        className: "glass-card p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "stat-icon",
                                    style: {
                                        background: stat.iconBg
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: stat.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium",
                                            style: {
                                                color: '#64748b'
                                            },
                                            children: stat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold mt-0.5",
                                            style: {
                                                color: '#0f172a'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                target: stat.value,
                                                suffix: stat.suffix
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                            lineNumber: 84,
                            columnNumber: 25
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeIn(0.3),
                        className: "glass-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-4 flex items-center gap-2",
                                style: {
                                    color: '#0f172a'
                                },
                                children: [
                                    "Organization Impact Score",
                                    apiScoreData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium border border-slate-200",
                                        children: [
                                            "v",
                                            apiScoreData.calculation_version
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-around",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ImpactGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        score: apiScoreData?.final_score || impactData?.overall_score || 847
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: (apiScoreData ? [
                                            {
                                                label: 'Beneficiary Scale',
                                                score: Math.round(apiScoreData.scale_score),
                                                raw: apiScoreData.raw_scale_value,
                                                color: '#3b82f6'
                                            },
                                            {
                                                label: 'Outcome',
                                                score: Math.round(apiScoreData.outcome_score),
                                                raw: apiScoreData.raw_outcome_value,
                                                color: '#10b981'
                                            },
                                            {
                                                label: 'Geographic Need',
                                                score: Math.round(apiScoreData.geographic_need_score),
                                                raw: apiScoreData.raw_geo_value,
                                                color: '#8b5cf6'
                                            },
                                            {
                                                label: 'Funding Efficiency',
                                                score: Math.round(apiScoreData.efficiency_score),
                                                raw: apiScoreData.raw_efficiency_value,
                                                color: '#f59e0b'
                                            },
                                            {
                                                label: 'Verification',
                                                score: Math.round(apiScoreData.transparency_score),
                                                raw: apiScoreData.raw_transparency_value,
                                                color: '#ef4444'
                                            }
                                        ] : [
                                            {
                                                label: 'Beneficiary Scale',
                                                score: impactData?.beneficiary_scale || 88,
                                                color: '#3b82f6'
                                            },
                                            {
                                                label: 'Outcome',
                                                score: impactData?.outcome_score || 85,
                                                color: '#10b981'
                                            },
                                            {
                                                label: 'Geographic Need',
                                                score: impactData?.geographic_need || 82,
                                                color: '#8b5cf6'
                                            },
                                            {
                                                label: 'Funding Efficiency',
                                                score: impactData?.funding_efficiency || 79,
                                                color: '#f59e0b'
                                            },
                                            {
                                                label: 'Verification',
                                                score: impactData?.verification_score || 92,
                                                color: '#ef4444'
                                            }
                                        ]).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-xs mb-1 items-end",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#64748b'
                                                                        },
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    item.raw !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] text-slate-400",
                                                                        children: [
                                                                            "Raw: ",
                                                                            typeof item.raw === 'number' ? item.raw.toFixed(2) : item.raw
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                style: {
                                                                    color: item.color
                                                                },
                                                                children: [
                                                                    item.score,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 rounded-full overflow-hidden w-40",
                                                        style: {
                                                            background: '#f1f5f9'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full rounded-full progress-bar-animated",
                                                            style: {
                                                                width: `${item.score}%`,
                                                                background: item.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs",
                                    style: {
                                        color: '#94a3b8'
                                    },
                                    children: [
                                        "Impact per ₹1 Lakh: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            style: {
                                                color: '#3b82f6'
                                            },
                                            children: [
                                                totalBudget > 0 ? Math.round(totalBeneficiaries / (totalBudget / 100000)) : 0,
                                                " lives"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 97
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...fadeIn(0.4),
                        className: "glass-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-4",
                                style: {
                                    color: '#0f172a'
                                },
                                children: "SDG-wise Breakdown"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SDGBarChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: impactData?.sdg_breakdown || []
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 152,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeIn(0.5),
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
                                children: "Your Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/ngo/create-project",
                                className: "btn-neon text-xs px-4 py-2 no-underline",
                                children: "+ Create Project"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: allProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl transition-all",
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-semibold",
                                                        style: {
                                                            color: '#0f172a'
                                                        },
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs mt-1",
                                                        style: {
                                                            color: '#64748b'
                                                        },
                                                        children: [
                                                            project.location.name,
                                                            " • ",
                                                            project.beneficiary_count.toLocaleString(),
                                                            " beneficiaries"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    project.sdg_tags.map((tag)=>{
                                                        const info = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDG_INFO"].find((s)=>s.id === tag);
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `sdg-${tag} text-[10px] px-2 py-0.5 rounded-md font-semibold`,
                                                            title: info?.name,
                                                            children: [
                                                                "SDG ",
                                                                tag
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 45
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold px-2.5 py-1 rounded-lg ml-2",
                                                        style: {
                                                            color: project.status === 'active' ? '#10b981' : project.status === 'completed' ? '#3b82f6' : '#f59e0b',
                                                            background: project.status === 'active' ? '#ecfdf5' : project.status === 'completed' ? '#eff6ff' : '#fffbeb'
                                                        },
                                                        children: project.status.charAt(0).toUpperCase() + project.status.slice(1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-xs mb-1",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₹",
                                                            (project.spent / 100000).toFixed(1),
                                                            "L spent"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₹",
                                                            (project.budget / 100000).toFixed(1),
                                                            "L budget"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 rounded-full overflow-hidden",
                                                style: {
                                                    background: '#e2e8f0'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full progress-bar-animated",
                                                    style: {
                                                        width: `${project.spent / project.budget * 100}%`,
                                                        background: '#3b82f6'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeIn(0.6),
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
                                children: "Recent Activities"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/ledger",
                                className: "text-xs font-medium no-underline",
                                style: {
                                    color: '#3b82f6'
                                },
                                children: "View All →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 213,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: recentActivities.map((act)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 p-3 rounded-lg transition",
                                style: {
                                    background: '#f8fafc'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0",
                                        style: {
                                            background: act.verified ? '#d1fae5' : '#fef3c7'
                                        },
                                        children: act.verified ? '✓' : '⏳'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                style: {
                                                    color: '#0f172a'
                                                },
                                                children: act.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-1",
                                                style: {
                                                    color: '#94a3b8'
                                                },
                                                children: [
                                                    act.location,
                                                    " • ",
                                                    new Date(act.timestamp).toLocaleDateString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-[10px] font-mono",
                                        style: {
                                            color: '#cbd5e1'
                                        },
                                        children: [
                                            act.hash.slice(0, 12),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, act.id, true, {
                                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                                lineNumber: 219,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/ngo/page.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/ngo/page.tsx",
        lineNumber: 66,
        columnNumber: 9
    }, this);
}
_s(NGODashboard, "MDWP3VnIB1b++wL2IepxUTcgUOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$DataContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useData"]
    ];
});
_c = NGODashboard;
var _c;
__turbopack_context__.k.register(_c, "NGODashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5352ea4f._.js.map