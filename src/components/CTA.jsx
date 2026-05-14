export default function CTA() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 text-white">
      <div className="section-container text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Llevá la comunicación de tu institución al siguiente nivel
        </h2>

        <p className="mt-6 text-slate-300 text-lg leading-relaxed">
          Solicitá una demo de NexoEscolar y conocé cómo puede ayudar a ordenar
          anuncios, calendario, usuarios, cursos y auditoría institucional.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491131271710?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20NexoEscolar"
            target="_blank"
            className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition"
          >
            Hablar por WhatsApp
          </a>

          <a
            href="mailto:sebdelgado83@gmail.com?subject=Demo%20NexoEscolar"
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition"
          >
            Enviar consulta
          </a>
        </div>
      </div>
    </section>
  );
}