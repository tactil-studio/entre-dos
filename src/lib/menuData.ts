export type LangCode = "es" | "en" | "ca" | "fr";

export interface MenuItem {
	name: string;
	subtitle?: string; // e.g. grape variety line on wine items
	desc?: string;
	price: string;
}

export interface MenuSection {
	title: string;
	items: MenuItem[];
	pairWith?: MenuSection; // render this section side-by-side with another
	layout?: "default" | "extras-grid"; // extras-grid = two-column compact grid
	subtitle?: string; // small line below section title
	note?: string;    // small footnote below items (e.g. "*alcohol-free options")
}

export interface MenuDiaData {
	title: string;       // e.g. "MENÚ"
	courses: string[];   // e.g. ["Primer plato", "Plato principal", …]
	price: string;       // e.g. "14,90€"
	days: string;        // e.g. "Lunes a viernes"
	hours: string;       // e.g. "De 12 a 16h"
}

export interface MenuTab {
	id: string;
	label: string;
	image?: string;
	sections?: MenuSection[];  // if present, render as text menu
	menuDia?: MenuDiaData;     // if present, render as menu-del-día card
}

export interface LangConfig {
	code: LangCode;
	name: string;
	nativeName: string;
	eyebrow: string;
	title: string;
	titleItalic: string;
	tapHint: string;
	terraceNote: string;
	tabs: MenuTab[];
}

// ── Structured menu data ─────────────────────────────────────────────────────

// ── ES ───────────────────────────────────────────────────────────────────────
const esTablas: MenuSection = {
	title: "Tablas",
	items: [
		{ name: "Platito de jamón del país", price: "€8,50" },
		{ name: "Platito de jamón ibérico", price: "€13,50" },
		{
			name: "Tabla mezze con baba ganoush, hummus, tzatziki, pepino fresco, apio, zanahorias y pan de pita",
			price: "€14,50",
		},
		{ name: "Tabla mixta", price: "€17,50" },
	],
};

export const cartaEsSections: MenuSection[] = [
	{
		title: "Pan",
		items: [
			{ name: "Pan con tomate", price: "€2,20" },
			{
				name: "Montadito de jamón del país, rúcula, parmesano y aceite balsámico caramelizado",
				price: "€2,50",
			},
			{
				name: "Montadito de queso brie, mermelada de tomate y almendras laminadas",
				price: "€2,50",
			},
			{
				name: "Montadito de salmón ahumado con queso crema y tomate cherry",
				price: "€2,90",
			},
			{ name: "Hummus con tostaditas y finas hierbas", price: "€5,90" },
		],
	},
	{
		title: "Patatas",
		pairWith: esTablas,
		items: [
			{ name: "Patatas bravas de la casa", price: "€5,90" },
			{
				name: "Patatas wedges con mayonesa de curry y cebolla",
				price: "€6,50",
			},
			{
				name: "Boniatos fritos con mayonesa picante de pimiento chipotle",
				price: "€6,50",
			},
		],
	},
	{
		title: "Vegetales",
		items: [
			{ name: "Olivas", price: "€3,30" },
			{
				name: "Empanada de cebolla caramelizada, nueces, queso de cabra y mozzarella",
				price: "€3,50",
			},
			{
				name: "Empanada de espinacas, queso crema, mozzarella y piñones",
				price: "€3,50",
			},
			{ name: "Pimientos de Padrón", price: "€5,90" },
			{
				name: "Ensalada de queso de cabra (mezclum, tomate cherry, almendras, vinagreta de miel y lima)",
				price: "€7,70",
			},
			{
				name: "Ensalada del chef (mezclum, aguacate, tomate seco, nueces)",
				price: "€7,70",
			},
			{ name: "Wok de verduras", price: "€7,70" },
			{
				name: "Alcachofa confitada con salsa gremolata sobre puré de boniato",
				price: "€8,50",
			},
			{
				name: "Mini hamburguesas veganas con mayonesa de jalapeño y mermelada de tomate x2",
				price: "€10,90",
			},
		],
	},
	{
		title: "Carne",
		items: [
			{ name: "Albóndigas danesas con salsa de almendras", price: "€7,90" },
			{ name: "Brocheta de pollo con salsa de miel y curry", price: "€10,50" },
			{
				name: "Pollo marinado estilo marroquí con salsa tzatziki, menta, almendras tostadas y cilantro",
				price: "€10,50",
			},
			{ name: "Cazuela de ternera al ajillo", price: "€11,90" },
			{
				name: "Bikini de confit de pato, queso brie y cebolla caramelizada",
				price: "€11,90",
			},
		],
	},
	{
		title: "Mar",
		items: [
			{ name: "Chipirones", price: "€9,90" },
			{ name: "Salmón a la plancha con Bok Choi", price: "€10,90" },
			{
				name: "Gambas salteadas con ajo, perejil y vino blanco",
				price: "€10,90",
			},
			{ name: "Tataki de atún", price: "€11,90" },
			{ name: "Tartar de salmón con aguacate", price: "€11,90" },
		],
	},
	{
		title: "Dulces",
		items: [
			{ name: "Helados", price: "€5,50" },
			{ name: "Tarta de queso", price: "€6,50" },
			{ name: "Crumble de manzana y albaricoque", price: "€6,50" },
			{ name: "Brownie con nueces y helado", price: "€6,50" },
		],
	},
];

// ── CA ───────────────────────────────────────────────────────────────────────
const caTaules: MenuSection = {
	title: "Taules",
	items: [
		{ name: "Platet de pernil del país", price: "€8,50" },
		{ name: "Platet de pernil ibèric", price: "€13,50" },
		{
			name: "Taula mezze amb baba ganoush, tzatziki, hummus, comcombre, api, pastanagues i pa de pita",
			price: "€14,50",
		},
		{ name: "Taula mixta", price: "€17,50" },
	],
};

