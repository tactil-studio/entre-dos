/**
 * Decorative shapes using brand colors (Olive #4D4D07, Night Blue #00075A).
 * Uses inline styles with actual hex colors for reliable rendering.
 */

export const DecoCircleOlive = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ backgroundColor: "rgba(77, 77, 7, 0.08)", filter: "blur(60px)" }}
    aria-hidden="true"
  />
);

export const DecoCircleBlue = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{ backgroundColor: "rgba(0, 7, 90, 0.07)", filter: "blur(60px)" }}
    aria-hidden="true"
  />
);

export const DecoRing = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => (
  <div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      border: `2px solid ${color === "olive" ? "rgba(77, 77, 7, 0.12)" : "rgba(0, 7, 90, 0.10)"}`,
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
        background: `linear-gradient(to right, rgba(${c}, 0.18), rgba(${c}, 0.05), transparent)`,
      }}
      aria-hidden="true"
    />
  );
};

export const DecoDot = ({ className = "", color = "olive" }: { className?: string; color?: "olive" | "blue" }) => (
  <div
    className={`absolute w-2 h-2 rounded-full pointer-events-none ${className}`}
    style={{
      backgroundColor: color === "olive" ? "rgba(77, 77, 7, 0.15)" : "rgba(0, 7, 90, 0.12)",
    }}
    aria-hidden="true"
  />
);
