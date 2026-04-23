import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-entre2.svg";
import DayNightToggle from "@/components/DayNightToggle";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const isHome = location.pathname === "/";

	const scrollToSection = useCallback(
		(sectionId: string) => {
			setOpen(false);
			if (isHome) {
				const el = document.getElementById(sectionId);
				if (el) {
					el.scrollIntoView({ behavior: "smooth" });
				}
			} else {
				navigate("/?section=" + sectionId);
			}
		},
		[isHome, navigate],
	);

	const handleHomeClick = useCallback(() => {
		setOpen(false);
		if (isHome) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [isHome]);

	const navLinkClass =
		"text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase transition-all duration-300 dark:hover:text-foreground dark:hover:[text-shadow:_0_0_12px_hsl(var(--accent-blue)/0.7)]";

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
			<div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
				<div className="flex items-center">
					<Link to="/" onClick={handleHomeClick}>
						<img src={logo} alt="Entre 2" className="h-10 dark:invert" />
					</Link>
				</div>

				<ul className="hidden md:flex items-center justify-center gap-8">
					<li>
						<Link to="/" onClick={handleHomeClick} className={navLinkClass}>
							Inicio
						</Link>
					</li>
					<li>
						<button onClick={() => scrollToSection("about")} className={navLinkClass}>
							Nosotros
						</button>
					</li>
					<li>
						<Link to="/carta" className={navLinkClass}>
							Carta
						</Link>
					</li>
					<li>
						<button onClick={() => scrollToSection("gallery")} className={navLinkClass}>
							Galería
						</button>
					</li>
				</ul>

				<div className="hidden md:flex items-center justify-end gap-6">
					<DayNightToggle size="compact" />
					<a
						href="https://www.instagram.com/toscacarme/"
						target="_blank"
						rel="noopener noreferrer"
						className={navLinkClass}
					>
						Instagram
					</a>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className="md:hidden text-foreground justify-self-end"
					aria-label="Toggle menu"
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{open && (
				<div className="md:hidden bg-background/98 backdrop-blur-sm px-6 pb-8 border-b border-border/50">
					<ul className="flex flex-col gap-6">
						<li>
							<Link
								to="/"
								onClick={handleHomeClick}
								className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
							>
								Inicio
							</Link>
						</li>
						<li>
							<button
								onClick={() => scrollToSection("about")}
								className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
							>
								Nosotros
							</button>
						</li>
						<li>
							<Link
								to="/carta"
								onClick={() => setOpen(false)}
								className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
							>
								Carta
							</Link>
						</li>
						<li>
							<button
								onClick={() => scrollToSection("gallery")}
								className="text-foreground/60 hover:text-foreground text-xs font-body tracking-[0.2em] uppercase"
							>
								Galería
							</button>
						</li>
						<li>
							<a
								href="https://www.instagram.com/toscacarme/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body"
							>
								Instagram
							</a>
						</li>
						<li className="pt-2">
							<DayNightToggle size="compact" />
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
