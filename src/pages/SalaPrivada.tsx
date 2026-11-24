import { Download, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import menuPdf from "@/assets/sala/menu-grupos.pdf.asset.json";
import s1 from "@/assets/sala/sala-1.jpg.asset.json";
import s2 from "@/assets/sala/sala-2.jpg.asset.json";
import s3 from "@/assets/sala/sala-3.jpg.asset.json";
import s4 from "@/assets/sala/sala-4.jpg.asset.json";
import s5 from "@/assets/sala/sala-5.jpg.asset.json";
import { useLang } from "@/contexts/LangContext";

const photos = [s1, s2, s3, s4, s5].map((p) => p.url);

const COPY = {
	es: {
		title: "Sala Privada para grupos en Barcelona | Entre Dos",
		desc: "Sala privada en la planta baja de Entre Dos, Barcelona: cumpleaños, cenas de empresa y eventos. Menú de grupo 35€ por persona.",
		floor: "−1 · Planta baja",
		h1: "Sala privada",
		tag: "Abajo, solo para vosotros.",
		cta: "Reservar la sala",
		descending: "Bajando a la sala…",
		infoTitle: "Vuestra planta, vuestra noche",
		info: "Bajad las escaleras y la sala es vuestra: un espacio íntimo con nuestra música, nuestras tapas y cocktails, pensado para celebrar sin compartir.",
		uses: ["Cumpleaños", "Cenas de empresa", "Despedidas", "Eventos privados"],
		capacity: "Capacidad: consúltanos",
		gallery: "La sala",
		menuTitle: "Menú cenas de grupo",
		start: "Para empezar",
		main: "Plato principal",
		dessert: "Postre a elegir",
		perPerson: "por persona",
		download: "Descargar menú (PDF)",
		contact: "¿Organizamos algo?",
	},
	en: {
		title: "Private Room for groups in Barcelona | Entre Dos",
		desc: "Private room downstairs at Entre Dos, Barcelona: birthdays, company dinners and events. Group menu €35 per person.",
		floor: "−1 · Downstairs",
		h1: "Private room",
		tag: "Downstairs, just for you.",
		cta: "Book the room",
		descending: "Heading downstairs…",
		infoTitle: "Your floor, your night",
		info: "Walk down the stairs and the room is yours: an intimate space with our music, tapas and cocktails, made for celebrating without sharing.",
		uses: ["Birthdays", "Company dinners", "Farewells", "Private events"],
		capacity: "Capacity: ask us",
		gallery: "The room",
		menuTitle: "Group dinner menu",
		start: "To start",
		main: "Main course",
		dessert: "Dessert of choice",
		perPerson: "per person",
		download: "Download menu (PDF)",
		contact: "Shall we plan something?",
	},
};

const MENU = {
	es: {
		start: ["Canelones de setas con salsa de foie", "Ensalada de queso de cabra, granada y frutos secos", "Tataki de atún con wasabi"],
		main: ["Solomillo de ternera con salsa de champiñones", "Bacalao a la plancha con salsa de naranja", "Risotto de setas"],
		dessert: ["Brownie de chocolate", "Tarta de queso", "Variedad de helados"],
	},
	en: {
		start: ["Mushroom cannelloni with foie sauce", "Goat cheese salad with pomegranate and nuts", "Tuna tataki with wasabi"],
		main: ["Beef tenderloin with mushroom sauce", "Grilled cod with orange sauce", "Mushroom risotto"],
		dessert: ["Chocolate brownie", "Cheesecake", "Selection of ice creams"],
	},
};

const SalaPrivada = () => {
	const { lang } = useLang();
	const c = lang === "es" ? COPY.es : COPY.en;
	const m = lang === "es" ? MENU.es : MENU.en;
	const [descending, setDescending] = useState(true);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		document.title = c.title;
		document.querySelector('meta[name="description"]')?.setAttribute("content", c.desc);
	}, [c]);

	useEffect(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const id = setTimeout(() => setDescending(false), reduce ? 0 : 1500);
		const onScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			clearTimeout(id);
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Stair descent intro (placeholder until the real stairs video) */}
			{descending && (
				<div className="fixed inset-0 z-[100] bg-foreground overflow-hidden pointer-events-none animate-stairs-out" aria-hidden>
					{Array.from({ length: 9 }).map((_, i) => (
						<div
							key={i}
							className="absolute left-0 right-0 h-[14vh] border-t border-background/20 bg-background/5 animate-stair-step"
							style={{ animationDelay: `${i * 0.12}s`, top: "100%" }}
						/>
					))}
					<p className="absolute inset-0 flex items-center justify-center font-mono-label text-background/80 text-xs tracking-[0.4em] uppercase">
						{c.descending}
					</p>
				</div>
			)}

			<Navbar />

			<section className="relative h-[85vh] min-h-[520px] overflow-hidden">
				<img
					src={photos[0]}
					alt={c.h1}
					className="absolute inset-0 w-full h-full object-cover animate-room-zoom"
					style={{ transform: `translateY(${scrollY * 0.3}px)` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/20" />
				<div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 text-background">
					<span className="font-mono-label text-xs tracking-[0.35em] uppercase mb-4 inline-block border border-background/40 px-3 py-1 w-fit">
						{c.floor}
					</span>
					<h1 className="font-heading text-6xl md:text-8xl leading-none">{c.h1}</h1>
					<p className="font-heading italic text-2xl md:text-4xl mt-3 opacity-90">{c.tag}</p>
					<a href="#contacto-sala" className="mt-8 w-fit bg-background text-foreground px-7 py-3 rounded-full font-mono-label text-xs tracking-[0.25em] uppercase hover:opacity-90">
						{c.cta}
					</a>
				</div>
			</section>

			<section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
				<div>
					<h2 className="font-heading text-4xl md:text-5xl mb-5">{c.infoTitle}</h2>
					<p className="text-foreground/75 leading-relaxed">{c.info}</p>
					<p className="font-mono-label text-xs tracking-[0.25em] uppercase mt-6 text-olive">{c.capacity}</p>
				</div>
				<ul className="flex flex-wrap gap-3">
					{c.uses.map((u) => (
						<li key={u} className="border border-foreground/25 rounded-full px-5 py-2 font-mono-label text-xs uppercase tracking-[0.2em]">
							{u}
						</li>
					))}
				</ul>
			</section>

			<section className="max-w-7xl mx-auto px-6 pb-16">
				<h2 className="font-heading text-4xl md:text-5xl mb-8">{c.gallery}</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
					{photos.slice(1).map((src, i) => (
						<div key={src} className={`overflow-hidden rounded-[1.5rem] ${i === 0 ? "col-span-2 row-span-2 rounded-tl-[5rem]" : ""}`}>
							<img src={src} alt={`${c.h1} ${i + 2}`} loading="lazy" className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700" />
						</div>
					))}
				</div>
			</section>

			<section className="max-w-3xl mx-auto px-6 pb-16">
				<div className="bg-card border border-border rounded-[1.5rem] rounded-tr-[6rem] shadow-lg p-8 md:p-12 text-center">
					<h2 className="font-heading text-4xl md:text-5xl mb-8">{c.menuTitle}</h2>
					{[
						[c.start, m.start],
						[c.main, m.main],
						[c.dessert, m.dessert],
					].map(([label, items]) => (
						<div key={label as string} className="mb-8">
							<p className="font-mono-label text-xs tracking-[0.3em] uppercase text-olive mb-3">{label as string}</p>
							{(items as string[]).map((d) => (
								<p key={d} className="font-heading text-xl leading-snug">{d}</p>
							))}
						</div>
					))}
					<p className="font-heading text-6xl">35€</p>
					<p className="font-mono-label text-xs tracking-[0.3em] uppercase opacity-70">{c.perPerson}</p>
					<a href={menuPdf.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 border border-foreground/30 rounded-full px-6 py-3 font-mono-label text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
						<Download size={14} /> {c.download}
					</a>
				</div>
			</section>

			<section id="contacto-sala" className="max-w-3xl mx-auto px-6 pb-20 text-center">
				<h2 className="font-heading text-4xl md:text-5xl mb-6">{c.contact}</h2>
				<div className="flex flex-wrap justify-center gap-4">
					<a href="tel:+34937308487" className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm"><Phone size={16} /> +34 937 30 84 87</a>
					<a href="mailto:info@restaurante-entredos.com?subject=Sala%20privada" className="inline-flex items-center gap-2 border border-foreground/30 rounded-full px-6 py-3 text-sm"><Mail size={16} /> info@restaurante-entredos.com</a>
				</div>
			</section>

			<FooterSection />
		</div>
	);
};

export default SalaPrivada;
