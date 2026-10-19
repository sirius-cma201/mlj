"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Footer } from "@/components/Footer";
import { NavigationRail } from "@/components/NavigationRail";
import { TerminalDrawer } from "@/components/TerminalDrawer";
import { LandingSequence } from "@/components/LandingSequence";
import { ThreeCanvas } from "@/components/ThreeCanvas";

export default function Home() {
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
      <LandingSequence />
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
      <NavigationRail />

      {/* Full-bleed Three.js 3D Arc Reactor Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Interactive 3D Canvas with pointer-events-auto for drag/orbit */}
        <div className="absolute inset-0 pointer-events-auto">
          <ThreeCanvas
            className="w-full h-full opacity-70 dark:opacity-85"
            isBackground={true}
          />
        </div>

        {/* Subtle Radial Vignette Scrim for Text Contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 20%, var(--system-paper) 95%)",
            opacity: 0.75,
          }}
        />
      </div>

      {/* Main Content: Hero (System Overview) + Metrics */}
      <main className="relative z-10 w-full">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Metrics chapterNum="02" />
      </main>

      {/* Chapter 03: Transmission (Contact & Terminal direct) */}
      <Footer chapterNum="03" />

      {/* Interactive System Terminal */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
