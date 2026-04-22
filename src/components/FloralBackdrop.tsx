import floral from "@/assets/floral-day.webp";
import { useMode } from "@/contexts/ModeContext";

const FloralBackdrop = () => {
	const { mode } = useMode();
	const isNight = mode === "night";

	return (
		<div
			aria-hidden="true"
			className={`pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-700 ${
				isNight ? "opacity-0" : "opacity-100"
			}`}
		>
			<div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-olive/15 blur-3xl" />
			<div className="absolute top-[18%] right-[-8%] h-[24rem] w-[24rem] rounded-full bg-night-blue/10 blur-3xl" />
			<div className="absolute bottom-[-10%] right-[8%] h-[30rem] w-[30rem] rounded-full bg-olive/10 blur-3xl" />
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,hsl(var(--accent-olive)/0.10),transparent_30%),radial-gradient(circle_at_84%_18%,hsl(var(--accent-blue)/0.10),transparent_24%),linear-gradient(135deg,hsl(var(--background))_12%,hsl(var(--accent-olive)/0.06)_42%,hsl(var(--background))_62%,hsl(var(--accent-blue)/0.05)_100%)]" />
			<img
				src={floral}
				alt=""
				loading="lazy"
				className="absolute -left-20 bottom-[-10rem] w-[34rem] md:w-[44rem] opacity-[0.24] mix-blend-multiply select-none"
			/>
			<img
				src={floral}
				alt=""
				loading="lazy"
				className="absolute -right-24 top-[-7rem] w-[28rem] md:w-[36rem] opacity-[0.18] mix-blend-multiply select-none -scale-x-100 rotate-12"
			/>
		</div>
	);
};

export default FloralBackdrop;
