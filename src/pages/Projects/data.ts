import type { ComponentType } from "react";
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
      "Frontend em Next.js 14 com React Hook Form, TanStack Query e dark mode nativo.",
      "Backend modular em Express 4 + Prisma 5, validações centralizadas, logging estruturado e OpenAPI pública para squads parceiros.",
      "CRUD completo de demandas e SKUs com validações, paginação e exclusão em cascata.",
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
      { label: "Shadcn UI", Icon: SiShadcnui },
      { label: "TailwindCSS", Icon: SiTailwindcss },
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
      "Landing page da marca de cosméticos desenvolvida com foco em experiência do usuário, identidade visual consistente e alta performance.",
    highlights: [
      "Desenvolvida com Next.js 15, aproveitando as features mais recentes do framework para baixas latências de Time to First Byte (TTFB).",
      "Design moderno e responsivo, resultando em uma navegação mais fluida e otimizada.",
      "Interface otimizada para conversão, buscando otimizar o tempo de permanência e reduzindo a taxa de rejeição.",
      "Arquitetura totalmente responsiva, garantindo carregamento abaixo de 1,2s em 98% das resoluções testadas."
    ],
    techStack: [
      { label: "Next.js 15", Icon: SiNextdotjs },
      { label: "TailwindCSS", Icon: SiTailwindcss },
      { label: "Shadcn UI", Icon: SiShadcnui },
    ],
    liveUrl: "https://www.restoracosmeticos.com.br",
    repoUrl: "https://github.com/JPMworkPROG/restora.cosmetics",
    imageSrc: "/projects/restora/front.gif",
    imageAlt: "Demonstração animada da landing page Restora exibindo a identidade visual da marca de cosméticos naturais",
  },
  {
    title: "GenericRestClient - Cliente HTTP REST genérico",
    description:
      "Cliente REST genérico para .NET 9.0 com suporte a autenticação, rate limiting e retry automático. Desenvolvido como solução para integração com APIs REST de forma resiliente e configurável.",
    highlights: [
      "Autenticação flexível com suporte a Bearer Token, OAuth2 (com refresh automático) e API Key via header ou query string.",
      "Rate limiting configurável com controle de requisições por minuto, fila automática e tratamento de limites excedidos.",
      "Retry automático inteligente para códigos 429 e 5xx, com suporte a header Retry-After e backoff exponencial ou linear configurável.",
      "Resiliência robusta usando Polly para tratamento automático de falhas transitórias (timeout, DNS, etc.) e operações HTTP completas (GET, POST, PUT, DELETE).",
    ],
    techStack: [
      { label: ".NET 9.0", Icon: SiDotnet },
      { label: "Polly", Icon: GrPowerCycle },
    ],
    liveUrl: "https://www.nuget.org/packages/GenericRestClient",
    repoUrl: "https://github.com/JPMworkPROG/GenericRestClient",
    imageSrc: "/projects/genericRestClient/logo.png",
    imageAlt: "Demonstração do GenericRestClient exibindo funcionalidades de autenticação, rate limiting e retry automático",
  },
];

