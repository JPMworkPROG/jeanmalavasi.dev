import { HeroSection } from "./components/HeroSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { StackMindsetSection } from "./components/StackMindsetSection";
import { SkillsSection } from "./components/SkillsSection";
import { stackMindset, skills, socialLinks, heroData, manifestoData } from "./data";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <HeroSection socialLinks={socialLinks} heroData={heroData} />

      <section className="mt-20 space-y-16">
        <ManifestoSection manifestoData={manifestoData} />
        <StackMindsetSection items={stackMindset} />
        <SkillsSection skills={skills} />
      </section>
    </div>
  );
}