"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import { company, heroStats } from "@/data/content";
import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/images/hero-poster.jpg"
          alt="Handwerker bei der Arbeit"
          fill
          priority
          className="object-cover animate-ken-burns"
        />
      </div>

      <video
        className="absolute inset-0 hidden h-full w-full object-cover sm:block"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />

      <div className="container-px relative z-10 mx-auto w-full max-w-7xl pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-amber-300 backdrop-blur-sm"
          >
            <Sparkles size={15} />
            Meisterbetrieb seit über 15 Jahren
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Handwerk, das hält{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              was es verspricht
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200"
          >
            Von der Elektroinstallation bis zur Komplettsanierung –
            {" "}{company.fullName} liefert präzise Handwerksarbeit mit
            Festpreisgarantie, Termintreue und persönlicher Beratung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-900/40 transition-transform hover:scale-105"
            >
              Kostenlos anfragen
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#leistungen"
              className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Leistungen ansehen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-300"
          >
            <ShieldCheck size={18} className="text-amber-400" />
            Meisterbetrieb &middot; Versichert &amp; zertifiziert &middot;
            Festpreisgarantie
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute inset-x-0 bottom-0 z-10 translate-y-1/2"
      >
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-2xl shadow-slate-900/20 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1 bg-white px-4 py-6 text-center"
              >
                <span className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  <Counter value={stat.value} />
                </span>
                <span className="text-xs font-semibold text-slate-500 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 text-white/70 sm:block">
        <ChevronDown className="animate-bounce-slow" size={26} />
      </div>
    </section>
  );
}
