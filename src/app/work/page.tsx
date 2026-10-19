"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { NavigationRail } from "@/components/NavigationRail";
import { TerminalDrawer } from "@/components/TerminalDrawer";
import { sound } from "@/lib/sound";

export default function WorkPage() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" || e.key === "~") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      if (e.key === "Escape" && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [terminalOpen]);

  return (
    <>
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <NavigationRail />

      <main className="relative z-10 w-full overflow-hidden">
        {/* Page Hero Header */}
        <section className="relative px-6 pt-28 pb-12 lg:px-12 lg:pt-32 border-b border-[var(--system-rule)] bg-[var(--system-paper)]">
          <div className="sys-grid-backdrop absolute inset-0 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            {/* Back to System Link & Chapter Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--system-rule)]">
              <Link
                href="/"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--system-ink-70)] hover:text-[var(--system-ink)] transition-colors"
              >
                <span className="text-cyan-400 group-hover:-translate-x-1 transition-transform">←</span>
                <span>RETURN TO SYSTEM OVERVIEW</span>
              </Link>

              <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--system-ink-45)]">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="uppercase tracking-widest text-[var(--system-ink-70)]">
                  ACTIVE PRODUCTION DOSSIER
                </span>
                <span>·</span>
                <span>5 CASE STUDIES</span>
              </div>
            </div>

            {/* Dossier Title and Summary */}
            <div className="pt-10 pb-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-3 py-1 font-mono text-xs text-[var(--system-ink-70)] mb-4">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span>SELECTED PRODUCTION WORK & ARCHITECTURE</span>
              </div>

              <h1 className="sys-display text-4xl sm:text-5xl lg:text-6xl text-[var(--system-ink)] tracking-tight">
                Shipped systems operating under real demand.
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--system-ink-70)]">
                Detailed breakdowns of autonomous AI support engines, real-time cultural commerce hubs, scalable multi-tenant platforms, and distributed Web3 systems built for reliability and measured impact.
              </p>

              {/* Quick dossier stats row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--system-rule)] font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--system-ink)]">3,000+</div>
                  <div className="text-[11px] text-[var(--system-ink-45)] uppercase tracking-wider mt-1">
                    Autonomous Inquiries
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--system-ink)]">&lt;85ms</div>
                  <div className="text-[11px] text-[var(--system-ink-45)] uppercase tracking-wider mt-1">
                    P99 Backend Latency
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--system-ink)]">$25M+</div>
                  <div className="text-[11px] text-[var(--system-ink-45)] uppercase tracking-wider mt-1">
                    Handled Volume
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 01: Projects */}
        <Projects chapterNum="01" />

        {/* Chapter 02: Architecture & Capabilities */}
        <About chapterNum="02" />
      </main>

      {/* Chapter 03: Transmission (Footer) */}
      <Footer chapterNum="03" />

      {/* Interactive System Terminal */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
