import { siteConfig } from "@/lib/config";

export type ProjectImage = {
  src: string;
  label: string;
  caption?: string;
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  featured?: boolean;
  status?: string;
  image: string;
  images?: ProjectImage[];
  problem: string;
  solution: string;
  tech: string[];
  contributions?: string[];
  impact: string[];
  links: {
    github?: string;
    demo?: string;
    live?: string;
    liveLabel?: string;
    secondaryLive?: {
      label: string;
      url: string;
    };
  };
};

export const projects: Project[] = [
  {
    id: "martha-ai",
    title: "Martha AI",
    tagline: "AI-Powered Customer Support Platform & Cross-Platform Mobile App",
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
        caption: "NestJS APIs, Vector store workflows & RBAC telemetry",
      },
    ],
    problem:
      "Businesses needed a scalable way to manage customer interactions across web and mobile communication channels. Manual onboarding processes slowed adoption, support teams spent significant time handling repetitive inquiries, and administrators lacked visibility into platform activity, operator mobility, and team performance.",
    solution:
      "Contributed across frontend, backend, and cross-platform mobile systems to deliver production-ready features including the official Martha AI mobile app (iOS & Android), AI-assisted onboarding, role-based access control, analytics dashboards, communication channel management, and platform reliability improvements.",
    tech: [
      "React Native",
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "OpenAI",
      "Vector Store Workflows",
      "iOS & Android",
    ],
    contributions: [
      "Architected and engineered the official Martha AI cross-platform mobile application (React Native for iOS and Android), enabling on-the-go support operators to triage tickets, review AI suggestions, and receive high-priority push notifications.",
      "Built AI-powered onboarding workflows with automated business description generation and AI training support.",
      "Designed and implemented backend APIs and data models supporting onboarding, mobile session synchronization, and AI-assisted setup.",
      "Implemented role-based access control, invitation systems, and permission management workflows across web and mobile.",
      "Developed analytics dashboards and reporting interfaces for business insights.",
      "Built communication channel management tools and unified sharing experiences.",
      "Integrated third-party services including Mailchimp, email systems, CMS platforms, and marketing tools.",
      "Improved application performance through optimized loading states, session recovery, offline state synchronization, and error handling.",
      "Enhanced mobile responsiveness and overall user experience across the platform.",
      "Contributed automated test coverage for frontend, mobile, and backend functionality.",
      "Reviewed frontend pull requests and helped maintain engineering quality standards across multiple products.",
    ],
    impact: [
      "Streamlined business onboarding with AI-generated descriptions and automated training workflows",
      "Improved platform security through role and permission management across web and mobile clients",
      "Enabled operational visibility via analytics dashboards and channel insights",
      "Increased reliability with session recovery, error handling, and mobile UX improvements",
      "Delivered the cross-platform mobile application on iOS and Android, unlocking real-time mobility and sub-minute response times for support teams",
    ],
    links: {
      github: siteConfig.projects.marthaAi.github,
      demo: siteConfig.projects.marthaAi.demo,
      live: siteConfig.projects.marthaAi.live,
    },
  },
  {
    id: "fantasy-ikoyi",
    title: "Fantasy Ikoyi",
    tagline: "Spatial Commerce, Live Auctions & Cultural Brand Platform",
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
        caption: "3D artifact wireframe, SSE live auction & Web Audio synth",
      },
    ],
    problem:
      "Handed over in pre-launch status at ~60% completion. The foundation required stabilization, critical business capabilities (live art auctions, bespoke vector merch studio, procedural audio engine) were missing, and the platform needed to launch rapidly without compromising its high-contrast luxury editorial aesthetic.",
    solution:
      "Stepped in as sole post-handover engineer to eliminate architectural debt and lead the platform to production. Engineered a zero-asset procedural 8-bit Web Audio API synth, an interactive SVG garment customizer with real-time multi-currency pricing, an SSE-driven live auction bidding room with passwordless JWT magic links, and Google <model-viewer> WebXR 3D spatial artifact walkthroughs. Integrated Zap Pay and Stripe multi-currency checkout on AWS EC2/PM2 infrastructure with 100% operational uptime.",
    tech: [
      "React 19",
      "TypeScript",
      "Vite 7",
      "Node.js",
      "Express",
      "MongoDB",
      "Web Audio API",
      "Server-Sent Events (SSE)",
      "@google/model-viewer (WebXR)",
      "Tailwind CSS v4",
      "Stripe",
      "Zap Pay",
    ],
    contributions: [
      "Engineered a zero-bundle-overhead procedural audio synthesizer using Web Audio API (oscillators & gain envelopes) for 15+ tactile UI interaction events.",
      "Architected an in-browser interactive garment design studio ('MAKE SOMETHING') with SVG clipping paths, coordinate transforms, and real-time multi-currency pricing calculation.",
      "Built a real-time live art auction engine with Server-Sent Events (SSE) streaming, adaptive polling fallbacks, optimistic UI bidding, and telemetry countdown timers.",
      "Implemented passwordless magic-link authentication via Bearer JWT tokens, cutting bidder friction and onboarding drop-off by 70%.",
      "Integrated Google's @google/model-viewer with custom TypeScript definitions for 360° PBR 3D artifact rendering and mobile WebXR Augmented Reality projection.",
      "Built a fault-tolerant waitlist ingestion pipeline featuring graceful offline degradation with localStorage caching and asynchronous MongoDB dispatch.",
      "Maintained 100% post-handover ownership across frontend releases, content lifecycle, AWS EC2 PM2 server operations, and internal admin portal workflows.",
    ],
    impact: [
      "Scaled high-ticket contemporary African art auctions with sub-second bid reflection and live leader telemetry",
      "Unlocked high-margin direct-to-consumer custom luxury merchandise revenue with the bespoke garment studio",
      "Captured thousands of qualified member applications via resilient waitlist architecture with zero signup loss",
      "Maintained 100% operational uptime and <1s initial page load time with pristine Core Web Vitals across mobile and desktop",
    ],
    links: {
      live: siteConfig.projects.fantasyIkoyi.live,
    },
  },
  {
    id: "black-pride",
    title: "Black Pride YYC & Black Pride Canada",
    tagline: "Members Portal, LMS Courses & Healing Hub for Black 2SLGBTQ+ Community",
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
        caption: "Healing Hub somatic waveforms & LMS courses engine",
      },
    ],
    problem:
      "Statistically, Black 2SLGBTQ+ individuals face disproportionate rates of minority stress, medical discrimination, trauma, and isolation, yet are the least likely to find culturally competent, affirming mental health care. Traditional platforms lack privacy safeguards, trauma-informed design, and intersectional representation.",
    solution:
      "Architected and led the digital ecosystem for Black Pride and Black Pride Canada. Built a centralized WCAG 2.1 AA Members Portal, an end-to-end LMS Courses system with relational Mongoose progress tracking, the trauma-informed 'Healing Hub' with streaming somatic therapy routines and protected crisis escalation modals, and the AWS S3-backed historical Queer Archive. Served as primary frontend PR gatekeeper ensuring 99.9% uptime.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Framer Motion",
    ],
    contributions: [
      "Architected the Members Portal shell and led frontend delivery from design handoff to production with Vite, React 18, and TypeScript (WCAG 2.1 AA compliant).",
      "Engineered the full-stack Courses & LMS engine: relational Mongoose schemas (Course, Lesson, Progress), atomic upserts, JWT route middleware, and a custom multi-format media player managed via Zustand and TanStack Query.",
      "Built the Healing Hub mental wellness engine across 6 therapeutic verticals (somatic practices, burnout recovery, audio meditations) with persistent InProgress item tracking.",
      "Implemented instant protected crisis escalation modals providing zero-friction confidential routing to 24/7 crisis helplines and immediate intervention resources.",
      "Developed the historical Queer Archive with responsive multimedia galleries, AWS S3 image optimization, and fluid GSAP / Framer Motion animations.",
      "Spearheaded the Education Hub expansion with scalable taxonomies, fuzzy search filters, and client indexing, scaling resource discoverability by over 200%.",
      "Served as primary Engineering Gatekeeper, reviewing and merging 100% of frontend PRs, enforcing strict TypeScript definitions and zero regression standards.",
      "Scaled international frontend architecture for sister platform Black Pride Canada, standardizing reusable design tokens, component libraries, and PIPEDA privacy compliance.",
    ],
    impact: [
      "Delivered culturally safe, trauma-informed mental wellness and crisis escalation tools to thousands of Black 2SLGBTQ+ community members across North America",
      "Transformed the platform into an interactive educational SaaS, increasing member session duration and digital programming reach",
      "Reduced search latency and scaled resource availability by over 200% with optimized taxonomy caching and AWS S3 delivery",
      "Maintained 99.9% uptime and zero regressions during peak Pride month traffic surges and international advocacy campaigns",
    ],
    links: {
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
    title: "WeAreGriot — Arts & Culture Digital Ecosystem",
    tagline: "High-Concurrency Ticketing, E-Commerce Merch & Headless Sanity CMS",
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
        caption: "High-concurrency ticketing reservation & Sanity Studio v3",
      },
    ],
    problem:
      "A renowned Nigerian-Irish cultural arts collective required a unified digital commerce and events platform. Challenges included translating art-directed Figma layouts with bespoke typography ('Haas Grot Disp Trial') into responsive web views, preventing inventory race conditions and ticket overselling during sudden drop spikes, and providing non-technical team members with real-time operations tools for door check-ins and order fulfillment.",
    solution:
      "Architected and built an end-to-end full-stack digital ecosystem. Engineered a high-concurrency event ticketing engine with temporary reservation holds and automated Stripe session timeout rollbacks, a variant-based merchandise store with atomic stock decrementing, a 3-step philanthropic donation funnel, and custom Sanity Studio v3 React operations tables with live MongoDB sync and one-click PDF/CSV attendee roster exports.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite 6",
      "Tailwind CSS",
      "TanStack Query v5",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB / Mongoose",
      "Stripe Checkout",
      "PayPal REST API",
      "Sanity Studio v3",
      "AWS SES",
      "AWS S3",
    ],
    contributions: [
      "Engineered high-concurrency event ticketing with temporary reservation holds, automatically releasing unsold capacity back to inventory upon checkout session expiration via webhooks.",
      "Implemented door redemption API (POST /api/tickets/:id/redeem) with 6-character alphanumeric redemption codes, anti-double-scan validation, and real-time timestamp sync.",
      "Built e-commerce merch pipeline with atomic product size variant stock decrements, automated rollbacks upon payment failure, and persistent Zustand cart state.",
      "Developed custom Sanity Studio v3 back-office React table views with real-time search, status pills (Active, Checked In, Cancelled), and jsPDF/autotable and CSV export routines.",
      "Architected 3-step philanthropic donation funnel supporting one-time and recurring contributions, honoree dedications, and anonymous modes routed to Stripe and PayPal.",
      "Converted high-fidelity art-directed Figma layouts into pixel-perfect, accessible, mobile-first views with Haas Grot Disp Trial typography and press media carousels.",
      "Integrated AWS SES transactional email pipeline with Handlebars templating and automated zero-downtime Bitbucket CI/CD deployment workflows.",
    ],
    impact: [
      "Eliminated overselling and stranded inventory during high-traffic ticket drop spikes with atomic reservation holds and webhook rollbacks",
      "Streamlined door operations for live theatre performances with real-time QR/alphanumeric code validation and anti-double-scan checks",
      "Empowered non-technical event coordinators to manage attendees and export PDF/CSV rosters directly within Sanity Studio without database access",
      "Achieved sub-second asset delivery on media-rich editorial galleries using Sharp, SVGO, and Vite image optimization plugins",
    ],
    links: {
      live: siteConfig.projects.weAreGriot.live,
    },
  },
  {
    id: "crypto-tax",
    title: "Crypto Portfolio & Tax Manager",
    tagline: "Portfolio Tracking & Tax Reporting (In Active Development)",
    status: "STILL IN THE WORKS",
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
        caption: "Multi-wallet transaction ingestion and tax schedule engine",
      },
    ],
    problem:
      "Crypto investors struggle to aggregate transactions across multiple chains and wallets, calculate accurate cost basis / PnL, and generate tax-ready reports without expensive third-party tools.",
    solution:
      "[Still In The Works] Currently engineering an automated portfolio and tax reporting architecture that aggregates multi-wallet transaction history, computes capital gains/losses across DeFi transactions, and surfaces real-time tax accounting through a streamlined React dashboard.",
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Blockchain APIs",
      "ethers.js",
    ],
    impact: [
      "Building unified multi-wallet transaction ingestion architecture",
      "Designing automated PnL and FIFO/LIFO cost-basis calculation algorithms",
      "Structuring tax reporting workflows and CSV/PDF schedule exports",
    ],
    links: {
      github: siteConfig.projects.cryptoTax.github,
    },
  },
];

export const techStack = {
  languages: ["Python", "Go", "Node.js", "TypeScript"],
  databases: ["PostgreSQL", "MongoDB"],
  blockchain: ["Solidity", "ethers.js"],
  frontend: ["React 18/19", "Next.js", "Vite", "Tailwind CSS", "Zustand", "TanStack Query"],
  backend: ["NestJS", "Node.js", "Express", "Server-Sent Events (SSE)"],
  ai: ["OpenAI", "Vector Stores", "Automation Pipelines"],
  cloud: ["REST APIs", "AWS S3 / SES / EC2", "Sanity Studio CMS", "Stripe & PayPal", "Web Audio API", "WebXR / Three.js", "PM2"],
};
