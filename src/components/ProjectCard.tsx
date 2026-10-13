"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`sys-card sys-corners rounded-xl overflow-hidden p-6 sm:p-8 md:p-10 transition-all ${
        project.featured ? "border-[var(--system-rule-bright)]" : ""
      }`}
      data-cursor-label="INSPECT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Metadata, Title, Problem & Tech */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* Header: Index & Tagline */}
            <div className="flex items-center justify-between border-b border-[var(--system-rule)] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyan-400">{formattedIndex}</span>
                <span className="h-px w-4 bg-[var(--system-rule)]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--system-ink-70)]">
                  {project.tagline}
                </span>
              </div>
              {project.featured && (
                <span className="rounded-full border border-cyan-400/40 bg-cyan-950/30 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-cyan-300">
                  FEATURED SYSTEM
                </span>
              )}
            </div>

            {/* Project Title */}
            <h3 className="sys-display text-2xl sm:text-3xl lg:text-4xl text-[var(--system-ink)] font-bold mb-4">
              {project.title}
            </h3>

            {/* Problem & Architecture Breakdown */}
            <div className="space-y-4 text-sm leading-relaxed text-[var(--system-ink-70)]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--system-ink-45)] block mb-1">
                  CHALLENGE &amp; CONTEXT
                </span>
                <p>{project.problem}</p>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 block mb-1">
                  ENGINEERING SOLUTION
                </span>
                <p className="text-[var(--system-ink)]">{project.solution}</p>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--system-ink-45)] block mb-2">
                STACK &amp; INFRASTRUCTURE
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-[var(--system-rule)] bg-[var(--system-paper)] px-2.5 py-1 font-mono text-[11px] text-[var(--system-ink)] hover:border-cyan-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-[var(--system-rule)]">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="sys-btn-primary group"
                data-cursor-label="VISIT"
              >
                <span>VISIT PLATFORM</span>
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
            )}

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={project.links.live ? "sys-btn-secondary group" : "sys-btn-primary group"}
                data-cursor-label="CODE"
              >
                <span>VIEW SOURCE</span>
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
            )}

            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="sys-btn-secondary group"
                data-cursor-label="DEMO"
              >
                <span>WATCH DEMO</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                  className="sys-cross-icon shrink-0"
                >
                  <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            )}

            {project.contributions && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-auto font-mono text-xs text-[var(--system-ink-45)] hover:text-[var(--system-ink)] transition-colors flex items-center gap-1.5"
              >
                <span>{isExpanded ? "HIDE DETAILS" : "VIEW CONTRIBUTIONS"}</span>
                <span className="text-cyan-400">{isExpanded ? "↑" : "↓"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Visual Preview & Measured Impact */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          {/* Card Preview Plate */}
          <div className="relative aspect-[16/10] w-full rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              priority={project.featured}
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--system-paper)]/80 via-transparent to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-[var(--system-ink-70)] bg-black/70 px-2 py-0.5 rounded border border-white/10">
              SYS_ID: {project.id}
            </div>
          </div>

          {/* Measured Impact List */}
          <div className="mt-6 rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/50 p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block mb-3">
              MEASURED IMPACT &amp; OUTCOMES
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-[var(--system-ink-70)]">
              {project.impact.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-cyan-400 mt-0.5">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Expandable Contributions Drawer */}
      {project.contributions && isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-8 border-t border-[var(--system-rule)] pt-6"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 block mb-4">
            DETAILED TECHNICAL CONTRIBUTIONS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs text-[var(--system-ink-70)]">
            {project.contributions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-[var(--system-paper)]/40 p-3 rounded border border-[var(--system-rule)]">
                <span className="text-cyan-400 font-bold">[{idx + 1}]</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}
