import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-entre2.svg";

const FooterSection = () => {
	return (
		<footer
			id="contact"
			className="py-16 bg-foreground text-background relative overflow-hidden"
		>
			{/* Decorative elements */}
			<div className="absolute top-0 left-1/4 w-64 h-64 bg-olive/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-1/4 w-48 h-48 bg-olive/5 rounded-full blur-3xl"></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Top accent line */}
				<div className="w-20 h-0.5 bg-gradient-to-r from-olive to-olive/0 mx-auto mb-12"></div>

				<div className="grid md:grid-cols-4 gap-12 mb-12">
					{/* Logo & Tagline */}
					<div className="md:col-span-1 flex flex-col items-center md:items-start">
						<img
							src={logo}
							alt="Entre 2"
							className="h-12 brightness-0 invert mb-4"
						/>
						<p className="text-background/50 font-body text-sm text-center md:text-left italic">
							Modern Bistrot en el corazón de Barcelona
						</p>
					</div>

					{/* Quick Links */}
					<div className="md:col-span-1 text-center md:text-left">
						<h3 className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4 font-semibold">
							Navegación
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									Inicio
								</Link>
							</li>
							<li>
								<Link
									to="/carta"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									Nuestra Carta
								</Link>
							</li>
							<li>
								<a
									href="/#about"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									Nosotros
								</a>
							</li>
							<li>
								<a
									href="/#gallery"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									Galería
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div className="md:col-span-1 text-center md:text-left">
						<h3 className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4 font-semibold">
							Contacto
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-2 justify-center md:justify-start">
								<MapPin size={16} className="text-olive mt-0.5 shrink-0" />
								<span className="text-background/60 text-sm font-body">
									Carrer del Carme, 40
									<br />
									08001 Barcelona
								</span>
							</li>
							<li className="flex items-center gap-2 justify-center md:justify-start">
								<Mail size={16} className="text-olive shrink-0" />
								<a
									href="mailto:toscadelcarme40@gmail.com"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									toscadelcarme40@gmail.com
								</a>
							</li>
							<li className="flex items-center gap-2 justify-center md:justify-start">
								<Phone size={16} className="text-olive shrink-0" />
								<a
									href="tel:+34937308487"
									className="text-background/60 hover:text-background transition-colors text-sm font-body"
								>
									937308487
								</a>
							</li>
						</ul>
					</div>

					{/* Hours & Social */}
					<div className="md:col-span-1 text-center md:text-left">
						<h3 className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4 font-semibold">
							Horario
						</h3>
						<p className="text-background/60 text-sm font-body mb-1">
							Lun - Jue: 12:00 - 00:00
						</p>
						<p className="text-background/60 text-sm font-body mb-1">
							Vie: 12:00 - 01:00
						</p>
						<p className="text-background/60 text-sm font-body mb-1">
							Sáb: 11:00 - 01:00
						</p>
						<p className="text-background/60 text-sm font-body mb-4">
							Dom: 11:00 - 00:00
						</p>

						<a
							href="https://www.instagram.com/toscacarme/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-background/50 hover:text-olive transition-colors font-body text-sm mt-4"
						>
							<Instagram size={20} />
							<span>@toscacarme</span>
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-background/30 text-xs font-body tracking-widest uppercase">
						© {new Date().getFullYear()} Entre Dos · Todos los derechos
						reservados
					</p>
					<p className="text-background/20 text-xs font-body">
						Diseñado con <span className="text-olive">♥</span> en Barcelona
					</p>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
