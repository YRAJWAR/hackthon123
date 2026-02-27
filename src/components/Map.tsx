'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { SDG_INFO, RegionData } from '@/data/mockData';

// Dynamically import leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

interface HeatmapProps {
    regions: RegionData[];
    colorBy: 'funding' | 'ngo_count' | 'sdg';
    selectedSDG?: number;
}

function getIntensityColor(value: number, max: number, colorBy: string): string {
    const ratio = value / max;
    if (colorBy === 'funding') {
        return `rgba(6, 182, 212, ${0.3 + ratio * 0.7})`;
    }
    if (colorBy === 'ngo_count') {
        return `rgba(16, 185, 129, ${0.3 + ratio * 0.7})`;
    }
    return `rgba(139, 92, 246, ${0.3 + ratio * 0.7})`;
}

function getRadius(value: number, max: number): number {
    return 12 + (value / max) * 28;
}

export default function SDGHeatmap({ regions, colorBy, selectedSDG }: HeatmapProps) {
    const maxVal = Math.max(...regions.map(r =>
        colorBy === 'funding' ? r.funding :
            colorBy === 'ngo_count' ? r.ngo_count :
                r.projects
    ));

    const filtered = selectedSDG
        ? regions.filter(r => r.primary_sdgs.includes(selectedSDG))
        : regions;

    return (
        <div className="w-full h-[500px] rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
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
                {filtered.map((region) => {
                    const value = colorBy === 'funding' ? region.funding :
                        colorBy === 'ngo_count' ? region.ngo_count :
                            region.projects;

                    return (
                        <CircleMarker
                            key={region.name}
                            center={[region.lat, region.lng]}
                            radius={getRadius(value, maxVal)}
                            pathOptions={{
                                fillColor: getIntensityColor(value, maxVal, colorBy),
                                fillOpacity: 0.7,
                                color: colorBy === 'funding' ? '#06b6d4' :
                                    colorBy === 'ngo_count' ? '#10b981' : '#8b5cf6',
                                weight: 1.5,
                                opacity: 0.8,
                            }}
                        >
                            <Popup>
                                <div style={{ color: '#e2e8f0', minWidth: 180 }}>
                                    <h3 style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: '#06b6d4' }}>
                                        {region.name}
                                    </h3>
                                    <p style={{ fontSize: 12, marginBottom: 4 }}>
                                        💰 Funding: ₹{(region.funding / 100000).toFixed(1)}L
                                    </p>
                                    <p style={{ fontSize: 12, marginBottom: 4 }}>
                                        🏢 NGOs: {region.ngo_count}
                                    </p>
                                    <p style={{ fontSize: 12, marginBottom: 4 }}>
                                        📁 Projects: {region.projects}
                                    </p>
                                    <p style={{ fontSize: 12, marginBottom: 4 }}>
                                        👥 Beneficiaries: {region.beneficiaries.toLocaleString()}
                                    </p>
                                    <div style={{ marginTop: 8 }}>
                                        <p style={{ fontSize: 11, color: '#94a3b8', marginBottom: 4 }}>SDG Focus:</p>
                                        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                                            {region.primary_sdgs.map(s => (
                                                <span key={s} style={{
                                                    fontSize: 10, padding: '2px 6px', borderRadius: 6,
                                                    background: SDG_INFO.find(i => i.id === s)?.color + '30',
                                                    color: SDG_INFO.find(i => i.id === s)?.color,
                                                }}>
                                                    SDG {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </CircleMarker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
