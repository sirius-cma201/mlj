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
            <p><span className="text-white font-bold">martha</span> - Deep dive into Martha AI Support system</p>
            <p><span className="text-white font-bold">fantasy</span> - Deep dive into Fantasy Ikoyi (Spatial Commerce &amp; Auctions)</p>
            <p><span className="text-white font-bold">blackpride</span> - Deep dive into Black Pride (Mental Wellness Ecosystem &amp; LMS)</p>
            <p><span className="text-white font-bold">griot</span> - Deep dive into WeAreGriot (Ticketing &amp; Merch Ecosystem)</p>
            <p><span className="text-white font-bold">crypto</span> - Inspect Crypto Tax Manager build status</p>
            <p><span className="text-white font-bold">stack</span> - View technologies &amp; architecture</p>
            <p><span className="text-white font-bold">contact</span> - Show communication channels</p>
            <p><span className="text-white font-bold">clear</span> - Clear terminal buffer</p>
            <p><span className="text-white font-bold">exit</span> - Close terminal console</p>
            <p className="text-cyan-400/50 pt-1 text-[11px]">// Classified protocols: try &apos;jarvis&apos;, &apos;friday&apos;, &apos;stark&apos;, &apos;avengers&apos;</p>
          </div>
        );
        break;

      case "projects":
        res = (
          <div className="space-y-2 text-xs">
            {projects.map((p) => (
              <div key={p.id} className="border-l border-white/20 pl-2">
                <p className="font-bold text-cyan-300">
                  {p.title} <span className="text-white/40">({p.tagline})</span>{" "}
                  {p.status && <span className="text-amber-400 font-mono">[{p.status}]</span>}
                </p>
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
            <p>• Handed over at ~60% completion; stabilized &amp; shipped to production as sole engineer.</p>
            <p>• Zero-asset procedural Web Audio API SFX engine (15+ mathematical waveforms).</p>
            <p>• In-browser vector garment customizer (&quot;MAKE SOMETHING&quot;) with SVG clipping matrices.</p>
            <p>• Real-time SSE live art auction platform with passwordless magic-link JWT auth.</p>
            <p>• Google &lt;model-viewer&gt; WebXR 3D spatial artifact walkthroughs &amp; AR projection.</p>
            <p>• Multi-currency Zap Pay &amp; Stripe rails with 100% operational uptime on AWS EC2/PM2.</p>
            <p className="pt-1"><a href="https://fantasyikoyi.com" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-mono">Visit fantasyikoyi.com ↗</a></p>
          </div>
        );
        break;

      case "griot":
      case "wearegriot":
        res = (
          <div className="space-y-1 text-xs text-white/80">
            <p className="text-amber-400 font-bold">WEAREGRIOT // Arts &amp; Culture Digital Ecosystem</p>
            <p>• High-concurrency ticketing engine with temporary reservation holds &amp; webhook rollback.</p>
            <p>• Door redemption API with 6-character alphanumeric redemption codes &amp; anti-double-scan checks.</p>
            <p>• E-commerce merch store with atomic variant stock decrements &amp; persistent Zustand cart state.</p>
            <p>• Custom Sanity Studio v3 React operations tables with GROQ sync and one-click PDF/CSV exports.</p>
            <p>• Philanthropic 3-step donation wizard supporting one-time/recurring contributions via Stripe &amp; PayPal.</p>
            <div className="pt-1">
              <a href="https://wearegriot.com" target="_blank" rel="noreferrer" className="text-amber-300 underline font-mono">Visit wearegriot.com ↗</a>
            </div>
          </div>
        );
        break;

      case "blackpride":
      case "pride":
      case "wellness":
        res = (
          <div className="space-y-1 text-xs text-white/80">
            <p className="text-rose-400 font-bold">BLACK PRIDE // Mental Wellness Ecosystem &amp; Members Portal</p>
            <p>• Lead Frontend / Full-Stack Engineer across Black Pride and Black Pride Canada.</p>
            <p>• Architected centralized Members Portal (WCAG 2.1 AA) serving thousands of 2SLGBTQ+ members.</p>
            <p>• Engineered end-to-end LMS Courses system with relational Mongoose schemas &amp; multi-format player.</p>
            <p>• Built the Healing Hub with streaming somatic therapy routines &amp; protected crisis escalation modals.</p>
            <p>• Spearheaded historical Queer Archive and Education Hub with AWS S3 asset delivery &amp; fuzzy search.</p>
            <p>• Primary code reviewer gatekeeping 100% of frontend PRs with strict TypeScript and 99.9% uptime.</p>
            <div className="pt-1 flex flex-wrap gap-3">
              <a href="https://www.blackprideyyc.org/" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-mono">Visit Black Pride YYC ↗</a>
              <a href="https://blackpride.ca" target="_blank" rel="noreferrer" className="text-rose-300 underline font-mono">Visit Black Pride Canada ↗</a>
            </div>
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
            <div className="pt-1 flex flex-wrap gap-3">
              <a href="https://askmartha.ai" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-mono">Visit askmartha.ai ↗</a>
              <a href="https://www.youtube.com/watch?v=a5WJV5Dghpc" target="_blank" rel="noreferrer" className="text-cyan-300 underline font-mono">Watch Demo Video (YouTube) ↗</a>
            </div>
          </div>
        );
        break;

      case "crypto":
      case "tax":
        res = (
          <div className="space-y-1 text-xs text-white/80">
            <p className="text-amber-400 font-bold">CRYPTO PORTFOLIO &amp; TAX MANAGER // [STILL IN THE WORKS]</p>
            <p>• Multi-chain wallet data ingestion, automated cost-basis computation, and PnL reporting platform.</p>
            <p>• Architecture: Next.js, NestJS, PostgreSQL, Blockchain APIs &amp; ethers.js.</p>
            <p>• Status: In active development.</p>
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

      case "jarvis":
        res = (
          <div className="space-y-1 text-xs text-cyan-300">
            <p className="font-bold text-cyan-400">J.A.R.V.I.S. // STARK PROTOCOL ONLINE</p>
            <p>&ldquo;At your service, sir. All core diagnostics nominal. Clean energy output at 3.0 GJ/s. Protocol: House Party on standby.&rdquo;</p>
            <p className="text-[10px] text-cyan-400/60 font-mono">SYSTEM: MARK-LXXXV FIRMWARE // LATENCY &lt;1ms // ZERO BREACHES DETECTED</p>
          </div>
        );
        break;

      case "friday":
        res = (
          <div className="space-y-1 text-xs text-purple-300">
            <p className="font-bold text-purple-400">F.R.I.D.A.Y. // TACTICAL INTELLIGENCE</p>
            <p>&ldquo;Boss, all backend clusters and neural pipelines are running at peak throughput. Nano-particle dispersion verified.&rdquo;</p>
          </div>
        );
        break;

      case "stark":
      case "ironman":
      case "iamironman":
        res = (
          <div className="space-y-1 text-xs text-amber-300">
            <p className="font-bold text-amber-400">STARK INDUSTRIES // PROPRIETARY ARCHITECTURE</p>
            <p className="italic">&ldquo;Part of the journey is the end.&rdquo;</p>
            <p className="text-white/80">• Arc Reactor clean energy efficiency: 100%</p>
            <p className="text-white/80">• Repulsor telemetry: Calibrated</p>
            <p className="text-white/80">• Proof that Tony Stark has a heart.</p>
          </div>
        );
        break;

      case "avengers":
      case "assemble":
        res = (
          <div className="space-y-1 text-xs text-emerald-300">
            <p className="font-bold text-emerald-400">AVENGERS PROTOCOL // S.H.I.E.L.D. CLEARANCE LEVEL 7</p>
            <p className="italic">&ldquo;There was an idea... to bring together a group of remarkable systems.&rdquo;</p>
            <p className="text-[10px] text-emerald-400/70 font-mono">STATUS: EARTH DEFENSE MESH ACTIVE // COULSON CLEARANCE VERIFIED</p>
          </div>
        );
        break;

      case "wakanda":
        res = (
          <div className="space-y-1 text-xs text-violet-300">
            <p className="font-bold text-violet-400">WAKANDAN DESIGN GROUP // VIBRANIUM MESH</p>
            <p className="italic">&ldquo;Wakanda Forever.&rdquo;</p>
            <p className="text-white/80">• Kinetic energy absorption layer: Active</p>
            <p className="text-white/80">• Nanotech distribution: Synchronized</p>
          </div>
        );
        break;

      case "veronica":
      case "hulkbuster":
        res = (
          <div className="space-y-1 text-xs text-rose-300">
            <p className="font-bold text-rose-400">PROJECT VERONICA // ORBITAL DEPLOYMENT SERVICE</p>
            <p>Geosynchronous satellite cage locked on coordinates. Heavy compute modules standing by for immediate orbital drop.</p>
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
