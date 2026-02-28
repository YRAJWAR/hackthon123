'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { GOV_FUNDING_GAP, GOV_RISK_TREND, UNDERFUNDED_ALERTS, MOCK_USERS, MOCK_PROJECTS, MOCK_IMPACT_SCORES, SDG_INFO } from '@/data/mockData';
import { useData } from '@/lib/DataContext';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useRouter } from 'next/navigation';

const fadeIn = (d: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: d },
});

export default function GovernmentDashboard() {
    const { organizations, projects, regions } = useData();
    const totalFunding = regions.reduce((s, r) => s + r.funding, 0);
    const totalNGOs = regions.reduce((s, r) => s + r.ngo_count, 0);
    const totalBeneficiaries = regions.reduce((s, r) => s + r.beneficiaries, 0);
    const totalProjects = projects.length;
    const topNGOs = [...organizations].sort((a, b) => b.impact_score - a.impact_score).slice(0, 5);

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState<'all' | 'ngo' | 'corporate'>('all');

    // Build enriched organization list with project/financial data
    const allOrgs = MOCK_USERS
        .filter(u => u.role === 'ngo' || u.role === 'corporate')
        .map(user => {
            const orgProjects = MOCK_PROJECTS.filter(p => p.organization_id === user.id || p.organization_name === user.organization_name);
            const totalBudget = orgProjects.reduce((s, p) => s + p.budget, 0);
            const totalSpent = orgProjects.reduce((s, p) => s + p.spent, 0);
            const totalBeneficiaries = orgProjects.reduce((s, p) => s + p.beneficiary_count, 0);
            const activeCount = orgProjects.filter(p => p.status === 'active').length;
            const avgScore = orgProjects.length > 0 ? Math.round(orgProjects.reduce((s, p) => s + p.impact_score, 0) / orgProjects.length) : 0;
            const state = orgProjects.length > 0 ? orgProjects[0].location.name : '—';
            return {
                ...user,
                projectCount: orgProjects.length,
                activeProjects: activeCount,
                totalBudget,
                totalSpent,
                totalBeneficiaries,
                avgImpactScore: avgScore,
                state,
            };
        });

    const filteredOrganizations = allOrgs.filter(org =>
        (typeFilter === 'all' || org.role === typeFilter) &&
        (org.organization_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.state.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-6">
            <motion.div {...fadeIn(0)}>
                <h1 className="text-2xl font-bold text-slate-900">Government Intelligence Dashboard</h1>
                <p className="text-sm text-slate-500 mt-1">SDG Funding Analysis, Alerts & NGO Performance</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Funding Tracked', value: Math.round(totalFunding / 10000000), icon: '💰', color: '#3b82f6', prefix: '₹', suffix: ' Cr' },
                    { label: 'Active NGOs', value: totalNGOs, icon: '🏢', color: '#10b981' },
                    { label: 'Total Beneficiaries', value: totalBeneficiaries, icon: '👥', color: '#8b5cf6' },
                    { label: 'Active Projects', value: totalProjects, icon: '📁', color: '#f59e0b' },
                ].map((stat, i) => (
                    <motion.div key={i} {...fadeIn(0.05 * (i + 1))} className="glass-card p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className="text-xs px-2 py-1 rounded-lg" style={{ background: stat.color + '15', color: stat.color }}>
                                {stat.label}
                            </span>
                        </div>
                        <div className="text-3xl font-bold text-slate-900">
                            <AnimatedCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ===== ORGANIZATIONS DIRECTORY (NOW AT TOP) ===== */}
            <motion.div {...fadeIn(0.15)} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">📋 Organizations Directory</h2>
                        <p className="text-xs text-slate-500">Click any organization to view full transaction & project details</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        {/* Type Filter Tabs */}
                        <div className="flex bg-slate-100 rounded-lg p-0.5">
                            {(['all', 'ngo', 'corporate'] as const).map(t => (
                                <button key={t} onClick={() => setTypeFilter(t)}
                                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${typeFilter === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                    {t === 'all' ? 'All' : t.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-slate-400">🔍</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search name, contact, state..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 shadow-sm outline-none transition-all focus:bg-white"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-100">
                    <table className="w-full text-sm text-left text-slate-500">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th scope="col" className="px-5 py-3.5 font-semibold">Organization</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold">Type</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold">State</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold">Contact</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold text-center">Projects</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold text-right">Funding</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold text-center">Impact</th>
                                <th scope="col" className="px-5 py-3.5 font-semibold text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrganizations.map((org, index) => (
                                <tr
                                    key={org.id}
                                    onClick={() => router.push(`/dashboard/government/organization/${org.id}`)}
                                    className={`bg-white hover:bg-blue-50/50 transition-all cursor-pointer group ${index === filteredOrganizations.length - 1 ? '' : 'border-b border-slate-50'}`}
                                >
                                    <td className="px-5 py-4">
                                        <div className="font-semibold text-slate-900">{org.organization_name}</div>
                                        <div className="text-[11px] text-slate-400">{org.email}</div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <span className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded-md ${org.role === 'ngo' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {org.role}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-slate-600 text-xs">{org.state}</td>
                                    <td className="px-5 py-4 text-slate-600">{org.name}</td>
                                    <td className="px-5 py-4 text-center">
                                        <span className="font-bold text-slate-900">{org.activeProjects}</span>
                                        <span className="text-slate-400 text-xs"> / {org.projectCount}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right font-semibold text-slate-800">
                                        ₹{(org.totalBudget / 100000).toFixed(1)}L
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        <span className={`inline-block px-2 py-0.5 text-xs font-bold rounded-full ${org.avgImpactScore >= 850 ? 'bg-emerald-100 text-emerald-700' :
                                                org.avgImpactScore >= 700 ? 'bg-blue-100 text-blue-700' :
                                                    org.avgImpactScore > 0 ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'
                                            }`}>
                                            {org.avgImpactScore > 0 ? org.avgImpactScore : '—'}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 text-center">
                                        <div className="flex items-center justify-center gap-1.5">
                                            <div className={`h-2 w-2 rounded-full ${org.verification_status === 'verified' ? 'bg-emerald-500' :
                                                org.verification_status === 'pending' ? 'bg-amber-500' : 'bg-rose-500'}`}></div>
                                            <span className="text-xs text-slate-600 font-medium">
                                                {org.verification_status.charAt(0).toUpperCase() + org.verification_status.slice(1)}
                                            </span>
                                            <span className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity ml-1">→</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredOrganizations.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="px-6 py-8 text-center text-slate-400">
                                        No organizations found matching "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="mt-3 text-xs text-slate-400 text-right">Showing {filteredOrganizations.length} of {allOrgs.length} organizations</div>
            </motion.div>

            {/* Funding Gap + Alerts */}
            <div className="grid md:grid-cols-3 gap-5">
                <motion.div {...fadeIn(0.2)} className="glass-card p-6 md:col-span-2">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">SDG Funding Gap Analysis</h2>
                    <p className="text-xs text-slate-500 mb-4">Required vs Allocated funding (₹ Crores)</p>
                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={GOV_FUNDING_GAP} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="sdg" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                            <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                            <Tooltip
                                contentStyle={{ background: 'rgba(17,24,39,0.95)', border: '1px solid #e2e8f0', borderRadius: 12, color: '#e2e8f0' }}
                            />
                            <Legend wrapperStyle={{ color: '#94a3b8', fontSize: 12 }} />
                            <Bar dataKey="required" fill="#f43f5e" fillOpacity={0.7} radius={[4, 4, 0, 0]} name="Required (₹Cr)" barSize={16} />
                            <Bar dataKey="allocated" fill="#3b82f6" fillOpacity={0.8} radius={[4, 4, 0, 0]} name="Allocated (₹Cr)" barSize={16} />
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                <motion.div {...fadeIn(0.3)} className="glass-card p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">⚠️ Underfunded Alerts</h2>
                    <div className="space-y-3">
                        {UNDERFUNDED_ALERTS.map((alert, i) => (
                            <div key={i} className="p-3 rounded-xl"
                                style={{
                                    background: alert.severity === 'critical' ? 'rgba(244,63,94,0.08)' :
                                        alert.severity === 'high' ? 'rgba(245,158,11,0.08)' : 'rgba(6,182,212,0.08)',
                                    border: `1px solid ${alert.severity === 'critical' ? 'rgba(244,63,94,0.2)' :
                                        alert.severity === 'high' ? 'rgba(245,158,11,0.2)' : 'rgba(6,182,212,0.2)'}`,
                                }}>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-900">{alert.region}</span>
                                    <span className="text-xs px-2 py-0.5 rounded-md font-medium"
                                        style={{
                                            background: alert.severity === 'critical' ? 'rgba(244,63,94,0.15)' :
                                                alert.severity === 'high' ? 'rgba(245,158,11,0.15)' : 'rgba(6,182,212,0.15)',
                                            color: alert.severity === 'critical' ? '#f43f5e' :
                                                alert.severity === 'high' ? '#f59e0b' : '#3b82f6',
                                        }}>
                                        {alert.severity.toUpperCase()}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">{alert.sdg} • Gap: {alert.gap}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Risk Trend + Top NGOs */}
            <div className="grid md:grid-cols-2 gap-5">
                <motion.div {...fadeIn(0.4)} className="glass-card p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Risk Projection Trend</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={GOV_RISK_TREND}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                            <YAxis tick={{ fill: '#64748b', fontSize: 11 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                            <Tooltip contentStyle={{ background: 'rgba(17,24,39,0.95)', border: '1px solid #e2e8f0', borderRadius: 12, color: '#e2e8f0' }} />
                            <Line type="monotone" dataKey="risk" stroke="#f43f5e" strokeWidth={2} dot={{ fill: '#f43f5e', r: 4 }} name="Risk Index" />
                        </LineChart>
                    </ResponsiveContainer>
                </motion.div>

                <motion.div {...fadeIn(0.5)} className="glass-card p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">🏆 Top Performing NGOs</h2>
                    <div className="space-y-3">
                        {topNGOs.map((ngo, i) => (
                            <div key={ngo.id} className="flex items-center gap-3 p-3 rounded-xl"
                                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                                    style={{
                                        background: i === 0 ? 'linear-gradient(135deg,#f59e0b,#f43f5e)' :
                                            i === 1 ? 'linear-gradient(135deg,#94a3b8,#64748b)' :
                                                i === 2 ? 'linear-gradient(135deg,#b45309,#a16207)' :
                                                    'rgba(255,255,255,0.1)',
                                    }}>
                                    {i + 1}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-900">{ngo.name}</p>
                                    <p className="text-xs text-slate-500">{ngo.location.state} • {ngo.beneficiaries.toLocaleString()} beneficiaries</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-blue-500">{ngo.impact_score}</p>
                                    <p className="text-[10px] text-slate-500">Score</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
