import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
	{
		name: "Brent V.",
		rating: 5,
		text: "Mi novia y yo cenamos aquí hace unos días. El ambiente era muy acogedor, con buena música de fondo. El personal fue muy amable y atento. Pedimos el salmón al horno, el pollo con tzatziki y las patatas gajo, todo delicioso. Además, los cócteles estaban increíbles.",
		date: "Hace 1 semana",
	},
	{
		name: "Laudenor P.",
		rating: 5,
		text: "Ambiente auténtico y acogedor, comida excelente, precios justos y un servicio impecable.",
		date: "Hace 1 semana",
	},
	{
		name: "Alexandra D.",
		rating: 5,
		text: "Great discovery in El Raval! The food was excellent and the atmosphere perfect for a relaxed dinner. The staff is super friendly and attentive. We'll definitely be back!",
		date: "Hace 1 semana",
	},
	{
		name: "Sandra D.",
		rating: 5,
		text: "Un restaurante muy especial, con muy buen ambiente y muy bien situado. Los platos que comimos estuvieron deliciosos. Tiene vinos y bebidas a buen precio. Personal atento y amable.",
		date: "Hace 2 días",
	},
	{
		name: "Elodie B.",
		rating: 5,
		text: "A wonderful welcome for families with children. Truly a charming place with delicious food and a lovely terrace. Highly recommend for brunch!",
		date: "Hace 1 semana",
	},
	{
		name: "Valentyn N.",
		rating: 5,
		text: "Amazing spot in Barcelona! The cocktails are fantastic and the food is fresh and tasty. Loved the cozy vibe and the music playlist. Perfect place for dinner or drinks.",
		date: "Hace 2 días",
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
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-serif-italic text-foreground" style={{ fontWeight: 300 }}>
						Lo que dicen de{" "}
						<span className="text-night-blue">nosotros</span>
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

						<div className="overflow-hidden min-h-[280px]">
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
													<p className="font-serif-italic text-lg text-foreground" style={{ fontWeight: 400 }}>
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
									<p className="font-serif-italic text-xl text-foreground" style={{ fontWeight: 400 }}>
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
