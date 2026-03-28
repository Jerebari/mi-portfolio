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
      className="border border-[#1a1a1a] bg-black px-6 py-[50px]"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-medium text-[#888]">Experiencia</p>
        <h2
          id="experience-title"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Recorrido profesional
        </h2>

        <div className="mt-12 space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className={`relative grid gap-4 py-8 sm:grid-cols-[180px_1fr] ${
                i !== experiences.length - 1
                  ? "border-b border-[#1a1a1a] -mx-6 px-6"
                  : ""
              }`}
            >
              <div className="text-xs text-[#666]">
                <p className="font-mono">{exp.period}</p>
                <p className="mt-1">{exp.location}</p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[#888]">
                  {exp.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#666]">
                  {exp.description}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#666]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#333]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
