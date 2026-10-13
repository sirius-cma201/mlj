export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "AJ",
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE ??
    "Full-Stack Software Engineer | AI & Backend Systems",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Software Engineer focused on scalable backend systems, AI-powered products, and production-ready SaaS.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "hello@example.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  projects: {
    marthaAi: {
      github:
        process.env.NEXT_PUBLIC_MARTHA_AI_GITHUB ??
        "https://github.com/yourusername/martha-ai",
      demo:
        process.env.NEXT_PUBLIC_MARTHA_AI_DEMO ??
        "https://www.loom.com/share/your-demo-id",
    },
    musicSaas: {
      github:
        process.env.NEXT_PUBLIC_MUSIC_SAAS_GITHUB ??
        "https://github.com/yourusername/music-distribution-saas",
    },
    cryptoTax: {
      github:
        process.env.NEXT_PUBLIC_CRYPTO_TAX_GITHUB ??
        "https://github.com/yourusername/crypto-portfolio-tax",
    },
    fantasyIkoyi: {
      live:
        process.env.NEXT_PUBLIC_FANTASY_IKOYI_URL ??
        "https://fantasyikoyi.com",
    },
  },
} as const;
