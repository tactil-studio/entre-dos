import { Music } from "lucide-react";

const SpotifySection = () => {
	return (
		<section id="spotify" className="py-16 md:py-16bg-card">
			<div className="max-w-4xl mx-auto px-6 text-center">
				<Music className="w-6 h-6 text-olive mx-auto mb-6" />
				<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
					Nuestra playlist
				</p>
				<h2 className="text-4xl md:text-5xl font-heading font-light text-foreground mb-4">
					La banda sonora de{" "}
					<span className="italic text-olive">Entre Dos</span>
				</h2>
				<p className="text-muted-foreground font-body mb-12 max-w-md mx-auto text-sm">
					La música que suena en nuestro espacio. Escúchala donde quieras.
				</p>

				<div className="max-w-xl mx-auto mb-10">
					<iframe
						title="Entre 2 Spotify Playlist"
						src="https://open.spotify.com/embed/playlist/61T3a2uuAz7f6AAjaEJrLd?utm_source=generator&theme=0"
						width="100%"
						height="352"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						className="rounded-lg"
						style={{ border: 0 }}
					/>
				</div>

				<a
					href="https://open.spotify.com/playlist/61T3a2uuAz7f6AAjaEJrLd?si=mAXF9oc5QnyHH7cDhh3JLg"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
				>
					Abrir en Spotify
				</a>
			</div>
		</section>
	);
};

export default SpotifySection;
