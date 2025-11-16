import type { ComponentType } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Language, SkillItem } from "../data";

interface SkillCardProps {
  title: string;
  icon: ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function SkillCardHeader({ title, icon: Icon }: { title: string; icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-primary/10 p-2">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export function SkillCard({ title, icon, children }: SkillCardProps) {
  return (
    <Card className="p-8 space-y-4 border-border/60 bg-card/60 h-full flex flex-col">
      <SkillCardHeader title={title} icon={icon} />
      <div className="grow">{children}</div>
    </Card>
  );
}

interface LanguagesCardContentProps {
  languages: Language[];
}

export function LanguagesCardContent({ languages }: LanguagesCardContentProps) {
  return (
    <div className="space-y-2">
      {languages.map((lang) => (
        <div key={lang.name} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{lang.name}</span>
          <span className="text-xs font-medium text-muted-foreground">{lang.level}</span>
        </div>
      ))}
    </div>
  );
}

interface SkillsCardContentProps {
  skills: SkillItem[];
}

export function SkillsCardContent({ skills }: SkillsCardContentProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill.name} icon={skill.Icon} text={skill.name} />
      ))}
    </div>
  );
}

