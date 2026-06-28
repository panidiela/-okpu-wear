"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F7F4EE]/95 backdrop-blur-sm border-b border-[#E8E4DD]">
      <div className="max-w-5xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <nav className="hidden md:flex gap-10 text-xs tracking-[0.16em] uppercase text-[#B7B2A9] font-[family-name:var(--font-inter)]">
          <Link href="/collection" className="hover:text-[#0B0B0B] transition-colors duration-300">
            Collection
          </Link>
          <Link href="/a-propos" className="hover:text-[#0B0B0B] transition-colors duration-300">
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
        <nav className="bg-[#F7F4EE] border-t border-[#E8E4DD] px-5 py-6 flex flex-col gap-5 text-xs tracking-[0.16em] uppercase text-[#B7B2A9] font-[family-name:var(--font-inter)]">
          <Link href="/collection" onClick={() => setOpen(false)} className="hover:text-[#0B0B0B] transition-colors">
            Collection
          </Link>
          <Link href="/a-propos" onClick={() => setOpen(false)} className="hover:text-[#0B0B0B] transition-colors">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
