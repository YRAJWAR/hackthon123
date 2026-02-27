'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';

export default function DashboardRedirect() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            const rolePaths: Record<string, string> = {
                ngo: '/dashboard/ngo',
                government: '/dashboard/government',
                corporate: '/dashboard/corporate',
                donor: '/dashboard/donor',
            };
            router.push(rolePaths[user.role] || '/dashboard/ngo');
        }
    }, [user, router]);

    return null;
}
