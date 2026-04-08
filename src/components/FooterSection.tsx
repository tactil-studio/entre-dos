import logo from "@/assets/logo-entre2.png";
import { Instagram, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <img src={logo} alt="Entre 2" className="h-14 invert brightness-200 mb-6" />
            <p className="text-background/50 font-body text-sm leading-relaxed">
              Modern Bistrot en el corazón de Barcelona. Cocina mediterránea con alma internacional.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6">Visítanos</h3>
            <div className="space-y-4 text-background/50 font-body text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Carrer del Carme, Barcelona</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+34 XXX XXX XXX</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl mb-6">Horario</h3>
            <div className="space-y-2 text-background/50 font-body text-sm">
              <p>Lunes – Viernes: 9:00 – 23:00</p>
              <p>Sábado – Domingo: 10:00 – 00:00</p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/toscacarme/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/50 hover:text-background transition-colors"
              >
                <Instagram size={20} />
                <span className="font-body text-sm">@toscacarme</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/30 text-xs font-body tracking-widest uppercase">
            © {new Date().getFullYear()} Entre Dos · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
