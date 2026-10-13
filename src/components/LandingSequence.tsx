"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/sound";

interface LandingSequenceProps {
  onComplete?: () => void;
}

export function LandingSequence({ onComplete }: LandingSequenceProps) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return sessionStorage.getItem("aj_intro_seen") !== "true";
    } catch {
      return true;
    }
  });
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("INITIALIZING TELEMETRY...");

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            sessionStorage.setItem("aj_intro_seen", "true");
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 4;
        if (next > 30 && next <= 65) {
          setStage("CALIBRATING 3D COGNITIVE CORE...");
        } else if (next > 65 && next < 95) {
          setStage("LINKING PRODUCTION REPOSITORIES...");
        } else if (next >= 95) {
          setStage("SYSTEM ONLINE // AJ-KERNEL v2.4");
        }
        return Math.min(next, 100);
      });
    }, 45);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") {
        setVisible(false);
        sessionStorage.setItem("aj_intro_seen", "true");
        if (onComplete) onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onComplete]);

  const handleSkip = () => {
    sound.playClick();
    setVisible(false);
    sessionStorage.setItem("aj_intro_seen", "true");
    if (onComplete) onComplete();
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
              <span>SHADERS: GLSL_300 // COMPILED</span>
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
