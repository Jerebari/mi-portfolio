"use client";

export default function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-3xl w-full text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Portfolio
        </p>
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-zinc-50 leading-tight"
        >
          Jeremías Barisci
        </h1>
        <p className="mt-3 text-lg md:text-xl text-zinc-300">
          Product Owner | Diseñador UX/UI | Figma lover
        </p>
        <p className="mt-6 text-sm md:text-base text-zinc-400 max-w-xl">
          Argentino viviendo en Italia, trabajando remotamente para una empresa
          tecnológica chilena. Convierto ideas y necesidades de negocio en
          productos digitales que realmente funcionan. Enfocado en construir
          productos desde cero y mejorar cómo trabajan los equipos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <button
            type="button"
            onClick={handleScrollToProjects}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium text-white bg-[#6366f1] hover:bg-[#4f46e5] transition-colors shadow-lg shadow-indigo-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-black cursor-pointer"
          >
            Ver mis proyectos
          </button>
        </div>
      </div>
    </section>
  );
}
