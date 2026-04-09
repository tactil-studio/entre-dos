import logo from "@/assets/logo-entre2.png";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-14 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <img src={logo} alt="Entre 2" className="h-10 invert brightness-200" />
          <p className="text-background/40 font-body text-sm text-center md:text-left max-w-sm">
            Modern Bistrot en el corazón de Barcelona. Cocina mediterránea con alma internacional.
          </p>
          <a
            href="https://www.instagram.com/toscacarme/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/50 hover:text-background transition-colors font-body text-sm"
          >
            <Instagram size={18} />
            <span>@toscacarme</span>
          </a>
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
