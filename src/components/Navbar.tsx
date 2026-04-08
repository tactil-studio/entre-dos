import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-entre2.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Inicio", href: isHome ? "#hero" : "/", isLink: !isHome },
    { label: "Nosotros", href: isHome ? "#about" : "/#about", isLink: !isHome },
    { label: "Carta", href: "/carta", isLink: true },
    { label: "Galería", href: isHome ? "#gallery" : "/#gallery", isLink: !isHome },
    { label: "Contacto", href: isHome ? "#contact" : "/#contact", isLink: !isHome },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Entre 2" className="h-10" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.isLink ? (
                <Link
                  to={item.href}
                  className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase transition-colors"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="https://www.instagram.com/toscacarme/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-foreground/60 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body transition-colors"
        >
          Instagram ↗
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-sm px-6 pb-8 border-b border-border/50">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isLink ? (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="https://www.instagram.com/toscacarme/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body"
              >
                Instagram ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
