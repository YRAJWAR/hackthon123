'use client';

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { SDG_INFO, RegionData } from '@/data/mockData';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// ──────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────

export type ColorMode = 'composite' | 'funding' | 'beneficiaries' | 'ngo_density' | 'efficiency' | 'sdg' | 'risk';

interface HeatmapProps {
    regions: RegionData[];
    colorBy: ColorMode;
    selectedSDG?: number;
    showLabels?: boolean;
    intensityScale?: number;
}

// ──────────────────────────────────────────────────────────────
// Multi-Variable Composite Score Engine
// ──────────────────────────────────────────────────────────────

interface RegionMetrics {
    fundingNorm: number;      // 0-1 normalized
    beneficiaryNorm: number;  // 0-1 normalized
    ngoDensityNorm: number;   // 0-1 normalized
    projectNorm: number;      // 0-1 normalized
    efficiency: number;       // funding per beneficiary (lower = better)
    efficiencyNorm: number;   // 0-1 normalized (inverted)
    compositeScore: number;   // 0-1 weighted sum
    densityTier: 'critical' | 'high' | 'medium' | 'low' | 'minimal';
    riskLevel: number;        // 0-1 (high = underfunded)
}

function normalize(value: number, min: number, max: number): number {
    if (max === min) return 0.5;
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
}

function computeMetrics(regions: RegionData[]): Map<string, RegionMetrics> {
    const map = new Map<string, RegionMetrics>();

    // Compute raw ranges
    const fundings = regions.map(r => r.funding);
    const bens = regions.map(r => r.beneficiaries);
    const ngos = regions.map(r => r.ngo_count);
    const projs = regions.map(r => r.projects);
    const efficiencies = regions.map(r => r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0);

    const [minF, maxF] = [Math.min(...fundings), Math.max(...fundings)];
    const [minB, maxB] = [Math.min(...bens), Math.max(...bens)];
    const [minN, maxN] = [Math.min(...ngos), Math.max(...ngos)];
    const [minP, maxP] = [Math.min(...projs), Math.max(...projs)];
    const [minE, maxE] = [Math.min(...efficiencies), Math.max(...efficiencies)];

    // National averages for risk calculation
    const avgFundingPerBen = fundings.reduce((a, b) => a + b, 0) / bens.reduce((a, b) => a + b, 0);

    for (const r of regions) {
        const fundingNorm = normalize(r.funding, minF, maxF);
        const beneficiaryNorm = normalize(r.beneficiaries, minB, maxB);
        const ngoDensityNorm = normalize(r.ngo_count, minN, maxN);
        const projectNorm = normalize(r.projects, minP, maxP);
        const eff = r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0;
        const efficiencyNorm = 1 - normalize(eff, minE, maxE); // lower cost = higher score

        // Composite: weighted multi-factor score
        const compositeScore =
            fundingNorm * 0.20 +
            beneficiaryNorm * 0.30 +
            ngoDensityNorm * 0.15 +
            projectNorm * 0.15 +
            efficiencyNorm * 0.20;

        // Density tier based on composite
        let densityTier: RegionMetrics['densityTier'];
        if (compositeScore >= 0.8) densityTier = 'critical';
        else if (compositeScore >= 0.6) densityTier = 'high';
        else if (compositeScore >= 0.4) densityTier = 'medium';
        else if (compositeScore >= 0.2) densityTier = 'low';
        else densityTier = 'minimal';

        // Risk: inverse — regions with low funding per beneficiary = high risk
        const localFPB = r.beneficiaries > 0 ? r.funding / r.beneficiaries : 0;
        const riskLevel = Math.max(0, Math.min(1, 1 - (localFPB / (avgFundingPerBen * 2))));

        map.set(r.name, {
            fundingNorm, beneficiaryNorm, ngoDensityNorm, projectNorm,
            efficiency: eff, efficiencyNorm, compositeScore, densityTier, riskLevel,
        });
    }

    return map;
}

// ──────────────────────────────────────────────────────────────
// Color Engine — density-aware gradient
// ──────────────────────────────────────────────────────────────

