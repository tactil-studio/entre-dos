import { describe, expect, it } from "vitest";
import { getDiscoveryStops } from "@/lib/dishDiscovery";
import { langOrder, languages } from "@/lib/menuData";

describe.each(langOrder)("%s discovery", lang => {
  it("groups all three montaditos into exactly one step", () => {
    const stops = getDiscoveryStops(lang);
    const montaditos = languages[lang].tabs.find(t => t.id === "carta")?.sections?.[0].items.slice(1, 4);
    const grouped = stops.filter(stop => stop.grouped === "montaditos");
    expect(grouped).toHaveLength(1);
    expect(grouped[0].items).toEqual(montaditos);
    expect(grouped[0].items).toHaveLength(3);
    for (const item of montaditos ?? []) {
      expect(stops.filter(stop => stop.items.includes(item))).toHaveLength(1);
    }
  });
  it("groups both empanadas into exactly one step", () => {
    const stops = getDiscoveryStops(lang);
    const empanadas = languages[lang].tabs.find(t => t.id === "carta")?.sections?.[2].items.slice(1, 3);
    const grouped = stops.filter(stop => stop.grouped === "empanadas");
    expect(grouped).toHaveLength(1);
    expect(grouped[0].items).toEqual(empanadas);
    expect(grouped[0].items).toHaveLength(2);
    for (const item of empanadas ?? []) {
      expect(stops.filter(stop => stop.items.includes(item))).toHaveLength(1);
    }
  });
});
