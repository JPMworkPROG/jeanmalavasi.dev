import type { Project } from "../data";

interface ProjectImageProps {
   project: Project;
   baseDelay: number;
   projectIndex: number;
}

export function ProjectImage({ project, baseDelay, projectIndex }: ProjectImageProps) {
   return (
      <div
         className="flex items-center px-6 pt-6 pb-6 lg:pt-10 lg:pb-10 lg:pl-0 lg:pr-10 opacity-0 animate-fade-in-scale"
         style={{ animationDelay: `${baseDelay + projectIndex * 0.2}s` }}
      >
         <figure
            className="mx-auto w-full max-w-[854px] rounded-lg border border-border/70 bg-muted/20 transition-transform duration-300 hover:scale-[1.02]"
            style={{ aspectRatio: "854 / 480" }}
         >
            <img
               src={project.imageSrc}
               alt={project.imageAlt}
               className="h-full w-full object-cover"
               loading="lazy"
               decoding="async"
            />
         </figure>
      </div>
   );
}

