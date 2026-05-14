import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Institucional",
      price: "Consultar",
      description:
        "Ideal para colegios que buscan centralizar la comunicación y gestión institucional.",
      features: [
        "Gestión de usuarios por roles",
        "Módulo de anuncios",
        "Calendario institucional",
        "Gestión de cursos y alumnos",
        "Auditoría de cambios",
        "Acceso desde celular",
        "Soporte y actualizaciones",
      ],
      featured: true,
    },
  ];

  return (
    <section id="precios" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sky-500 font-bold text-sm uppercase tracking-wide">
            Planes
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Soluciones adaptadas para instituciones educativas
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Implementación profesional, personalización y soporte para cada
            institución.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-10 shadow-xl ${
                plan.featured
                  ? "border-sky-400 bg-gradient-to-b from-sky-50 to-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-5 right-5 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Recomendado
                </div>
              )}

              <h3 className="text-3xl font-extrabold">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-extrabold">
                  {plan.price}
                </span>
              </div>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {plan.description}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center flex-shrink-0">
                      <Check size={15} />
                    </div>

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a href="#contacto" className="primary-button w-full mt-10 text-center block">
                Solicitar demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}