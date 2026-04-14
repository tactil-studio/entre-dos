import { Link } from "react-router-dom";
import foodBrunch1 from "@/assets/food-brunch1.webp";
import foodPrawns from "@/assets/food-prawns.webp";
import foodMalibu from "@/assets/malibu.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DecoCircleBlue, DecoCircleOlive, DecoLine } from "./DecoShapes";

const items = [
	{
		img: foodPrawns,
		label: "Carta",
		desc: "Tapas, entrantes, carnes y pescados",
		tab: "carta",
	},
	{
		img: foodBrunch1,
		label: "Brunch",
		desc: "Sábados y domingos, 11–16h",
		tab: "brunch",
	},
	{
		img: foodMalibu,
		label: "Bebidas & Cocktails",
		desc: "Vinos, cócteles y zumos naturales",
		tab: "cocktails",
	},
];

const MenuPreviewSection = () => {
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
		rootMargin: "0px 0px -40px 0px",
	});

	return (
		<section id="menu" className="py-16 md:py-16 bg-background relative overflow-hidden">
			<DecoCircleBlue className="w-80 h-80 -top-20 -left-32" />
			<DecoCircleOlive className="w-64 h-64 bottom-10 -right-10 md:right-10" />
			<DecoLine className="w-1/3 top-8 left-1/2 -translate-x-1/2" color="blue" />
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div
					ref={headerRef}
					className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
				>
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						Nuestra carta
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
						Sabores{" "}
						<span className="italic text-night-blue">mediterráneos</span>
					</h2>
					<p className="mt-6 text-muted-foreground font-body text-sm max-w-lg mx-auto">
						Platos elaborados con ingredientes frescos y de temporada. Una
						propuesta gastronómica que fusiona tradición e innovación.
					</p>
				</div>

				<div ref={gridRef} className="grid md:grid-cols-3 gap-4">
					{items.map((item, i) => (
						<Link
							to={`/carta?tab=${item.tab}`}
							key={i}
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
