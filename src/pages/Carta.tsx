import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import menuBebidas from "@/assets/menu-bebidas.webp";
import menuBrunch from "@/assets/menu-brunch.webp";
import menuCarta from "@/assets/menu-carta.webp";
import menuCocktails from "@/assets/menu-cocktails.webp";
import menuVinos from "@/assets/menu-vinos.webp";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const tabs = [
	{ id: "carta", label: "Carta", image: menuCarta },
	{ id: "brunch", label: "Brunch", image: menuBrunch },
	{ id: "vinos", label: "Vinos", image: menuVinos },
	{ id: "cocktails", label: "Cocktails", image: menuCocktails },
	{ id: "bebidas", label: "Bebidas", image: menuBebidas },
];

const Carta = () => {
	const [searchParams] = useSearchParams();
	const initialTab = searchParams.get("tab") || "carta";
	const [active, setActive] = useState(initialTab);
	const [zoomed, setZoomed] = useState(false);
	const activeTab = tabs.find((t) => t.id === active)!;

	useEffect(() => {
		const tab = searchParams.get("tab");
		if (tab && tabs.some((t) => t.id === tab)) {
			setActive(tab);
		}
	}, [searchParams]);

	return (
		<div className="min-h-screen">
			<Navbar />

			<section className="pt-32 pb-8 bg-background">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						Nuestra propuesta
					</p>
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-foreground">
						La <span className="italic">carta</span>
					</h1>
				</div>
			</section>

			<section className="pb-24 bg-background">
				<div className="max-w-4xl mx-auto px-6">
					{/* Tabs */}
					<div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-border pb-4">
						{tabs.map((tab) => (
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

					{/* Menu image */}
					<div className="flex justify-center">
						<div
							className="w-full md:max-w-2xl shadow-lg flex items-start justify-center cursor-zoom-in"
							onClick={() => setZoomed(true)}
						>
							<img
								key={activeTab.id}
								src={activeTab.image}
								alt={`Carta - ${activeTab.label}`}
								className="w-full max-w-full h-auto object-contain animate-fade-in"
							/>
						</div>
					</div>

					<p className="text-center mt-4 text-muted-foreground/50 text-xs font-body md:hidden">
						Toca para ampliar
					</p>

					<p className="text-center mt-8 text-muted-foreground/60 text-xs font-body">
						*suplemento 10% en terraza
					</p>
				</div>
			</section>

			{/* Fullscreen zoom dialog */}
			<Dialog open={zoomed} onOpenChange={setZoomed}>
				<DialogContent className="max-w-none w-screen h-screen p-4 md:p-8 border-none bg-black/95 overflow-auto flex items-center justify-center">
					<VisuallyHidden>
						<DialogTitle>Carta - {activeTab.label}</DialogTitle>
					</VisuallyHidden>
					<img
						src={activeTab.image}
						alt={`Carta - ${activeTab.label}`}
						className="w-full max-w-3xl mx-auto h-auto max-h-full object-contain"
					/>
				</DialogContent>
			</Dialog>

			<FooterSection />
		</div>
	);
};

export default Carta;
