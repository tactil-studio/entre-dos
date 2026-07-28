const MESSAGES = [
	"Sala privada disponible en el piso inferior",
	"Private room available downstairs",
	"Reservas para grupos · Groups welcome",
	"Entre 2 · Barcelona",
];

const MarqueeBanner = () => {
	// Repeat the sequence so the track is wide enough for a seamless loop
	const items = Array.from({ length: 4 }).flatMap((_, i) =>
		MESSAGES.map((m, j) => ({ text: m, key: `${i}-${j}` })),
	);

	return (
		<div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background border-b border-foreground/20 overflow-hidden">
			<div className="flex whitespace-nowrap animate-marquee py-1.5">
				{items.map(({ text, key }) => (
					<span
						key={key}
						className="mx-6 text-[0.65rem] font-body tracking-[0.3em] uppercase flex items-center gap-6"
					>
						{text}
						<span className="opacity-40">◆</span>
					</span>
				))}
			</div>
		</div>
	);
};

export default MarqueeBanner;
