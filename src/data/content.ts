export const nav = [
  { label: "Start", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Galerie", href: "#galerie" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const company = {
  name: "MeisterHand",
  fullName: "MeisterHand Handwerksservice",
  phone: "+49 211 1234567",
  phoneHref: "tel:+492111234567",
  email: "info@meisterhand-handwerk.de",
  address: "Musterstraße 24, 40210 Düsseldorf",
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Musterstra%C3%9Fe%2024%2C%2040210%20D%C3%BCsseldorf&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hours: [
    { label: "Montag – Freitag", value: "07:00 – 18:00 Uhr" },
    { label: "Samstag", value: "09:00 – 14:00 Uhr" },
    { label: "Notdienst", value: "24/7 erreichbar" },
  ],
};

export const heroStats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "1.200+", label: "Projekte realisiert" },
  { value: "980+", label: "Zufriedene Kunden" },
  { value: "24/7", label: "Notdienst" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: "zap" | "wrench" | "hammer" | "paint" | "tiles" | "hardhat";
};

export const services: Service[] = [
  {
    slug: "elektro",
    title: "Elektroinstallation",
    description:
      "Sichere Elektroinstallationen, Smart-Home-Lösungen und schnelle Störungsbehebung vom zertifizierten Fachbetrieb.",
    image: "/images/service-elektro.jpg",
    icon: "zap",
  },
  {
    slug: "sanitaer",
    title: "Sanitär & Heizung",
    description:
      "Von der Reparatur bis zur kompletten Badsanierung – sauber, zuverlässig und termingerecht.",
    image: "/images/service-sanitaer.jpg",
    icon: "wrench",
  },
  {
    slug: "schreinerei",
    title: "Schreinerei & Holzbau",
    description:
      "Maßgefertigte Möbel, Einbauten und Holzarbeiten mit Liebe zum Detail und höchster Präzision.",
    image: "/images/service-schreinerei.jpg",
    icon: "hammer",
  },
  {
    slug: "malerarbeiten",
    title: "Malerarbeiten",
    description:
      "Innen- und Außenanstriche, Tapezierarbeiten und Fassadengestaltung in erstklassiger Qualität.",
    image: "/images/service-maler.jpg",
    icon: "paint",
  },
  {
    slug: "fliesen",
    title: "Fliesen & Boden",
    description:
      "Präzise Verlegung von Fliesen, Parkett und modernen Designböden für jeden Raum.",
    image: "/images/service-fliesen.jpg",
    icon: "tiles",
  },
  {
    slug: "renovierung",
    title: "Renovierung & Sanierung",
    description:
      "Komplettsanierungen und Umbauten aus einer Hand – transparent geplant und termingerecht umgesetzt.",
    image: "/images/service-renovierung.jpg",
    icon: "hardhat",
  },
];

export const aboutFeatures = [
  "Festpreisgarantie ohne versteckte Kosten",
  "Meisterbetrieb mit erfahrenen Fachkräften",
  "Vollständig versichert & zertifiziert",
  "Termintreue – garantiert",
];

export const aboutStats = [
  { value: "15+", label: "Jahre am Markt" },
  { value: "24", label: "Fachkräfte im Team" },
  { value: "1.200+", label: "Projekte" },
  { value: "4,9/5", label: "Kundenbewertung" },
];

export type GalleryItem = {
  image: string;
  caption: string;
  tall?: boolean;
};

export const gallery: GalleryItem[] = [
  { image: "/images/gallery-tools-flatlay.jpg", caption: "Präzisionswerkzeug", tall: true },
  { image: "/images/gallery-tools-wall.jpg", caption: "Unsere Werkstatt" },
  { image: "/images/gallery-carpenter-sanding.jpg", caption: "Schreinerei in Aktion", tall: true },
  { image: "/images/gallery-plumber-wrench.jpg", caption: "Sanitärtechnik" },
  { image: "/images/gallery-painting.jpg", caption: "Malerarbeiten", tall: true },
  { image: "/images/gallery-tiling.jpg", caption: "Fliesenverlegung" },
  { image: "/images/service-elektro.jpg", caption: "Elektroinstallation", tall: true },
  { image: "/images/gallery-tools-hanging.jpg", caption: "Werkzeugwand" },
  { image: "/images/team-portrait.jpg", caption: "Unsere Handwerksmeister", tall: true },
];

export type Testimonial = {
  name: string;
  location: string;
  service: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Familie Weber",
    location: "Düsseldorf",
    service: "Komplette Badsanierung",
    quote:
      "Von der Beratung bis zur Übergabe alles top organisiert. Das Team war pünktlich, sauber und das Ergebnis übertrifft unsere Erwartungen.",
    initials: "FW",
  },
  {
    name: "Thomas K.",
    location: "Köln",
    service: "Elektroinstallation",
    quote:
      "Schnelle Terminvergabe, faire Preise und wirklich kompetente Beratung zu unserer Smart-Home-Verkabelung. Absolute Empfehlung.",
    initials: "TK",
  },
  {
    name: "Sabine M.",
    location: "Essen",
    service: "Malerarbeiten",
    quote:
      "Unsere Fassade sieht aus wie neu. Sehr saubere Arbeitsweise und freundlicher Umgang – genau so stellt man sich einen Meisterbetrieb vor.",
    initials: "SM",
  },
  {
    name: "Restaurant Lindenhof",
    location: "Düsseldorf",
    service: "Renovierung",
    quote:
      "Die Renovierung unseres Gastraums wurde termingerecht fertig, sodass wir keinen einzigen Öffnungstag verloren haben. Klasse Leistung.",
    initials: "RL",
  },
];
