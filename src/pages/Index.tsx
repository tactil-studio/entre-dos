import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import Navbar from "@/components/Navbar";
import ReviewsSection from "@/components/ReviewsSection";
import SpotifySection from "@/components/SpotifySection";

const Index = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<HeroSection />
			<div className="day-band day-band-1">
				<AboutSection />
			</div>
			<div className="day-band day-band-2">
				<MenuPreviewSection />
			</div>
			<div className="day-band day-band-3">
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
