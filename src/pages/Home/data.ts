import type { ComponentType } from "react";
import { Compass, Gauge, Layers, GitBranch, Shapes, Shield, Building, TestTube, Workflow, Github, Linkedin } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiDotnet,
  SiOpenjdk,
  SiDocker,
  SiReact,
  SiSpring,
  SiIcloud,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiPrisma,
  SiTypeorm,
  SiMongodb,
  SiOpenai,
  SiPostgresql
} from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { TbBrandCSharp } from "react-icons/tb";

export interface HeroData {
  subtitle: string;
  titlePrefix: string;
  name: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  profileImage: {
    src: string;
    alt: string;
  };
}

export const heroData: HeroData = {
  subtitle: "Desenvolvedor Full Stack",
  titlePrefix: "Olá, sou",
  name: "Jean Malavasi",
  description:
    "Especialista na criação de experiências digitais elegantes e na integração de sistemas, conectando APIs, serviços e dados com tecnologias modernas da web.",
  buttonText: "Meus Projetos",
  buttonLink: "/projects",
  profileImage: {
    src: "/homeProfile.svg",
    alt: "Jean Malavasi profile",
  },
};

export interface ManifestoData {
  label: string;
  title: string;
  description: string;
  collaborationCard: {
    label: string;
    paragraphs: string[];
    signature: string;
  };
}

export const manifestoData: ManifestoData = {
  label: "Manifesto",
  title: "Construo produtos com intenção e responsabilidade",
  description:
    "Cada entrega precisa gerar aprendizado e impacto mensurável. Acompanho desde a concepção até a manutenção, integrando sistemas e domínios distintos sem perder de vista a qualidade e a confiabilidade.",
  collaborationCard: {
    label: "Como colaboro",
    paragraphs: [
      "Atuo tanto no frontend quanto no backend, criando interfaces que conversam com APIs. Participo de discovery, facilito handoffs, dessa maneira facilitando do desenvolvimento a entrega do sistema.",
      "Valorizo comunicação clara e autonomia: comunico status com clareza, antecipo gargalos e crio documentação viva para onboardings mais rápidos.",
    ],
    signature: "— Jean Malavasi",
  },
};

export const manifestoPillars = [
  "Trabalho guiado por métricas de produto e impacto de negócio.",
  "Parceria próxima com design e stakeholders para reduzir retrabalho.",
  "Coleta de requisitos → desenvolvimento → testes → implantação → monitoramento → feedback loops curtos.",
] as const;

export interface StackMindsetItem {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}

export const stackMindset: StackMindsetItem[] = [
  {
    title: "Entrega Ponta-a-Ponta",
    description: "Planejo, desenvolvo e acompanho releases completos, do levantamento de requisitos ao go-live monitorado.",
    Icon: Compass,
  },
  {
    title: "Frontend focado na experiência do usuário",
    description:
      "Interfaces acessíveis e performáticas, com animações suaves e componentização escalável.",
    Icon: Layers,
  },
  {
    title: "Backend escalável e observável",
    description: "APIs tipadas, monitoradas, com logs e métricas acionáveis, para garantir a qualidade e o desempenho do sistema.",
    Icon: Gauge,
  },
];

export interface Language {
  name: string;
  level: string;
}

export interface SkillItem {
  name: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface Skills {
  languages: Language[];
  technologies: SkillItem[];
  frameworks: SkillItem[];
  principles: SkillItem[];
}

export const skills: Skills = {
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
    { name: "Espanhol", level: "Intermediário" }
  ],
  technologies: [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "ReactJS", Icon: SiReact },
    { name: "Java", Icon: SiOpenjdk },
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "TailwindCSS", Icon: SiTailwindcss },
    { name: "Shadcn UI", Icon: SiShadcnui },
    { name: "Csharp", Icon: TbBrandCSharp },
    { name: "Microsoft SQL Server", Icon: PiFileSql },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Microsoft Azure", Icon: SiIcloud },
    { name: "Docker", Icon: SiDocker },
    { name: "OpenAPI", Icon: SiOpenai },
  ],
  frameworks: [
    { name: "NestJS", Icon: SiNestjs },
    { name: ".NET", Icon: SiDotnet },
    { name: "Spring Boot", Icon: SiSpring },
    { name: "NextJs", Icon: SiNextdotjs },
    { name: "Prisma", Icon: SiPrisma },
    { name: "TypeORM", Icon: SiTypeorm },
  ],
  principles: [
    { name: "DDD", Icon: Layers },
    { name: "Git Flow", Icon: GitBranch },
    { name: "Design Patterns", Icon: Shapes },
    { name: "SOLID", Icon: Shield },
    { name: "Clean Architecture", Icon: Building },
    { name: "TDD", Icon: TestTube },
    { name: "CI/CD", Icon: Workflow },
  ],
};

export interface SocialLink {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/JPMworkPROG",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/jeanpintomalavasi/",
    label: "LinkedIn",
    Icon: Linkedin,
  }
];

