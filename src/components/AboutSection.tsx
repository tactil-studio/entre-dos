import foodHam from "@/assets/food-ham.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DecoCircleOlive, DecoCircleBlue, DecoRing } from "./DecoShapes";

const AboutSection = () => {
	const { ref, isVisible } = useScrollReveal();

	return (
		<section id="about" className="py-24 bg-background relative overflow-hidden" ref={ref}>
			<DecoCircleOlive className="w-96 h-96 -top-32 -right-20 md:right-0" />
			<DecoCircleBlue className="w-72 h-72 bottom-0 -left-24" />
			<DecoRing className="w-44 h-44 top-1/3 right-1/4 hidden md:block" color="blue" />
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
							Nuestra esencia
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-tight">
							Donde la tradición
							<br />
							<span className="italic text-olive">se encuentra</span>
							<br />
							con lo moderno
						</h2>
						<p className="mt-8 text-muted-foreground font-body leading-relaxed text-base max-w-md">
							En Entre Dos fusionamos la cocina mediterránea con toques
							internacionales. Un espacio pensado para compartir, disfrutar y
							descubrir sabores que conectan culturas y momentos.
						</p>
						<p className="mt-4 text-muted-foreground font-body leading-relaxed text-base max-w-md">
							Cada plato cuenta una historia. Cada visita es una experiencia
							única.
						</p>
					</div>
					<div className={`relative reveal-right ${isVisible ? "visible" : ""}`}>
						<img
							src={foodHam}
							alt="Jamón curado catalán"
							loading="lazy"
							className="w-full aspect-[4/5] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
