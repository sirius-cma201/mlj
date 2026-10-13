type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div className={`glass-card ${hover ? "glass-card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}
