"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project, LoomWalkthrough } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/sound";

type ProjectCardProps = {
  project: Project;
  index: number;
  syncedSlideIndex?: number;
  onSelectSlide?: (idx: number) => void;
  onOpenWalkthrough?: (projectTitle: string, walkthrough: LoomWalkthrough) => void;
};

export function ProjectCard({
  project,
  index,
  syncedSlideIndex,
  onSelectSlide,
  onOpenWalkthrough,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [localSlide, setLocalSlide] = useState(0);

  const slides =
    project.images && project.images.length > 0
      ? project.images
      : [{ src: project.image, label: "PREVIEW", caption: project.title }];

  const currentSlide =
    syncedSlideIndex !== undefined ? syncedSlideIndex % slides.length : localSlide;
  const activeSlide = slides[currentSlide] || slides[0];

  const formattedIndex = String(index + 1).padStart(2, "0");

  const stackRows = [
    { label: "FRONTEND", items: project.stackSummary.frontend },
    { label: "BACKEND", items: project.stackSummary.backend },
    { label: "DATA & INFRA", items: project.stackSummary.dataInfra },
    { label: "AI SYSTEMS", items: project.stackSummary.ai },
  ].filter((row) => row.items && row.items.length > 0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`sys-card sys-corners rounded-xl overflow-hidden p-5 sm:p-8 md:p-10 transition-all ${
        project.featured ? "border-[var(--system-rule-bright)]" : ""
      }`}
      data-cursor-label="INSPECT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-6 lg:gap-x-12">
        {/* Preview Plate + Walkthrough Card: FIRST on mobile (order-1), right column on desktop */}
        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 space-y-4">
          <div className="group/plate relative aspect-[16/10] w-full rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.src}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={activeSlide.src}
                  alt={`${project.title} - ${activeSlide.label}`}
                  fill
                  priority={index === 0 && currentSlide === 0}
                  loading={index === 0 && currentSlide === 0 ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
            </AnimatePresence>

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    const prevIdx = (currentSlide - 1 + slides.length) % slides.length;
                    if (onSelectSlide) {
                      onSelectSlide(prevIdx);
                    } else {
                      setLocalSlide(prevIdx);
                    }
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white hover:text-cyan-400 hover:border-cyan-400/60 flex items-center justify-center transition-all opacity-0 group-hover/plate:opacity-100 shadow-lg pointer-events-auto"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M8 2L4 6L8 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                    const nextIdx = (currentSlide + 1) % slides.length;
                    if (onSelectSlide) {
                      onSelectSlide(nextIdx);
                    } else {
                      setLocalSlide(nextIdx);
                    }
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white hover:text-cyan-400 hover:border-cyan-400/60 flex items-center justify-center transition-all opacity-0 group-hover/plate:opacity-100 shadow-lg pointer-events-auto"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M4 2L8 6L4 10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-end justify-between gap-2 pointer-events-none">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap mb-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-400/40 px-1.5 py-0.5 rounded backdrop-blur-sm">
                    {currentSlide === 0
                      ? "AI VISION"
                      : currentSlide === 1
                      ? "LIVE PRODUCTION"
                      : "BLUEPRINT"}
                  </span>
                  <span className="font-mono text-[9px] text-[var(--system-ink-70)] bg-black/70 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                    SYS_ID: {project.id}
                  </span>
                </div>
                {activeSlide.caption && (
                  <p className="font-mono text-[10px] text-neutral-300 truncate max-w-[180px] sm:max-w-[280px]">
                    {activeSlide.caption}
                  </p>
                )}
              </div>

              <div className="pointer-events-auto flex items-center gap-0.5 p-0.5 bg-black/85 backdrop-blur-md rounded border border-white/15 shadow-xl shrink-0">
                {slides.map((slide, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                      if (onSelectSlide) {
                        onSelectSlide(idx);
                      } else {
                        setLocalSlide(idx);
                      }
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`font-mono text-[9px] tracking-wider px-1.5 py-0.5 rounded transition-all ${
                      currentSlide === idx
                        ? "bg-cyan-400 text-black font-bold shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                        : "text-[var(--system-ink-70)] hover:text-white hover:bg-white/10"
                    }`}
                    title={slide.label}
                  >
                    {idx === 0 ? "AI" : idx === 1 ? "PROD" : "BLUEPRINT"}
                  </button>
                ))}
                <span className="font-mono text-[9px] text-white/40 px-1 border-l border-white/10">
                  {String(currentSlide + 1).padStart(2, "0")}/
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* 2-Min Loom Walkthrough Trigger (rendered when walkthrough video exists) */}
          {project.loomWalkthrough.url && (
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onOpenWalkthrough?.(project.title, project.loomWalkthrough);
              }}
              onMouseEnter={() => sound.playHover()}
              className="w-full group/loom flex items-center justify-between gap-3 rounded-lg border border-cyan-400/35 bg-[var(--system-paper)]/70 px-4 py-3 text-left transition-all hover:border-cyan-400 hover:bg-cyan-950/20"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-cyan-400/40 bg-cyan-950/40 text-cyan-400 group-hover/loom:bg-cyan-400 group-hover/loom:text-black transition-colors">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                    <path d="M1 1l8 5-8 5V1z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                    VIDEO WALKTHROUGH · {project.loomWalkthrough.duration} MIN
                  </div>
                  <div className="truncate font-mono text-xs text-[var(--system-ink)]">
                    {project.loomWalkthrough.title}
                  </div>
                </div>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-[var(--system-ink-45)] group-hover/loom:text-cyan-400">
                WATCH ↗
              </span>
            </button>
          )}
        </div>

        {/* Left Column: Metadata, Problem -> Technical Architecture (order-2 on mobile, left on desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col justify-between">
          <div>
            {/* Header: Index, Role & Status */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--system-rule)] pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-cyan-400">{formattedIndex}</span>
                <span className="h-px w-4 bg-[var(--system-rule)]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--system-ink-70)]">
                  {project.role}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.organization && (
                  <span className="rounded-full border border-[var(--system-rule)] bg-[var(--system-paper)] px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-[var(--system-ink-70)]">
                    AT {project.organization.toUpperCase()}
                  </span>
                )}
                {project.featured && (
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-950/30 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-cyan-300">
                    FEATURED CASE STUDY
                  </span>
                )}
                {project.status && (
                  <span className="rounded-full border border-amber-400/40 bg-amber-950/30 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-amber-300">
                    {project.status}
                  </span>
                )}
              </div>
            </div>

            {/* Project Title & Tagline */}
            <h3 className="sys-display text-2xl sm:text-3xl lg:text-4xl text-[var(--system-ink)] font-bold">
              {project.title}
            </h3>
            <p className="mt-1.5 font-mono text-xs text-cyan-400/90 mb-5">{project.tagline}</p>

            {/* Framework Step 1: THE PROBLEM */}
            <div className="space-y-5 text-sm leading-relaxed text-[var(--system-ink-70)]">
              <div className="rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/40 p-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--system-ink-45)] block mb-1.5">
                  01 // THE PROBLEM
                </span>
                <p>{project.problem}</p>
              </div>

              {/* Framework Step 2: THE TECHNICAL ARCHITECTURE */}
              <div className="rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/40 p-4 space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 block">
                  02 // TECHNICAL ARCHITECTURE
                </span>
                <p className="text-[var(--system-ink)]">{project.architecture.summary}</p>
                <div className="grid grid-cols-1 gap-2.5 pt-2 border-t border-[var(--system-rule)]">
                  {project.architecture.layers.map((item) => (
                    <div key={item.layer} className="text-xs leading-relaxed">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-300 mr-2">
                        [{item.layer}]
                      </span>
                      <span className="text-[var(--system-ink-70)]">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clean Categorized Stack Strip (no messy badge walls) */}
            <div className="mt-5 rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/30 p-3.5 space-y-2 font-mono text-[11px]">
              {stackRows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
                >
                  <span className="text-[10px] uppercase tracking-wider text-[var(--system-ink-45)] sm:w-28 shrink-0">
                    {row.label}:
                  </span>
                  <span className="text-[var(--system-ink)]">
                    {row.items?.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs: Live, 2-Min Loom, Clean GitHub Repo Link */}
          <div className="mt-7 pt-5 border-t border-[var(--system-rule)] flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="sys-btn-primary group !px-4 !py-2.5 !text-[11px] !tracking-wider !gap-2"
                  data-cursor-label="VISIT"
                >
                  <span>{project.links.liveLabel || "LIVE PLATFORM"}</span>
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

              {project.links.secondaryLive && (
                <a
                  href={project.links.secondaryLive.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="sys-btn-secondary group !px-4 !py-2.5 !text-[11px] !tracking-wider !gap-2"
                  data-cursor-label="VISIT"
                >
                  <span>{project.links.secondaryLive.label}</span>
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

              {project.links.github && project.links.repoStatus !== "private" && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="sys-btn-secondary group !px-4 !py-2.5 !text-[11px] !tracking-wider !gap-2"
                  data-cursor-label="CODE"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="shrink-0 text-cyan-400"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  <span>{project.links.repoLabel || "GITHUB REPO"}</span>
                </a>
              )}

              {project.loomWalkthrough.url && (
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onOpenWalkthrough?.(project.title, project.loomWalkthrough);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="sys-btn-secondary group !px-4 !py-2.5 !text-[11px] !tracking-wider !gap-2 border-cyan-400/35 hover:border-cyan-400"
                  data-cursor-label="LOOM"
                >
                  <span className="text-cyan-400">▶</span>
                  <span>2-MIN WALKTHROUGH</span>
                </button>
              )}
            </div>

            {project.contributions && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsExpanded(!isExpanded);
                }}
                className="w-full sm:w-auto sm:ml-auto text-center sm:text-right font-mono text-xs text-[var(--system-ink-45)] hover:text-[var(--system-ink)] transition-colors flex items-center justify-center sm:justify-end gap-1.5 py-1"
              >
                <span>{isExpanded ? "HIDE IMPLEMENTATION LOG" : "IMPLEMENTATION LOG"}</span>
                <span className="text-cyan-400">{isExpanded ? "↑" : "↓"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Framework Step 3: MEASURED IMPACT & OUTCOMES (bottom right on desktop, third on mobile) */}
        <div className="order-3 lg:order-3 lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <div className="rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/50 p-5 h-full">
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block mb-3">
              03 // MEASURED IMPACT &amp; OUTCOMES
            </span>
            <ul className="space-y-3 font-mono text-xs text-[var(--system-ink-70)]">
              {project.impact.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-emerald-400 mt-0.5 shrink-0">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Expandable Implementation Contributions Drawer */}
      {project.contributions && isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-8 border-t border-[var(--system-rule)] pt-6"
        >
          <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 block mb-4">
            ENGINEERING IMPLEMENTATION DETAILS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs text-[var(--system-ink-70)]">
            {project.contributions.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 bg-[var(--system-paper)]/40 p-3 rounded border border-[var(--system-rule)]"
              >
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
