import { Clock, MapPin, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schedule = [
	{ day: "Lunes – Jueves", kitchen: "12:00 – 23:00", bar: "12:00 – 00:00" },
	{ day: "Viernes", kitchen: "12:00 – 00:00", bar: "12:00 – 01:00" },
	{ day: "Sábado", kitchen: "11:00 – 00:00", bar: "11:00 – 01:00" },
	{ day: "Domingo", kitchen: "11:00 – 23:00", bar: "11:00 – 00:00" },
];

const LocationSection = () => {
	const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
	const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

	return (
		<section id="location" className="py-16 md:py-24 bg-background">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-0 overflow-hidden border border-border">
					{/* Left — info */}
					<div
						ref={leftRef}
						className={`bg-foreground text-background p-10 md:p-16 flex flex-col justify-center reveal-left ${leftVisible ? "visible" : ""}`}
					>
						<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-6">
							Encuéntranos
						</p>
						<h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-10">
							Ven a{" "}
							<span className="italic text-olive">visitarnos</span>
						</h2>

						{/* Address */}
						<div className="flex items-start gap-4 mb-8">
							<MapPin size={18} className="text-olive mt-1 shrink-0" />
							<div>
								<p className="font-body text-sm text-background/90">
									C/ del Carme, 40
								</p>
								<p className="font-body text-sm text-background/50">
									08001 Barcelona
								</p>
							</div>
						</div>

						{/* Schedule */}
						<div className="flex items-start gap-4 mb-8">
							<Clock size={18} className="text-olive mt-1 shrink-0" />
							<div className="w-full">
								<p className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">
									Horario
								</p>
								<div className="space-y-3">
									{schedule.map((s, i) => (
										<div key={i} className="grid grid-cols-[1fr_auto_auto] gap-x-4 items-baseline font-body text-sm">
											<span className="text-background/90">{s.day}</span>
											<span className="text-background/50 text-xs">Cocina {s.kitchen}</span>
											<span className="text-background/50 text-xs">Bar {s.bar}</span>
										</div>
									))}
								</div>
								<div className="mt-4 pt-4 border-t border-background/10">
									<p className="font-body text-sm text-background/70">
										<span className="text-olive font-medium">Brunch</span> · Sáb & Dom 11:00 – 16:00
									</p>
								</div>
							</div>
						</div>

						{/* Contact */}
						<div className="flex items-start gap-4">
							<Mail size={18} className="text-olive mt-1 shrink-0" />
							<a
								href="mailto:toscadelcarme40@gmail.com"
								className="font-body text-sm text-background/70 hover:text-background transition-colors"
							>
								toscadelcarme40@gmail.com
							</a>
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
