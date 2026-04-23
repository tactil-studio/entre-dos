import foodHam from "@/assets/food-ham.webp";
import monsteraBlue from "@/assets/monstera-blue.webp";
import monsteraGreen from "@/assets/monstera-leaves.webp";
import wine from "@/assets/wine.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const content = {
	day: {
		eyebrow: "Nuestra esencia · Día",
		titleStart: "Donde la tradición",
		titleItalic: "se encuentra",
		titleEnd: "con lo moderno",
		p1: "En Entre Dos fusionamos la cocina mediterránea con toques internacionales. Un espacio pensado para compartir, disfrutar y descubrir sabores que conectan culturas y momentos.",
		p2: "Cada plato cuenta una historia. Cada visita es una experiencia única.",
		image: foodHam,
		alt: "Cocina mediterránea en Entre Dos",
	},
	night: {
		eyebrow: "Nuestra esencia · Noche",
		titleStart: "Donde la cocina",
		titleItalic: "se transforma",
		titleEnd: "en cócteles",
		p1: "Al caer el sol, Entre Dos cambia de piel. Un bistrot íntimo para cenas de autor, vinos seleccionados y cócteles de barra.",
		p2: "Ambiente cálido, luz tenue y una carta pensada para compartir entre dos.",
		image: wine,
		alt: "Cena y vinos por la noche",
	},
};

const AboutSection = () => {
	const { mode } = useMode();
	const { ref, isVisible } = useScrollReveal();
	const c = content[mode];

	return (
		<section id="about" className="py-24 bg-transparent relative" ref={ref}>
			{/* Clip top-right monstera so it doesn't bleed upward into hero */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<img
					src={mode === "night" ? monsteraBlue : monsteraGreen}
					aria-hidden="true"
					alt=""
					loading="lazy"
					className="pointer-events-none select-none absolute -right-20 -top-16 w-64 md:w-80 opacity-20 dark:opacity-15 transition-opacity duration-700 rotate-12 -scale-x-100"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
							{c.eyebrow}
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-tight">
							{c.titleStart}
							<br />
							<span
								className={`italic ${mode === "night" ? "text-night-blue" : "text-olive"}`}
							>
								{c.titleItalic}
							</span>
							<br />
							{c.titleEnd}
						</h2>
						<p className="mt-8 text-muted-foreground font-body leading-relaxed text-base max-w-md">
							{c.p1}
						</p>
						<p className="mt-4 text-muted-foreground font-body leading-relaxed text-base max-w-md">
							{c.p2}
						</p>
					</div>
					<div
						className={`relative reveal-right ${isVisible ? "visible" : ""}`}
					>
						<img
							key={mode}
							src={c.image}
							alt={c.alt}
							loading="lazy"
							className="w-full aspect-[4/5] object-cover animate-fade-in"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
