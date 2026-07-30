import { Link } from "react-router-dom";
import foodMezze from "@/assets/food-mezze.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MenuDelDiaSection = () => {
	const { mode } = useMode();
	const { ref, isVisible } = useScrollReveal();

	if (mode === "night") return null;

	return (
		<section
			id="menu-del-dia"
			className="py-20 relative overflow-hidden"
			style={{ backgroundColor: "#C8C4AC" }}
			ref={ref}
		>
			{/* Subtle background texture blobs */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-64 h-64 bg-night-blue/8 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
					{/* Left — text */}
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						{/* Eyebrow with flanking lines */}
						<div className="flex items-center gap-3 mb-6">
							<div className="h-px w-8 bg-olive/50" />
							<p className="text-olive text-[0.65rem] font-mono-label tracking-[0.25em] uppercase">
								Solo entre semana
							</p>
						</div>

						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
							Menú <span className="italic text-night-blue">del día</span>
						</h2>

						<p className="mt-5 text-foreground/65 font-body leading-relaxed text-base max-w-md">
							De lunes a viernes, de 12:00 a 16:00. Primero, segundo, postre y
							bebida — cocina de mercado que cambia cada día.
						</p>

						{/* Info row */}
						<div className="mt-8 border-t border-foreground/15 pt-6 flex flex-wrap items-center gap-6">
							<div>
								<p className="text-[0.6rem] font-mono-label text-foreground/40 mb-1 uppercase tracking-widest">
									Días
								</p>
								<p className="text-sm font-mono-label text-foreground/80">
									Lun – Vie
								</p>
							</div>
							<div className="w-px h-8 bg-foreground/15" />
							<div>
								<p className="text-[0.6rem] font-mono-label text-foreground/40 mb-1 uppercase tracking-widest">
									Horario
								</p>
								<p className="text-sm font-mono-label text-foreground/80">
									12:00 – 16:00
								</p>
							</div>
						</div>

						<Link
							to="/carta?tab=menu-dia"
							className="mt-10 inline-flex items-center gap-3 bg-foreground text-background px-10 py-3.5 text-xs tracking-[0.25em] uppercase font-body hover:bg-olive transition-all duration-500"
						>
							Ver el menú
							<span className="opacity-60">→</span>
						</Link>
					</div>

					{/* Right — image */}
					<div
						className={`relative reveal-right ${isVisible ? "visible" : ""}`}
					>
						{/* Decorative frame offset */}
						<div className="absolute -top-4 -right-4 w-full h-full border-2 border-olive/20 rounded-[3rem] pointer-events-none" />
						<img
							src={foodMezze}
							alt="Menú del día en Entre Dos"
							loading="lazy"
							className="w-full aspect-[4/3] object-cover relative z-10"
							style={{ borderRadius: "2.5rem 0.75rem 2.5rem 0.75rem" }}
						/>
						{/* Price badge */}
						<div className="absolute -bottom-4 -left-4 z-20 bg-foreground text-background px-6 py-4 shadow-xl rounded-2xl">
							<p className="text-[0.55rem] font-mono-label opacity-50 mb-0.5 uppercase tracking-widest">
								Precio
							</p>
							<span className="block font-heading text-3xl md:text-4xl leading-none">
								14,90€
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuDelDiaSection;
