import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import SpotifySection from "@/components/SpotifySection";
import FooterSection from "@/components/FooterSection";
import FloralBackdrop from "@/components/FloralBackdrop";

const Index = () => {
  return (
    <div className="min-h-screen relative isolation-isolate">
      <FloralBackdrop />
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
