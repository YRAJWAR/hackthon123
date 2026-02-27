'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Legend } from 'recharts';
import { GOV_FUNDING_GAP, GOV_RISK_TREND, UNDERFUNDED_ALERTS } from '@/data/mockData';
import { useData } from '@/lib/DataContext';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

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
