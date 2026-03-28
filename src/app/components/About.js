import Image from "next/image";

const skills = [
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
];

export default function About() {
  return (
    <section
      id="about"
      className="border border-[#1a1a1a] bg-black px-6 py-[50px]"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-sm font-medium text-[#888]">Sobre mí</p>
        <h2
          id="about-title"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Contexto y enfoque
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-[200px_1fr]">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-56 w-44 overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]">
              <Image
                src="/profile.png"
                alt="Foto de perfil de Jeremías Barisci"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 200px, 176px"
                priority
              />
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-[#a1a1a1] md:text-base">
              Comencé mi camino como diseñador UX/UI, trabajando en la creación
              y mejora de productos digitales. Con el tiempo fui involucrándome
              cada vez más en la definición de funcionalidades, priorización de
              iniciativas y coordinación con equipos técnicos, lo que me llevó
              de forma natural a un rol más centrado en producto.
            </p>
            <p className="text-sm leading-relaxed text-[#888] md:text-base">
              Hoy lidero la célula de producto en Puntospoint, siendo
              responsable de definir prioridades, estructurar el backlog y
              coordinar el trabajo entre desarrollo, producto y negocio.
              Coordino un equipo de ~10 desarrolladores y soy el único diseñador
              del equipo.
            </p>
            <p className="text-sm leading-relaxed text-[#888] md:text-base">
              A futuro me interesa profundizar en el crecimiento y la
              organización de equipos de trabajo, ayudando a construir
              estructuras sólidas que permitan escalar productos y empresas de
              forma sostenible.
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-1 text-xs text-[#a1a1a1] transition-colors hover:bg-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
