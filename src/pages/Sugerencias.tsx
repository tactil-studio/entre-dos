import { ArrowDown, ArrowLeft, ArrowRight, Compass, Flag } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import monsteraLeaves from "@/assets/monstera-leaves.webp";
import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { discoveryCopy, getDiscoveryStops } from "@/lib/dishDiscovery";
import { resolveLang } from "@/lib/menuData";

const number = (value: number) => String(value).padStart(2, "0");

export default function Sugerencias() {
  const { lang: langParam } = useParams();
  const lang = resolveLang(langParam);
  const text = discoveryCopy[lang];
  const stops = useMemo(() => getDiscoveryStops(lang), [lang]);
  const [current, setCurrent] = useState(0);
  const cartaPath = lang === "es" ? "/carta" : `/carta/${lang}`;

  useLayoutEffect(() => {
    const root = document.documentElement;
    const wasDark = root.classList.contains("dark");
    root.classList.remove("dark");
    return () => { if (wasDark) root.classList.add("dark"); };
  }, []);

  useEffect(() => {
    setCurrent(0);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const id = visible[0]?.target.id;
      const index = stops.findIndex(stop => stop.id === id);
      if (index >= 0) setCurrent(index);
    }, { rootMargin: "-150px 0px -45% 0px", threshold: 0 });
    stops.forEach(stop => {
      const element = document.getElementById(stop.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [stops]);

  const goTo = (index: number) => {
    const stop = stops[index];
    if (!stop) return;
    setCurrent(index);
    document.getElementById(stop.id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <div className="discovery-page min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <header className="relative overflow-hidden pb-10 pt-28 md:pb-12 md:pt-32">
          <img src={monsteraLeaves} alt="" aria-hidden="true" className="pointer-events-none absolute -right-20 top-2 w-64 rotate-12 opacity-20 md:w-80" />
          <div className="relative mx-auto max-w-6xl px-6 md:px-10">
            <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground"><Link to={cartaPath}><ArrowLeft aria-hidden="true" />{text.back}</Link></Button>
            <p className="mb-5 mt-9 flex items-center gap-2 font-mono-label text-[10px] text-muted-foreground"><Compass className="size-4" aria-hidden="true" />{text.eyebrow}</p>
            <h1 className="max-w-3xl font-heading text-5xl leading-[1.05] md:text-7xl">{text.title}<br /><span className="font-serif-italic text-night-blue">{text.italic}</span></h1>
            <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">{text.intro}</p>
              <Button onClick={() => goTo(0)} className="w-fit gap-4 rounded-full px-6 font-mono-label text-[11px]">{text.start}<ArrowDown aria-hidden="true" /></Button>
            </div>
          </div>
        </header>

        <nav aria-label={text.route} className="sticky top-[72px] z-30 border-y border-foreground/20 bg-background/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3 md:px-10">
            <div className="shrink-0">
              <p className="hidden font-mono-label text-[9px] text-muted-foreground sm:block">{text.route}</p>
              <p className="font-mono-label text-[11px]">{text.stop} {number(current + 1)} <span className="text-muted-foreground">/ {number(stops.length)}</span></p>
            </div>
            <div className="hidden items-center gap-1 lg:flex">
              {stops.map((stop, index) => <Button key={stop.id} size="icon" variant={current === index ? "default" : "ghost"} onClick={() => goTo(index)} aria-label={`${text.stop} ${index + 1}: ${stop.grouped ? text.montaditos : stop.items[0].name}`} aria-current={current === index ? "step" : undefined} className="size-8 rounded-full font-mono-label text-[10px]">{number(index + 1)}</Button>)}
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" onClick={() => goTo(current - 1)} disabled={current === 0} className="size-9 rounded-full border-foreground/30" aria-label={text.previous} title={text.previous}><ArrowLeft /></Button>
              <Button size="icon" variant="outline" onClick={() => goTo(current + 1)} disabled={current === stops.length - 1} className="size-9 rounded-full border-foreground/30" aria-label={text.next} title={text.next}><ArrowRight /></Button>
            </div>
          </div>
        </nav>

        <section aria-label={text.route} className="mx-auto max-w-6xl px-6 pt-10 md:px-10 md:pt-14">
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-24 left-1/2 top-8 hidden border-l border-dashed border-foreground/25 md:block" />
            {stops.map((stop, index) => {
              const item = stop.items[0];
              const title = stop.grouped ? text.montaditos : item.name;
              const reverse = index % 2 !== 0;
              return (
                <article id={stop.id} key={stop.id} data-discovery-stop={stop.grouped ? "montaditos" : stop.id} className="discovery-stop relative grid items-center gap-6 pb-14 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-6 md:pb-24">
                  <div className={`min-w-0 ${reverse ? "md:col-start-3" : "md:col-start-1"} md:row-start-1`}>
                    <p className="mb-3 flex items-center gap-3 font-mono-label text-[10px] text-muted-foreground"><span className="text-foreground md:hidden">{number(index + 1)} —</span>{stop.category}</p>
                    <h2 className={`font-heading leading-tight ${stop.grouped || title.length < 45 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>{title}</h2>
                    {stop.grouped ? (
                      <>
                        <p className="mt-3 font-serif-italic text-2xl text-night-blue">{text.grouped}</p>
                        <ul className="mt-5 divide-y divide-foreground/15">
                          {stop.items.map(variant => <li key={variant.name} className="flex items-start justify-between gap-4 py-3"><span className="text-sm leading-relaxed text-muted-foreground">{variant.name}</span><span className="shrink-0 font-mono-label text-xs">{variant.price}</span></li>)}
                        </ul>
                      </>
                    ) : (
                      <>
                        {item.desc && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>}
                        <p className="mt-4 font-serif-italic text-3xl text-night-blue">{item.price}</p>
                      </>
                    )}
                  </div>
                  <span aria-hidden="true" className="relative z-10 hidden size-12 place-items-center rounded-full border border-foreground/35 bg-background font-mono-label text-xs md:col-start-2 md:row-start-1 md:grid">{number(index + 1)}</span>
                  <figure className={`relative min-w-0 ${reverse ? "md:col-start-1" : "md:col-start-3"} md:row-start-1`}>
                    {item.image && <img src={item.image} alt={title} loading={index === 0 ? "eager" : "lazy"} className="discovery-photo aspect-[4/3] w-full object-cover" />}
                    {stop.grouped && stop.items[2]?.image && <img src={stop.items[2].image} alt={stop.items[2].name} loading="lazy" className="absolute -bottom-4 right-3 aspect-square w-28 rounded-full border-[6px] border-background object-cover md:w-32" />}
                  </figure>
                </article>
              );
            })}
          </div>
        </section>
        <section className="border-t border-foreground/20 px-6 py-14 text-center md:py-20">
          <Flag className="mx-auto mb-4 size-6 text-night-blue" strokeWidth={1.5} aria-hidden="true" />
          <p className="mb-4 font-mono-label text-[10px] text-muted-foreground">{text.end}</p>
          <h2 className="font-heading text-3xl md:text-4xl">{text.finish}</h2>
          <p className="mx-auto mb-7 mt-4 max-w-md text-sm text-muted-foreground">{text.finishBody}</p>
          <Button asChild className="rounded-full px-6 font-mono-label text-[11px]"><Link to={cartaPath}>{text.back}<ArrowRight aria-hidden="true" /></Link></Button>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
