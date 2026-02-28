import { PrismaClient, UserRole, OrgType, VerificationStatus, ProjectStatus, RiskLevel, FlagSeverity, FlagStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed...');

    // Clean up existing data (optional, be careful in production!)
    await prisma.governmentAuditFlag.deleteMany();
    await prisma.impactScoreHistory.deleteMany();
    await prisma.orgFinancialSummary.deleteMany();
    await prisma.riskFlag.deleteMany();
    await prisma.cSRAllocation.deleteMany();
    await prisma.donation.deleteMany();
    await prisma.impactScore.deleteMany();
    await prisma.projectActivity.deleteMany();
    await prisma.projectSDG.deleteMany();
    await prisma.project.deleteMany();
    await prisma.organization.deleteMany();
    await prisma.user.deleteMany();
    await prisma.sDG.deleteMany();
    await prisma.geoImpactSummary.deleteMany();

    // 1. Seed SDGs
    const sdgs = [
        { id: 1, name: 'No Poverty' },
        { id: 2, name: 'Zero Hunger' },
        { id: 3, name: 'Good Health and Well-being' },
        { id: 4, name: 'Quality Education' },
        { id: 5, name: 'Gender Equality' },
        { id: 6, name: 'Clean Water and Sanitation' },
        { id: 7, name: 'Affordable and Clean Energy' },
        { id: 8, name: 'Decent Work and Economic Growth' },
    ];
    for (const sdg of sdgs) {
        await prisma.sDG.create({ data: sdg });
    }

    // 2. Seed Users
    const password_hash = await bcrypt.hash('password123', 10);

    const govUser = await prisma.user.create({
        data: {
            full_name: 'Gov Official',
            email: 'gov@india.gov.in',
            password_hash,
            role: UserRole.GOVERNMENT
        }
    });

    const donorUser = await prisma.user.create({
        data: {
            full_name: 'Jane Doe',
            email: 'jane@example.com',
            password_hash,
            role: UserRole.DONOR
        }
    });

    // 3. Seed Organizations
    const ngo1 = await prisma.organization.create({
        data: {
            name: 'Green Earth Foundation',
            type: OrgType.NGO,
            registration_number: 'NGO-IND-001',
            state: 'Maharashtra',
            district: 'Mumbai',
            verification_status: VerificationStatus.VERIFIED,
            financial_summary: {
                create: {
                    total_donations_received: 500000,
                    total_budget_utilized: 450000,
                    active_projects_count: 1
                }
            }
        }
    });

    const ngo2 = await prisma.organization.create({
        data: {
            name: 'Education for All',
            type: OrgType.NGO,
            registration_number: 'NGO-IND-002',
            state: 'Karnataka',
            district: 'Bengaluru',
            verification_status: VerificationStatus.PENDING,
            financial_summary: {
                create: {
                    total_donations_received: 200000,
                    total_budget_utilized: 50000,
                    active_projects_count: 1
                }
            }
        }
    });

    const corporate1 = await prisma.organization.create({
        data: {
            name: 'TechCorp India',
            type: OrgType.CORPORATE,
            registration_number: 'CORP-IND-001',
            state: 'Delhi',
            district: 'New Delhi',
            verification_status: VerificationStatus.VERIFIED,
            financial_summary: {
                create: {
                    total_csr_disbursed: 1000000,
                }
            }
        }
    });

    // 4. Seed Projects
    const project1 = await prisma.project.create({
        data: {
            organization_id: ngo1.id,
            title: 'Mumbai Coastal Cleanup',
            description: 'Cleaning the coastal lines of Mumbai.',
            budget_allocated: 600000,
            budget_utilized: 450000,
            beneficiaries_count: 5000,
            status: ProjectStatus.ACTIVE,
            sdg_tags: {
                create: [{ sdg_id: 6 }]
            }
        }
    });

    const project2 = await prisma.project.create({
        data: {
            organization_id: ngo2.id,
            title: 'Rural Digital Literacy',
            description: 'Providing laptops and internet to rural schools.',
            budget_allocated: 500000,
            budget_utilized: 50000,
            beneficiaries_count: 1000,
            status: ProjectStatus.ACTIVE,
            sdg_tags: {
                create: [{ sdg_id: 4 }]
            }
        }
    });

    // 5. Seed Donations
    await prisma.donation.create({
        data: {
            project_id: project1.id,
            donor_id: donorUser.id,
            amount: 500000
        }
    });

    // 6. Seed CSR Allocations
    await prisma.cSRAllocation.create({
        data: {
            corporate_org_id: corporate1.id,
            project_id: project2.id,
            amount_committed: 1000000,
            amount_disbursed: 200000,
            financial_year: '2024-2025'
        }
    });

    // 7. Seed Activities
    await prisma.projectActivity.create({
        data: {
            project_id: project1.id,
            activity_title: 'Beach Cleanup Day 1',
            description: 'Collected 500kg of plastic.',
            hash_value: 'abc123hashvalue',
            proof_url: 'https://example.com/proof1.jpg'
        }
    });

    // 8. Seed Impact Scores
    await prisma.impactScore.create({
        data: {
            organization_id: ngo1.id,
            scale_score: 80,
            outcome_score: 85,
            efficiency_score: 90,
            geographic_need_score: 70,
            transparency_score: 95,
            final_score: 86.5
        }
    });

    await prisma.impactScore.create({
        data: {
            organization_id: ngo2.id,
            scale_score: 60,
            outcome_score: 70,
            efficiency_score: 65,
            geographic_need_score: 85,
            transparency_score: 50,
            final_score: 64.0
        }
    });

    // 9. Seed Risk Flags
    await prisma.riskFlag.create({
        data: {
            organization_id: ngo2.id,
            risk_type: 'missing_proofs',
            risk_level: RiskLevel.HIGH,
            description: 'Multiple activities missing proof of execution.'
        }
    });

    // 10. Seed Government Audit Flags
    await prisma.governmentAuditFlag.create({
        data: {
            organization_id: corporate1.id,
            flagged_by_user_id: govUser.id,
            reason: 'CSR compliance review needed for Q1.',
            severity: FlagSeverity.MEDIUM,
            status: FlagStatus.OPEN
        }
    });

    console.log('Seed completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
