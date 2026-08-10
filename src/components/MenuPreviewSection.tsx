import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cocktail from "@/assets/cocktail.webp";
import foodBrunch1 from "@/assets/food-brunch1.webp";
import foodPrawns from "@/assets/food-prawns.webp";
import foodMalibu from "@/assets/malibu.webp";
import wine from "@/assets/wine.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const dayItems = [
	{
		img: foodPrawns,
		label: "Carta",
		desc: "Tapas, entrantes y mediterráneo",
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
		label: "Café & Zumos",
		desc: "Café de especialidad y zumos naturales",
		tab: "bebidas",
	},
];

const nightItems = [
	{
		img: foodPrawns,
		label: "Cena",
		desc: "Cocina de autor para compartir",
		tab: "carta",
	},
	{
		img: cocktail,
		label: "Cócteles",
		desc: "Mixología de barra hasta tarde",
		tab: "cocktails",
	},
	{
		img: wine,
		label: "Vinos",
		desc: "Selección natural y referencias de autor",
		tab: "vinos",
	},
];

const CARD_RADIUS = "1.75rem";

const MenuPreviewSection = () => {
	const { mode } = useMode();
	const items = mode === "night" ? nightItems : dayItems;
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: mobileGridRef, isVisible: mobileGridVisible } = useScrollReveal({
		rootMargin: "0px",
	});
	const { ref: desktopGridRef, isVisible: desktopGridVisible } =
		useScrollReveal({
			rootMargin: "0px",
		});
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section
			id="menu"
			className="py-16 md:py-24 bg-transparent relative overflow-hidden"
		>
			{/* ── Header ── */}
			<div className="max-w-7xl mx-auto px-6 relative">
				<div
					ref={headerRef}
					className={`mb-10 md:mb-12 reveal ${headerVisible ? "visible" : ""}`}
				>
					<div className="flex items-center gap-4 mb-5">
						<div className="h-px flex-1 bg-foreground/10" />
						<p className="text-olive text-xs font-mono-label tracking-[0.2em] uppercase">
							{mode === "night" ? "Carta de noche" : "Nuestra carta"}
						</p>
						<div className="h-px flex-1 bg-foreground/10" />
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground text-center">
						{mode === "night" ? (
							<>
								Sabores de <span className="italic text-olive">noche</span>
							</>
						) : (
							<>
								Sabores{" "}
								<span className="italic text-night-blue">mediterráneos</span>
							</>
						)}
					</h2>
				</div>
			</div>

			{/* ── Mobile: snap-scroll carousel ── */}
			<div
				ref={mobileGridRef}
				className={`md:hidden flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory reveal reveal-delay-1 ${mobileGridVisible ? "visible" : ""}`}
				style={{ scrollbarWidth: "none", height: "72vw" }}
			>
				{items.map((item, i) => (
					<Link
						to={`/carta?tab=${item.tab}`}
						key={`${mode}-${item.tab}-m`}
						className="relative flex-none overflow-hidden cursor-pointer snap-center"
						style={{ width: "78vw", borderRadius: CARD_RADIUS }}
					>
						<img
							src={item.img}
							alt={item.label}
							className="w-full h-full object-cover"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
						<div className="absolute top-4 left-4 font-mono-label text-white/35 text-[0.58rem] tracking-widest">
							0{i + 1}
						</div>
						<div className="absolute bottom-0 left-0 right-0 p-5">
							<div className="w-5 h-px bg-white/45 mb-3" />
							<h3 className="font-heading text-white text-2xl leading-tight">
								{item.label}
							</h3>
							<p className="font-mono-label text-white/55 text-[0.6rem] tracking-[0.18em] uppercase mt-1.5">
								{item.desc}
							</p>
						</div>
					</Link>
				))}
				{/* trailing padding trick */}
				<div className="flex-none w-1" />
			</div>

			{/* ── Desktop: expanding rounded panels ── */}
			<div
				ref={desktopGridRef}
				className={`hidden md:flex gap-3 px-6 h-[68vh] reveal reveal-delay-1 ${desktopGridVisible ? "visible" : ""}`}
			>
				{items.map((item, i) => (
					<Link
						to={`/carta?tab=${item.tab}`}
						key={`${mode}-${item.tab}-d`}
						className="relative overflow-hidden cursor-pointer"
						style={{
							flex:
								hoveredIndex === null
									? "1"
									: hoveredIndex === i
										? "1.85"
										: "0.58",
							borderRadius: CARD_RADIUS,
							transition: "flex 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
						}}
						onMouseEnter={() => setHoveredIndex(i)}
						onMouseLeave={() => setHoveredIndex(null)}
					>
						<img
							src={item.img}
							alt={item.label}
							className="w-full h-full object-cover"
							style={{
								transform: hoveredIndex === i ? "scale(1)" : "scale(1.015)",
								transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
							}}
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />

						{/* Number */}
						<div className="absolute top-5 left-5 font-mono-label text-white/35 text-[0.6rem] tracking-widest">
							0{i + 1}
						</div>

						{/* Arrow badge */}
						<div
							className="absolute top-5 right-5 w-7 h-7 rounded-full border border-white/55 flex items-center justify-center"
							style={{
								opacity: hoveredIndex === i ? 1 : 0,
								transition: "opacity 0.4s ease",
							}}
						>
							<ArrowUpRight size={13} className="text-white" />
						</div>

						{/* Text */}
						<div className="absolute bottom-0 left-0 right-0 p-7">
							<div
								className="h-px bg-white/50 mb-4"
								style={{
									width: hoveredIndex === i ? "2.5rem" : "1rem",
									transition: "width 0.5s ease",
								}}
							/>
							<h3
								className="font-heading text-white leading-tight"
								style={{
									fontSize:
										hoveredIndex === i
											? "clamp(2rem, 2.8vw, 2.8rem)"
											: "clamp(1.4rem, 2vw, 1.9rem)",
									transition: "font-size 0.5s ease",
								}}
							>
								{item.label}
							</h3>
							<div
								style={{
									maxHeight: hoveredIndex === i ? "3rem" : "0",
									opacity: hoveredIndex === i ? 1 : 0,
									overflow: "hidden",
									transition: "max-height 0.5s ease, opacity 0.4s ease",
								}}
							>
								<p className="font-mono-label text-white/60 text-[0.62rem] tracking-[0.18em] uppercase mt-2">
									{item.desc}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* ── CTA ── */}
			<div className="max-w-7xl mx-auto px-6 relative">
				<div
					className={`text-center mt-10 reveal reveal-delay-4 ${desktopGridVisible || mobileGridVisible ? "visible" : ""}`}
				>
					<Link
						to="/carta"
						className="inline-flex items-center gap-3 border border-foreground/40 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						Ver carta completa
						<ArrowUpRight size={12} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default MenuPreviewSection;
