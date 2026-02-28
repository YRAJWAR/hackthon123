<p align="center">
  <img src="public/logo.png" alt="SDG Nexus Logo" width="100" />
</p>

<h1 align="center">SDG Nexus</h1>

<p align="center">
  <b>The Operating System for SDG Partnerships & Impact Intelligence</b>
</p>

<p align="center">
  A multi-stakeholder collaboration platform integrating AI-powered SDG alignment, standardized impact tracking, smart partnership matching, and transparent activity verification — built for national-level deployment across India.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Prisma-7.4-2D3748?logo=prisma" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/TailwindCSS-4.2-06B6D4?logo=tailwindcss" alt="Tailwind" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Role-Based Dashboards](#-role-based-dashboards)
- [AI & Intelligence Engines](#-ai--intelligence-engines)
- [API Reference](#-api-reference)
- [Database Schema](#-database-schema)
- [Security & Enterprise Features](#-security--enterprise-features)
- [Demo Accounts](#-demo-accounts)

---

## 🌍 Overview

**SDG Nexus** is a full-stack platform that bridges the gap between India's **NGOs**, **Corporates (CSR)**, **Government bodies**, and **Donors** — all united around the **17 UN Sustainable Development Goals (SDGs)**. It provides a single source of truth for tracking, scoring, and verifying social impact at scale.

### The Problem It Solves

| Challenge | SDG Nexus Solution |
|-----------|-------------------|
| Fragmented impact data across stakeholders | Unified platform with standardized metrics |
| No transparency in NGO fund utilization | Activity verification with SHA-256 hashing |
| Corporates can't find aligned NGOs for CSR | AI-powered Smart Matching Engine |
| Government lacks SDG progress visibility | Real-time heatmaps + funding gap analysis |
| Donors don't know where their money goes | Donation tracking + impact score per rupee |
| No fraud/misuse detection | Automated Risk Detection Engine |

---

## ✨ Key Features

### 1. 🤖 AI-Powered SDG Classification
- Automatically classifies project descriptions into relevant UN SDGs (1–17)
- Dual-engine: **OpenAI GPT** (primary) + **Local keyword classifier** (fallback)
- Returns confidence scores for each classified SDG
- Used during project creation to auto-tag SDG alignment

### 2. 📊 Multi-Variable Impact Scoring Engine
A 5-component weighted scoring formula (max 1000 points):

| Component | Weight | What It Measures |
|-----------|--------|-----------------|
| **Scale Score** | 30% | Beneficiary count vs sector median (20,000) |
| **Outcome Score** | 25% | Outcome improvement % + activity multiplier |
| **Efficiency Score** | 20% | Cost per beneficiary vs ₹500 sector median |
| **Geographic Need** | 15% | Poverty index of the region (via district data) |
| **Transparency** | 10% | Verified activities, geo-tags, proof uploads |

Each score is normalized using logarithmic scaling and stored both as raw values and processed percentages for audit trail compliance.

### 3. 🗺️ Interactive Heatmap with 7 Visualization Modes
The SDG Impact Heatmap offers multi-variable density visualization across 16+ Indian regions:

| Mode | Description |
|------|-------------|
| 🔥 **Composite** | Weighted multi-factor density score (default) |
| 💰 **Funding** | Funding volume per region |
| 👥 **Beneficiaries** | Beneficiary reach per region |
| 🏢 **NGO Density** | Number of active NGOs |
| ⚡ **Efficiency** | Funding efficiency (₹ per beneficiary) |
| ⚠️ **Risk Level** | Underfunding risk analysis |
| 🎯 **SDG Focus** | SDG project concentration |

Features include:
- **Density-based color gradients**: Green → Yellow → Orange → Red
- **Glow rings** for high-density areas
- **Intensity scale slider** (0.5x–1.5x)
- **SDG filter** to drill down into specific goals
- **Interactive popups** with mini progress bars per region
- **Gradient legend** with tier indicators (Minimal → Critical)
- **Real-time summary stats** overlay on the map

### 4. 💡 Funding Gap Intelligence
- Aggregates projects by district and SDG
- Calculates **funding per capita** per region
- Compares funding distribution against national averages
- Flags districts with funding below national average
- Returns **severity levels**: `low`, `medium`, `high`, `critical`

### 5. ⚠️ Automated Risk Detection Engine
Auto-generates risk flags when anomalies are detected:

| Risk Type | Trigger Condition |
|-----------|------------------|
| `high_funding_low_beneficiaries` | High funding but disproportionately low beneficiary count |
| `efficiency_decline` | Declining cost-efficiency for 3 consecutive cycles |
| `missing_proofs` | No verified activity proofs for > 30 days |

Risk flags are stored per organization with severity levels: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL`.

### 6. 🤝 Smart Matching Engine
Matches corporates with aligned NGOs using a weighted formula:

```
Match Score = (SDG Overlap × 0.4) + (Geographic Proximity × 0.3) + (Impact Score × 0.3)
```

Returns the **top 5 recommended NGOs** sorted by match score for each corporate.

### 7. 🔓 Public Explorer Mode
Read-only public access to:
- Organization profiles
- Impact scores + SDG breakdown
- Transparency levels
- Geographic impact data

Sensitive financial details are **protected and excluded** from public views.

### 8. 📒 Blockchain-Style Activity Ledger
- Every project activity is **SHA-256 hashed** on creation
- Activities form a tamper-evident chain with hash verification
- Supports **geo-tagged** activities and **proof uploads**
- Full browse, search, and export functionality

### 9. 🏆 Impact Leaderboard
- Ranked listing of organizations by composite impact score
- Animated progress bars with tier badges
- Paginated with standardized API responses

### 10. 📈 Analytics Dashboard
- SDG coverage distribution charts
- Funding allocation breakdowns
- Performance trend lines over time
- Regional comparison analytics

### 11. 📄 PDF Report Generation
- One-click export of impact reports
- Includes organization details, project summaries, and score breakdowns
- Generated client-side using **jsPDF + AutoTable**

---

## 🏗️ Architecture

SDG Nexus follows a **strict layered enterprise architecture**:

```
┌──────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                     │
│   Landing · Login · Register · Dashboard · Explorer      │
│   Role-based views: NGO | Corporate | Government | Donor │
├──────────────────────────────────────────────────────────┤
│                    API LAYER (Route Handlers)             │
│   /api/projects · /api/donations · /api/impact-score     │
│   /api/classify-sdg · /api/funding-gap · /api/leaderboard│
│   /api/admin/* · /api/public/* · /api/docs               │
├──────────────────────────────────────────────────────────┤
│                    MIDDLEWARE LAYER                       │
│   Authentication (JWT) · Rate Limiting · Error Handling  │
│   Input Validation · IDOR Protection · Role Guards       │
├──────────────────────────────────────────────────────────┤
│                    SERVICE LAYER                          │
│   Impact Scoring · SDG Classifier · Risk Detection       │
│   Funding Gap Analysis · Smart Matching · Report Gen     │
├──────────────────────────────────────────────────────────┤
│                    REPOSITORY LAYER                       │
│   Transaction-safe DB access · Prisma ORM                │
├──────────────────────────────────────────────────────────┤
│                    DATABASE (PostgreSQL)                  │
│   12 Tables · Optimized indexes · Enum types             │
│   Users · Organizations · Projects · SDGs · Activities   │
│   ImpactScores · Donations · CSRAllocations · RiskFlags  │
│   GeoImpactSummary · AuditLogs · ProjectSDGs             │
└──────────────────────────────────────────────────────────┘
```

### Layer Responsibilities

| Layer | Directory | Purpose |
|-------|-----------|---------|
| **Controllers** | `src/app/api/` | Handle HTTP request/response only |
| **Services** | `src/services/` | Business logic, scoring, AI classification |
| **Repositories** | `src/server/repositories/` | Database access with Prisma |
| **Middleware** | `src/server/middleware/` | Auth, validation, rate limiting, error handling |
| **Validators** | `src/server/validators/` | Input validation schemas (Zod-like) |
| **Config** | `src/server/config/` | Centralized environment config |
| **Types** | `src/server/types/` | Shared TypeScript types |
| **Utils** | `src/server/utils/` | Hashing, sanitization, pagination helpers |
| **Jobs** | `src/server/jobs/` | Background job runner (risk scan, recalculation) |

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | Next.js (App Router + Turbopack) | 16.1.6 |
| **Language** | TypeScript | 5.9 |
| **Database** | PostgreSQL + Prisma ORM | Prisma 7.4 |
| **Styling** | Tailwind CSS 4 + Custom CSS | 4.2 |
| **Maps** | Leaflet + React-Leaflet | 1.9 / 5.0 |
| **Charts** | Recharts | 3.7 |
| **Animations** | Framer Motion | 12.34 |
| **Auth** | JWT (jsonwebtoken) + bcryptjs | — |
| **Reports** | jsPDF + jspdf-autotable | — |
| **AI** | OpenAI GPT API (optional) | — |
| **Hashing** | SHA-256 (crypto-js) | — |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **PostgreSQL** (optional — app works with mock data without DB)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd hackthon123

# 2. Install dependencies
npm install

# 3. Generate Prisma client
npx prisma generate

# 4. Configure environment (optional)
cp .env.example .env
# Edit .env with your DATABASE_URL and JWT_SECRET

# 5. Run database migrations (if using PostgreSQL)
npx prisma migrate dev

# 6. Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:migrate` | Run database migrations |
| `npm run db:seed` | Seed database with initial data |
| `npm run db:studio` | Open Prisma Studio GUI |
| `npm run db:push` | Push schema to database |

### Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/sdgnexus"
JWT_SECRET="your-secret-key-change-in-production"
OPENAI_API_KEY="sk-..." # Optional — enables AI SDG classification
```

---

## 📁 Project Structure

```
hackthon123/
├── prisma/
│   └── schema.prisma           # Database schema (12 models)
├── public/
│   ├── logo.png                # SDG Nexus logo
│   └── favicon.png             # Browser tab favicon
├── src/
│   ├── app/
│   │   ├── api/                # API Route Handlers
│   │   │   ├── activities/     # POST — create activity
│   │   │   ├── admin/          # Admin-only endpoints
│   │   │   │   ├── audit-logs/       # GET — view audit trail
│   │   │   │   ├── recalculate-scores/# POST — batch recalc
│   │   │   │   └── trigger-job/       # POST — run bg job
│   │   │   ├── classify-sdg/   # POST — AI SDG classification
│   │   │   ├── corporate/[id]/ # GET — recommended NGOs
│   │   │   ├── docs/           # GET — API documentation
│   │   │   ├── donations/      # POST — create donation
│   │   │   ├── funding-gap/    # GET — funding gap analysis
│   │   │   ├── geo-impact-summary/ # GET — geographic impact
│   │   │   ├── impact-score/   # POST — calculate score
│   │   │   ├── leaderboard/    # GET — ranked orgs
│   │   │   ├── organizations/  # Impact breakdown + risk flags
│   │   │   ├── projects/       # GET/POST — project CRUD
│   │   │   └── public/         # Public read-only endpoints
│   │   ├── dashboard/          # Protected dashboard pages
│   │   │   ├── analytics/      # 📈 Charts & analytics
│   │   │   ├── corporate/      # 💼 CSR compliance dashboard
│   │   │   ├── donor/          # 💝 Donor tracking
│   │   │   ├── government/     # 🏛️ Government oversight
│   │   │   ├── heatmap/        # 🗺️ Interactive heatmap
│   │   │   ├── leaderboard/    # 🏆 Impact rankings
│   │   │   ├── ledger/         # 📒 Activity ledger
│   │   │   ├── ngo/            # 🏢 NGO dashboard + create project
│   │   │   └── profile/        # 👤 User profile
│   │   ├── explore/            # 🔓 Public explorer
│   │   │   └── organization/[id]/ # Public org detail
│   │   ├── login/              # 🔑 Authentication
│   │   ├── register/           # 📝 Registration
│   │   ├── globals.css         # 🎨 Design system (green/white theme)
│   │   ├── layout.tsx          # Root layout (favicon, fonts)
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── Map.tsx             # 🗺️ Advanced heatmap component
│   │   └── ui/
│   │       └── Sidebar.tsx     # Navigation sidebar
│   ├── data/
│   │   ├── mockData.ts         # Mock data for demo
│   │   └── povertyIndex.ts     # District poverty scores
│   ├── lib/
│   │   ├── AuthContext.tsx      # Authentication provider
│   │   ├── DataContext.tsx      # In-memory data provider
│   │   └── prisma.ts           # Prisma client singleton
│   ├── server/
│   │   ├── config/             # Centralized env config
│   │   ├── jobs/               # Background job runner
│   │   ├── middleware/         # Auth, rate limit, error handler
│   │   ├── repositories/      # Database access layer
│   │   ├── types/             # Shared TypeScript types
│   │   ├── utils/             # Hashing, sanitization, pagination
│   │   └── validators/        # Input validation schemas
│   └── services/
│       ├── impactScoring.ts       # Impact score formula engine
│       ├── impactScoringService.ts# Extended scoring service
│       ├── sdgClassifier.ts       # Local SDG keyword classifier
│       ├── sdgClassifierService.ts# AI-powered SDG classification
│       ├── riskDetectionService.ts# Risk flag detection engine
│       ├── fundingGapService.ts   # Funding gap analysis
│       ├── smartMatchingService.ts# Corporate-NGO matching
│       ├── matching.ts            # Match score calculator
│       └── reportGenerator.ts     # PDF report generation
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 👥 Role-Based Dashboards

SDG Nexus provides **four distinct dashboard experiences** based on user role:

### 🏢 NGO Dashboard
- **Project Impact Overview**: Live impact score with component breakdown (scale, outcome, efficiency, geographic need, transparency)
- **Create New Project**: AI-powered SDG classification during creation
- **My Projects**: List of all projects with status, budget, and beneficiary count
- **Activity Log**: Track activities with hash verification
- **Score Trend**: Monthly impact score + efficiency trend charts
- **Risk Assessment**: Automated risk flags with severity levels
- **Export Reports**: Download PDF impact reports

### 🏛️ Government Dashboard
- **National SDG Progress**: Aggregate SDG coverage across all regions
- **Funding Gap Analysis**: Visual comparison of required vs allocated funding per SDG
- **Underfunded Alerts**: Critical regions flagged with gap percentages
- **Risk Trend**: Monthly risk flag trends across all organizations
- **Regional Breakdown**: State-wise NGO activity summary
- **Compliance Overview**: Organization verification status tracking

### 💼 Corporate (CSR) Dashboard
- **CSR Compliance Tracker**: 2% net profit commitment tracking
- **Smart NGO Matching**: AI-recommended NGOs based on SDG overlap + geography
- **Fund Allocation**: Track committed vs disbursed amounts
- **Portfolio Impact**: Aggregate impact of funded projects
- **Match Score Breakdown**: Detailed compatibility analysis

### 💝 Donor Dashboard
- **Donation Tracker**: All donations with project links
- **Impact Per Rupee**: How efficiently donations translate to beneficiaries
- **Project Discovery**: Browse and filter active projects
- **Receipt Generation**: Download donation receipts

### Shared Features (All Roles)
- 🗺️ **SDG Impact Heatmap** — 7 visualization modes
- 📒 **Activity Ledger** — Blockchain-style hash-verified records
- 🏆 **Leaderboard** — Organization ranking by impact score
- 📈 **Analytics** — Charts, trends, and comparisons
- 👤 **Profile** — User info, role, organization details

---

## 🤖 AI & Intelligence Engines

### 1. SDG Classification Service
```
Input:  Project description text
Output: { sdg_tags: [6, 3, 1], classifications: [...], reasoning: "...", source: "openai" | "local" }
```
- **Primary**: OpenAI GPT with structured prompt for SDG mapping
- **Fallback**: Local keyword-frequency classifier with SDG keyword database
- Confidence threshold: 0.5 minimum

### 2. Impact Scoring Formula
```
Final Score (0–1000) =
    Scale     × 0.30  (max 300)  — beneficiaries vs 20K median
  + Outcome   × 0.25  (max 250)  — improvement % + activity multiplier
  + Efficiency × 0.20  (max 200)  — cost per beneficiary vs ₹500 median
  + GeoNeed   × 0.15  (max 150)  — district poverty index
  + Transparency × 0.10 (max 100) — verified activities + geo-tags + proofs
```
Normalization: `log₂(1 + value/median) × weight`, capped at component max.

### 3. Risk Detection Algorithm
```python
IF funding > 1_000_000 AND beneficiaries < 100:
    → FLAG: high_funding_low_beneficiaries (HIGH)

IF efficiency declining for 3 consecutive periods:
    → FLAG: efficiency_decline (MEDIUM)

IF no verified activity in > 30 days:
    → FLAG: missing_proofs (MEDIUM)
```

### 4. Smart Matching Formula
```
Match Score = SDG_Overlap × 0.4 + Geographic_Proximity × 0.3 + Impact_Score × 0.3

SDG_Overlap     = |intersection(corp_sdgs, ngo_sdgs)| / |union(corp_sdgs, ngo_sdgs)|
Geo_Proximity   = 1 - (haversine_distance / max_distance)
Impact_Score    = normalized(ngo_final_score / max_score)
```

### 5. Heatmap Composite Score
```
Composite = Funding × 0.20 + Beneficiaries × 0.30 + NGO_Density × 0.15
          + Projects × 0.15 + Efficiency × 0.20

Tiers: Critical (≥0.8) | High (≥0.6) | Medium (≥0.4) | Low (≥0.2) | Minimal (<0.2)
```

---

## 📡 API Reference

All API responses follow a **standardized format**:

```json
{
  "success": true,
  "data": { ... },
  "pagination": { "page": 1, "limit": 20, "total": 45, "totalPages": 3 },
  "timestamp": "2026-02-28T00:00:00.000Z"
}
```

### Core Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/projects` | Create project with auto SDG classification | ✅ |
| `GET` | `/api/projects` | List projects (paginated) | ✅ |
| `POST` | `/api/activities` | Log activity with SHA-256 hash | ✅ |
| `POST` | `/api/donations` | Create donation (transaction-safe) | ✅ |
| `POST` | `/api/classify-sdg` | AI-powered SDG classification | ✅ |
| `POST` | `/api/impact-score` | Calculate impact score | ✅ |
| `GET` | `/api/leaderboard` | Ranked organization listing | ✅ |
| `GET` | `/api/funding-gap` | Funding gap analysis by district | ✅ |
| `GET` | `/api/geo-impact-summary` | Geographic impact aggregation | ✅ |

### Organization Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/organizations/:id/impact-score` | Get/recalculate org impact score |
| `GET` | `/api/organizations/:id/impact-breakdown` | Detailed 5-component score breakdown |
| `GET` | `/api/organizations/:id/risk-flags` | Get org risk flags |
| `GET` | `/api/corporate/:id/recommended-ngos` | AI-matched NGOs for corporate |

### Public Endpoints (No Auth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/public/organizations` | Public org listing (no financial data) |
| `GET` | `/api/public/organizations/:id` | Public org profile |

### Admin Endpoints (Admin Role Only)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/recalculate-scores` | Batch recalculate all impact scores |
| `POST` | `/api/admin/trigger-job` | Manually trigger background job |
| `GET` | `/api/admin/audit-logs` | View audit trail |
| `GET` | `/api/docs` | Live API documentation |

---

## 🗄️ Database Schema

12 interconnected tables designed for high-volume transactions:

### Entity Relationship Overview

```mermaid
erDiagram
    User ||--o{ Donation : makes
    Organization ||--o{ Project : owns
    Organization ||--o{ ImpactScore : has
    Organization ||--o{ RiskFlag : flagged_by
    Organization ||--o{ CSRAllocation : funds
    Project ||--o{ ProjectSDG : tagged_with
    Project ||--o{ ProjectActivity : logs
    Project ||--o{ Donation : receives
    Project ||--o{ CSRAllocation : allocated_to
    SDG ||--o{ ProjectSDG : classifies
    SDG ||--o{ GeoImpactSummary : tracks
```

### Table Summary

| Table | Purpose | Key Fields |
|-------|---------|------------|
| `users` | Authentication & roles | email, role (NGO/CORP/GOV/DONOR/ADMIN) |
| `organizations` | Registered entities | name, type, state, verification_status |
| `projects` | Impact projects | budget, beneficiaries, outcome_metric, lat/lng |
| `sdgs` | UN SDG lookup (1–17) | id, name |
| `project_sdgs` | Project ↔ SDG mapping | ai_confidence_score |
| `project_activities` | Verified activities | hash_value (SHA-256), proof_url, geo |
| `impact_scores` | 5-component scores | scale, outcome, efficiency, geo, transparency |
| `donations` | Fund contributions | amount, donor_id, project_id |
| `csr_allocations` | Corporate CSR tracking | committed, disbursed, financial_year |
| `geo_impact_summaries` | District-level aggregation | funding, beneficiaries, avg_score |
| `risk_flags` | Anomaly detection | risk_type, risk_level, resolved |
| `audit_logs` | Complete audit trail | actor, action, entity, previous/new values |

---

## 🔒 Security & Enterprise Features

### Authentication & Authorization
- **JWT-based authentication** with configurable expiry
- **Role-based access control** (RBAC) — NGO, Corporate, Government, Donor, Admin
- **IDOR protection** — users can only access their own resources
- **Password hashing** with bcryptjs (10 salt rounds)

### Data Validation
- **Server-side validation** on all incoming payloads using custom Zod-like schemas
- Validated entities: Projects, Activities, Donations, Organizations, CSR Allocations, Impact Scores
- **Input sanitization** — strips HTML tags, trims whitespace, prevents XSS

### Rate Limiting
- **General endpoints**: 100 requests per 15 minutes per client
- **Sensitive endpoints** (login, register): 10 requests per 15 minutes
- Auto-cleanup of expired rate limit entries

### Audit Trail
- Every write operation is logged to the `audit_logs` table
- Records: actor ID, role, action type, entity, previous/new values, IP address, timestamp
- Admin-accessible via `/api/admin/audit-logs`

### Error Handling
- Centralized `AppError` class with operational vs programming error distinction
- Prisma-specific error handling (unique constraint, not found, validation)
- **Zero data leakage** — internal errors never exposed to clients

### Background Jobs
- Built-in job runner with concurrency control
- Registered jobs: Risk scanning, Funding gap recalculation, Score recalculation
- Manual trigger via admin API

---

## 🎨 Design System

### Theme: White + Green
SDG Nexus uses a clean, modern **white and green** theme:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary-50` | `#f0fdf4` | Backgrounds, badges |
| `--color-primary-100` | `#dcfce7` | Hover states |
| `--color-primary-500` | `#22c55e` | Primary actions, accents |
| `--color-primary-600` | `#16a34a` | Active states |
| `--color-primary-700` | `#15803d` | Dark accents |

### UI Components
- **Glass Card** — Frosted glass effect with subtle borders
- **Sidebar** — White with green accents, active indicator
- **Buttons** — Green gradient with hover glow
- **Input fields** — Clean bordered inputs with focus rings
- **SDG badges** — Color-coded per SDG (1–17)

---

## 🔑 Demo Accounts

Login at `/login` with any of these demo accounts (password: `password123`):

| Role | Email | Dashboard |
|------|-------|-----------|
| **NGO** | `ngo@sdgnexus.org` | Project management, impact scoring |
| **Government** | `gov@sdgnexus.org` | National oversight, funding gaps |
| **Corporate** | `corp@sdgnexus.org` | CSR compliance, NGO matching |
| **Donor** | `donor@sdgnexus.org` | Donation tracking, impact per ₹ |

---

## 📊 Pages & Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/` | Landing page — feature showcase | Public |
| `/login` | Authentication | Public |
| `/register` | New account registration | Public |
| `/explore` | Public organization explorer | Public |
| `/explore/organization/:id` | Public org profile | Public |
| `/dashboard` | Role-based redirect | Auth |
| `/dashboard/ngo` | NGO overview dashboard | NGO |
| `/dashboard/ngo/create-project` | AI-powered project creation | NGO |
| `/dashboard/government` | Government oversight | Government |
| `/dashboard/corporate` | CSR compliance dashboard | Corporate |
| `/dashboard/donor` | Donor tracking | Donor |
| `/dashboard/heatmap` | Interactive SDG heatmap | All Auth |
| `/dashboard/ledger` | Activity ledger | All Auth |
| `/dashboard/leaderboard` | Impact rankings | All Auth |
| `/dashboard/analytics` | Charts & analytics | All Auth |
| `/dashboard/profile` | User profile | All Auth |

---

## 📃 License

Built for the SDG Nexus Hackathon 2026. All rights reserved.

---

<p align="center">
  <b>SDG Nexus</b> — Driving measurable, transparent, and accountable social impact at national scale.
</p>
