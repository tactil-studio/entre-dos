import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import type { MenuItem, MenuSection } from "@/lib/menuData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface MenuRendererProps {
	sections: MenuSection[];
	terraceNote: string;
}

const BG = "#F5EDE0"; // warm parchment card background
const GREEN = "#2D5016"; // dark forest green — matches original
const GREEN_DIM = "#5A7A3A"; // lighter green for item text
const DIVIDER = "rgba(45,80,22,0.2)";

// Renders a single section column
const SectionBlock = ({
	section,
	onSelectPhoto,
}: {
	section: MenuSection;
	onSelectPhoto: (item: MenuItem) => void;
}) => {
	// Extras: compact two-column grid
	if (section.layout === "extras-grid") {
		return (
			<div>
				<h2
					className="font-body font-bold tracking-widest uppercase text-xs mb-3 mt-2"
					style={{ color: GREEN }}
				>
					{section.title}
				</h2>
				<div
					className="grid grid-cols-2 gap-x-6"
					style={{ borderTop: `1px solid ${DIVIDER}` }}
				>
					{section.items.map((item, i) => (
						<div
							key={i}
							className="flex justify-between gap-2 py-1.5 text-xs"
							style={{ borderBottom: `1px solid ${DIVIDER}` }}
						>
							<span style={{ color: GREEN_DIM }}>{item.name}</span>
							<span
								className="shrink-0 tabular-nums"
								style={{ color: GREEN, fontWeight: 600 }}
							>
								{item.price}
							</span>
						</div>
					))}
				</div>
			</div>
		);
	}

	// Default: heading + optional subtitle + items with optional desc
	return (
		<div className="flex flex-col min-w-0">
			<div className="flex items-center gap-3 mb-1">
				<h2
					className="font-heading italic min-w-0"
					style={{
						color: GREEN,
						fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
						lineHeight: 1,
					}}
				>
					{section.title}
				</h2>
				<div className="flex-1 h-px" style={{ backgroundColor: DIVIDER }} />
			</div>
			{section.subtitle && (
				<p
					className="font-body font-bold text-sm mb-4"
					style={{ color: GREEN }}
				>
					{section.subtitle}
				</p>
			)}
			<div>
				{section.items.map((item, i) => (
					<div
						key={i}
						className="py-2"
						style={{ borderBottom: `1px solid ${DIVIDER}` }}
					>
						<div className="flex items-baseline justify-between gap-2">
							{item.image ? (
								<button
									type="button"
									onClick={() => onSelectPhoto(item)}
									className="min-w-0 text-left font-body font-semibold text-base leading-snug decoration-dotted underline-offset-4 transition-colors hover:text-[#5A7A3A] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#2D5016] focus-visible:ring-offset-2"
									style={{ color: GREEN, textDecorationLine: "underline" }}
									aria-label={`View photo of ${item.name}`}
								>
									{item.name}
								</button>
							) : (
								<span
									className="min-w-0 font-body font-semibold text-base leading-snug"
									style={{ color: GREEN }}
								>
									{item.name}
								</span>
							)}
							<div className="shrink-0 ml-4">
								<span
									className="font-body text-sm tabular-nums"
									style={{ color: GREEN, fontWeight: 600 }}
								>
									{item.price}
								</span>
							</div>
						</div>
						{item.subtitle && (
							<p
								className="font-body text-xs mt-0.5 leading-snug"
								style={{ color: GREEN }}
							>
								{item.subtitle}
							</p>
						)}
						{item.desc && (
							<p
								className="font-body text-xs mt-0.5 leading-snug italic"
								style={{ color: GREEN_DIM }}
							>
								{item.desc}
							</p>
						)}
					</div>
				))}
			</div>
			{section.note && (
				<p
					className="font-body text-xs mt-4 italic"
					style={{ color: GREEN_DIM }}
				>
					{section.note}
				</p>
			)}
		</div>
	);
};

const MenuRenderer = ({ sections, terraceNote }: MenuRendererProps) => {
	// Track which section titles have already been rendered as pairWith
	const rendered = new Set<string>();
	const [selectedPhoto, setSelectedPhoto] = useState<MenuItem | null>(null);

	return (
		<div
			className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl px-6 py-10 md:px-10"
			style={{ backgroundColor: BG }}
		>
			{sections.map((section) => {
				if (rendered.has(section.title)) return null;

				if (section.pairWith) {
					rendered.add(section.pairWith.title);
					return (
						<div
							key={section.title}
							className="mt-10 first:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6"
						>
							<SectionBlock section={section} onSelectPhoto={setSelectedPhoto} />
							<SectionBlock section={section.pairWith} onSelectPhoto={setSelectedPhoto} />
						</div>
					);
				}

				return (
					<div key={section.title} className="mt-10 first:mt-0">
						<SectionBlock section={section} onSelectPhoto={setSelectedPhoto} />
					</div>
				);
			})}

			<p className="mt-12 text-xs font-body" style={{ color: GREEN_DIM }}>
				{terraceNote}
			</p>

			<Dialog
				open={selectedPhoto !== null}
				onOpenChange={(open) => !open && setSelectedPhoto(null)}
			>
				<DialogContent className="w-[calc(100%-2rem)] max-w-4xl border border-[#2D5016]/20 bg-[#F5EDE0] p-3 shadow-2xl sm:rounded-none [&>button]:text-[#2D5016] [&>button]:hover:text-[#5A7A3A]">
					<VisuallyHidden>
						<DialogTitle>{selectedPhoto?.name}</DialogTitle>
					</VisuallyHidden>
					{selectedPhoto?.image && (
						<img
							src={selectedPhoto.image}
							alt={selectedPhoto.name}
							className="max-h-[78vh] w-full object-contain"
						/>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default MenuRenderer;
