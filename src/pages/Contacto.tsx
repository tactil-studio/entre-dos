import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";
import FooterSection from "@/components/FooterSection";
import TikTokIcon from "@/components/icons/TikTokIcon";
import Navbar from "@/components/Navbar";
import { useLang } from "@/contexts/LangContext";

const Contacto = () => {
	const { t, lang } = useLang();
	const tl = t.location;
	const tf = t.footer;

	// Always force day mode on this page
	useEffect(() => {
		const root = document.documentElement;
		const wasDark = root.classList.contains("dark");
		root.classList.remove("dark");
		return () => {
			if (wasDark) root.classList.add("dark");
		};
	}, []);

	useEffect(() => {
		document.title =
			lang === "es"
				? "Contacto | Entre Dos – Bar de Tapas en Barcelona"
				: "Contact | Entre Dos – Tapas Bar in Barcelona";
	}, [lang]);

	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />

			{/* Page header */}
			<section className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
				<p className="text-olive text-[0.65rem] font-mono-label tracking-[0.3em] uppercase mb-3">
					Entre Dos · Barcelona
				</p>
				<h1 className="font-heading text-5xl md:text-7xl leading-none">
					{lang === "es" ? "Contacto" : "Contact"}
					<span className="italic text-olive font-light block mt-1 text-4xl md:text-5xl">
						{lang === "es" ? "& Cómo llegar" : "& How to find us"}
					</span>
				</h1>
			</section>

			{/* Main content */}
			<section className="px-6 pb-16 max-w-7xl mx-auto">
				<div className="grid md:grid-cols-2 gap-0 overflow-hidden border border-border shadow-lg rounded-2xl">
					{/* Left — info */}
					<div className="bg-gradient-to-br from-background via-background to-background/95 border-r border-border/30 p-8 md:p-12 flex flex-col gap-8 relative overflow-hidden">
						<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-olive via-night-blue to-olive/70" />

						{/* Address */}
						<address className="not-italic flex items-start gap-3 group">
							<div className="mt-1 p-2 bg-olive/10 rounded-lg group-hover:bg-olive/20 transition-colors shrink-0">
								<MapPin size={18} className="text-olive" />
							</div>
							<div>
								<p className="text-foreground/50 text-[0.65rem] font-mono-label mb-1 uppercase tracking-widest">
									{tl.addressLabel}
								</p>
								<p className="font-body text-base text-foreground font-medium">
									Carrer del Carme, 40
								</p>
								<p className="font-body text-sm text-foreground/60">
									08001 Barcelona
								</p>
								<a
									href="https://maps.google.com/?q=Carrer+del+Carme+40+Barcelona"
									target="_blank"
									rel="noopener noreferrer"
									className="text-olive text-xs font-mono-label tracking-widest uppercase mt-2 inline-block hover:underline"
								>
									{lang === "es"
										? "Abrir en Google Maps →"
										: "Open in Google Maps →"}
								</a>
							</div>
						</address>

						{/* Phone & Email */}
						<div className="flex items-start gap-3 group">
							<div className="mt-1 p-2 bg-olive/10 rounded-lg group-hover:bg-olive/20 transition-colors shrink-0">
								<Phone size={18} className="text-olive" />
							</div>
							<div>
								<p className="text-foreground/50 text-[0.65rem] font-mono-label mb-1 uppercase tracking-widest">
									{lang === "es" ? "Teléfono" : "Phone"}
								</p>
								<a
									href="tel:+34937308487"
									className="font-body text-base text-foreground hover:text-olive transition-colors"
								>
									937 308 487
								</a>
							</div>
						</div>

						<div className="flex items-start gap-3 group">
							<div className="mt-1 p-2 bg-olive/10 rounded-lg group-hover:bg-olive/20 transition-colors shrink-0">
								<Mail size={18} className="text-olive" />
							</div>
							<div>
								<p className="text-foreground/50 text-[0.65rem] font-mono-label mb-1 uppercase tracking-widest">
									Email
								</p>
								<a
									href="mailto:info@restaurante-entredos.com"
									className="font-body text-sm text-foreground hover:text-olive transition-colors"
								>
									info@restaurante-entredos.com
								</a>
							</div>
						</div>

						{/* Hours */}
						<div className="flex items-start gap-3">
							<div className="mt-1 p-2 bg-olive/10 rounded-lg shrink-0">
								<Clock size={18} className="text-olive" />
							</div>
							<div className="w-full">
								<p className="text-foreground/50 text-[0.65rem] font-mono-label mb-3 uppercase tracking-widest">
									{tl.hoursLabel}
								</p>
								<div className="grid grid-cols-[120px_1fr_1fr] gap-x-3 items-baseline font-body text-xs pb-2 mb-2 border-b-2 border-olive/30">
									<span />
									<span className="text-olive font-semibold uppercase">
										{tl.kitchenLabel}
									</span>
									<span className="text-olive font-semibold uppercase">
										{tl.barLabel}
									</span>
								</div>
								<div className="space-y-1.5">
									{tl.schedule.map((s, i) => (
										<div
											key={i}
											className="grid grid-cols-[120px_1fr_1fr] gap-x-3 font-body text-xs pb-1.5 border-b border-border/10"
										>
											<span className="text-foreground font-medium">
												{s.day}
											</span>
											<span className="text-foreground/60">{s.kitchen}</span>
											<span className="text-foreground/60">{s.bar}</span>
										</div>
									))}
								</div>
								<p className="mt-3 font-body text-xs text-foreground/60">
									<span className="text-olive font-semibold">Brunch</span> ·{" "}
									{tl.brunch}
								</p>
							</div>
						</div>

						{/* Social */}
						<div className="flex gap-4 pt-2 border-t border-border/20">
							<a
								href="https://www.instagram.com/entredos.restaurante/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors font-body text-xs tracking-widest uppercase"
							>
								<Instagram size={16} /> Instagram
							</a>
							<a
								href="https://www.tiktok.com/@entredos.restaurante"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors font-body text-xs tracking-widest uppercase"
							>
								<TikTokIcon size={16} /> TikTok
							</a>
						</div>
					</div>

					{/* Right — Google Map */}
					<div className="relative min-h-[420px]">
						<iframe
							title={
								lang === "es"
									? "Ubicación Entre Dos Barcelona"
									: "Entre Dos Barcelona Location"
							}
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d2.1695!3d41.3815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f60abccc9f%3A0xaace6fe6205cca37!2sTosca%20del%20Carme!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
							width="100%"
							height="100%"
							style={{ border: 0, minHeight: "420px" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="absolute inset-0 w-full h-full"
						/>
					</div>
				</div>
			</section>

			<FooterSection />
		</div>
	);
};

export default Contacto;