export const cartaCaSections: MenuSection[] = [
	{
		title: "Pà",
		items: [
			{ name: "Pà amb tomàquet", price: "€2,20" },
			{
				name: "Barquete de pernil del país, rucula, parmesà i oli balsàmic caramel·litzat",
				price: "€2,50",
			},
			{
				name: "Barquete de formatge brie, mermelada de tomàquet i ametlles llaminades",
				price: "€2,50",
			},
			{
				name: "Barquete de salmó fumat amb formatge crema i tomàquet cherri",
				price: "€2,90",
			},
			{ name: "Hummus amb torradetes i fines herbes", price: "€5,90" },
		],
	},
	{
		title: "Patates",
		pairWith: caTaules,
		items: [
			{ name: "Patates braves de la casa", price: "€5,90" },
			{ name: "Patates wedges amb maionesa de curry i ceba", price: "€6,50" },
			{
				name: "Moniatos fregits amb maionesa de pebre chipotle picant",
				price: "€6,50",
			},
		],
	},
	{
		title: "Vegetals",
		items: [
			{ name: "Olives", price: "€3,30" },
			{
				name: "Empanada de ceba caramel·litzada, nous, formatge de cabra i mozzarella",
				price: "€3,50",
			},
			{
				name: "Empanada de espinacs, formatge crema, mozzarella i pinyons",
				price: "€3,50",
			},
			{ name: "Pebrots de padró", price: "€5,90" },
			{
				name: "Amanida de formatge de cabra (mesclum, tomàquet cherri, ametlles, mel i vinagreta de llima)",
				price: "€7,70",
			},
			{
				name: "Amanida del xef (mesclum, alvocat, tomàquet sec, nous)",
				price: "€7,70",
			},
			{ name: "Wok de verdures", price: "€7,70" },
			{
				name: "Carxofa confitada amb salsa gremolata i pure de moniatos",
				price: "€8,50",
			},
			{
				name: "Mini hamburgueses veganes amb maionesa de jalapeny i mermelada de tomàquet x2u",
				price: "€10,90",
			},
		],
	},
	{
		title: "Carn",
		items: [
			{ name: "Mandonguilles daneses amb salsa d'ametlles", price: "€7,90" },
			{
				name: "Broqueta de pollastre amb salsa de mel i curry",
				price: "€10,50",
			},
			{
				name: "Pollastre marinat estil asiàtic amb salsa tzatziki, menta, ametlles i coriandre",
				price: "€10,50",
			},
			{ name: "Cassola de vedella amb all", price: "€11,90" },
			{
				name: "Bikini de confit d'ànec, formatge brie i ceba caramel·litzada",
				price: "€11,90",
			},
		],
	},
	{
		title: "Mar",
		items: [
			{ name: "Xipirons", price: "€9,90" },
			{ name: "Salmó a la planxa amb Bok Choi", price: "€10,90" },
			{ name: "Gambes saltejades, all, julivert i vi blanc", price: "€10,90" },
			{ name: "Tataki de tonyina", price: "€11,90" },
			{ name: "Tartar de salmó i alvocat", price: "€11,90" },
		],
	},
	{
		title: "Dolços",
		items: [
			{ name: "Gelats variats", price: "€5,50" },
			{ name: "Pastís de formatge", price: "€6,50" },
			{ name: "Crumble de poma i albercoc", price: "€6,50" },
			{ name: "Brownie amb nous i gelat", price: "€6,50" },
		],
	},
];

// ── FR ───────────────────────────────────────────────────────────────────────
const frPlanches: MenuSection = {
	title: "Planches",
	items: [
		{ name: "Plat de jambon de pays", price: "€8,50" },
		{ name: "Plat de jambon Ibérique", price: "€13,50" },
		{
			name: "Mezze board avec baba ganoush, tzatziki, concombre cru, céleri, carottes et pain pita",
			price: "€14,50",
		},
		{ name: "Planche Mixte", price: "€17,50" },
	],
};

export const cartaFrSections: MenuSection[] = [
	{
		title: "Pain",
		items: [
			{ name: "Pain a la tomate", price: "€2,20" },
			{
				name: "Montadito de jambon de pays, roquette, parmesan et sirop balsamique",
				price: "€2,50",
			},
			{
				name: "Montadito de fromage brie, confiture de tomate et amandes",
				price: "€2,50",
			},
			{
				name: "Montadito de saumon fumé, fromage Filadelfia et tomate cerise",
				price: "€2,90",
			},
			{ name: "Houmous avec toasts et herbes", price: "€5,90" },
		],
	},
	{
		title: "Patates",
		pairWith: frPlanches,
		items: [
			{ name: "Patate bravas de la maison", price: "€5,90" },
			{ name: "Patate wedges et mayonnaise de curry", price: "€6,50" },
			{
				name: "Frites de patates douces avec une mayonnaisse épicé au piment chipotle",
				price: "€6,50",
			},
		],
	},
	{
		title: "Végétal",
		items: [
			{ name: "Olives", price: "€3,30" },
			{
				name: "Chausson fourré au fromage de chèvre, noix, mozzarella et oignon caramelisé",
				price: "€3,50",
			},
			{
				name: "Chausson aux epinards, fromage frais, mozzarella et pignons",
				price: "€3,50",
			},
			{ name: "Poivrons de Padrón", price: "€5,90" },
			{
				name: "Salade de chèvre (mezclum, tomate cerise, chèvre, amandes, miel et vinaigrette au citron vert)",
				price: "€7,70",
			},
			{
				name: "Salade du chef (mezclum, avocat, tomates séchées et noix)",
				price: "€7,70",
			},
			{ name: "Wok de légumes", price: "€7,70" },
			{
				name: "Artichaut à la sauce gremolata sur purée de patate douce",
				price: "€8,50",
			},
			{
				name: "Mini burgers végétaliens avec une mayonnaise au jalapeño et confiture de tomate x2u",
				price: "€10,90",
			},
		],
	},
	{
		title: "Viande",
		items: [
			{ name: "Boulettes Danoises et sa sauce d'amandes", price: "€7,90" },
			{ name: "Brochette de poulet, sauce curry et miel", price: "€10,50" },
			{
				name: "Poulet mariné à la morocaine avec une sauce tzatziki, menthe, amandes et coriandre",
				price: "€10,50",
			},
			{ name: "Cassolette de veau à l'ail", price: "€11,90" },
			{
				name: "Bikini traditionnel espagnol au confit de canard, au fromage brie et oignon caramelisé",
				price: "€11,90",
			},
		],
	},
	{
		title: "Mer",
		items: [
			{ name: "Chipirons grillés", price: "€9,90" },
			{ name: "Saumon grillé à la plancha et chou chinois", price: "€10,90" },
			{ name: "Gambas à la persillade", price: "€10,90" },
			{ name: "Tataki de thon", price: "€11,90" },
			{ name: "Tartare de saumon et avocat", price: "€11,90" },
		],
	},
	{
		title: "Dessert",
		items: [
			{ name: "Glaces variées", price: "€5,50" },
			{ name: "Tarte au fromage", price: "€6,50" },
			{ name: "Crumble de pomme et abricot", price: "€6,50" },
			{ name: "Brownie et glace vanille", price: "€6,50" },
		],
	},
];

