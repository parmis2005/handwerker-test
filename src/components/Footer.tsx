import { Hammer, Mail, MapPin, Phone } from "lucide-react";
import { company, nav, services } from "@/data/content";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-20 pb-8 text-slate-400">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white">
                <Hammer size={20} strokeWidth={2.4} />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Meister<span className="text-amber-500">Hand</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Ihr Meisterbetrieb für Elektro, Sanitär, Schreinerei,
              Malerarbeiten, Fliesen und Komplettsanierungen im Raum
              Düsseldorf.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-amber-500 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-amber-500 hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Leistungen
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href="#leistungen" className="text-sm hover:text-amber-400">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Unternehmen
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm hover:text-amber-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Kontakt
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber-500" />
                {company.address}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-amber-500" />
                <a href={company.phoneHref} className="hover:text-amber-400">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-amber-500" />
                <a href={`mailto:${company.email}`} className="hover:text-amber-400">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.fullName}. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400">
              Impressum
            </a>
            <a href="#" className="hover:text-amber-400">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
