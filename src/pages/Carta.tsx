import { useState } from "react";
import menuBebidas from "@/assets/menu-bebidas.png";
import menuBrunch from "@/assets/menu-brunch.png";
import menuCarta from "@/assets/menu-carta.png";
import menuCocktails from "@/assets/menu-cocktails.png";
import menuVinos from "@/assets/menu-vinos.png";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";

const tabs = [
	{ id: "carta", label: "Carta", image: menuCarta },
	{ id: "brunch", label: "Brunch", image: menuBrunch },
	{ id: "vinos", label: "Vinos", image: menuVinos },
	{ id: "cocktails", label: "Cocktails", image: menuCocktails },
	{ id: "bebidas", label: "Bebidas", image: menuBebidas },
];

const Carta = () => {
	const [active, setActive] = useState("carta");
	const activeTab = tabs.find((t) => t.id === active)!;

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
						<div className="w-full md:max-w-2xl shadow-lg min-h-[600px] md:min-h-[800px] flex items-start justify-center">
							<img
								key={activeTab.id}
								src={activeTab.image}
								alt={`Carta - ${activeTab.label}`}
								className="w-full max-w-full h-auto object-contain animate-fade-in"
							/>
						</div>
					</div>

					<p className="text-center mt-8 text-muted-foreground/60 text-xs font-body">
						*suplemento 10% en terraza
					</p>
				</div>
			</section>

			<FooterSection />
		</div>
	);
};

export default Carta;
