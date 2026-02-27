'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/ui/Sidebar';
import { useAuth } from '@/lib/AuthContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center" style={{ background: '#f1f5f9' }}>
                <div className="text-center">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl animate-pulse"
                        style={{ background: '#3b82f6' }}>🌍</div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>Loading SDG Nexus...</p>
                </div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="min-h-screen" style={{ background: '#f1f5f9' }}>
            <Sidebar />
            <main className="ml-[260px] p-6 min-h-screen">
                {children}
            </main>
        </div>
    );
}
