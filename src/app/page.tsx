"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { About } from "@/components/About";
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
            className="w-full h-full opacity-80 dark:opacity-95"
            isBackground={true}
          />
        </div>

        {/* Subtle Radial Vignette Scrim for Edge Contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 30%, var(--system-paper) 98%)",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Main Content */}
      <main id="content" tabIndex={-1} className="relative z-10 w-full">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Metrics chapterNum="02" />
        <Projects chapterNum="03" />
        <Leadership chapterNum="04" />
        <About chapterNum="05" />
      </main>

      {/* Chapter 06: Transmission (Contact & Terminal direct) */}
      <Footer chapterNum="06" />

      {/* Interactive System Terminal */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
