"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ThemeToggle } from "./ThemeToggle";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/sound";

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export function Navbar({ onOpenTerminal }: NavbarProps) {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work" || pathname === "/projects";

  const navLinks = [
    { href: isWorkPage ? "/#hero" : "#hero", label: "01 System" },
    { href: isWorkPage ? "#work" : "/work", label: "02 Projects" },
    { href: isWorkPage ? "/#metrics" : "#metrics", label: "03 Metrics" },
    { href: isWorkPage ? "#architecture" : "/work#architecture", label: "04 Architecture" },
    { href: isWorkPage ? "/#contact" : "#contact", label: "05 Transmission" },
  ];

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  const toggleSound = () => {
    const next = !soundEnabled;
    sound.enabled = next;
    setSoundEnabled(next);
    if (next) sound.playClick();
  };

  const handleLinkClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    >
      <div
        className={`w-full border-b transition-colors duration-500 ${
          isScrolled
            ? "bg-[var(--system-paper)]/85 backdrop-blur-xl border-[var(--system-rule)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
          {/* Logo & Status Indicator */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href={isWorkPage ? "/" : "#hero"}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-[var(--system-ink)] group"
            >
              <span className="size-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <span>{siteConfig.name}</span>
              <span className="text-[var(--system-ink-45)] font-normal text-xs">{"// SYSTEMS"}</span>
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group relative font-mono text-xs tracking-wider text-[var(--system-ink-70)] transition-colors hover:text-[var(--system-ink)] py-1"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--system-ink)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions: Sound + Terminal Trigger + Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Feedback Toggle */}
            <button
              type="button"
              onClick={toggleSound}
              aria-label="Toggle Sound"
              className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 font-mono text-xs transition-all ${
                soundEnabled
                  ? "border-cyan-400 text-cyan-400 bg-cyan-950/20"
                  : "border-[var(--system-rule)] text-[var(--system-ink-45)] hover:text-[var(--system-ink)]"
              }`}
              data-cursor-label="AUDIO"
            >
              <span className={`size-1.5 rounded-full ${soundEnabled ? "bg-cyan-400 animate-pulse" : "bg-neutral-600"}`} />
              <span className="text-[10px] hidden sm:inline">{soundEnabled ? "SND:ON" : "MUTE"}</span>
            </button>

            {onOpenTerminal && (
              <button
                type="button"
                onClick={() => {
                  sound.playTerminalBeep();
                  onOpenTerminal();
                }}
                aria-label="Open Terminal"
                className="hidden md:flex items-center gap-2 rounded-md border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-3 py-1.5 font-mono text-xs text-[var(--system-ink-70)] transition-all hover:border-[var(--system-rule-bright)] hover:text-[var(--system-ink)]"
                data-cursor-label="TERMINAL"
              >
                <span className="text-cyan-400">&gt;_</span>
                <span>TERMINAL</span>
                <span className="rounded bg-[var(--system-rule)] px-1 text-[9px] text-[var(--system-ink-45)]">~</span>
              </button>
            )}

            <ThemeToggle />

            {/* Desktop Connect CTA */}
            <a
              href="#contact"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="group hidden sm:inline-flex items-center gap-2.5 border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-4 py-2 font-mono text-xs tracking-wider text-[var(--system-ink)] transition-all hover:border-[var(--system-rule-bright)] hover:bg-[var(--system-paper)]"
            >
              <span>CONNECT</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                className="sys-cross-icon text-[var(--system-ink-45)] transition-transform group-hover:text-[var(--system-ink)]"
              >
                <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Navigation"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper-card)] lg:hidden"
            >
              <span
                className={`h-px w-4 bg-[var(--system-ink)] transition-transform duration-300 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-[var(--system-ink)] transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-4 bg-[var(--system-ink)] transition-transform duration-300 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Cognito-style Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 border-b border-[var(--system-rule)] bg-[var(--system-paper)]/95 backdrop-blur-2xl p-6 lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4 font-mono text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between border-b border-[var(--system-rule)] py-3 text-[var(--system-ink)]"
                >
                  <span className="font-semibold">{link.label}</span>
                  <span className="text-cyan-400">→</span>
                </Link>
              ))}

              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={() => {
                    handleLinkClick();
                    onOpenTerminal();
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded border border-cyan-500/40 bg-cyan-950/20 py-3 font-mono text-xs text-cyan-300 uppercase tracking-widest"
                >
                  <span>&gt;_ LAUNCH SYSTEM TERMINAL</span>
                </button>
              )}

              <Link
                href={isWorkPage ? "/#contact" : "#contact"}
                onClick={handleLinkClick}
                className="mt-1 flex w-full items-center justify-center gap-2 bg-[var(--system-ink)] py-3 font-mono text-xs text-[var(--system-paper)] uppercase tracking-widest"
              >
                <span>TRANSMISSION DIRECT // CONNECT</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
