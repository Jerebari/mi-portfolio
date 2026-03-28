"use client";

export default function Hero() {
  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-6 py-24 text-center"
      aria-labelledby="hero-title"
    >
      <div className="inline-flex items-center rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-1.5 text-xs text-[#888] mb-8">
        Product Owner & UX/UI Designer
      </div>

      <h1
        id="hero-title"
        className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        style={{
          background: "linear-gradient(180deg, #fff 0%, #888 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Jeremías Barisci
      </h1>

      <p className="mt-6 max-w-2xl text-base text-[#888] md:text-lg leading-relaxed">
        Product Owner con background en UX/UI, enfocado en convertir ideas y
        necesidades de negocio en productos digitales que realmente funcionan.
      </p>

      <div className="mt-10 flex items-center gap-4">
        <button
          type="button"
          onClick={handleScrollToProjects}
          className="rounded-lg bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#ccc] cursor-pointer"
        >
          Ver proyectos
        </button>
        <button
          type="button"
          onClick={handleScrollToContact}
          className="rounded-lg border border-[#333] px-6 py-2.5 text-sm font-medium text-[#ededed] transition-colors hover:border-[#555] hover:bg-[#111] cursor-pointer"
        >
          Contacto
        </button>
      </div>
    </section>
  );
}
