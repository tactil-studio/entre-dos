/**
 * Decorative shapes using brand colors (Olive #4D4D07, Night Blue #00075A).
 * Positioned absolutely within relative parent sections.
 */

export const DecoCircleOlive = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ backgroundColor: "rgba(77, 77, 7, 0.06)", filter: "blur(40px)" }}
    aria-hidden="true"
  />
);

export const DecoCircleBlue = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ backgroundColor: "rgba(0, 7, 90, 0.05)", filter: "blur(40px)" }}
    aria-hidden="true"
  />
);

export const DecoRing = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      border: `1.5px solid ${color === "olive" ? "rgba(77, 77, 7, 0.10)" : "rgba(0, 7, 90, 0.08)"}`,
    }}
    aria-hidden="true"
  />
);

export const DecoLine = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => {
  const c = color === "olive" ? "77, 77, 7" : "0, 7, 90";
  return (
    <div
      className={`absolute pointer-events-none h-px ${className}`}
      style={{
        background: `linear-gradient(to right, rgba(${c}, 0.15), rgba(${c}, 0.04), transparent)`,
      }}
      aria-hidden="true"
    />
  );
};

/** Small solid dot accent */
export const DecoDot = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      backgroundColor: color === "olive" ? "rgba(77, 77, 7, 0.12)" : "rgba(0, 7, 90, 0.10)",
    }}
    aria-hidden="true"
  />
);
