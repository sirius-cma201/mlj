"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { sound } from "@/lib/sound";
import { useTextScramble } from "@/lib/useTextScramble";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export function Hero({ onOpenTerminal }: HeroProps) {
  const titleText = useTextScramble("Full-Stack & AI Systems Engineer");

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden px-6 pt-28 pb-16 lg:px-12 flex flex-col justify-between"
    >
      {/* Background Architectural Grid */}
      <div className="sys-grid-backdrop absolute inset-0 pointer-events-none" />

      {/* Chapter Marker Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[var(--system-rule)] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-cyan-400">01</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            SYSTEM ARCHITECTURE // OVERVIEW
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-[var(--system-ink-45)]">
          <span>LATENCY: &lt;85ms</span>
          <span>·</span>
          <span>REMOTE: GLOBAL (UTC+1)</span>
          <span>·</span>
          <span className="text-emerald-400">STATUS: OPEN TO INT&apos;L ROLES</span>
        </div>
      </div>

      {/* Main Grid: Editorial Positioning (Left) + Architecture & Leadership HUD (Right) */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8">
        {/* Left Column: Typography & Intent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-2.5 sm:px-3 py-1 font-mono text-[9.5px] min-[390px]:text-[10.5px] sm:text-xs tracking-tight sm:tracking-normal whitespace-nowrap text-[var(--system-ink-70)] mb-6 w-fit max-w-full">
            <span className="size-1.5 rounded-full bg-cyan-400 shrink-0" />
            <span>SENIOR REMOTE · ENGINEERING &amp; FRONTEND LEAD</span>
          </div>

          <h1 className="sys-display text-4xl sm:text-5xl lg:text-[4rem] text-[var(--system-ink)] max-w-[16ch] tracking-tight min-h-[2.2em] [text-shadow:0_2px_20px_var(--system-paper),0_0_32px_var(--system-paper)]">
            {titleText}
          </h1>

          <p className="mt-5 font-mono text-sm sm:text-base font-medium text-cyan-400 tracking-wide [text-shadow:0_2px_16px_var(--system-paper),0_0_24px_var(--system-paper)]">
            Next.js, NestJS, TypeScript &amp; Agent Workflows.
          </p>

          <p className="mt-4 max-w-[52ch] text-base sm:text-lg font-medium leading-relaxed text-[var(--system-ink)] [text-shadow:0_1px_12px_var(--system-paper),0_2px_24px_var(--system-paper),0_0_36px_var(--system-paper)]">
            Architecting fault-tolerant NestJS microservices, LLM tool-calling agent pipelines, and high-performance Next.js interfaces for international remote engineering teams.
          </p>

          {/* Featured Production Proof Metric */}
          <div className="mt-8 border-y border-[var(--system-rule)] py-4 max-w-lg [text-shadow:0_2px_14px_var(--system-paper)]">
            <div className="flex items-baseline gap-3">
              <span className="sys-display text-3xl sm:text-4xl text-[var(--system-ink)] font-bold">
                91.7%
              </span>
              <span className="font-mono text-xs text-[var(--system-ink-70)] uppercase tracking-wider">
                Autonomous Support Resolution
              </span>
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-[var(--system-ink-70)] leading-relaxed">
              Verified on Martha AI across 3,000+ live customer workflows with PostgreSQL, vector retrieval, and NestJS APIs.
            </p>
          </div>

          {/* Sharp, Direct Primary CTAs — single horizontal line on mobile */}
          <div className="mt-8 flex flex-nowrap items-center gap-1.5 sm:gap-4 w-full sm:w-auto">
            <a
              href="#work"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-primary group flex-1 sm:flex-initial !px-2.5 !py-2.5 sm:!px-7 sm:!py-3.5 !text-[9.5px] min-[390px]:!text-[10.5px] sm:!text-[0.78rem] !tracking-tight sm:!tracking-widest !gap-1 sm:!gap-3 whitespace-nowrap justify-center"
              data-cursor-label="ARCHITECTURE"
            >
              <span>View Architecture</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="sys-cross-icon shrink-0 hidden sm:inline-block"
              >
                <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>

            <a
              href={siteConfig.calendarUrl || "#contact"}
              target={siteConfig.calendarUrl ? "_blank" : undefined}
              rel={siteConfig.calendarUrl ? "noopener noreferrer" : undefined}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-secondary group flex-1 sm:flex-initial !px-2.5 !py-2.5 sm:!px-7 sm:!py-3.5 !text-[9.5px] min-[390px]:!text-[10.5px] sm:!text-[0.78rem] !tracking-tight sm:!tracking-widest !gap-1 sm:!gap-3 whitespace-nowrap justify-center"
              data-cursor-label="CONTACT"
            >
              <span>Get in Touch</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className="sys-arrow-icon shrink-0 hidden sm:inline-block"
              >
                <path
                  d="M1 9L9 1M9 1H2M9 1V8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {onOpenTerminal && (
              <button
                type="button"
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playTerminalBeep();
                  onOpenTerminal();
                }}
                aria-label="Open System Terminal"
                className="shrink-0 inline-flex items-center justify-center gap-1 sm:gap-2 rounded-md border border-[var(--system-rule)] bg-[var(--system-paper-card)]/80 px-2.5 py-2.5 sm:px-3.5 sm:py-3 font-mono text-[10px] sm:text-xs text-[var(--system-ink-70)] hover:border-cyan-400 hover:text-[var(--system-ink)] transition-colors whitespace-nowrap"
                data-cursor-label="TERMINAL"
              >
                <span className="text-cyan-400">&gt;_</span>
                <span className="hidden sm:inline">CLI</span>
                <span className="text-[9px] sm:text-[10px] text-[var(--system-ink-45)]">[~]</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Right Column: Floating Tactical Telemetry & Architecture Gateways */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex flex-col gap-4 justify-center"
        >
          {/* HUD Card 1: Case Studies */}
          <a
            href="#work"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="group rounded-2xl border border-[var(--system-rule)] bg-[var(--system-paper-card)]/80 backdrop-blur-xl p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] shadow-xl block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-400/30">
                03 // ARCHITECTURE DEEP DIVES
              </span>
              <span className="font-mono text-xs text-[var(--system-ink-45)] group-hover:text-cyan-400 transition-colors">
                EXPLORE ↓
              </span>
            </div>
            <h3 className="sys-display text-lg text-[var(--system-ink)] font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
              Problem → Architecture → Impact
            </h3>
            <p className="font-mono text-xs text-[var(--system-ink-70)] line-clamp-2">
              Martha AI, Fantasy Ikoyi, Black Pride Ecosystem, WeAreGriot &amp; Crypto Tax Engine — with 2-min walkthroughs.
            </p>
          </a>

          {/* HUD Card 2: Leadership & Categorized Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="#leadership"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="group rounded-xl border border-[var(--system-rule)] bg-[var(--system-paper-card)]/80 backdrop-blur-xl p-4 transition-all hover:border-cyan-400 block"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 block mb-1">
                04 // LEADERSHIP
              </span>
              <div className="sys-display text-sm font-semibold text-[var(--system-ink)] group-hover:text-cyan-400 transition-colors">
                Engineering &amp; Frontend Lead
              </div>
              <p className="mt-1 font-mono text-[11px] text-[var(--system-ink-45)]">
                PR gates, roadmaps &amp; cloud ops
              </p>
            </a>

            <Link
              href="/work"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="group rounded-xl border border-[var(--system-rule)] bg-[var(--system-paper-card)]/80 backdrop-blur-xl p-4 transition-all hover:border-cyan-400 block"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 block mb-1">
                DOSSIER VIEW
              </span>
              <div className="sys-display text-sm font-semibold text-[var(--system-ink)] group-hover:text-cyan-400 transition-colors">
                Full Systems Dossier ↗
              </div>
              <p className="mt-1 font-mono text-[11px] text-[var(--system-ink-45)]">
                Dedicated /work view
              </p>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Info & Scroll Cue */}
      <div className="relative z-10 flex items-end justify-between border-t border-[var(--system-rule)] pt-4">
        <div className="flex items-center gap-4 font-mono text-xs text-[var(--system-ink-45)]">
          <span>{siteConfig.fullName.toUpperCase()} {"//"} {siteConfig.name} SYSTEMS</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[var(--system-ink-70)]">
            NEXT.JS · NESTJS · TYPESCRIPT · AI WORKFLOWS
          </span>
        </div>

        <a
          href="#metrics"
          className="group flex items-center gap-2 font-mono text-xs text-[var(--system-ink-70)] hover:text-[var(--system-ink)] transition-colors"
          data-cursor-label="SCROLL"
        >
          <span>SCROLL TO INSPECT SYSTEMS</span>
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            className="transition-transform group-hover:translate-y-1"
          >
            <path d="M5 0v10M1 6l4 4 4-4" stroke="currentColor" strokeWidth="1" />
          </svg>
        </a>
      </div>
    </section>
  );
}
