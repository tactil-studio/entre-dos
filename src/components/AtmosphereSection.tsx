import brunchTable from "@/assets/brunch-table.jpeg";
import cena2 from "@/assets/cena-2.jpg";
import monsteraGreen from "@/assets/monstera-leaves.webp";
import nightFlowers from "@/assets/Night Flowers.svg";
import { useLang } from "@/contexts/LangContext";
import { useMode } from "@/contexts/ModeContext";

const AtmosphereSection = () => {
	const { mode } = useMode();
	const { t } = useLang();
	const c = t.atmosphere[mode];

	return (
		<section className="w-full flex flex-col md:flex-row min-h-[540px] overflow-hidden">
			{/* Left — photo, fills half */}
			<div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden">
				<img
					src={mode === "night" ? cena2 : brunchTable}
					alt="Ambiente Entre Dos"
					className="w-full h-full object-cover object-center"
				/>
			</div>

			{/* Right — text */}
			<div
				className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-24 py-16 transition-colors duration-700 relative overflow-hidden"
				style={{ backgroundColor: "var(--surface-sage)" }}
			>
				{mode === "night" ? (
					<img
						src={nightFlowers}
						aria-hidden="true"
						alt=""
						className="pointer-events-none select-none absolute -bottom-20 -right-20 w-80 md:w-[28rem] opacity-35 -scale-x-100 -rotate-12"
					/>
				) : (
					<img
						src={monsteraGreen}
						aria-hidden="true"
						alt=""
						className="pointer-events-none select-none absolute -top-16 -right-12 w-[28rem] md:w-[40rem] opacity-20 transition-opacity duration-700 -rotate-12 -scale-x-100"
					/>
				)}
				<p className="text-foreground/50 text-[10px] tracking-[0.4em] uppercase font-body mb-6">
					{c.eyebrow}
				</p>
				<h2 className="text-foreground font-heading text-5xl md:text-6xl lg:text-7xl leading-none mb-8">
					{c.titleLine1}
					<br />
					{c.titleLine2}
				</h2>
				<p className="text-foreground/70 font-body text-base md:text-lg leading-relaxed max-w-md">
					{c.body}
				</p>
			</div>
		</section>
	);
};

export default AtmosphereSection;
