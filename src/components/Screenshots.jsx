"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState(null);

  const screenshots = [
    {
      title: "Módulo de Tareas",
      image: "./tareas.png",
    },
    {
      title: "Chat institucional",
      image: "./chat.png",
    },
    {
      title: "Panel de administración",
      image: "./admin.png",
    },
  ];

  return (
    <>
      <section className="py-24 bg-slate-50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
              Plataforma
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Una experiencia moderna y profesional
            </h2>

            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Diseñada para que directivos, docentes y familias puedan acceder
              fácilmente desde cualquier dispositivo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            {screenshots.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
                  <div className="h-12 border-b border-slate-100 flex items-center gap-2 px-5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>

                  <div
                    className="overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] md:h-[280px] lg:h-[340px] object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-50 w-10 h-10 rounded-full bg-white shadow-lg text-black font-bold text-xl hover:scale-110 transition"
              >
                ×
              </button>

              <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full max-h-[85vh] object-contain bg-white"
                />
              </div>

              <h3 className="text-white text-center text-2xl font-bold mt-6">
                {selectedImage.title}
              </h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}