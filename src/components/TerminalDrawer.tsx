"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { projects, techStack } from "@/data/projects";

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

type CommandLog = {
  command: string;
  response: string | React.ReactNode;
};

export function TerminalDrawer({ isOpen, onClose }: TerminalDrawerProps) {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "init system --profile aj",
      response: "AJ Kernel v2.4 initialized. Production AI & Backend Engineer. Type 'help' for available commands.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let res: React.ReactNode = "";

    switch (cmd) {
      case "help":
        res = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400">Available commands:</p>
            <p><span className="text-white font-bold">projects</span> - View shipped production systems</p>
            <p><span className="text-white font-bold">fantasy</span> - Deep dive into Fantasy Ikoyi (Spatial Commerce &amp; Auctions)</p>
            <p><span className="text-white font-bold">martha</span> - Deep dive into Martha AI Support system</p>
            <p><span className="text-white font-bold">stack</span> - View technologies &amp; architecture</p>
            <p><span className="text-white font-bold">contact</span> - Show communication channels</p>
            <p><span className="text-white font-bold">clear</span> - Clear terminal buffer</p>
            <p><span className="text-white font-bold">exit</span> - Close terminal console</p>
          </div>
        );
        break;

      case "projects":
        res = (
          <div className="space-y-2 text-xs">
            {projects.map((p) => (
              <div key={p.id} className="border-l border-white/20 pl-2">
                <p className="font-bold text-cyan-300">{p.title} <span className="text-white/40">({p.tagline})</span></p>
                <p className="text-white/70">{p.tech.join(" · ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "fantasy":
      case "ikoyi":
      case "fantasyikoyi":
        res = (
          <div className="space-y-1 text-xs text-white/80">
            <p className="text-cyan-400 font-bold">FANTASY IKOYI // Spatial Commerce, Live Auctions &amp; Cultural Club</p>
            <p>• Handed over at ~70% completion; stabilized &amp; shipped to production as sole engineer.</p>
            <p>• Zero-asset procedural Web Audio API SFX engine (15+ mathematical waveforms).</p>
            <p>• In-browser vector garment customizer (&quot;MAKE SOMETHING&quot;) with SVG clipping matrices.</p>
            <p>• Real-time SSE live art auction platform with passwordless magic-link JWT auth.</p>
            <p>• Google &lt;model-viewer&gt; WebXR 3D spatial artifact walkthroughs &amp; AR projection.</p>
            <p>• Multi-currency Zap Pay &amp; Stripe rails with 100% operational uptime on AWS EC2/PM2.</p>
            <p className="pt-1"><a href="https://fantasyikoyi.com" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-mono">Visit fantasyikoyi.com ↗</a></p>
          </div>
        );
        break;

      case "martha":
        res = (
          <div className="space-y-1 text-xs text-white/80">
            <p className="text-cyan-400 font-bold">MARTHA AI // Autonomous Customer Operations</p>
            <p>• 91.7% autonomous resolution measured in production over 3,000+ support tickets.</p>
            <p>• Vector store workflows, NestJS backend, OpenAI LLM integration &amp; role-based RBAC.</p>
            <p>• Zero human intervention required for common customer flows.</p>
          </div>
        );
        break;

      case "stack":
        res = (
          <div className="space-y-1 text-xs">
            <p><span className="text-cyan-400">Languages:</span> {techStack.languages.join(", ")}</p>
            <p><span className="text-purple-400">Backend & DB:</span> {techStack.backend.join(", ")} + {techStack.databases.join(", ")}</p>
            <p><span className="text-emerald-400">AI & Workflows:</span> {techStack.ai.join(", ")}</p>
            <p><span className="text-amber-400">Web3 & Blockchain:</span> {techStack.blockchain.join(", ")}</p>
          </div>
        );
        break;

      case "contact":
        res = (
          <div className="space-y-1 text-xs">
            <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 underline">{siteConfig.email}</a></p>
            <p>GitHub: <a href={siteConfig.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{siteConfig.github}</a></p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        setInput("");
        return;

      case "exit":
      case "quit":
        onClose();
        setInput("");
        return;

      default:
        res = `Command '${cmd}' not recognized. Type 'help' for available system commands.`;
    }

    setLogs((prev) => [...prev, { command: input, response: res }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-[var(--system-rule-bright)] bg-[#09090e] shadow-2xl font-mono text-sm"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[var(--system-rule)] bg-[#0e0e15] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
                <span className="size-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] uppercase tracking-wider text-[var(--system-ink-45)]">
                  aj-kernel // terminal session
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[11px] text-[var(--system-ink-45)] hover:text-white transition-colors"
              >
                ESC TO CLOSE
              </button>
            </div>

            {/* Terminal Body */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 text-[13px] text-zinc-300">
              {logs.map((log, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="text-cyan-400">aj@systems</span>
                    <span>:~$</span>
                    <span className="text-white font-medium">{log.command}</span>
                  </div>
                  <div className="pl-4 text-zinc-300 leading-relaxed">{log.response}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleCommand} className="flex items-center border-t border-[var(--system-rule)] bg-[#0b0b10] px-4 py-3">
              <span className="text-cyan-400 mr-2">aj@systems:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help', 'projects', 'stack', 'martha'..."
                className="flex-1 bg-transparent text-white placeholder-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                className="ml-2 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300"
              >
                RUN
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
