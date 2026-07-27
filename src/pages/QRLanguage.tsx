import { Link } from "react-router-dom";
import logo from "@/assets/logo-entre2.svg";
import { langOrder, languages } from "@/lib/menuData";

const greetings: Record<string, string> = {
	es: "Elige tu idioma",
	en: "Choose your language",
	ca: "Tria el teu idioma",
	fr: "Choisissez votre langue",
};

const QRLanguage = () => {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden">
			{/* subtle accents */}
			<div className="absolute top-1/4 -left-20 w-64 h-64 bg-olive/10 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-night-blue/10 rounded-full blur-3xl pointer-events-none" />

			<div className="relative z-10 w-full max-w-md flex flex-col items-center text-center">
				<img
					src={logo}
					alt="Entre 2"
					className="h-16 mb-10 dark:invert"
				/>

				<p className="text-olive text-[10px] tracking-[0.35em] uppercase font-body mb-3">
					Entre 2 · Barcelona
				</p>
				<h1 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-2">
					La <span className="italic">carta</span>
				</h1>
				<p className="text-muted-foreground font-body text-sm mb-10">
					{greetings.es} · {greetings.en} · {greetings.ca} · {greetings.fr}
				</p>

				<div className="w-full flex flex-col gap-3">
					{langOrder.map((code) => {
						const to = code === "es" ? "/carta" : `/carta/${code}`;
						return (
							<Link
								key={code}
								to={to}
								className="group w-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background text-foreground py-4 text-xs tracking-[0.3em] uppercase font-body transition-all duration-500 flex items-center justify-between px-6"
							>
								<span>{languages[code].nativeName}</span>
								<span className="opacity-40 group-hover:opacity-100 transition-opacity">
									→
								</span>
							</Link>
						);
					})}
				</div>

				<Link
					to="/"
					className="mt-10 text-muted-foreground/60 hover:text-foreground text-[10px] tracking-[0.3em] uppercase font-body transition-colors"
				>
					← Web
				</Link>
			</div>
		</div>
	);
};

export default QRLanguage;
