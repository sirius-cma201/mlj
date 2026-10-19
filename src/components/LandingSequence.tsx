"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/sound";

interface LandingSequenceProps {
  onComplete?: () => void;
}

export function LandingSequence({ onComplete }: LandingSequenceProps) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("aj_intro_seen") !== "true";
    } catch {
      return false;
    }
  });
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("INITIALIZING TELEMETRY...");

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem("aj_intro_seen", "true");
    } catch {}
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 9) + 5;
        if (next >= 100) {
          return 100;
        }

        if (next > 25 && next <= 55) {
          setStage("ARC REACTOR HARMONICS: STABLE (3.0 GJ/s)...");
        } else if (next > 55 && next <= 80) {
          setStage("J.A.R.V.I.S. INTERFACE // VERONICA PROTOCOL READY...");
        } else if (next > 80 && next < 95) {
          setStage("LINKING PRODUCTION REPOSITORIES...");
        } else if (next >= 95) {
          setStage("SYSTEM ONLINE // AJ-KERNEL [STARK_OS]");
        }
        return next;
      });
    }, 40);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        dismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Guaranteed auto-dismiss fallback after 1.4s
    const maxTimer = setTimeout(() => {
      dismiss();
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, dismiss, onComplete]);

  // When progress reaches 100%, trigger dismiss
  useEffect(() => {
    if (progress >= 100 && visible) {
      const timer = setTimeout(() => {
        dismiss();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress, visible, dismiss]);

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    dismiss();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-[#050508] p-8 md:p-14 font-mono select-none"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs text-[var(--system-ink-45)]">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="tracking-widest text-[var(--system-ink)]">
                BOOTSTRAP // KERNEL v2.4
              </span>
            </div>
            <button
              onClick={handleSkip}
              className="rounded border border-white/10 px-3 py-1 text-[11px] tracking-wider text-[var(--system-ink-70)] hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Central Counter & Diagnostics */}
          <div className="my-auto max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 mb-3">
              {stage}
            </div>

            <div className="text-6xl sm:text-7xl font-bold tracking-tighter text-white font-sans flex items-baseline gap-2">
              <span>{String(progress).padStart(2, "0")}</span>
              <span className="text-2xl text-cyan-400 font-mono font-normal">%</span>
            </div>

            {/* Hairline Progress Bar */}
            <div className="relative mt-6 h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] text-[var(--system-ink-45)]">
              <span>MEM_BLOCK: 0x7FFF // OK</span>
              <span>ARC_REACTOR: 3.0 GJ/s // STABLE</span>
              <span>NODE: LATENCY 84ms</span>
            </div>
          </div>

          {/* Footer Telemetry */}
          <div className="flex items-end justify-between text-[11px] text-[var(--system-ink-45)]">
            <div>
              <p className="text-white">FULL-STACK &amp; AI SYSTEMS ENGINEER</p>
              <p className="text-[10px] text-[var(--system-ink-45)]">LAGOS // GLOBAL PROTOCOL</p>
            </div>
            <div className="hidden sm:block text-[10px] tracking-widest text-right">
              INSPIRED BY COGNITO SYSTEMS &amp; OYUDO.XYZ
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
