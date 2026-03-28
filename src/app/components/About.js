import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-24 border-t border-zinc-800"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[40px] border-2 border-white bg-[#050509]/95 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
          <div className="mb-8">
          <h2
            id="about-title"
            className="text-xl font-semibold tracking-tight text-zinc-100"
          >
            Sobre mí
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Un poco de contexto y enfoque de trabajo.
          </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-52 w-40 sm:h-64 sm:w-48 md:h-72 md:w-56 rounded-3xl overflow-hidden border border-zinc-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.65)] bg-zinc-900">
              <Image
                src="/profile.png"
                alt="Foto de perfil de Jeremías Barisci"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 224px, 160px"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-zinc-300">
              Comencé mi camino como diseñador UX/UI, trabajando en la creación
              y mejora de productos digitales. Con el tiempo fui involucrándome
              cada vez más en la definición de funcionalidades, priorización de
              iniciativas y coordinación con equipos técnicos, lo que me llevó
              de forma natural a un rol más centrado en producto.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-zinc-400">
              Hoy lidero la célula de producto en Puntospoint, siendo
              responsable de definir prioridades, estructurar el backlog y
              coordinar el trabajo entre desarrollo, producto y negocio.
              Coordino un equipo de ~10 desarrolladores y soy el único diseñador
              del equipo.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-zinc-400">
              A futuro me interesa profundizar en el crecimiento y la
              organización de equipos de trabajo, ayudando a construir
              estructuras sólidas que permitan escalar productos y empresas de
              forma sostenible.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Product Owner",
                "UX/UI Design",
                "Figma",
                "Design System",
                "Jira",
                "Clarity",
                "Gestión de equipos",
                "Desarrollo de productos",
                "Roadmap & Backlog",
                "Customer Experience",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {skill}
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
