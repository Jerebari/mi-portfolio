import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="text-zinc-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
