import { AboutSection } from "./features/about";
import { ContactSection } from "./features/contact";
import { HeroSection } from "./features/hero";
import { ProjectsSection } from "./features/projects";
import { SkillsSection } from "./features/skills";
import { Footer } from "./shared/components/Footer";
import { Navigation } from "./shared/components/Navigation";
import { Preloader } from "./shared/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
