import { useTranslation } from "react-i18next";
import { HeroSection } from "./components/HeroSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { StackMindsetSection } from "./components/StackMindsetSection";
import { SkillsSection } from "./components/SkillsSection";
import { getStackMindset, getSkills, socialLinks, getHeroData, getManifestoData, getManifestoPillars } from "./data";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-16" key={i18n.language}>
      <HeroSection socialLinks={socialLinks} heroData={getHeroData(t)} />

      <div className="mt-20 space-y-16">
        <ManifestoSection manifestoData={getManifestoData(t)} pillars={getManifestoPillars(t)} />
        <StackMindsetSection items={getStackMindset(t)} />
        <SkillsSection skills={getSkills(t)} />
      </div>
    </section>
  );
}