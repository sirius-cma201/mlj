"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    num: "91.7%",
    label: "Autonomous Resolution",
    detail: "MARTHA AI in production on 3,000+ support inquiries without human escalation.",
    tag: "AI WORKFLOWS",
  },
  {
    num: "<85ms",
    label: "P99 API Latency",
    detail: "High-throughput NestJS APIs and query optimization in PostgreSQL.",
    tag: "BACKEND PERF",
  },
  {
    num: "$25M+",
    label: "Handled Volume",
    detail: "Crypto & payment settlement architectures designed for non-stop uptime.",
    tag: "DISTRIBUTED LEDGER",
  },
  {
    num: "100%",
    label: "Type-Safe Delivery",
    detail: "End-to-end TypeScript from relational models to frontend state pipelines.",
    tag: "RELIABILITY",
  },
];

export function Metrics() {
  return (
    <section
      id="metrics"
      className="relative w-full border-t border-[var(--system-rule)] bg-[var(--system-paper)] px-6 py-20 lg:px-12 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-cyan-400">02</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            MEASURED PRODUCTION OUTCOMES
          </span>
        </div>

        {/* Title & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[15ch]">
              Architecture measured in throughput and reliability.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[var(--system-ink-70)] leading-relaxed">
              Software engineering is about moving the needle on operational bottlenecks. Here is how my production systems perform under actual client load.
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="sys-card sys-corners p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-[var(--system-ink-45)]">
                    FIG. 02.{idx + 1}
                  </span>
                  <span className="rounded-full border border-[var(--system-rule)] bg-[var(--system-paper)] px-2 py-0.5 font-mono text-[9px] tracking-wider text-cyan-400">
                    {item.tag}
                  </span>
                </div>

                <div className="sys-display text-4xl sm:text-5xl font-bold text-[var(--system-ink)] group-hover:text-cyan-400 transition-colors">
                  {item.num}
                </div>

                <div className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--system-ink)]">
                  {item.label}
                </div>
              </div>

              <p className="mt-6 font-mono text-xs text-[var(--system-ink-70)] leading-relaxed border-t border-[var(--system-rule)] pt-4">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Architecture Comparison Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 rounded-xl border border-[var(--system-rule)] bg-[var(--system-paper-card)] p-6 sm:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--system-rule)] pb-6 mb-8">
            <div>
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest">
                SYSTEM PIPELINE TOPOLOGY
              </span>
              <h3 className="sys-display text-xl sm:text-2xl mt-1 text-[var(--system-ink)]">
                From Raw Ingestion to Deterministic Execution
              </h3>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs text-[var(--system-ink-45)]">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-cyan-400" />
                <span>ACTIVE ROUTE</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400" />
                <span>CACHE HIT</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="border border-[var(--system-rule)] p-5 rounded-lg bg-[var(--system-paper)]">
              <span className="text-[var(--system-ink-45)]">PHASE 01 //</span>
              <p className="text-[var(--system-ink)] font-bold text-sm mt-1">Multi-Channel Ingestion</p>
              <p className="mt-2 text-[var(--system-ink-70)] leading-relaxed">
                Aggregates REST, WebSockets, and webhook payloads into message brokers with idempotency keys.
              </p>
            </div>

            <div className="border border-[var(--system-rule)] p-5 rounded-lg bg-[var(--system-paper)]">
              <span className="text-cyan-400">PHASE 02 //</span>
              <p className="text-[var(--system-ink)] font-bold text-sm mt-1">Vector Embedding &amp; Logic</p>
              <p className="mt-2 text-[var(--system-ink-70)] leading-relaxed">
                Similarity lookup in high-dimensional vector space blended with deterministic business policies.
              </p>
            </div>

            <div className="border border-[var(--system-rule)] p-5 rounded-lg bg-[var(--system-paper)]">
              <span className="text-emerald-400">PHASE 03 //</span>
              <p className="text-[var(--system-ink)] font-bold text-sm mt-1">Resolution &amp; Audit Trail</p>
              <p className="mt-2 text-[var(--system-ink-70)] leading-relaxed">
                Instant user action dispatched with rollback support, telemetry logs, and structured analytics.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
