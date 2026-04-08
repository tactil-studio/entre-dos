import foodPrawns from "@/assets/food-prawns.jpg";
import foodSalad1 from "@/assets/food-salad1.jpg";
import foodTacos from "@/assets/food-tacos.jpg";
import foodBrunch1 from "@/assets/food-brunch1.jpg";
import foodBrunch2 from "@/assets/food-brunch2.jpg";
import foodMezze from "@/assets/food-mezze.jpg";

const images = [
  { src: foodPrawns, alt: "Gambas al ajillo con pan catalán" },
  { src: foodSalad1, alt: "Ensalada fresca con mango" },
  { src: foodTacos, alt: "Breakfast tacos" },
  { src: foodBrunch1, alt: "Brunch con tostada artesana" },
  { src: foodMezze, alt: "Mezze board con hummus y verduras" },
  { src: foodBrunch2, alt: "Tostada con granada" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-secondary-foreground/60 text-sm tracking-[0.3em] uppercase font-body mb-4">
            Galería
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-primary-foreground">
            Nuestros <span className="italic">platos</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden group ${i === 0 ? "row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/toscacarme/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary-foreground/30 text-primary-foreground px-10 py-3 text-sm tracking-[0.25em] uppercase font-body hover:bg-primary-foreground hover:text-primary transition-all duration-500"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
