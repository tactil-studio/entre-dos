import AboutSection from "@/components/AboutSection";
import AtmosphereSection from "@/components/AtmosphereSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import MenuDelDiaSection from "@/components/MenuDelDiaSection";
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
			<MarqueeBanner />
			<div className="day-band day-band-1 relative">
				<AboutSection />
			</div>
			<div className="day-band day-band-2">
				<MenuPreviewSection />
				<MenuDelDiaSection />
			</div>

			<AtmosphereSection />
			<div className="day-band day-band-3 relative">
				<GallerySection />
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
