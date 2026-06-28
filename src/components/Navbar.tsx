"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-stone-900">
          Ọkpụ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
          <Link href="/collection" className="hover:text-stone-900 transition-colors">
            Collection
          </Link>
          <Link href="/a-propos" className="hover:text-stone-900 transition-colors">
            À propos
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-stone-600"
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current mb-1.5" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t border-stone-100 px-4 py-4 flex flex-col gap-4 text-base font-medium text-stone-700">
          <Link href="/collection" onClick={() => setOpen(false)}>
            Collection
          </Link>
          <Link href="/a-propos" onClick={() => setOpen(false)}>
            À propos
          </Link>
        </nav>
      )}
    </header>
  );
}
