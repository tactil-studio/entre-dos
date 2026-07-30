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
		p1: "Al caer el sol, Entre Dos cambia de piel. Una barra íntima para cenas de autor, vinos seleccionados y cócteles de temporada.",
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
					className="pointer-events-none select-none absolute -right-32 top-0 w-48 md:w-60 opacity-10 dark:opacity-10 transition-opacity duration-700 rotate-12 -scale-x-100"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs font-mono-label mb-4">
							{c.eyebrow}
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
							{c.titleStart}
							<br />
							<span
								className={`font-serif-italic ${mode === "night" ? "text-night-blue" : "text-olive"}`}
							>
								{c.titleItalic}
							</span>
							<br />
							{c.titleEnd}
						</h2>
						<p className="mt-8 text-foreground/80 font-body leading-relaxed text-base max-w-md">
							{c.p1}
						</p>
						<p className="mt-4 text-foreground/80 font-body leading-relaxed text-base max-w-md">
							{c.p2}
						</p>
						<p className="mt-8 font-serif-italic text-3xl md:text-4xl text-foreground">
							Ven tal como eres.
						</p>
					</div>
					<div
						className={`relative reveal-right ${isVisible ? "visible" : ""} flex justify-center`}
					>
						{/* Olive colour block — peeks out from behind, shifted */}
						<div className="absolute top-6 right-0 w-[85%] h-full bg-olive opacity-20 z-0" />

						{/* Photo — tall portrait, shifted left to reveal the block */}
						<div className="relative z-10 w-[85%] overflow-hidden shadow-2xl -translate-x-6 -translate-y-6 group">
							<img
								key={mode}
								src={c.image}
								alt={c.alt}
								loading="lazy"
								className="w-full aspect-[3/4] object-cover animate-fade-in group-hover:scale-105 transition-transform duration-700"
							/>
							{/* Thin inset frame */}
							<div className="absolute inset-4 border border-white/20 pointer-events-none" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
