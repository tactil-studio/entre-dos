import { Moon, Sun } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { cn } from "@/lib/utils";

interface DayNightToggleProps {
	size?: "compact" | "large" | "icon";
	className?: string;
}

const DayNightToggle = ({ size = "compact", className }: DayNightToggleProps) => {
	const { mode, toggleMode } = useMode();
	const isNight = mode === "night";

	// Icon-only variant (for navbar): two icons side-by-side, the active one highlighted
	if (size === "icon") {
		return (
			<button
				type="button"
				onClick={toggleMode}
				role="switch"
				aria-checked={isNight}
				aria-label={`Cambiar a modo ${isNight ? "día" : "noche"}`}
				className={cn(
					"relative inline-flex items-center gap-1 rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md p-1 transition-colors duration-500",
					className,
				)}
			>
				<span
					className={cn(
						"absolute top-1 bottom-1 w-7 rounded-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
						isNight ? "translate-x-7" : "translate-x-0",
					)}
					style={{ left: "0.25rem" }}
				/>
				<span
					className={cn(
						"relative z-10 flex h-7 w-7 items-center justify-center transition-colors duration-500",
						isNight ? "text-foreground/50" : "text-background",
					)}
				>
					<Sun size={14} strokeWidth={1.75} />
				</span>
				<span
					className={cn(
						"relative z-10 flex h-7 w-7 items-center justify-center transition-colors duration-500",
						isNight ? "text-background" : "text-foreground/50",
					)}
				>
					<Moon size={14} strokeWidth={1.75} />
				</span>
			</button>
		);
	}

	const dims =
		size === "large"
			? {
					track: "h-12 w-56 px-1.5 text-[0.65rem]",
					thumb: "h-9 w-[6.5rem]",
					translate: "translate-x-[6.5rem]",
					icon: 16,
				}
			: {
					track: "h-8 w-36 px-1 text-[0.6rem]",
					thumb: "h-6 w-[4.25rem]",
					translate: "translate-x-[4.25rem]",
					icon: 12,
				};

	return (
		<button
			type="button"
			onClick={toggleMode}
			role="switch"
			aria-checked={isNight}
			aria-label={`Cambiar a modo ${isNight ? "día" : "noche"}`}
			className={cn(
				"relative inline-flex items-center rounded-full border border-foreground/20 bg-background/40 backdrop-blur-md font-body tracking-[0.25em] uppercase transition-colors duration-500",
				dims.track,
				className,
			)}
		>
			<span
				className={cn(
					"absolute top-1/2 left-1 -translate-y-1/2 rounded-full bg-foreground shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
					dims.thumb,
					isNight && dims.translate,
				)}
			/>
			<span
				className={cn(
					"relative z-10 flex flex-1 items-center justify-center gap-1.5 transition-colors duration-500",
					isNight ? "text-foreground/50" : "text-background",
				)}
			>
				<Sun size={dims.icon} strokeWidth={1.5} />
				Día
			</span>
			<span
				className={cn(
					"relative z-10 flex flex-1 items-center justify-center gap-1.5 transition-colors duration-500",
					isNight ? "text-background" : "text-foreground/50",
				)}
			>
				<Moon size={dims.icon} strokeWidth={1.5} />
				Noche
			</span>
		</button>
	);
};

export default DayNightToggle;
