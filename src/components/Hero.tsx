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
  const titleText = useTextScramble("I engineer production intelligence and scalable systems.");

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
          <span>LOCATION: GLOBAL</span>
          <span>·</span>
          <span className="text-emerald-400">STATUS: HEALTHY</span>
        </div>
      </div>

      {/* Main Grid: Editorial Typography (Left) + Interactive 3D Core with SVG Diagrams (Right) */}
      <div className="relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8">
        {/* Left Column: Typography & Intent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-3 py-1 font-mono text-xs text-[var(--system-ink-70)] mb-6 w-fit">
            <span className="size-1.5 rounded-full bg-cyan-400" />
            <span>FULL-STACK · AI SYSTEMS · BACKEND ARCHITECTURE</span>
          </div>

          <h1 className="sys-display text-4xl sm:text-5xl lg:text-[4.25rem] text-[var(--system-ink)] max-w-[14ch] tracking-tight min-h-[3.2em]">
            {titleText}
          </h1>

          <p className="mt-7 max-w-[48ch] text-base sm:text-lg leading-relaxed text-[var(--system-ink-70)]">
            Bridging complex backend pipelines, AI automation workflows, and high-performance user interfaces. Built for scale, measured on business outcomes.
          </p>

          {/* Cognito-style Featured Metric Pill */}
          <div className="mt-8 border-y border-[var(--system-rule)] py-4 max-w-lg">
            <div className="flex items-baseline gap-3">
              <span className="sys-display text-3xl sm:text-4xl text-[var(--system-ink)] font-bold">
                91.7%
              </span>
              <span className="font-mono text-xs text-[var(--system-ink-70)] uppercase tracking-wider">
                Autonomous Support Resolution
              </span>
            </div>
            <p className="mt-1.5 font-mono text-[11px] text-[var(--system-ink-45)] leading-relaxed">
              Measured on Martha AI across 3,000+ real customer workflows with vector retrieval and NestJS APIs.
            </p>
          </div>

          {/* Interactive Action CTAs with Micro-interactions */}
          <div className="mt-10 grid grid-cols-3 gap-2 w-full max-w-lg sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/work"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-primary group !px-1.5 !py-2.5 sm:!px-7 sm:!py-3.5 !text-[9.5px] xs:!text-[10px] sm:!text-[0.78rem] !tracking-tight sm:!tracking-widest !gap-1 sm:!gap-3.5 w-full justify-center text-center"
              data-cursor-label="EXPLORE"
            >
              <span className="truncate">
                <span className="xs:hidden">EXPLORE</span>
                <span className="hidden xs:inline">EXPLORE WORK</span>
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="sys-cross-icon shrink-0 hidden sm:inline-block"
              >
                <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>

            {onOpenTerminal && (
              <button
                type="button"
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playTerminalBeep();
                  onOpenTerminal();
                }}
                className="sys-btn-secondary group !px-1.5 !py-2.5 sm:!px-7 sm:!py-3.5 !text-[9.5px] xs:!text-[10px] sm:!text-[0.78rem] !tracking-tight sm:!tracking-widest !gap-1 sm:!gap-3.5 w-full justify-center text-center"
                data-cursor-label="TERMINAL"
              >
                <span className="text-cyan-400 shrink-0">&gt;_</span>
                <span className="truncate">
                  <span className="xs:hidden">TERMINAL</span>
                  <span className="hidden xs:inline">OPEN TERMINAL</span>
                </span>
                <span className="text-[10px] text-[var(--system-ink-45)] font-mono hidden sm:inline">[~]</span>
              </button>
            )}

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-secondary group !px-1.5 !py-2.5 sm:!px-7 sm:!py-3.5 !text-[9.5px] xs:!text-[10px] sm:!text-[0.78rem] !tracking-tight sm:!tracking-widest !gap-1 sm:!gap-3.5 w-full justify-center text-center"
            >
              <span className="truncate">GITHUB</span>
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
          </div>
        </motion.div>

        {/* Right Column: Floating Tactical Telemetry & System HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex flex-col gap-4 justify-center"
        >
          {/* HUD Card: Production Dossier Gateway */}
          <Link
            href="/work"
            className="group rounded-2xl border border-[var(--system-rule)] bg-[var(--system-paper-card)]/80 backdrop-blur-xl p-6 transition-all hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)] shadow-xl block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-400/30">
                02 // PRODUCTION WORK
              </span>
              <span className="font-mono text-xs text-[var(--system-ink-45)] group-hover:text-cyan-400 transition-colors">
                VIEW DOSSIER ↗
              </span>
            </div>
            <h3 className="sys-display text-lg text-[var(--system-ink)] font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
              5 Production Systems Shipped
            </h3>
            <p className="font-mono text-xs text-[var(--system-ink-70)] line-clamp-2">
              Martha AI, Fantasy Ikoyi, Black Pride YYC, WeAreGriot, and Crypto Tax Manager.
            </p>
          </Link>
        </motion.div>
      </div>

      {/* Footer Info & Scroll Cue */}
      <div className="relative z-10 flex items-end justify-between border-t border-[var(--system-rule)] pt-4">
        <div className="flex items-center gap-4 font-mono text-xs text-[var(--system-ink-45)]">
          <span>AJ // KERNEL v2.4 [STARK_OS]</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[var(--system-ink-70)]">PRODUCTION SOFTWARE ENGINEER</span>
        </div>

        <a
          href="#metrics"
          className="group flex items-center gap-2 font-mono text-xs text-[var(--system-ink-70)] hover:text-[var(--system-ink)] transition-colors"
          data-cursor-label="SCROLL"
        >
          <span>SCROLL FOR METRICS &amp; TRANSMISSION</span>
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
