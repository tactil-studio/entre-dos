import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import floral from "@/assets/floral-day.webp";
import logo from "@/assets/logo-entre2.svg";
import { langOrder, languages } from "@/lib/menuData";

const greetings: Record<string, string> = {
	es: "Elige tu idioma",
	en: "Choose your language",
	ca: "Tria el teu idioma",
	fr: "Choisissez votre langue",
};

const SAGE = "#AAAE97";

const QRLanguage = () => {
	useLayoutEffect(() => {
		const html = document.documentElement;
		const body = document.body;
		const hadDark = html.classList.contains("dark");
		html.classList.remove("dark");
		html.style.backgroundColor = SAGE;
		body.style.backgroundColor = SAGE;
		return () => {
			html.style.backgroundColor = "";
			body.style.backgroundColor = "";
			if (hadDark) html.classList.add("dark");
		};
	}, []);

	return (
		<div
			className="fixed inset-0 flex flex-col items-center justify-center px-6 overflow-hidden"
			style={{ backgroundColor: SAGE }}
		>
			{/* Floral decoration — top left */}
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none absolute -left-16 -top-10 w-64 md:w-80 opacity-25 -scale-x-100 rotate-6"
			/>
			{/* Floral decoration — bottom right */}
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none absolute -right-16 -bottom-10 w-64 md:w-80 opacity-25"
			/>

			<div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
				<img
					src={logo}
					alt="Entre Dos"
					className="h-20 mb-12 brightness-0 opacity-80"
				/>

				<p className="text-[10px] font-mono-label mb-3 text-foreground/60">
					Entre Dos · Barcelona
				</p>
				<h1 className="text-4xl md:text-5xl font-serif italic font-light mb-2 text-foreground">
					La carta
				</h1>
				<p className="font-body text-sm mb-12 text-foreground/60">
					{greetings.es} · {greetings.en}
					<br />
					{greetings.ca} · {greetings.fr}
				</p>

				<div className="w-full flex flex-col gap-3">
					{langOrder.map((code) => {
						const to = code === "es" ? "/carta" : `/carta/${code}`;
						return (
							<Link
								key={code}
								to={to}
								className="group w-full py-4 text-xs font-mono-label transition-all duration-500 flex items-center justify-between px-6 border border-foreground/25 text-foreground hover:bg-foreground/10 hover:border-foreground/60"
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
					className="mt-12 text-[10px] font-mono-label text-foreground/50 hover:text-foreground transition-colors"
				>
					← Web
				</Link>
			</div>
		</div>
	);
};

export default QRLanguage;
