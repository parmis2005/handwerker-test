import Image from "next/image";
import { gallery } from "@/data/content";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-28">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Galerie
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Einblicke in unsere Projekte
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ein Auszug aus abgeschlossenen Arbeiten unserer Fachbereiche.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <Reveal
              key={item.image + i}
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <div
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${
                  item.tall ? "h-96" : "h-64"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-4 bottom-4 translate-y-3 text-sm font-bold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
