// PDF Report Generator using jsPDF
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { Project, ImpactScore } from '@/data/mockData';
import { SDG_INFO } from '@/data/mockData';

interface ReportData {
    organizationName: string;
    role: string;
    projects: Project[];
    impactScore?: ImpactScore;
    totalBeneficiaries: number;
    totalBudget: number;
    totalSpent: number;
}

/**
 * ─── Impact Report Generator (Light Theme) ───
 * Generates a professional PDF assessment matching the ImpactBridge brand.
 */
export function generateImpactReport(data: ReportData): void {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // Brand Colors (Typed as Tuples for jsPDF)
    const primaryBlue: [number, number, number] = [59, 130, 246]; // #3b82f6
    const darkSlate: [number, number, number] = [15, 23, 42]; // #0f172a
    const lightSlate: [number, number, number] = [100, 116, 139]; // #64748b
    const muttedSlate: [number, number, number] = [148, 163, 184]; // #94a3b8
    const surfaceGray: [number, number, number] = [241, 245, 249]; // #f1f5f9

    // Header (Light Surface with Blue Accents)
    doc.setFillColor(...surfaceGray);
    doc.rect(0, 0, pageWidth, 45, 'F');
    doc.setDrawColor(...primaryBlue);
    doc.setLineWidth(1.5);
    doc.line(15, 40, pageWidth - 15, 40);

    doc.setTextColor(...primaryBlue);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('SDG Nexus', 15, 22);

    doc.setFontSize(10);
    doc.setTextColor(...lightSlate);
    doc.setFont('helvetica', 'normal');
    doc.text('Impact Assessment & SDG Intelligence Report', 15, 30);
    doc.setFontSize(8);
    doc.text(`ID: NEX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, 15, 36);

    // Org Info
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text(data.organizationName, pageWidth - 15, 22, { align: 'right' });
    doc.setFontSize(10);
    doc.setTextColor(...primaryBlue);
    doc.text(data.role.toUpperCase() + ' PORTFOLIO', pageWidth - 15, 30, { align: 'right' });
    doc.setFontSize(8);
    doc.setTextColor(...muttedSlate);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth - 15, 36, { align: 'right' });

    // Summary Section
    let y = 60;
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Executive Impact Summary', 15, y);
    y += 10;

    const summaryData = [
        ['Total Projects Managed', data.projects.length.toString()],
        ['Total Lives Impacted', data.totalBeneficiaries.toLocaleString()],
        ['Total Capital Allocated', `₹${(data.totalBudget / 100000).toFixed(1)} Lakhs`],
        ['Total Capital Utilized', `₹${(data.totalSpent / 100000).toFixed(1)} Lakhs`],
        ['Utilization Efficiency', `${data.totalBudget > 0 ? ((data.totalSpent / data.totalBudget) * 100).toFixed(1) : 0}%`],
        ['Portfolio Health', data.projects.every(p => p.status === 'completed' || p.status === 'active') ? 'OPTIMAL' : 'REQUIRES ATTENTION'],
    ];

    autoTable(doc, {
        startY: y,
        head: [['Strategic Metric', 'Certified Value']],
        body: summaryData,
        theme: 'striped',
        headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontSize: 10, fontStyle: 'bold' },
        bodyStyles: { textColor: darkSlate, fontSize: 10 },
        alternateRowStyles: { fillColor: [250, 250, 250] },
        styles: { cellPadding: 5 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 100 } },
        margin: { left: 15, right: 15 },
    });

    // Impact Score Breakdown
    y = (doc as any).lastAutoTable.finalY + 18;
    if (data.impactScore) {
        if (y > 240) { doc.addPage(); y = 20; }

        doc.setTextColor(...darkSlate);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Verified Impact Performance', 15, y);
        y += 10;

        const scoreData = [
            ['Overall Final Score', `${data.impactScore.overall_score} / 1000`],
            ['Beneficiary Reach Scale', `${data.impactScore.beneficiary_scale}%`],
            ['Outcome Verification', `${data.impactScore.outcome_score}%`],
            ['Geographic Need Index', `${data.impactScore.geographic_need}%`],
            ['Capital Deployment Efficiency', `${data.impactScore.funding_efficiency}%`],
            ['Data Integrity & Transparency', `${data.impactScore.verification_score}%`],
        ];

        autoTable(doc, {
            startY: y,
            head: [['Performance Component', 'Assessment Score']],
            body: scoreData,
            theme: 'grid',
            headStyles: { fillColor: darkSlate, textColor: [255, 255, 255], fontSize: 10 },
            bodyStyles: { textColor: darkSlate, fontSize: 9 },
            styles: { cellPadding: 5 },
            columnStyles: { 0: { fontStyle: 'bold', cellWidth: 110 } },
            margin: { left: 15, right: 15 },
        });
    }

    // SDG Breakdown
    y = (doc as any).lastAutoTable.finalY + 18;
    if (y > 230) { doc.addPage(); y = 20; }

    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('SDG Multi-Stakeholder Alignment', 15, y);
    y += 10;

    const allSDGs = new Set<number>();
    data.projects.forEach(p => p.sdg_tags.forEach(s => allSDGs.add(s)));
    const sdgRows = Array.from(allSDGs).sort((a, b) => a - b).map(sdg => {
        const info = SDG_INFO.find(s => s.id === sdg);
        const projectCount = data.projects.filter(p => (p.sdg_tags as number[]).includes(sdg)).length;
        return [`SDG ${sdg}: ${info?.name || ''}`, projectCount.toString(), `${((projectCount / data.projects.length) * 100).toFixed(0)}%`];
    });

    autoTable(doc, {
        startY: y,
        head: [['Sustainable Development Goal', 'Project Count', 'Portfolio Weight']],
        body: sdgRows,
        theme: 'striped',
        headStyles: { fillColor: primaryBlue, textColor: [255, 255, 255], fontSize: 10 },
        styles: { fontSize: 9, cellPadding: 5 },
        columnStyles: { 0: { fontStyle: 'bold', cellWidth: 110 } },
        margin: { left: 15, right: 15 },
    });

    // Project Details (Large Table)
    doc.addPage();
    y = 20;

    doc.setTextColor(...primaryBlue);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Detailed Project Inventory', 15, y);
    y += 12;

    const projectRows = data.projects.map(p => [
        p.title,
        p.sdg_tags.map(s => `SDG ${s}`).join(', '),
        p.beneficiary_count.toLocaleString(),
        `₹${(p.budget / 100000).toFixed(1)}L`,
        `${p.budget > 0 ? ((p.spent / p.budget) * 100).toFixed(0) : 0}%`,
        p.status.toUpperCase(),
    ]);

    autoTable(doc, {
        startY: y,
        head: [['Project Name', 'Target SDGs', 'Reach', 'Budget', 'Utilization', 'Status']],
        body: projectRows,
        theme: 'grid',
        headStyles: { fillColor: darkSlate, textColor: [255, 255, 255], fontSize: 8 },
        styles: { fontSize: 8, cellPadding: 4 },
        columnStyles: { 0: { cellWidth: 50, fontStyle: 'bold' } },
        margin: { left: 15, right: 15 },
    });

    // Footer & Certification
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(...muttedSlate);

        // Horizontal footer line
        doc.setDrawColor(...surfaceGray);
        doc.setLineWidth(0.5);
        doc.line(15, doc.internal.pageSize.getHeight() - 15, pageWidth - 15, doc.internal.pageSize.getHeight() - 15);

        doc.text(`SDG Nexus IMPACT_CERTIFICATE_V1 • Page ${i} of ${pageCount}`, 15, doc.internal.pageSize.getHeight() - 10);
        doc.text('© 2026 SDG Nexus Blockchain Ledger - Verified Immutable Record', pageWidth - 15, doc.internal.pageSize.getHeight() - 10, { align: 'right' });
    }

    doc.save(`Impact_Report_${data.organizationName.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`);
}
