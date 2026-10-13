"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ThreeCanvas } from "./ThreeCanvas";
import { siteConfig } from "@/lib/config";
import { sound } from "@/lib/sound";
import { useTextScramble } from "@/lib/useTextScramble";

interface HeroProps {
  onOpenTerminal?: () => void;
}

export function Hero({ onOpenTerminal }: HeroProps) {
  const [pulseCount, setPulseCount] = useState(0);
  const titleText = useTextScramble("I engineer production intelligence and scalable systems.");

  const handleCoreInteract = () => {
    sound.playSubDrone();
    setPulseCount((p) => p + 1);
  };

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
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-primary group"
              data-cursor-label="EXPLORE"
            >
              <span>EXPLORE WORK</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="sys-cross-icon shrink-0"
              >
                <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
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
                className="sys-btn-secondary group"
                data-cursor-label="TERMINAL"
              >
                <span className="text-cyan-400">&gt;_</span>
                <span>OPEN TERMINAL</span>
                <span className="text-[10px] text-[var(--system-ink-45)] font-mono">[~]</span>
              </button>
            )}

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="sys-btn-secondary group"
            >
              <span>GITHUB</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className="sys-arrow-icon shrink-0"
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

        {/* Right Column: Oyudo-style Interactive 3D Canvas + Technical SVG Callouts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[420px] lg:min-h-[560px]"
        >
          {/* Ambient Radial Glow */}
          <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

          {/* Interactive 3D Scene */}
          <div className="relative w-full h-[440px] sm:h-[520px] rounded-2xl border border-[var(--system-rule)] bg-[var(--system-paper-card)] overflow-hidden shadow-2xl">
            <ThreeCanvas
              className="w-full h-full"
              onInteract={handleCoreInteract}
            />

            {/* Technical Diagram Annotations / SVG Leader Lines (Cognito Systems Style) */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Leader Line 1: Top Right -> AI Signal */}
              <g className="opacity-80">
                <circle cx="330" cy="140" r="4" fill="var(--signal-cyan)" />
                <path
                  d="M330 140 L410 90 L480 90"
                  stroke="var(--system-rule-bright)"
                  strokeWidth="1"
                  className="sys-leader-line"
                />
                <circle cx="480" cy="90" r="2" fill="var(--system-ink)" />
                <text
                  x="475"
                  y="78"
                  textAnchor="end"
                  fill="var(--system-ink)"
                  className="font-mono text-[9px] tracking-wider"
                >
                  AI PIPELINE // EMBEDDINGS
                </text>
              </g>

              {/* Leader Line 2: Bottom Left -> Backend Core */}
              <g className="opacity-80">
                <circle cx="170" cy="360" r="4" fill="var(--signal-violet)" />
                <path
                  d="M170 360 L90 410 L20 410"
                  stroke="var(--system-rule-bright)"
                  strokeWidth="1"
                  className="sys-leader-line"
                />
                <circle cx="20" cy="410" r="2" fill="var(--system-ink)" />
                <text
                  x="25"
                  y="400"
                  textAnchor="start"
                  fill="var(--system-ink)"
                  className="font-mono text-[9px] tracking-wider"
                >
                  ENGINE // NESTJS &amp; POSTGRES
                </text>
              </g>
            </svg>

            {/* Technical HUD Overlay Badges */}
            <div className="pointer-events-none absolute top-4 left-4 flex flex-col gap-1 font-mono text-[10px] text-[var(--system-ink-45)]">
              <span className="text-[var(--system-ink)] font-semibold">CORE.RENDER // ACTIVE</span>
              <span>GEOMETRY: ICOSA_LATTICE</span>
              <span>INTERACTION COUNT: {pulseCount}</span>
            </div>

            <div className="pointer-events-none absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 bg-black/60 px-2 py-1 rounded border border-white/10">
              <span className="size-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>DRAG TO ORBIT</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Info & Scroll Cue */}
      <div className="relative z-10 flex items-end justify-between border-t border-[var(--system-rule)] pt-4">
        <div className="flex items-center gap-4 font-mono text-xs text-[var(--system-ink-45)]">
          <span>AJ // KERNEL v2.4</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline text-[var(--system-ink-70)]">PRODUCTION SOFTWARE ENGINEER</span>
        </div>

        <a
          href="#metrics"
          className="group flex items-center gap-2 font-mono text-xs text-[var(--system-ink-70)] hover:text-[var(--system-ink)] transition-colors"
          data-cursor-label="SCROLL"
        >
          <span>SCROLL TO EXPLORE</span>
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
