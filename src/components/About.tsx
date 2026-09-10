import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutFeatures, aboutStats } from "@/data/content";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export default function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-slate-950 py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl sm:h-[480px]">
              <Image
                src="/images/about-artisan.jpg"
                alt="Meister unseres Handwerksbetriebs"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 h-52 w-44 overflow-hidden rounded-2xl border-4 border-slate-950 shadow-2xl sm:-right-10 sm:w-56">
              <Image
                src="/images/about-team.jpg"
                alt="Unser Team bei der Arbeit"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-sm font-bold uppercase tracking-widest text-amber-400">
            Über uns
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Seit über 15 Jahren Ihr Partner fürs Handwerk
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            {"MeisterHand"} vereint erfahrene Meisterinnen und Meister
            verschiedenster Gewerke unter einem Dach. Wir planen, beraten und
            arbeiten mit höchster Präzision – damit Sie sich um nichts
            kümmern müssen außer dem Ergebnis.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-amber-400"
                />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  <Counter value={stat.value} />
                </p>
                <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
