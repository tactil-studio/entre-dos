import foodHam from "@/assets/food-ham.webp";
import monsteraGreen from "@/assets/monstera-leaves.webp";
import nightFlowers from "@/assets/Night Flowers.svg";
import wine from "@/assets/wine.webp";
import { useLang } from "@/contexts/LangContext";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = { day: foodHam, night: wine };

const AboutSection = () => {
	const { mode } = useMode();
	const { t } = useLang();
	const { ref, isVisible } = useScrollReveal();
	const c = t.about[mode];
	const img = images[mode];

	return (
		<section id="about" className="py-24 bg-transparent relative" ref={ref}>
			{/* Clip top-right monstera so it doesn't bleed upward into hero */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{mode === "day" && (
					<img
						src={monsteraGreen}
						aria-hidden="true"
						alt=""
						loading="lazy"
						className="pointer-events-none select-none absolute -right-32 top-0 w-48 md:w-60 opacity-10 transition-opacity duration-700 rotate-12 -scale-x-100"
					/>
				)}
			</div>
			{/* Bottom-left: night flowers clipped, day monstera bleeds into next section */}
			{mode === "night" ? (
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<img
						src={nightFlowers}
						aria-hidden="true"
						alt=""
						loading="lazy"
						style={{ bottom: "-6rem" }}
						className="pointer-events-none select-none absolute -left-8 w-[20rem] md:w-[28rem] opacity-30 transition-opacity duration-700 rotate-6"
					/>
				</div>
			) : (
				<img
					src={monsteraGreen}
					aria-hidden="true"
					alt=""
					loading="lazy"
					style={{ bottom: "-8rem" }}
					className="pointer-events-none select-none absolute -left-8 w-[22rem] md:w-[32rem] opacity-30 transition-opacity duration-700 rotate-6"
				/>
			)}

			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className={`reveal-left ${isVisible ? "visible" : ""}`}>
						<p className="text-olive text-xs font-mono-label mb-4">
							{c.eyebrow}
						</p>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
							{c.titleStart}
							<br />
							<span
								className={`font-serif-italic ${mode === "night" ? "text-night-blue" : "text-olive"}`}
							>
								{c.titleItalic}
							</span>
							<br />
							{c.titleEnd}
						</h2>
						<p className="mt-8 text-foreground/80 font-body leading-relaxed text-base max-w-md">
							{c.p1}
						</p>
						<p className="mt-4 text-foreground/80 font-body leading-relaxed text-base max-w-md">
							{c.p2}
						</p>
						<p className="mt-8 font-serif-italic text-3xl md:text-4xl text-foreground">
							{t.about.tagline}
						</p>
					</div>
					<div
						className={`relative reveal-right ${isVisible ? "visible" : ""} flex justify-center`}
					>
						{/* Olive colour block — peeks out from behind, shifted */}
						<div className="absolute top-6 right-0 w-[85%] h-full bg-olive opacity-20 z-0" />

						{/* Photo — tall portrait, shifted left to reveal the block */}
						<div className="relative z-10 w-[85%] overflow-hidden shadow-2xl -translate-x-6 -translate-y-6 group">
							<img
								key={mode}
								src={img}
								alt={c.alt}
								loading="lazy"
								className="w-full aspect-[3/4] object-cover animate-fade-in group-hover:scale-105 transition-transform duration-700"
							/>
							{/* Thin inset frame */}
							<div className="absolute inset-4 border border-white/20 pointer-events-none" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
