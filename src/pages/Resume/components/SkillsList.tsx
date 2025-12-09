import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import type { SkillIconsRecord } from "../data";

interface SkillsListProps {
  skills: string[];
  skillIcons: SkillIconsRecord;
}

export function SkillsList({ skills, skillIcons }: SkillsListProps) {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-4">
        {t('resume.labels.skills')}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} icon={skillIcons[skill]} text={skill} />
        ))}
      </div>
    </div>
  );
}

