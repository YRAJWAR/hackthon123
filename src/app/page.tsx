'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SDG_INFO } from '@/data/mockData';

const features = [
    { icon: '🤖', title: 'AI SDG Alignment', desc: 'Auto-classify projects into UN SDGs using AI-powered classification engine.' },
    { icon: '📊', title: 'Impact Scoring', desc: 'Standardized 0-1000 scoring with multi-factor weighted formula.' },
    { icon: '🤝', title: 'Smart Matching', desc: 'Data-driven NGO-Corporate partnership recommendations.' },
    { icon: '🗺️', title: 'Live Heatmap', desc: 'Interactive map visualizing SDG funding & NGO distribution.' },
    { icon: '🔗', title: 'Transparent Ledger', desc: 'SHA-256 hashed activity logs for immutable verification.' },
    { icon: '🏛️', title: 'Gov Intelligence', desc: 'Funding gap analysis & risk projection for policy makers.' },
];

const stats = [
    { value: '₹85Cr+', label: 'Tracked Funding' },
    { value: '1.2M+', label: 'Beneficiaries' },
    { value: '380+', label: 'Active Projects' },
    { value: '17', label: 'SDGs Covered' },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen" style={{ background: '#0a0f1e' }}>
            {/* Nav */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4"
                style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/logo.png" alt="SDG Nexus" width={36} height={36}
                            className="rounded-xl" style={{ objectFit: 'contain' }} />
                        <span className="text-xl font-bold gradient-text">SDG Nexus</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/explore"
                            className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition no-underline">
                            Explore
                        </Link>
                        <Link href="/login"
                            className="px-5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition no-underline"
                            style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                            Sign In
                        </Link>
                        <Link href="/register" className="btn-neon text-sm no-underline">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
                {/* Glow orbs */}
                <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
                <div className="absolute top-40 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
                    style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider"
                        style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', color: '#06b6d4' }}>
                        🚀 THE FUTURE OF SDG PARTNERSHIPS
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        <span className="gradient-text">The Operating System</span>
                        <br />
                        <span className="text-white">for SDG Impact Intelligence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Unifying NGOs, Governments, Corporates & Donors on a single platform with
                        AI-powered SDG alignment, transparent tracking, and smart partnerships.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/register" className="btn-neon text-base px-8 py-3 no-underline">
                            Launch Dashboard →
                        </Link>
                        <Link href="/login"
                            className="px-8 py-3 rounded-xl text-base font-medium text-gray-300 no-underline transition hover:text-white"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            Sign In
                        </Link>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-10 max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((s, i) => (
                        <div key={i} className="glass-card-dark p-5 text-center">
                            <div className="text-2xl md:text-3xl font-bold gradient-text-cyan">{s.value}</div>
                            <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* Features */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intelligent SDG Ecosystem</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Everything you need to drive measurable impact across all 17 Sustainable Development Goals.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                className="glass-card-dark p-6 group cursor-default"
                            >
                                <div className="text-3xl mb-4">{f.icon}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SDG Wheel */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-10">Covering All 17 SDGs</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {SDG_INFO.map((sdg, i) => (
                            <motion.div
                                key={sdg.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105"
                                style={{
                                    background: sdg.color + '15',
                                    border: `1px solid ${sdg.color}40`,
                                    color: sdg.color,
                                }}
                            >
                                <span>{sdg.icon}</span>
                                <span>{sdg.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center glass-card-dark p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10"
                        style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }} />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Impact?</h2>
                        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                            Join the next generation of SDG-driven organizations building measurable, transparent, and scalable impact.
                        </p>
                        <Link href="/register" className="btn-neon text-base px-10 py-3.5 no-underline">
                            Create Your Account →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/5 text-center text-xs text-gray-600">
                © 2025 SDG Nexus. Building a sustainable future, one partnership at a time.
            </footer>
        </div>
    );
}
