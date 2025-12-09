import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SiOpenapiinitiative } from "react-icons/si";
import { useTranslation } from "react-i18next";
import type { Project } from "../data";

interface ProjectActionsProps {
  project: Project;
  baseDelay: number;
  projectIndex: number;
}

export function ProjectActions({ project, baseDelay, projectIndex }: ProjectActionsProps) {
  const { t } = useTranslation();
  const buttonClass = "transition-transform duration-300 hover:scale-105 active:scale-95";

  return (
    <div
      className="flex flex-wrap gap-3 opacity-0 animate-fade-in"
      style={{ animationDelay: `${baseDelay + projectIndex * 0.2}s` }}
    >
      <div className={buttonClass}>
        <Button asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {t('projects.actions.accessApp')}
          </a>
        </Button>
      </div>
      <div className={buttonClass}>
        <Button asChild>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            {t('projects.actions.viewCode')}
          </a>
        </Button>
      </div>
      {project.docsUrl && (
        <div className={buttonClass}>
          <Button asChild>
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
              <SiOpenapiinitiative className="h-4 w-4" aria-hidden="true" />
              {t('projects.actions.openApiDocs')}
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}

