import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Entre 2 restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light text-primary-foreground tracking-wide opacity-0 animate-fade-up">
          Entre Dos
        </h1>
        <p className="mt-6 text-primary-foreground/70 text-lg md:text-xl font-body tracking-[0.3em] uppercase opacity-0 animate-fade-up animate-delay-200">
          Modern Bistrot · Barcelona
        </p>
        <div className="mt-12 opacity-0 animate-fade-up animate-delay-400">
          <a
            href="#about"
            className="inline-block border border-primary-foreground/40 text-primary-foreground px-10 py-3 text-sm tracking-[0.25em] uppercase font-body hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            Descubrir
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-600">
        <div className="w-px h-16 bg-primary-foreground/30 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
