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

export const getHeroData = (t: (key: string) => string): HeroData => ({
  subtitle: t('home.hero.subtitle'),
  titlePrefix: t('home.hero.titlePrefix'),
  name: t('home.hero.name'),
  description: t('home.hero.description'),
  buttonText: t('home.hero.buttonText'),
  buttonLink: t('home.hero.buttonLink'),
  profileImage: {
    src: "/homeProfile.svg",
    alt: t('home.hero.profileImageAlt'),
  },
});

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

export const getManifestoData = (t: (key: string) => string): ManifestoData => ({
  label: t('home.manifesto.label'),
  title: t('home.manifesto.title'),
  description: t('home.manifesto.description'),
  collaborationCard: {
    label: t('home.manifesto.collaborationCard.label'),
    paragraphs: [
      t('home.manifesto.collaborationCard.paragraphs.0'),
      t('home.manifesto.collaborationCard.paragraphs.1'),
    ],
    signature: t('home.manifesto.collaborationCard.signature'),
  },
});

export const getManifestoPillars = (t: (key: string) => string): string[] => [
  t('home.manifesto.pillars.0'),
  t('home.manifesto.pillars.1'),
  t('home.manifesto.pillars.2'),
];

export interface StackMindsetItem {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}

export const getStackMindset = (t: (key: string) => string): StackMindsetItem[] => [
  {
    title: t('home.stackMindset.endToEnd.title'),
    description: t('home.stackMindset.endToEnd.description'),
    Icon: Compass,
  },
  {
    title: t('home.stackMindset.frontend.title'),
    description: t('home.stackMindset.frontend.description'),
    Icon: Layers,
  },
  {
    title: t('home.stackMindset.backend.title'),
    description: t('home.stackMindset.backend.description'),
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

export const getSkills = (t: (key: string) => string): Skills => ({
  languages: [
    { name: t('home.skills.languages.0.name'), level: t('home.skills.languages.0.level') },
    { name: t('home.skills.languages.1.name'), level: t('home.skills.languages.1.level') },
    { name: t('home.skills.languages.2.name'), level: t('home.skills.languages.2.level') }
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
});

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