function getDensityColor(intensity: number, mode: ColorMode): string {
    // intensity is 0-1, higher = more intense / denser

    // Clamp
    const t = Math.max(0, Math.min(1, intensity));

    switch (mode) {
        case 'composite':
            // Green to Yellow to Orange to Red gradient
            if (t < 0.25) return interpolateColor([34, 197, 94], [34, 197, 94], t / 0.25, 0.25 + t * 0.5);
            if (t < 0.5) return interpolateColor([34, 197, 94], [250, 204, 21], (t - 0.25) / 0.25, 0.45 + t * 0.3);
            if (t < 0.75) return interpolateColor([250, 204, 21], [249, 115, 22], (t - 0.5) / 0.25, 0.55 + t * 0.25);
            return interpolateColor([249, 115, 22], [239, 68, 68], (t - 0.75) / 0.25, 0.7 + t * 0.2);

        case 'funding':
            // Dark green to bright green to gold
            if (t < 0.5) return interpolateColor([22, 163, 74], [34, 197, 94], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([34, 197, 94], [250, 204, 21], (t - 0.5) / 0.5, 0.55 + t * 0.3);

        case 'beneficiaries':
            // Teal gradient
            if (t < 0.5) return interpolateColor([20, 184, 166], [6, 182, 212], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([6, 182, 212], [56, 189, 248], (t - 0.5) / 0.5, 0.55 + t * 0.35);

        case 'ngo_density':
            // Purple gradient
            if (t < 0.5) return interpolateColor([88, 28, 135], [139, 92, 246], t / 0.5, 0.3 + t * 0.5);
            return interpolateColor([139, 92, 246], [196, 181, 253], (t - 0.5) / 0.5, 0.55 + t * 0.35);

        case 'efficiency':
            // Blue gradient (high efficiency = blue, low = red)
            if (t >= 0.5) return interpolateColor([34, 197, 94], [6, 182, 212], (t - 0.5) / 0.5, 0.5 + t * 0.3);
            return interpolateColor([249, 115, 22], [34, 197, 94], t / 0.5, 0.4 + t * 0.3);

        case 'risk':
            // Green (safe) to red (high risk)
            if (t < 0.3) return interpolateColor([34, 197, 94], [250, 204, 21], t / 0.3, 0.3 + t * 0.5);
            if (t < 0.6) return interpolateColor([250, 204, 21], [249, 115, 22], (t - 0.3) / 0.3, 0.5 + t * 0.3);
            return interpolateColor([249, 115, 22], [239, 68, 68], (t - 0.6) / 0.4, 0.65 + t * 0.25);

        case 'sdg':
            return `rgba(139, 92, 246, ${0.3 + t * 0.65})`;

        default:
            return `rgba(34, 197, 94, ${0.3 + t * 0.65})`;
    }
}

function interpolateColor(from: number[], to: number[], t: number, alpha: number): string {
    const r = Math.round(from[0] + (to[0] - from[0]) * t);
    const g = Math.round(from[1] + (to[1] - from[1]) * t);
    const b = Math.round(from[2] + (to[2] - from[2]) * t);
    return `rgba(${r}, ${g}, ${b}, ${Math.min(0.95, alpha)})`;
}

function getBorderColor(mode: ColorMode): string {
    switch (mode) {
        case 'composite': return '#f59e0b';
        case 'funding': return '#22c55e';
        case 'beneficiaries': return '#06b6d4';
        case 'ngo_density': return '#8b5cf6';
        case 'efficiency': return '#3b82f6';
        case 'risk': return '#ef4444';
        case 'sdg': return '#a855f7';
        default: return '#22c55e';
    }
}

// ──────────────────────────────────────────────────────────────
// Radius Engine — multi-variable sizing
// ──────────────────────────────────────────────────────────────

function getRadius(intensity: number, scale: number = 1): number {
    // Non-linear scaling: sqrt makes small values more visible
    const base = 10 + Math.sqrt(intensity) * 32;
    return Math.max(8, Math.min(50, base * scale));
}

// ──────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────

export default function SDGHeatmap({
    regions, colorBy, selectedSDG, showLabels = true, intensityScale = 1,
}: HeatmapProps) {

    // Compute all region metrics
    const metricsMap = useMemo(() => computeMetrics(regions), [regions]);

    // Filter by SDG
    const filtered = useMemo(() => {
        return selectedSDG
            ? regions.filter(r => r.primary_sdgs.includes(selectedSDG))
            : regions;
    }, [regions, selectedSDG]);

    // Get intensity value for each region based on mode
    const getIntensity = (region: RegionData): number => {
        const metrics = metricsMap.get(region.name);
        if (!metrics) return 0;

        switch (colorBy) {
            case 'composite': return metrics.compositeScore;
            case 'funding': return metrics.fundingNorm;
            case 'beneficiaries': return metrics.beneficiaryNorm;
            case 'ngo_density': return metrics.ngoDensityNorm;
            case 'efficiency': return metrics.efficiencyNorm;
            case 'risk': return metrics.riskLevel;
            case 'sdg': return metrics.projectNorm;
            default: return metrics.compositeScore;
        }
    };

    return (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden relative"
            style={{ border: '1px solid #e2e8f0' }}>

            <MapContainer
                center={[22.5, 78.9]}
                zoom={5}
                style={{ width: '100%', height: '100%', background: '#0a0f1e' }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {/* Outer glow rings for high-density areas */}
                {filtered.map((region) => {
                    const intensity = getIntensity(region);
                    if (intensity < 0.6) return null;
                    return (
                        <CircleMarker
                            key={`glow-${region.name}`}
                            center={[region.lat, region.lng]}
                            radius={getRadius(intensity, intensityScale) * 1.6}
                            pathOptions={{
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.08,
                                color: 'transparent',
                                weight: 0,
                            }}
                        />
                    );
                })}

                {/* Mid glow for medium+ areas */}
                {filtered.map((region) => {
                    const intensity = getIntensity(region);
                    if (intensity < 0.35) return null;
                    return (
                        <CircleMarker
                            key={`mid-${region.name}`}
                            center={[region.lat, region.lng]}
                            radius={getRadius(intensity, intensityScale) * 1.25}
                            pathOptions={{
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.15,
                                color: 'transparent',
                                weight: 0,
                            }}
                        />
                    );
                })}

                {/* Main circles */}
                {filtered.map((region) => {
                    const intensity = getIntensity(region);
                    const metrics = metricsMap.get(region.name);
                    const radius = getRadius(intensity, intensityScale);
                    const tierColors: Record<string, string> = {
                        critical: '#ef4444', high: '#f59e0b', medium: '#22c55e', low: '#06b6d4', minimal: '#64748b',
                    };

                    return (
                        <CircleMarker
                            key={region.name}
                            center={[region.lat, region.lng]}
                            radius={radius}
                            pathOptions={{
                                fillColor: getDensityColor(intensity, colorBy),
                                fillOpacity: 0.75,
                                color: getBorderColor(colorBy),
                                weight: intensity > 0.6 ? 2.5 : 1.5,
                                opacity: 0.6 + intensity * 0.4,
                            }}
                        >
                            <Popup>
                                <div style={{ color: '#e2e8f0', minWidth: 260, fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    {/* Header */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                                        <h3 style={{ fontWeight: 800, fontSize: 15, color: '#ffffff', margin: 0 }}>
                                            {region.name}
                                        </h3>
                                        {metrics && (
                                            <span style={{
                                                fontSize: 10, padding: '3px 8px', borderRadius: 8,
                                                fontWeight: 700, textTransform: 'uppercase',
                                                background: tierColors[metrics.densityTier] + '25',
                                                color: tierColors[metrics.densityTier],
                                                border: `1px solid ${tierColors[metrics.densityTier]}40`,
                                            }}>
                                                {metrics.densityTier}
                                            </span>
                                        )}
                                    </div>

                                    {/* Stats Grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
                                        <StatItem icon="💰" label="Funding" value={`₹${(region.funding / 100000).toFixed(1)}L`} color="#22c55e" />
                                        <StatItem icon="👥" label="Beneficiaries" value={region.beneficiaries.toLocaleString()} color="#06b6d4" />
                                        <StatItem icon="🏢" label="NGOs" value={String(region.ngo_count)} color="#8b5cf6" />
                                        <StatItem icon="📁" label="Projects" value={String(region.projects)} color="#f59e0b" />
                                    </div>

                                    {/* Composite Score Bar */}
                                    {metrics && (
                                        <div style={{ marginBottom: 10 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#94a3b8', marginBottom: 4 }}>
                                                <span>Composite Score</span>
                                                <span style={{ fontWeight: 700, color: '#ffffff' }}>{Math.round(metrics.compositeScore * 100)}/100</span>
                                            </div>
                                            <div style={{ height: 6, borderRadius: 4, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                                                <div style={{
                                                    height: '100%', borderRadius: 4, width: `${metrics.compositeScore * 100}%`,
                                                    background: `linear-gradient(90deg, #22c55e, ${metrics.compositeScore > 0.7 ? '#ef4444' : metrics.compositeScore > 0.4 ? '#f59e0b' : '#22c55e'})`,
                                                }} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Metric Bars */}
                                    {metrics && (
                                        <div style={{ marginBottom: 10 }}>
                                            <MiniBar label="Funding Intensity" value={metrics.fundingNorm} color="#22c55e" />
                                            <MiniBar label="Beneficiary Reach" value={metrics.beneficiaryNorm} color="#06b6d4" />
                                            <MiniBar label="NGO Density" value={metrics.ngoDensityNorm} color="#8b5cf6" />
                                            <MiniBar label="Efficiency" value={metrics.efficiencyNorm} color="#3b82f6" />
                                            <MiniBar label="Risk Level" value={metrics.riskLevel} color="#ef4444" />
                                        </div>
                                    )}

                                    {/* Efficiency stat */}
                                    {metrics && (
                                        <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 8, padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.04)' }}>
                                            ⚡ ₹{Math.round(metrics.efficiency).toLocaleString()} per beneficiary
                                            {metrics.efficiency < 50 ? ' — Excellent' : metrics.efficiency < 100 ? ' — Good' : ' — Needs attention'}
                                        </div>
                                    )}

                                    {/* SDG Tags */}
                                    <div>
                                        <p style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>SDG Focus:</p>
                                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                                            {region.primary_sdgs.map(s => {
                                                const info = SDG_INFO.find(i => i.id === s);
                                                return (
                                                    <span key={s} style={{
                                                        fontSize: 10, padding: '2px 8px', borderRadius: 6,
                                                        background: (info?.color || '#666') + '30',
                                                        color: info?.color || '#fff',
                                                        fontWeight: 600,
                                                    }}>
                                                        {info?.icon} SDG {s}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>

            {/* Gradient Legend */}
            <div style={{
                position: 'absolute', bottom: 16, right: 16, zIndex: 1000,
                background: 'rgba(15, 23, 42, 0.92)', backdropFilter: 'blur(12px)',
                borderRadius: 12, padding: '12px 16px',
                border: '1px solid rgba(255,255,255,0.1)',
                minWidth: 180,
            }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                    {colorBy === 'composite' ? '🔥 Composite Density' :
                        colorBy === 'funding' ? '💰 Funding Intensity' :
                            colorBy === 'beneficiaries' ? '👥 Beneficiary Reach' :
                                colorBy === 'ngo_density' ? '🏢 NGO Density' :
                                    colorBy === 'efficiency' ? '⚡ Efficiency Score' :
                                        colorBy === 'risk' ? '⚠️ Risk Level' : '🎯 SDG Focus'}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 9, color: '#64748b' }}>Low</span>
                    <div style={{
                        flex: 1, height: 8, borderRadius: 4, overflow: 'hidden',
                        background: colorBy === 'composite' ? 'linear-gradient(90deg, #22c55e, #facc15, #f97316, #ef4444)' :
                            colorBy === 'funding' ? 'linear-gradient(90deg, #166534, #22c55e, #facc15)' :
                                colorBy === 'beneficiaries' ? 'linear-gradient(90deg, #14b8a6, #06b6d4, #38bdf8)' :
                                    colorBy === 'ngo_density' ? 'linear-gradient(90deg, #581c87, #8b5cf6, #c4b5fd)' :
                                        colorBy === 'efficiency' ? 'linear-gradient(90deg, #f97316, #22c55e, #06b6d4)' :
                                            colorBy === 'risk' ? 'linear-gradient(90deg, #22c55e, #facc15, #f97316, #ef4444)' :
                                                'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(139,92,246,0.95))',
                    }} />
                    <span style={{ fontSize: 9, color: '#64748b' }}>High</span>
                </div>

                {/* Tier indicators */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                    {[
                        { label: 'Minimal', color: '#64748b' },
                        { label: 'Low', color: '#06b6d4' },
                        { label: 'Med', color: '#22c55e' },
                        { label: 'High', color: '#f59e0b' },
                        { label: 'Critical', color: '#ef4444' },
                    ].map(tier => (
                        <div key={tier.label} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: tier.color }} />
                            <span style={{ fontSize: 8, color: '#64748b' }}>{tier.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary stats overlay */}
            <div style={{
                position: 'absolute', top: 16, left: 16, zIndex: 1000,
                background: 'rgba(15, 23, 42, 0.88)', backdropFilter: 'blur(12px)',
                borderRadius: 12, padding: '10px 14px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <MiniStat label="Regions" value={String(filtered.length)} />
                    <MiniStat label="Total ₹" value={`${(filtered.reduce((s, r) => s + r.funding, 0) / 10000000).toFixed(1)}Cr`} />
                    <MiniStat label="Beneficiaries" value={`${(filtered.reduce((s, r) => s + r.beneficiaries, 0) / 1000).toFixed(0)}K`} />
                    <MiniStat label="NGOs" value={String(filtered.reduce((s, r) => s + r.ngo_count, 0))} />
                </div>
            </div>
        </div>
    );
}

// ──────────────────────────────────────────────────────────────
// Sub-components for popups
// ──────────────────────────────────────────────────────────────

function StatItem({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
    return (
        <div style={{
            padding: '6px 8px', borderRadius: 8,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
        }}>
            <div style={{ fontSize: 10, color: '#64748b' }}>{icon} {label}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color }}>{value}</div>
        </div>
    );
}

function MiniBar({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div style={{ marginBottom: 4 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#64748b', marginBottom: 2 }}>
                <span>{label}</span>
                <span style={{ color: '#94a3b8', fontWeight: 600 }}>{Math.round(value * 100)}%</span>
            </div>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: 2, width: `${value * 100}%`, background: color, transition: 'width 0.6s' }} />
            </div>
        </div>
    );
}

function MiniStat({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#ffffff' }}>{value}</div>
            <div style={{ fontSize: 8, color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5 }}>{label}</div>
        </div>
    );
}
