(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/mockData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// SDG Nexus — Mock Data
// ============================================================
__turbopack_context__.s([
    "GOV_FUNDING_GAP",
    ()=>GOV_FUNDING_GAP,
    "GOV_RISK_TREND",
    ()=>GOV_RISK_TREND,
    "MOCK_ACTIVITIES",
    ()=>MOCK_ACTIVITIES,
    "MOCK_DONATIONS",
    ()=>MOCK_DONATIONS,
    "MOCK_IMPACT_SCORES",
    ()=>MOCK_IMPACT_SCORES,
    "MOCK_PARTNER_NGOS",
    ()=>MOCK_PARTNER_NGOS,
    "MOCK_PROJECTS",
    ()=>MOCK_PROJECTS,
    "MOCK_REGIONS",
    ()=>MOCK_REGIONS,
    "MOCK_USERS",
    ()=>MOCK_USERS,
    "SDG_INFO",
    ()=>SDG_INFO,
    "UNDERFUNDED_ALERTS",
    ()=>UNDERFUNDED_ALERTS
]);
const SDG_INFO = [
    {
        id: 1,
        name: 'No Poverty',
        color: '#e5243b',
        icon: '🎯'
    },
    {
        id: 2,
        name: 'Zero Hunger',
        color: '#dda63a',
        icon: '🌾'
    },
    {
        id: 3,
        name: 'Good Health',
        color: '#4c9f38',
        icon: '🏥'
    },
    {
        id: 4,
        name: 'Quality Education',
        color: '#c5192d',
        icon: '📚'
    },
    {
        id: 5,
        name: 'Gender Equality',
        color: '#ff3a21',
        icon: '⚧'
    },
    {
        id: 6,
        name: 'Clean Water',
        color: '#26bde2',
        icon: '💧'
    },
    {
        id: 7,
        name: 'Affordable Energy',
        color: '#fcc30b',
        icon: '⚡'
    },
    {
        id: 8,
        name: 'Decent Work',
        color: '#a21949',
        icon: '💼'
    },
    {
        id: 9,
        name: 'Industry & Innovation',
        color: '#fd6e25',
        icon: '🏭'
    },
    {
        id: 10,
        name: 'Reduced Inequalities',
        color: '#dd1367',
        icon: '⚖️'
    },
    {
        id: 11,
        name: 'Sustainable Cities',
        color: '#fd9d24',
        icon: '🏙️'
    },
    {
        id: 12,
        name: 'Responsible Consumption',
        color: '#bf8b2e',
        icon: '♻️'
    },
    {
        id: 13,
        name: 'Climate Action',
        color: '#3f7e44',
        icon: '🌍'
    },
    {
        id: 14,
        name: 'Life Below Water',
        color: '#0a97d9',
        icon: '🐟'
    },
    {
        id: 15,
        name: 'Life on Land',
        color: '#56c02b',
        icon: '🌲'
    },
    {
        id: 16,
        name: 'Peace & Justice',
        color: '#0056c8',
        icon: '⚖️'
    },
    {
        id: 17,
        name: 'Partnerships',
        color: '#19486a',
        icon: '🤝'
    }
];
const MOCK_USERS = [
    {
        id: 'u1',
        name: 'Priya Sharma',
        email: 'ngo@sdgnexus.org',
        password: 'password123',
        role: 'ngo',
        organization_name: 'GreenFuture Foundation',
        verification_status: 'verified',
        created_at: '2024-01-15'
    },
    {
        id: 'u2',
        name: 'Rajesh Kumar',
        email: 'gov@sdgnexus.org',
        password: 'password123',
        role: 'government',
        organization_name: 'NITI Aayog',
        verification_status: 'verified',
        created_at: '2024-02-01'
    },
    {
        id: 'u3',
        name: 'Anita Desai',
        email: 'corp@sdgnexus.org',
        password: 'password123',
        role: 'corporate',
        organization_name: 'TechServe India CSR',
        verification_status: 'verified',
        created_at: '2024-03-10'
    },
    {
        id: 'u4',
        name: 'Vikram Patel',
        email: 'donor@sdgnexus.org',
        password: 'password123',
        role: 'donor',
        organization_name: 'Individual',
        verification_status: 'verified',
        created_at: '2024-04-05'
    }
];
const MOCK_PROJECTS = [
    {
        id: 'p1',
        title: 'Clean Water for Rural Maharashtra',
        description: 'Installing water purification systems in 50 villages across drought-prone regions of Maharashtra to provide clean drinking water to over 25,000 people.',
        organization_id: 'u1',
        organization_name: 'GreenFuture Foundation',
        budget: 2500000,
        spent: 1800000,
        location: {
            lat: 19.076,
            lng: 72.877,
            name: 'Maharashtra'
        },
        timeline: {
            start: '2024-03-01',
            end: '2025-03-01'
        },
        beneficiary_count: 25000,
        sdg_tags: [
            6,
            3,
            1
        ],
        sdg_reasoning: 'Water purification (SDG 6), health improvement (SDG 3), poverty alleviation (SDG 1)',
        status: 'active',
        created_at: '2024-03-01',
        impact_score: 847
    },
    {
        id: 'p2',
        title: 'Solar Schools Initiative',
        description: 'Installing solar panels in 100 government schools across Rajasthan, providing clean energy and digital learning tools.',
        organization_id: 'u1',
        organization_name: 'GreenFuture Foundation',
        budget: 5000000,
        spent: 3200000,
        location: {
            lat: 26.912,
            lng: 75.787,
            name: 'Rajasthan'
        },
        timeline: {
            start: '2024-06-01',
            end: '2025-12-01'
        },
        beneficiary_count: 50000,
        sdg_tags: [
            7,
            4,
            13
        ],
        sdg_reasoning: 'Clean energy (SDG 7), quality education (SDG 4), climate action (SDG 13)',
        status: 'active',
        created_at: '2024-06-01',
        impact_score: 912
    },
    {
        id: 'p3',
        title: 'Women Skill Development Program',
        description: 'Training 5,000 women in digital skills and entrepreneurship across Bihar and UP.',
        organization_id: 'u1',
        organization_name: 'GreenFuture Foundation',
        budget: 1800000,
        spent: 900000,
        location: {
            lat: 25.594,
            lng: 85.137,
            name: 'Bihar'
        },
        timeline: {
            start: '2024-09-01',
            end: '2025-09-01'
        },
        beneficiary_count: 5000,
        sdg_tags: [
            5,
            8,
            4
        ],
        sdg_reasoning: 'Gender equality (SDG 5), decent work (SDG 8), education (SDG 4)',
        status: 'active',
        created_at: '2024-09-01',
        impact_score: 765
    },
    {
        id: 'p4',
        title: 'Urban Waste Management System',
        description: 'Building smart waste segregation and recycling infrastructure in 20 wards of Bengaluru.',
        organization_id: 'org2',
        organization_name: 'EcoIndia Trust',
        budget: 4200000,
        spent: 2100000,
        location: {
            lat: 12.971,
            lng: 77.594,
            name: 'Karnataka'
        },
        timeline: {
            start: '2024-04-01',
            end: '2025-04-01'
        },
        beneficiary_count: 120000,
        sdg_tags: [
            11,
            12,
            13
        ],
        sdg_reasoning: 'Sustainable cities (SDG 11), responsible consumption (SDG 12), climate (SDG 13)',
        status: 'active',
        created_at: '2024-04-01',
        impact_score: 890
    },
    {
        id: 'p5',
        title: 'Tribal Healthcare Access Program',
        description: 'Deploying mobile health clinics across 80 tribal villages in Odisha and Jharkhand.',
        organization_id: 'org3',
        organization_name: 'HealthBridge India',
        budget: 3500000,
        spent: 2800000,
        location: {
            lat: 20.940,
            lng: 84.803,
            name: 'Odisha'
        },
        timeline: {
            start: '2024-01-01',
            end: '2025-06-01'
        },
        beneficiary_count: 35000,
        sdg_tags: [
            3,
            1,
            10
        ],
        sdg_reasoning: 'Health (SDG 3), poverty (SDG 1), reduced inequalities (SDG 10)',
        status: 'active',
        created_at: '2024-01-01',
        impact_score: 935
    },
    {
        id: 'p6',
        title: 'Ocean Plastic Cleanup Drive',
        description: 'Coastal cleanup and fishermen community awareness on marine ecosystem conservation in Kerala.',
        organization_id: 'org4',
        organization_name: 'BlueOcean NGO',
        budget: 1200000,
        spent: 800000,
        location: {
            lat: 9.931,
            lng: 76.267,
            name: 'Kerala'
        },
        timeline: {
            start: '2024-07-01',
            end: '2025-01-01'
        },
        beneficiary_count: 15000,
        sdg_tags: [
            14,
            12,
            13
        ],
        sdg_reasoning: 'Life below water (SDG 14), responsible consumption (SDG 12), climate (SDG 13)',
        status: 'completed',
        created_at: '2024-07-01',
        impact_score: 802
    }
];
const MOCK_ACTIVITIES = [
    {
        id: 'a1',
        project_id: 'p1',
        project_title: 'Clean Water for Rural Maharashtra',
        description: 'Installed 12 water purification units in Nashik district',
        timestamp: '2024-11-15T10:30:00Z',
        hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
        location: 'Nashik, Maharashtra',
        verified: true
    },
    {
        id: 'a2',
        project_id: 'p1',
        project_title: 'Clean Water for Rural Maharashtra',
        description: 'Water quality testing completed — 98.5% purity achieved',
        timestamp: '2024-12-01T14:15:00Z',
        hash: 'b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3',
        location: 'Nashik, Maharashtra',
        verified: true
    },
    {
        id: 'a3',
        project_id: 'p2',
        project_title: 'Solar Schools Initiative',
        description: 'Solar panel installation completed in 35 schools, Jaipur district',
        timestamp: '2024-10-20T09:00:00Z',
        hash: 'c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4',
        location: 'Jaipur, Rajasthan',
        verified: true
    },
    {
        id: 'a4',
        project_id: 'p3',
        project_title: 'Women Skill Development Program',
        description: 'First batch of 500 women completed digital literacy training',
        timestamp: '2024-12-15T11:45:00Z',
        hash: 'd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5',
        location: 'Patna, Bihar',
        verified: true
    },
    {
        id: 'a5',
        project_id: 'p4',
        project_title: 'Urban Waste Management System',
        description: 'Deployed 200 smart waste bins with IoT sensors in 8 wards',
        timestamp: '2024-11-28T16:20:00Z',
        hash: 'e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6',
        location: 'Bengaluru, Karnataka',
        verified: true
    },
    {
        id: 'a6',
        project_id: 'p5',
        project_title: 'Tribal Healthcare Access Program',
        description: 'Mobile clinic conducted 3,200 health screenings in tribal areas',
        timestamp: '2025-01-10T08:30:00Z',
        hash: 'f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7',
        location: 'Koraput, Odisha',
        verified: true
    },
    {
        id: 'a7',
        project_id: 'p5',
        project_title: 'Tribal Healthcare Access Program',
        description: 'Vaccination drive completed — 8,500 children vaccinated',
        timestamp: '2025-02-05T13:00:00Z',
        hash: 'a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8',
        location: 'Ranchi, Jharkhand',
        verified: false
    }
];
const MOCK_DONATIONS = [
    {
        id: 'd1',
        donor_id: 'u4',
        donor_name: 'Vikram Patel',
        project_id: 'p1',
        project_title: 'Clean Water for Rural Maharashtra',
        amount: 50000,
        sdg_tags: [
            6,
            3
        ],
        timestamp: '2024-06-15'
    },
    {
        id: 'd2',
        donor_id: 'u4',
        donor_name: 'Vikram Patel',
        project_id: 'p2',
        project_title: 'Solar Schools Initiative',
        amount: 100000,
        sdg_tags: [
            7,
            4
        ],
        timestamp: '2024-08-20'
    },
    {
        id: 'd3',
        donor_id: 'u4',
        donor_name: 'Vikram Patel',
        project_id: 'p5',
        project_title: 'Tribal Healthcare Access Program',
        amount: 75000,
        sdg_tags: [
            3,
            1
        ],
        timestamp: '2024-10-10'
    },
    {
        id: 'd4',
        donor_id: 'u4',
        donor_name: 'Vikram Patel',
        project_id: 'p3',
        project_title: 'Women Skill Development Program',
        amount: 25000,
        sdg_tags: [
            5,
            8
        ],
        timestamp: '2024-12-01'
    },
    {
        id: 'd5',
        donor_id: 'donor2',
        donor_name: 'Meera Gupta',
        project_id: 'p1',
        project_title: 'Clean Water for Rural Maharashtra',
        amount: 200000,
        sdg_tags: [
            6,
            3
        ],
        timestamp: '2024-07-08'
    },
    {
        id: 'd6',
        donor_id: 'donor3',
        donor_name: 'Arjun Singh',
        project_id: 'p4',
        project_title: 'Urban Waste Management System',
        amount: 150000,
        sdg_tags: [
            11,
            12
        ],
        timestamp: '2024-09-15'
    }
];
const MOCK_IMPACT_SCORES = [
    {
        organization_id: 'u1',
        overall_score: 847,
        beneficiary_scale: 88,
        outcome_score: 85,
        geographic_need: 82,
        funding_efficiency: 79,
        verification_score: 92,
        sdg_breakdown: [
            {
                sdg: 1,
                score: 720
            },
            {
                sdg: 3,
                score: 810
            },
            {
                sdg: 4,
                score: 780
            },
            {
                sdg: 5,
                score: 690
            },
            {
                sdg: 6,
                score: 920
            },
            {
                sdg: 7,
                score: 850
            },
            {
                sdg: 8,
                score: 640
            },
            {
                sdg: 13,
                score: 780
            }
        ]
    },
    {
        organization_id: 'org2',
        overall_score: 890,
        beneficiary_scale: 95,
        outcome_score: 88,
        geographic_need: 78,
        funding_efficiency: 91,
        verification_score: 85,
        sdg_breakdown: [
            {
                sdg: 11,
                score: 910
            },
            {
                sdg: 12,
                score: 870
            },
            {
                sdg: 13,
                score: 840
            }
        ]
    },
    {
        organization_id: 'org3',
        overall_score: 935,
        beneficiary_scale: 92,
        outcome_score: 96,
        geographic_need: 94,
        funding_efficiency: 88,
        verification_score: 95,
        sdg_breakdown: [
            {
                sdg: 1,
                score: 880
            },
            {
                sdg: 3,
                score: 960
            },
            {
                sdg: 10,
                score: 900
            }
        ]
    }
];
const MOCK_PARTNER_NGOS = [
    {
        id: 'u1',
        name: 'GreenFuture Foundation',
        sdg_focus: [
            6,
            3,
            7,
            4
        ],
        location: {
            lat: 19.076,
            lng: 72.877,
            state: 'Maharashtra'
        },
        impact_score: 847,
        funding_need: 3500000,
        projects_count: 3,
        beneficiaries: 80000,
        verified: true
    },
    {
        id: 'org2',
        name: 'EcoIndia Trust',
        sdg_focus: [
            11,
            12,
            13
        ],
        location: {
            lat: 12.971,
            lng: 77.594,
            state: 'Karnataka'
        },
        impact_score: 890,
        funding_need: 2100000,
        projects_count: 1,
        beneficiaries: 120000,
        verified: true
    },
    {
        id: 'org3',
        name: 'HealthBridge India',
        sdg_focus: [
            3,
            1,
            10
        ],
        location: {
            lat: 20.940,
            lng: 84.803,
            state: 'Odisha'
        },
        impact_score: 935,
        funding_need: 700000,
        projects_count: 1,
        beneficiaries: 35000,
        verified: true
    },
    {
        id: 'org4',
        name: 'BlueOcean NGO',
        sdg_focus: [
            14,
            12,
            13
        ],
        location: {
            lat: 9.931,
            lng: 76.267,
            state: 'Kerala'
        },
        impact_score: 802,
        funding_need: 400000,
        projects_count: 1,
        beneficiaries: 15000,
        verified: true
    },
    {
        id: 'org5',
        name: 'EduRise Foundation',
        sdg_focus: [
            4,
            5,
            8
        ],
        location: {
            lat: 28.613,
            lng: 77.229,
            state: 'Delhi'
        },
        impact_score: 768,
        funding_need: 1500000,
        projects_count: 2,
        beneficiaries: 20000,
        verified: true
    },
    {
        id: 'org6',
        name: 'AgroSustain India',
        sdg_focus: [
            2,
            1,
            15
        ],
        location: {
            lat: 23.259,
            lng: 77.412,
            state: 'Madhya Pradesh'
        },
        impact_score: 812,
        funding_need: 2800000,
        projects_count: 2,
        beneficiaries: 45000,
        verified: true
    }
];
const MOCK_REGIONS = [
    {
        name: 'Maharashtra',
        lat: 19.663,
        lng: 75.300,
        funding: 8500000,
        ngo_count: 24,
        primary_sdgs: [
            6,
            3,
            1
        ],
        projects: 12,
        beneficiaries: 185000
    },
    {
        name: 'Rajasthan',
        lat: 27.023,
        lng: 74.217,
        funding: 5200000,
        ngo_count: 15,
        primary_sdgs: [
            7,
            4,
            13
        ],
        projects: 8,
        beneficiaries: 92000
    },
    {
        name: 'Bihar',
        lat: 25.094,
        lng: 85.313,
        funding: 2100000,
        ngo_count: 8,
        primary_sdgs: [
            5,
            8,
            4,
            1
        ],
        projects: 5,
        beneficiaries: 45000
    },
    {
        name: 'Karnataka',
        lat: 15.317,
        lng: 75.713,
        funding: 6800000,
        ngo_count: 19,
        primary_sdgs: [
            11,
            12,
            13
        ],
        projects: 10,
        beneficiaries: 210000
    },
    {
        name: 'Odisha',
        lat: 20.940,
        lng: 84.803,
        funding: 3500000,
        ngo_count: 11,
        primary_sdgs: [
            3,
            1,
            10
        ],
        projects: 7,
        beneficiaries: 68000
    },
    {
        name: 'Kerala',
        lat: 10.850,
        lng: 76.271,
        funding: 4100000,
        ngo_count: 14,
        primary_sdgs: [
            14,
            12,
            3
        ],
        projects: 9,
        beneficiaries: 125000
    },
    {
        name: 'Tamil Nadu',
        lat: 11.127,
        lng: 78.656,
        funding: 7200000,
        ngo_count: 22,
        primary_sdgs: [
            4,
            3,
            7
        ],
        projects: 11,
        beneficiaries: 178000
    },
    {
        name: 'Uttar Pradesh',
        lat: 26.846,
        lng: 80.946,
        funding: 3800000,
        ngo_count: 9,
        primary_sdgs: [
            1,
            5,
            4
        ],
        projects: 6,
        beneficiaries: 55000
    },
    {
        name: 'Gujarat',
        lat: 22.258,
        lng: 71.192,
        funding: 6100000,
        ngo_count: 17,
        primary_sdgs: [
            8,
            9,
            7
        ],
        projects: 9,
        beneficiaries: 142000
    },
    {
        name: 'Madhya Pradesh',
        lat: 23.473,
        lng: 77.947,
        funding: 2800000,
        ngo_count: 7,
        primary_sdgs: [
            2,
            1,
            15
        ],
        projects: 4,
        beneficiaries: 38000
    },
    {
        name: 'West Bengal',
        lat: 22.986,
        lng: 87.855,
        funding: 4500000,
        ngo_count: 13,
        primary_sdgs: [
            3,
            4,
            1
        ],
        projects: 8,
        beneficiaries: 98000
    },
    {
        name: 'Delhi',
        lat: 28.704,
        lng: 77.102,
        funding: 9200000,
        ngo_count: 32,
        primary_sdgs: [
            11,
            4,
            13
        ],
        projects: 15,
        beneficiaries: 245000
    },
    {
        name: 'Punjab',
        lat: 31.147,
        lng: 75.341,
        funding: 3200000,
        ngo_count: 10,
        primary_sdgs: [
            2,
            6,
            3
        ],
        projects: 5,
        beneficiaries: 52000
    },
    {
        name: 'Jharkhand',
        lat: 23.610,
        lng: 85.279,
        funding: 1900000,
        ngo_count: 6,
        primary_sdgs: [
            1,
            3,
            10
        ],
        projects: 3,
        beneficiaries: 28000
    },
    {
        name: 'Telangana',
        lat: 18.112,
        lng: 79.019,
        funding: 5600000,
        ngo_count: 16,
        primary_sdgs: [
            9,
            8,
            4
        ],
        projects: 8,
        beneficiaries: 135000
    },
    {
        name: 'Assam',
        lat: 26.200,
        lng: 92.937,
        funding: 1500000,
        ngo_count: 5,
        primary_sdgs: [
            6,
            1,
            15
        ],
        projects: 3,
        beneficiaries: 22000
    }
];
const GOV_FUNDING_GAP = [
    {
        sdg: 'SDG 1',
        required: 120,
        allocated: 85
    },
    {
        sdg: 'SDG 2',
        required: 95,
        allocated: 45
    },
    {
        sdg: 'SDG 3',
        required: 150,
        allocated: 110
    },
    {
        sdg: 'SDG 4',
        required: 130,
        allocated: 100
    },
    {
        sdg: 'SDG 5',
        required: 80,
        allocated: 35
    },
    {
        sdg: 'SDG 6',
        required: 110,
        allocated: 70
    },
    {
        sdg: 'SDG 7',
        required: 100,
        allocated: 65
    },
    {
        sdg: 'SDG 8',
        required: 90,
        allocated: 60
    },
    {
        sdg: 'SDG 9',
        required: 140,
        allocated: 90
    },
    {
        sdg: 'SDG 10',
        required: 75,
        allocated: 30
    },
    {
        sdg: 'SDG 11',
        required: 160,
        allocated: 120
    },
    {
        sdg: 'SDG 13',
        required: 130,
        allocated: 55
    },
    {
        sdg: 'SDG 14',
        required: 60,
        allocated: 25
    },
    {
        sdg: 'SDG 15',
        required: 70,
        allocated: 30
    }
];
const GOV_RISK_TREND = [
    {
        month: 'Jul',
        risk: 32
    },
    {
        month: 'Aug',
        risk: 28
    },
    {
        month: 'Sep',
        risk: 35
    },
    {
        month: 'Oct',
        risk: 42
    },
    {
        month: 'Nov',
        risk: 38
    },
    {
        month: 'Dec',
        risk: 45
    },
    {
        month: 'Jan',
        risk: 52
    },
    {
        month: 'Feb',
        risk: 48
    }
];
const UNDERFUNDED_ALERTS = [
    {
        region: 'Jharkhand',
        sdg: 'SDG 10',
        gap: '68%',
        severity: 'critical'
    },
    {
        region: 'Assam',
        sdg: 'SDG 6',
        gap: '55%',
        severity: 'high'
    },
    {
        region: 'Madhya Pradesh',
        sdg: 'SDG 2',
        gap: '52%',
        severity: 'high'
    },
    {
        region: 'Bihar',
        sdg: 'SDG 5',
        gap: '48%',
        severity: 'medium'
    },
    {
        region: 'Uttar Pradesh',
        sdg: 'SDG 1',
        gap: '43%',
        severity: 'medium'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const stored = localStorage.getItem('sdg_nexus_user');
            if (stored) {
                try {
                    setUser(JSON.parse(stored));
                } catch  {}
            }
            setIsLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const login = async (email, password)=>{
        const found = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_USERS"].find((u)=>u.email === email && u.password === password);
        if (found) {
            setUser(found);
            localStorage.setItem('sdg_nexus_user', JSON.stringify(found));
            localStorage.setItem('sdg_nexus_token', `mock_jwt_${found.id}_${Date.now()}`);
            return true;
        }
        return false;
    };
    const register = async (name, email, password, role, orgName)=>{
        const newUser = {
            id: `u_${Date.now()}`,
            name,
            email,
            password,
            role,
            organization_name: orgName,
            verification_status: 'pending',
            created_at: new Date().toISOString().split('T')[0]
        };
        setUser(newUser);
        localStorage.setItem('sdg_nexus_user', JSON.stringify(newUser));
        localStorage.setItem('sdg_nexus_token', `mock_jwt_${newUser.id}_${Date.now()}`);
        return true;
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('sdg_nexus_user');
        localStorage.removeItem('sdg_nexus_token');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoading,
            login,
            register,
            logout
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/AuthContext.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
_s(AuthProvider, "YajQB7LURzRD+QP5gw0+K2TZIWA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
_s1(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fc559e39._.js.map