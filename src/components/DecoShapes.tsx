/**
 * Subtle decorative shapes using brand colors (Olive Matcha & Night Blue).
 * Positioned absolutely within relative parent sections.
 */

export const DecoCircleOlive = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full bg-olive/[0.12] blur-3xl pointer-events-none ${className}`}
    aria-hidden="true"
  />
);

export const DecoCircleBlue = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full bg-night-blue/[0.10] blur-3xl pointer-events-none ${className}`}
    aria-hidden="true"
  />
);

export const DecoDots = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const dotColor = color === "olive" ? "bg-olive/20" : "bg-night-blue/15";
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <div className="flex gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${dotColor}`} />
        ))}
      </div>
    </div>
  );
};

export const DecoLine = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const lineColor = color === "olive" ? "from-olive/20 via-olive/10" : "from-night-blue/15 via-night-blue/5";
  return (
    <div
      className={`absolute pointer-events-none h-px bg-gradient-to-r ${lineColor} to-transparent ${className}`}
      aria-hidden="true"
    />
  );
};

export const DecoRing = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const ringColor = color === "olive" ? "border-olive/[0.15]" : "border-night-blue/[0.12]";
  return (
    <div
      className={`absolute rounded-full border-2 ${ringColor} pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};
