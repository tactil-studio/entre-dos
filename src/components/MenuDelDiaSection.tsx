import { Link } from "react-router-dom";
import foodMezze from "@/assets/food-mezze.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MenuDelDiaSection = () => {
	const { mode } = useMode();
	const { ref, isVisible } = useScrollReveal();

	if (mode === "night") return null;

	return (
		<section id="menu-del-dia" className="py-16 bg-transparent" ref={ref}>
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
					<div className={`relative reveal-left ${isVisible ? "visible" : ""}`}>
						<img
							src={foodMezze}
							alt="Menú del día en Entre Dos"
							loading="lazy"
							className="w-full aspect-[4/3] object-cover card-organic rounded-[6rem_1.75rem_6rem_1.75rem]"
						/>
						<div className="absolute -bottom-5 -right-3 md:right-6 bg-background border border-foreground/10 px-6 py-4 shadow-lg rounded-2xl">
							<span className="block font-heading text-4xl md:text-5xl text-foreground leading-none">
								14,90€
							</span>
						</div>
					</div>

					<div className={`reveal-right ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs font-mono-label mb-4">
							Solo entre semana
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
							Menú <span className="italic text-night-blue">del día</span>
						</h2>
						<p className="mt-6 text-muted-foreground font-body leading-relaxed text-base max-w-md">
							De lunes a viernes, de 12:00 a 16:00. Primero, segundo, postre y
							bebida — cocina de mercado que cambia cada día.
						</p>
						<div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono-label text-foreground/70">
							<span>Lun – Vie</span>
							<span>12:00 – 16:00</span>
							<span>14,90€</span>
						</div>
						<Link
							to="/carta?tab=menu-dia"
							className="mt-10 inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
						>
							Ver el menú
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuDelDiaSection;
