"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Grid2x2,
  Hammer,
  HardHat,
  PaintRoller,
  Wrench,
  Zap,
} from "lucide-react";
import { services } from "@/data/content";
import Reveal from "@/components/Reveal";

const icons = {
  zap: Zap,
  wrench: Wrench,
  hammer: Hammer,
  paint: PaintRoller,
  tiles: Grid2x2,
  hardhat: HardHat,
};

export default function Services() {
  return (
    <section id="leistungen" className="bg-white py-28 pt-32 sm:pt-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ob kleine Reparatur oder Komplettsanierung – unsere Meister und
            Fachkräfte decken jedes Gewerk rund um Ihr Zuhause ab.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.08}>
                <a
                  href="#kontakt"
                  className="group relative block h-80 overflow-hidden rounded-3xl shadow-md"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/10 transition-colors group-hover:from-slate-950/95" />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-lg">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-slate-200 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                      {service.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-amber-400">
                      Mehr erfahren
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
