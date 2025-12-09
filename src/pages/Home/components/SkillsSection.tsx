import { Languages, Code, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SkillCard, LanguagesCardContent, SkillsCardContent } from "./SkillCard";
import type { Skills } from "../data";

interface SkillsSectionProps {
  skills: Skills;
}

function AnimatedCardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="opacity-0 animate-fade-in-up-scroll transition-transform duration-300 hover:-translate-y-2 h-full">
      {children}
    </div>
  );
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 opacity-0 animate-fade-in-up-scroll animation-delay-500">
      <div className="opacity-0 animate-fade-in animation-delay-700">
        <p className="text-sm font-semibold tracking-[0.3em] text-primary">{t('home.skills.title')}</p>
        <h3 className="text-2xl font-semibold">{t('home.skills.subtitle')}</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch opacity-0 animate-fade-in-up-scroll animation-delay-800">
        <AnimatedCardWrapper>
          <SkillCard title={t('home.skills.sections.languages')} icon={Languages}>
            <LanguagesCardContent languages={skills.languages} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title={t('home.skills.sections.technologies')} icon={Code}>
            <SkillsCardContent skills={skills.technologies} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title={t('home.skills.sections.frameworks')} icon={Code}>
            <SkillsCardContent skills={skills.frameworks} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title={t('home.skills.sections.principles')} icon={GraduationCap}>
            <SkillsCardContent skills={skills.principles} />
          </SkillCard>
        </AnimatedCardWrapper>
      </div>
    </div>
  );
}

