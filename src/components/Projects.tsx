"use client";

import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects({ chapterNum = "01" }: { chapterNum?: string }) {
  const [syncedSlideIndex, setSyncedSlideIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let isIntersecting = true;

    if (typeof window !== "undefined" && "IntersectionObserver" in window && sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          isIntersecting = entries[0]?.isIntersecting ?? true;
        },
        { rootMargin: "250px" }
      );
      observer.observe(sectionRef.current);

      timer = setInterval(() => {
        if (!isIntersecting || (typeof document !== "undefined" && document.hidden)) return;
        setSyncedSlideIndex((prev) => (prev + 1) % 3);
      }, 5000);

      return () => {
        observer.disconnect();
        if (timer) clearInterval(timer);
      };
    } else {
      timer = setInterval(() => {
        if (typeof document !== "undefined" && document.hidden) return;
        setSyncedSlideIndex((prev) => (prev + 1) % 3);
      }, 5000);

      return () => {
        if (timer) clearInterval(timer);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full border-t border-[var(--system-rule)] bg-[var(--system-paper)] px-6 py-20 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-cyan-400">{chapterNum}</span>
          <span className="h-px w-6 bg-[var(--system-rule)]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--system-ink-70)]">
            SELECTED PRODUCTION WORK
          </span>
        </div>

        {/* Section Title & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="sys-display text-3xl sm:text-4xl lg:text-5xl text-[var(--system-ink)] max-w-[14ch]">
              Shipped systems operating under real demand.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[var(--system-ink-70)] leading-relaxed">
              Problem → Architecture → Verification. Designed for resilience, clean APIs, and transparent team collaboration.
            </p>
          </div>
        </div>

        {/* Projects Dossier Stream */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              syncedSlideIndex={syncedSlideIndex}
              onSelectSlide={setSyncedSlideIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
