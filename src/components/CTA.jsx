export default function CTA() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 text-white">
      <div className="section-container text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Llevá la comunicación de tu institución al siguiente nivel
        </h2>

        <p className="mt-6 text-slate-300 text-lg leading-relaxed">
          Solicitá una demo personalizada. Te mostramos exactamente cómo
          NexoEscolar simplifica la gestión institucional. Sin compromiso.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491131271710?text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20NexoEscolar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition"
          >
            Hablar por WhatsApp
          </a>

          <a
            href="mailto:ventas@somosnexoescolar.com.ar?subject=Solicito%20demo%20de%20NexoEscolar"
            className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition"
          >
            Enviar consulta
          </a>
        </div>
      </div>
    </section>
  );
}
