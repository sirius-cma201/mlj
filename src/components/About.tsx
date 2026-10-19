"use client";

import { useState } from "react";
import { techStack } from "@/data/projects";
import { motion } from "framer-motion";

const stackCategories = [
  { id: "backend", label: "Backend & Systems", items: [...techStack.backend, ...techStack.languages] },
  { id: "ai", label: "AI & Intelligence", items: techStack.ai },
  { id: "database", label: "Databases & Storage", items: techStack.databases },
  { id: "blockchain", label: "Web3 & Blockchain", items: techStack.blockchain },
  { id: "frontend", label: "Frontend & Interfaces", items: techStack.frontend },
  { id: "cloud", label: "Infrastructure & Cloud", items: techStack.cloud },
];

const principles = [
  {
    num: "01",
    title: "We build for production, not demos.",
    desc: "Prototypes are easy; production requires session recovery, graceful degradation, idempotency, and automated test coverage.",
  },
  {
    num: "02",
    title: "Intelligence must be measurable.",
    desc: "Every AI pipeline must track token latency, resolution accuracy, and human-intervention delta. If it cannot be measured, it cannot be improved.",
  },
  {
    num: "03",
    title: "Architecture respects data gravity.",
    desc: "PostgreSQL for relational integrity, vector stores for semantic retrieval, and event streams for high-concurrency decoupling.",
  },
];

export function About({ chapterNum = "02" }: { chapterNum?: string }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all"
    ? stackCategories.flatMap((c) => c.items)
    : stackCategories.find((c) => c.id === activeTab)?.items || [];

  return (
    <section
      id="architecture"
      className="relative w-full border-t border-[var(--system-rule)] bg-[var(--system-paper)] px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-cyan-400">{chapterNum}</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            CAPABILITIES &amp; CORE PROTOCOLS
          </span>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[15ch]">
              Full-stack engineer, backend architect at heart.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[var(--system-ink-70)] leading-relaxed">
              From designing resilient APIs and relational schemas to orchestrating LLM agents and crafting interactive client experiences.
            </p>
          </div>
        </div>

        {/* Engineering Philosophy Cards (Cognito Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {principles.map((item) => (
            <div
              key={item.num}
              className="sys-card sys-corners p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-cyan-400 block mb-4">
                  PRINCIPLE // {item.num}
                </span>
                <h3 className="sys-display text-xl text-[var(--system-ink)] mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="font-mono text-xs text-[var(--system-ink-70)] leading-relaxed border-t border-[var(--system-rule)] pt-4 mt-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Capabilities / Tech Stack Matrix */}
        <div className="rounded-xl border border-[var(--system-rule)] bg-[var(--system-paper-card)] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--system-rule)] pb-6 mb-8">
            <div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                VERIFIED TECH MATRIX
              </span>
              <h3 className="sys-display text-xl sm:text-2xl mt-1 text-[var(--system-ink)]">
                Tooling &amp; Infrastructure Ecosystem
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase transition-all ${
                  activeTab === "all"
                    ? "bg-[var(--system-ink)] text-[var(--system-paper)] font-bold"
                    : "border border-[var(--system-rule)] text-[var(--system-ink-70)] hover:text-white"
                }`}
              >
                ALL
              </button>
              {stackCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase transition-all ${
                    activeTab === cat.id
                      ? "bg-[var(--system-ink)] text-[var(--system-paper)] font-bold"
                      : "border border-[var(--system-rule)] text-[var(--system-ink-70)] hover:text-white"
                  }`}
                >
                  {cat.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Badge Constellation */}
          <motion.div
            layout
            className="flex flex-wrap gap-3"
          >
            {Array.from(new Set(filteredItems)).map((tech) => (
              <motion.div
                key={tech}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex items-center gap-2 rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)] px-4 py-2.5 font-mono text-xs text-[var(--system-ink)] transition-all hover:border-cyan-400 hover:shadow-lg"
              >
                <span className="size-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                <span>{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
