import Hero from "@/components/Hero";
import ExpertiseStrip from "@/components/ExpertiseStrip";
import QuickValueStrip from "@/components/QuickValueStrip";
import About from "@/components/About";
import WhatIBuild from "@/components/WhatIBuild";
import SelectedImpact from "@/components/SelectedImpact";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import PublicationsInnovation from "@/components/PublicationsInnovation";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import OpenTo from "@/components/OpenTo";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseStrip />
      <QuickValueStrip />
      <About />
      <WhatIBuild />
      <SelectedImpact />
      <Projects />
      <Experience />
      <Skills />
      <PublicationsInnovation />
      <WhoIWorkWith />
      <OpenTo />
      <Testimonials />
      <CTA />
      <Contact />
      <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6 text-center text-slate-500 text-sm">
        <p className="mb-2">
          © {new Date().getFullYear()} Saurabh Nishad. Deep-Tech Product Architect building the future of connected, intelligent, human-centered devices.
        </p>
        <p>
          <a
            href="https://github.com/saurabh-nishad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:underline"
          >
            GitHub
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/saurabh-nishad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  );
}