// ── EN ───────────────────────────────────────────────────────────────────────
const enPlatters: MenuSection = {
	title: "Platters",
	items: [
		{ name: "Traditional Catalan cured ham", price: "€8,50" },
		{ name: "Jamón ibérico", price: "€13,50" },
		{
			name: "Mezze board with baba ganoush, tzatziki, hummus, celery, carrots and pita bread",
			price: "€14,50",
		},
		{ name: "Mixed platter", price: "€17,50" },
	],
};

export const cartaEnSections: MenuSection[] = [
	{
		title: "Bread",
		items: [
			{ name: "Catalan style bread with tomato", price: "€2,20" },
			{
				name: "Montaditos with cured ham, rocket salad, parmesan and caramelized balsamic oil",
				price: "€2,50",
			},
			{
				name: "Montaditos with brie cheese, tomato marmalade and roasted almonds",
				price: "€2,50",
			},
			{
				name: "Montaditos with smoked salmon, cream cheese and cherry tomatoes",
				price: "€2,90",
			},
			{ name: "Hummus with herb encrusted toasted bread", price: "€5,90" },
		],
	},
	{
		title: "Potato",
		pairWith: enPlatters,
		items: [
			{ name: "Homemade patatas bravas", price: "€5,90" },
			{ name: "Potato wedges with curry and onion mayonnaise", price: "€6,50" },
			{
				name: "Sweet potato fries with a spicy, smoky chipotle mayonnaise",
				price: "€6,50",
			},
		],
	},
	{
		title: "Vegetable",
		items: [
			{ name: "Olives", price: "€3,30" },
			{
				name: "Empanada filled with caramelized onion, walnuts, goat cheese and mozzarella",
				price: "€3,50",
			},
			{
				name: "Empanada filled with spinach, cream cheese, mozzarella and pine nuts",
				price: "€3,50",
			},
			{ name: "Padrón peppers", price: "€5,90" },
			{
				name: "Goat cheese salad (mezclum, cherry tomatoes, goat cheese, almonds, honey and lime vinaigrette)",
				price: "€7,70",
			},
			{
				name: "Chef's salad (mezclum, avocado, sun dried tomatoes and nuts)",
				price: "€7,70",
			},
			{ name: "Asian stir-fried vegetables", price: "€7,70" },
			{
				name: "Slow cooked artichokes on a sweet potato purée and gremolata dressing",
				price: "€8,50",
			},
			{
				name: "Mini vegan hamburgers filled with jalapeño mayonnaise and tomato marmalade x2u",
				price: "€10,90",
			},
		],
	},
	{
		title: "Meat",
		items: [
			{ name: "Danish style meatballs with almond sauce", price: "€7,90" },
			{ name: "Honey and curry chicken skewers", price: "€10,50" },
			{
				name: "Moroccan style marinated chicken with tzatziki, mint, coriander and almonds",
				price: "€10,50",
			},
			{ name: "Beef casserole with garlic butter", price: "€11,90" },
			{
				name: "Traditional Spanish 'Bikini' with pulled duck, brie cheese and caramelized onion",
				price: "€11,90",
			},
		],
	},
	{
		title: "From the ocean",
		items: [
			{ name: "Fried baby squid", price: "€9,90" },
			{ name: "Grilled salmon with Bok Choi", price: "€10,90" },
			{
				name: "Garlic prawns with parsley and white wine sauce",
				price: "€10,90",
			},
			{ name: "Tuna tataki", price: "€11,90" },
			{ name: "Salmon tartar with avocado", price: "€11,90" },
		],
	},
	{
		title: "Sweets",
		items: [
			{ name: "Selection of homemade ice cream", price: "€5,50" },
			{ name: "Cheesecake", price: "€6,50" },
			{ name: "Apple and apricot crumble", price: "€6,50" },
			{ name: "Brownie with walnuts and ice cream", price: "€6,50" },
		],
	},
];

// ── BRUNCH ────────────────────────────────────────────────────────────────────

const brunchExtrasEs: MenuSection = {
	title: "Extras",
	layout: "extras-grid",
	items: [
		{ name: "Huevo escalfado ecológico", price: "1,50€" },
		{ name: "Jamón serrano", price: "1,50€" },
		{ name: "Pan de pita", price: "1,50€" },
		{ name: "Baba Ganoush o Hummus", price: "2,20€" },
		{ name: "Pan sin gluten", price: "1,50€" },
		{ name: "Salsa tzatziki", price: "2,20€" },
		{ name: "Tostadas de hierbas", price: "1,50€" },
		{ name: "Espinacas", price: "1,00€" },
		{ name: "Salmón ahumado", price: "2,80€" },
		{ name: "Aguacate", price: "1,50€" },
		{ name: "Tomates cherry", price: "1,00€" },
		{ name: "Zanahorias", price: "1,00€" },
		{ name: "Bacon", price: "1,00€" },
		{ name: "Jalapeños", price: "1,00€" },
	],
};

export const brunchEsSections: MenuSection[] = [
	{
		title: "Brunch",
		subtitle: "Sábados y domingos 11–16h",
		items: [
			{ name: "Eggs Benedict", desc: "Huevos benedictinos sobre muffin inglés con bacon y salsa holandesa", price: "11,90€" },
			{ name: "Eggs Florentine", desc: "Huevos benedictinos sobre muffin inglés con espinacas y salsa holandesa. Añadir salmón ahumado: 2,80€", price: "11,90€" },
			{ name: "Huevos revueltos", desc: "Tres huevos ecológicos revueltos con jamón serrano, espárragos y tostada blanca con semillas", price: "11,50€" },
			{ name: "Shakshuka", desc: "Shakshuka al horno con huevos ecológicos, tomates, garbanzos, pimientos, cebolla, queso feta y cilantro", price: "10,80€" },
			{ name: "Baba Ganoush en tostada", desc: "Baba Ganoush tradicional con berenjena asada, granada, yogur, menta y tahini sobre tostada blanca con semillas", price: "9,20€" },
			{ name: "Aguacate en tostada", desc: "Tostada blanca con semillas, aguacate laminado, tomates cherry y aceite de oliva virgen extra. Añadir jamón serrano: 1,50€", price: "10,90€" },
			{ name: "Breakfast tacos", desc: "Huevos revueltos con aguacate, cebolla encurtida, tomate, lima y crema agria de jalapeño", price: "9,90€" },
			{ name: "Tortitas", desc: "Con frutas frescas y sirope de arce", price: "9,20€" },
		],
	},
	brunchExtrasEs,
];

