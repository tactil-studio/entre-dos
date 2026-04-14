import foodHam from "@/assets/food-ham.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DecoRing, DecoDot } from "./DecoShapes";

const AboutSection = () => {
	const { ref, isVisible } = useScrollReveal();

	return (
		<section
			id="about"
			className="py-24 relative overflow-hidden"
			ref={ref}
			style={{
				background: `
					radial-gradient(ellipse 600px 600px at 90% 10%, rgba(77, 77, 7, 0.07), transparent 70%),
					radial-gradient(ellipse 400px 400px at 5% 90%, rgba(0, 7, 90, 0.05), transparent 70%),
					hsl(var(--background))
				`,
			}}
		>
			<DecoRing className="w-44 h-44 top-1/3 right-1/4 hidden md:block" color="blue" />
			<DecoDot className="w-3 h-3 top-20 left-[15%] hidden md:block" color="olive" />
			<DecoDot className="w-2 h-2 bottom-32 right-[20%] hidden md:block" color="blue" />
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
