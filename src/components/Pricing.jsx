import { Check } from "lucide-react";

const plans = [
  {
    name: "Comunidad",
    price: "$0",
    period: "/mes",
    badge: "Para empezar",
    description: "Perfecto para probar la plataforma sin costo.",
    features: [
      "Hasta 100 alumnos",
      "Anuncios y calendario",
      "Chat básico",
      "Usuarios con roles",
      "Sin límite de tiempo",
      "Soporte por email",
    ],
    featured: false,
    ctaText: "Crear cuenta gratis",
    ctaHref: "https://app.somosnexoescolar.com.ar/signup?plan=free",
  },
  {
    name: "Institucional",
    price: "$150",
    period: "/alumno/mes",
    badge: "Recomendado",
    description: "Para colegios que necesitan auditoría y escalabilidad.",
    features: [
      "Usuarios ilimitados",
      "Auditoría completa",
      "Roles avanzados",
      "Chat profesional",
      "Soporte prioritario",
      "SLA 99.5%",
      "Integraciones",
      "APIs disponibles",
    ],
    featured: true,
    ctaText: "Solicitar demostración",
    ctaHref: "#contacto",
    promo: "Primeros 3 meses: 20% de descuento",
  },
];

export default function Pricing() {
  return (
    <section id="planes" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Planes</span>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Soluciones adaptadas para cada institución
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Comenzá gratis y escalá cuando crezcas. Sin contratos de largo plazo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-10 ${
                plan.featured
                  ? "border-2 border-sky-500 bg-white shadow-lg"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full ${
                  plan.featured
                    ? "bg-sky-500 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {plan.badge}
              </div>

              <h3 className="text-2xl font-extrabold">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {plan.description}
              </p>

              {plan.promo && (
                <p className="mt-3 text-xs text-sky-600 font-semibold">
                  ✓ {plan.promo}
                </p>
              )}

              <div className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.ctaHref}
                className={`w-full mt-10 text-center block py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-sky-300/30"
                    : "border border-slate-300 hover:border-sky-400 text-slate-700"
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
