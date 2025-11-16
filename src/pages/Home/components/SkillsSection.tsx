import { Languages, Code, GraduationCap } from "lucide-react";
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
  return (
    <div className="space-y-8 opacity-0 animate-fade-in-up-scroll animation-delay-500">
      <div className="opacity-0 animate-fade-in animation-delay-700">
        <p className="text-sm font-semibold tracking-[0.3em] text-primary">Habilidades</p>
        <h3 className="text-2xl font-semibold">Competências técnicas</h3>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch opacity-0 animate-fade-in-up-scroll animation-delay-800">
        <AnimatedCardWrapper>
          <SkillCard title="Línguas" icon={Languages}>
            <LanguagesCardContent languages={skills.languages} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title="Tecnologias" icon={Code}>
            <SkillsCardContent skills={skills.technologies} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title="Frameworks" icon={Code}>
            <SkillsCardContent skills={skills.frameworks} />
          </SkillCard>
        </AnimatedCardWrapper>

        <AnimatedCardWrapper>
          <SkillCard title="Princípios" icon={GraduationCap}>
            <SkillsCardContent skills={skills.principles} />
          </SkillCard>
        </AnimatedCardWrapper>
      </div>
    </div>
  );
}

