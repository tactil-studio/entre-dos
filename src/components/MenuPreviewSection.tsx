import { Link } from "react-router-dom";
import foodPrawns from "@/assets/food-prawns.jpg";
import foodBrunch1 from "@/assets/food-brunch1.jpg";
import foodMezze from "@/assets/food-mezze.jpg";

const MenuPreviewSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
            Nuestra carta
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
            Sabores <span className="italic">mediterráneos</span>
          </h2>
          <p className="mt-6 text-muted-foreground font-body text-sm max-w-lg mx-auto">
            Platos elaborados con ingredientes frescos y de temporada. 
            Una propuesta gastronómica que fusiona tradición e innovación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { img: foodPrawns, label: "Carta", desc: "Tapas, entrantes, carnes y pescados" },
            { img: foodBrunch1, label: "Brunch", desc: "Sábados y domingos, 11–16h" },
            { img: foodMezze, label: "Bebidas & Cocktails", desc: "Vinos, cócteles y zumos naturales" },
          ].map((item, i) => (
            <Link
              to="/carta"
              key={i}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                <h3 className="font-heading text-3xl md:text-4xl font-light mb-2">{item.label}</h3>
                <p className="font-body text-white/70 text-xs tracking-[0.2em] uppercase">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/carta"
            className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Ver carta completa
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreviewSection;
