import { describe, expect, it } from "vitest";
import { getDiscoveryStops } from "@/lib/dishDiscovery";
import { langOrder, languages } from "@/lib/menuData";

describe.each(langOrder)("%s discovery", lang => {
  it("groups all three montaditos into exactly one step", () => {
    const stops = getDiscoveryStops(lang);
    const montaditos = languages[lang].tabs.find(t => t.id === "carta")?.sections?.[0].items.slice(1, 4);
    const grouped = stops.filter(stop => stop.grouped);
    expect(grouped).toHaveLength(1);
    expect(grouped[0].items).toEqual(montaditos);
    expect(grouped[0].items).toHaveLength(3);
    for (const item of montaditos ?? []) {
      expect(stops.filter(stop => stop.items.includes(item))).toHaveLength(1);
    }
  });
});
