"use client";

import { useEffect, useRef } from "react";
import type { LoomWalkthrough } from "@/data/projects";
import { sound } from "@/lib/sound";

interface LoomWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  walkthrough: LoomWalkthrough | null;
}

function toEmbedUrl(rawUrl?: string): string | null {
  if (!rawUrl) return null;
  try {
    const parsed = new URL(rawUrl);
    if (parsed.hostname.includes("loom.com")) {
      const shareMatch = parsed.pathname.match(/\/(?:share|embed)\/([a-zA-Z0-9]+)/);
      if (shareMatch?.[1]) {
        return `https://www.loom.com/embed/${shareMatch[1]}?hide_owner=true&hide_share=true&hide_title=true`;
      }
    }
    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.hostname.includes("youtu.be")
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get("v");
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function LoomWalkthroughModal({
  isOpen,
  onClose,
  projectTitle,
  walkthrough,
}: LoomWalkthroughModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Fallback for browsers without <dialog closedby="any"> support (e.g. Safari)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || "closedBy" in HTMLDialogElement.prototype) return;

    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isDialogContent) {
        dialog.close();
      }
    };

    dialog.addEventListener("click", handleBackdropClick);
    return () => dialog.removeEventListener("click", handleBackdropClick);
  }, []);

  const embedUrl = toEmbedUrl(walkthrough?.url);

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: "any" } as Record<string, string>)}
      onClose={onClose}
      aria-labelledby="loom-modal-title"
      className="m-auto w-[min(92vw,52rem)] max-h-[90svh] rounded-xl border border-[var(--system-rule-bright)] bg-[var(--system-paper)] text-[var(--system-ink)] p-0 shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-md"
    >
      {walkthrough && (
        <div className="flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between gap-4 border-b border-[var(--system-rule)] bg-[var(--system-paper-2)] px-5 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan-400">
                <span className="size-1.5 rounded-full bg-cyan-400" />
                <span>LOOM WALKTHROUGH // {walkthrough.duration} MIN</span>
              </div>
              <h2
                id="loom-modal-title"
                className="sys-display mt-1 truncate text-base sm:text-lg font-semibold text-[var(--system-ink)]"
              >
                {walkthrough.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                dialogRef.current?.close();
              }}
              aria-label={`Close ${projectTitle} walkthrough`}
              className="shrink-0 rounded-md border border-[var(--system-rule)] bg-[var(--system-paper-card)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--system-ink-70)] hover:border-cyan-400 hover:text-[var(--system-ink)] transition-colors"
            >
              ESC / CLOSE
            </button>
          </div>

          {/* Video Embed or Walkthrough Placeholder Slate */}
          <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
            {embedUrl ? (
              <div className="aspect-video w-full rounded-lg border border-[var(--system-rule)] bg-black">
                <iframe
                  src={embedUrl}
                  title={`${projectTitle} 2-minute technical walkthrough`}
                  className="h-full w-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative rounded-lg border border-dashed border-cyan-400/40 bg-[var(--system-paper-2)] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-950/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    2-MIN LOOM EMBED SLOT READY
                  </span>
                  <span className="font-mono text-[11px] text-[var(--system-ink-45)]">
                    ENV: {walkthrough.envKey}
                  </span>
                </div>

                <p className="text-sm text-[var(--system-ink-70)] leading-relaxed mb-5">
                  Interactive Loom player slot configured for <strong className="text-[var(--system-ink)]">{projectTitle}</strong>. Drop a Loom share URL into <code className="font-mono text-xs text-cyan-400">{walkthrough.envKey}</code> to render the embedded 2-minute engineering walkthrough directly here.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  {walkthrough.outline.map((item) => (
                    <div
                      key={item.time}
                      className="rounded border border-[var(--system-rule)] bg-[var(--system-paper)] p-3"
                    >
                      <span className="text-cyan-400 block text-[10px] mb-1">
                        [{item.time}]
                      </span>
                      <span className="text-[var(--system-ink)] leading-snug block">
                        {item.topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer actions inside modal */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--system-rule)] pt-4 font-mono text-xs">
              <span className="text-[var(--system-ink-45)]">
                CASE STUDY: {projectTitle.toUpperCase()}
              </span>
              {walkthrough.url && (
                <a
                  href={walkthrough.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline"
                >
                  <span>OPEN EXTERNAL VIDEO</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}

