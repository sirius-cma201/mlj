"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const homeSections = [
  { id: "hero", label: "system", num: "01" },
  { id: "metrics", label: "metrics", num: "02" },
  { id: "contact", label: "transmission", num: "03" },
];

const workSections = [
  { id: "work", label: "projects", num: "01" },
  { id: "architecture", label: "architecture", num: "02" },
  { id: "contact", label: "transmission", num: "03" },
];

export function NavigationRail() {
  const pathname = usePathname();
  const isWorkPage = pathname === "/work" || pathname === "/projects";
  const sections = isWorkPage ? workSections : homeSections;

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    setActiveSection(sections[0].id);
  }, [pathname, sections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const activeIdx = Math.max(0, sections.findIndex((s) => s.id === activeSection));
  const activeItem = sections[activeIdx] || sections[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const totalCount = String(sections.length).padStart(2, "0");

  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex select-none"
    >
      {/* Current Active Section Number */}
      <span className="font-mono text-[11px] font-medium tracking-widest text-[var(--system-ink)]">
        {activeItem.num}
      </span>

      {/* Vertical Hairline Progress Track */}
      <div className="pointer-events-auto relative h-36 w-px bg-[var(--system-rule)]">
        {/* Dynamic sliding indicator tick */}
        <motion.div
          className="absolute -left-[3px] h-3 w-[7px] bg-[var(--system-ink)]"
          style={{
            top: `${(activeIdx / Math.max(1, sections.length - 1)) * 88}%`,
            transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Clickable section checkpoints */}
        {sections.map((sec, i) => (
          <button
            key={sec.id}
            type="button"
            onClick={() => scrollTo(sec.id)}
            aria-label={`Jump to ${sec.label}`}
            className="absolute -left-2.5 h-3 w-6 group flex items-center justify-center focus:outline-none"
            style={{ top: `${(i / Math.max(1, sections.length - 1)) * 92}%` }}
          >
            <span
              className={`block h-1 w-1 rounded-full transition-all duration-300 ${
                activeSection === sec.id
                  ? "bg-cyan-400 scale-125"
                  : "bg-[var(--system-ink-25)] group-hover:bg-[var(--system-ink-70)]"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Total sections count */}
      <span className="font-mono text-[10px] tracking-widest text-[var(--system-ink-25)]">
        {totalCount}
      </span>

      {/* Vertical Writing-Mode Label */}
      <div
        className="mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--system-ink-45)] transition-colors duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        {activeItem.label}
      </div>
    </aside>
  );
}
