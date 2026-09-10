"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { company, services } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-white py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Lassen Sie uns Ihr Projekt besprechen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Rufen Sie uns an oder senden Sie uns eine unverbindliche Anfrage –
            wir melden uns innerhalb eines Werktags.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm sm:p-8"
            >
              {submitted ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    Wir haben Ihre Nachricht erhalten und melden uns in Kürze
                    persönlich bei Ihnen.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-bold text-amber-600 hover:text-amber-700"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Ihr vollständiger Name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      E-Mail
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="ihre@email.de"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Gewünschte Leistung
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20">
                      <option value="">Bitte auswählen</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-md shadow-orange-600/30 transition-transform hover:scale-[1.02]"
                    >
                      Anfrage senden
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:p-8">
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Adresse
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {company.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white">
                      <Phone size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Telefon
                      </p>
                      <a
                        href={company.phoneHref}
                        className="text-sm font-bold text-slate-900 hover:text-amber-600"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white">
                      <Mail size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        E-Mail
                      </p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-amber-600"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white">
                      <Clock size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Öffnungszeiten
                      </p>
                      {company.hours.map((h) => (
                        <p key={h.label} className="text-sm font-bold text-slate-900">
                          {h.label}: {h.value}
                        </p>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative min-h-[240px] flex-1 overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                <iframe
                  title="Standort MeisterHand Handwerksservice"
                  src={company.mapsEmbedSrc}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
