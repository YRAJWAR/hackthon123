import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { AuthProvider } from "@/lib/AuthContext";
import { DataProvider } from "@/lib/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SDG Nexus — The Operating System for SDG Partnerships & Impact Intelligence",
    description: "Multi-stakeholder collaboration platform integrating AI-powered SDG alignment, standardized impact tracking, smart partnership matching, and transparent activity verification.",
    keywords: "SDG, sustainability, impact, CSR, NGO, partnerships, climate, development",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌍</text></svg>" />
            </head>
            <body className={inter.className} style={{ background: '#0a0f1e' }}>
                <AuthProvider>
                    <DataProvider>
                        {children}
                    </DataProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
