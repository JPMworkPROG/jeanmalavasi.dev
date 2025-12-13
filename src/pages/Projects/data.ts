import type { ComponentType } from "react";
import type { TFunction } from "i18next";
import { GrPowerCycle } from "react-icons/gr";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export interface ProjectsHeader {
  label: string;
  title: string;
  description: string;
}

export const getProjectsHeader = (t: TFunction): ProjectsHeader => ({
  label: t('projects.header.label'),
  title: t('projects.header.title'),
  description: t('projects.header.description'),
});

export interface TechStackItem {
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  techStack: TechStackItem[];
  liveUrl: string;
  repoUrl: string;
  imageSrc: string;
  imageAlt: string;
  docsUrl?: string;
}

export const getProjects = (t: TFunction): Project[] => [
  {
    title: t('projects.todoManager.title'),
    description: t('projects.todoManager.description'),
    highlights: t('projects.todoManager.highlights', { returnObjects: true }) as string[],
    techStack: [
      { label: "Next.js 14", Icon: SiNextdotjs },
      { label: "React Query", Icon: SiReactquery },
      { label: "React Hook Form", Icon: SiReacthookform },
      { label: "Express 4", Icon: SiExpress },
      { label: "Prisma 5", Icon: SiPrisma },
      { label: "SQLite", Icon: SiSqlite },
      { label: "Docker", Icon: SiDocker },
      { label: "Shadcn UI", Icon: SiShadcnui },
      { label: "TailwindCSS", Icon: SiTailwindcss },
    ],
    liveUrl: "https://todomanager-frontend-ed80ca3b976d.herokuapp.com/demand",
    repoUrl: "https://github.com/JPMworkPROG/TodoManager",
    imageSrc: "/projects/todoManager/front.gif",
    imageAlt: t('projects.todoManager.imageAlt'),
    docsUrl: "https://todomanager-backend-f0230eb77fe3.herokuapp.com/docs/",
  },
  {
    title: t('projects.restora.title'),
    description: t('projects.restora.description'),
    highlights: t('projects.restora.highlights', { returnObjects: true }) as string[],
    techStack: [
      { label: "Next.js 15", Icon: SiNextdotjs },
      { label: "TailwindCSS", Icon: SiTailwindcss },
      { label: "Shadcn UI", Icon: SiShadcnui },
    ],
    liveUrl: "https://www.restoracosmeticos.com.br",
    repoUrl: "https://github.com/JPMworkPROG/restora.cosmetics",
    imageSrc: "/projects/restora/front.gif",
    imageAlt: t('projects.restora.imageAlt'),
  },
  {
    title: t('projects.genericRestClient.title'),
    description: t('projects.genericRestClient.description'),
    highlights: t('projects.genericRestClient.highlights', { returnObjects: true }) as string[],
    techStack: [
      { label: ".NET 9.0", Icon: SiDotnet },
      { label: "Polly", Icon: GrPowerCycle },
    ],
    liveUrl: "https://www.nuget.org/packages/GenericRestClient",
    repoUrl: "https://github.com/JPMworkPROG/GenericRestClient",
    imageSrc: "/projects/genericRestClient/logo.png",
    imageAlt: t('projects.genericRestClient.imageAlt'),
  },
];
