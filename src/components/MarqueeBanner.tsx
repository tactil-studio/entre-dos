const MESSAGES = [
	"Sala privada disponible en el piso inferior",
	"Private room available downstairs",
	"Reservas para grupos · Groups welcome",
	"Ven tal como eres",
	"Entre 2 · Barcelona",
];

const MarqueeBanner = () => {
	// Repeat the sequence so the track is wide enough for a seamless loop
	const items = Array.from({ length: 4 }).flatMap((_, i) =>
		MESSAGES.map((m, j) => ({ text: m, key: `${i}-${j}` })),
	);

	return (
		<div className="relative z-30 bg-foreground text-background border-b border-foreground/10 overflow-hidden">
			<div className="flex whitespace-nowrap animate-marquee py-4">
				{items.map(({ text, key }) => (
					<span
						key={key}
						className="mx-10 text-sm md:text-base font-mono-label font-bold flex items-center gap-10"
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
