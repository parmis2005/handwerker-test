import { Phone } from "lucide-react";
import { company } from "@/data/content";

export default function FloatingCall() {
  return (
    <a
      href={company.phoneHref}
      aria-label="Jetzt anrufen"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-xl shadow-orange-900/30 transition-transform hover:scale-110 lg:hidden"
    >
      <Phone size={22} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-orange-500/50" />
    </a>
  );
}
