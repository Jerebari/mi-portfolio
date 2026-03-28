const projects = [
  {
    title: "Rebranding Puntospoint",
    description:
      "Lideré el rebranding completo de la empresa, definiendo identidad visual, lineamientos de marca y supervisando el rediseño del sitio web corporativo.",
    category: "Branding & Producto",
  },
  {
    title: "Plataformas digitales Puntospoint",
    description:
      "Diseño y evolución de plataformas web para usuarios finales y clientes corporativos. Creación de productos desde cero y mejora continua de backoffices.",
    category: "UX/UI & Producto",
  },
  {
    title: "Definición de producto digital",
    description:
      "Participé activamente en la definición inicial del funcionamiento de uno de los principales productos digitales de la empresa, liderando el enfoque de producto y estructura funcional.",
    category: "Product Owner",
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
      "Diseño de app de transporte público para proyecto final en NUCBA.",
    category: "UX/UI Design",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border border-[#1a1a1a] bg-black px-6 py-[50px]"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-medium text-[#888]">Proyectos</p>
        <h2
          id="projects-title"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Proyectos seleccionados
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] p-5 transition-colors hover:border-white"
            >
              <div className="mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#111]">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="h-8 w-8 rounded-lg bg-[#1a1a1a] transition-colors group-hover:bg-[#222]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#666]">
                  {project.description}
                </p>
              </div>
              <div className="mt-4">
                <span className="rounded-md border border-[#1a1a1a] bg-black px-2.5 py-1 text-[11px] text-[#888]">
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
