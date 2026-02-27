'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SDG_INFO } from '@/data/mockData';
import { useData } from '@/lib/DataContext';
import { findMatches } from '@/services/matching';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { generateImpactReport } from '@/services/reportGenerator';

const fadeIn = (d: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: d },
});

export default function CorporateDashboard() {
    const { organizations, projects, donations } = useData();
    const [sdgFilter, setSdgFilter] = useState<number | null>(null);
    const [stateFilter, setStateFilter] = useState('');
    const corporateSDGs = [3, 4, 6, 7, 11];

    const totalCSRSpend = donations.reduce((s, d) => s + d.amount, 0);
    const projectsFunded = new Set(donations.map(d => d.project_id)).size;
    const sdgsSupported = new Set(projects.flatMap(p => p.sdg_tags)).size;

    const matches = useMemo(() => {
        return findMatches(organizations, {
            sdg_focus: sdgFilter ? [sdgFilter] : undefined,
            state: stateFilter || undefined,
        }, corporateSDGs);
    }, [sdgFilter, stateFilter, organizations]);

    const handleGenerateReport = () => {
        generateImpactReport({
            organizationName: 'TechServe India CSR',
            role: 'corporate',
            projects: projects.slice(0, 6),
            totalBeneficiaries: projects.reduce((s, p) => s + p.beneficiary_count, 0),
            totalBudget: projects.reduce((s, p) => s + p.budget, 0),
            totalSpent: projects.reduce((s, p) => s + p.spent, 0),
        });
    };

    return (
        <div className="space-y-6">
            <motion.div {...fadeIn(0)} className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">CSR Dashboard</h1>
                    <p className="text-sm text-slate-500 mt-1">TechServe India CSR • Corporate Dashboard</p>
                </div>
                <button onClick={handleGenerateReport} className="btn-neon text-sm">
                    📄 Generate CSR Report
                </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total CSR Spend', value: 45, icon: '💰', color: '#3b82f6', prefix: '₹', suffix: ' Lakh' },
                    { label: 'Projects Funded', value: projectsFunded, icon: '📁', color: '#10b981' },
                    { label: 'SDGs Impacted', value: sdgsSupported, icon: '🎯', color: '#8b5cf6' },
                    { label: 'Lives Impacted', value: 80000, icon: '👥', color: '#f59e0b' },
                ].map((stat, i) => (
                    <motion.div key={i} {...fadeIn(0.05 * (i + 1))} className="glass-card p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className="text-xs px-2 py-1 rounded-lg" style={{ background: stat.color + '15', color: stat.color }}>{stat.label}</span>
                        </div>
                        <div className="text-3xl font-bold text-slate-900">
                            <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Smart Matching */}
            <motion.div {...fadeIn(0.3)} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">🤝 Smart Partner Matching</h2>
                        <p className="text-xs text-slate-500 mt-1">AI-powered NGO recommendations based on your CSR focus areas</p>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-3 mb-5">
                    <select value={sdgFilter || ''} onChange={e => setSdgFilter(e.target.value ? parseInt(e.target.value) : null)}
                        className="input-dark w-auto text-sm py-2">
                        <option value="">All SDGs</option>
                        {SDG_INFO.map(s => <option key={s.id} value={s.id}>SDG {s.id}: {s.name}</option>)}
                    </select>
                    <input type="text" value={stateFilter} onChange={e => setStateFilter(e.target.value)}
                        className="input-dark w-auto text-sm py-2" placeholder="Filter by state..." />
                </div>

                {/* Partner Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                    {matches.map((match, i) => (
                        <motion.div key={match.ngo.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="p-4 rounded-xl transition-all hover:bg-slate-100"
                            style={{ background: '#f8fafc', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                                        style={{ background: '#3b82f6' }}>
                                        {match.ngo.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{match.ngo.name}</p>
                                        <p className="text-xs text-slate-500">{match.ngo.location.state}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-blue-500">{match.match_score}%</div>
                                    <div className="text-[10px] text-slate-500">Match</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {match.ngo.sdg_focus.map(s => (
                                    <span key={s} className={`sdg-${s} text-[10px] px-2 py-0.5 rounded-md`}>SDG {s}</span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="p-2 rounded-lg" style={{ background: '#f8fafc' }}>
                                    <p className="text-xs font-bold text-slate-900">{match.ngo.impact_score}</p>
                                    <p className="text-[10px] text-slate-500">Impact</p>
                                </div>
                                <div className="p-2 rounded-lg" style={{ background: '#f8fafc' }}>
                                    <p className="text-xs font-bold text-slate-900">₹{(match.ngo.funding_need / 100000).toFixed(0)}L</p>
                                    <p className="text-[10px] text-slate-500">Need</p>
                                </div>
                                <div className="p-2 rounded-lg" style={{ background: '#f8fafc' }}>
                                    <p className="text-xs font-bold text-slate-900">{match.ngo.beneficiaries.toLocaleString()}</p>
                                    <p className="text-[10px] text-slate-500">Reach</p>
                                </div>
                            </div>

                            {match.reasons.length > 0 && (
                                <div className="mt-3 text-xs text-slate-500">
                                    {match.reasons.map((r, ri) => (
                                        <span key={ri} className="inline-block mr-2">✓ {r}</span>
                                    ))}
                                </div>
                            )}

                            {match.ngo.verified && (
                                <div className="mt-2 flex items-center gap-1">
                                    <span className="text-[10px] px-2 py-0.5 rounded-md" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>✓ Verified</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
