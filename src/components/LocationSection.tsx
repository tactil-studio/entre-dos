import { ArrowRight, Clock, Mail, MapPin } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schedule = [
	{ day: "Lunes – Jueves", kitchen: "12:00 – 23:00", bar: "12:00 – 00:00" },
	{ day: "Viernes", kitchen: "12:00 – 00:00", bar: "12:00 – 01:00" },
	{ day: "Sábado", kitchen: "11:00 – 00:00", bar: "11:00 – 01:00" },
	{ day: "Domingo", kitchen: "11:00 – 23:00", bar: "11:00 – 00:00" },
];

const LocationSection = () => {
	const { mode } = useMode();
	const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
	const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

	return (
		<section
			id="location"
			className="py-8 md:py-12 bg-transparent relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-6 relative">
				<div className="grid md:grid-cols-2 gap-0 overflow-hidden border border-border shadow-lg">
					{/* Left — info */}
					<div
						ref={leftRef}
						className={`bg-gradient-to-br from-background via-background to-background/95 text-foreground border-r border-border/30 p-6 md:p-8 flex flex-col justify-center relative reveal-left overflow-hidden ${leftVisible ? "visible" : ""}`}
					>
						{/* Decorative elements */}
						<div className="absolute top-20 -right-32 w-64 h-64 bg-night-blue/5 rounded-full blur-3xl"></div>
						<div className="absolute bottom-10 -left-32 w-48 h-48 bg-olive/8 rounded-full blur-3xl"></div>

						{/* Top accent bar */}
						<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-olive via-night-blue to-olive/70"></div>

						<div className="relative z-10">
							<p className="text-olive text-xs tracking-[0.4em] uppercase font-body mb-4 font-semibold">
								✦ Encuéntranos
							</p>
							<h2 className="text-3xl md:text-4xl font-heading font-light leading-tight mb-2 pb-4 border-b-2 border-olive/40">
								Ven a{" "}
								<span className="italic text-olive font-light block mt-1">
									visitarnos
								</span>
							</h2>
							<div className="flex items-center gap-3 mt-3 mb-6">
								<div className="h-px w-10 bg-gradient-to-r from-olive to-olive/0"></div>
								<div className="h-px w-10 bg-gradient-to-l from-olive to-olive/0"></div>
							</div>

							{/* Address */}
							<div className="md:hidden mb-6">
								<p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-2 font-medium">
									Ubicación
								</p>
								<p className="font-body text-base text-foreground font-medium">
									Carrer del Carme, 40
								</p>
								<p className="font-body text-xs text-foreground/60">
									08001 Barcelona
								</p>
							</div>

							<div className="hidden md:flex md:items-start md:gap-3 md:mb-6 md:group">
								<div className="mt-1 p-2 bg-olive/10 rounded-lg group-hover:bg-olive/20 transition-colors">
									<MapPin size={18} className="text-olive" />
								</div>
								<div>
									<p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-1 font-medium">
										Ubicación
									</p>
									<p className="font-body text-base text-foreground font-medium">
										Carrer del Carme, 40
									</p>
									<p className="font-body text-xs text-foreground/60">
										08001 Barcelona
									</p>
								</div>
							</div>

							{/* Schedule */}
							<div className="md:hidden mb-6">
								<p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
									Horario
								</p>
								<div className="grid grid-cols-[100px_1fr_1fr] gap-x-3 items-baseline font-body text-xs pb-2 mb-3 border-b-2 border-olive/30">
									<span></span>
									<span className="text-olive font-semibold uppercase">
										Cocina
									</span>
									<span className="text-olive font-semibold uppercase">
										Bar
									</span>
								</div>
								<div className="space-y-1.5">
									{schedule.map((s, i) => (
										<div
											key={i}
											className="grid grid-cols-[100px_1fr_1fr] gap-x-3 items-baseline font-body text-xs pb-1.5 border-b border-border/10 hover:border-olive/20 transition-colors"
										>
											<span className="text-foreground font-medium">
												{s.day}
											</span>
											<span className="text-foreground/60">{s.kitchen}</span>
											<span className="text-foreground/60">{s.bar}</span>
										</div>
									))}
								</div>
								<div className="mt-3 pt-3 border-t-2 border-olive/30">
									<p className="font-body text-xs text-foreground/75 flex items-center gap-2">
										<span className="inline-block w-1.5 h-1.5 bg-olive rounded-full"></span>
										<span className="text-olive font-semibold">Brunch</span> ·
										Sáb & Dom 11:00 – 16:00
									</p>
								</div>
							</div>

							<div className="hidden md:flex md:items-start md:gap-3 md:mb-6 md:group">
								<div className="mt-1 p-2 bg-olive/10 rounded-lg group-hover:bg-olive/20 transition-colors">
									<Clock size={18} className="text-olive" />
								</div>
								<div className="w-full">
									<p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
										Horario
									</p>
									<div className="grid grid-cols-[100px_1fr_1fr] gap-x-3 items-baseline font-body text-xs pb-2 mb-3 border-b-2 border-olive/30">
										<span></span>
										<span className="text-olive font-semibold uppercase">
											Cocina
										</span>
										<span className="text-olive font-semibold uppercase">
											Bar
										</span>
									</div>
									<div className="space-y-1.5">
										{schedule.map((s, i) => (
											<div
												key={i}
												className="grid grid-cols-[100px_1fr_1fr] gap-x-3 items-baseline font-body text-xs pb-1.5 border-b border-border/10 hover:border-olive/20 transition-colors"
											>
												<span className="text-foreground font-medium">
													{s.day}
												</span>
												<span className="text-foreground/60">{s.kitchen}</span>
												<span className="text-foreground/60">{s.bar}</span>
											</div>
										))}
									</div>
									<div className="mt-3 pt-3 border-t-2 border-olive/30">
										<p className="font-body text-xs text-foreground/75 flex items-center gap-2">
											<span className="inline-block w-1.5 h-1.5 bg-olive rounded-full"></span>
											<span className="text-olive font-semibold">Brunch</span> ·
											Sáb & Dom 11:00 – 16:00
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right — Map */}
					<div
						ref={rightRef}
						className={`relative min-h-[400px] md:min-h-0 reveal-right ${rightVisible ? "visible" : ""}`}
					>
						<iframe
							title="Ubicación Entre Dos"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.5!2d2.1695!3d41.3815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f60abccc9f%3A0xaace6fe6205cca37!2sTosca%20del%20Carme!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
							width="100%"
							height="100%"
							style={{ border: 0, minHeight: "400px" }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="absolute inset-0 w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocationSection;
