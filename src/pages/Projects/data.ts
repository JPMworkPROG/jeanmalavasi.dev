import type { ComponentType } from "react";
import {
  SiDocker,
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiReacthookform,
  SiReactquery,
  SiSqlite,
} from "react-icons/si";

export interface ProjectsHeader {
  label: string;
  title: string;
  description: string;
}

export const projectsHeader: ProjectsHeader = {
  label: "Portfolio",
  title: "Projetos em Destaque",
  description: "Seleção curada com estudos e entregas profissionais que demonstram minha atuação como desenvolvedor full stack, sempre alinhada a boas práticas e foco em produto.",
};

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

export const projects: Project[] = [
  {
    title: "TodoManager — Planejamento de Demandas",
    description:
      "Aplicação full stack que orquestra o planejamento de produção da Latinhas LLC, combinando uma API Express + Prisma documentada em OpenAPI com uma interface Next.js responsiva pronta para uso corporativo.",
    highlights: [
      "Backend modular em Express 4 + Prisma 5, validações centralizadas, logging estruturado e OpenAPI pública para squads parceiros.",
      "CRUD completo de demandas e SKUs com validações, paginação e exclusão em cascata.",
      "Frontend em Next.js 14 com React Hook Form, TanStack Query e dark mode nativo.",
      "Integração containerizada com Docker e pipeline pronto para múltiplos ambientes.",
    ],
    techStack: [
      { label: "Next.js 14", Icon: SiNextdotjs },
      { label: "React Query", Icon: SiReactquery },
      { label: "React Hook Form", Icon: SiReacthookform },
      { label: "Express 4", Icon: SiExpress },
      { label: "Prisma 5", Icon: SiPrisma },
      { label: "SQLite", Icon: SiSqlite },
      { label: "Docker", Icon: SiDocker },
    ],
    liveUrl: "https://todomanager-frontend-ed80ca3b976d.herokuapp.com/demand",
    repoUrl: "https://github.com/JPMworkPROG/TodoManager",
    imageSrc: "/projects/todoManager/front.gif",
    imageAlt: "Demonstração animada do TodoManager exibindo o fluxo de demandas",
    docsUrl: "https://todomanager-backend-f0230eb77fe3.herokuapp.com/docs/",
  },
  {
    title: "Restora — Landing Page",
    description:
      "Landing page da marca de cosmeticos naturais em construção, desenvolvida com foco em apresentação elegante e experiência do usuário otimizada.",
    highlights: [
      "Design moderno e responsivo focado na identidade visual da marca de cosméticos naturais.",
      "Desenvolvido com Next.js 15 aproveitando as últimas features do framework.",
      "Interface otimizada para conversão e apresentação dos produtos e valores da marca.",
    ],
    techStack: [
      { label: "Next.js 15", Icon: SiNextdotjs },
    ],
    liveUrl: "https://www.restoracosmeticos.com.br",
    repoUrl: "https://github.com/JPMworkPROG/restora.cosmetics",
    imageSrc: "/projects/restora/front.gif",
    imageAlt: "Demonstração animada da landing page Restora exibindo a identidade visual da marca de cosméticos naturais",
  },
];

