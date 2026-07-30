import { Instagram, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-entre2.svg";
import DayNightToggle from "@/components/DayNightToggle";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const isHome = location.pathname === "/";
	const showToggle = location.pathname === "/";

	useEffect(() => {
		if (!isHome) {
			setScrolled(true);
			return;
		}
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [isHome]);

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

	const transparentNav = isHome && !scrolled && !open;
	const navLinkClass = `text-xs font-body font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
		transparentNav
			? "text-white/85 hover:text-white [text-shadow:_0_1px_8px_rgb(0_0_0_/_0.5)]"
			: "text-foreground/60 hover:text-foreground"
	} dark:hover:[text-shadow:_0_0_12px_hsl(var(--accent-blue)/0.7)]`;

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled || open
					? "bg-background/90 backdrop-blur-md border-b border-border/50"
					: "bg-transparent border-b border-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-6">
				<div className="flex items-center">
					<Link to="/" onClick={handleHomeClick}>
						<img
							src={logo}
							alt="Entre 2"
							className={`h-10 transition-all duration-300 ${transparentNav ? "invert drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]" : "dark:invert"}`}
						/>
					</Link>
				</div>

				<ul className="hidden md:flex items-center justify-center gap-8">
					<li>
						<Link to="/" onClick={handleHomeClick} className={navLinkClass}>
							Inicio
						</Link>
					</li>
					<li>
						<button
							onClick={() => scrollToSection("about")}
							className={navLinkClass}
						>
							Nosotros
						</button>
					</li>
					<li>
						<Link to="/carta" className={navLinkClass}>
							Carta
						</Link>
					</li>
					<li>
						<button
							onClick={() => scrollToSection("gallery")}
							className={navLinkClass}
						>
							Galería
						</button>
					</li>
				</ul>

				<div className="hidden md:flex items-center justify-end gap-6">
					{showToggle && <DayNightToggle size="compact" />}
					<a
						href="https://www.instagram.com/entredos.restaurante/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
						className={navLinkClass}
					>
						<Instagram size={18} />
					</a>
					<a
						href="https://www.tiktok.com/@entredos.restaurante"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="TikTok"
						className={navLinkClass}
					>
						<TikTokIcon size={18} />
					</a>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className={`md:hidden justify-self-end transition-colors ${transparentNav ? "text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]" : "text-foreground"}`}
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
								href="https://www.instagram.com/entredos.restaurante/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.tiktok.com/@entredos.restaurante"
								target="_blank"
								rel="noopener noreferrer"
								className="text-foreground/60 hover:text-foreground text-xs tracking-[0.2em] uppercase font-body"
							>
								TikTok
							</a>
						</li>
						{showToggle && (
							<li className="pt-2">
								<DayNightToggle size="compact" />
							</li>
						)}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
