"use client";

import { useState } from "react";
import { techStackTiers, type TechTier } from "@/data/projects";
import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Built for production, not demos.",
    desc: "Prototypes are easy; production requires session recovery, idempotent webhooks, strict TypeScript boundaries, and automated test coverage.",
  },
  {
    num: "02",
    title: "Intelligence must be measurable.",
    desc: "Every AI agent workflow tracks token latency, resolution accuracy, and human-escalation delta—never shipping unmonitored LLM calls.",
  },
  {
    num: "03",
    title: "Architecture respects data gravity.",
    desc: "PostgreSQL for relational & transactional integrity, Redis for low-latency caching/queues, vector stores for RAG, and SSE/WebSockets for live state.",
  },
];

export function About({ chapterNum = "05" }: { chapterNum?: string }) {
  const [selectedTier, setSelectedTier] = useState<TechTier["id"] | "all">("all");

  const visibleTiers =
    selectedTier === "all"
      ? techStackTiers
      : techStackTiers.filter((tier) => tier.id === selectedTier);

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
            CATEGORIZED TECH STACK &amp; CORE PROTOCOLS
          </span>
        </div>

        {/* Section Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[16ch]">
              Structured across four functional engineering tiers.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[var(--system-ink-70)] leading-relaxed">
              Every tool is chosen for clear system boundaries—spanning type-safe UIs, modular NestJS services, durable data infrastructure, and deterministic AI workflows.
            </p>
          </div>
        </div>

        {/* Structured 4-Tier Tech Stack Matrix */}
        <div className="rounded-xl border border-[var(--system-rule)] bg-[var(--system-paper-card)] p-6 sm:p-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[var(--system-rule)] pb-6 mb-8">
            <div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                SYSTEM STACK // FUNCTIONAL TIERS
              </span>
              <h3 className="sys-display text-xl sm:text-2xl mt-1 text-[var(--system-ink)]">
                Production Capabilities by Architectural Layer
              </h3>
            </div>

            {/* Tier Focus Tabs */}
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Tech stack tier filter">
              <button
                type="button"
                role="tab"
                aria-selected={selectedTier === "all"}
                onClick={() => setSelectedTier("all")}
                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  selectedTier === "all"
                    ? "bg-[var(--system-ink)] text-[var(--system-paper)] font-bold"
                    : "border border-[var(--system-rule)] text-[var(--system-ink-70)] hover:text-[var(--system-ink)]"
                }`}
              >
                ALL TIERS
              </button>
              {techStackTiers.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedTier === tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                    selectedTier === tier.id
                      ? "bg-[var(--system-ink)] text-[var(--system-paper)] font-bold"
                      : "border border-[var(--system-rule)] text-[var(--system-ink-70)] hover:text-[var(--system-ink)]"
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>

          {/* Structured 2x2 Tier Grid */}
          <div
            className={`grid grid-cols-1 ${
              visibleTiers.length > 1 ? "lg:grid-cols-2" : ""
            } gap-6`}
          >
            {visibleTiers.map((tier) => (
              <motion.div
                key={tier.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[var(--system-rule)]">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-cyan-400">
                        TIER {tier.num}
                      </span>
                      <span className="h-px w-4 bg-[var(--system-rule)]" />
                      <h4 className="sys-display text-lg text-[var(--system-ink)] font-semibold">
                        {tier.label}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-[var(--system-ink-45)]">
                      {tier.items.length} MODULES
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-[var(--system-ink-70)] leading-relaxed">
                    {tier.summary}
                  </p>

                  <dl className="mt-5 divide-y divide-[var(--system-rule-soft)]">
                    {tier.items.map((item) => (
                      <div
                        key={item.name}
                        className="py-2.5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4"
                      >
                        <dt className="font-mono text-xs font-semibold text-[var(--system-ink)] flex items-center gap-2 shrink-0">
                          <span className="size-1.5 rounded-full bg-cyan-400" />
                          <span>{item.name}</span>
                        </dt>
                        <dd className="font-mono text-[11px] text-[var(--system-ink-45)] sm:text-right">
                          {item.context}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
