'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/AuthContext';
import { UserRole } from '@/data/mockData';

export default function RegisterPage() {
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'ngo' as UserRole, orgName: '' });
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const router = useRouter();

    const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await register(form.name, form.email, form.password, form.role, form.orgName);
        router.push('/dashboard');
    };

    const roles = [
        { value: 'ngo', label: 'NGO', icon: '🏢', desc: 'Create projects & track impact' },
        { value: 'government', label: 'Government', icon: '🏛️', desc: 'Monitor SDG progress' },
        { value: 'corporate', label: 'Corporate', icon: '💼', desc: 'CSR compliance & matching' },
        { value: 'donor', label: 'Donor', icon: '💝', desc: 'Fund projects & track giving' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
            style={{ background: '#0a0f1e' }}>
            <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 w-full max-w-lg relative z-10"
            >
                <div className="text-center mb-8">
                    <Image src="/logo.png" alt="SDG Nexus" width={56} height={56}
                        className="rounded-2xl mx-auto mb-4" style={{ objectFit: 'contain' }} />
                    <h1 className="text-2xl font-bold text-white">Join SDG Nexus</h1>
                    <p className="text-sm text-gray-500 mt-1">Create your account to start driving impact</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Role Selection */}
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-2">Select Your Role</label>
                        <div className="grid grid-cols-2 gap-2">
                            {roles.map(r => (
                                <button type="button" key={r.value}
                                    onClick={() => update('role', r.value)}
                                    className="p-3 rounded-xl text-left transition-all"
                                    style={{
                                        background: form.role === r.value ? 'rgba(6,182,212,0.12)' : 'rgba(255,255,255,0.03)',
                                        border: `1px solid ${form.role === r.value ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.06)'}`,
                                    }}>
                                    <span className="text-lg">{r.icon}</span>
                                    <p className="text-sm font-medium text-white mt-1">{r.label}</p>
                                    <p className="text-[10px] text-gray-500">{r.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name</label>
                            <input type="text" value={form.name} onChange={e => update('name', e.target.value)}
                                className="input-dark" placeholder="Your name" required />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Organization</label>
                            <input type="text" value={form.orgName} onChange={e => update('orgName', e.target.value)}
                                className="input-dark" placeholder="Org name" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                        <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                            className="input-dark" placeholder="your@email.com" required />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
                        <input type="password" value={form.password} onChange={e => update('password', e.target.value)}
                            className="input-dark" placeholder="••••••••" required />
                    </div>

                    <button type="submit" disabled={loading}
                        className="btn-neon w-full py-3 text-sm disabled:opacity-50">
                        {loading ? 'Creating account...' : 'Create Account →'}
                    </button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-6">
                    Already have an account? <Link href="/login" className="text-cyan-400 hover:underline">Sign In</Link>
                </p>
            </motion.div>
        </div>
    );
}
