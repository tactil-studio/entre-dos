import { Quote, Star } from "lucide-react";

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
	return (
		<section id="reviews" className="py-16 md:py-16bg-card">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-16">
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

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{reviews.map((review, i) => (
						<div
							key={i}
							className="bg-background p-8 relative group hover:shadow-lg transition-shadow duration-500"
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

				<div className="text-center mt-12">
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
