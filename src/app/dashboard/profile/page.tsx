'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/AuthContext';

export default function ProfilePage() {
    const { user } = useAuth();
    if (!user) return null;

    return (
        <div className="max-w-2xl space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
                <p className="text-sm text-slate-500 mt-1">Your account details</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold"
                        style={{ background: '#3b82f6' }}>
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
                        <p className="text-sm text-slate-500">{user.organization_name}</p>
                        <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-md"
                            style={{
                                background: user.verification_status === 'verified' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                                color: user.verification_status === 'verified' ? '#10b981' : '#f59e0b',
                            }}>
                            {user.verification_status === 'verified' ? '✓ Verified' : '⏳ Pending Verification'}
                        </span>
                    </div>
                </div>

                <div className="space-y-4">
                    {[
                        { label: 'Email', value: user.email },
                        { label: 'Role', value: user.role.toUpperCase() },
                        { label: 'Organization', value: user.organization_name },
                        { label: 'Member Since', value: new Date(user.created_at).toLocaleDateString() },
                        { label: 'User ID', value: user.id },
                    ].map(field => (
                        <div key={field.label} className="flex items-center justify-between py-3 border-b border-white/5">
                            <span className="text-sm text-slate-500">{field.label}</span>
                            <span className="text-sm text-slate-900 font-medium">{field.value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
