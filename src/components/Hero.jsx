"use client";

import { motion } from "framer-motion";
import { CalendarDays, Megaphone, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-100 text-sky-600 text-sm font-semibold shadow-sm"
          >
            Plataforma institucional para colegios
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            La comunicación escolar,{" "}
            <span className="gradient-text">ordenada y profesional</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            NexoEscolar centraliza anuncios, calendario, usuarios, cursos y
            auditoría en una plataforma moderna pensada para instituciones
            educativas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto" className="primary-button text-center">
              Solicitar demo
            </a>
            <a href="#modulos" className="secondary-button text-center">
              Ver módulos
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-sky-200 to-teal-200 rounded-[2rem] blur-3xl opacity-60" />

          <div className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm text-slate-400">Panel institucional</p>
                <h3 className="font-bold text-xl">Administración</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold">
                Online
              </span>
            </div>

            <div className="grid gap-4 mt-5">
              {[
                {
                  icon: Megaphone,
                  title: "Anuncios",
                  text: "Comunicados por curso o destinatario",
                },
                {
                  icon: CalendarDays,
                  title: "Calendario",
                  text: "Eventos escolares centralizados",
                },
                {
                  icon: ShieldCheck,
                  title: "Auditoría",
                  text: "Registro de cambios y control institucional",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}