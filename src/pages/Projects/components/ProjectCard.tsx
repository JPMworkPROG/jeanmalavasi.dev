import { Card } from "@/components/ui/card";
import { TechStackList } from "./TechStackList";
import { HighlightsList } from "./HighlightsList";
import { ProjectActions } from "./ProjectActions";
import { ProjectImage } from "./ProjectImage";
import type { Project } from "../data";
import { getAnimationDelay, ANIMATION_DELAYS } from "@/lib/utils";

interface ProjectCardProps {
   project: Project;
   index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
   const baseDelay = ANIMATION_DELAYS.LONG;
   const increment = ANIMATION_DELAYS.EXPERIENCE_INCREMENT;

   return (
      <div
         className="opacity-0 animate-fade-in-up-scroll"
         style={{ animationDelay: getAnimationDelay(baseDelay, index, increment) }}
      >
         <Card className="overflow-hidden border-border/60 bg-card transition-transform duration-300 hover:shadow-lg">
            <div className="grid gap-0 lg:grid-cols-[3fr_2fr]">
               <div className="space-y-6 p-6 lg:p-10">
                  <div
                     className="space-y-3 opacity-0 animate-fade-in"
                     style={{ animationDelay: getAnimationDelay(baseDelay + 0.2, index, increment) }}
                  >
                     <h2 className="text-3xl font-semibold">{project.title}</h2>
                     <p className="text-muted-foreground">{project.description}</p>
                  </div>

                  <TechStackList techStack={project.techStack} baseDelay={1.0} projectIndex={index} />

                  <HighlightsList highlights={project.highlights} baseDelay={1.2} projectIndex={index} />

                  <ProjectActions project={project} baseDelay={1.6} projectIndex={index} />
               </div>

               <ProjectImage project={project} baseDelay={1.0} projectIndex={index} />
            </div>
         </Card>
      </div>
   );
}

