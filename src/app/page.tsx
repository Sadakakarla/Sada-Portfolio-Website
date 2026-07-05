import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/skills";
import { GrainOverlay, DoodleField } from "@/components/ui/page-texture";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Publications from "@/components/sections/Publications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <GrainOverlay />
      <div className="relative">
        <DoodleField />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Publications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}