const brunchExtrasEn: MenuSection = {
	title: "Extras",
	layout: "extras-grid",
	items: [
		{ name: "Organic poached egg", price: "1,50€" },
		{ name: "Spanish ham", price: "1,50€" },
		{ name: "Pita bread", price: "1,50€" },
		{ name: "Baba Ganoush or Hummus", price: "2,20€" },
		{ name: "Gluten free bread", price: "1,50€" },
		{ name: "Tzaziki sauce", price: "2,20€" },
		{ name: "Herb tostadas", price: "1,50€" },
		{ name: "Spinach", price: "1,00€" },
		{ name: "Smoked salmon", price: "2,80€" },
		{ name: "Avocado", price: "1,50€" },
		{ name: "Cherry tomatoes", price: "1,00€" },
		{ name: "Carrots", price: "1,00€" },
		{ name: "Bacon", price: "1,00€" },
		{ name: "Jalapeños", price: "1,00€" },
	],
};

export const brunchEnSections: MenuSection[] = [
	{
		title: "Brunch",
		subtitle: "Saturday and Sunday 11–16h",
		items: [
			{ name: "Eggs Benedict", desc: "Eggs benedict on English muffins with bacon and hollandaise sauce", price: "11,90€" },
			{ name: "Eggs Florentine", desc: "Eggs benedict on English muffins with spinach and hollandaise sauce. Add smoked salmon: 2,80€", price: "11,90€" },
			{ name: "Scrambled Eggs", desc: "Three organic scrambled eggs with Spanish ham, asparagus and seeded white toast", price: "11,50€" },
			{ name: "Shakshuka", desc: "Ovenbaked Shakshuka packed with organic eggs, tomatoes, chickpeas, peppers, onion, feta cheese and coriander", price: "10,80€" },
			{ name: "Baba Ganoush on toast", desc: "Traditional Baba Ganoush with roasted eggplant, pomegranate, yoghurt, mint, tahini on seeded white toast", price: "9,20€" },
			{ name: "Avocado on toast", desc: "Seeded white toast with sliced avocado, cherry tomatoes and organic olive oil. Add Spanish ham: 1,50€", price: "10,90€" },
			{ name: "Breakfast tacos", desc: "Scrambled eggs with avocado, pickled onion, tomato, lime and jalapeño sour cream", price: "9,90€" },
			{ name: "Pancakes", desc: "With fresh fruits and maple syrup", price: "9,20€" },
		],
	},
	brunchExtrasEn,
];

const brunchExtrasCa: MenuSection = {
	title: "Extres",
	layout: "extras-grid",
	items: [
		{ name: "Ou escalfat ecològic", price: "1,50€" },
		{ name: "Pernil serrano", price: "1,50€" },
		{ name: "Pa de pita", price: "1,50€" },
		{ name: "Baba Ganoush o Hummus", price: "2,20€" },
		{ name: "Pa sense gluten", price: "1,50€" },
		{ name: "Salsa tzatziki", price: "2,20€" },
		{ name: "Torrades d'herbes", price: "1,50€" },
		{ name: "Espinacs", price: "1,00€" },
		{ name: "Salmó fumat", price: "2,80€" },
		{ name: "Alvocat", price: "1,50€" },
		{ name: "Tomàquets cherry", price: "1,00€" },
		{ name: "Pastanagues", price: "1,00€" },
		{ name: "Bacon", price: "1,00€" },
		{ name: "Jalapeños", price: "1,00€" },
	],
};

export const brunchCaSections: MenuSection[] = [
	{
		title: "Brunch",
		subtitle: "Dissabtes i diumenges 11–16h",
		items: [
			{ name: "Eggs Benedict", desc: "Ous benedictins sobre muffin anglès amb bacon i salsa holandesa", price: "11,90€" },
			{ name: "Eggs Florentine", desc: "Ous benedictins sobre muffin anglès amb espinacs i salsa holandesa. Afegir salmó fumat: 2,80€", price: "11,90€" },
			{ name: "Ous remenats", desc: "Tres ous ecològics remenats amb pernil serrano, espàrrecs i torrada blanca amb llavors", price: "11,50€" },
			{ name: "Shakshuka", desc: "Shakshuka al forn amb ous ecològics, tomàquets, cigrons, pebrots, ceba, formatge feta i coriandre", price: "10,80€" },
			{ name: "Baba Ganoush en torrada", desc: "Baba Ganoush tradicional amb albergínia rostida, magrana, iogurt, menta i tahini sobre torrada blanca amb llavors", price: "9,20€" },
			{ name: "Alvocat en torrada", desc: "Torrada blanca amb llavors, alvocat laminat, tomàquets cherry i oli d'oliva verge extra. Afegir pernil serrano: 1,50€", price: "10,90€" },
			{ name: "Breakfast tacos", desc: "Ous remenats amb alvocat, ceba encurtida, tomàquet, llima i crema agra de jalapeño", price: "9,90€" },
			{ name: "Creps", desc: "Amb fruites fresques i xarop d'auró", price: "9,20€" },
		],
	},
	brunchExtrasCa,
];

const brunchExtrasFr: MenuSection = {
	title: "Suppléments",
	layout: "extras-grid",
	items: [
		{ name: "Œuf poché biologique", price: "1,50€" },
		{ name: "Jambon serrano", price: "1,50€" },
		{ name: "Pain pita", price: "1,50€" },
		{ name: "Baba Ganoush ou Houmous", price: "2,20€" },
		{ name: "Pain sans gluten", price: "1,50€" },
		{ name: "Sauce tzatziki", price: "2,20€" },
		{ name: "Toasts aux herbes", price: "1,50€" },
		{ name: "Épinards", price: "1,00€" },
		{ name: "Saumon fumé", price: "2,80€" },
		{ name: "Avocat", price: "1,50€" },
		{ name: "Tomates cerises", price: "1,00€" },
		{ name: "Carottes", price: "1,00€" },
		{ name: "Bacon", price: "1,00€" },
		{ name: "Jalapeños", price: "1,00€" },
	],
};

