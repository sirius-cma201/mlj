import { siteConfig } from "@/lib/config";

export type ProjectImage = {
  src: string;
  label: string;
  caption?: string;
};

export type ArchitectureLayer = {
  layer: string;
  detail: string;
};

export type LoomWalkthrough = {
  url?: string;
  duration: string;
  title: string;
  envKey: string;
  outline: { time: string; topic: string }[];
};

export type Project = {
  id: string;
  title: string;
  organization?: string;
  role: string;
  tagline: string;
  featured?: boolean;
  status?: string;
  image: string;
  images?: ProjectImage[];
  problem: string;
  architecture: {
    summary: string;
    layers: ArchitectureLayer[];
  };
  impact: string[];
  stackSummary: {
    frontend?: string[];
    backend?: string[];
    dataInfra?: string[];
    ai?: string[];
  };
  /** Flat summary list kept for terminal/CLI compatibility */
  tech: string[];
  contributions?: string[];
  loomWalkthrough: LoomWalkthrough;
  links: {
    github?: string;
    repoStatus?: "public" | "private";
    repoLabel?: string;
    live?: string;
    liveLabel?: string;
    secondaryLive?: {
      label: string;
      url: string;
    };
  };
};

export type TechTier = {
  id: "frontend" | "backend" | "databases-infra" | "ai-systems";
  num: string;
  label: string;
  summary: string;
  items: { name: string; context: string }[];
};

