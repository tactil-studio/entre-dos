import monsteraBlue from "@/assets/monstera-blue.webp";
import monsteraGreen from "@/assets/monstera-leaves.webp";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import SpotifySection from "@/components/SpotifySection";
import { useMode } from "@/contexts/ModeContext";

const Index = () => {
	const { mode } = useMode();
	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<div className="day-band day-band-1 relative">
				<AboutSection />
				{/* Monstera — bleeds from band-1 into band-2 */}
				<img
					src={mode === "night" ? monsteraBlue : monsteraGreen}
					aria-hidden="true"
					alt=""
					loading="lazy"
					style={{ bottom: "-9rem" }}
					className="pointer-events-none select-none absolute -left-20 w-80 md:w-[30rem] opacity-30 dark:opacity-25 transition-opacity duration-700 -rotate-12 z-[20]"
				/>
			</div>
			<div className="day-band day-band-2">
				<MenuPreviewSection />
			</div>
			<div className="day-band day-band-3 relative">
				<GallerySection />
				{/* Monstera blue — bleeds from band-3 into band-4 */}
				<img
					src={monsteraBlue}
					aria-hidden="true"
					alt=""
					loading="lazy"
					style={{ bottom: "-9rem" }}
					className="pointer-events-none select-none absolute -right-20 w-80 md:w-[32rem] opacity-25 dark:opacity-30 transition-opacity duration-700 rotate-6 z-[20]"
				/>
			</div>
			<div className="day-band day-band-4">
				<ReviewsSection />
			</div>
			<div className="day-band day-band-5">
				<LocationSection />
			</div>
			<div className="day-band day-band-6">
				<SpotifySection />
			</div>
			<FooterSection />
		</div>
	);
};

export default Index;
