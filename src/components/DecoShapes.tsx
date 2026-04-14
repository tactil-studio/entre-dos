/**
 * Subtle decorative shapes using brand colors (Olive Matcha & Night Blue).
 * Positioned absolutely within relative parent sections.
 * Very low opacity so they don't distract from content.
 */

export const DecoCircleOlive = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full bg-olive/[0.06] blur-2xl pointer-events-none ${className}`}
    aria-hidden="true"
  />
);

export const DecoCircleBlue = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full bg-night-blue/[0.05] blur-2xl pointer-events-none ${className}`}
    aria-hidden="true"
  />
);

export const DecoDots = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const dotColor = color === "olive" ? "bg-olive/[0.08]" : "bg-night-blue/[0.07]";
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <div className="flex gap-3">
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      </div>
    </div>
  );
};

export const DecoLine = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const lineColor = color === "olive" ? "from-olive/[0.12] via-olive/[0.04]" : "from-night-blue/[0.10] via-night-blue/[0.03]";
  return (
    <div
      className={`absolute pointer-events-none h-px bg-gradient-to-r ${lineColor} to-transparent ${className}`}
      aria-hidden="true"
    />
  );
};

export const DecoRing = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const ringColor = color === "olive" ? "border-olive/[0.08]" : "border-night-blue/[0.06]";
  return (
    <div
      className={`absolute rounded-full border-2 ${ringColor} pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
