'use client';

import React from 'react';
import Link from 'next/link';
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
                background: '#1a1f36',
            }}
        >
            {/* Logo */}
            <div className="p-6 pb-4">
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: '#3b82f6' }}>
                        🌍
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-white">SDG Nexus</h1>
                        <p className="text-[10px] tracking-wider uppercase" style={{ color: '#64748b' }}>Impact Intelligence</p>
                    </div>
                </Link>
            </div>

            {/* Role Badge */}
            <div className="mx-4 mb-5 px-3 py-2 rounded-lg text-xs font-semibold text-center"
                style={{
                    background: 'rgba(59,130,246,0.15)',
                    color: '#60a5fa',
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
                                background: isActive ? 'rgba(59,130,246,0.15)' : 'transparent',
                                color: isActive ? '#60a5fa' : '#94a3b8',
                                fontWeight: isActive ? 600 : 400,
                            }}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.label}</span>
                            {isActive && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: '#3b82f6' }} />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Info & Logout */}
            <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: '#3b82f6' }}>
                        {user?.name?.charAt(0) || '?'}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-200 truncate">{user?.name}</p>
                        <p className="text-xs truncate" style={{ color: '#64748b' }}>{user?.organization_name}</p>
                    </div>
                </div>
                <button onClick={logout}
                    className="w-full px-3 py-2 rounded-lg text-xs transition-all cursor-pointer"
                    style={{ color: '#94a3b8', background: 'transparent', border: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.1)'; e.currentTarget.style.color = '#f87171'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
                >
                    ↪ Sign Out
                </button>
            </div>
        </motion.aside>
    );
}
