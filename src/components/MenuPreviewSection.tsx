import { Link } from "react-router-dom";
import foodBrunch1 from "@/assets/food-brunch1.webp";
import foodPrawns from "@/assets/food-prawns.webp";
import foodMalibu from "@/assets/malibu.webp";
import cocktail from "@/assets/cocktail.webp";
import wine from "@/assets/wine.webp";
import lineartLight from "@/assets/floral-lineart-light.webp";
import lineartOlive from "@/assets/floral-lineart.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const dayItems = [
	{ img: foodPrawns, label: "Carta", desc: "Tapas, entrantes y mediterráneo", tab: "carta" },
	{ img: foodBrunch1, label: "Brunch", desc: "Sábados y domingos, 11–16h", tab: "brunch" },
	{ img: foodMalibu, label: "Café & Zumos", desc: "Café de especialidad y zumos naturales", tab: "bebidas" },
];

const nightItems = [
	{ img: foodPrawns, label: "Cena", desc: "Cocina de autor para compartir", tab: "carta" },
	{ img: cocktail, label: "Cócteles", desc: "Mixología de barra hasta tarde", tab: "cocktails" },
	{ img: wine, label: "Vinos", desc: "Selección natural y referencias de autor", tab: "vinos" },
];

const MenuPreviewSection = () => {
	const { mode } = useMode();
	const items = mode === "night" ? nightItems : dayItems;
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
		rootMargin: "0px 0px -40px 0px",
	});

	return (
		<section id="menu" className="py-16 md:py-16 bg-transparent">
			<div className="max-w-7xl mx-auto px-6">
				<div
					ref={headerRef}
					className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
				>
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						{mode === "night" ? "Carta de noche" : "Nuestra carta"}
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
						{mode === "night" ? (
							<>
								Sabores de <span className="italic text-night-blue">noche</span>
							</>
						) : (
							<>
								Sabores <span className="italic text-night-blue">mediterráneos</span>
							</>
						)}
					</h2>
					<p className="mt-6 text-muted-foreground font-body text-sm max-w-lg mx-auto">
						{mode === "night"
							? "Cocina de autor, cócteles y vinos seleccionados para una velada íntima."
							: "Platos elaborados con ingredientes frescos y de temporada. Una propuesta gastronómica que fusiona tradición e innovación."}
					</p>
				</div>

				<div ref={gridRef} className="grid md:grid-cols-3 gap-4">
					{items.map((item, i) => (
						<Link
							to={`/carta?tab=${item.tab}`}
							key={`${mode}-${i}`}
							className={`group relative overflow-hidden aspect-[3/4] cursor-pointer reveal-scale reveal-delay-${i + 1} ${gridVisible ? "visible" : ""}`}
						>
							<img
								src={item.img}
								alt={item.label}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
							<div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
								<h3 className="font-heading text-3xl md:text-4xl font-light mb-2">
									{item.label}
								</h3>
								<p className="font-body text-white/70 text-xs tracking-[0.2em] uppercase">
									{item.desc}
								</p>
							</div>
						</Link>
					))}
				</div>

				<div
					className={`text-center mt-12 reveal reveal-delay-4 ${gridVisible ? "visible" : ""}`}
				>
					<Link
						to="/carta"
						className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						Ver carta completa
					</Link>
				</div>
			</div>
		</section>
	);
};

export default MenuPreviewSection;
