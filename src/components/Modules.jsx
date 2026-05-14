import {
  Megaphone,
  CalendarDays,
  Users,
  GraduationCap,
  BookOpen,
  History,
} from "lucide-react";

export default function Modules() {
  const modules = [
    {
      icon: Megaphone,
      title: "Anuncios",
      text: "Publicaciones institucionales segmentadas por curso y destinatario.",
    },
    {
      icon: CalendarDays,
      title: "Calendario",
      text: "Eventos escolares centralizados para mantener informada a toda la comunidad.",
    },
    {
      icon: Users,
      title: "Usuarios",
      text: "Gestión de perfiles por rol: admin, directivo, secretaría, docente y familias.",
    },
    {
      icon: GraduationCap,
      title: "Alumnos",
      text: "Administración de estudiantes, cursos y vínculos con padres o tutores.",
    },
    {
      icon: BookOpen,
      title: "Cursos",
      text: "Organización de cursos, docentes asignados y cantidad de alumnos.",
    },
    {
      icon: History,
      title: "Auditoría",
      text: "Historial de cambios para controlar acciones importantes dentro del sistema.",
    },
  ];

  return (
    <section id="modulos" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            Módulos
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Todo lo necesario para una comunicación escolar profesional
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            La plataforma está diseñada para cubrir las necesidades centrales de
            comunicación, organización y control institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {modules.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 p-6 hover:border-sky-300 hover:bg-sky-50/40 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-sky-500 flex items-center justify-center group-hover:bg-white transition">
                <item.icon size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

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