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
		<div className="min-h-screen relative isolation-isolate">
			<div className="relative z-10">
				<Navbar />
				<HeroSection />
				<AboutSection />
				<MenuPreviewSection />
				<GallerySection />
				<ReviewsSection />
				<LocationSection />
				<SpotifySection />
				<FooterSection />
			</div>
		</div>
	);
};

export default Index;
