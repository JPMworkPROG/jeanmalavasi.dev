import { useTranslation } from "react-i18next";

interface AchievementsListProps {
   achievements: string[];
}

export function AchievementsList({ achievements }: AchievementsListProps) {
   const { t } = useTranslation();

   return (
      <div>
         <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-4">
            {t('resume.labels.achievements')}
         </p>
         <ul className="space-y-3">
            {achievements.map((achievement) => (
               <li key={achievement} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 shrink-0">•</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
               </li>
            ))}
         </ul>
      </div>
   );
}

