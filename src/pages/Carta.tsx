import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import FooterSection from "@/components/FooterSection";
import MenuRenderer from "@/components/MenuRenderer";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useMode } from "@/contexts/ModeContext";
import { langOrder, languages, resolveLang, type MenuDiaData } from "@/lib/menuData";

const MD_BG = "#F5EDE0";
const MD_GREEN = "#2D5016";
const MD_GREEN_DIM = "#5A7A3A";
const MD_DIVIDER = "rgba(45,80,22,0.2)";

const MenuDiaCard = ({ data, terraceNote }: { data: MenuDiaData; terraceNote: string }) => (
	<div
		className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl px-6 py-10 md:px-10 flex flex-col items-center"
		style={{ backgroundColor: MD_BG }}
	>
		{/* Title with decorative rule — matches SectionBlock heading style */}
		<div className="flex items-center gap-3 w-full mb-8">
			<div className="flex-1 h-px" style={{ backgroundColor: MD_DIVIDER }} />
			<h2
				className="font-heading italic shrink-0"
				style={{ color: MD_GREEN, fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1 }}
			>
				{data.title}
			</h2>
			<div className="flex-1 h-px" style={{ backgroundColor: MD_DIVIDER }} />
		</div>

		{/* Courses list */}
		<div className="w-full flex flex-col items-center mb-8">
			{data.courses.map((course, i) => (
				<div
					key={i}
					className="w-full py-2.5 text-center"
					style={{ borderBottom: `1px solid ${MD_DIVIDER}` }}
				>
					<span className="font-body text-lg" style={{ color: MD_GREEN_DIM }}>
						{course}
					</span>
				</div>
			))}
		</div>

		{/* Price + days/hours */}
		<div className="flex items-center justify-center gap-8 mt-2">
			<span
				className="font-heading italic"
				style={{ color: MD_GREEN, fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1 }}
			>
				{data.price}
			</span>
			<div className="w-px h-12" style={{ backgroundColor: MD_DIVIDER }} />
			<div className="flex flex-col gap-1">
				<span className="font-body font-semibold text-sm" style={{ color: MD_GREEN }}>{data.days}</span>
				<span className="font-body text-sm" style={{ color: MD_GREEN_DIM }}>{data.hours}</span>
			</div>
		</div>

		<p className="mt-10 text-xs font-body text-center" style={{ color: MD_GREEN_DIM }}>
			{terraceNote}
		</p>
	</div>
);

const Carta = () => {
	const { lang: langParam } = useParams();
	const [searchParams] = useSearchParams();
	const lang = resolveLang(langParam);
	const config = languages[lang];
	const { mode } = useMode();

	const initialTab = searchParams.get("tab") || config.tabs[0].id;
	const [active, setActive] = useState(initialTab);
	const [zoomed, setZoomed] = useState(false);

	// Force dark class on <html> so navbar, footer and all theme tokens use night palette.
	// On cleanup, restore the class based on the current mode so ModeContext stays in sync.
	useEffect(() => {
		const html = document.documentElement;
		html.classList.add("dark");
		return () => {
			if (mode === "night") {
				html.classList.add("dark");
			} else {
				html.classList.remove("dark");
			}
		};
	}, [mode]);

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
		<div
			className="min-h-screen bg-background relative overflow-hidden"
			style={{ "--background": "209 54% 22%" } as React.CSSProperties}
		>
			{/* Floral background — mobile */}
			<img
				src="/bg-floral.svg"
				alt=""
				aria-hidden="true"
				className="lg:hidden fixed inset-0 w-full h-full pointer-events-none select-none"
				style={{ objectFit: "cover" }}
			/>
			{/* Floral background — desktop rotated */}
			<img
				src="/bg-floral.svg"
				alt=""
				aria-hidden="true"
				className="hidden lg:block fixed pointer-events-none select-none"
				style={{
					top: "50%",
					left: "50%",
					width: "calc(100vh + 20px)",
					height: "calc(100vw + 20px)",
					transform: "translate(-50%, -50%) rotate(270deg)",
				}}
			/>
			<Navbar />

			<section className="pt-32 pb-6 bg-transparent relative z-10">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<p className="text-xs font-mono-label mb-4 text-muted-foreground">
						{config.eyebrow}
					</p>
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground">
						{config.title} <span className="italic">{config.titleItalic}</span>
					</h1>

					{/* Language switcher */}
					<div className="flex flex-wrap justify-center gap-1 mt-8">
						{langOrder.map((code) => {
							const isActive = code === lang;
							const to = code === "es" ? "/carta" : `/carta/${code}`;
							return (
								<Link
									key={code}
									to={to}
									className={`px-4 py-1.5 text-[10px] font-mono-label transition-all duration-300 border ${
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

			<section className="pb-24 bg-transparent relative z-10">
				<div className="max-w-4xl mx-auto px-6">
					{/* Tabs */}
					<div className="flex flex-wrap justify-center gap-2 mb-12 pb-4 border-b border-border">
						{config.tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActive(tab.id)}
								className={`px-6 py-2 text-xs font-mono-label transition-all duration-300 ${
									active === tab.id
										? "text-foreground border-b-2 border-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{tab.label}
							</button>
						))}
					</div>

					{activeTab.sections ? (
						<MenuRenderer
							sections={activeTab.sections}
							terraceNote={config.terraceNote}
						/>
					) : activeTab.menuDia ? (
						<MenuDiaCard data={activeTab.menuDia} terraceNote={config.terraceNote} />
					) : (
						<>
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
							<p className="text-center mt-4 text-[0.65rem] font-mono-label md:hidden text-muted-foreground">
								{config.tapHint}
							</p>
							<p className="text-center mt-8 text-[0.65rem] font-mono-label text-muted-foreground">
								{config.terraceNote}
							</p>
						</>
					)}
				</div>
			</section>

			{activeTab.image && (
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
			)}

			<FooterSection />
		</div>
	);
};

export default Carta;
