"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#modulos", label: "Módulos" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
      <div className="section-container h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-teal-400" />
          <span className="font-bold text-xl">
            Nexo<span className="text-sky-500">Escolar</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-500 transition">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contacto" className="primary-button text-sm hidden md:inline-flex">
          Solicitar Demo
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-1 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium border-b border-slate-100 last:border-0 hover:text-sky-500 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="primary-button text-center mt-4"
          >
            Solicitar Demo
          </a>
        </div>
      )}
    </header>
  );
}
