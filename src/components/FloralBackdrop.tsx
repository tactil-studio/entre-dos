import { useMode } from "@/contexts/ModeContext";
import floral from "@/assets/floral-day-cutout.webp";

/**
 * Decorative floral illustration anchored to the page background.
 * Visible only in day mode, fixed to viewport so it acts as ambient decor.
 */
const FloralBackdrop = () => {
	const { mode } = useMode();
	const isNight = mode === "night";

	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-700 ${
				isNight ? "opacity-0" : "opacity-100"
			}`}
		>
			{/* Bottom-left cluster */}
			<img
				src={floral}
				alt=""
				loading="lazy"
				className="absolute -left-24 -bottom-32 w-[28rem] md:w-[34rem] opacity-[0.13] select-none"
			/>
			{/* Top-right mirrored cluster */}
			<img
				src={floral}
				alt=""
				loading="lazy"
				className="absolute -right-32 -top-24 w-[24rem] md:w-[30rem] opacity-[0.10] select-none -scale-x-100 rotate-12"
			/>
		</div>
	);
};

export default FloralBackdrop;
