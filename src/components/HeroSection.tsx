import { useEffect, useRef } from "react";
import dayVideo from "@/assets/Entre-Dos-Day.mp4";
import nightVideo from "@/assets/Entre-Dos-Night.mp4";
import foodBrunch1 from "@/assets/food-brunch1.webp";
import DayNightToggle from "@/components/DayNightToggle";
import { useMode } from "@/contexts/ModeContext";

const HeroSection = () => {
	const { mode } = useMode();
	const isNight = mode === "night";
	const dayRef = useRef<HTMLVideoElement>(null);
	const nightRef = useRef<HTMLVideoElement>(null);

	// Resume autoplay on iOS bfcache restore and tab return
	useEffect(() => {
		const resumeVideos = () => {
			[dayRef.current, nightRef.current].forEach((v) => {
				if (v && v.paused) v.play().catch(() => {});
			});
		};
		const onPageShow = (e: PageTransitionEvent) => {
			if (e.persisted) resumeVideos();
		};
		const onVisibility = () => {
			if (!document.hidden) resumeVideos();
		};
		window.addEventListener("pageshow", onPageShow);
		document.addEventListener("visibilitychange", onVisibility);
		return () => {
			window.removeEventListener("pageshow", onPageShow);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, []);

	// Restart the incoming video from the beginning on mode switch
	useEffect(() => {
		const incoming = isNight ? nightRef.current : dayRef.current;
		if (incoming) {
			incoming.currentTime = 0;
			incoming.play().catch(() => {});
		}
	}, [isNight]);

	return (
		<section
			id="hero"
			className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
		>
			{/* Day video (with image fallback while file is loading/empty) */}
			<img
				src={foodBrunch1}
				alt="Brunch en Entre Dos"
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${isNight ? "opacity-0" : "opacity-100"}`}
			/>
			<video
				ref={dayRef}
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				poster={foodBrunch1}
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${isNight ? "opacity-0" : "opacity-100"}`}
			>
				<source src={dayVideo} type="video/mp4" />
			</video>
			{/* Night video */}
			<video
				ref={nightRef}
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
				poster={foodBrunch1}
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${isNight ? "opacity-100" : "opacity-0"}`}
			>
				<source src={nightVideo} type="video/mp4" />
			</video>
			<div
				className={`absolute inset-0 transition-colors duration-700 ${isNight ? "bg-black/65" : "bg-black/40"}`}
			/>

			<div className="relative z-10 text-center px-6">
				<h1
					className="text-6xl md:text-8xl lg:text-9xl font-serif-italic text-white tracking-wide opacity-0 animate-fade-up"
					style={{ fontWeight: 300 }}
				>
					Entre{" "}
					<span
						style={{
							color: isNight ? "hsl(220, 90%, 70%)" : "hsl(60, 84%, 35%)",
						}}
						className="transition-colors duration-700"
					>
						Dos
					</span>
				</h1>
				<p
					key={`tag-${mode}`}
					className="mt-6 text-white/80 text-xs md:text-sm font-body font-semibold tracking-[0.3em] uppercase opacity-0 animate-fade-up animate-delay-200"
				>
					{isNight
						? "Cena & Cócteles · Barcelona"
						: "Brunch & Café · Barcelona"}
				</p>

				<div className="mt-10 flex justify-center opacity-0 animate-fade-up animate-delay-400">
					<DayNightToggle size="large" />
				</div>

				<div className="mt-8 opacity-0 animate-fade-up animate-delay-600">
					<a
						href="#about"
						className="inline-block border border-white/30 text-white px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-white hover:text-black transition-all duration-500"
					>
						Descubrir
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
