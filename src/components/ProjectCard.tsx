"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/sound";

type ProjectCardProps = {
  project: Project;
  index: number;
  syncedSlideIndex?: number;
  onSelectSlide?: (idx: number) => void;
};

export function ProjectCard({
  project,
  index,
  syncedSlideIndex,
  onSelectSlide,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isStackExpanded, setIsStackExpanded] = useState(false);
  const [localSlide, setLocalSlide] = useState(0);

  const slides = project.images && project.images.length > 0
    ? project.images
    : [{ src: project.image, label: "PREVIEW", caption: project.title }];

  const currentSlide =
    syncedSlideIndex !== undefined ? syncedSlideIndex % slides.length : localSlide;
  const activeSlide = slides[currentSlide] || slides[0];

  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`sys-card sys-corners rounded-xl overflow-hidden p-5 sm:p-8 md:p-10 transition-all ${
        project.featured ? "border-[var(--system-rule-bright)]" : ""
      }`}
      data-cursor-label="INSPECT"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-6 lg:gap-x-12">
        {/* Preview Plate: FIRST on mobile (order-1), top right on desktop (lg:order-2) */}
        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <div className="group/plate relative aspect-[16/10] w-full rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)] overflow-hidden">
            {/* Slide Images with Framer Motion Transition */}
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

            {/* Prev / Next Arrows */}
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
                    <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}

            {/* Subtle Gradient Scrim at Bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

            {/* Bottom Caption & Telemetry Plate with Micro Switcher at Bottom Right */}
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
                  {project.status && (
                    <span className="font-mono text-[9px] text-amber-300 bg-black/80 px-1.5 py-0.5 rounded border border-amber-400/40 backdrop-blur-sm">
                      {project.status}
                    </span>
                  )}
                </div>
                {activeSlide.caption && (
                  <p className="font-mono text-[10px] text-neutral-300 truncate max-w-[180px] sm:max-w-[280px]">
                    {activeSlide.caption}
                  </p>
                )}
              </div>

              {/* Way smaller switcher on the bottom right */}
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
                  {String(currentSlide + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Left Column: Metadata, Title, Problem & Tech (order-2 on mobile, left on desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col justify-between">
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
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-950/30 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-cyan-300">
                    FEATURED SYSTEM
                  </span>
                )}
                {project.status && (
                  <span className="rounded-full border border-amber-400/40 bg-amber-950/30 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-amber-300">
                    {project.status}
                  </span>
                )}
              </div>
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

            {/* Tech Stack Badges (Collapsible on mobile) */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsStackExpanded(!isStackExpanded);
                }}
                className="w-full flex items-center justify-between py-1 sm:py-0 font-mono text-[11px] uppercase tracking-wider text-[var(--system-ink-70)] hover:text-cyan-400 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[var(--system-ink-45)] block">
                    STACK &amp; INFRASTRUCTURE
                  </span>
                  <span className="text-cyan-400 text-[10px] font-mono sm:hidden">
                    ({project.tech.length})
                  </span>
                </div>
                <div className="sm:hidden flex items-center gap-1 text-[10px] text-cyan-400 font-mono">
                  <span>{isStackExpanded ? "COLLAPSE" : "EXPAND"}</span>
                  <span>{isStackExpanded ? "▲" : "▼"}</span>
                </div>
              </button>

              <div className={`mt-2.5 ${isStackExpanded ? "block" : "hidden sm:block"}`}>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[var(--system-rule)] bg-[var(--system-paper)] px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-[11px] text-[var(--system-ink)] hover:border-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-6 border-t border-[var(--system-rule)] flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sys-btn-primary group !px-3 !py-2 sm:!px-7 sm:!py-3.5 !text-[10px] sm:!text-[0.78rem] !gap-1.5 sm:!gap-3.5 justify-center text-center ${
                    project.links.secondaryLive ? "flex-1 sm:flex-initial" : "w-full sm:w-auto"
                  }`}
                  data-cursor-label="VISIT"
                >
                  <span className="truncate">{project.links.liveLabel || "VISIT PLATFORM"}</span>
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
                  className="sys-btn-secondary group !px-3 !py-2 sm:!px-7 sm:!py-3.5 !text-[10px] sm:!text-[0.78rem] !gap-1.5 sm:!gap-3.5 justify-center text-center flex-1 sm:flex-initial"
                  data-cursor-label="VISIT"
                >
                  <span className="truncate">{project.links.secondaryLive.label}</span>
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

              {/* View Source & Watch Demo: smaller and on the same horizontal line on mobile */}
              {(project.links.github || project.links.demo) && (
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.links.live ? "sys-btn-secondary" : "sys-btn-primary"
                      } group !px-2.5 !py-2 sm:!px-7 sm:!py-3.5 !text-[10px] sm:!text-[0.78rem] !gap-1.5 sm:!gap-3.5 justify-center text-center flex-1 sm:flex-initial`}
                      data-cursor-label="CODE"
                    >
                      <span className="truncate">VIEW SOURCE</span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        className="sys-arrow-icon shrink-0 hidden xs:inline-block"
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
                      className="sys-btn-secondary group !px-2.5 !py-2 sm:!px-7 sm:!py-3.5 !text-[10px] sm:!text-[0.78rem] !gap-1.5 sm:!gap-3.5 justify-center text-center flex-1 sm:flex-initial"
                      data-cursor-label="DEMO"
                    >
                      <span className="truncate">WATCH DEMO</span>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        aria-hidden="true"
                        className="sys-cross-icon shrink-0 hidden xs:inline-block"
                      >
                        <path d="M5 0v10M0 5h10" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </a>
                  )}
                </div>
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
                <span>{isExpanded ? "HIDE DETAILS" : "VIEW CONTRIBUTIONS"}</span>
                <span className="text-cyan-400">{isExpanded ? "↑" : "↓"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Measured Impact: THIRD on mobile (order-3), bottom right on desktop (lg:order-3) */}
        <div className="order-3 lg:order-3 lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <div className="rounded-lg border border-[var(--system-rule)] bg-[var(--system-paper)]/50 p-5">
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
