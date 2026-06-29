import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "22901000000";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0B] text-[#F7F4EE] overflow-hidden">

      {/* Motif fond global discret */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/patterns/geo-01.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "80px",
          opacity: 0.04,
        }}
        aria-hidden
      />

      {/* Motif décoratif or en bas */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          backgroundImage: "url(/patterns/geo-02.svg)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "80px 80px",
          backgroundPosition: "center bottom",
          opacity: 0.10,
          filter: "sepia(1) saturate(3) hue-rotate(5deg) brightness(1.2)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">

        {/* Top */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Colonne logo */}
          <div className="md:col-span-1">
            <Link href="/" aria-label="Ọkpụ Wear — retour à l'accueil">
              <Image
                src="/logo/logo-header-gold.svg"
                alt="Ọkpụ"
                width={200}
                height={60}
                className="h-[50px] md:h-[58px] w-auto"
              />
            </Link>
            <p className="mt-2 text-[#B7B2A9] text-sm leading-relaxed max-w-xs font-[family-name:var(--font-inter)]">
              Art africain contemporain. Chaque pièce est unique, fabriquée à la main.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B7B2A9] mb-6 font-[family-name:var(--font-inter)]">
              Navigation
            </p>
            <nav className="flex flex-col gap-4 text-sm font-[family-name:var(--font-inter)]">
              <a href="/collection" className="text-[#F7F4EE] hover:text-[#C9A45C] transition-colors duration-300">
                Collection
              </a>
              <a href="/a-propos" className="text-[#F7F4EE] hover:text-[#C9A45C] transition-colors duration-300">
                À propos
              </a>
            </nav>
          </div>

          {/* Commander */}
          <div className="md:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B7B2A9] mb-6 font-[family-name:var(--font-inter)]">
              Commander
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9A45C] text-sm font-medium hover:text-[#F7F4EE] transition-colors duration-300 font-[family-name:var(--font-inter)]"
            >
              <span>WhatsApp</span>
              <span aria-hidden>→</span>
            </a>
            <p className="mt-3 text-[#B7B2A9] text-xs font-[family-name:var(--font-inter)] leading-relaxed">
              Toutes les commandes se font directement via WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1E1E1E] py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#B7B2A9] font-[family-name:var(--font-inter)]">
          <span>© {new Date().getFullYear()} Ọkpụ Wear</span>
          <span>Art africain contemporain</span>
        </div>
      </div>
    </footer>
  );
}
