import foodHam from "@/assets/food-ham.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
              Nuestra esencia
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground leading-tight">
              Donde la tradición<br />
              <span className="italic">se encuentra</span><br />
              con lo moderno
            </h2>
            <p className="mt-8 text-muted-foreground font-body leading-relaxed text-base max-w-md">
              En Entre Dos fusionamos la cocina mediterránea con toques internacionales. 
              Un espacio pensado para compartir, disfrutar y descubrir sabores que conectan 
              culturas y momentos.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed text-base max-w-md">
              Cada plato cuenta una historia. Cada visita es una experiencia única.
            </p>
          </div>
          <div className="relative">
            <img
              src={foodHam}
              alt="Jamón curado catalán"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-olive/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