export const brunchFrSections: MenuSection[] = [
	{
		title: "Brunch",
		subtitle: "Samedi et dimanche 11–16h",
		items: [
			{ name: "Eggs Benedict", desc: "Œufs bénédictine sur muffins anglais avec bacon et sauce hollandaise", price: "11,90€" },
			{ name: "Eggs Florentine", desc: "Œufs bénédictine sur muffins anglais avec épinards et sauce hollandaise. Ajouter saumon fumé: 2,80€", price: "11,90€" },
			{ name: "Œufs brouillés", desc: "Trois œufs biologiques brouillés avec jambon serrano, asperges et toast blanc aux graines", price: "11,50€" },
			{ name: "Shakshuka", desc: "Shakshuka au four avec œufs biologiques, tomates, pois chiches, poivrons, oignon, fromage feta et coriandre", price: "10,80€" },
			{ name: "Baba Ganoush sur toast", desc: "Baba Ganoush traditionnel avec aubergine rôtie, grenade, yaourt, menthe et tahini sur toast blanc aux graines", price: "9,20€" },
			{ name: "Avocat sur toast", desc: "Toast blanc aux graines avec avocat tranché, tomates cerises et huile d'olive vierge extra. Ajouter jambon serrano: 1,50€", price: "10,90€" },
			{ name: "Breakfast tacos", desc: "Œufs brouillés avec avocat, oignon mariné, tomate, citron vert et crème fraîche au jalapeño", price: "9,90€" },
			{ name: "Pancakes", desc: "Avec fruits frais et sirop d'érable", price: "9,20€" },
		],
	},
	brunchExtrasFr,
];

// ── MENÚ DEL DÍA ─────────────────────────────────────────────────────────────
export const menuDiaEs: MenuDiaData = {
	title: "MENÚ",
	courses: ["Primer plato", "Plato principal", "Postre ó café", "Bebida y pan"],
	price: "14,90€",
	days: "Lunes a viernes",
	hours: "De 12 a 16h",
};

export const menuDiaEn: MenuDiaData = {
	title: "MENU",
	courses: ["First course", "Main course", "Dessert or coffee", "Drink and bread"],
	price: "14,90€",
	days: "Monday to Friday",
	hours: "12 to 16h",
};

export const menuDiaCa: MenuDiaData = {
	title: "MENÚ",
	courses: ["Primer plat", "Plat principal", "Postres o cafè", "Beguda i pa"],
	price: "14,90€",
	days: "Dilluns a divendres",
	hours: "De 12 a 16h",
};

export const menuDiaFr: MenuDiaData = {
	title: "MENU",
	courses: ["Première entrée", "Plat principal", "Dessert ou café", "Boisson et pain"],
	price: "14,90€",
	days: "Lundi au vendredi",
	hours: "De 12 à 16h",
};

// ── VINOS ─────────────────────────────────────────────────────────────────────

