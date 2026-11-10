export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "AJ",
  fullName: "Joseph Ayeni",
  title:
    process.env.NEXT_PUBLIC_SITE_TITLE ??
    "Full-Stack & AI Systems Engineer | Next.js, NestJS, TypeScript & Agent Workflows",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Senior Full-Stack & AI Systems Engineer building fault-tolerant NestJS backends, LLM agent workflows, and high-performance Next.js applications for international remote teams.",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/sirius-cma201",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "josephthedev001@gmail.com",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL ?? "",
  projects: {
    marthaAi: {
      github: process.env.NEXT_PUBLIC_MARTHA_AI_GITHUB ?? "",
      loom: process.env.NEXT_PUBLIC_MARTHA_AI_LOOM ?? "",
      demo:
        process.env.NEXT_PUBLIC_MARTHA_AI_DEMO ??
        "https://www.youtube.com/watch?v=a5WJV5Dghpc",
      live: process.env.NEXT_PUBLIC_MARTHA_AI_URL ?? "https://askmartha.ai",
    },
    fantasyIkoyi: {
      github: process.env.NEXT_PUBLIC_FANTASY_IKOYI_GITHUB ?? "",
      loom:
        process.env.NEXT_PUBLIC_FANTASY_IKOYI_LOOM ??
        "https://www.loom.com/share/c1bcddf79f89427cb41d75b4078ac793",
      live:
        process.env.NEXT_PUBLIC_FANTASY_IKOYI_URL ??
        "https://fantasyikoyi.com",
    },
    blackPride: {
      github: process.env.NEXT_PUBLIC_BLACK_PRIDE_GITHUB ?? "",
      loom: process.env.NEXT_PUBLIC_BLACK_PRIDE_LOOM ?? "",
      yyc:
        process.env.NEXT_PUBLIC_BLACK_PRIDE_YYC_URL ??
        "https://www.blackprideyyc.org/",
      canada:
        process.env.NEXT_PUBLIC_BLACK_PRIDE_CANADA_URL ??
        "https://blackpride.ca",
    },
    weAreGriot: {
      github: process.env.NEXT_PUBLIC_WEAREGRIOT_GITHUB ?? "",
      loom: process.env.NEXT_PUBLIC_WEAREGRIOT_LOOM ?? "",
      live:
        process.env.NEXT_PUBLIC_WEAREGRIOT_URL ??
        "https://wearegriot.com",
    },
    cryptoTax: {
      github:
        process.env.NEXT_PUBLIC_CRYPTO_TAX_GITHUB ??
        "https://github.com/sirius-cma201",
      loom: process.env.NEXT_PUBLIC_CRYPTO_TAX_LOOM ?? "",
    },
  },
} as const;
