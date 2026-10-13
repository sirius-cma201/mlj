export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Subtle architectural background grid */}
      <div className="sys-fine-grid absolute inset-0 opacity-25" />
      {/* Soft atmospheric gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-cyan-500/[0.03] blur-[140px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 h-[500px] w-[600px] bg-purple-500/[0.03] blur-[150px] rounded-full" />
    </div>
  );
}
