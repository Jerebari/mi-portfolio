const experiences = [
  {
    company: "Puntospoint",
    role: "Product Owner",
    period: "Feb 2026 — Presente",
    location: "Chile (remoto)",
    description:
      "Lidero la célula de producto, siendo responsable de la definición, priorización y seguimiento del roadmap y backlog. Alineo necesidades del negocio, clientes y equipo de desarrollo.",
    highlights: [
      "Definición y evolución del producto junto a stakeholders",
      "Priorización estratégica y gestión del backlog",
      "Coordinación de célula de producto (~10 desarrolladores)",
      "Implementación de procesos de gestión con Jira",
      "Definición y seguimiento de métricas a nivel producto",
    ],
  },
  {
    company: "Puntospoint",
    role: "Diseñador UX/UI",
    period: "Oct 2023 — Mar 2026",
    location: "Chile (remoto)",
    description:
      "Comencé como diseñador UX/UI y con el tiempo asumí un rol activo en producto, participando en la definición de funcionalidades y prioridades.",
    highlights: [
      "Lideré el rebranding completo de la empresa",
      "Diseño de plataformas web para usuarios finales y clientes corporativos",
      "Creación de productos desde cero y evolución de backoffices",
      "Participé en la definición de productos digitales clave",
      "Presentación semanal de KPIs y avances de roadmap",
    ],
  },
  {
    company: "Listos Para Rodar",
    role: "Diseñador Gráfico",
    period: "Mar 2022 — Sep 2022",
    location: "Remoto",
    description:
      "Diseño de contenido para redes sociales y organización mensual de publicaciones.",
    highlights: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-16 md:py-24 border-t border-zinc-800"
      aria-labelledby="experience-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[40px] border-2 border-white bg-[#050509]/95 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
          <div className="mb-8">
            <h2
              id="experience-title"
              className="text-xl font-semibold tracking-tight text-zinc-100"
            >
              Experiencia
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Mi recorrido profesional en producto y diseño.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="relative pl-6 border-l-2 border-zinc-800"
              >
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#6366f1] bg-[#050509]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#6366f1] font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-xs text-zinc-500 sm:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-zinc-500 flex items-start gap-2"
                      >
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-zinc-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
