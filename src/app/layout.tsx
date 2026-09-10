import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://handwerker-test.vercel.app"),
  title: "MeisterHand Handwerksservice | Handwerk mit Meisterqualität",
  description:
    "MeisterHand ist Ihr Meisterbetrieb für Elektro, Sanitär, Schreinerei, Malerarbeiten, Fliesen und Komplettsanierungen. Festpreisgarantie, 24/7 Notdienst und über 15 Jahre Erfahrung.",
  keywords: [
    "Handwerker",
    "Handwerksbetrieb",
    "Sanierung",
    "Elektriker",
    "Sanitär",
    "Schreinerei",
    "Malerarbeiten",
    "Fliesenleger",
  ],
  openGraph: {
    title: "MeisterHand Handwerksservice",
    description:
      "Handwerk mit Meisterqualität – Elektro, Sanitär, Schreinerei, Malerarbeiten, Fliesen & Sanierung aus einer Hand.",
    images: ["/images/hero-poster.jpg"],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-screen bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
