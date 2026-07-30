import cocktail from "@/assets/cocktail.webp";
import foodAvocado from "@/assets/food-avocado.webp";
import foodBrunch1 from "@/assets/food-brunch1.webp";
import foodBrunch2 from "@/assets/food-brunch2.webp";
import foodCappuccino from "@/assets/food-cappuccino.webp";
import foodHam from "@/assets/food-ham.webp";
import foodMezze from "@/assets/food-mezze.webp";
import foodMezze2 from "@/assets/food-mezze2.webp";
import foodPancakes from "@/assets/food-pancakes.webp";
import foodPrawns from "@/assets/food-prawns.webp";
import foodSalad1 from "@/assets/food-salad1.webp";
import foodSalad2 from "@/assets/food-salad2.webp";
import foodScrambled from "@/assets/food-scrambled.webp";
import foodShakshuka from "@/assets/food-shakshuka.webp";
import foodTacos from "@/assets/food-tacos.webp";
import malibu from "@/assets/malibu.webp";
import wine from "@/assets/wine.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const dayImages = [
	{
		src: foodPrawns,
		alt: "Gambas al ajillo con pan catalán",
		className: "col-span-2 row-span-2",
	},
	{
		src: foodAvocado,
		alt: "Tostada de aguacate con ensalada y patatas",
		className: "",
	},
	{ src: foodShakshuka, alt: "Shakshuka con huevos y feta", className: "" },
	{
		src: foodSalad1,
		alt: "Ensalada fresca con mango",
		className: "md:row-span-2",
	},
	{ src: foodPancakes, alt: "Tortitas con frutas y sirope", className: "" },
	{ src: foodTacos, alt: "Breakfast tacos", className: "" },
	{ src: foodScrambled, alt: "Revuelto con jamón y espárragos", className: "" },
	{ src: foodBrunch1, alt: "Brunch con tostada artesana", className: "" },
	{
		src: foodMezze2,
		alt: "Tabla de hummus con crudités y pan",
		className: "md:col-span-1 md:row-span-2",
	},
	{ src: foodCappuccino, alt: "Cappuccino artesano", className: "" },
	{ src: foodMezze, alt: "Mezze board con hummus y verduras", className: "" },
	{ src: foodBrunch2, alt: "Tostada con granada", className: "" },
];

const nightImages = [
	{ src: cocktail, alt: "Cóctel de autor", className: "col-span-2 row-span-2" },
	{ src: foodHam, alt: "Jamón curado catalán", className: "" },
	{ src: foodPrawns, alt: "Gambas al ajillo", className: "" },
	{ src: wine, alt: "Vinos de la casa", className: "md:row-span-2" },
	{ src: malibu, alt: "Cóctel tropical", className: "" },
	{ src: foodMezze, alt: "Tabla para compartir", className: "" },
	{ src: foodSalad2, alt: "Ensalada de noche", className: "" },
	{
		src: foodMezze2,
		alt: "Mezze para compartir",
		className: "md:col-span-1 md:row-span-2",
	},
	{ src: foodShakshuka, alt: "Plato de cuchara", className: "" },
	{ src: foodTacos, alt: "Bocado de noche", className: "" },
	{ src: foodAvocado, alt: "Tapa fresca", className: "" },
	{ src: foodBrunch2, alt: "Plato compartido", className: "" },
];

const GallerySection = () => {
	const { mode } = useMode();
	const images = mode === "night" ? nightImages : dayImages;
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
		rootMargin: "0px 0px -40px 0px",
	});

	return (
		<section
			id="gallery"
			className="py-16 md:py-16 bg-transparent relative z-[30]"
		>
			<div className="mx-auto max-w-[92rem] px-6">
				<div
					ref={headerRef}
					className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
				>
					<p className="text-xs font-mono-label mb-4 text-olive">Galería</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground">
						{mode === "night" ? (
							<>
								Nuestras <span className="italic text-night-blue">noches</span>
							</>
						) : (
							<>
								Nuestros <span className="italic text-olive">platos</span>
							</>
						)}
					</h2>
				</div>

				<div
					ref={gridRef}
					className="flex flex-wrap justify-center gap-6 md:gap-8"
				>
					{images.map((img, i) => {
						const rotations = [
							-3, 1.5, -1, 2.5, -2, 1, -1.5, 2, -0.5, 3, -2.5, 0.5,
						];
						const rot = rotations[i % rotations.length];
						return (
							<div
								key={`${mode}-${i}`}
								className={`reveal-scale reveal-delay-${Math.min((i % 4) + 1, 4)} ${gridVisible ? "visible" : ""} group`}
								style={{
									transform: `rotate(${rot}deg)`,
									transition: "transform 0.4s ease",
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform = "rotate(0deg) scale(1.04)")
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = `rotate(${rot}deg)`)
								}
							>
								{/* Polaroid frame */}
								<div className="bg-white p-2 pb-8 shadow-[4px_6px_20px_rgba(0,0,0,0.18)] w-40 md:w-48">
									<img
										src={img.src}
										alt={img.alt}
										loading="lazy"
										className="w-full aspect-square object-cover"
									/>
									<p className="mt-3 text-center text-base font-bold text-gray-800 font-serif-italic truncate px-1">
										{img.alt}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<div
					className={`text-center mt-12 reveal reveal-delay-3 ${gridVisible ? "visible" : ""}`}
				>
					<a
						href="https://www.instagram.com/toscacarme/"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						Ver más en Instagram
					</a>
				</div>
			</div>
		</section>
	);
};

export default GallerySection;
