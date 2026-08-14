import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import floral from "@/assets/floral-day.webp";
import FooterSection from "@/components/FooterSection";
import MenuRenderer from "@/components/MenuRenderer";
import Navbar from "@/components/Navbar";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useMode } from "@/contexts/ModeContext";
import {
	langOrder,
	languages,
	type MenuDiaData,
	resolveLang,
} from "@/lib/menuData";

const MD_BG = "#F5EDE0";
const MD_GREEN = "#2D5016";
const MD_GREEN_DIM = "#5A7A3A";
const MD_DIVIDER = "rgba(45,80,22,0.2)";

const MenuDiaCard = ({
	data,
	terraceNote,
}: {
	data: MenuDiaData;
	terraceNote: string;
}) => (
	<div
		className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl px-6 py-10 md:px-10 flex flex-col items-center"
		style={{ backgroundColor: MD_BG }}
	>
		{/* Title with decorative rule — matches SectionBlock heading style */}
		<div className="flex items-center gap-3 w-full mb-8">
			<div className="flex-1 h-px" style={{ backgroundColor: MD_DIVIDER }} />
			<h2
				className="font-heading italic shrink-0"
				style={{
					color: MD_GREEN,
					fontSize: "clamp(2rem, 6vw, 3.5rem)",
					lineHeight: 1,
				}}
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
				style={{
					color: MD_GREEN,
					fontSize: "clamp(2.5rem, 8vw, 4rem)",
					lineHeight: 1,
				}}
			>
				{data.price}
			</span>
			<div className="w-px h-12" style={{ backgroundColor: MD_DIVIDER }} />
			<div className="flex flex-col gap-1">
				<span
					className="font-body font-semibold text-sm"
					style={{ color: MD_GREEN }}
				>
					{data.days}
				</span>
				<span className="font-body text-sm" style={{ color: MD_GREEN_DIM }}>
					{data.hours}
				</span>
			</div>
		</div>

		<p
			className="mt-10 text-xs font-body text-center"
			style={{ color: MD_GREEN_DIM }}
		>
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

	const [active, setActive] = useState<string>(() =>
		searchParams.get("tab") &&
		config.tabs.some((t) => t.id === searchParams.get("tab"))
			? searchParams.get("tab")!
			: config.tabs[0].id,
	);
	const [zoomed, setZoomed] = useState(false);

	// Always force day mode on this page
	useEffect(() => {
		const root = document.documentElement;
		const wasDark = root.classList.contains("dark");
		root.classList.remove("dark");
		return () => {
			if (wasDark) root.classList.add("dark");
		};
	}, []);

	// Reset active tab when language changes
	useEffect(() => {
		const tab = searchParams.get("tab");
		setActive(
			tab && config.tabs.some((t) => t.id === tab) ? tab : config.tabs[0].id,
		);
	}, [lang]);

	// Carta always renders in light mode regardless of the user's day/night toggle
	useLayoutEffect(() => {
		const html = document.documentElement;
		html.classList.remove("dark");
		return () => {
			// Restore the user's actual mode on unmount
			if (mode === "night") {
				html.classList.add("dark");
			} else {
				html.classList.remove("dark");
			}
		};
	}, [mode]);

	const activeTab = config.tabs.find((t) => t.id === active) ?? config.tabs[0];

	return (
		<div
			className="min-h-screen relative overflow-hidden"
			style={{ backgroundColor: "var(--surface-sage)" }}
		>
			{/* Floral decoration — top left, mirrors SpotifySection */}
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none fixed -left-16 -top-10 w-72 md:w-96 opacity-20 -scale-x-100 rotate-6"
			/>
			{/* Floral decoration — bottom right */}
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none fixed -right-16 -bottom-10 w-72 md:w-96 opacity-20"
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
					<div
						className="inline-flex flex-wrap justify-center gap-1 mt-8 p-1.5 rounded-xl"
						style={{
							backgroundColor: "rgba(255,255,255,0.35)",
							backdropFilter: "blur(6px)",
						}}
					>
						{langOrder.map((code) => {
							const isActive = code === lang;
							const to = code === "es" ? "/carta" : `/carta/${code}`;
							return (
								<Link
									key={code}
									to={to}
									className={`px-4 py-1.5 text-[10px] font-mono-label transition-all duration-300 rounded-lg ${
										isActive
											? "bg-foreground text-background"
											: "text-foreground/60 hover:text-foreground hover:bg-white/40"
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
					<div
						className="flex flex-wrap justify-center gap-x-1 gap-y-1 mb-6 p-2 rounded-xl w-fit mx-auto"
						style={{
							backgroundColor: "rgba(255,255,255,0.35)",
							backdropFilter: "blur(6px)",
						}}
					>
						{config.tabs.map((tab) => (
							<button
								type="button"
								key={tab.id}
								onClick={() => setActive(tab.id)}
								className={`px-4 py-2 text-xs font-mono-label rounded-lg transition-all duration-300 ${
									active === tab.id
										? "bg-foreground text-background"
										: "text-foreground/60 hover:text-foreground hover:bg-white/40"
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
						<MenuDiaCard
							data={activeTab.menuDia}
							terraceNote={config.terraceNote}
						/>
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
