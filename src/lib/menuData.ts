export type LangCode = "es" | "en" | "ca" | "fr";

export interface MenuTab {
  id: string;
  label: string;
  image: string;
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

// All images live in public/menus and are served at /menus/<file>
const img = (name: string) => `/menus/${name}`;

// Shared images (wine, cocktails, drinks, menu del día) reuse ES artwork
// since the original site links to broken PDFs for CA/FR variants.
const shared = {
  bebidas: img("brunch-drinks-es.jpg"),
  bebidasEn: img("brunch-drinks-en.jpg"),
  menuDelDia: img("menu-del-dia.jpg"),
  wineEs: img("wine-es.jpg"),
  wineEn: img("wine-en.jpg"),
  cocktailsEs: img("cocktails-es.jpg"),
  cocktailsEn: img("cocktails-en.jpg"),
};

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
      { id: "carta", label: "Carta", image: img("tapas-es.jpg") },
      { id: "brunch", label: "Brunch", image: img("brunch-es.jpg") },
      { id: "menu-dia", label: "Menú del día", image: shared.menuDelDia },
      { id: "vinos", label: "Vinos", image: shared.wineEs },
      { id: "cocktails", label: "Cocktails", image: shared.cocktailsEs },
      { id: "bebidas", label: "Bebidas", image: shared.bebidas },
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
    terraceNote: "*10% surcharge on terrace",
    tabs: [
      { id: "carta", label: "Menu", image: img("tapas-en.jpg") },
      { id: "brunch", label: "Brunch", image: img("brunch-en.jpg") },
      { id: "menu-dia", label: "Menu of the day", image: shared.menuDelDia },
      { id: "vinos", label: "Wine", image: shared.wineEn },
      { id: "cocktails", label: "Cocktails", image: shared.cocktailsEn },
      { id: "bebidas", label: "Drinks", image: shared.bebidasEn },
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
      { id: "carta", label: "Carta", image: img("tapas-ca.jpg") },
      { id: "brunch", label: "Brunch", image: img("brunch-ca.jpg") },
      { id: "menu-dia", label: "Menú del dia", image: shared.menuDelDia },
      { id: "vinos", label: "Vins", image: shared.wineEs },
      { id: "cocktails", label: "Còctels", image: shared.cocktailsEs },
      { id: "bebidas", label: "Begudes", image: shared.bebidas },
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
      { id: "carta", label: "Carte", image: img("tapas-fr.jpg") },
      { id: "brunch", label: "Brunch", image: img("brunch-fr.jpg") },
      { id: "menu-dia", label: "Menu du jour", image: shared.menuDelDia },
      { id: "vinos", label: "Vins", image: shared.wineEs },
      { id: "cocktails", label: "Cocktails", image: shared.cocktailsEs },
      { id: "bebidas", label: "Boissons", image: shared.bebidas },
    ],
  },
};

export const langOrder: LangCode[] = ["es", "en", "ca", "fr"];

export const resolveLang = (raw?: string | null): LangCode => {
  if (raw && (langOrder as string[]).includes(raw)) return raw as LangCode;
  return "es";
};
