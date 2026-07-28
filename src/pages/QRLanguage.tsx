import { useEffect } from "react";
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
	useEffect(() => {
		const html = document.documentElement;
		const body = document.body;
		html.style.backgroundColor = "#1A3C58";
		body.style.backgroundColor = "#1A3C58";
		return () => {
			html.style.backgroundColor = "";
			body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div
			className="fixed inset-0 flex flex-col items-center justify-center px-6 overflow-hidden"
			style={{ backgroundColor: "#1A3C58" }}
		>
			{/* Portrait: no rotation (up to lg breakpoint = 1024px) */}
			<img
				src="/bg-floral.svg"
				alt=""
				aria-hidden="true"
				className="lg:hidden absolute inset-0 w-full h-full pointer-events-none select-none"
				style={{ objectFit: "cover" }}
			/>
			{/* Desktop: rotated 270° */}
			<img
				src="/bg-floral.svg"
				alt=""
				aria-hidden="true"
				className="hidden lg:block absolute pointer-events-none select-none"
				style={{
					top: "50%",
					left: "50%",
					width: "calc(100vh + 20px)",
					height: "calc(100vw + 20px)",
					transform: "translate(-50%, -50%) rotate(270deg)",
				}}
			/>

			<div className="relative z-10 w-full max-w-sm flex flex-col items-center text-center">
				<img
					src={logo}
					alt="Entre Dos"
					className="h-20 mb-12 brightness-0 invert opacity-95"
				/>

				<p
					className="text-[10px] font-mono-label mb-3 opacity-80"
					style={{ color: "#E8DCC8" }}
				>
					Entre Dos · Barcelona
				</p>
				<h1
					className="text-4xl md:text-5xl font-serif italic font-light mb-2"
					style={{ color: "#E8DCC8" }}
				>
					La carta
				</h1>
				<p
					className="font-body text-sm mb-12 opacity-70"
					style={{ color: "#E8DCC8" }}
				>
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
								className="group w-full py-4 text-xs font-mono-label transition-all duration-500 flex items-center justify-between px-6"
								style={{
									border: "1px solid rgba(232,220,200,0.35)",
									color: "#E8DCC8",
									backgroundColor: "rgba(26,60,88,0.35)",
									backdropFilter: "blur(4px)",
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.backgroundColor =
										"rgba(232,220,200,0.15)";
									e.currentTarget.style.borderColor = "rgba(232,220,200,0.7)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.backgroundColor = "rgba(26,60,88,0.35)";
									e.currentTarget.style.borderColor = "rgba(232,220,200,0.35)";
								}}
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
					className="mt-12 text-[10px] font-mono-label transition-opacity opacity-50 hover:opacity-100"
					style={{ color: "#E8DCC8" }}
				>
					← Web
				</Link>
			</div>
		</div>
	);
};

export default QRLanguage;
