import { Music } from "lucide-react";
import floral from "@/assets/floral-day.webp";
import { useLang } from "@/contexts/LangContext";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const playlistIds = {
	day: "0CGVCIQ0OCc9ntNy5exaZL",
	night: "0CGVCIQ0OCc9ntNy5exaZL",
};
const shareUrl = "https://open.spotify.com/playlist/0CGVCIQ0OCc9ntNy5exaZL";

const SpotifySection = () => {
	const { mode } = useMode();
	const { t } = useLang();
	const p = t.spotify[mode];
	const playlistId = playlistIds[mode];
	const { ref, isVisible } = useScrollReveal();

	return (
		<section
			id="spotify"
			className="py-16 md:py-16 relative overflow-hidden"
			style={{ backgroundColor: "var(--surface-sage)" }}
		>
			{/* Floral decoration */}
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none absolute -right-16 -bottom-10 w-72 md:w-96 opacity-25 dark:opacity-10 dark:invert transition-opacity duration-700"
			/>
			<img
				src={floral}
				aria-hidden="true"
				alt=""
				loading="lazy"
				className="pointer-events-none select-none absolute -left-16 -top-10 w-56 md:w-72 opacity-20 dark:opacity-8 dark:invert transition-opacity duration-700 -scale-x-100 rotate-6"
			/>
			<div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
				<div className={`reveal ${isVisible ? "visible" : ""}`}>
					<Music className="w-6 h-6 mx-auto mb-6 text-olive" />
					<p className="text-xs font-mono-label mb-4 text-olive">{p.eyebrow}</p>
					<h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
						{t.spotify.titleStart}{" "}
						<span className="italic text-olive">{t.spotify.titleItalic}</span>
					</h2>
					<p className="text-muted-foreground font-body mb-12 max-w-md mx-auto text-sm">
						{p.subtitle}
					</p>
				</div>

				<div
					className={`max-w-xl mx-auto mb-10 reveal-scale reveal-delay-2 ${isVisible ? "visible" : ""}`}
				>
					<iframe
						key={playlistId}
						title={`Entre Dos Spotify Playlist - ${mode}`}
						src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
						width="100%"
						height="352"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						className="rounded-lg"
						style={{ border: 0 }}
					/>
				</div>

				<div className={`reveal reveal-delay-3 ${isVisible ? "visible" : ""}`}>
					<a
						href={shareUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						{t.spotify.cta}
					</a>
				</div>
			</div>
		</section>
	);
};

export default SpotifySection;
