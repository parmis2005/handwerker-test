import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden py-28">
      <Image
        src="/images/cta-craftsman.jpg"
        alt="Handwerker in seiner Werkstatt"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/60" />

      <div className="container-px relative mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-200">
            Kontaktieren Sie uns für eine unverbindliche Beratung – wir melden
            uns innerhalb von 24 Stunden mit einem fairen Festpreisangebot.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kontakt"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-900/40 transition-transform hover:scale-105"
            >
              Jetzt unverbindlich anfragen
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <Phone size={18} />
              {company.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
