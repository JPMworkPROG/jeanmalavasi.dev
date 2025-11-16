import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { ExperienceInfoItem } from "./ExperienceInfoItem";
import { AchievementsList } from "./AchievementsList";
import { SkillsList } from "./SkillsList";
import type { Experience, SkillIconsRecord } from "../data";
import { getAnimationDelay, ANIMATION_DELAYS } from "../../../lib/utils";

interface ExperienceCardProps {
   experience: Experience;
   index: number;
   skillIcons: SkillIconsRecord;
}

export function ExperienceCard({ experience, index, skillIcons }: ExperienceCardProps) {
   const baseDelay = ANIMATION_DELAYS.BASE;
   const increment = ANIMATION_DELAYS.EXPERIENCE_INCREMENT;

   return (
      <div
         className="opacity-0 animate-fade-in-up-scroll"
         style={{ animationDelay: getAnimationDelay(baseDelay, index, increment) }}
      >
         <Card className="overflow-hidden border-border/60 bg-card transition-transform duration-300 hover:shadow-lg">
            <div className="space-y-6 p-6 lg:p-10">
               <div
                  className="space-y-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.1, index, increment) }}
               >
                  <div className="space-y-2">
                     <h3 className="text-3xl font-semibold">{experience.company}</h3>
                     <p className="text-lg text-primary font-medium">{experience.position}</p>
                  </div>
               </div>

               <div
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.2, index, increment) }}
               >
                  <ExperienceInfoItem
                     icon={MapPin}
                     label="Localização"
                     value={experience.location}
                  />
                  <ExperienceInfoItem
                     icon={Briefcase}
                     label="Tipo"
                     value={experience.type}
                  />
                  <ExperienceInfoItem
                     icon={Calendar}
                     label="Período"
                     value={
                        <>
                           {experience.startDate} - {experience.endDate}
                        </>
                     }
                     secondaryValue={experience.duration}
                  />
               </div>

               <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.3, index, increment) }}
               >
                  <AchievementsList achievements={experience.achievements} />
               </div>

               <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.4, index, increment) }}
               >
                  <SkillsList skills={experience.skills} skillIcons={skillIcons} />
               </div>
            </div>
         </Card>
      </div>
   );
}

