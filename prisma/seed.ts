import PrismaClient from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding SDG Nexus Database...\n');

    // ─── Seed SDGs (1–17) ──────────────────────────────────────
    const sdgNames = [
        'No Poverty', 'Zero Hunger', 'Good Health and Well-Being',
        'Quality Education', 'Gender Equality', 'Clean Water and Sanitation',
        'Affordable and Clean Energy', 'Decent Work and Economic Growth',
        'Industry, Innovation and Infrastructure', 'Reduced Inequalities',
        'Sustainable Cities and Communities', 'Responsible Consumption and Production',
        'Climate Action', 'Life Below Water', 'Life on Land',
        'Peace, Justice and Strong Institutions', 'Partnerships for the Goals',
    ];

    for (let i = 0; i < sdgNames.length; i++) {
        await prisma.sDG.upsert({
            where: { id: i + 1 },
            update: {},
            create: { id: i + 1, name: sdgNames[i] },
        });
    }
    console.log('✅ 17 SDGs seeded');

    // ─── Seed Users ────────────────────────────────────────────
    const users = [
        { full_name: 'Aarav Patel', email: 'aarav@jalseva.org', password_hash: '$2b$10$dummyhash1', role: 'NGO' as const },
        { full_name: 'Reema Singh', email: 'reema@greenearth.org', password_hash: '$2b$10$dummyhash2', role: 'NGO' as const },
        { full_name: 'Vikram Joshi', email: 'vikram@techserve.com', password_hash: '$2b$10$dummyhash3', role: 'CORPORATE' as const },
        { full_name: 'Priya Mehta', email: 'priya@niti.gov.in', password_hash: '$2b$10$dummyhash4', role: 'GOVERNMENT' as const },
        { full_name: 'Ananya Gupta', email: 'ananya@donor.com', password_hash: '$2b$10$dummyhash5', role: 'DONOR' as const },
        { full_name: 'Admin User', email: 'admin@sdgnexus.in', password_hash: '$2b$10$dummyhash6', role: 'ADMIN' as const },
    ];

    const createdUsers = [];
    for (const u of users) {
        const user = await prisma.user.upsert({
            where: { email: u.email },
            update: {},
            create: u,
        });
        createdUsers.push(user);
    }
    console.log(`✅ ${createdUsers.length} users seeded`);

    // ─── Seed Organizations ────────────────────────────────────
    const orgs = [
        { name: 'Jal Seva Foundation', type: 'NGO' as const, registration_number: 'NGO-MH-2019-001', state: 'Maharashtra', district: 'Pune' },
        { name: 'Green Earth Trust', type: 'NGO' as const, registration_number: 'NGO-RJ-2020-042', state: 'Rajasthan', district: 'Jaipur' },
        { name: 'Shakti Women Collective', type: 'NGO' as const, registration_number: 'NGO-UP-2018-015', state: 'Uttar Pradesh', district: 'Lucknow' },
        { name: 'Digital Bharat Initiative', type: 'NGO' as const, registration_number: 'NGO-KA-2021-007', state: 'Karnataka', district: 'Bangalore' },
        { name: 'TechServe India CSR', type: 'CORPORATE' as const, registration_number: 'CIN-MH-2015-123', state: 'Maharashtra', district: 'Mumbai' },
        { name: 'NITI SDG Cell', type: 'GOVERNMENT' as const, registration_number: 'GOV-DL-2020-001', state: 'Delhi', district: 'New Delhi' },
    ];

    const createdOrgs = [];
    for (const o of orgs) {
        const org = await prisma.organization.upsert({
            where: { registration_number: o.registration_number },
            update: {},
            create: { ...o, verification_status: 'VERIFIED' },
        });
        createdOrgs.push(org);
    }
    console.log(`✅ ${createdOrgs.length} organizations seeded`);

    // ─── Seed Projects ─────────────────────────────────────────
    const projects = [
        {
            organization_id: createdOrgs[0].id,
            title: 'Clean Water for Rural Maharashtra',
            description: 'Installing water purification units and rainwater harvesting systems across 150 villages in drought-prone districts.',
            budget_allocated: 2500000,
            budget_utilized: 1800000,
            beneficiaries_count: 25000,
            outcome_metric_value: 78,
            latitude: 19.076,
            longitude: 72.877,
            status: 'ACTIVE' as const,
            sdgs: [6, 3, 11],
        },
        {
            organization_id: createdOrgs[1].id,
            title: 'Solar Literacy Program',
            description: 'Providing solar-powered digital classrooms and tablets to 200 rural schools in Rajasthan.',
            budget_allocated: 3200000,
            budget_utilized: 2100000,
            beneficiaries_count: 18000,
            outcome_metric_value: 82,
            latitude: 26.912,
            longitude: 75.787,
            status: 'ACTIVE' as const,
            sdgs: [4, 7, 9],
        },
        {
            organization_id: createdOrgs[2].id,
            title: 'Women Livelihood & Skill Training',
            description: 'Training 10,000 rural women in micro-entrepreneurship, tailoring, and digital skills.',
            budget_allocated: 1800000,
            budget_utilized: 1200000,
            beneficiaries_count: 10000,
            outcome_metric_value: 71,
            latitude: 26.846,
            longitude: 80.946,
            status: 'ACTIVE' as const,
            sdgs: [5, 8, 1],
        },
        {
            organization_id: createdOrgs[3].id,
            title: 'Digital Health Access Platform',
            description: 'Telemedicine kiosks connecting rural patients with specialist doctors via AI-assisted diagnostics.',
            budget_allocated: 4500000,
            budget_utilized: 3800000,
            beneficiaries_count: 50000,
            outcome_metric_value: 85,
            latitude: 12.971,
            longitude: 77.594,
            status: 'COMPLETED' as const,
            sdgs: [3, 9, 10],
        },
    ];

    for (const p of projects) {
        const { sdgs, ...projectData } = p;
        const project = await prisma.project.create({ data: projectData });

        for (const sdgId of sdgs) {
            await prisma.projectSDG.create({
                data: {
                    project_id: project.id,
                    sdg_id: sdgId,
                    ai_confidence_score: 0.85 + Math.random() * 0.15,
                },
            });
        }
    }
    console.log(`✅ ${projects.length} projects seeded with SDG tags`);

    // ─── Seed Impact Scores ────────────────────────────────────
    for (const org of createdOrgs.slice(0, 4)) {
        await prisma.impactScore.create({
            data: {
                organization_id: org.id,
                scale_score: 70 + Math.random() * 25,
                outcome_score: 65 + Math.random() * 30,
                efficiency_score: 60 + Math.random() * 35,
                geographic_need_score: 55 + Math.random() * 40,
                transparency_score: 75 + Math.random() * 20,
                final_score: 700 + Math.random() * 250,
            },
        });
    }
    console.log('✅ Impact scores seeded');

    // ─── Seed Donations ─────────────────────────────────────────
    const allProjects = await prisma.project.findMany();
    const donor = createdUsers.find(u => u.role === 'DONOR');

    if (donor && allProjects.length > 0) {
        for (const proj of allProjects.slice(0, 3)) {
            await prisma.donation.create({
                data: {
                    project_id: proj.id,
                    donor_id: donor.id,
                    amount: 25000 + Math.round(Math.random() * 75000),
                },
            });
        }
        console.log('✅ Donations seeded');
    }

    console.log('\n🎉 Database seeding complete!');
}

main()
    .then(async () => { await prisma.$disconnect(); })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
