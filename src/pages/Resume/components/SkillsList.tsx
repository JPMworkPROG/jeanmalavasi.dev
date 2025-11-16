import { Badge } from "@/components/ui/badge";
import type { SkillIconsRecord } from "../data";

interface SkillsListProps {
  skills: string[];
  skillIcons: SkillIconsRecord;
}

export function SkillsList({ skills, skillIcons }: SkillsListProps) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-4">
        Competências
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} icon={skillIcons[skill]} text={skill} />
        ))}
      </div>
    </div>
  );
}

