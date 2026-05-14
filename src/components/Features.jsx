import { Smartphone, UsersRound, LockKeyhole, Bell, LayoutDashboard, History } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Panel centralizado",
      text: "Toda la información institucional organizada desde un único lugar.",
    },
    {
      icon: UsersRound,
      title: "Roles y permisos",
      text: "Accesos diferenciados para administración, directivos, docentes y familias.",
    },
    {
      icon: Bell,
      title: "Comunicados claros",
      text: "Anuncios segmentados por curso, destinatario o comunicación general.",
    },
    {
      icon: Smartphone,
      title: "Acceso desde el celular",
      text: "Interfaz moderna pensada para usarse desde computadora, tablet o móvil.",
    },
    {
      icon: History,
      title: "Auditoría de cambios",
      text: "Registro de modificaciones para mayor control y transparencia.",
    },
    {
      icon: LockKeyhole,
      title: "Información protegida",
      text: "Gestión institucional con usuarios autenticados y permisos controlados.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            Beneficios
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Una plataforma pensada para ordenar la gestión diaria
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            NexoEscolar ayuda a profesionalizar la comunicación entre la institución,
            los docentes y las familias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center">
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