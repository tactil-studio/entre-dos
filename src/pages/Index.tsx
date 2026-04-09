import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import SpotifySection from "@/components/SpotifySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
