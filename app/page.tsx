import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Speaking from "@/components/Speaking";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Speaking />
      <Education />
      <Testimonials />
      <Contact />
      <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6 text-center text-slate-500 text-sm">
        <p className="mb-2">© {new Date().getFullYear()} Saurabh Nishad. Embedded Architect | IoT Product Developer.</p>
        <p>
          <a href="https://github.com/saurabh-nishad" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
