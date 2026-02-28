'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { motion } from 'framer-motion';

const NAV_ITEMS: Record<string, { label: string; href: string; icon: string }[]> = {
    ngo: [
        { label: 'Dashboard', href: '/dashboard/ngo', icon: '📊' },
        { label: 'Create Project', href: '/dashboard/ngo/create-project', icon: '➕' },
        { label: 'Heatmap', href: '/dashboard/heatmap', icon: '🗺️' },
        { label: 'Activity Ledger', href: '/dashboard/ledger', icon: '📋' },
        { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: '🏆' },
        { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
        { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
    ],
    government: [
        { label: 'Intelligence', href: '/dashboard/government', icon: '🏛️' },
        { label: 'Heatmap', href: '/dashboard/heatmap', icon: '🗺️' },
        { label: 'Activity Ledger', href: '/dashboard/ledger', icon: '📋' },
        { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: '🏆' },
        { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
        { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
    ],
    corporate: [
        { label: 'CSR Dashboard', href: '/dashboard/corporate', icon: '🏢' },
        { label: 'Heatmap', href: '/dashboard/heatmap', icon: '🗺️' },
        { label: 'Activity Ledger', href: '/dashboard/ledger', icon: '📋' },
        { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: '🏆' },
        { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
        { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
    ],
    donor: [
        { label: 'Dashboard', href: '/dashboard/donor', icon: '💝' },
        { label: 'Heatmap', href: '/dashboard/heatmap', icon: '🗺️' },
        { label: 'Activity Ledger', href: '/dashboard/ledger', icon: '📋' },
        { label: 'Leaderboard', href: '/dashboard/leaderboard', icon: '🏆' },
        { label: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
        { label: 'Profile', href: '/dashboard/profile', icon: '👤' },
    ],
};

export default function Sidebar() {
    const { user, logout } = useAuth();
    const pathname = usePathname();
    const role = user?.role || 'ngo';
    const items = NAV_ITEMS[role] || NAV_ITEMS.ngo;

    return (
        <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-screen w-[260px] flex flex-col z-50"
            style={{
                background: '#ffffff',
                borderRight: '1px solid #e2e8f0',
                boxShadow: '2px 0 8px rgba(0,0,0,0.04)',
            }}
        >
            {/* Logo */}
            <div className="p-6 pb-4">
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                        style={{ background: '#0f172a', padding: 2 }}>
                        <Image src="/logo.png" alt="SDG Nexus" width={36} height={36}
                            style={{ objectFit: 'contain' }} />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold" style={{ color: '#0f172a' }}>SDG Nexus</h1>
                        <p className="text-[10px] tracking-wider uppercase" style={{ color: '#94a3b8' }}>Impact Intelligence</p>
                    </div>
                </Link>
            </div>

            {/* Role Badge */}
            <div className="mx-4 mb-5 px-3 py-2 rounded-lg text-xs font-semibold text-center"
                style={{
                    background: '#f0fdf4',
                    color: '#16a34a',
                    border: '1px solid #dcfce7',
                }}>
                {role.toUpperCase()} DASHBOARD
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all no-underline"
                            style={{
                                background: isActive ? '#f0fdf4' : 'transparent',
                                color: isActive ? '#15803d' : '#64748b',
                                fontWeight: isActive ? 600 : 400,
                                borderLeft: isActive ? '3px solid #22c55e' : '3px solid transparent',
                            }}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Info & Logout */}
            <div className="p-4" style={{ borderTop: '1px solid #e2e8f0' }}>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: '#22c55e' }}>
                        {user?.name?.charAt(0) || '?'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: '#0f172a' }}>{user?.name}</p>
                        <p className="text-[11px] truncate" style={{ color: '#94a3b8' }}>{user?.organization_name}</p>
                    </div>
                </div>
                <button onClick={logout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer"
                    style={{
                        color: '#ef4444',
                        background: '#fef2f2',
                        border: '1.5px solid #fecaca',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = '#fee2e2';
                        e.currentTarget.style.borderColor = '#fca5a5';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(239,68,68,0.15)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = '#fef2f2';
                        e.currentTarget.style.borderColor = '#fecaca';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <span>🚪</span>
                    <span>Sign Out</span>
                </button>
            </div>
        </motion.aside>
    );
}
