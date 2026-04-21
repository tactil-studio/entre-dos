import foodBrunch1 from "@/assets/food-brunch1.webp";
import cocktail from "@/assets/cocktail.jpg";
import DayNightToggle from "@/components/DayNightToggle";
import { useMode } from "@/contexts/ModeContext";

const HeroSection = () => {
	const { mode } = useMode();
	const isNight = mode === "night";

	return (
		<section
			id="hero"
			className="relative h-screen flex items-center justify-center overflow-hidden bg-background"
		>
			{/* Day image */}
			<img
				src={foodBrunch1}
				alt="Brunch en Entre Dos"
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${isNight ? "opacity-0" : "opacity-100"}`}
				width={1920}
				height={1080}
			/>
			{/* Night image */}
			<img
				src={cocktail}
				alt="Cócteles de noche en Entre Dos"
				className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${isNight ? "opacity-100" : "opacity-0"}`}
				width={1920}
				height={1080}
			/>
			<div className={`absolute inset-0 transition-colors duration-700 ${isNight ? "bg-black/65" : "bg-black/40"}`} />

			<div className="relative z-10 text-center px-6">
				<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif-italic text-white tracking-wide opacity-0 animate-fade-up" style={{ fontWeight: 300 }}>
					Entre Dos
				</h1>
				<p
					key={`tag-${mode}`}
					className="mt-6 text-white/80 text-xs md:text-sm font-body font-semibold tracking-[0.3em] uppercase opacity-0 animate-fade-up animate-delay-200"
				>
					{isNight ? "Cena & Cócteles · Barcelona" : "Brunch & Café · Barcelona"}
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