export const projects: Project[] = [
  {
    id: "martha-ai",
    title: "Martha AI",
    organization: "Cognito Systems",
    role: "Full-Stack & AI Systems Engineer",
    tagline: "Autonomous AI Support Engine & Cross-Platform Operator Suite",
    featured: true,
    image: "/projects/futuristic/martha-futuristic.jpg",
    images: [
      {
        src: "/projects/futuristic/martha-futuristic.jpg",
        label: "FUTURISTIC AI RE-IMAGINING",
        caption: "Monochrome cybernetic telemetry and operator neural HUD",
      },
      {
        src: "/projects/screenshots/martha-prod.png",
        label: "LIVE PRODUCTION PLATFORM",
        caption: "Production web dashboard & AI agent support interface",
      },
      {
        src: "/projects/martha-ai.svg",
        label: "ARCHITECTURAL BLUEPRINT",
        caption: "NestJS microservices, Vector RAG & LLM tool-calling pipelines",
      },
    ],
    problem:
      "Multi-tenant SaaS teams struggled with high volumes of repetitive customer inquiries, slow manual business onboarding, and disconnected web/mobile operator workflows without role-safe visibility into AI resolution accuracy.",
    architecture: {
      summary:
        "Engineered a full-stack AI operations architecture pairing Next.js App Router SSR dashboards and a React Native mobile client (iOS & Android) with modular NestJS microservices, PostgreSQL transactional schemas, and OpenAI tool-calling agent pipelines.",
      layers: [
        {
          layer: "Frontend & Mobile",
          detail:
            "Next.js App Router SSR operator console + React Native (iOS/Android) app with offline state sync, optimistic ticket triage, and session recovery.",
        },
        {
          layer: "Backend Microservices",
          detail:
            "NestJS modular services enforcing multi-tenant RBAC, invitation token workflows, Mailchimp/CMS webhook integrations, and real-time analytics aggregation.",
        },
        {
          layer: "Data & AI Agent Pipeline",
          detail:
            "PostgreSQL transactional data models paired with vector store retrieval (RAG), automated business onboarding generation, and structured LLM tool-calling.",
        },
      ],
    },
    impact: [
      "91.7% autonomous support resolution verified across 3,000+ live production customer workflows",
      "Delivered the official React Native mobile app (iOS & Android), cutting operator response latency to sub-minute levels",
      "Reduced manual onboarding friction through automated AI business-profile extraction and vector indexing pipelines",
      "Hardened multi-tenant security with strict RBAC permission boundaries and automated frontend/backend test coverage",
    ],
    stackSummary: {
      frontend: ["Next.js (App Router)", "React Native", "TypeScript"],
      backend: ["NestJS", "REST APIs", "RBAC & Webhooks"],
      dataInfra: ["PostgreSQL", "Docker", "Automated Tests"],
      ai: ["OpenAI Tool Calling", "Vector Stores / RAG", "Onboarding Agents"],
    },
    tech: [
      "Next.js",
      "React Native",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "OpenAI",
      "Vector Stores",
    ],
    contributions: [
      "Architected and shipped the official Martha AI cross-platform mobile application (React Native for iOS and Android) with push notifications and live AI-suggestion triage.",
      "Built AI-assisted onboarding pipelines with automated business description generation, schema validation, and vector store indexing.",
      "Designed NestJS API endpoints and PostgreSQL relational models supporting multi-tenant permissions, session synchronization, and analytics.",
      "Implemented RBAC access controls, team invitation hierarchies, and third-party integrations (Mailchimp, email channels, CMS platforms).",
      "Reviewed frontend pull requests and added automated test coverage across web, mobile, and backend services.",
    ],
    loomWalkthrough: {
      url: siteConfig.projects.marthaAi.loom || siteConfig.projects.marthaAi.demo,
      duration: "2:00",
      title: "Martha AI — NestJS Agent Pipeline & Multi-Tenant Architecture Walkthrough",
      envKey: "NEXT_PUBLIC_MARTHA_AI_LOOM",
      outline: [
        { time: "0:00 – 0:25", topic: "Multi-tenant support bottleneck & resolution metrics" },
        { time: "0:25 – 1:05", topic: "NestJS microservice boundaries, PostgreSQL schemas & RBAC" },
        { time: "1:05 – 1:40", topic: "Vector retrieval + OpenAI tool-calling & mobile sync demo" },
        { time: "1:40 – 2:00", topic: "Production reliability, session recovery & 91.7% impact" },
      ],
    },
    links: {
      github: siteConfig.projects.marthaAi.github || undefined,
      repoStatus: siteConfig.projects.marthaAi.github ? "public" : "private",
      repoLabel: "GITHUB REPO",
      live: siteConfig.projects.marthaAi.live,
      liveLabel: "LIVE PLATFORM",
    },
  },
  {
    id: "fantasy-ikoyi",
    title: "Fantasy Ikoyi",
    role: "Lead Full-Stack Engineer (Post-Handover Ownership)",
    tagline: "Real-Time Art Auctions, WebXR Spatial Commerce & Bespoke Studio",
    featured: true,
    image: "/projects/futuristic/fantasy-futuristic.jpg",
    images: [
      {
        src: "/projects/futuristic/fantasy-futuristic.jpg",
        label: "FUTURISTIC AI RE-IMAGINING",
        caption: "Cybernetic luxury architectural coordinates & holographic masks",
      },
      {
        src: "/projects/screenshots/fantasy-prod.png",
        label: "LIVE PRODUCTION PLATFORM",
        caption: "High-contrast luxury editorial homepage & club gateway",
      },
      {
        src: "/projects/fantasy-ikoyi.svg",
        label: "ARCHITECTURAL BLUEPRINT",
        caption: "SSE live auction room, SVG studio & WebXR artifact pipeline",
      },
    ],
    problem:
      "Inherited at ~60% pre-launch completion with architectural debt and missing core revenue systems—requiring live real-time bidding, bespoke interactive garment customization, and 3D spatial product inspection under an aggressive launch deadline.",
    architecture: {
      summary:
        "Took 100% engineering ownership to stabilize the stack and ship a real-time Server-Sent Events (SSE) auction engine, passwordless JWT magic-link auth, zero-asset Web Audio synthesis, and AWS EC2/PM2 production infrastructure.",
      layers: [
        {
          layer: "Frontend & Spatial UI",
          detail:
            "React 19 + TypeScript + Tailwind v4 featuring an SVG matrix garment customizer, Google <model-viewer> WebXR AR projection, and procedural Web Audio API synth.",
        },
        {
          layer: "Real-Time & Auth API",
          detail:
            "Node.js/Express backend streaming live bid state over SSE with adaptive polling fallbacks, optimistic UI locking, and passwordless Bearer JWT magic links.",
        },
        {
          layer: "Data, Payments & Cloud",
          detail:
            "MongoDB transactional auction/waitlist persistence, multi-currency Stripe & Zap Pay checkout rails, and PM2-managed AWS EC2 deployment.",
        },
      ],
    },
    impact: [
      "Stabilized inherited codebase from 60% completion to full production launch with 100% post-launch uptime on AWS EC2/PM2",
      "Delivered sub-second live auction bid updates via SSE and cut bidder onboarding drop-off by 70% with passwordless magic links",
      "Unlocked direct-to-consumer custom apparel revenue via an in-browser SVG garment studio with dynamic NGN/USD/EUR/GBP pricing",
      "Eliminated audio bundle overhead with a procedural Web Audio API synthesizer while preserving <1s initial load times",
    ],
    stackSummary: {
      frontend: ["React 19", "TypeScript", "WebXR & Web Audio"],
      backend: ["Node.js / Express", "SSE Streams", "JWT Magic Links"],
      dataInfra: ["MongoDB", "AWS EC2 / PM2", "Stripe & Zap Pay"],
    },
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "SSE",
      "MongoDB",
      "AWS EC2",
      "WebXR",
    ],
    contributions: [
      "Assumed sole architectural ownership at 60% pre-launch, resolving build/runtime debt and shipping all missing core features.",
      "Built the SSE-powered live art auction engine with adaptive polling fallbacks, anti-stale timers, and optimistic bid updates.",
      "Engineered the interactive SVG garment customizer ('MAKE SOMETHING') with real-time multi-currency conversion.",
      "Integrated passwordless JWT magic-link authentication and dual Zap Pay / Stripe payment processing.",
    ],
    loomWalkthrough: {
      url: siteConfig.projects.fantasyIkoyi.loom,
      duration: "2:00",
      title: "Fantasy Ikoyi — SSE Auction Engine & Spatial Commerce Deep Dive",
      envKey: "NEXT_PUBLIC_FANTASY_IKOYI_LOOM",
      outline: [
        { time: "0:00 – 0:25", topic: "60% handover audit & pre-launch stabilization plan" },
        { time: "0:25 – 1:05", topic: "SSE real-time bidding state, JWT magic links & MongoDB sync" },
        { time: "1:05 – 1:40", topic: "SVG garment customizer & Web Audio / WebXR internals" },
        { time: "1:40 – 2:00", topic: "AWS EC2/PM2 operations & 100% uptime outcomes" },
      ],
    },
    links: {
      github: siteConfig.projects.fantasyIkoyi.github || undefined,
      repoStatus: siteConfig.projects.fantasyIkoyi.github ? "public" : "private",
      repoLabel: "GITHUB REPO",
      live: siteConfig.projects.fantasyIkoyi.live,
      liveLabel: "LIVE PLATFORM",
    },
  },
  {
    id: "black-pride",
    title: "Black Pride YYC & Black Pride Canada",
    organization: "Cognito Systems",
    role: "Engineering & Frontend Lead",
    tagline: "Multi-Platform Community Ecosystem, LMS Engine & Trauma-Informed Wellness Hub",
    featured: true,
    image: "/projects/futuristic/blackpride-futuristic.jpg",
    images: [
      {
        src: "/projects/futuristic/blackpride-futuristic.jpg",
        label: "FUTURISTIC AI RE-IMAGINING",
        caption: "Cybernetic biometric telemetry and somatic audio frequencies",
      },
      {
        src: "/projects/screenshots/blackpride-prod.png",
        label: "LIVE PRODUCTION PLATFORM",
        caption: "Members Portal & community mental wellness homepage",
      },
      {
        src: "/projects/black-pride.svg",
        label: "ARCHITECTURAL BLUEPRINT",
        caption: "Healing Hub somatic waveforms & relational LMS engine",
      },
    ],
    problem:
      "Two national community organizations needed unified, WCAG 2.1 AA-accessible digital platforms combining a relational LMS, a trauma-informed mental wellness hub with zero-latency crisis escalation, and strict PIPEDA privacy compliance across distributed teams.",
    architecture: {
      summary:
        "Led frontend architecture and full-stack delivery across both platforms—combining a React 18 + TypeScript + Zustand/TanStack Query client shell with Express/MongoDB relational LMS schemas, atomic progress upserts, and AWS S3 media delivery.",
      layers: [
        {
          layer: "Frontend Architecture",
          detail:
            "Shared TypeScript component tokens across Black Pride YYC & Canada, WCAG 2.1 AA accessibility, Zustand + TanStack Query caching, and instant crisis modal routing.",
        },
        {
          layer: "LMS & Backend API",
          detail:
            "Node.js/Express API with JWT route guards, relational Mongoose models (Course, Lesson, Progress), and atomic upsert endpoints preventing completion race conditions.",
        },
        {
          layer: "Media, Search & Governance",
          detail:
            "AWS S3-backed Queer Archive optimization, indexed taxonomy fuzzy search, and strict PR code-review gates across the engineering team.",
        },
      ],
    },
    impact: [
      "Maintained 99.9% uptime and zero regressions through peak Pride Month advocacy traffic surges across North America",
      "Scaled Education Hub & Queer Archive resource discoverability by 200%+ via taxonomy caching and AWS S3 asset optimization",
      "Gatekept 100% of frontend PRs as Engineering Lead, enforcing strict TypeScript types and zero-regression deployment checks",
      "Delivered trauma-informed crisis escalation routing and interactive LMS programming to thousands of community members",
    ],
    stackSummary: {
      frontend: ["React 18", "TypeScript", "Zustand & TanStack Query"],
      backend: ["Node.js / Express", "JWT Middleware", "REST APIs"],
      dataInfra: ["MongoDB / Mongoose", "AWS S3", "WCAG 2.1 AA / PIPEDA"],
    },
    tech: [
      "React 18",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "MongoDB",
      "AWS S3",
    ],
    contributions: [
      "Translated Figma systems into structured engineering roadmaps and reusable token architecture across Black Pride YYC and Canada.",
      "Served as primary code gatekeeper reviewing 100% of frontend PRs and enforcing TypeScript/accessibility standards.",
      "Built the relational Mongoose LMS engine (Course, Lesson, Progress) with atomic upserts and multi-format media streaming.",
      "Implemented the Healing Hub across 6 therapeutic verticals with protected, zero-friction crisis helpline escalation modals.",
    ],
    loomWalkthrough: {
      url: siteConfig.projects.blackPride.loom,
      duration: "2:00",
      title: "Black Pride Ecosystem — Multi-Platform Architecture & LMS Deep Dive",
      envKey: "NEXT_PUBLIC_BLACK_PRIDE_LOOM",
      outline: [
        { time: "0:00 – 0:25", topic: "Multi-org scope, WCAG 2.1 AA & trauma-informed constraints" },
        { time: "0:25 – 1:05", topic: "Relational Mongoose LMS schemas & atomic progress sync" },
        { time: "1:05 – 1:40", topic: "Healing Hub crisis escalation & AWS S3 archive optimization" },
        { time: "1:40 – 2:00", topic: "PR gatekeeping standards & 99.9% surge reliability" },
      ],
    },
    links: {
      github: siteConfig.projects.blackPride.github || undefined,
      repoStatus: siteConfig.projects.blackPride.github ? "public" : "private",
      repoLabel: "GITHUB REPO",
      live: siteConfig.projects.blackPride.yyc,
      liveLabel: "BLACK PRIDE YYC",
      secondaryLive: {
        label: "BLACK PRIDE CANADA",
        url: siteConfig.projects.blackPride.canada,
      },
    },
  },
  {
    id: "wearegriot",
    title: "WeAreGriot",
    role: "Full-Stack Engineer",
    tagline: "High-Concurrency Ticketing, Merch Commerce & Sanity v3 Operations",
    featured: true,
    image: "/projects/futuristic/griot-futuristic.jpg",
    images: [
      {
        src: "/projects/futuristic/griot-futuristic.jpg",
        label: "FUTURISTIC AI RE-IMAGINING",
        caption: "Cybernetic stage acoustics and holographic digital pass",
      },
      {
        src: "/projects/screenshots/griot-prod.png",
        label: "LIVE PRODUCTION PLATFORM",
        caption: "Editorial arts e-commerce and theatre collective platform",
      },
      {
        src: "/projects/wearegriot.svg",
        label: "ARCHITECTURAL BLUEPRINT",
        caption: "Atomic ticketing reservation holds & Sanity Studio v3 ops",
      },
    ],
    problem:
      "A cultural arts collective faced overselling risks during sudden ticket drops, lacked live door check-in validation, and needed non-technical staff to manage attendee rosters and donations without direct database access.",
    architecture: {
      summary:
        "Architected a concurrency-safe Node.js/Express + MongoDB commerce and ticketing engine with temporary inventory reservation locks, Stripe/PayPal webhook rollbacks, AWS SES transactional emails, and custom Sanity Studio v3 React operations views.",
      layers: [
        {
          layer: "Frontend & Ops Studio",
          detail:
            "React 18 + TypeScript storefront translated from art-directed Figma layouts, paired with custom Sanity Studio v3 GROQ-synced tables and PDF/CSV roster exports.",
        },
        {
          layer: "Concurrency & Webhook Engine",
          detail:
            "Express REST API managing timed seat reservation holds, webhook-driven inventory rollbacks on checkout expiry, and anti-double-scan door redemption endpoints.",
        },
        {
          layer: "Payments, Mail & CI/CD",
          detail:
            "Stripe Checkout & PayPal REST rails, AWS SES + Handlebars transactional dispatch, Sharp/SVGO asset optimization, and automated CI/CD pipelines.",
        },
      ],
    },
    impact: [
      "Eliminated overselling and stranded stock during flash ticket drops via atomic reservation holds and idempotent webhook rollbacks",
      "Enabled instant venue check-in operations with 6-character alphanumeric validation and anti-double-scan locking",
      "Empowered non-technical event staff with live Sanity Studio attendee search and one-click PDF/CSV roster exports",
      "Maintained sub-second asset delivery across media-heavy editorial galleries using Sharp and Vite image optimization",
    ],
    stackSummary: {
      frontend: ["React 18", "TypeScript", "Sanity Studio v3"],
      backend: ["Node.js / Express", "Webhook Rollbacks", "REST APIs"],
      dataInfra: ["MongoDB", "Stripe & PayPal", "AWS SES & S3"],
    },
    tech: [
      "React 18",
      "TypeScript",
      "Express",
      "MongoDB",
      "Sanity Studio v3",
      "Stripe",
      "AWS SES",
    ],
    contributions: [
      "Engineered timed ticket reservation locks with automated Stripe webhook rollbacks on checkout timeout or failure.",
      "Built the door redemption API (POST /api/tickets/:id/redeem) preventing duplicate entry scans in real time.",
      "Created custom Sanity Studio v3 React back-office tables with live MongoDB sync and jsPDF/CSV export tooling.",
      "Translated bespoke art-directed Figma layouts into accessible responsive views and wired Bitbucket CI/CD deployments.",
    ],
    loomWalkthrough: {
      url: siteConfig.projects.weAreGriot.loom,
      duration: "2:00",
      title: "WeAreGriot — Concurrency Locks & Sanity Studio Ops Walkthrough",
      envKey: "NEXT_PUBLIC_WEAREGRIOT_LOOM",
      outline: [
        { time: "0:00 – 0:25", topic: "Flash-drop overselling problem & venue operations gap" },
        { time: "0:25 – 1:05", topic: "Reservation holds, webhook idempotency & atomic stock locks" },
        { time: "1:05 – 1:40", topic: "Custom Sanity Studio v3 React ops tables & door scanner API" },
        { time: "1:40 – 2:00", topic: "AWS SES pipeline & operational outcomes" },
      ],
    },
    links: {
      github: siteConfig.projects.weAreGriot.github || undefined,
      repoStatus: siteConfig.projects.weAreGriot.github ? "public" : "private",
      repoLabel: "GITHUB REPO",
      live: siteConfig.projects.weAreGriot.live,
      liveLabel: "LIVE PLATFORM",
    },
  },
  {
    id: "crypto-tax",
    title: "Crypto Portfolio & Tax Manager",
    role: "Systems Architect (Active Build)",
    tagline: "Multi-Chain Transaction Ingestion & Automated FIFO/LIFO Ledger",
    status: "IN ACTIVE DEVELOPMENT",
    image: "/projects/futuristic/crypto-futuristic.jpg",
    images: [
      {
        src: "/projects/futuristic/crypto-futuristic.jpg",
        label: "FUTURISTIC AI RE-IMAGINING",
        caption: "Holographic multi-chain blockchain network nodes & PnL telemetry",
      },
      {
        src: "/projects/screenshots/crypto-tax-mockup.jpg",
        label: "PROTOTYPE DASHBOARD",
        caption: "Multi-wallet transaction ingestion and FIFO cost-basis view",
      },
      {
        src: "/projects/crypto-tax.svg",
        label: "ARCHITECTURAL BLUEPRINT",
        caption: "NestJS ingestion workers, PostgreSQL ledger & tax scheduler",
      },
    ],
    problem:
      "Multi-chain DeFi users lack an accurate, deterministic way to reconcile wallet transfers, swaps, and gas fees across chains to compute compliant FIFO/LIFO cost basis without manual spreadsheet reconciliation.",
    architecture: {
      summary:
        "Designing a Next.js App Router + NestJS microservice ledger backed by PostgreSQL transactional tables and asynchronous RPC indexing workers via ethers.js.",
      layers: [
        {
          layer: "Frontend & Ledger UI",
          detail:
            "Next.js App Router + TypeScript portfolio analytics interface surfacing unrealized PnL, realized tax events, and schedule exports.",
        },
        {
          layer: "Backend Ingestion Workers",
          detail:
            "NestJS modular services normalizing multi-chain EVM events via ethers.js and classifying swaps, bridges, and transfers.",
        },
        {
          layer: "Transactional Tax Engine",
          detail:
            "PostgreSQL double-entry ledger schema powering deterministic FIFO/LIFO lot matching and auditable CSV/PDF tax reports.",
        },
      ],
    },
    impact: [
      "Architecting unified multi-wallet transaction ingestion and normalization across EVM networks",
      "Implementing deterministic FIFO/LIFO cost-basis lot matching in PostgreSQL with full auditability",
      "Structuring automated tax schedule generation and export workflows (CSV/PDF)",
    ],
    stackSummary: {
      frontend: ["Next.js (App Router)", "React", "TypeScript"],
      backend: ["NestJS", "ethers.js", "Worker Queues"],
      dataInfra: ["PostgreSQL", "Docker", "Blockchain RPCs"],
    },
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "ethers.js",
      "Blockchain APIs",
    ],
    loomWalkthrough: {
      url: siteConfig.projects.cryptoTax.loom,
      duration: "2:00",
      title: "Crypto Tax Engine — Ledger Schema & FIFO Pipeline Walkthrough",
      envKey: "NEXT_PUBLIC_CRYPTO_TAX_LOOM",
      outline: [
        { time: "0:00 – 0:25", topic: "Cross-chain DeFi reconciliation challenges" },
        { time: "0:25 – 1:05", topic: "NestJS indexing workers & PostgreSQL ledger model" },
        { time: "1:05 – 1:40", topic: "FIFO/LIFO lot matching & Next.js dashboard walkthrough" },
        { time: "1:40 – 2:00", topic: "Roadmap & upcoming export automation" },
      ],
    },
    links: {
      github: siteConfig.projects.cryptoTax.github || siteConfig.github,
      repoStatus: "public",
      repoLabel: "GITHUB REPO",
    },
  },
];

