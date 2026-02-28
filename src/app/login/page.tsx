'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/AuthContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const success = await login(email, password);
        if (success) {
            router.push('/dashboard');
        } else {
            setError('Invalid credentials. Try the demo accounts below.');
        }
        setLoading(false);
    };

    const demoAccounts = [
        { label: 'NGO', email: 'ngo@sdgnexus.org' },
        { label: 'Government', email: 'gov@sdgnexus.org' },
        { label: 'Corporate', email: 'corp@sdgnexus.org' },
        { label: 'Donor', email: 'donor@sdgnexus.org' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
            style={{ background: '#0a0f1e' }}>
            {/* Background glow */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 w-full max-w-md relative z-10"
            >
                <div className="text-center mb-8">
                    <Image src="/logo.png" alt="SDG Nexus" width={56} height={56}
                        className="rounded-2xl mx-auto mb-4" style={{ objectFit: 'contain' }} />
                    <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                    <p className="text-sm text-gray-500 mt-1">Sign in to SDG Nexus</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                            className="input-dark" placeholder="your@email.com" required />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                            className="input-dark" placeholder="••••••••" required />
                    </div>

                    {error && (
                        <p className="text-xs text-red-400 text-center bg-red-400/10 rounded-lg py-2">{error}</p>
                    )}

                    <button type="submit" disabled={loading}
                        className="btn-neon w-full py-3 text-sm disabled:opacity-50">
                        {loading ? 'Signing in...' : 'Sign In →'}
                    </button>
                </form>

                {/* Demo accounts */}
                <div className="mt-6">
                    <p className="text-xs text-gray-500 text-center mb-3">Quick Demo Login (password: password123)</p>
                    <div className="grid grid-cols-2 gap-2">
                        {demoAccounts.map(acc => (
                            <button key={acc.email}
                                onClick={() => { setEmail(acc.email); setPassword('password123'); }}
                                className="px-3 py-2 rounded-lg text-xs font-medium transition-all hover:bg-white/5"
                                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#94a3b8' }}>
                                {acc.label}
                            </button>
                        ))}
                    </div>
                </div>

                <p className="text-center text-xs text-gray-500 mt-6">
                    Don&apos;t have an account? <Link href="/register" className="text-cyan-400 hover:underline">Register</Link>
                </p>
            </motion.div>
        </div>
    );
}
