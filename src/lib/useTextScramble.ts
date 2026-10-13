"use client";

import { useState, useEffect } from "react";

const CHARS = "ABCDEF0123456789!<>-_\\/[]{}—=+*^?#";

export function useTextScramble(finalText: string, trigger: boolean = true) {
  const [displayText, setDisplayText] = useState(finalText);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const length = finalText.length;

    const interval = setInterval(() => {
      setDisplayText(
        finalText
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return finalText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 28);

    return () => clearInterval(interval);
  }, [finalText, trigger]);

  return displayText;
}
