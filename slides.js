// ============================================================
//  slides.js — Performance Analyzer Presentation Content
//  Source: PPtSpecial/files(1)/documentation/
//  Version 2.0 | March 2026
// ============================================================

const SLIDES = {

  // ── 01 README ────────────────────────────────────────────
  readme: {
    title: "README.md", breadcrumb: "Performance-Analyzer > README.md",
    image: "images/01_title.png",
    lines: [
      { type: "heading",    text: "⚡ Performance Analyzer  v2.0" },
      { type: "blank" },
      { type: "comment",   text: "// Comprehensive Web-Based Educational Management System" },
      { type: "blank" },
      { type: "subheading", text: "At a Glance" },
      { parts: [{ text: "  Frontend: ", type: "keyword" }, { text: "React 18.3 + TypeScript 5.5 + Vite 5.4", type: "highlight" }] },
      { parts: [{ text: "  Backend:  ", type: "keyword" }, { text: "FastAPI 0.103.1 + SQLAlchemy 2.0.20", type: "highlight" }] },
      { parts: [{ text: "  AI:       ", type: "keyword" }, { text: "Google Gemini 2.5 Flash", type: "gold" }, { text: "  (gemini-2.5-flash)", type: "comment" }] },
      { parts: [{ text: "  DB:       ", type: "keyword" }, { text: "SQLite", type: "highlight" }, { text: " (PostgreSQL-ready via DATABASE_URL)", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Scale" },
      { parts: [{ text: "  ", type: "plain" }, { text: "5", type: "number" }, { text: " user roles  ·  ", type: "plain" }, { text: "50+", type: "number" }, { text: " features  ·  ", type: "plain" }, { text: "73+", type: "number" }, { text: " API endpoints", type: "plain" }] },
      { parts: [{ text: "  ", type: "plain" }, { text: "19", type: "number" }, { text: " DB models  ·  ", type: "plain" }, { text: "93", type: "number" }, { text: " React components  ·  ", type: "plain" }, { text: "10", type: "number" }, { text: " pages", type: "plain" }] },
      { parts: [{ text: "  main.py: ", type: "keyword" }, { text: "~3,150 lines", type: "number" }, { text: "  (monolithic REST API)", type: "plain" }] },
    ]
  },

  // ── 02 ABSTRACT ──────────────────────────────────────────
  abstract: {
    title: "abstract.md", breadcrumb: "Performance-Analyzer > 01_Overview > abstract.md",
    image: "images/02_abstract.png",
    lines: [
      { type: "heading",    text: "📋 Abstract" },
      { type: "blank" },
      { type: "plain",     text: "A centralized web platform for educational institutions to" },
      { type: "plain",     text: "track, analyze, and improve student academic performance" },
      { type: "plain",     text: "and placement outcomes through role-based dashboards." },
      { type: "blank" },
      { type: "subheading", text: "Six Core Pillars" },
      { parts: [{ text: "  1. ", type: "number" }, { text: "Student Performance Management", type: "highlight" }, { text: " — Excel marks + AI tests", type: "plain" }] },
      { parts: [{ text: "  2. ", type: "number" }, { text: "Training Analysis", type: "highlight" }, { text: " — metrics, trends, predictive scoring", type: "plain" }] },
      { parts: [{ text: "  3. ", type: "number" }, { text: "Placement Management", type: "highlight" }, { text: " — jobs, eligibility, pipeline", type: "plain" }] },
      { parts: [{ text: "  4. ", type: "number" }, { text: "AI Analytics", type: "gold" }, { text: " — Gemini profiles, risk, recommendations", type: "plain" }] },
      { parts: [{ text: "  5. ", type: "number" }, { text: "Administrative Control", type: "highlight" }, { text: " — bulk import, audit logging", type: "plain" }] },
      { parts: [{ text: "  6. ", type: "number" }, { text: "Student Self-Registration", type: "highlight" }, { text: " — approval-based sign-up", type: "plain" }] },
    ]
  },

  // ── 03 PROBLEM ───────────────────────────────────────────
  problem: {
    title: "problem_statement.md", breadcrumb: "Performance-Analyzer > 01_Overview > problem_statement.md",
    image: "images/03_problem.png",
    lines: [
      { type: "heading",    text: "❓ Problem Statement" },
      { type: "blank" },
      { type: "subheading", text: "5 Core Challenges in Educational Institutions" },
      { parts: [{ text: "  1. ", type: "number" }, { text: "Fragmented Data       ", type: "error" }, { text: "— marks scattered across dozens of Excel files", type: "plain" }] },
      { parts: [{ text: "  2. ", type: "number" }, { text: "No Performance Visibility", type: "error" }, { text: "— faculty can't see cross-subject trends", type: "plain" }] },
      { parts: [{ text: "  3. ", type: "number" }, { text: "Inefficient Placement  ", type: "error" }, { text: "— manual job/application tracking", type: "plain" }] },
      { parts: [{ text: "  4. ", type: "number" }, { text: "No Comparative Analytics", type: "error" }, { text: "— no section or batch benchmarks", type: "plain" }] },
      { parts: [{ text: "  5. ", type: "number" }, { text: "Time-Consuming Admin   ", type: "error" }, { text: "— manual entry, no audit trail", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Our Solution" },
      { type: "success",   text: "  ✅ Centralized DB — 19 SQLAlchemy models, one source of truth" },
      { type: "success",   text: "  ✅ Rule engine + Gemini AI — early at-risk detection" },
      { type: "success",   text: "  ✅ Automated placement pipeline + audit logging" },
    ]
  },

  // ── 04 EXISTING SYSTEM ───────────────────────────────────
  existing: {
    title: "existing_system.md", breadcrumb: "Performance-Analyzer > 02_System_Design > existing_system.md",
    image: "images/04_existing.png",
    lines: [
      { type: "heading",    text: "🔍 Existing System Limitations" },
      { type: "blank" },
      { type: "subheading", text: "Current State in Colleges" },
      { parts: [{ text: "  Marks:      ", type: "keyword" }, { text: "Manual Excel entry", type: "error" }, { text: " per subject, per semester, per faculty", type: "plain" }] },
      { parts: [{ text: "  Tests:      ", type: "keyword" }, { text: "Paper or Google Forms", type: "error" }, { text: " — zero analytics", type: "plain" }] },
      { parts: [{ text: "  Placement:  ", type: "keyword" }, { text: "WhatsApp + spreadsheets", type: "error" }, { text: " — no stage tracking", type: "plain" }] },
      { parts: [{ text: "  Insights:   ", type: "keyword" }, { text: "None", type: "error" }, { text: " — purely retrospective, no early warning", type: "plain" }] },
      { parts: [{ text: "  Admin:      ", type: "keyword" }, { text: "No audit trail", type: "error" }, { text: " — actions not logged or traceable", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Root Problem" },
      { parts: [{ text: "  No unified view of student progress across ", type: "plain" }, { text: "academics + training", type: "highlight" }] },
      { parts: [{ text: "  At-risk students identified only ", type: "plain" }, { text: "after exams", type: "error" }, { text: " — too late", type: "plain" }] },
    ]
  },

  // ── 05 PROPOSED SYSTEM ───────────────────────────────────
  proposed: {
    title: "proposed_system.md", breadcrumb: "Performance-Analyzer > 02_System_Design > proposed_system.md",
    image: "images/05_proposed.png",
    lines: [
      { type: "heading",    text: "✅ Proposed System — What We Built" },
      { type: "blank" },
      { parts: [{ text: "  19 SQLAlchemy models", type: "highlight" }, { text: " — centralized, relational, PostgreSQL-ready", type: "plain" }] },
      { parts: [{ text: "  Gemini 2.5 Flash AI", type: "gold" }, { text: " — questions, insights, variations", type: "plain" }] },
      { parts: [{ text: "  Rule engine + AI", type: "highlight" }, { text: " — weakness detection, trend, risk, prediction", type: "plain" }] },
      { parts: [{ text: "  5 role dashboards", type: "highlight" }, { text: " — Student, Faculty, HOD, TPO, Admin", type: "plain" }] },
      { parts: [{ text: "  Excel integration", type: "highlight" }, { text: " — marks upload with dynamic column detection", type: "plain" }] },
      { parts: [{ text: "  Full placement pipeline", type: "highlight" }, { text: " — posting → eligibility → stages", type: "plain" }] },
      { parts: [{ text: "  SHA-256 hashing", type: "highlight" }, { text: " — secure passwords with auto-upgrade", type: "plain" }] },
      { parts: [{ text: "  Audit logging", type: "gold" }, { text: " — every admin action recorded with actor + timestamp", type: "plain" }] },
      { type: "blank" },
      { type: "success",   text: "  ✅ Responsive UI works on mobile and desktop" },
      { type: "success",   text: "  ✅ Dark / Light theme via next-themes" },
    ]
  },

  // ── 06 ARCHITECTURE ──────────────────────────────────────
  architecture: {
    title: "architecture.md", breadcrumb: "Performance-Analyzer > 02_System_Design > architecture.md",
    image: "images/06_architecture.png",
    lines: [
      { type: "heading",    text: "🏗️ System Architecture" },
      { type: "blank" },
      { type: "subheading", text: "3-Tier Architecture" },
      { parts: [{ text: "  [ Browser  ] ", type: "tag" }, { text: "React 18.3 + TypeScript 5.5", type: "highlight" }, { text: "  → localhost:5173", type: "comment" }] },
      { parts: [{ text: "       ↕       ", type: "plain" }, { text: "REST API · JSON/HTTP · CORS middleware", type: "comment" }] },
      { parts: [{ text: "  [ Server   ] ", type: "tag" }, { text: "FastAPI 0.103.1 + Uvicorn", type: "highlight" }, { text: "  → localhost:5000", type: "comment" }] },
      { parts: [{ text: "       ↕       ", type: "plain" }, { text: "SQLAlchemy 2.0.20 ORM", type: "comment" }] },
      { parts: [{ text: "  [ Database ] ", type: "tag" }, { text: "SQLite (database.sqlite)", type: "highlight" }, { text: " / PostgreSQL", type: "plain" }] },
      { parts: [{ text: "       ↕       ", type: "plain" }, { text: "google-generativeai SDK", type: "comment" }] },
      { parts: [{ text: "  [ AI       ] ", type: "tag" }, { text: "Google Gemini 2.5 Flash", type: "gold" }, { text: "  (GEMINI_API_KEY)", type: "comment" }] },
      { type: "blank" },
      { type: "subheading", text: "Route Protection" },
      { parts: [{ text: "  ProtectedRoute.tsx", type: "highlight" }, { text: " — checks localStorage + validates role", type: "plain" }] },
    ]
  },

  // ── 07 TECH OVERVIEW ─────────────────────────────────────
  tech_overview: {
    title: "tech_overview.md", breadcrumb: "Performance-Analyzer > 03_Technology_Stack > tech_overview.md",
    image: "images/07_tech_stack.png",
    lines: [
      { type: "heading",    text: "🛠️ Technology Stack — Complete" },
      { type: "blank" },
      { type: "subheading", text: "Frontend" },
      { parts: [{ text: "  React 18.3", type: "highlight" }, { text: " + ", type: "plain" }, { text: "TypeScript 5.5", type: "highlight" }, { text: " + ", type: "plain" }, { text: "Vite 5.4", type: "highlight" }, { text: " + Tailwind CSS 3.4", type: "plain" }] },
      { type: "string",    text: "  shadcn/ui (49 components) · Framer Motion 12.6 · Recharts 2.12" },
      { type: "string",    text: "  React Query 5.56 · React Router v6.26 · Zod 3.23 · xlsx 0.18" },
      { type: "blank" },
      { type: "subheading", text: "Backend" },
      { parts: [{ text: "  FastAPI 0.103.1", type: "highlight" }, { text: " + ", type: "plain" }, { text: "Uvicorn 0.23.2", type: "highlight" }, { text: " + ", type: "plain" }, { text: "SQLAlchemy 2.0.20", type: "highlight" }] },
      { type: "string",    text: "  Pandas 2.1.0 · openpyxl 3.1.5 · ReportLab 4.0.4 · Pydantic 2.4.2" },
      { type: "string",    text: "  hashlib · python-dotenv 1.0.0 · pytest 7.4.3 · httpx 0.25.2" },
      { type: "blank" },
      { parts: [{ text: "  AI: ", type: "keyword" }, { text: "google-generativeai ≥0.7.2", type: "gold" }, { text: " → model: gemini-2.5-flash", type: "comment" }] },
    ]
  },

  // ── 08 FRONTEND ──────────────────────────────────────────
  frontend: {
    title: "frontend.md", breadcrumb: "Performance-Analyzer > 03_Technology_Stack > frontend.md",
    image: "images/07_tech_stack.png",
    lines: [
      { type: "heading",    text: "⚛️ Frontend Architecture" },
      { type: "blank" },
      { type: "subheading", text: "Project Structure (src/)" },
      { parts: [{ text: "  pages/      ", type: "keyword" }, { text: "10 route components", type: "number" }, { text: " (PlacementHub, TrainingAnalyzer, AdminDashboard…)", type: "plain" }] },
      { parts: [{ text: "  components/ ", type: "keyword" }, { text: "93 components", type: "number" }, { text: " — admin(12), student(11), training(22), ui(49)", type: "plain" }] },
      { parts: [{ text: "  hooks/      ", type: "keyword" }, { text: "3 custom hooks", type: "number" }, { text: " — use-mobile, use-toast, useBranches", type: "plain" }] },
      { parts: [{ text: "  data/       ", type: "keyword" }, { text: "Mock data for dev", type: "string" }, { text: " — performance, sections, tests", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Routing (App.tsx)" },
      { parts: [{ text: "  /student-dashboard  ", type: "keyword" }, { text: "PlacementHub.tsx", type: "highlight" }, { text: " → Student only", type: "tag" }] },
      { parts: [{ text: "  /faculty-dashboard  ", type: "keyword" }, { text: "TrainingAnalyzer.tsx", type: "highlight" }, { text: " → Faculty,TPO,HOD", type: "tag" }] },
      { parts: [{ text: "  /admin-dashboard    ", type: "keyword" }, { text: "AdminDashboard.tsx", type: "highlight" }, { text: " → Admin only", type: "tag" }] },
      { parts: [{ text: "  /student-register   ", type: "keyword" }, { text: "StudentRegistrationPage.tsx", type: "highlight" }, { text: " → Public", type: "tag" }] },
    ]
  },

  // ── 09 BACKEND ───────────────────────────────────────────
  backend: {
    title: "backend.md", breadcrumb: "Performance-Analyzer > 03_Technology_Stack > backend.md",
    image: "images/07_tech_stack.png",
    lines: [
      { type: "heading",    text: "🐍 Backend Architecture" },
      { type: "blank" },
      { type: "subheading", text: "Single-File Monolith (main.py — ~3,150 lines)" },
      { parts: [{ text: "  19 SQLAlchemy models  ", type: "number" }, { text: "(StudentPerformance, Student, Teacher…)", type: "plain" }] },
      { parts: [{ text: "  15 Pydantic schemas   ", type: "number" }, { text: "request/response validation", type: "plain" }] },
      { parts: [{ text: "  73+ API endpoints     ", type: "number" }, { text: "auth, marks, tests, analytics, placement", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Startup Behaviour" },
      { parts: [{ text: "  Auto-creates DB schema", type: "highlight" }, { text: " on first run", type: "plain" }] },
      { parts: [{ text: "  Seeds default TPO     ", type: "highlight" }, { text: " (username:TPO, password:TPO) if none exists", type: "plain" }] },
      { parts: [{ text: "  Seeds 6 branches      ", type: "highlight" }, { text: " (CSE, IT, ECE, EEE, MECH, CIVIL)", type: "plain" }] },
      { type: "blank" },
      { parts: [{ text: "  Port:     ", type: "keyword" }, { text: "0.0.0.0:5000", type: "number" }, { text: "  |  Docs: ", type: "plain" }, { text: "/docs", type: "highlight" }, { text: " (Swagger UI)", type: "comment" }] },
      { type: "comment",   text: "  $ python main.py  or  $ uvicorn main:app --reload" },
    ]
  },

  // ── 10 STUDENT REGISTRATION ──────────────────────────────
  student_registration: {
    title: "registration.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > registration.md",
    image: "images/18_screenshots_login.png",
    lines: [
      { type: "heading",    text: "👩‍🎓 Student Registration & Approval Workflow" },
      { type: "blank" },
      { type: "subheading", text: "Step 1 — StudentRegistrationPage.tsx" },
      { type: "plain",     text: "  Fields: Name · Roll Number · Password · Section · Branch · Year" },
      { parts: [{ text: "  Branch list fetched dynamically from ", type: "plain" }, { text: "GET /api/branches", type: "keyword" }] },
      { parts: [{ text: "  Password ", type: "plain" }, { text: "SHA-256 hashed", type: "highlight" }, { text: " client-side before submission", type: "plain" }] },
      { parts: [{ text: "  Creates ", type: "plain" }, { text: "PendingStudent", type: "highlight" }, { text: " record — NOT a Student account yet", type: "plain" }] },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "POST /api/students/register", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Step 2 — Admin Approval (PendingRegistrations.tsx)" },
      { type: "success",   text: "  Bulk Approve → moves to Student table (password already hashed)" },
      { type: "error",     text: "  Bulk Reject  → deletes from pending_students table" },
      { parts: [{ text: "  Checks both ", type: "plain" }, { text: "students", type: "highlight" }, { text: " and ", type: "plain" }, { text: "pending_students", type: "highlight" }, { text: " for duplicate roll numbers", type: "plain" }] },
    ]
  },

  // ── 11 STUDENT DASHBOARD ─────────────────────────────────
  student_dashboard: {
    title: "dashboard.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > dashboard.md",
    image: "images/19_screenshots_dashboard.png",
    lines: [
      { type: "heading",    text: "📊 PlacementHub.tsx — Student Dashboard" },
      { type: "blank" },
      { type: "subheading", text: "11 Feature Tabs" },
      { parts: [{ text: "  Jobs              ", type: "keyword" }, { text: "Eligible listings auto-filtered by year", type: "string" }] },
      { parts: [{ text: "  Tests             ", type: "keyword" }, { text: "Available tests (year aliasing supported)", type: "string" }] },
      { parts: [{ text: "  Test History      ", type: "keyword" }, { text: "Past scores sorted by date descending", type: "string" }] },
      { parts: [{ text: "  Performance       ", type: "keyword" }, { text: "Subject-wise charts — internal + AI tests", type: "string" }] },
      { parts: [{ text: "  Insights          ", type: "keyword" }, { text: "AI-generated analysis + recommendations", type: "gold" }] },
      { parts: [{ text: "  Goals             ", type: "keyword" }, { text: "Set subject targets with deadline", type: "string" }] },
      { parts: [{ text: "  Resources         ", type: "keyword" }, { text: "Learning materials by subject (URL links)", type: "string" }] },
      { parts: [{ text: "  Announcements     ", type: "keyword" }, { text: "Targeted by year + branch, newest first", type: "string" }] },
      { parts: [{ text: "  Leaderboard       ", type: "keyword" }, { text: "Top 10 by analytics average score", type: "string" }] },
      { parts: [{ text: "  App. Timeline     ", type: "keyword" }, { text: "Job application stage tracker", type: "string" }] },
      { parts: [{ text: "  Predicted Score   ", type: "keyword" }, { text: "Linear regression next-score forecast", type: "gold" }] },
    ]
  },

  // ── 12 TEST-TAKING ───────────────────────────────────────
  test_taking: {
    title: "test_taking.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > test_taking.md",
    image: "images/20_screenshots_tests.png",
    lines: [
      { type: "heading",    text: "📝 Online Test System — Anti-Cheat Design" },
      { type: "blank" },
      { type: "subheading", text: "Test Discovery (StudentTestView.tsx)" },
      { parts: [{ text: "  Year alias support  ", type: "highlight" }, { text: "\"1st Year\" ↔ \"First Year\" ↔ \"1\"", type: "string" }] },
      { type: "plain",     text: "  Filters out: already-taken tests + expired tests" },
      { type: "blank" },
      { type: "subheading", text: "Anti-Cheat Architecture (TakeTestView.tsx)" },
      { parts: [{ text: "  Per-student randomization  ", type: "highlight" }, { text: "— question subset from full pool", type: "plain" }] },
      { parts: [{ text: "  Option shuffling            ", type: "highlight" }, { text: "— order different per student", type: "plain" }] },
      { parts: [{ text: "  Persistent assignment       ", type: "highlight" }, { text: "— StudentAssignedQuestion table", type: "plain" }] },
      { parts: [{ text: "  Correct answers             ", type: "gold" }, { text: "NEVER sent to browser during test", type: "plain" }] },
      { parts: [{ text: "  Auto-expiry                ", type: "highlight" }, { text: "— closes after endTime (ISO datetime)", type: "plain" }] },
      { type: "blank" },
      { parts: [{ text: "  Results visible only after ", type: "plain" }, { text: "faculty releases via PUT /api/tests/{id}/release", type: "keyword" }] },
    ]
  },

  // ── 13 STUDENT ANALYTICS ─────────────────────────────────
  student_analytics: {
    title: "analytics.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > analytics.md",
    image: "images/21_screenshots_analytics.png",
    lines: [
      { type: "heading",    text: "🧠 Student Analytics Profile" },
      { type: "blank" },
      { type: "subheading", text: "Analytics Data Sources" },
      { parts: [{ text: "  Internal Marks  ", type: "keyword" }, { text: "normalized_score  (Excel uploads)", type: "string" }] },
      { parts: [{ text: "  AI Test Scores  ", type: "keyword" }, { text: "assessment_score  (test submissions)", type: "string" }] },
      { parts: [{ text: "  Combined Score  ", type: "keyword" }, { text: "(normalized + assessment) / 2", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "StudentAnalyticsProfile Model Fields" },
      { parts: [{ text: "  average_score      ", type: "keyword" }, { text: "Overall average % across all subjects", type: "string" }] },
      { parts: [{ text: "  performance_level  ", type: "keyword" }, { text: "Excellent / Good / Average / Below Average", type: "string" }] },
      { parts: [{ text: "  weak_subjects      ", type: "keyword" }, { text: "JSON array — subjects < 40% threshold", type: "highlight" }] },
      { parts: [{ text: "  trend              ", type: "keyword" }, { text: "Improving / Declining / Stable / Slight Drop", type: "string" }] },
      { parts: [{ text: "  risk_level         ", type: "keyword" }, { text: "High", type: "error" }, { text: " / ", type: "plain" }, { text: "Moderate", type: "gold" }, { text: " / ", type: "plain" }, { text: "Low", type: "success" }] },
      { parts: [{ text: "  APIs: ", type: "keyword" }, { text: "POST /api/analytics/generate/{roll}", type: "string" }, { text: "  +  GET /api/analytics/profile/{roll}", type: "string" }] },
    ]
  },

  // ── 14 GOALS & LEADERBOARD ───────────────────────────────
  goals_leaderboard: {
    title: "goals_leaderboard.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > goals_leaderboard.md",
    image: "images/19_screenshots_dashboard.png",
    lines: [
      { type: "heading",    text: "🎯 Goals, Leaderboard & PDF Report" },
      { type: "blank" },
      { type: "subheading", text: "GoalTrackerView.tsx — StudentGoal Model" },
      { parts: [{ text: "  Fields: ", type: "keyword" }, { text: "rollNumber · subject · targetScore · deadline · status", type: "string" }] },
      { parts: [{ text: "  Status: ", type: "keyword" }, { text: "active", type: "highlight" }, { text: " → ", type: "plain" }, { text: "achieved", type: "success" }, { text: " / ", type: "plain" }, { text: "missed", type: "error" }] },
      { parts: [{ text: "  APIs: POST ", type: "keyword" }, { text: "/api/students/{roll}/goals", type: "string" }, { text: "  PUT /goals/{id}/status", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "LeaderboardView.tsx" },
      { parts: [{ text: "  Top ", type: "plain" }, { text: "10 students", type: "number" }, { text: " ranked by analytics average_score", type: "plain" }] },
      { type: "plain",     text: "  Shows: name · roll number · branch · section · score" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/students/leaderboard", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "PDF Performance Report (ReportLab 4.0.4)" },
      { type: "plain",     text: "  Blue-themed PDF — student info, performance summary," },
      { parts: [{ text: "  subject breakdown, recent tests. ", type: "plain" }, { text: "GET /api/students/{roll}/report/pdf", type: "keyword" }] },
    ]
  },

  // ── 15 STUDENT JOBS ──────────────────────────────────────
  student_jobs: {
    title: "placement_jobs.md", breadcrumb: "Performance-Analyzer > 04_Modules > Student > placement_jobs.md",
    image: "images/16_placement.png",
    lines: [
      { type: "heading",    text: "💼 Student — Jobs & Application Timeline" },
      { type: "blank" },
      { type: "subheading", text: "Job Discovery (auto-filtered)" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/student/{rollNumber}/jobs", type: "string" }] },
      { type: "plain",     text: "  Filtered by student's year automatically" },
      { type: "plain",     text: "  Shows: title · company · description · eligibility criteria" },
      { type: "blank" },
      { type: "subheading", text: "ApplicationTimeline.tsx — ApplicationStageHistory Model" },
      { parts: [{ text: "  Stages: ", type: "keyword" }, { text: "Applied", type: "string" }, { text: " → ", type: "plain" }, { text: "Shortlisted", type: "string" }, { text: " → ", type: "plain" }, { text: "Interview Scheduled", type: "string" }] },
      { parts: [{ text: "         ", type: "plain" }, { text: "Offer Extended", type: "string" }, { text: " → ", type: "plain" }, { text: "Placed", type: "success" }, { text: " / ", type: "plain" }, { text: "Rejected", type: "error" }] },
      { type: "plain",     text: "  Each stage: roll_number · job_id · company · updated_by · timestamp" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/students/{roll}/application-timeline", type: "string" }] },
    ]
  },

  // ── 16 FACULTY DASHBOARD ─────────────────────────────────
  faculty_dashboard: {
    title: "dashboard.md", breadcrumb: "Performance-Analyzer > 04_Modules > Faculty > dashboard.md",
    image: "images/10_faculty_module.png",
    lines: [
      { type: "heading",    text: "👨‍🏫 TrainingAnalyzer.tsx — Faculty Dashboard" },
      { type: "blank" },
      { type: "subheading", text: "8 Tabs (all Faculty/HOD/TPO roles)" },
      { parts: [{ text: "  Upload Marks          ", type: "keyword" }, { text: "UploadMarksTab.tsx — Excel → auto-categorize", type: "string" }] },
      { parts: [{ text: "  Create Test           ", type: "keyword" }, { text: "CreateTestTab.tsx — AI or manual import", type: "string" }] },
      { parts: [{ text: "  View Performance      ", type: "keyword" }, { text: "ViewPerformanceTab.tsx — class + individual", type: "string" }] },
      { parts: [{ text: "  AI Insights           ", type: "keyword" }, { text: "AIInsightsTab.tsx — cached Gemini analysis", type: "gold" }] },
      { parts: [{ text: "  Announcements         ", type: "keyword" }, { text: "AnnouncementsTab.tsx — year/branch targeted", type: "string" }] },
      { parts: [{ text: "  At-Risk Students      ", type: "keyword" }, { text: "AtRiskTab.tsx — threshold-based flagging", type: "highlight" }] },
      { parts: [{ text: "  Weekly Digest         ", type: "keyword" }, { text: "WeeklyDigestTab.tsx — last 7 days summary", type: "string" }] },
      { parts: [{ text: "  Cross-Section Compare ", type: "keyword" }, { text: "CrossSectionComparisonTab.tsx", type: "string" }] },
      { type: "blank" },
      { type: "comment",   text: "  // HOD adds: User Management, HOD Dashboard  |  TPO adds: Placement" },
    ]
  },

  // ── 17 UPLOAD MARKS ──────────────────────────────────────
  upload_marks: {
    title: "upload_marks.md", breadcrumb: "Performance-Analyzer > 04_Modules > Faculty > upload_marks.md",
    image: "images/10_faculty_module.png",
    lines: [
      { type: "heading",    text: "📤 UploadMarksTab.tsx — Excel Marks Upload" },
      { type: "blank" },
      { type: "subheading", text: "5-Step Processing Pipeline (POST /api/upload-marks)" },
      { type: "plain",     text: "  1. Upload .xlsx / .xls file (Pandas 2.1.0 + openpyxl 3.1.5)" },
      { parts: [{ text: "  2. Dynamic column detection  ", type: "highlight" }, { text: "— finds Roll / Name / Marks columns", type: "plain" }] },
      { parts: [{ text: "  3. normalized_score           ", type: "keyword" }, { text: "= marks / max_in_file × 100", type: "string" }] },
      { parts: [{ text: "  4. assessment_score           ", type: "keyword" }, { text: "= avg AI test score for that subject", type: "string" }] },
      { parts: [{ text: "  5. final_combined_score       ", type: "keyword" }, { text: "= (normalized + assessment) / 2", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "Auto-Categorization Rules" },
      { parts: [{ text: "  Excellent        ", type: "success" }, { text: "≥ 85%", type: "number" }, { text: "   Good     ", type: "keyword" }, { text: "≥ 70%", type: "number" }] },
      { parts: [{ text: "  Average          ", type: "string" }, { text: "≥ 50%", type: "number" }, { text: "   Needs Improvement ", type: "error" }, { text: "< 50%", type: "number" }] },
      { parts: [{ text: "  Preview: ", type: "keyword" }, { text: "CSVEditor.tsx + CSVTable.tsx", type: "highlight" }, { text: " before commit", type: "plain" }] },
    ]
  },

  // ── 18 TEST CREATION ─────────────────────────────────────
  test_creation: {
    title: "test_creation.md", breadcrumb: "Performance-Analyzer > 04_Modules > Faculty > test_creation.md",
    image: "images/15_test_system.png",
    lines: [
      { type: "heading",    text: "🤖 Test Creation — CreateTestForm.tsx" },
      { type: "blank" },
      { type: "subheading", text: "3 Question Sources (POST /api/tests/create)" },
      { parts: [{ text: "  1. AI Generated  ", type: "keyword" }, { text: "Gemini 2.5 Flash", type: "gold" }, { text: " — specify count + subject, done", type: "plain" }] },
      { parts: [{ text: "  2. Manual JSON   ", type: "keyword" }, { text: "Paste questions array directly in form", type: "string" }] },
      { parts: [{ text: "  3. Bulk Import   ", type: "keyword" }, { text: "Excel/CSV via POST /api/tests/import-questions", type: "string" }] },
      { parts: [{ text: "     Required cols: ", type: "plain" }, { text: "question_text · option_a-d · correct_answer", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "AI Question Variation Tool (AIQuestionVariationTool.tsx)" },
      { parts: [{ text: "  POST /api/tests/generate-variations", type: "keyword" }] },
      { parts: [{ text: "  Input: base_questions + multiplication_factor + total_count + subject", type: "plain" }] },
      { parts: [{ text: "  E.g.:  ", type: "plain" }, { text: "10 questions × factor 3", type: "number" }, { text: " → ", type: "plain" }, { text: "30 unique variants", type: "gold" }] },
      { parts: [{ text: "  Result release: ", type: "keyword" }, { text: "PUT /api/tests/{id}/release", type: "string" }, { text: " — faculty controls timing", type: "plain" }] },
    ]
  },

  // ── 19 CLASS ANALYTICS ───────────────────────────────────
  class_analytics: {
    title: "class_analytics.md", breadcrumb: "Performance-Analyzer > 04_Modules > Faculty > class_analytics.md",
    image: "images/17_analytics.png",
    lines: [
      { type: "heading",    text: "📈 ClassInsightsDashboard.tsx" },
      { type: "blank" },
      { type: "subheading", text: "GET /api/analytics/class/{year}/{branch}/{section}" },
      { type: "blank" },
      { parts: [{ text: "  Class average         ", type: "keyword" }, { text: "Weighted avg across all subjects", type: "string" }] },
      { parts: [{ text: "  Top + Lowest scorers  ", type: "keyword" }, { text: "Named list with scores", type: "string" }] },
      { parts: [{ text: "  Performance dist.     ", type: "keyword" }, { text: "Excellent / Good / Average / Below Avg  (Pie)", type: "string" }] },
      { parts: [{ text: "  Risk distribution     ", type: "keyword" }, { text: "High / Moderate / Low breakdown  (Pie)", type: "string" }] },
      { parts: [{ text: "  Subject difficulty    ", type: "keyword" }, { text: "Subjects where most students are weak", type: "highlight" }] },
      { parts: [{ text: "  Weak student list     ", type: "keyword" }, { text: "Names + scores + intervention notes", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Chart Library" },
      { parts: [{ text: "  Recharts 2.12 — ", type: "plain" }, { text: "Bar · Line · Pie · Area", type: "highlight" }, { text: " — all interactive, hover tooltips", type: "plain" }] },
    ]
  },

  // ── 20 AT-RISK ───────────────────────────────────────────
  at_risk: {
    title: "at_risk_digest.md", breadcrumb: "Performance-Analyzer > 04_Modules > Faculty > at_risk_digest.md",
    image: "images/10_faculty_module.png",
    lines: [
      { type: "heading",    text: "⚠️ AtRiskTab.tsx + WeeklyDigestTab.tsx" },
      { type: "blank" },
      { type: "subheading", text: "At-Risk Student Flagging" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/performance/at-risk?branch=X&year=Y&section=Z&threshold=40", type: "string" }] },
      { parts: [{ text: "  Threshold configurable  ", type: "highlight" }, { text: "— default 40% average score", type: "plain" }] },
      { type: "plain",     text: "  Shows: roll number · name · average score · performance level · risk" },
      { type: "plain",     text: "  Filterable by branch, year, section" },
      { type: "blank" },
      { type: "subheading", text: "Weekly Performance Digest (Last 7 Days)" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/performance/weekly-digest?branch=X&year=Y", type: "string" }] },
      { parts: [{ text: "  Metrics: ", type: "plain" }, { text: "total test attempts · class avg · highest/lowest scores", type: "string" }] },
      { parts: [{ text: "  Top performers (≥80%)  ", type: "success" }, { text: "and at-risk (<40%) lists", type: "error" }] },
    ]
  },

  // ── 21 HOD OVERVIEW ──────────────────────────────────────
  hod_overview: {
    title: "hod_overview.md", breadcrumb: "Performance-Analyzer > 04_Modules > HOD > hod_overview.md",
    image: "images/11_hod_module.png",
    lines: [
      { type: "heading",    text: "🏛️ HODDashboard.tsx — Head of Department" },
      { type: "blank" },
      { type: "plain",     text: "HOD = All Faculty capabilities PLUS:" },
      { type: "blank" },
      { type: "subheading", text: "HOD-Exclusive Additions" },
      { parts: [{ text: "  Faculty Management   ", type: "highlight" }, { text: "— FacultyManagement.tsx (full CRUD)", type: "plain" }] },
      { parts: [{ text: "  Department Analytics ", type: "highlight" }, { text: "— all sections visible at once", type: "plain" }] },
      { parts: [{ text: "  HOD Dashboard        ", type: "highlight" }, { text: "— HODDashboard.tsx overview page", type: "plain" }] },
      { parts: [{ text: "  User Management Form ", type: "highlight" }, { text: "— UserManagementForm.tsx", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Cross-Section Comparison (shared with Faculty)" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/performance/cross-section-comparison", type: "string" }] },
      { type: "plain",     text: "  Query: subject · year · branch → avg/highest/lowest per section" },
    ]
  },

  // ── 22 FACULTY MANAGEMENT ────────────────────────────────
  faculty_mgmt: {
    title: "faculty_management.md", breadcrumb: "Performance-Analyzer > 04_Modules > HOD > faculty_management.md",
    image: "images/11_hod_module.png",
    lines: [
      { type: "heading",    text: "👥 FacultyManagement.tsx — Teacher CRUD" },
      { type: "blank" },
      { type: "subheading", text: "Full CRUD (available to HOD + Admin)" },
      { parts: [{ text: "  Add      ", type: "success" }, { text: "POST /api/teachers/add", type: "keyword" }, { text: " — name, username, password, role, subject", type: "plain" }] },
      { parts: [{ text: "  View     ", type: "keyword" }, { text: "GET /api/teachers", type: "keyword" }, { text: " — id, name, username, role, subject", type: "plain" }] },
      { parts: [{ text: "  Edit     ", type: "keyword" }, { text: "PUT /api/teachers/{id}", type: "keyword" }, { text: " — password only if non-empty, not '••••••••'", type: "plain" }] },
      { parts: [{ text: "  Delete   ", type: "error" }, { text: "DELETE /api/teachers/{id}", type: "keyword" }, { text: " — single teacher", type: "plain" }] },
      { parts: [{ text: "  Bulk del ", type: "error" }, { text: "DELETE /api/teachers/cleanup", type: "keyword" }, { text: " — all faculty records", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Special Controls" },
      { parts: [{ text: "  TPO Access Toggle  ", type: "highlight" }, { text: "Grant / revoke Placement portal access", type: "plain" }] },
      { parts: [{ text: "  Roles:  ", type: "plain" }, { text: "\"faculty\"", type: "string" }, { text: " | ", type: "plain" }, { text: "\"hod\"", type: "string" }, { text: " | ", type: "plain" }, { text: "\"tpo\"", type: "string" }, { text: " (Teacher model)", type: "plain" }] },
    ]
  },

  // ── 23 JOB POSTINGS ──────────────────────────────────────
  job_postings: {
    title: "job_postings.md", breadcrumb: "Performance-Analyzer > 04_Modules > TPO > job_postings.md",
    image: "images/16_placement.png",
    lines: [
      { type: "heading",    text: "📢 PlacementManagement.tsx — Job Postings" },
      { type: "blank" },
      { type: "subheading", text: "Job Model Fields (POST /api/jobs/create)" },
      { parts: [{ text: "  title       ", type: "keyword" }, { text: "Job title string", type: "string" }] },
      { parts: [{ text: "  company     ", type: "keyword" }, { text: "Company name", type: "string" }] },
      { parts: [{ text: "  description ", type: "keyword" }, { text: "Full job description text", type: "string" }] },
      { parts: [{ text: "  year        ", type: "keyword" }, { text: "Eligible academic year (e.g. \"4th Year\")", type: "highlight" }] },
      { parts: [{ text: "  branch      ", type: "keyword" }, { text: "Eligible branch (e.g. \"CSE\")", type: "highlight" }] },
      { parts: [{ text: "  section     ", type: "keyword" }, { text: "\"All\" or specific section", type: "highlight" }] },
      { parts: [{ text: "  min_score   ", type: "keyword" }, { text: "Minimum analytics score (nullable Float)", type: "highlight" }] },
      { parts: [{ text: "  posted_by   ", type: "keyword" }, { text: "TPO username · posted_at timestamp", type: "string" }] },
      { type: "blank" },
      { type: "comment",   text: "  // Students see ONLY jobs matching their year via GET /api/student/{roll}/jobs" },
    ]
  },

  // ── 24 ELIGIBILITY ───────────────────────────────────────
  eligibility: {
    title: "eligibility_filter.md", breadcrumb: "Performance-Analyzer > 04_Modules > TPO > eligibility_filter.md",
    image: "images/16_placement.png",
    lines: [
      { type: "heading",    text: "🔎 Student Eligibility Auto-Filter" },
      { type: "blank" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/jobs/{job_id}/eligible-students", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "4 Automatic Filter Criteria" },
      { parts: [{ text: "  ✓ year match    ", type: "success" }, { text: "Student year = job's eligible year", type: "plain" }] },
      { parts: [{ text: "  ✓ branch match  ", type: "success" }, { text: "Student branch = job's branch", type: "plain" }] },
      { parts: [{ text: "  ✓ section match ", type: "success" }, { text: "Student section = job's section  (\"All\" = everyone)", type: "plain" }] },
      { parts: [{ text: "  ✓ score ≥ min   ", type: "success" }, { text: "StudentAnalyticsProfile.average_score ≥ job.min_score", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Application Stage Update (Audit Logged)" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "POST /api/application-stage", type: "string" }, { text: " — TPO action, auto audit-logged", type: "comment" }] },
      { parts: [{ text: "  Form: ", type: "plain" }, { text: "roll_number · job_id · company · stage · updated_by", type: "string" }] },
    ]
  },

  // ── 25 PLACEMENT STATS ───────────────────────────────────
  placement_stats: {
    title: "placement_stats.md", breadcrumb: "Performance-Analyzer > 04_Modules > TPO > placement_stats.md",
    image: "images/16_placement.png",
    lines: [
      { type: "heading",    text: "📊 Placement Statistics Dashboard" },
      { type: "blank" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/placement/stats", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Metrics Returned" },
      { parts: [{ text: "  Total Placed    ", type: "keyword" }, { text: "Count of students with \"Placed\" stage", type: "string" }] },
      { parts: [{ text: "  Placement Rate  ", type: "keyword" }, { text: "% of eligible students successfully placed", type: "highlight" }] },
      { parts: [{ text: "  Top Companies   ", type: "keyword" }, { text: "Ranked by number of hires", type: "string" }] },
      { parts: [{ text: "  By Branch       ", type: "keyword" }, { text: "Breakdown chart per department", type: "string" }] },
      { parts: [{ text: "  By Year         ", type: "keyword" }, { text: "Breakdown chart per academic year", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Application Stage Pipeline" },
      { parts: [{ text: "  Applied → Shortlisted → Interview Scheduled → Offer Extended → ", type: "keyword" }, { text: "Placed", type: "success" }] },
      { type: "plain",     text: "  Each stage transition logged with TPO username + timestamp" },
    ]
  },

  // ── 26 ADMIN OVERVIEW ────────────────────────────────────
  admin_overview: {
    title: "admin_overview.md", breadcrumb: "Performance-Analyzer > 04_Modules > Admin > admin_overview.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "🛡️ AdminDashboard.tsx — Super Admin" },
      { type: "blank" },
      { type: "subheading", text: "10 Admin Sections" },
      { parts: [{ text: "  1.  Manage Sections     ", type: "keyword" }, { text: "ManageSections.tsx — branches, years, sections", type: "string" }] },
      { parts: [{ text: "  2.  Faculty Management  ", type: "keyword" }, { text: "FacultyManagement.tsx — full CRUD", type: "string" }] },
      { parts: [{ text: "  3.  Student Data        ", type: "keyword" }, { text: "StudentData.tsx — filterable, inline edit, delete", type: "string" }] },
      { parts: [{ text: "  4.  Bulk Import         ", type: "keyword" }, { text: "BulkAdminImport.tsx — Excel students + faculty", type: "highlight" }] },
      { parts: [{ text: "  5.  Pending Registrations", type: "keyword" }, { text: "PendingRegistrations.tsx — approve/reject", type: "highlight" }] },
      { parts: [{ text: "  6.  System Stats        ", type: "keyword" }, { text: "SystemStatsPanel.tsx — live entity counts", type: "string" }] },
      { parts: [{ text: "  7.  Branch Analytics    ", type: "keyword" }, { text: "BranchAnalyticsDashboard.tsx — matrix view", type: "string" }] },
      { parts: [{ text: "  8.  Audit Log           ", type: "keyword" }, { text: "AuditLogViewer.tsx — paginated, filterable", type: "gold" }] },
      { parts: [{ text: "  9.  TPO Management      ", type: "keyword" }, { text: "TpoManagement.tsx — reset TPO password", type: "string" }] },
      { parts: [{ text: "  10. HOD Management      ", type: "keyword" }, { text: "HODManagement.tsx — HOD accounts", type: "string" }] },
    ]
  },

  // ── 27 BULK IMPORT ───────────────────────────────────────
  bulk_import: {
    title: "bulk_import.md", breadcrumb: "Performance-Analyzer > 04_Modules > Admin > bulk_import.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "📥 BulkAdminImport.tsx — Excel Registration" },
      { type: "blank" },
      { type: "subheading", text: "Bulk Students (POST /api/admin/bulk-students)" },
      { parts: [{ text: "  Required: ", type: "keyword" }, { text: "name · roll_number · password", type: "highlight" }] },
      { parts: [{ text: "  Optional: ", type: "keyword" }, { text: "branch · year · section", type: "string" }] },
      { type: "plain",     text: "  Passwords auto-hashed (SHA-256) on import" },
      { type: "success",   text: "  Auto-syncs Section metadata table after student import" },
      { type: "blank" },
      { type: "subheading", text: "Bulk Faculty (POST /api/admin/bulk-faculty)" },
      { parts: [{ text: "  Required: ", type: "keyword" }, { text: "name · username · password", type: "highlight" }] },
      { parts: [{ text: "  Optional: ", type: "keyword" }, { text: "subject", type: "string" }] },
      { type: "blank" },
      { type: "plain",     text: "  Result shows: count imported, skipped duplicates" },
      { type: "success",   text: "  ✅ 100s of users registered from a single Excel file" },
    ]
  },

  // ── 28 PENDING ───────────────────────────────────────────
  pending: {
    title: "pending_approvals.md", breadcrumb: "Performance-Analyzer > 04_Modules > Admin > pending_approvals.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "⏳ PendingRegistrations.tsx" },
      { type: "blank" },
      { type: "subheading", text: "PendingStudent Model Fields" },
      { parts: [{ text: "  name · rollNumber · password · section · branch · year · status", type: "string" }] },
      { parts: [{ text: "  Default status: ", type: "keyword" }, { text: "\"pending\"", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "Admin Actions" },
      { parts: [{ text: "  GET    ", type: "keyword" }, { text: "/api/admin/pending-students", type: "string" }, { text: " — view all requests", type: "plain" }] },
      { parts: [{ text: "  APPROVE", type: "success" }, { text: "  /api/admin/pending-students/bulk-approve", type: "string" }] },
      { type: "plain",     text: "         Body: { \"rollNumbers\": [\"CSE001\", \"CSE002\"] }" },
      { type: "plain",     text: "         Moves rows from pending_students → students table" },
      { parts: [{ text: "  REJECT ", type: "error" }, { text: "  /api/admin/pending-students/bulk-reject", type: "string" }] },
      { type: "plain",     text: "         Deletes from pending_students permanently" },
    ]
  },

  // ── 29 SYSTEM STATS ──────────────────────────────────────
  sys_stats: {
    title: "system_stats.md", breadcrumb: "Performance-Analyzer > 04_Modules > Admin > system_stats.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "📡 SystemStatsPanel.tsx — Live Entity Counts" },
      { type: "blank" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/admin/stats", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Metrics Returned" },
      { parts: [{ text: "  Total Students          ", type: "keyword" }, { text: "Count from students table", type: "number" }] },
      { parts: [{ text: "  Total Faculty           ", type: "keyword" }, { text: "Count from teachers table", type: "number" }] },
      { parts: [{ text: "  Total Tests             ", type: "keyword" }, { text: "Created, active, and expired", type: "number" }] },
      { parts: [{ text: "  Total Test Results      ", type: "keyword" }, { text: "StudentTestResult rows", type: "number" }] },
      { parts: [{ text: "  Total Jobs              ", type: "keyword" }, { text: "Active + closed listings", type: "number" }] },
      { parts: [{ text: "  Total Announcements     ", type: "keyword" }, { text: "Posted across all branches", type: "number" }] },
      { parts: [{ text: "  Total Resources         ", type: "keyword" }, { text: "SubjectResource entries", type: "number" }] },
      { parts: [{ text: "  Analytics Profiles      ", type: "keyword" }, { text: "StudentAnalyticsProfile count", type: "gold" }] },
      { parts: [{ text: "  Avg System Score        ", type: "keyword" }, { text: "Overall performance baseline %", type: "highlight" }] },
    ]
  },

  // ── 30 AUDIT LOG ─────────────────────────────────────────
  audit_log: {
    title: "audit_log.md", breadcrumb: "Performance-Analyzer > 04_Modules > Admin > audit_log.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "🔐 AuditLogViewer.tsx — Full Accountability" },
      { type: "blank" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/admin/audit-log?page=1&limit=20&actor=X&action=Y", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "AuditLog Model Fields" },
      { parts: [{ text: "  actorUsername  ", type: "keyword" }, { text: "Who performed the action", type: "string" }] },
      { parts: [{ text: "  actorRole      ", type: "keyword" }, { text: "Their role at time of action", type: "string" }] },
      { parts: [{ text: "  action         ", type: "keyword" }, { text: "Action type string", type: "highlight" }] },
      { parts: [{ text: "  entityType     ", type: "keyword" }, { text: "e.g. \"Test\", \"Student\"", type: "string" }] },
      { parts: [{ text: "  details        ", type: "keyword" }, { text: "Free-text details", type: "string" }] },
      { parts: [{ text: "  timestamp      ", type: "keyword" }, { text: "ISO datetime of the action", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Actions Tracked" },
      { type: "highlight",  text: "  BULK_REGISTER_STUDENTS · BULK_REGISTER_FACULTY" },
      { type: "highlight",  text: "  IMPORT_QUESTIONS · UPDATE_APPLICATION_STAGE" },
    ]
  },

  // ── 31 AI OVERVIEW ───────────────────────────────────────
  ai_overview: {
    title: "ai_overview.md", breadcrumb: "Performance-Analyzer > 05_AI_Features > ai_overview.md",
    image: "images/14_ai_features.png",
    lines: [
      { type: "heading",    text: "🤖 AI Integration — Google Gemini 2.5 Flash" },
      { type: "blank" },
      { type: "subheading", text: "Configuration" },
      { parts: [{ text: "  Model:   ", type: "keyword" }, { text: "gemini-2.5-flash", type: "gold" }] },
      { parts: [{ text: "  Format:  ", type: "keyword" }, { text: "application/json  (structured responses)", type: "string" }] },
      { parts: [{ text: "  SDK:     ", type: "keyword" }, { text: "google-generativeai >= 0.7.2", type: "string" }] },
      { parts: [{ text: "  API Key: ", type: "keyword" }, { text: "GEMINI_API_KEY  in .env file", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "4 Usage Areas in main.py" },
      { parts: [{ text: "  1. ", type: "number" }, { text: "Test Question Generation  ", type: "highlight" }, { text: "— POST /api/tests/create", type: "keyword" }] },
      { parts: [{ text: "  2. ", type: "number" }, { text: "Question Variations       ", type: "highlight" }, { text: "— POST /api/tests/generate-variations", type: "keyword" }] },
      { parts: [{ text: "  3. ", type: "number" }, { text: "Student Insights          ", type: "highlight" }, { text: "— POST /api/analytics/generate/{roll}", type: "keyword" }] },
      { parts: [{ text: "  4. ", type: "number" }, { text: "Class-Level AI Analysis   ", type: "highlight" }, { text: "— cached in InsightCache model", type: "keyword" }] },
      { type: "blank" },
      { type: "success",   text: "  ✅ InsightCache prevents redundant API calls" },
    ]
  },

  // ── 32 AI QUESTIONS ──────────────────────────────────────
  ai_questions: {
    title: "question_generation.md", breadcrumb: "Performance-Analyzer > 05_AI_Features > question_generation.md",
    image: "images/15_test_system.png",
    lines: [
      { type: "heading",    text: "🧪 AI Question Generation & Variations" },
      { type: "blank" },
      { type: "subheading", text: "Test Creation — POST /api/tests/create" },
      { type: "plain",     text: "  If questions[] array NOT provided in request body," },
      { parts: [{ text: "  Gemini 2.5 Flash ", type: "gold" }, { text: "generates MCQs for the given subject + count", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Each Generated Question Contains" },
      { parts: [{ text: "  question  ", type: "keyword" }, { text: "Clear, course-appropriate question text", type: "string" }] },
      { parts: [{ text: "  option_a–d", type: "keyword" }, { text: "4 options with plausible distractors", type: "string" }] },
      { parts: [{ text: "  correct_answer", type: "keyword" }, { text: "Stored server-side ONLY", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "Variation Generator — POST /api/tests/generate-variations" },
      { parts: [{ text: "  Params: ", type: "plain" }, { text: "base_questions  ·  multiplication_factor  ·  total_count  ·  subject", type: "string" }] },
      { parts: [{ text: "  Example: ", type: "plain" }, { text: "10 questions × factor 3  =  30 unique rephrased variants", type: "gold" }] },
    ]
  },

  // ── 33 AI INSIGHTS ───────────────────────────────────────
  ai_insights: {
    title: "student_insights.md", breadcrumb: "Performance-Analyzer > 05_AI_Features > student_insights.md",
    image: "images/21_screenshots_analytics.png",
    lines: [
      { type: "heading",    text: "💡 Student AI Insight Profile Generation" },
      { type: "blank" },
      { type: "subheading", text: "POST /api/analytics/generate/{student_roll}" },
      { type: "blank" },
      { type: "subheading", text: "Two-Stage Pipeline" },
      { parts: [{ text: "  Stage 1  ", type: "keyword" }, { text: "Rule engine", type: "highlight" }, { text: " — computes:", type: "plain" }] },
      { type: "string",    text: "     avg_score · performance_level · weak_subjects (<40%)" },
      { type: "string",    text: "     trend (Improving/Declining/Stable/Slight Drop)" },
      { type: "string",    text: "     risk_level (High/Moderate/Low) · predicted_score" },
      { parts: [{ text: "  Stage 2  ", type: "keyword" }, { text: "Gemini 2.5 Flash", type: "gold" }, { text: " — generates:", type: "plain" }] },
      { type: "string",    text: "     WHY analysis per weak subject (DSA, Communication, CRT, Aptitude)" },
      { type: "string",    text: "     Personalized improvement recommendations (JSON array)" },
      { type: "blank" },
      { type: "subheading", text: "InsightCache" },
      { parts: [{ text: "  data_hash", type: "highlight" }, { text: " field — detects stale cache, triggers regeneration", type: "plain" }] },
    ]
  },

  // ── 34 AI PREDICT ────────────────────────────────────────
  ai_predict: {
    title: "predictive_scoring.md", breadcrumb: "Performance-Analyzer > 05_AI_Features > predictive_scoring.md",
    image: "images/21_screenshots_analytics.png",
    lines: [
      { type: "heading",    text: "📉 PredictiveScoreCard.tsx — Linear Regression" },
      { type: "blank" },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/students/{roll_number}/predictions", type: "string" }] },
      { parts: [{ text: "  Requirement: ", type: "keyword" }, { text: "≥ 2 test attempts", type: "number" }, { text: " for meaningful prediction", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Response Fields" },
      { parts: [{ text: "  predicted_score  ", type: "keyword" }, { text: "Numerical next-score forecast", type: "number" }] },
      { parts: [{ text: "  trend_slope      ", type: "keyword" }, { text: "Direction indicator (↑ positive / ↓ negative)", type: "string" }] },
      { parts: [{ text: "  confidence_level ", type: "keyword" }, { text: "low", type: "error" }, { text: " (<5 tests)  ", type: "plain" }, { text: "medium", type: "gold" }, { text: " (5–10)  ", type: "plain" }, { text: "high", type: "success" }, { text: " (>10)", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Where It Appears" },
      { parts: [{ text: "  Student Dashboard  ", type: "plain" }, { text: "\"Predicted Score\" tab in PlacementHub.tsx", type: "string" }] },
      { parts: [{ text: "  Insights Profile   ", type: "plain" }, { text: "predicted_score field in StudentAnalyticsProfile", type: "string" }] },
    ]
  },

  // ── 35 SS LOGIN ──────────────────────────────────────────
  ss_login: {
    title: "login_pages.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > login_pages.md",
    image: "images/18_screenshots_login.png",
    lines: [
      { type: "heading",    text: "🔑 Login Pages — 4 Entry Points" },
      { type: "blank" },
      { parts: [{ text: "  /student-login    ", type: "keyword" }, { text: "StudentLoginPage.tsx", type: "highlight" }, { text: " — Roll No + Password", type: "plain" }] },
      { parts: [{ text: "  /faculty-login    ", type: "keyword" }, { text: "FacultyLoginPage.tsx", type: "highlight" }, { text: " — Username + Password", type: "plain" }] },
      { parts: [{ text: "  /admin-login      ", type: "keyword" }, { text: "AdminLoginPage.tsx", type: "highlight" }, { text: " — ENV var credentials", type: "plain" }] },
      { parts: [{ text: "  /student-register ", type: "keyword" }, { text: "StudentRegistrationPage.tsx", type: "highlight" }, { text: " — Public sign-up", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Security Details" },
      { parts: [{ text: "  SHA-256 hashing   ", type: "highlight" }, { text: "via hashlib (all roles)", type: "plain" }] },
      { parts: [{ text: "  Auto-upgrade      ", type: "highlight" }, { text: "— plain-text passwords auto-hashed on login", type: "plain" }] },
      { type: "plain",     text: "  Session: stored in browser localStorage after login" },
      { parts: [{ text: "  ProtectedRoute.tsx", type: "highlight" }, { text: " — guards all dashboard routes by role", type: "plain" }] },
      { type: "comment",   text: "  // Admin validated against ADMIN_USERNAME / ADMIN_PASSWORD env vars" },
    ]
  },

  // ── 36–40 SCREENSHOTS ────────────────────────────────────
  ss_student: {
    title: "student_dashboard.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > student_dashboard.md",
    image: "images/19_screenshots_dashboard.png",
    lines: [
      { type: "heading",    text: "🖼️ Screenshot — Student Dashboard (PlacementHub)" },
      { type: "blank" },
      { type: "subheading", text: "Tech Powering the UI" },
      { parts: [{ text: "  shadcn/ui 49 components  ", type: "highlight" }, { text: "Radix UI based — ARIA compliant", type: "string" }] },
      { parts: [{ text: "  Framer Motion 12.6       ", type: "highlight" }, { text: "Smooth tab + page transitions", type: "string" }] },
      { parts: [{ text: "  Recharts 2.12            ", type: "highlight" }, { text: "Bar, Line, Pie, Area charts — interactive", type: "string" }] },
      { parts: [{ text: "  React Query 5.56         ", type: "highlight" }, { text: "5-min stale time, auto caching", type: "string" }] },
      { parts: [{ text: "  Sonner 1.5               ", type: "highlight" }, { text: "Toast notifications for errors/success", type: "string" }] },
      { type: "blank" },
      { type: "subheading", text: "Profile Section Shows" },
      { type: "plain",     text: "  Name · Roll Number · Year · Branch · Section" },
      { type: "success",   text: "  ✅ Dark / Light mode toggle (next-themes 0.3)" },
    ]
  },

  ss_faculty: {
    title: "faculty_dashboard.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > faculty_dashboard.md",
    image: "images/10_faculty_module.png",
    lines: [
      { type: "heading",    text: "🖼️ Screenshot — Faculty Dashboard (TrainingAnalyzer)" },
      { type: "blank" },
      { type: "subheading", text: "Key Components Visible" },
      { parts: [{ text: "  ClassGraph.tsx              ", type: "keyword" }, { text: "Combined bar chart per student", type: "string" }] },
      { parts: [{ text: "  ClassInsightsDashboard.tsx  ", type: "keyword" }, { text: "Risk + performance distribution", type: "string" }] },
      { parts: [{ text: "  StudentGraph.tsx             ", type: "keyword" }, { text: "Individual student line chart", type: "string" }] },
      { parts: [{ text: "  PerformanceFilter.tsx        ", type: "keyword" }, { text: "Year / Branch / Section selector", type: "string" }] },
      { parts: [{ text: "  CSVEditor.tsx + CSVTable.tsx ", type: "keyword" }, { text: "Preview marks before upload", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "TrainingAnalyzer.tsx Role-Aware Tabs" },
      { type: "plain",     text: "  All roles: 8 shared tabs" },
      { type: "plain",     text: "  HOD adds: User Management + HOD Dashboard" },
      { type: "plain",     text: "  TPO adds: Placement Management tab" },
    ]
  },

  ss_test: {
    title: "test_interface.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > test_interface.md",
    image: "images/20_screenshots_tests.png",
    lines: [
      { type: "heading",    text: "🖼️ Screenshot — Test Interface (TakeTestView)" },
      { type: "blank" },
      { type: "subheading", text: "TakeTestView.tsx — What the Student Sees" },
      { parts: [{ text: "  Question counter    ", type: "keyword" }, { text: "\"Q 5 of 20\" style progress", type: "string" }] },
      { parts: [{ text: "  Option cards        ", type: "keyword" }, { text: "Click to select · visually highlighted", type: "string" }] },
      { parts: [{ text: "  Navigation          ", type: "keyword" }, { text: "Prev / Next buttons between questions", type: "string" }] },
      { parts: [{ text: "  Single submit       ", type: "keyword" }, { text: "All answers submitted at once", type: "string" }] },
      { parts: [{ text: "  Instant feedback    ", type: "keyword" }, { text: "Score shown immediately post-submit", type: "highlight" }] },
      { type: "blank" },
      { type: "subheading", text: "StudentTestView.tsx — Test Discovery" },
      { type: "plain",     text: "  Year aliasing: \"1st Year\" ↔ \"First Year\" ↔ \"1\"" },
      { type: "plain",     text: "  Filters: already-taken + expired tests removed" },
      { parts: [{ text: "  UpcomingTestBanner.tsx ", type: "highlight" }, { text: "— shows next scheduled test", type: "plain" }] },
    ]
  },

  ss_analytics: {
    title: "analytics_charts.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > analytics_charts.md",
    image: "images/21_screenshots_analytics.png",
    lines: [
      { type: "heading",    text: "🖼️ Screenshot — Analytics Charts (Recharts 2.12)" },
      { type: "blank" },
      { type: "subheading", text: "StudentAnalyticsView.tsx" },
      { parts: [{ text: "  Combined data: ", type: "keyword" }, { text: "internal Excel marks + AI test scores", type: "highlight" }] },
      { type: "plain",     text: "  Subject-wise breakdown with source labels (Internal / AI Test)" },
      { type: "blank" },
      { type: "subheading", text: "Chart Types" },
      { parts: [{ text: "  Bar   ", type: "keyword" }, { text: "Subject scores · class comparison · placement stats", type: "string" }] },
      { parts: [{ text: "  Line  ", type: "keyword" }, { text: "Performance trend over time", type: "string" }] },
      { parts: [{ text: "  Pie   ", type: "keyword" }, { text: "Excellent/Good/Average/Below distribution", type: "string" }] },
      { parts: [{ text: "  Area  ", type: "keyword" }, { text: "Score trends with fill", type: "string" }] },
      { type: "blank" },
      { type: "plain",     text: "  Custom chart wrapper: components/ui/chart.tsx" },
      { type: "success",   text: "  ✅ All hover-interactive with tooltips" },
    ]
  },

  ss_admin: {
    title: "admin_panel.md", breadcrumb: "Performance-Analyzer > 06_Screenshots > admin_panel.md",
    image: "images/22_screenshots_admin.png",
    lines: [
      { type: "heading",    text: "🖼️ Screenshot — Admin Panel" },
      { type: "blank" },
      { type: "subheading", text: "StudentData.tsx" },
      { parts: [{ text: "  Filterable by ", type: "plain" }, { text: "branch · year · section", type: "highlight" }] },
      { type: "plain",     text: "  Inline edit: name · section · branch · year · password" },
      { type: "plain",     text: "  Delete with cascading cleanup of all related data" },
      { type: "blank" },
      { type: "subheading", text: "BranchAnalyticsDashboard.tsx" },
      { type: "plain",     text: "  Branch × Year performance matrix" },
      { type: "plain",     text: "  Performance category distributions per group" },
      { parts: [{ text: "  Top 5 system-wide performers listed  ", type: "highlight" }] },
      { parts: [{ text: "  API: ", type: "keyword" }, { text: "GET /api/admin/branch-analytics", type: "string" }] },
    ]
  },

  // ── 41 UML DIAGRAMS ──────────────────────────────────────
  uml_architecture: {
    title: "high_level_architecture.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > high_level_architecture.md",
    image: "images/ER-Diag/high_level_system_architecture.png",
    lines: [
      { type: "heading",    text: "🏗️ High Level System Architecture" },
      { type: "blank" },
      { type: "plain",     text: "Visual representation of the overall architecture." },
    ]
  },
  
  uml_db_schema: {
    title: "database_schema.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > database_schema.md",
    image: "images/ER-Diag/high_level_database_schema.png",
    lines: [
      { type: "heading",    text: "💾 High Level Database Schema" },
      { type: "blank" },
      { type: "plain",     text: "Entity-Relationship model overview." },
    ]
  },

  uml_use_case: {
    title: "use_case_diagram.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > use_case_diagram.md",
    image: "images/ER-Diag/use_case.png",
    lines: [
      { type: "heading",    text: "👤 System Use Case Diagram" },
      { type: "blank" },
      { type: "plain",     text: "Interactions between different actors (Student, Faculty, Admin, HOD, TPO) and system modules." },
    ]
  },

  uml_class: {
    title: "class_diagram.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > class_diagram.md",
    image: "images/ER-Diag/high_level_class_daigram.png",
    lines: [
      { type: "heading",    text: "📦 System Class Diagram" },
      { type: "blank" },
      { type: "plain",     text: "Object-oriented structure and relationships within the backend models." },
    ]
  },

  uml_seq_test: {
    title: "seq_take_test.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > seq_take_test.md",
    image: "images/ER-Diag/sequence_take_test.png",
    lines: [
      { type: "heading",    text: "🔄 Sequence Diagram — Take Test" },
      { type: "blank" },
      { type: "plain",     text: "Timeline of events for a student discovering, taking, and submitting a test." },
    ]
  },

  uml_seq_login: {
    title: "seq_login.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > seq_login.md",
    image: "images/ER-Diag/sequence_login.png",
    lines: [
      { type: "heading",    text: "🔐 Sequence Diagram — Login Workflow" },
      { type: "blank" },
      { type: "plain",     text: "Authentication process, password hashing, and token/session verification." },
    ]
  },

  uml_hl_flow: {
    title: "high_level_flow_chart.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > high_level_flow_chart.md",
    image: "images/ER-Diag/high_level_flow_chart.png",
    lines: [
      { type: "heading",    text: "🌊 High Level Flow Chart" },
      { type: "blank" },
      { type: "plain",     text: "Visualizing the general process flow of the entire system." },
    ]
  },

  uml_component: {
    title: "component_diagram.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > component_diagram.md",
    image: "images/ER-Diag/high_level_component_diagram.png",
    lines: [
      { type: "heading",    text: "🧩 Component Diagram" },
      { type: "blank" },
      { type: "plain",     text: "Shows how system components relate to each other." },
    ]
  },

  uml_deployment: {
    title: "deployment_diagram.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > deployment_diagram.md",
    image: "images/ER-Diag/deployment_diagram.png",
    lines: [
      { type: "heading",    text: "🚀 Deployment Diagram" },
      { type: "blank" },
      { type: "plain",     text: "Hardware/Software execution environment for the platform." },
    ]
  },

  uml_ll_db: {
    title: "low_level_database.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > low_level_database.md",
    image: "images/ER-Diag/low_level_database_schema.png",
    lines: [
      { type: "heading",    text: "🗄️ Low Level Database Schema" },
      { type: "blank" },
      { type: "plain",     text: "Granular view of tables, columns, constraints and types." },
    ]
  },

  uml_use_case_perfo: {
    title: "use_case_perfo.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > use_case_perfo.md",
    image: "images/ER-Diag/USE_CASE_DIAGRAM_PERFO.png",
    lines: [
      { type: "heading",    text: "🔍 Detailed Use Case Diagram" },
      { type: "blank" },
      { type: "plain",     text: "Expanded view of specific user interactions in Performance Analyzer." },
    ]
  },

  uml_seq_register: {
    title: "seq_student_registration.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > seq_student_registration.md",
    image: "images/ER-Diag/sequence_student_registration.png",
    lines: [
      { type: "heading",    text: "🔄 Sequence Diagram — Student Registration" },
      { type: "blank" },
      { type: "plain",     text: "Flow of a student signing up, waiting for approval, and admin action." },
    ]
  },

  uml_seq_marks: {
    title: "seq_upload_marks.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > seq_upload_marks.md",
    image: "images/ER-Diag/sequence_upload_marks.png",
    lines: [
      { type: "heading",    text: "🔄 Sequence Diagram — Upload Marks" },
      { type: "blank" },
      { type: "plain",     text: "Faculty process of uploading Excel files, validation, and database updates." },
    ]
  },

  uml_seq_ai_test: {
    title: "seq_create_ai_test.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > seq_create_ai_test.md",
    image: "images/ER-Diag/sequence_create_ai_test.png",
    lines: [
      { type: "heading",    text: "🔄 Sequence Diagram — Create AI Test" },
      { type: "blank" },
      { type: "plain",     text: "Interaction between Faculty, Backend, and Gemini 2.5 API." },
    ]
  },

  uml_act_take_test: {
    title: "act_student_take_test.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > act_student_take_test.md",
    image: "images/ER-Diag/activity_diagram_for_student_take_test.png",
    lines: [
      { type: "heading",    text: "🏃 Activity Diagram — Take Test" },
      { type: "blank" },
      { type: "plain",     text: "Step-by-step activity mapping for resolving the test." },
    ]
  },

  uml_act_marks: {
    title: "act_faculty_upload_marks.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > act_faculty_upload_marks.md",
    image: "images/ER-Diag/activity_diagram_for_faculty_upload_marks.png",
    lines: [
      { type: "heading",    text: "🏃 Activity Diagram — Upload Marks" },
      { type: "blank" },
      { type: "plain",     text: "Faculty's step-by-step path when handling large dataset uploads." },
    ]
  },

  uml_act_ai_test: {
    title: "act_ai_test_creation.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > act_ai_test_creation.md",
    image: "images/ER-Diag/activity_diagram_for_ai_test_creation.png",
    lines: [
      { type: "heading",    text: "🏃 Activity Diagram — AI Test Creation" },
      { type: "blank" },
      { type: "plain",     text: "Process of defining parameters and receiving generated content." },
    ]
  },

  uml_state_test: {
    title: "state_test_creation.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > state_test_creation.md",
    image: "images/ER-Diag/state_diagram_for_test_creation.png",
    lines: [
      { type: "heading",    text: "🚦 State Diagram — Test Creation" },
      { type: "blank" },
      { type: "plain",     text: "State transitions of a test entity from Draft to Published to Expired." },
    ]
  },

  uml_ll_flow: {
    title: "low_level_flow_chart.md", breadcrumb: "Performance-Analyzer > 06.5_UML_Diagrams > low_level_flow_chart.md",
    image: "images/ER-Diag/low_level_flow_chart.png",
    lines: [
      { type: "heading",    text: "🌊 Low Level Flow Chart" },
      { type: "blank" },
      { type: "plain",     text: "In-depth procedural logic of critical operations." },
    ]
  },

  // ── 42 RESULTS ───────────────────────────────────────────
  results: {
    title: "performance_metrics.md", breadcrumb: "Performance-Analyzer > 07_Results > performance_metrics.md",
    image: "images/23_results.png",
    lines: [
      { type: "heading",    text: "📊 Results — Project Scale & Benefits" },
      { type: "blank" },
      { type: "subheading", text: "Quantified Scale" },
      { parts: [{ text: "  ", type: "plain" }, { text: "5", type: "number" }, { text: "  user roles  ·  ", type: "plain" }, { text: "50+", type: "number" }, { text: " features  ·  ", type: "plain" }, { text: "73+", type: "number" }, { text: " API endpoints", type: "plain" }] },
      { parts: [{ text: "  ", type: "plain" }, { text: "19", type: "number" }, { text: " DB models  ·  ", type: "plain" }, { text: "93", type: "number" }, { text: " components  ·  ", type: "plain" }, { text: "10", type: "number" }, { text: " pages  ·  ~", type: "plain" }, { text: "3,150", type: "number" }, { text: " line backend", type: "plain" }] },
      { type: "blank" },
      { type: "subheading", text: "Benefits Delivered" },
      { type: "success",   text: "  ✅ Students: AI-driven insights + personalized improvement paths" },
      { type: "success",   text: "  ✅ Faculty: AI test creation + weekly digest + at-risk alerts" },
      { type: "success",   text: "  ✅ Institution: Early intervention for at-risk students" },
      { type: "success",   text: "  ✅ Admin: Bulk ops + audit trail + branch analytics" },
      { type: "success",   text: "  ✅ TPO: Automated eligibility matching for placement" },
      { type: "blank" },
      { type: "success",   text: "  ✅ PDF performance reports downloadable on-demand (ReportLab)" },
    ]
  },

  // ── 42 FEATURES MATRIX ───────────────────────────────────
  features: {
    title: "feature_summary.md", breadcrumb: "Performance-Analyzer > 07_Results > feature_summary.md",
    image: "images/08_modules_overview.png",
    lines: [
      { type: "heading",    text: "✨ Feature Matrix — All Roles" },
      { type: "blank" },
      { parts: [{ text: "  Feature                ", type: "keyword" }, { text: "Stu  Fac  HOD  TPO  Adm", type: "subheading" }] },
      { type: "plain",     text: "  ──────────────────────────────────────────────" },
      { parts: [{ text: "  Login / Auth           ", type: "plain" }, { text: "✅   ✅   ✅   ✅   ✅", type: "success" }] },
      { parts: [{ text: "  Self-Registration       ", type: "plain" }, { text: "✅   —    —    —    —", type: "success" }] },
      { parts: [{ text: "  View Performance        ", type: "plain" }, { text: "✅   ✅   ✅   ✅   —", type: "success" }] },
      { parts: [{ text: "  Take Tests              ", type: "plain" }, { text: "✅   —    —    —    —", type: "success" }] },
      { parts: [{ text: "  Create / AI Tests       ", type: "plain" }, { text: "—    ✅   ✅   ✅   —", type: "success" }] },
      { parts: [{ text: "  Upload Marks (Excel)    ", type: "plain" }, { text: "—    ✅   ✅   ✅   —", type: "success" }] },
      { parts: [{ text: "  AI Insights             ", type: "plain" }, { text: "✅   ✅   ✅   ✅   —", type: "success" }] },
      { parts: [{ text: "  Goal Tracking           ", type: "plain" }, { text: "✅   —    —    —    —", type: "success" }] },
      { parts: [{ text: "  Post Jobs               ", type: "plain" }, { text: "—    —    —    ✅   —", type: "success" }] },
      { parts: [{ text: "  Bulk Import + Audit Log ", type: "plain" }, { text: "—    —    —    —    ✅", type: "success" }] },
    ]
  },

  // ── 43 CONCLUSION ────────────────────────────────────────
  conclusion: {
    title: "conclusion.md", breadcrumb: "Performance-Analyzer > conclusion.md",
    image: "images/24_conclusion.png",
    lines: [
      { type: "heading",    text: "🎓 Conclusion & Future Scope" },
      { type: "blank" },
      { type: "subheading", text: "What We Built" },
      { parts: [{ text: "  A production-ready ", type: "plain" }, { text: "full-stack AI-powered academic platform", type: "gold" }] },
      { parts: [{ text: "  React 18 + FastAPI + Gemini 2.5 Flash", type: "highlight" }, { text: " — built from scratch", type: "plain" }] },
      { type: "plain",     text: "  5 role-based dashboards · 73+ APIs · anti-cheat test system" },
      { type: "plain",     text: "  Automated placement pipeline · comprehensive audit logging" },
      { type: "blank" },
      { type: "subheading", text: "12 Future Enhancements (Project Overview Doc)" },
      { type: "string",    text: "  JWT/OAuth auth · Email notifications · Mobile app (React Native)" },
      { type: "string",    text: "  WebSocket live updates · Machine learning predictive models" },
      { type: "string",    text: "  ERP integration · Multi-language support · Certification platforms" },
      { type: "string",    text: "  Modular backend (routes/ + services/) · Advanced PDF reporting" },
      { type: "blank" },
      { type: "gold",      text: "  Thank You — Questions?" },
    ]
  },

};
