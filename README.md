# Portfolio

A modern, glassmorphic portfolio site built with Next.js, React, and Tailwind CSS. Designed for senior-level positioning—clarity, outcomes, and production impact.

## Features

- Glassmorphic UI with dark purple / lilac theme
- Dark & light mode toggle
- Scroll reveal animations (CSS + Intersection Observer)
- Responsive, mobile-first layout
- 3 project showcases with Problem → Solution → Tech → Impact structure
- Environment-driven links and contact info

## Quick Start

```bash
# Install dependencies
npm install

# Copy env file and update your links
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_NAME` | Your name or initials |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile URL |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile (optional) |
| `NEXT_PUBLIC_MARTHA_AI_GITHUB` | Martha AI repo |
| `NEXT_PUBLIC_MARTHA_AI_DEMO` | Loom or demo link |
| `NEXT_PUBLIC_MUSIC_SAAS_GITHUB` | Music SaaS repo |
| `NEXT_PUBLIC_CRYPTO_TAX_GITHUB` | Crypto tax manager repo |

## Deploy

Deploy to [Vercel](https://vercel.com) in one click:

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables from `.env.example`
4. Deploy

```bash
npm run build
npm start
```

## Customization

- **Projects**: Edit `src/data/projects.ts`
- **Tech stack**: Edit `src/data/projects.ts` → `techStack`
- **Project screenshots**: Replace SVGs in `public/projects/` with real screenshots or Loom thumbnails
- **Colors**: Adjust CSS variables in `src/app/globals.css`

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
