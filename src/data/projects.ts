import { siteConfig } from "@/lib/config";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  featured?: boolean;
  image: string;
  problem: string;
  solution: string;
  tech: string[];
  contributions?: string[];
  impact: string[];
  links: {
    github?: string;
    demo?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    id: "fantasy-ikoyi",
    title: "Fantasy Ikoyi",
    tagline: "Spatial Commerce, Live Auctions & Cultural Brand Platform",
    featured: true,
    image: "/projects/fantasy-ikoyi.svg",
    problem:
      "Handed over in pre-launch status at ~70% completion. The foundation required stabilization, critical business capabilities (live art auctions, bespoke vector merch studio, procedural audio engine) were missing, and the platform needed to launch rapidly without compromising its high-contrast luxury editorial aesthetic.",
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
    id: "martha-ai",
    title: "Martha AI",
    tagline: "AI-Powered Customer Support Platform",
    featured: true,
    image: "/projects/martha-ai.svg",
    problem:
      "Businesses needed a scalable way to manage customer interactions across multiple communication channels. Manual onboarding processes slowed adoption, support teams spent significant time handling repetitive inquiries, and administrators lacked visibility into platform activity and team performance.",
    solution:
      "Contributed across frontend and backend systems to deliver production-ready features including AI-assisted onboarding, role-based access control, analytics dashboards, communication channel management, and platform reliability improvements.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "OpenAI",
      "Vector Store Workflows",
    ],
    contributions: [
      "Built AI-powered onboarding workflows with automated business description generation and AI training support.",
      "Designed and implemented backend APIs and data models supporting onboarding and AI-assisted business setup.",
      "Implemented role-based access control, invitation systems, and permission management workflows.",
      "Developed analytics dashboards and reporting interfaces for business insights.",
      "Built communication channel management tools and unified sharing experiences.",
      "Integrated third-party services including Mailchimp, email systems, CMS platforms, and marketing tools.",
      "Improved application performance through optimized loading states, session recovery, and error handling.",
      "Enhanced mobile responsiveness and overall user experience across the platform.",
      "Contributed automated test coverage for frontend and backend functionality.",
      "Reviewed frontend pull requests and helped maintain engineering quality standards across multiple products.",
    ],
    impact: [
      "Streamlined business onboarding with AI-generated descriptions and automated training workflows",
      "Improved platform security through role and permission management",
      "Enabled operational visibility via analytics dashboards and channel insights",
      "Increased reliability with session recovery, error handling, and mobile UX improvements",
    ],
    links: {
      github: siteConfig.projects.marthaAi.github,
      demo: siteConfig.projects.marthaAi.demo,
    },
  },
  {
    id: "music-saas",
    title: "Music Distribution SaaS",
    tagline: "Release & Royalty Management for Independent Artists",
    image: "/projects/music-saas.svg",
    problem:
      "Independent artists lack affordable tooling to manage releases, distribution workflows, and royalty tracking without relying on fragmented spreadsheets and manual processes.",
    solution:
      "Designing a full-stack SaaS platform with artist onboarding, track uploads, metadata management, distribution workflows, and analytics—built for scalability from day one.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript"],
    impact: [
      "Centralizes release management into a single workflow",
      "Reduces manual overhead for metadata and distribution tracking",
      "Provides foundation for royalty analytics and artist growth insights",
    ],
    links: {
      github: siteConfig.projects.musicSaas.github,
    },
  },
  {
    id: "crypto-tax",
    title: "Crypto Portfolio & Tax Manager",
    tagline: "Portfolio Tracking & Tax Reporting for Crypto Investors",
    image: "/projects/crypto-tax.svg",
    problem:
      "Crypto investors struggle to aggregate transactions across wallets, calculate accurate PnL, and generate tax-ready reports without expensive third-party tools.",
    solution:
      "Built a portfolio management platform that aggregates wallet data, calculates gains/losses, and surfaces tax reporting and analytics through a clean React dashboard.",
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Blockchain APIs",
      "ethers.js",
    ],
    impact: [
      "Unified multi-wallet tracking into a single portfolio view",
      "Automated PnL calculations across transaction history",
      "Simplified tax reporting workflows for end-of-year compliance",
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
  frontend: ["React 19", "Next.js", "Vite", "Tailwind CSS v4"],
  backend: ["NestJS", "Node.js", "Express", "Server-Sent Events (SSE)"],
  ai: ["OpenAI", "Vector Stores", "Automation Pipelines"],
  cloud: ["REST APIs", "Web Audio API", "WebXR / Three.js", "Stripe & Zap Pay", "AWS / PM2"],
};
