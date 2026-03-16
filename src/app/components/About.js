export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:py-24 bg-[#050509] border-t border-zinc-800"
      aria-labelledby="about-title"
    >
      <div className="max-w-5xl mx-auto">
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
            <div className="h-52 w-40 sm:h-64 sm:w-48 md:h-72 md:w-56 rounded-3xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black border border-zinc-700/80 shadow-[0_20px_60px_rgba(0,0,0,0.65)] flex items-center justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Foto
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed text-zinc-300">
              Combino investigación con usuarios, definición de estrategia de
              producto y diseño de interfaces para crear experiencias que se
              sientan claras, humanas y alineadas con los objetivos del negocio.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-zinc-400">
              Me interesa especialmente el momento en el que una idea se vuelve
              tangible: pasar de hipótesis a decisiones concretas sobre
              flujos, priorización y detalle visual, siempre con foco en
              reducir fricción y aumentar el valor percibido.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200">
                UX Research
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200">
                Product Strategy
              </span>
              <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200">
                Diseño de interfaces
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
