export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "AJ",
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE ??
    "Full-Stack Software Engineer | AI & Backend Systems",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Software Engineer focused on scalable backend systems, AI-powered products, and production-ready SaaS.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/sirius-cma201",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "manlikejoee@gmail.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  projects: {
    marthaAi: {
      github:
        process.env.NEXT_PUBLIC_MARTHA_AI_GITHUB ??
        "https://github.com/yourusername/martha-ai",
      demo:
        process.env.NEXT_PUBLIC_MARTHA_AI_DEMO ??
        "https://www.youtube.com/watch?v=a5WJV5Dghpc",
    },
    blackPride: {
      github:
        process.env.NEXT_PUBLIC_BLACK_PRIDE_GITHUB ??
        "",
      yyc:
        process.env.NEXT_PUBLIC_BLACK_PRIDE_YYC_URL ??
        "https://www.blackprideyyc.org/",
      canada:
        process.env.NEXT_PUBLIC_BLACK_PRIDE_CANADA_URL ??
        "https://blackpride.ca",
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
    weAreGriot: {
      live:
        process.env.NEXT_PUBLIC_WEAREGRIOT_URL ??
        "https://wearegriot.com",
    },
  },
} as const;