export const vinosEsSections: MenuSection[] = [
	{
		title: "Vino blanco",
		items: [
			{ name: "CASTELL DE FADES D.O. Conca de Barberà", subtitle: "Viognier · Ecológico", desc: "Fruta blanca y sutiles notas de fruta tropical (piña fresca)", price: "copa 3,50€ / 19,00€" },
			{ name: "VIÑA SANZO D.O. Rueda", subtitle: "Verdejo · Ecológico", desc: "Seco, aromático, persistente", price: "copa 3,90€ / 23,00€" },
			{ name: "CLOS DE COSTA D.O. Catalunya", subtitle: "Chardonnay", desc: "Afrutado con notas de pera, piña y cítricos", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vino tinto",
		items: [
			{ name: "CLOS DE DÍA D.O. Terra Alta", subtitle: "Garnacha roja", desc: "Fácil de beber, afrutado, tanino sutil", price: "copa 3,50€ / 19,00€" },
			{ name: "VEGA CASCAJO Crianza D.O. Rioja", subtitle: "Tempranillo", desc: "Agradable Rioja con notas de fruta roja madura y regaliz", price: "copa 3,90€ / 23,00€" },
			{ name: "SANZO T-3 D.O. Terra Alta", subtitle: "Tempranillo", desc: "Color rojo intenso. Fruta madura con toques de vainilla", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vino rosado",
		items: [
			{ name: "DOMINIO DEL DUEÑO V. Benavente", subtitle: "Tempranillo", desc: "Alegres notas de fruta roja", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Cava",
		items: [
			{ name: "CAVA MO Brut Nature", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Burbuja equilibrada, aromas afrutados", price: "copa 3,50€ / 23,00€" },
			{ name: "CAVA Dignitat Brut Rosé", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Cava muy agradable con notas finas y sedosas de fruta roja fresca", price: "copa 3,90€ / 25,00€" },
		],
	},
];

export const vinosEnSections: MenuSection[] = [
	{
		title: "White wine",
		items: [
			{ name: "CASTELL DE FADES D.O. Conca de Barberà", subtitle: "Viognier · Ecologic", desc: "White fruit and subtle notes of tropical fruit (fresh pineapple)", price: "glass 3,50€ / 19,00€" },
			{ name: "VIÑA SANZO D.O. Rueda", subtitle: "Verdejo · Ecologic", desc: "Dry, aromatic, persistent", price: "glass 3,90€ / 23,00€" },
			{ name: "CLOS DE COSTA D.O. Catalunya", subtitle: "Chardonnay", desc: "Fruity with notes of pear, pineapple, and citrus", price: "glass 3,90€ / 23,00€" },
		],
	},
	{
		title: "Red wine",
		items: [
			{ name: "CLOS DE DÍA D.O. Terra Alta", subtitle: "Garnacha roja", desc: "Easy to drink, fruity, subtle tannin", price: "glass 3,50€ / 19,00€" },
			{ name: "VEGA CASCAJO Crianza D.O. Rioja", subtitle: "Tempranillo", desc: "Pleasant Rioja with notes of ripe red fruit and licorice", price: "glass 3,90€ / 23,00€" },
			{ name: "SANZO T-3 D.O. Terra Alta", subtitle: "Tempranillo", desc: "Intense red color. Ripe fruit with hints of vanilla", price: "glass 3,90€ / 23,00€" },
		],
	},
	{
		title: "Rosé wine",
		items: [
			{ name: "DOMINIO DEL DUEÑO V. Benavente", subtitle: "Tempranillo", desc: "Cheerful notes of red fruit", price: "glass 3,90€ / 23,00€" },
		],
	},
	{
		title: "Cava",
		items: [
			{ name: "CAVA MO Brut Nature", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Balanced bubble, fruity aromas", price: "glass 3,50€ / 23,00€" },
			{ name: "CAVA Dignitat Brut Rosé", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Very pleasant cava with fine and silky notes of fresh red fruit", price: "glass 3,90€ / 25,00€" },
		],
	},
];

export const vinosCaSections: MenuSection[] = [
	{
		title: "Vi blanc",
		items: [
			{ name: "CASTELL DE FADES D.O. Conca de Barberà", subtitle: "Viognier · Ecològic", desc: "Fruita blanca i subtils notes de fruita tropical (pinya fresca)", price: "copa 3,50€ / 19,00€" },
			{ name: "VIÑA SANZO D.O. Rueda", subtitle: "Verdejo · Ecològic", desc: "Sec, aromàtic, persistent", price: "copa 3,90€ / 23,00€" },
			{ name: "CLOS DE COSTA D.O. Catalunya", subtitle: "Chardonnay", desc: "Afruitat amb notes de pera, pinya i cítrics", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vi negre",
		items: [
			{ name: "CLOS DE DÍA D.O. Terra Alta", subtitle: "Garnatxa roja", desc: "Fàcil de beure, afruitat, taní subtil", price: "copa 3,50€ / 19,00€" },
			{ name: "VEGA CASCAJO Crianza D.O. Rioja", subtitle: "Tempranillo", desc: "Agradable Rioja amb notes de fruita vermella madura i regalèssia", price: "copa 3,90€ / 23,00€" },
			{ name: "SANZO T-3 D.O. Terra Alta", subtitle: "Tempranillo", desc: "Color vermell intens. Fruita madura amb tocs de vainilla", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vi rosat",
		items: [
			{ name: "DOMINIO DEL DUEÑO V. Benavente", subtitle: "Tempranillo", desc: "Alegres notes de fruita vermella", price: "copa 3,90€ / 23,00€" },
		],
	},
	{
		title: "Cava",
		items: [
			{ name: "CAVA MO Brut Nature", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Bombolla equilibrada, aromes afruitats", price: "copa 3,50€ / 23,00€" },
			{ name: "CAVA Dignitat Brut Rosé", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Cava molt agradable amb notes fines i sedoses de fruita vermella fresca", price: "copa 3,90€ / 25,00€" },
		],
	},
];

export const vinosFrSections: MenuSection[] = [
	{
		title: "Vin blanc",
		items: [
			{ name: "CASTELL DE FADES D.O. Conca de Barberà", subtitle: "Viognier · Biologique", desc: "Fruits blancs et subtiles notes de fruits tropicaux (ananas frais)", price: "verre 3,50€ / 19,00€" },
			{ name: "VIÑA SANZO D.O. Rueda", subtitle: "Verdejo · Biologique", desc: "Sec, aromatique, persistant", price: "verre 3,90€ / 23,00€" },
			{ name: "CLOS DE COSTA D.O. Catalunya", subtitle: "Chardonnay", desc: "Fruité avec des notes de poire, d'ananas et d'agrumes", price: "verre 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vin rouge",
		items: [
			{ name: "CLOS DE DÍA D.O. Terra Alta", subtitle: "Garnacha roja", desc: "Facile à boire, fruité, tanin subtil", price: "verre 3,50€ / 19,00€" },
			{ name: "VEGA CASCAJO Crianza D.O. Rioja", subtitle: "Tempranillo", desc: "Agréable Rioja avec des notes de fruits rouges mûrs et de réglisse", price: "verre 3,90€ / 23,00€" },
			{ name: "SANZO T-3 D.O. Terra Alta", subtitle: "Tempranillo", desc: "Couleur rouge intense. Fruits mûrs avec des touches de vanille", price: "verre 3,90€ / 23,00€" },
		],
	},
	{
		title: "Vin rosé",
		items: [
			{ name: "DOMINIO DEL DUEÑO V. Benavente", subtitle: "Tempranillo", desc: "Joyeuses notes de fruits rouges", price: "verre 3,90€ / 23,00€" },
		],
	},
	{
		title: "Cava",
		items: [
			{ name: "CAVA MO Brut Nature", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Bulle équilibrée, arômes fruités", price: "verre 3,50€ / 23,00€" },
			{ name: "CAVA Dignitat Brut Rosé", subtitle: "Xarel·lo, Macabeo, Parellada", desc: "Cava très agréable avec des notes fines et soyeuses de fruits rouges frais", price: "verre 3,90€ / 25,00€" },
		],
	},
];

// ── COCKTAILS ─────────────────────────────────────────────────────────────────

export const cocktailsEsSections: MenuSection[] = [
	{
		title: "Cocktails",
		note: "*opciones sin alcohol",
		items: [
			{ name: "Margarita", desc: "Tequila, triple sec, lima, limón", price: "6,00€" },
			{ name: "Margarita maracuyá", desc: "Tequila, triple sec, lima, leche de coco, maracuyá", price: "6,00€" },
			{ name: "Café Martini", desc: "Vodka, azúcar, licor de café, café", price: "6,00€" },
			{ name: "Gin Basil Smash", desc: "Gin, lima, albahaca", price: "6,00€" },
			{ name: "Mojito*", desc: "Ron, lima, menta, azúcar moreno, agua con gas", price: "6,00€" },
			{ name: "Mojito de fresa*", desc: "Ron, lima, fresa, azúcar moreno, refresco de limón", price: "6,00€" },
			{ name: "Piña Colada*", desc: "Ron blanco, zumo de piña, sirope de coco, nata", price: "6,00€" },
			{ name: "Blackberry Moscow Mule*", desc: "Vodka, lima, arándanos, azúcar moreno, Ginger Ale", price: "6,00€" },
			{ name: "Caipirinha", desc: "Cachaça, azúcar, lima", price: "6,00€" },
			{ name: "Aperol Spritz", desc: "Aperol, Cava Brut, agua con gas, naranja", price: "6,00€" },
			{ name: "Sangría casera", desc: "De vino tinto, blanco o cava", price: "4,50€ | 17,00€" },
		],
	},
];

export const cocktailsEnSections: MenuSection[] = [
	{
		title: "Cocktails",
		note: "*alcohol-free options available",
		items: [
			{ name: "Margarita", desc: "Tequila, triple sec, lime, lemon", price: "6,00€" },
			{ name: "Passion fruit Margarita", desc: "Tequila, triple sec, lime, coconut milk, passion fruit", price: "6,00€" },
			{ name: "Café Martini", desc: "Vodka, sugar, coffee liqueur, coffee", price: "6,00€" },
			{ name: "Gin Basil Smash", desc: "Gin, lime, basil", price: "6,00€" },
			{ name: "Mojito*", desc: "Rum, lime, mint, brown sugar, sparkling water", price: "6,00€" },
			{ name: "Strawberry Mojito*", desc: "Rum, lime, strawberry, brown sugar, lemon soda", price: "6,00€" },
			{ name: "Piña Colada*", desc: "White rum, pineapple juice, coconut syrup, cream", price: "6,00€" },
			{ name: "Blackberry Moscow Mule*", desc: "Vodka, lime, blackberries, brown sugar, Ginger Ale", price: "6,00€" },
			{ name: "Caipirinha", desc: "Cachaça, sugar, lime", price: "6,00€" },
			{ name: "Aperol Spritz", desc: "Aperol, Brut Cava, sparkling water, orange", price: "6,00€" },
			{ name: "Homemade Sangría", desc: "Red, white or cava", price: "4,50€ | 17,00€" },
		],
	},
];

export const cocktailsCaSections: MenuSection[] = [
	{
		title: "Còctels",
		note: "*opcions sense alcohol",
		items: [
			{ name: "Margarita", desc: "Tequila, triple sec, llima, llimona", price: "6,00€" },
			{ name: "Margarita maracuyà", desc: "Tequila, triple sec, llima, llet de coco, maracuyà", price: "6,00€" },
			{ name: "Café Martini", desc: "Vodka, sucre, licor de cafè, cafè", price: "6,00€" },
			{ name: "Gin Basil Smash", desc: "Gin, llima, alfàbrega", price: "6,00€" },
			{ name: "Mojito*", desc: "Ron, llima, menta, sucre morè, aigua amb gas", price: "6,00€" },
			{ name: "Mojito de maduixa*", desc: "Ron, llima, maduixa, sucre morè, refresc de llimona", price: "6,00€" },
			{ name: "Piña Colada*", desc: "Ron blanc, suc de pinya, xarop de coco, nata", price: "6,00€" },
			{ name: "Blackberry Moscow Mule*", desc: "Vodka, llima, nabius, sucre morè, Ginger Ale", price: "6,00€" },
			{ name: "Caipirinha", desc: "Cachaça, sucre, llima", price: "6,00€" },
			{ name: "Aperol Spritz", desc: "Aperol, Cava Brut, aigua amb gas, taronja", price: "6,00€" },
			{ name: "Sangria casolana", desc: "De vi negre, blanc o cava", price: "4,50€ | 17,00€" },
		],
	},
];

export const cocktailsFrSections: MenuSection[] = [
	{
		title: "Cocktails",
		note: "*options sans alcool disponibles",
		items: [
			{ name: "Margarita", desc: "Tequila, triple sec, citron vert, citron", price: "6,00€" },
			{ name: "Margarita fruit de la passion", desc: "Tequila, triple sec, citron vert, lait de coco, fruit de la passion", price: "6,00€" },
			{ name: "Café Martini", desc: "Vodka, sucre, liqueur de café, café", price: "6,00€" },
			{ name: "Gin Basil Smash", desc: "Gin, citron vert, basilic", price: "6,00€" },
			{ name: "Mojito*", desc: "Rhum, citron vert, menthe, sucre roux, eau gazeuse", price: "6,00€" },
			{ name: "Mojito à la fraise*", desc: "Rhum, citron vert, fraise, sucre roux, limonade", price: "6,00€" },
			{ name: "Piña Colada*", desc: "Rhum blanc, jus d'ananas, sirop de coco, crème", price: "6,00€" },
			{ name: "Blackberry Moscow Mule*", desc: "Vodka, citron vert, mûres, sucre roux, Ginger Ale", price: "6,00€" },
			{ name: "Caipirinha", desc: "Cachaça, sucre, citron vert", price: "6,00€" },
			{ name: "Aperol Spritz", desc: "Aperol, Cava Brut, eau gazeuse, orange", price: "6,00€" },
			{ name: "Sangría maison", desc: "Vin rouge, blanc ou cava", price: "4,50€ | 17,00€" },
		],
	},
];

// ── BEBIDAS ───────────────────────────────────────────────────────────────────

export const bebidasEsSections: MenuSection[] = [
	{
		title: "Bebidas",
		items: [
			{ name: "Reparador", desc: "Zumo natural de zanahoria, remolacha, manzana y naranja", price: "6,00€" },
			{ name: "Antioxidante", desc: "Zumo natural de zanahoria, naranja y manzana roja", price: "6,00€" },
			{ name: "Detox", desc: "Zumo de manzana verde, pepino, jengibre y miel", price: "6,00€" },
			{ name: "Zumo de naranja natural", price: "5,00€" },
			{ name: "Mimosa", desc: "Cava con zumo de naranja natural", price: "4,80€" },
			{ name: "Bloody Mary", desc: "Vodka, zumo de tomate, limón, Tabasco y salsa Worcestershire", price: "8,00€" },
			{ name: "Mojito sin alcohol", desc: "Lima, menta fresca, azúcar moreno, ginger ale", price: "7,00€" },
			{ name: "Mojito de fresa sin alcohol", desc: "Lima, fresas, azúcar moreno, refresco de limón", price: "7,00€" },
		],
	},
];

export const bebidasEnSections: MenuSection[] = [
	{
		title: "Drinks",
		items: [
			{ name: "Repairer", desc: "Natural carrot, beetroot, apple and orange juice", price: "6,00€" },
			{ name: "Antioxidant", desc: "Natural carrot, orange and red apple juice", price: "6,00€" },
			{ name: "Detox", desc: "Green apple, cucumber, ginger and honey juice", price: "6,00€" },
			{ name: "Fresh orange juice", price: "5,00€" },
			{ name: "Mimosa", desc: "Cava with fresh orange juice", price: "4,80€" },
			{ name: "Bloody Mary", desc: "Vodka, tomato juice, lemon, Tabasco and Worcestershire sauce", price: "8,00€" },
			{ name: "Alcohol-free Mojito", desc: "Lime, fresh mint, brown sugar, ginger ale", price: "7,00€" },
			{ name: "Strawberry alcohol-free Mojito", desc: "Lime, strawberries, brown sugar, lemon soda", price: "7,00€" },
		],
	},
];

export const bebidasCaSections: MenuSection[] = [
	{
		title: "Begudes",
		items: [
			{ name: "Reparador", desc: "Suc natural de pastanaga, remolatxa, poma i taronja", price: "6,00€" },
			{ name: "Antioxidant", desc: "Suc natural de pastanaga, taronja i poma vermella", price: "6,00€" },
			{ name: "Detox", desc: "Suc de poma verda, cogombre, gingebre i mel", price: "6,00€" },
			{ name: "Suc de taronja natural", price: "5,00€" },
			{ name: "Mimosa", desc: "Cava amb suc de taronja natural", price: "4,80€" },
			{ name: "Bloody Mary", desc: "Vodka, suc de tomàquet, llimona, Tabasco i salsa Worcestershire", price: "8,00€" },
			{ name: "Mojito sense alcohol", desc: "Llima, menta fresca, sucre morè, ginger ale", price: "7,00€" },
			{ name: "Mojito de maduixa sense alcohol", desc: "Llima, maduixes, sucre morè, refresc de llimona", price: "7,00€" },
		],
	},
];

export const bebidasFrSections: MenuSection[] = [
	{
		title: "Boissons",
		items: [
			{ name: "Réparateur", desc: "Jus naturel de carotte, betterave, pomme et orange", price: "6,00€" },
			{ name: "Antioxydant", desc: "Jus naturel de carotte, orange et pomme rouge", price: "6,00€" },
			{ name: "Détox", desc: "Jus de pomme verte, concombre, gingembre et miel", price: "6,00€" },
			{ name: "Jus d'orange frais", price: "5,00€" },
			{ name: "Mimosa", desc: "Cava avec jus d'orange frais", price: "4,80€" },
			{ name: "Bloody Mary", desc: "Vodka, jus de tomate, citron, Tabasco et sauce Worcestershire", price: "8,00€" },
			{ name: "Mojito sans alcool", desc: "Citron vert, menthe fraîche, sucre roux, ginger ale", price: "7,00€" },
			{ name: "Mojito à la fraise sans alcool", desc: "Citron vert, fraises, sucre roux, limonade", price: "7,00€" },
		],
	},
];

export const languages: Record<LangCode, LangConfig> = {
	es: {
		code: "es",
		name: "Español",
		nativeName: "Español",
		eyebrow: "Nuestra propuesta",
		title: "La",
		titleItalic: "carta",
		tapHint: "Toca para ampliar",
		terraceNote: "*suplemento 10% en terraza",
		tabs: [
			{ id: "carta", label: "Carta", sections: cartaEsSections },
			{ id: "brunch", label: "Brunch", sections: brunchEsSections },
			{ id: "menu-dia", label: "Menú del día", menuDia: menuDiaEs },
			{ id: "vinos", label: "Vinos", sections: vinosEsSections },
			{ id: "cocktails", label: "Cocktails", sections: cocktailsEsSections },
			{ id: "bebidas", label: "Bebidas", sections: bebidasEsSections },
		],
	},
	en: {
		code: "en",
		name: "English",
		nativeName: "English",
		eyebrow: "Our menu",
		title: "The",
		titleItalic: "menu",
		tapHint: "Tap to enlarge",
		terraceNote: "*allergy chart available · *extra charge 10% on terrace",
		tabs: [
			{ id: "carta", label: "Menu", sections: cartaEnSections },
			{ id: "brunch", label: "Brunch", sections: brunchEnSections },
			{ id: "menu-dia", label: "Menu of the day", menuDia: menuDiaEn },
			{ id: "vinos", label: "Wine", sections: vinosEnSections },
			{ id: "cocktails", label: "Cocktails", sections: cocktailsEnSections },
			{ id: "bebidas", label: "Drinks", sections: bebidasEnSections },
		],
	},
	ca: {
		code: "ca",
		name: "Català",
		nativeName: "Català",
		eyebrow: "La nostra proposta",
		title: "La",
		titleItalic: "carta",
		tapHint: "Toca per ampliar",
		terraceNote: "*suplement 10% a la terrassa",
		tabs: [
			{ id: "carta", label: "Carta", sections: cartaCaSections },
			{ id: "brunch", label: "Brunch", sections: brunchCaSections },
			{ id: "menu-dia", label: "Menú del dia", menuDia: menuDiaCa },
			{ id: "vinos", label: "Vins", sections: vinosCaSections },
			{ id: "cocktails", label: "Còctels", sections: cocktailsCaSections },
			{ id: "bebidas", label: "Begudes", sections: bebidasCaSections },
		],
	},
	fr: {
		code: "fr",
		name: "Français",
		nativeName: "Français",
		eyebrow: "Notre proposition",
		title: "La",
		titleItalic: "carte",
		tapHint: "Touchez pour agrandir",
		terraceNote: "*supplément 10% en terrasse",
		tabs: [
			{ id: "carta", label: "Carte", sections: cartaFrSections },
			{ id: "brunch", label: "Brunch", sections: brunchFrSections },
			{ id: "menu-dia", label: "Menu du jour", menuDia: menuDiaFr },
			{ id: "vinos", label: "Vins", sections: vinosFrSections },
			{ id: "cocktails", label: "Cocktails", sections: cocktailsFrSections },
			{ id: "bebidas", label: "Boissons", sections: bebidasFrSections },
		],
	},
};

export const langOrder: LangCode[] = ["es", "en", "ca", "fr"];

export const resolveLang = (raw?: string | null): LangCode => {
	if (raw && (langOrder as string[]).includes(raw)) return raw as LangCode;
	return "es";
};
