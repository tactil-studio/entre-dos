import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { langOrder, languages, resolveLang } from "@/lib/menuData";

const Carta = () => {
	const { lang: langParam } = useParams();
	const [searchParams] = useSearchParams();
	const lang = resolveLang(langParam);
	const config = languages[lang];

	const initialTab = searchParams.get("tab") || config.tabs[0].id;
	const [active, setActive] = useState(initialTab);
	const [zoomed, setZoomed] = useState(false);

	useEffect(() => {
		const tab = searchParams.get("tab");
		if (tab && config.tabs.some((t) => t.id === tab)) {
			setActive(tab);
		} else if (!config.tabs.some((t) => t.id === active)) {
			setActive(config.tabs[0].id);
		}
	}, [searchParams, config, active]);

	const activeTab = config.tabs.find((t) => t.id === active) ?? config.tabs[0];

	return (
		<div className="min-h-screen">
			<Navbar />

			<section className="pt-32 pb-6 bg-background">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						{config.eyebrow}
					</p>
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-foreground">
						{config.title}{" "}
						<span className="italic">{config.titleItalic}</span>
					</h1>

					{/* Language switcher */}
					<div className="flex flex-wrap justify-center gap-1 mt-8">
						{langOrder.map((code) => {
							const isActive = code === lang;
							const to =
								code === "es" ? "/carta" : `/carta/${code}`;
							return (
								<Link
									key={code}
									to={to}
									className={`px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase font-body transition-all duration-300 border ${
										isActive
											? "border-foreground text-foreground"
											: "border-transparent text-muted-foreground hover:text-foreground"
									}`}
								>
									{languages[code].nativeName}
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			<section className="pb-24 bg-background">
				<div className="max-w-4xl mx-auto px-6">
					{/* Tabs */}
					<div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border pb-4">
						{config.tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActive(tab.id)}
								className={`px-6 py-2 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 ${
									active === tab.id
										? "text-foreground border-b-2 border-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>

					<div className="flex justify-center min-h-[60vh]">
						<div
							className="w-full md:max-w-2xl shadow-lg flex items-start justify-center cursor-zoom-in"
							onClick={() => setZoomed(true)}
						>
							<img
								src={activeTab.image}
								alt={`${config.titleItalic} - ${activeTab.label}`}
								className="w-full max-w-full h-auto object-contain"
							/>
						</div>
					</div>

					<p className="text-center mt-4 text-muted-foreground/50 text-xs font-body md:hidden">
						{config.tapHint}
					</p>

					<p className="text-center mt-8 text-muted-foreground/60 text-xs font-body">
						{config.terraceNote}
					</p>
				</div>
			</section>

			<Dialog open={zoomed} onOpenChange={setZoomed}>
				<DialogContent className="max-w-none w-screen h-screen p-4 md:p-8 border-none bg-black/95 overflow-auto flex items-center justify-center [&>button]:text-white [&>button]:hover:text-white/80 [&>button]:bg-white/10 [&>button]:hover:bg-white/20">
					<VisuallyHidden>
						<DialogTitle>
							{config.titleItalic} - {activeTab.label}
						</DialogTitle>
					</VisuallyHidden>
					<img
						src={activeTab.image}
						alt={`${config.titleItalic} - ${activeTab.label}`}
						className="w-full max-w-3xl mx-auto h-auto max-h-full object-contain"
					/>
				</DialogContent>
			</Dialog>

			<FooterSection />
		</div>
	);
};

export default Carta;
