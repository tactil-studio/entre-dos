import { ArrowDown, ArrowLeft, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import monsteraLeaves from "@/assets/monstera-leaves.webp";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { type MenuItem, languages, resolveLang } from "@/lib/menuData";

const copy = {
	es: {
		eyebrow: "Los favoritos de Entre Dos",
		title: "Platos",
		titleItalic: "populares",
		intro:
			"Una ruta para compartir, elegida entre los platos que más vuelven a la mesa.",
		back: "Volver a la carta",
		journey: "El recorrido",
		category: "De la carta",
	},
	en: {
		eyebrow: "Entre Dos favourites",
		title: "Popular",
		titleItalic: "dishes",
		intro:
			"A route made for sharing, chosen from the dishes that keep returning to the table.",
		back: "Back to the menu",
		journey: "The journey",
		category: "From the menu",
	},
	ca: {
		eyebrow: "Els favorits d'Entre Dos",
		title: "Plats",
		titleItalic: "populars",
		intro:
			"Un recorregut per compartir, escollit entre els plats que sempre tornen a taula.",
		back: "Tornar a la carta",
		journey: "El recorregut",
		category: "De la carta",
	},
	fr: {
		eyebrow: "Les favoris d'Entre Dos",
		title: "Plats",
		titleItalic: "populaires",
		intro:
			"Un parcours a partager, compose des plats qui reviennent toujours a table.",
		back: "Retour a la carte",
		journey: "Le parcours",
		category: "De la carte",
	},
} as const;

const popularIndexes = [
	{ sectionIndex: 0, itemIndex: 0 },
	{ sectionIndex: 0, itemIndex: 1 },
	{ sectionIndex: 0, itemIndex: 2 },
	{ sectionIndex: 0, itemIndex: 3 },
	{ sectionIndex: 1, itemIndex: 0 },
	{ sectionIndex: 1, itemIndex: 0, pair: true },
	{ sectionIndex: 1, itemIndex: 4, pair: true },
	{ sectionIndex: 2, itemIndex: 1 },
	{ sectionIndex: 2, itemIndex: 2 },
	{ sectionIndex: 3, itemIndex: 0 },
	{ sectionIndex: 3, itemIndex: 4 },
	{ sectionIndex: 4, itemIndex: 0 },
	{ sectionIndex: 4, itemIndex: 2 },
];

interface PopularDish {
	item: MenuItem;
	category: string;
}

const Sugerencias = () => {
	const { lang: langParam } = useParams();
	const lang = resolveLang(langParam);
	const text = copy[lang];
	const carta = languages[lang].tabs.find((tab) => tab.id === "carta")?.sections;
	const cartaPath = lang === "es" ? "/carta" : `/carta/${lang}`;

	useEffect(() => {
		const root = document.documentElement;
		const wasDark = root.classList.contains("dark");
		root.classList.remove("dark");
		return () => {
			if (wasDark) root.classList.add("dark");
		};
	}, []);

	const dishes: PopularDish[] = carta
		? popularIndexes.flatMap(({ sectionIndex, itemIndex, pair }) => {
				const section = carta[sectionIndex];
				const source = pair ? section?.pairWith : section;
				const item = source?.items[itemIndex];
				return item ? [{ item, category: source.title }] : [];
			})
		: [];

	return (
		<div className="min-h-screen overflow-hidden bg-[hsl(68_11%_83%)] text-[#2D5016]">
			<Navbar />
			<main>
				<section className="relative overflow-hidden bg-[hsl(68_11%_83%)] pt-28 pb-12 md:pt-36 md:pb-16">
					<img
						src={monsteraLeaves}
						alt=""
						aria-hidden="true"
						className="pointer-events-none absolute -right-24 -top-10 w-56 rotate-12 opacity-[0.13] md:-right-16 md:-top-20 md:w-80"
					/>
					<div className="mx-auto max-w-5xl px-6 md:px-10">
						<Link
							to={cartaPath}
							className="inline-flex w-fit items-center gap-2 font-mono-label text-[0.65rem] text-[#2D5016]/70 transition-colors hover:text-[#2D5016]"
						>
							<ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden="true" />
							{text.back}
						</Link>
						<div className="mt-10 flex flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between">
							<div className="max-w-2xl">
								<p className="mb-4 flex items-center gap-2 font-mono-label text-[0.65rem] text-[#2D5016]/70">
									<Sparkles className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
									{text.eyebrow}
								</p>
								<h1 className="font-heading text-4xl leading-[0.92] md:text-5xl">
									{text.title} <span className="font-serif-italic">{text.titleItalic}</span>
								</h1>
								<p className="mt-4 max-w-lg text-base leading-relaxed text-[#2D5016]/80">
									{text.intro}
								</p>
							</div>
							<p className="hidden font-mono-label text-[0.6rem] uppercase tracking-[0.16em] text-[#2D5016]/60 md:block">
								{text.journey} · {dishes.length}
							</p>
						</div>
					</div>
				</section>

				<section className="relative overflow-hidden bg-[hsl(68_11%_83%)] py-14 md:py-20">
					<img
						src={monsteraLeaves}
						alt=""
						aria-hidden="true"
						className="pointer-events-none absolute -bottom-24 -left-28 w-72 rotate-[18deg] opacity-[0.16] md:w-[28rem]"
					/>
					<div className="mx-auto max-w-5xl px-6 md:px-10">
						<div className="mb-10 flex items-center gap-4">
							<p className="font-mono-label text-[0.6rem] uppercase tracking-[0.16em] text-[#2D5016]/65">{text.journey}</p>
							<div className="h-px flex-1 bg-[#2D5016]/20" />
						</div>
						<div className="relative space-y-16 md:space-y-24">
							<div className="absolute bottom-10 left-1/2 top-10 hidden w-px -translate-x-1/2 border-l border-dashed border-[#2D5016]/30 md:block" />
							{dishes.map(({ item, category }, index) => (
								<article
									key={`${category}-${item.name}`}
									className="relative grid items-center gap-5 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-10"
								>
									<div className={`relative ${index % 2 === 0 ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}`}>
										<p className="font-mono-label text-[0.6rem] uppercase tracking-[0.14em] text-[#2D5016]/65">{category}</p>
										<h2 className="mt-3 font-heading text-3xl leading-[0.95] md:text-4xl">{item.name}</h2>
										<p className="mt-5 font-serif-italic text-2xl">{item.price}</p>
										<p className="mt-6 font-mono-label text-[0.58rem] uppercase tracking-[0.12em] text-[#2D5016]/60">{text.category}</p>
									</div>
									<div className="relative z-10 hidden size-10 place-items-center rounded-full border border-[#2D5016] bg-[#F5EDE0] font-mono-label text-[0.65rem] tracking-[0.12em] md:col-start-2 md:row-start-1 md:grid">
										{String(index + 1).padStart(2, "0")}
									</div>
									<div className={`relative pt-5 ${index % 2 === 0 ? "md:col-start-3 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}>
										<div className={`absolute inset-x-0 bottom-0 bg-[#2D5016]/18 ${index % 2 === 0 ? "left-5" : "right-5"}`} />
										<div className="relative aspect-[4/3] overflow-hidden shadow-xl md:aspect-[4/5]">
											{item.image ? (
												<img
													src={item.image}
													alt={item.name}
													loading={index < 3 ? "eager" : "lazy"}
													className="h-full w-full object-cover"
												/>
											) : null}
											<div className="pointer-events-none absolute inset-4 border border-white/35" />
											<span className="absolute left-4 top-4 grid size-8 place-items-center rounded-full bg-[hsl(68_11%_83%)]/95 font-mono-label text-[0.58rem] tracking-[0.12em] md:hidden">
												{String(index + 1).padStart(2, "0")}
											</span>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>
			<FooterSection />
		</div>
	);
};

export default Sugerencias;