export const techStackTiers: TechTier[] = [
  {
    id: "frontend",
    num: "01",
    label: "Frontend & UI",
    summary:
      "Accessible, type-safe interfaces engineered with strict state boundaries and sub-second rendering.",
    items: [
      { name: "Next.js (App Router / SSR)", context: "Server rendering, streaming & edge-ready routing" },
      { name: "React 18/19 & React Native", context: "Web & cross-platform iOS/Android operator apps" },
      { name: "TypeScript (Strict)", context: "End-to-end contract safety across API & UI" },
      { name: "Tailwind CSS", context: "Scalable design-token & responsive systems" },
      { name: "Zustand & TanStack Query", context: "Predictable client state & server cache sync" },
      { name: "Three.js / WebXR / Web Audio", context: "Interactive 3D & zero-asset procedural UX" },
    ],
  },
  {
    id: "backend",
    num: "02",
    label: "Backend & APIs",
    summary:
      "Modular services built for concurrency control, clean API contracts, and real-time event delivery.",
    items: [
      { name: "NestJS Microservices", context: "Dependency-injected modules, guards & queues" },
      { name: "Node.js & Express", context: "High-throughput APIs & webhook processors" },
      { name: "REST & GraphQL / GROQ", context: "Typed API design & headless CMS synchronization" },
      { name: "WebSockets & SSE", context: "Real-time bidding streams & live status feeds" },
      { name: "RBAC & JWT Auth", context: "Multi-tenant permissions & magic-link flows" },
      { name: "Stripe / PayPal Webhooks", context: "Idempotent checkout & automated rollbacks" },
    ],
  },
  {
    id: "databases-infra",
    num: "03",
    label: "Databases & Infra",
    summary:
      "Durable data modeling paired with reliable cloud deployments, caching, and CI/CD automation.",
    items: [
      { name: "PostgreSQL", context: "Relational integrity, transactions & query tuning" },
      { name: "MongoDB & Mongoose", context: "Atomic document locks & relational LMS schemas" },
      { name: "Redis", context: "Distributed caching, rate limiting & job queues" },
      { name: "Docker & PM2", context: "Containerized services & zero-downtime clustering" },
      { name: "AWS (EC2, S3, SES) & Vercel", context: "Cloud compute, media pipelines & transactional mail" },
      { name: "CI/CD & Automated Testing", context: "GitHub/Bitbucket pipelines & regression gates" },
    ],
  },
  {
    id: "ai-systems",
    num: "04",
    label: "AI Systems",
    summary:
      "Production LLM orchestration designed around latency budgets, tool safety, and measurable resolution.",
    items: [
      { name: "LLM Tool Calling", context: "Schema-validated function execution & guardrails" },
      { name: "Autonomous Agent Workflows", context: "Multi-step ticket triage & escalation routing" },
      { name: "Vector Stores & RAG", context: "Semantic retrieval pipelines over tenant knowledge" },
      { name: "OpenAI SDK Pipelines", context: "Structured outputs, streaming & fallback handling" },
      { name: "Automated Onboarding Flows", context: "AI business extraction & training data ingestion" },
      { name: "Evaluation & Telemetry", context: "Tracking resolution accuracy & human-handoff delta" },
    ],
  },
];

/** Flat stack preserved for TerminalDrawer compatibility */
export const techStack = {
  languages: ["TypeScript", "JavaScript", "Python", "Go"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  blockchain: ["Solidity", "ethers.js"],
  frontend: ["Next.js", "React 18/19", "React Native", "Tailwind CSS", "Zustand", "TanStack Query"],
  backend: ["NestJS", "Node.js", "Express", "REST & GraphQL", "WebSockets & SSE"],
  ai: ["LLM Tool Calling", "Agent Workflows", "Vector Stores / RAG", "OpenAI Pipelines"],
  cloud: ["Docker", "AWS (EC2, S3, SES)", "Vercel", "PM2", "CI/CD", "Stripe & PayPal"],
};
