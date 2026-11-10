"use client";

import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  glow?: boolean;
  className?: string;
}

export function Logo({
  size = 28,
  glow = true,
  className = "",
  ...props
}: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background Ambient Glow */}
      {glow && (
        <span
          className="absolute inset-0 rounded-full bg-cyan-500/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          aria-hidden="true"
        />
      )}

      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-300 group-hover:scale-105"
        {...props}
      >
        <defs>
          {/* Cyber Neon Gradient */}
          <linearGradient id="logo-cyan-grad" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="45%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>

          {/* Core Shield Background Plate */}
          <linearGradient id="logo-plate-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0e1628" />
            <stop offset="100%" stopColor="#050811" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="logo-core-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Precision Hexagonal Frame */}
        <polygon
          points="32,4 56,18 56,46 32,60 8,46 8,18"
          fill="url(#logo-plate-grad)"
          stroke="url(#logo-cyan-grad)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        />

        {/* Subtle Inner Geometric Guideline */}
        <polygon
          points="32,9 51,20 51,44 32,55 13,44 13,20"
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Diagnostic Corner Nodes */}
        <circle cx="32" cy="4" r="2" fill="#67e8f9" className="transition-transform duration-300 group-hover:scale-125" />
        <circle cx="56" cy="18" r="2" fill="#22d3ee" />
        <circle cx="56" cy="46" r="2" fill="#06b6d4" />
        <circle cx="32" cy="60" r="2" fill="#06b6d4" />
        <circle cx="8" cy="46" r="2" fill="#0891b2" />
        <circle cx="8" cy="18" r="2" fill="#22d3ee" />

        {/* Monogram Glyph: Architectural 'A' Left Apex Stroke */}
        <line
          x1="19"
          y1="45"
          x2="32"
          y2="16"
          stroke="#f8fafc"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Monogram Glyph: 'A' Right Apex Stroke */}
        <path
          d="M 32 16 L 45 45"
          stroke="url(#logo-cyan-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monogram Glyph: 'A' Precision Bridge */}
        <line
          x1="24"
          y1="34"
          x2="40"
          y2="34"
          stroke="#22d3ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Monogram Glyph: 'J' Kinetic Sweep */}
        <path
          d="M 37 26 V 41 C 37 47 32 49 27 49 C 23 49 20 47 18.5 44"
          stroke="url(#logo-cyan-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center Quantum Core Spark */}
        <circle
          cx="32"
          cy="25"
          r="4.5"
          fill="#22d3ee"
          opacity="0.45"
          filter="url(#logo-core-glow)"
          className="group-hover:opacity-80 transition-opacity duration-300"
        />
        <circle cx="32" cy="25" r="2" fill="#ffffff" />
      </svg>
    </div>
  );
}
