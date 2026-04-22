import foodHam from "@/assets/food-ham.webp";
import wine from "@/assets/wine.jpg";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const content = {
	day: {
		eyebrow: "Nuestra esencia · Día",
		titleStart: "Donde el café",
		titleItalic: "se encuentra",
		titleEnd: "con el brunch",
		p1: "Por la mañana, Entre Dos es un refugio de café de especialidad, brunch mediterráneo y luz natural. Un espacio para empezar el día sin prisas.",
		p2: "Pan recién hecho, huevos a tu manera y zumos exprimidos al momento.",
		image: foodHam,
		alt: "Brunch mediterráneo",
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
		<section id="about" className="py-24 bg-transparent" ref={ref}>
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
							{c.eyebrow}
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-tight">
							{c.titleStart}
							<br />
							<span className={`italic ${mode === "night" ? "text-night-blue" : "text-olive"}`}>
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
					<div className={`relative reveal-right ${isVisible ? "visible" : ""}`}>
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
