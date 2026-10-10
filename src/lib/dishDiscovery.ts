import { languages, type LangCode, type MenuItem } from "@/lib/menuData";

export interface DiscoveryStop {
  id: string;
  category: string;
  items: MenuItem[];
  grouped: "montaditos" | "empanadas" | false;
}

const selections = [
  { section: 0, items: [0] },
  { section: 0, items: [1, 2, 3], grouped: "montaditos" as const },
  { section: 1, items: [0] },
  { section: 1, items: [0], pair: true },
  { section: 1, items: [4], pair: true },
  { section: 2, items: [1, 2], grouped: "empanadas" as const },
  { section: 3, items: [0] },
  { section: 3, items: [4] },
  { section: 4, items: [0] },
  { section: 4, items: [2] },
];

export function getDiscoveryStops(lang: LangCode): DiscoveryStop[] {
  const sections = languages[lang].tabs.find(tab => tab.id === "carta")?.sections;
  if (!sections) return [];
  return selections.flatMap((selection, index) => {
    const section = sections[selection.section];
    const source = selection.pair ? section?.pairWith : section;
    if (!source) return [];
    const items = selection.items.flatMap(i => source.items[i] ? [source.items[i]] : []);
    return items.length ? [{ id: `stop-${index + 1}`, category: source.title, items, grouped: selection.grouped ?? false }] : [];
  });
}

export const discoveryCopy = {
  es: { title: "Sigue el", italic: "antojo.", eyebrow: "Los favoritos de Entre Dos", intro: "Un plato lleva a otro. Pequeños bocados, grandes favoritos y una mesa para compartir.", enter: "Descubrir los favoritos", teaser: "Fuera de carta no. Fuera de lo común, sí.", start: "Empezar el recorrido", back: "Volver a la carta", stop: "Parada", route: "La ruta del antojo", montaditos: "Montaditos", empanadas: "Empanadas", empanadasIntro: "Dos rellenos. Una parada.", grouped: "Tres bocados. Una parada.", finish: "El próximo paso: a la mesa.", finishBody: "Ya tienes tus favoritos. Ahora, elige con quién compartirlos.", next: "Siguiente parada", previous: "Parada anterior", end: "Fin del recorrido" },
  en: { title: "Follow your", italic: "cravings.", eyebrow: "Entre Dos favourites", intro: "One dish leads to another. Little bites, big favourites and a table made for sharing.", enter: "Discover the favourites", teaser: "On the menu. Anything but ordinary.", start: "Start the journey", back: "Back to the menu", stop: "Stop", route: "The craving trail", montaditos: "Montaditos", empanadas: "Empanadas", empanadasIntro: "Two fillings. One stop.", grouped: "Three bites. One stop.", finish: "Next stop: the table.", finishBody: "You have your favourites. Now choose who to share them with.", next: "Next stop", previous: "Previous stop", end: "Journey complete" },
  ca: { title: "Segueix el", italic: "desig.", eyebrow: "Els favorits d’Entre Dos", intro: "Un plat porta a un altre. Petits mossecs, grans favorits i una taula per compartir.", enter: "Descobreix els favorits", teaser: "A la carta. Fora del que és habitual.", start: "Començar el recorregut", back: "Tornar a la carta", stop: "Parada", route: "La ruta del desig", montaditos: "Montaditos", empanadas: "Empanades", empanadasIntro: "Dos farcits. Una parada.", grouped: "Tres mossecs. Una parada.", finish: "El proper pas: a taula.", finishBody: "Ja tens els teus favorits. Ara, tria amb qui compartir-los.", next: "Següent parada", previous: "Parada anterior", end: "Fi del recorregut" },
  fr: { title: "Suivez vos", italic: "envies.", eyebrow: "Les favoris d’Entre Dos", intro: "Un plat en appelle un autre. Petites bouchées, grands favoris et une table à partager.", enter: "Découvrir les favoris", teaser: "À la carte. Rien d’ordinaire.", start: "Commencer le parcours", back: "Retour à la carte", stop: "Étape", route: "Le parcours gourmand", montaditos: "Montaditos", empanadas: "Empanadas", empanadasIntro: "Deux garnitures. Une étape.", grouped: "Trois bouchées. Une étape.", finish: "Prochaine étape : à table.", finishBody: "Vous avez vos favoris. Choisissez maintenant avec qui les partager.", next: "Étape suivante", previous: "Étape précédente", end: "Parcours terminé" },
} as const;
