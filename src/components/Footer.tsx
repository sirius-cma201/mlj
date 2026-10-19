"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export function Footer({ chapterNum = "03" }: { chapterNum?: string }) {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const year = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "UTC",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer
      id="contact"
      className="relative w-full border-t border-[var(--system-rule)] bg-[var(--system-paper)] px-6 pt-20 pb-12 lg:px-12 lg:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-cyan-400">{chapterNum}</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            TRANSMISSION // DIRECT CONTACT
          </span>
        </div>

        {/* Transmission Hero Box */}
        <div className="rounded-2xl border border-[var(--system-rule)] bg-[var(--system-paper-card)] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="sys-grid-backdrop absolute inset-0 pointer-events-none opacity-50" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 font-mono text-xs text-emerald-400 mb-6">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACCEPTING SELECT ENGAGEMENTS &amp; CONTRACTS</span>
              </span>

              <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[14ch]">
                Let&apos;s build software that holds up under pressure.
              </h2>

              <p className="mt-6 max-w-[44ch] text-base sm:text-lg text-[var(--system-ink-70)] leading-relaxed">
                Available for AI automation architecture, backend scaling, and production-ready SaaS systems.
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline tracking-wider">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Actions: Copy Email + Direct Email */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="sys-btn-primary group w-full"
                data-cursor-label="COPY"
              >
                <span>{copied ? "COPIED TO CLIPBOARD ✓" : "COPY EMAIL ADDRESS"}</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className="sys-cross-icon shrink-0"
                >
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>

              <a
                href={`mailto:${siteConfig.email}`}
                className="sys-btn-secondary group w-full text-center"
              >
                <span>LAUNCH MAIL CLIENT</span>
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
          </div>

          {/* Social Links Row */}
          <div className="relative z-10 mt-12 pt-8 border-t border-[var(--system-rule)] flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-[var(--system-ink-70)]">
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--system-ink)] transition-colors flex items-center gap-1.5"
              >
                <span>GITHUB</span>
                <span>↗</span>
              </a>
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--system-ink)] transition-colors flex items-center gap-1.5"
                >
                  <span>LINKEDIN</span>
                  <span>↗</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-4 text-[var(--system-ink-45)]">
              <span>TIME: {time || "00:00:00 UTC"}</span>
              <span>·</span>
              <span>TELEMETRY: LEVEL 7 CLEARANCE // STABLE</span>
            </div>
          </div>
        </div>

        {/* Colophon & Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--system-ink-45)]">
          <p>
            © {year} {siteConfig.name}. COGNITIVE ARCHITECTURE ENGINE.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-[var(--system-ink)] transition-colors cursor-pointer"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
