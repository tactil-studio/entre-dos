import foodAvocado from "@/assets/food-avocado.jpg";
import foodBrunch1 from "@/assets/food-brunch1.jpg";
import foodBrunch2 from "@/assets/food-brunch2.jpg";
import foodCappuccino from "@/assets/food-cappuccino.jpg";
import foodMezze from "@/assets/food-mezze.jpg";
import foodMezze2 from "@/assets/food-mezze2.jpg";
import foodPancakes from "@/assets/food-pancakes.jpg";
import foodPrawns from "@/assets/food-prawns.jpg";
import foodSalad1 from "@/assets/food-salad1.jpg";
import foodScrambled from "@/assets/food-scrambled.jpg";
import foodShakshuka from "@/assets/food-shakshuka.jpg";
import foodTacos from "@/assets/food-tacos.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
	{ src: foodPrawns, alt: "Gambas al ajillo con pan catalán", className: "col-span-2 row-span-2" },
	{ src: foodAvocado, alt: "Tostada de aguacate con ensalada y patatas", className: "" },
	{ src: foodShakshuka, alt: "Shakshuka con huevos y feta", className: "" },
	{ src: foodSalad1, alt: "Ensalada fresca con mango", className: "md:row-span-2" },
	{ src: foodPancakes, alt: "Tortitas con frutas y sirope", className: "" },
	{ src: foodTacos, alt: "Breakfast tacos", className: "" },
	{ src: foodScrambled, alt: "Revuelto con jamón y espárragos", className: "" },
	{ src: foodBrunch1, alt: "Brunch con tostada artesana", className: "" },
	{ src: foodMezze2, alt: "Tabla de hummus con crudités y pan", className: "md:col-span-1 md:row-span-2" },
	{ src: foodCappuccino, alt: "Cappuccino artesano", className: "" },
	{ src: foodMezze, alt: "Mezze board con hummus y verduras", className: "" },
	{ src: foodBrunch2, alt: "Tostada con granada", className: "" },
];

const GallerySection = () => {
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

	return (
		<section id="gallery" className="py-16 md:py-16 bg-background">
			<div className="mx-auto max-w-[92rem] px-6">
				<div ref={headerRef} className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}>
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						Galería
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
						Nuestros <span className="italic text-olive">platos</span>
					</h2>
				</div>

				<div
					ref={gridRef}
					className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] xl:auto-rows-[260px] 2xl:auto-rows-[300px] gap-3 md:gap-4"
				>
					{images.map((img, i) => (
						<div
							key={i}
							className={`overflow-hidden group reveal-scale reveal-delay-${Math.min((i % 4) + 1, 4)} ${img.className ?? ""} ${gridVisible ? "visible" : ""}`}
						>
							<img
								src={img.src}
								alt={img.alt}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								loading="lazy"
							/>
						</div>
					))}
				</div>

				<div className={`text-center mt-12 reveal reveal-delay-3 ${gridVisible ? "visible" : ""}`}>
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
