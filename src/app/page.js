import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <DotGrid />
      <div className="relative z-10">
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </div>
      </main>
      </div>
    </>
  );
}
