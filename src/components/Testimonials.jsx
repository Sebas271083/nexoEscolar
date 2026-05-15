"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcela Rodríguez",
    role: "Directora",
    school: "Colegio San Martín, Buenos Aires",
    text: "Antes usábamos cuatro grupos de WhatsApp distintos y siempre había confusión. Con NexoEscolar los comunicados llegan a quien corresponde y queda todo registrado. Le cambió la dinámica a todo el equipo docente.",
  },
  {
    name: "Jorge Ibáñez",
    role: "Secretario de gestión",
    school: "Instituto Belgrano, Córdoba",
    text: "La parte de auditoría fue lo que más nos convenció. Ahora podemos ver quién publicó qué y cuándo, sin depender de la memoria de nadie. Implementarlo tomó menos de una semana.",
  },
  {
    name: "Claudia Ferreyra",
    role: "Coordinadora académica",
    school: "Escuela Primaria N° 14, Rosario",
    text: "Las familias nos lo agradecieron desde el primer día. Reciben los avisos a tiempo, sin el ruido de un grupo masivo. Nos ahorró muchísimas llamadas y malentendidos.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Lo que dicen las instituciones que ya lo usan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="flex flex-col bg-white rounded-3xl border border-slate-200 p-7 shadow-sm"
            >
              <Quote size={28} className="text-sky-200 shrink-0" />
              <p className="mt-4 text-slate-600 leading-relaxed flex-1">
                {t.text}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500 mt-0.5">
                  {t.role} · {t.school}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
