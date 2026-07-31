import type { MenuSection } from "@/lib/menuData";

interface MenuRendererProps {
	sections: MenuSection[];
	terraceNote: string;
}

const BG = "#F5EDE0"; // warm parchment card background
const GREEN = "#2D5016"; // dark forest green — matches original
const GREEN_DIM = "#5A7A3A"; // lighter green for item text
const DIVIDER = "rgba(45,80,22,0.2)";

// Renders a single section column
const SectionBlock = ({ section }: { section: MenuSection }) => {
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
				<div className="grid grid-cols-2 gap-x-6" style={{ borderTop: `1px solid ${DIVIDER}` }}>
					{section.items.map((item, i) => (
						<div
							key={i}
							className="flex justify-between gap-2 py-1.5 text-xs"
							style={{ borderBottom: `1px solid ${DIVIDER}` }}
						>
							<span style={{ color: GREEN_DIM }}>{item.name}</span>
							<span className="shrink-0 tabular-nums" style={{ color: GREEN, fontWeight: 600 }}>
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
					className="font-heading italic shrink-0"
					style={{ color: GREEN, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1 }}
				>
					{section.title}
				</h2>
				<div className="flex-1 h-px" style={{ backgroundColor: DIVIDER }} />
			</div>
			{section.subtitle && (
				<p className="font-body font-bold text-sm mb-4" style={{ color: GREEN }}>
					{section.subtitle}
				</p>
			)}
			<div>
				{section.items.map((item, i) => (
					<div key={i} className="py-2" style={{ borderBottom: `1px solid ${DIVIDER}` }}>
						<div className="flex items-baseline justify-between gap-2">
							<span className="font-body font-semibold text-base leading-snug" style={{ color: GREEN }}>
								{item.name}
							</span>
							<span className="font-body text-sm shrink-0 tabular-nums ml-4" style={{ color: GREEN, fontWeight: 600 }}>
								{item.price}
							</span>
						</div>
						{item.subtitle && (
							<p className="font-body text-xs mt-0.5 leading-snug" style={{ color: GREEN }}>
								{item.subtitle}
							</p>
						)}
						{item.desc && (
							<p className="font-body text-xs mt-0.5 leading-snug italic" style={{ color: GREEN_DIM }}>
								{item.desc}
							</p>
						)}
					</div>
				))}
			</div>
			{section.note && (
				<p className="font-body text-xs mt-4 italic" style={{ color: GREEN_DIM }}>
					{section.note}
				</p>
			)}
		</div>
	);
};

const MenuRenderer = ({ sections, terraceNote }: MenuRendererProps) => {
	// Track which section titles have already been rendered as pairWith
	const rendered = new Set<string>();

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
							className="mt-10 first:mt-0 grid grid-cols-2 gap-6"
						>
							<SectionBlock section={section} />
							<SectionBlock section={section.pairWith} />
						</div>
					);
				}

				return (
					<div key={section.title} className="mt-10 first:mt-0">
						<SectionBlock section={section} />
					</div>
				);
			})}

			<p className="mt-12 text-xs font-body" style={{ color: GREEN_DIM }}>
				{terraceNote}
			</p>
		</div>
	);
};

export default MenuRenderer;
