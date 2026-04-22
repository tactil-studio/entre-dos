import { Music } from "lucide-react";
import floral from "@/assets/floral-day.webp";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const playlists = {
	day: {
		id: "61T3a2uuAz7f6AAjaEJrLd",
		shareUrl:
			"https://open.spotify.com/playlist/61T3a2uuAz7f6AAjaEJrLd?si=mAXF9oc5QnyHH7cDhh3JLg",
		eyebrow: "Playlist de día",
		subtitle:
			"Café, brunch y luz natural. La banda sonora de nuestras mañanas.",
	},
	night: {
		id: "0ekbRnS5z02YDU4lETdj4h",
		shareUrl:
			"https://open.spotify.com/playlist/0ekbRnS5z02YDU4lETdj4h?si=yOa_hrtZRKmZm9bwomPSCw",
		eyebrow: "Playlist de noche",
		subtitle: "Vinos, cócteles y conversaciones largas. La noche suena así.",
	},
};

const SpotifySection = () => {
	const { mode } = useMode();
	const p = playlists[mode];
	const { ref, isVisible } = useScrollReveal();

	return (
		<section
			id="spotify"
			className="py-16 md:py-16 relative overflow-hidden"
			style={{ background: "transparent" }}
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
					<p className="text-xs tracking-[0.3em] uppercase font-body mb-4 text-olive">
						{p.eyebrow}
					</p>
					<h2 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-4">
						La banda sonora de{" "}
						<span className="italic text-night-blue">Entre Dos</span>
					</h2>
					<p className="text-muted-foreground font-body mb-12 max-w-md mx-auto text-sm">
						{p.subtitle}
					</p>
				</div>

				<div
					className={`max-w-xl mx-auto mb-10 reveal-scale reveal-delay-2 ${isVisible ? "visible" : ""}`}
				>
					<iframe
						key={p.id}
						title={`Entre Dos Spotify Playlist - ${mode}`}
						src={`https://open.spotify.com/embed/playlist/${p.id}?utm_source=generator&theme=0`}
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
						href={p.shareUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						Abrir en Spotify
					</a>
				</div>
			</div>
		</section>
	);
};

export default SpotifySection;
