import { ArrowUpRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { discoveryCopy, getDiscoveryStops } from "@/lib/dishDiscovery";
import type { LangCode } from "@/lib/menuData";

export default function DiscoveryInvitation({ lang }: { lang: LangCode }) {
  const text = discoveryCopy[lang];
  const stops = getDiscoveryStops(lang);
  return (
    <Button asChild variant="ghost" className="discovery-invitation group mb-10 h-auto w-full justify-between gap-5 whitespace-normal rounded-none border-y border-foreground/25 px-0 py-6 text-left hover:bg-transparent">
      <Link to={lang === "es" ? "/sugerencias" : `/sugerencias/${lang}`} aria-label={text.enter}>
        <div className="min-w-0 flex-1">
          <span className="mb-2 flex items-center gap-2 font-mono-label text-[10px] text-muted-foreground"><Compass aria-hidden="true" />{text.eyebrow}</span>
          <span className="block font-heading text-2xl leading-tight md:text-3xl">{text.title} <span className="font-serif-italic text-night-blue">{text.italic}</span></span>
          <span className="mt-2 hidden text-xs font-normal text-muted-foreground sm:block">{text.teaser}</span>
        </div>
        <div className="hidden shrink-0 items-center -space-x-4 sm:flex" aria-hidden="true">
          {[stops[2], stops[1], stops[8]].map((stop, i) => <img key={stop?.id} src={stop?.items[0].image} alt="" className={`size-20 rounded-full border-4 border-background object-cover transition-transform duration-300 group-hover:-translate-y-1 ${i === 1 ? "-translate-y-2" : ""}`} />)}
        </div>
        <span className="grid size-12 shrink-0 place-items-center rounded-full border border-foreground/40 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight aria-hidden="true" /></span>
      </Link>
    </Button>
  );
}
