"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito instalar algo para usar NexoEscolar?",
    a: "No. NexoEscolar es una plataforma 100% web. Funciona desde cualquier navegador en computadora, tablet o celular, sin descargas ni instalaciones.",
  },
  {
    q: "¿Cuánto tiempo lleva implementarlo en el colegio?",
    a: "La configuración inicial toma entre 2 y 5 días hábiles. Nos encargamos de la carga de usuarios, cursos y configuración de roles para que el equipo empiece a usarlo sin fricción.",
  },
  {
    q: "¿Los datos de la institución están seguros?",
    a: "Sí. La plataforma usa autenticación con roles y permisos controlados. Solo acceden a la información quienes tienen autorización explícita. Además, el módulo de auditoría registra cada cambio realizado.",
  },
  {
    q: "¿Puede usarse desde el celular?",
    a: "Sí. La interfaz está diseñada para ser responsive y funciona correctamente en dispositivos móviles, tanto para docentes como para familias.",
  },
  {
    q: "¿El precio es por usuario o por institución?",
    a: "El precio es por institución, no por usuario. Podés incorporar a todo el equipo docente, administrativo y las familias sin costo adicional por cantidad.",
  },
  {
    q: "¿Ofrecen soporte después de la implementación?",
    a: "Sí. Incluye soporte continuo y actualizaciones de la plataforma. Podés contactarnos por WhatsApp o email ante cualquier consulta.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            Preguntas frecuentes
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Todo lo que necesitás saber
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-14 flex flex-col divide-y divide-slate-200 border border-slate-200 rounded-3xl overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 gap-4 hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900 text-base leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-sky-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center mt-10 text-slate-500 text-sm">
          ¿Tenés otra consulta?{" "}
          <a
            href="https://wa.me/5491131271710?text=Hola%2C%20tengo%20una%20consulta%20sobre%20NexoEscolar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-semibold hover:underline"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
