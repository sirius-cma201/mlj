"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { NavigationRail } from "@/components/NavigationRail";
import { TerminalDrawer } from "@/components/TerminalDrawer";
import { LandingSequence } from "@/components/LandingSequence";

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
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Metrics />
        <Projects />
        <About />
      </main>

      <Footer />

      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </>
  );
}
