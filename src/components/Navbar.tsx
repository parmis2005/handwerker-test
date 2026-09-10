"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hammer, Menu, Phone, X } from "lucide-react";
import { company, nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white shadow-md shadow-orange-600/20">
            <Hammer size={20} strokeWidth={2.4} />
          </span>
          <span
            className={`text-lg font-extrabold tracking-tight ${
              scrolled || open ? "text-slate-900" : "text-white"
            }`}
          >
            Meister<span className="text-amber-500">Hand</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-slate-600 hover:text-amber-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={company.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-slate-700" : "text-white"
            }`}
          >
            <Phone size={16} />
            {company.phone}
          </a>
          <a
            href="#kontakt"
            className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-600/30 transition-transform hover:scale-105"
          >
            Termin anfragen
          </a>
        </div>

        <button
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-lg ${
            scrolled || open ? "text-slate-900" : "text-white"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="container-px mx-auto flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={company.phoneHref}
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-base font-semibold text-slate-700"
              >
                <Phone size={18} />
                {company.phone}
              </a>
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 text-center text-base font-bold text-white shadow-md"
              >
                Termin anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
