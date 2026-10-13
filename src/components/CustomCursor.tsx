"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

function subscribe() {
  return () => {};
}

function getClientMounted() {
  return true;
}

function getServerMounted() {
  return false;
}

export function CustomCursor() {
  const isMounted = useSyncExternalStore(subscribe, getClientMounted, getServerMounted);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high precision feel
  const springX = useSpring(mouseX, { stiffness: 600, damping: 36, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 600, damping: 36, mass: 0.2 });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for custom cursor label attribute
      const labelElement = target.closest("[data-cursor-label]") as HTMLElement | null;
      if (labelElement) {
        setCursorLabel(labelElement.getAttribute("data-cursor-label"));
        setIsHovered(true);
        return;
      }

      // Check for interactive elements
      const isInteractive = target.closest("a, button, input, textarea, [role='button'], .clickable");
      if (isInteractive) {
        setCursorLabel(null);
        setIsHovered(true);
      } else {
        setCursorLabel(null);
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isMounted || (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches)) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (hover: hover) and (pointer: fine) {
          a, button, [role="button"], input, textarea {
            cursor: pointer;
          }
        }
      `}} />

      {/* Main Reticle Pointer */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {cursorLabel ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1.5 rounded-full border border-white bg-black/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md"
          >
            <span className="size-1 rounded-full bg-cyan-400" />
            <span>{cursorLabel}</span>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              scale: isClicking ? 0.8 : isHovered ? 1.6 : 1,
              width: isHovered ? 38 : 22,
              height: isHovered ? 38 : 22,
            }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
            className="relative flex items-center justify-center rounded-full border border-white/60"
          >
            {/* Center crosshair dot */}
            <motion.div
              animate={{
                scale: isHovered ? 0 : 1,
                opacity: isHovered ? 0 : 1,
              }}
              className="size-1 rounded-full bg-white"
            />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
