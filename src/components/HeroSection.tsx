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
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-light text-white tracking-wide opacity-0 animate-fade-up">
          Entre Dos
        </h1>
        <p className="mt-6 text-white/60 text-base md:text-lg font-body tracking-[0.3em] uppercase opacity-0 animate-fade-up animate-delay-200">
          Modern Bistrot · Barcelona
        </p>
        <div className="mt-12 opacity-0 animate-fade-up animate-delay-400">
          <a
            href="#about"
            className="inline-block border border-white/30 text-white px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-white hover:text-black transition-all duration-500"
          >
            Descubrir
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-600">
        <div className="w-px h-16 bg-white/30 mx-auto" />
      </div>
    </section>
  );
};

export default HeroSection;
