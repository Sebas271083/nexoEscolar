export default function Credibility() {
  const stats = [
    {
      value: "70%",
      label: "menos mensajes WhatsApp conflictivos",
    },
    {
      value: "100%",
      label: "trazabilidad de comunicaciones",
    },
    {
      value: "48hs",
      label: "tiempo de implementación",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Desarrollado por expertos en educación
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          NexoEscolar fue creado con más de 15 años de experiencia en sistemas
          educativos y procesos administrativos escolares, incorporando feedback
          de directores, coordinadores y docentes de colegios privados en CABA y GBA.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-3xl font-extrabold text-sky-500">{s.value}</p>
              <p className="mt-2 text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
