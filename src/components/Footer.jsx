export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-lg">
          Nexo<span className="text-sky-500">Escolar</span>
        </div>

        <p className="text-sm text-slate-500 text-center">
          Plataforma de comunicación institucional para colegios.
        </p>

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} NexoEscolar
        </p>
      </div>
    </footer>
  );
}