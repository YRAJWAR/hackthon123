'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SDG_INFO } from '@/data/mockData';
import { useData } from '@/lib/DataContext';

const SDGHeatmap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function HeatmapPage() {
    const { regions } = useData();
    const [colorBy, setColorBy] = useState<'funding' | 'ngo_count' | 'sdg'>('funding');
    const [selectedSDG, setSelectedSDG] = useState<number | undefined>(undefined);

    return (
        <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-2xl font-bold text-slate-900">SDG Impact Heatmap</h1>
                <p className="text-sm text-slate-500 mt-1">Interactive visualization of SDG activity across India</p>
            </motion.div>

            {/* Controls */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-4"
            >
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label className="text-xs text-slate-500 mb-1 block">Color By</label>
                        <div className="flex gap-2">
                            {[
                                { key: 'funding' as const, label: '💰 Funding', color: '#3b82f6' },
                                { key: 'ngo_count' as const, label: '🏢 NGO Density', color: '#10b981' },
                                { key: 'sdg' as const, label: '🎯 SDG Focus', color: '#8b5cf6' },
                            ].map(opt => (
                                <button key={opt.key} onClick={() => setColorBy(opt.key)}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                                    style={{
                                        background: colorBy === opt.key ? opt.color + '20' : '#f8fafc',
                                        color: colorBy === opt.key ? opt.color : '#94a3b8',
                                        border: `1px solid ${colorBy === opt.key ? opt.color + '40' : 'rgba(255,255,255,0.06)'}`,
                                    }}>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-slate-500 mb-1 block">SDG Filter</label>
                        <select value={selectedSDG || ''} onChange={e => setSelectedSDG(e.target.value ? parseInt(e.target.value) : undefined)}
                            className="input-dark w-auto text-sm py-1.5">
                            <option value="">All SDGs</option>
                            {SDG_INFO.map(s => <option key={s.id} value={s.id}>{s.icon} SDG {s.id}: {s.name}</option>)}
                        </select>
                    </div>
                </div>
            </motion.div>

            {/* Map */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <SDGHeatmap regions={regions} colorBy={colorBy} selectedSDG={selectedSDG} />
            </motion.div>

            {/* Region Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
            >
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Region Summary</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-slate-500 text-xs border-b border-white/5">
                                <th className="text-left py-3 font-medium">Region</th>
                                <th className="text-right py-3 font-medium">Funding (₹L)</th>
                                <th className="text-right py-3 font-medium">NGOs</th>
                                <th className="text-right py-3 font-medium">Projects</th>
                                <th className="text-right py-3 font-medium">Beneficiaries</th>
                                <th className="text-left py-3 pl-4 font-medium">SDG Focus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...regions].sort((a, b) => b.funding - a.funding).map(r => (
                                <tr key={r.name} className="border-b border-white/3 hover:bg-slate-50 transition">
                                    <td className="py-3 text-slate-900 font-medium">{r.name}</td>
                                    <td className="py-3 text-right text-blue-500">₹{(r.funding / 100000).toFixed(0)}L</td>
                                    <td className="py-3 text-right text-gray-300">{r.ngo_count}</td>
                                    <td className="py-3 text-right text-gray-300">{r.projects}</td>
                                    <td className="py-3 text-right text-gray-300">{r.beneficiaries.toLocaleString()}</td>
                                    <td className="py-3 pl-4">
                                        <div className="flex gap-1">
                                            {r.primary_sdgs.map(s => (
                                                <span key={s} className={`sdg-${s} text-[10px] px-1.5 py-0.5 rounded`}>
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
