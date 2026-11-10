"use client";

import { motion } from "framer-motion";

const leadershipPillars = [
  {
    num: "01",
    tag: "CODE QUALITY GATEKEEPER",
    title: "Leading Code Reviews & Merge Standards",
    scope: "100% PR Review Ownership · Cognito Systems (Black Pride & Martha AI)",
    description:
      "Served as primary Engineering & Frontend Lead reviewing every pull request prior to release—enforcing strict TypeScript contracts, clean state isolation, automated test coverage, and zero-regression merges.",
    outcomes: [
      "Prevented regressions across parallel feature branches in multi-developer teams",
      "Enforced consistent error boundaries, session recovery, and API contract validation",
    ],
  },
  {
    num: "02",
    tag: "SYSTEMS CONVENTIONS",
    title: "Establishing Architectural Conventions",
    scope: "Multi-Org Component Systems · Design Tokens & API Patterns",
    description:
      "Defined reusable frontend/backend conventions including shared design tokens, TanStack Query + Zustand data patterns, modular NestJS service boundaries, and WCAG 2.1 AA / PIPEDA compliance.",
    outcomes: [
      "Unified UI architecture across Black Pride YYC & sister platform Black Pride Canada",
      "Standardized RBAC permission guards and typed API clients across web and mobile",
    ],
  },
  {
    num: "03",
    tag: "ROADMAP & EXECUTION",
    title: "Translating Figma into Engineering Roadmaps",
    scope: "Product Scoping · Schema & Milestone Planning",
    description:
      "Converted art-directed Figma specifications (WeAreGriot, Fantasy Ikoyi, Black Pride) into structured technical roadmaps—breaking ambiguous product goals into relational schemas, API contracts, and sprint-ready milestones.",
    outcomes: [
      "Eliminated frontend/backend integration drift through upfront contract definitions",
      "Delivered complex bespoke studios, LMS engines, and ticketing flows on schedule",
    ],
  },
  {
    num: "04",
    tag: "RELEASE & OPS OWNERSHIP",
    title: "Managing Deployments & Production Uptime",
    scope: "AWS EC2 / PM2 · Vercel · Automated CI/CD Pipelines",
    description:
      "Managed end-to-end production releases, environment hardening, and live incident triage—including taking sole ownership of Fantasy Ikoyi at ~60% pre-launch completion and shipping it to 100% uptime.",
    outcomes: [
      "Maintained 99.9%–100% uptime across high-traffic surges and flash ticket drops",
      "Configured automated Bitbucket/GitHub CI/CD workflows and AWS SES/S3 pipelines",
    ],
  },
];

export function Leadership({ chapterNum = "04" }: { chapterNum?: string }) {
  return (
    <section
      id="leadership"
      className="relative w-full border-t border-[var(--system-rule)] bg-[var(--system-paper)] px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-cyan-400">{chapterNum}</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            ENGINEERING LEADERSHIP &amp; IMPACT
          </span>
        </div>

        {/* Section Title & Lead Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[16ch]">
              Engineering &amp; Frontend Lead across remote product teams.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[var(--system-ink-70)] leading-relaxed">
              Senior engineering impact extends beyond individual commits—setting architectural direction, mentoring through rigorous code reviews, turning Figma specs into executable roadmaps, and owning production deployments end-to-end.
            </p>
          </div>
        </div>

        {/* Leadership Scope Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="sys-card sys-corners rounded-xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-cyan-400">
                    LEADERSHIP // {pillar.num}
                  </span>
                  <span className="rounded-full border border-[var(--system-rule)] bg-[var(--system-paper)] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-cyan-400">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="sys-display text-xl sm:text-2xl text-[var(--system-ink)] mb-2">
                  {pillar.title}
                </h3>

                <p className="font-mono text-[11px] text-emerald-400 mb-4">
                  {pillar.scope}
                </p>

                <p className="text-sm text-[var(--system-ink-70)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <ul className="mt-6 pt-4 border-t border-[var(--system-rule)] space-y-2 font-mono text-xs text-[var(--system-ink)]">
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5">
                    <span className="text-cyan-400 shrink-0">→</span>
                    <span className="leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

