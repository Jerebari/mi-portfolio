import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
