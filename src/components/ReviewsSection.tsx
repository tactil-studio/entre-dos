import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
	{
		name: "Laura M.",
		rating: 5,
		text: "Un lugar con mucho encanto en el Raval. La comida es espectacular, todo fresco y con mucho sabor. El brunch de fin de semana es increíble. ¡Volveremos seguro!",
		date: "Hace 2 semanas",
	},
	{
		name: "Marc T.",
		rating: 5,
		text: "Ambiente acogedor y platos muy bien elaborados. Las gambas al ajillo y la tostada de aguacate son de otro nivel. Muy buen servicio.",
		date: "Hace 1 mes",
	},
	{
		name: "Sophie L.",
		rating: 5,
		text: "Best brunch spot in Barcelona! The shakshuka was amazing, and the playlist creates such a cool atmosphere. Love the terrace.",
		date: "Hace 3 semanas",
	},
	{
		name: "Carlos R.",
		rating: 5,
		text: "Descubrimos este sitio por casualidad y fue un acierto total. La carta de vinos es genial y los cocktails están buenísimos. Sitio top.",
		date: "Hace 1 mes",
	},
	{
		name: "Anna B.",
		rating: 5,
		text: "Me encanta la decoración y el concepto. La comida está riquísima, especialmente los tacos de desayuno. Precios muy razonables para la calidad.",
		date: "Hace 2 meses",
	},
	{
		name: "David K.",
		rating: 5,
		text: "Great food, lovely atmosphere. The mezze board is perfect for sharing. We had a wonderful evening here. Highly recommended!",
		date: "Hace 1 mes",
	},
];

const ReviewsSection = () => {
	const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
	const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({
		rootMargin: "0px 0px -40px 0px",
	});
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextReview = () => {
		setCurrentIndex((prev) => (prev + 1) % reviews.length);
	};

	const prevReview = () => {
		setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
	};

	return (
		<section id="reviews" className="py-16 md:py-16 bg-card">
			<div className="max-w-7xl mx-auto px-6">
				<div
					ref={headerRef}
					className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
				>
					<p className="text-olive text-xs tracking-[0.3em] uppercase font-body mb-4">
						Opiniones
					</p>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground">
						Lo que dicen de{" "}
						<span className="italic text-night-blue">nosotros</span>
					</h2>
					<div className="flex items-center justify-center gap-2 mt-6">
						<div className="flex">
							{[...Array(4)].map((_, i) => (
								<Star
									key={i}
									size={18}
									className="fill-yellow-500 text-yellow-500"
								/>
							))}
							<Star size={18} className="fill-yellow-500/50 text-yellow-500" />
						</div>
						<span className="text-muted-foreground font-body text-sm ml-2">
							4.5 en Google Maps
						</span>
					</div>
				</div>

				{/* Mobile Carousel */}
				<div className="md:hidden mb-8">
					<div className="relative px-12 py-4">
						<button
							onClick={prevReview}
							className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background transition-colors"
							aria-label="Previous review"
						>
							<ChevronLeft size={20} className="text-foreground" />
						</button>

						<div className="overflow-visible min-h-[280px]">
							<div
								className="flex transition-transform duration-500 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}
							>
								{reviews.map((review, i) => (
									<div key={i} className="w-full flex-shrink-0 px-2">
										<div className="bg-background p-6 shadow-lg rounded-sm flex flex-col min-h-[280px] border border-foreground/5">
											<Quote
												size={20}
												className="text-olive/20 mb-3 flex-shrink-0"
											/>
											<div className="flex-1 overflow-y-auto mb-4 pr-2">
												<p className="text-muted-foreground font-body text-sm leading-relaxed">
													"{review.text}"
												</p>
											</div>
											<div className="flex items-center justify-between flex-shrink-0">
												<div>
													<p className="font-heading text-base text-foreground">
														{review.name}
													</p>
													<p className="text-muted-foreground/60 text-xs font-body">
														{review.date}
													</p>
												</div>
												<div className="flex">
													{[...Array(review.rating)].map((_, j) => (
														<Star
															key={j}
															size={12}
															className="fill-yellow-500 text-yellow-500"
														/>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<button
							onClick={nextReview}
							className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-lg hover:bg-background transition-colors"
							aria-label="Next review"
						>
							<ChevronRight size={20} className="text-foreground" />
						</button>
					</div>

					{/* Dots indicator */}
					<div className="flex justify-center gap-2 mt-6">
						{reviews.map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrentIndex(i)}
								className={`w-2 h-2 rounded-full transition-all ${
									i === currentIndex ? "bg-olive w-6" : "bg-foreground/20"
								}`}
								aria-label={`Go to review ${i + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Desktop Grid */}
				<div
					ref={gridRef}
					className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{reviews.map((review, i) => (
						<div
							key={i}
							className={`bg-background p-8 relative group hover:shadow-lg transition-all duration-500 reveal reveal-delay-${Math.min(i + 1, 4)} ${gridVisible ? "visible" : ""}`}
						>
							<Quote size={24} className="text-olive/20 mb-4" />
							<p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
								"{review.text}"
							</p>
							<div className="flex items-center justify-between">
								<div>
									<p className="font-heading text-lg text-foreground">
										{review.name}
									</p>
									<p className="text-muted-foreground/60 text-xs font-body">
										{review.date}
									</p>
								</div>
								<div className="flex">
									{[...Array(review.rating)].map((_, j) => (
										<Star
											key={j}
											size={12}
											className="fill-yellow-500 text-yellow-500"
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				<div
					className={`text-center mt-12 reveal reveal-delay-4 ${gridVisible ? "visible" : ""}`}
				>
					<a
						href="https://maps.app.goo.gl/by5H899MJv1qyLTy6"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block border border-foreground/20 text-foreground px-10 py-3 text-xs tracking-[0.25em] uppercase font-body hover:bg-foreground hover:text-background transition-all duration-500"
					>
						Ver todas en Google Maps
					</a>
				</div>
			</div>
		</section>
	);
};

export default ReviewsSection;
