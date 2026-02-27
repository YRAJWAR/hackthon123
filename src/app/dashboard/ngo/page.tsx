'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/AuthContext';
import { useData } from '@/lib/DataContext';
import { SDG_INFO } from '@/data/mockData';
import ImpactGauge from '@/components/ui/ImpactGauge';
import SDGBarChart from '@/components/ui/SDGBarChart';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Link from 'next/link';
import { generateImpactReport } from '@/services/reportGenerator';

const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay },
});

export default function NGODashboard() {
    const { user } = useAuth();
    const { projects, activities, impactScores } = useData();

    const myProjects = projects.filter(p => p.organization_id === user?.id);
    const allProjects = myProjects.length > 0 ? myProjects : projects.filter(p => p.organization_id === 'u1');
    const impactData = impactScores.find(s => s.organization_id === (user?.id || 'u1'));
    const totalBeneficiaries = allProjects.reduce((s, p) => s + p.beneficiary_count, 0);
    const totalBudget = allProjects.reduce((s, p) => s + p.budget, 0);
    const totalSpent = allProjects.reduce((s, p) => s + p.spent, 0);
    const recentActivities = activities.slice(0, 4);

    const handleExportReport = () => {
        generateImpactReport({
            organizationName: user?.organization_name || 'Organization',
            role: user?.role || 'ngo',
            projects: allProjects,
            impactScore: impactData,
            totalBeneficiaries,
            totalBudget,
            totalSpent,
        });
    };

    const statCards = [
        { label: 'Active Projects', value: allProjects.length, icon: '📁', bgColor: '#eff6ff', iconBg: '#dbeafe', color: '#3b82f6' },
        { label: 'Total Beneficiaries', value: totalBeneficiaries, icon: '👥', bgColor: '#ecfdf5', iconBg: '#d1fae5', color: '#10b981' },
        { label: 'Budget Utilized', value: Math.round((totalSpent / totalBudget) * 100), icon: '💰', bgColor: '#fffbeb', iconBg: '#fef3c7', color: '#f59e0b', suffix: '%' },
        { label: 'Impact Score', value: impactData?.overall_score || 847, icon: '⚡', bgColor: '#f5f3ff', iconBg: '#ede9fe', color: '#8b5cf6' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <motion.div {...fadeIn(0)} className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold" style={{ color: '#0f172a' }}>
                        Welcome back, <span className="gradient-text-cyan">{user?.name}</span>
                    </h1>
                    <p className="text-sm mt-1" style={{ color: '#64748b' }}>{user?.organization_name} • NGO Dashboard</p>
                </div>
                <button onClick={handleExportReport} className="btn-neon text-xs px-4 py-2.5 flex items-center gap-2">
                    📄 Export Impact Report
                </button>
            </motion.div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {statCards.map((stat, i) => (
                    <motion.div key={i} {...fadeIn(0.1 * (i + 1))} className="glass-card p-5">
                        <div className="flex items-center gap-4">
                            <div className="stat-icon" style={{ background: stat.iconBg }}>
                                <span className="text-xl">{stat.icon}</span>
                            </div>
                            <div>
                                <p className="text-xs font-medium" style={{ color: '#64748b' }}>{stat.label}</p>
                                <div className="text-2xl font-bold mt-0.5" style={{ color: '#0f172a' }}>
                                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Impact Score + SDG Breakdown */}
            <div className="grid md:grid-cols-2 gap-5">
                <motion.div {...fadeIn(0.3)} className="glass-card p-6">
                    <h2 className="text-lg font-semibold mb-4" style={{ color: '#0f172a' }}>Organization Impact Score</h2>
                    <div className="flex items-center justify-around">
                        <ImpactGauge score={impactData?.overall_score || 847} />
                        <div className="space-y-3">
                            {[
                                { label: 'Beneficiary Scale', score: impactData?.beneficiary_scale || 88, color: '#3b82f6' },
                                { label: 'Outcome', score: impactData?.outcome_score || 85, color: '#10b981' },
                                { label: 'Geographic Need', score: impactData?.geographic_need || 82, color: '#8b5cf6' },
                                { label: 'Funding Efficiency', score: impactData?.funding_efficiency || 79, color: '#f59e0b' },
                                { label: 'Verification', score: impactData?.verification_score || 92, color: '#ef4444' },
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span style={{ color: '#64748b' }}>{item.label}</span>
                                        <span className="font-semibold" style={{ color: item.color }}>{item.score}%</span>
                                    </div>
                                    <div className="h-2 rounded-full overflow-hidden w-40" style={{ background: '#f1f5f9' }}>
                                        <div className="h-full rounded-full progress-bar-animated"
                                            style={{ width: `${item.score}%`, background: item.color }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-xs" style={{ color: '#94a3b8' }}>Impact per ₹1 Lakh: <span className="font-bold" style={{ color: '#3b82f6' }}>
                            {totalBudget > 0 ? Math.round(totalBeneficiaries / (totalBudget / 100000)) : 0} lives</span></p>
                    </div>
                </motion.div>

                <motion.div {...fadeIn(0.4)} className="glass-card p-6">
                    <h2 className="text-lg font-semibold mb-4" style={{ color: '#0f172a' }}>SDG-wise Breakdown</h2>
                    <SDGBarChart data={impactData?.sdg_breakdown || []} />
                </motion.div>
            </div>

            {/* Projects List */}
            <motion.div {...fadeIn(0.5)} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold" style={{ color: '#0f172a' }}>Your Projects</h2>
                    <Link href="/dashboard/ngo/create-project" className="btn-neon text-xs px-4 py-2 no-underline">
                        + Create Project
                    </Link>
                </div>
                <div className="space-y-3">
                    {allProjects.map((project) => (
                        <div key={project.id} className="p-4 rounded-xl transition-all"
                            style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold" style={{ color: '#0f172a' }}>{project.title}</h3>
                                    <p className="text-xs mt-1" style={{ color: '#64748b' }}>{project.location.name} • {project.beneficiary_count.toLocaleString()} beneficiaries</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {project.sdg_tags.map(tag => {
                                        const info = SDG_INFO.find(s => s.id === tag);
                                        return (
                                            <span key={tag} className={`sdg-${tag} text-[10px] px-2 py-0.5 rounded-md font-semibold`}
                                                title={info?.name}>
                                                SDG {tag}
                                            </span>
                                        );
                                    })}
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg ml-2"
                                        style={{
                                            color: project.status === 'active' ? '#10b981' : project.status === 'completed' ? '#3b82f6' : '#f59e0b',
                                            background: project.status === 'active' ? '#ecfdf5' : project.status === 'completed' ? '#eff6ff' : '#fffbeb',
                                        }}>
                                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                    </span>
                                </div>
                            </div>
                            {/* Budget progress */}
                            <div className="mt-3">
                                <div className="flex justify-between text-xs mb-1" style={{ color: '#94a3b8' }}>
                                    <span>₹{(project.spent / 100000).toFixed(1)}L spent</span>
                                    <span>₹{(project.budget / 100000).toFixed(1)}L budget</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden" style={{ background: '#e2e8f0' }}>
                                    <div className="h-full rounded-full progress-bar-animated"
                                        style={{ width: `${(project.spent / project.budget) * 100}%`, background: '#3b82f6' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div {...fadeIn(0.6)} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold" style={{ color: '#0f172a' }}>Recent Activities</h2>
                    <Link href="/dashboard/ledger" className="text-xs font-medium no-underline" style={{ color: '#3b82f6' }}>View All →</Link>
                </div>
                <div className="space-y-3">
                    {recentActivities.map(act => (
                        <div key={act.id} className="flex items-start gap-3 p-3 rounded-lg transition"
                            style={{ background: '#f8fafc' }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                                style={{ background: act.verified ? '#d1fae5' : '#fef3c7' }}>
                                {act.verified ? '✓' : '⏳'}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm" style={{ color: '#0f172a' }}>{act.description}</p>
                                <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{act.location} • {new Date(act.timestamp).toLocaleDateString()}</p>
                            </div>
                            <code className="text-[10px] font-mono" style={{ color: '#cbd5e1' }}>{act.hash.slice(0, 12)}...</code>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
