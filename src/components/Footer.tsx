"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { Logo } from "./Logo";

export function Footer({ chapterNum = "06" }: { chapterNum?: string }) {
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

  const scheduleHref =
    siteConfig.calendarUrl ||
    `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      "Engineering Opportunity — Intro Call"
    )}`;

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
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3 py-1 font-mono text-xs text-emerald-400 mb-6">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO INTERNATIONAL REMOTE ROLES &amp; SENIOR CONTRACTS</span>
              </span>

              <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[15ch]">
                Let&apos;s build production systems that scale.
              </h2>

              <p className="mt-6 max-w-[46ch] text-base sm:text-lg text-[var(--system-ink-70)] leading-relaxed">
                Full-Stack &amp; AI Systems Engineering across Next.js, NestJS, TypeScript, PostgreSQL, and autonomous agent workflows. Overlapping US &amp; EU timezones seamlessly from UTC+1.
              </p>
              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <a href={`mailto:${siteConfig.email}`} className="hover:underline tracking-wider">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            {/* Actions: Book Call / Direct Email / Copy Email */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={scheduleHref}
                target={siteConfig.calendarUrl ? "_blank" : undefined}
                rel={siteConfig.calendarUrl ? "noopener noreferrer" : undefined}
                className="sys-btn-primary group w-full text-center"
                data-cursor-label="SCHEDULE"
              >
                <span>{siteConfig.calendarUrl ? "BOOK INTRO CALL (CALENDAR)" : "GET IN TOUCH // SCHEDULE CALL"}</span>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="sys-btn-secondary group w-full !px-4 !py-3 !text-[11px]"
                  data-cursor-label="COPY"
                >
                  <span>{copied ? "COPIED ✓" : "COPY EMAIL"}</span>
                </button>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="sys-btn-secondary group w-full text-center !px-4 !py-3 !text-[11px]"
                >
                  <span>EMAIL DIRECT ↗</span>
                </a>
              </div>
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
              <a
                href="/Joseph_Ayeni_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>CV (PDF)</span>
                <span>↗</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-[var(--system-ink-45)]">
              <span>TIME: {time || "00:00:00 UTC"}</span>
              <span>·</span>
              <span>REMOTE READY // INTERNATIONAL</span>
            </div>
          </div>
        </div>

        {/* Colophon & Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--system-ink-45)]">
          <div className="flex items-center gap-2.5">
            <Logo size={18} glow={false} />
            <p>
              © {year} {siteConfig.fullName} ({siteConfig.name}). FULL-STACK &amp; AI SYSTEMS ARCHITECTURE.
            </p>
          </div>
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
