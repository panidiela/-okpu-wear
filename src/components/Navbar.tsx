"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#C9A45C] border-b border-[#B8913F]">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label="Ọkpụ Wear — retour à l'accueil" className="flex items-center">
          <Image
            src="/logo/logo-header.svg"
            alt="Ọkpụ"
            width={120}
            height={40}
            className="h-9 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 text-xs tracking-[0.16em] uppercase text-[#0B0B0B] font-[family-name:var(--font-inter)]">
          <Link href="/collection" className="hover:opacity-60 transition-opacity duration-300">
            Collection
          </Link>
          <Link href="/a-propos" className="hover:opacity-60 transition-opacity duration-300">
            À propos
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-[#0B0B0B]"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-48" : "max-h-0"}`}>
        <nav className="bg-[#C9A45C] border-t border-[#B8913F] px-5 py-6 flex flex-col gap-5 text-xs tracking-[0.16em] uppercase text-[#0B0B0B] font-[family-name:var(--font-inter)]">
          <Link href="/collection" onClick={() => setOpen(false)} className="hover:opacity-60 transition-opacity">
            Collection
          </Link>
          <Link href="/a-propos" onClick={() => setOpen(false)} className="hover:opacity-60 transition-opacity">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
