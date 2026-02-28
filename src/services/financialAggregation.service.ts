import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class FinancialAggregationService {
    /**
     * Recalculates and updates the financial and operational summary for a given organization.
     * Calculates CSR, Donations, Budget Utilization, and Project metrics.
     */
    static async updateOrganizationFinancialSummary(organizationId: string) {
        // Fetch organization and its related financial/operational records
        const org = await prisma.organization.findUnique({
            where: { id: organizationId },
            include: {
                projects: {
                    include: {
                        csr_allocations: true,
                        donations: true,
                        activities: true
                    }
                }
            }
        });

        if (!org) {
            throw new Error(`Organization with ID ${organizationId} not found`);
        }

        let totalCsrDisbursed = 0;
        let totalCsrReceived = 0;
        let totalDonationsReceived = 0;
        let totalBudgetUtilized = 0;
        let activeProjectsCount = 0;
        let completedProjectsCount = 0;

        // Aggregate values
        for (const project of org.projects) {
            if (project.status === 'ACTIVE') activeProjectsCount++;
            if (project.status === 'COMPLETED') completedProjectsCount++;

            totalBudgetUtilized += Number(project.budget_utilized || 0);

            // Sum Donations
            for (const donation of project.donations) {
                totalDonationsReceived += Number(donation.amount || 0);
            }

            // Sum CSR (Received by this org's project)
            for (const csr of project.csr_allocations) {
                totalCsrReceived += Number(csr.amount_disbursed || 0);
            }
        }

        // CSR Disbursed (If this org is CORPORATE, we need to check the CSRAllocations where they are the donor)
        if (org.type === 'CORPORATE') {
            const corporateCsr = await prisma.cSRAllocation.findMany({
                where: { corporate_org_id: organizationId }
            });
            totalCsrDisbursed = corporateCsr.reduce((sum, curr) => sum + Number(curr.amount_disbursed || 0), 0);
        }

        // Upsert the financial summary
        const summary = await prisma.organizationFinancialSummary.upsert({
            where: { organization_id: organizationId },
            update: {
                total_csr_received: totalCsrReceived,
                total_csr_disbursed: totalCsrDisbursed,
                total_donations_received: totalDonationsReceived,
                total_budget_utilized: totalBudgetUtilized,
                active_projects_count: activeProjectsCount,
                completed_projects_count: completedProjectsCount,
                last_updated: new Date()
            },
            create: {
                organization_id: organizationId,
                total_csr_received: totalCsrReceived,
                total_csr_disbursed: totalCsrDisbursed,
                total_donations_received: totalDonationsReceived,
                total_budget_utilized: totalBudgetUtilized,
                active_projects_count: activeProjectsCount,
                completed_projects_count: completedProjectsCount
            }
        });

        return summary;
    }

    /**
     * Recalculates all organizations (Useful for Cron Job)
     */
    static async runDailyAggregation() {
        const orgs = await prisma.organization.findMany({
            select: { id: true }
        });

        let updated = 0;
        for (const org of orgs) {
            try {
                await this.updateOrganizationFinancialSummary(org.id);
                updated++;
            } catch (error) {
                console.error(`Failed to aggregate for org: ${org.id}`, error);
            }
        }

        return { total_updated: updated };
    }
}
