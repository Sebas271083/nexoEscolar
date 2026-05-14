import { AlertTriangle, MessageCircleOff, FileWarning } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: MessageCircleOff,
      title: "Mensajes perdidos",
      text: "La información importante queda mezclada entre grupos, chats y conversaciones informales.",
    },
    {
      icon: FileWarning,
      title: "Falta de trazabilidad",
      text: "No siempre queda claro quién publicó, editó o modificó una comunicación institucional.",
    },
    {
      icon: AlertTriangle,
      title: "Comunicación desordenada",
      text: "Las familias reciben información por distintos canales, generando confusión y reclamos.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            El problema
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            La comunicación escolar no puede depender solo de WhatsApp
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Cuando no existe una plataforma institucional, los mensajes se
            pierden, los avisos se duplican y la gestión diaria se vuelve más
            difícil para directivos, docentes y familias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center">
                <item.icon size={24} />
              </div>

              <h3 className="mt-5 font-bold text-xl">{item.title}</h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}