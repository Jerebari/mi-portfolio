const projects = [
  {
    title: "Rebranding Puntospoint",
    description:
      "Lideré el rebranding completo de la empresa, definiendo identidad visual y lineamientos de marca.",
    category: "Branding & UX",
  },
  {
    title: "Rediseño App Starbucks",
    description:
      "Proyecto académico de rediseño de la app de Starbucks. Nota: 9/10 en Coderhouse.",
    category: "UX/UI Case Study",
  },
  {
    title: "GO — App de Transporte",
    description:
      "Diseño de app de transporte público para proyecto universitario en NUCBA.",
    category: "UX/UI Design",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 md:py-24 border-t border-zinc-800"
      aria-labelledby="projects-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[40px] border-2 border-white bg-[#050509]/95 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2
              id="projects-title"
              className="text-xl font-semibold tracking-tight text-zinc-100"
            >
              Proyectos seleccionados
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Una muestra del tipo de problemas y contextos en los que trabajo.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-zinc-800 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.15),_transparent_55%),_#050509] p-4 sm:p-5 flex flex-col gap-3 hover:border-[#6366f1] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black mb-3 overflow-hidden">
                <div className="h-full w-full opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-sm sm:text-base font-semibold text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-2">
                <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-[11px] font-medium text-zinc-200">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
