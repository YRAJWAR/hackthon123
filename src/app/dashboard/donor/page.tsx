'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SDG_INFO } from '@/data/mockData';
import { useData } from '@/lib/DataContext';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const fadeIn = (d: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: d },
});

export default function DonorDashboard() {
    const { projects, donations } = useData();
    const [selectedSDG, setSelectedSDG] = useState<number | null>(null);
    const [showDonateModal, setShowDonateModal] = useState<string | null>(null);

    const myDonations = donations.filter(d => d.donor_id === 'u4');
    const totalDonated = myDonations.reduce((s, d) => s + d.amount, 0);
    const sdgsSupported = [...new Set(myDonations.flatMap(d => d.sdg_tags))].length;
    const livesImpacted = 12500;

    const filteredProjects = selectedSDG
        ? projects.filter(p => p.sdg_tags.includes(selectedSDG))
        : projects;

    const handleDonate = (projectId: string) => {
        setShowDonateModal(null);
        alert('Donation recorded successfully! (Mock payment — in production this would use a payment gateway)');
    };

    return (
        <div className="space-y-6">
            <motion.div {...fadeIn(0)}>
                <h1 className="text-2xl font-bold text-slate-900">Donor Dashboard</h1>
                <p className="text-sm text-slate-500 mt-1">Track your giving impact and discover new projects</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Donated', value: Math.round(totalDonated / 1000), icon: '💝', color: '#f43f5e', prefix: '₹', suffix: 'K' },
                    { label: 'Projects Supported', value: myDonations.length, icon: '📁', color: '#3b82f6' },
                    { label: 'SDGs Supported', value: sdgsSupported, icon: '🎯', color: '#10b981' },
                    { label: 'Lives Impacted', value: livesImpacted, icon: '👥', color: '#8b5cf6' },
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

            {/* Impact Progress */}
            <motion.div {...fadeIn(0.3)} className="glass-card p-6">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Your Impact Breakdown</h2>
                <div className="space-y-4">
                    {myDonations.map((donation, i) => (
                        <div key={donation.id}>
                            <div className="flex items-center justify-between text-sm mb-1.5">
                                <span className="text-gray-300">{donation.project_title}</span>
                                <span className="text-blue-500 font-medium">₹{donation.amount.toLocaleString()}</span>
                            </div>
                            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(donation.amount / totalDonated) * 100}%` }}
                                    transition={{ duration: 1, delay: 0.2 + i * 0.15 }}
                                    className="h-full rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${SDG_INFO.find(s => s.id === donation.sdg_tags[0])?.color || '#3b82f6'}, ${SDG_INFO.find(s => s.id === (donation.sdg_tags[1] || donation.sdg_tags[0]))?.color || '#8b5cf6'})`,
                                    }}
                                />
                            </div>
                            <div className="flex gap-1.5 mt-1.5">
                                {donation.sdg_tags.map(t => (
                                    <span key={t} className={`sdg-${t} text-[10px] px-1.5 py-0.5 rounded`}>SDG {t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Browse Projects */}
            <motion.div {...fadeIn(0.4)} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-slate-900">Browse Projects</h2>
                </div>

                {/* SDG Filter */}
                <div className="flex flex-wrap gap-2 mb-5">
                    <button onClick={() => setSelectedSDG(null)}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                        style={{
                            background: !selectedSDG ? 'rgba(6,182,212,0.15)' : '#f8fafc',
                            color: !selectedSDG ? '#3b82f6' : '#94a3b8',
                            border: `1px solid ${!selectedSDG ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.06)'}`,
                        }}>
                        All
                    </button>
                    {SDG_INFO.slice(0, 10).map(sdg => (
                        <button key={sdg.id} onClick={() => setSelectedSDG(sdg.id)}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                            style={{
                                background: selectedSDG === sdg.id ? sdg.color + '20' : '#f8fafc',
                                color: selectedSDG === sdg.id ? sdg.color : '#94a3b8',
                                border: `1px solid ${selectedSDG === sdg.id ? sdg.color + '40' : 'rgba(255,255,255,0.06)'}`,
                            }}>
                            {sdg.icon} {sdg.id}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-4">
                    {filteredProjects.map((project, i) => (
                        <motion.div key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="p-4 rounded-xl"
                            style={{ background: '#f8fafc', border: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <h3 className="text-sm font-semibold text-slate-900 mb-1">{project.title}</h3>
                            <p className="text-xs text-slate-500 mb-3 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.sdg_tags.map(tag => (
                                    <span key={tag} className={`sdg-${tag} text-[10px] px-2 py-0.5 rounded-md`}>SDG {tag}</span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                                <span>📍 {project.location.name}</span>
                                <span>👥 {project.beneficiary_count.toLocaleString()}</span>
                            </div>

                            {/* Funding progress */}
                            <div className="mb-3">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-slate-500">₹{(project.spent / 100000).toFixed(0)}L raised</span>
                                    <span className="text-slate-500">₹{(project.budget / 100000).toFixed(0)}L goal</span>
                                </div>
                                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 rounded-full"
                                        style={{ width: `${(project.spent / project.budget) * 100}%` }} />
                                </div>
                            </div>

                            <button onClick={() => setShowDonateModal(project.id)}
                                className="w-full py-2 rounded-lg text-xs font-medium transition-all hover:bg-cyan-500/20"
                                style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#3b82f6' }}>
                                💝 Donate Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Donate Modal */}
            {showDonateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowDonateModal(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-6 w-full max-w-sm"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Make a Donation</h3>
                        <input type="number" className="input-dark mb-3" placeholder="Amount (₹)" />
                        <button onClick={() => handleDonate(showDonateModal)} className="btn-neon w-full py-2.5 text-sm">
                            Confirm Donation →
                        </button>
                        <button onClick={() => setShowDonateModal(null)}
                            className="w-full mt-2 py-2 text-xs text-slate-500 hover:text-gray-300 transition">Cancel</button>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
