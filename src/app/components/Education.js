const education = [
  {
    institution: "Coderhouse",
    title: "Customer Experience",
    period: "Nov 2022 — Feb 2023",
  },
  {
    institution: "Coderhouse",
    title: "Diseño UI",
    period: "Jun 2022 — Sep 2022",
  },
  {
    institution: "Coderhouse",
    title: "Diseñador UX/UI Avanzado",
    period: "Mar 2022 — Jun 2022",
  },
  {
    institution: "NUCBA",
    title: "Diseñador UX/UI",
    period: "Ago 2021 — Ene 2022",
  },
];

const certifications = [
  "Gestión de Proyectos con Jira",
  "Diseñador UX/UI Avanzado",
  "Fundamentos de Product Owner",
  "Gestión de Equipos Ágiles",
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 py-16 md:py-24 border-t border-zinc-800"
      aria-labelledby="education-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[40px] border-2 border-white bg-[#050509]/95 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="mb-6">
                <h2
                  id="education-title"
                  className="text-xl font-semibold tracking-tight text-zinc-100"
                >
                  Educación
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Formación en diseño y producto.
                </p>
              </div>

              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={`${edu.institution}-${edu.title}`}>
                    <h3 className="text-sm font-semibold text-zinc-100">
                      {edu.title}
                    </h3>
                    <p className="text-sm text-[#6366f1] font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-100">
                  Certificaciones
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Cursos y especializaciones completadas.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
