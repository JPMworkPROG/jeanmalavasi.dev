import type { ComponentType } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiNestjs,
  SiReact,
  SiNodedotjs,
  SiSharp,
  SiGit,
  SiIcloud,
  SiDotnet,
  SiSpring,
  SiDocker,
} from "react-icons/si";

export interface ResumeHeader {
  label: string;
  title: string;
  description: string;
}

export const resumeHeader: ResumeHeader = {
  label: "Currículo Profissional",
  title: "Experiência e Habilidades",
  description: "",
};

export interface Experience {
  company: string;
  position: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: string;
  achievements: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    company: "SenseUp",
    position: "Desenvolvedor Fullstack",
    location: "Vitória, Espírito Santo, Brasil · Remota",
    type: "Tempo integral",
    startDate: "jul de 2022",
    endDate: "o momento",
    duration: "3 anos 5 meses",
    achievements: [
      "Projetou e implementou sistema de monitoramento IoT que processa dados de sensores e detecta anomalias, reduzindo falhas críticas em 75% e o tempo de resposta de manutenção em até 5 horas para 1 hora.",
      "Reestruturou arquitetura de banco de dados MSSQL, otimizando operações pesadas e reduzindo o tempo de execução de consultas complexas de 2 minutos e 10 segundos para 47 segundos.",
      "Desenvolveu e documentou APIs REST para integração de sistemas, processando mais de 2 milhões de registros por mês com segurança e confiabilidade.",
      "Implantou padrões de qualidade e CI/CD, reduzindo retrabalho de 12 para 4 ocorrências por sprint e aumentando a cadência de entrega.",
      "Desenvolveu integração entre sistemas legados de gestão de locais, máquinas e pontos de inspeção com sensores IoT, eliminando divergências de dados e garantindo sincronização em tempo real entre plataformas.",
    ],
    skills: ["Node.js", "TypeScript", "JavaScript", "React", "NestJS", "C#", ".NET", "Java", "Spring Boot", "Git", "Microsoft Azure", "Docker"],
  },
];

export type SkillIconsRecord = Record<string, ComponentType<{ className?: string }>>;

export const skillIcons: SkillIconsRecord = {
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "React": SiReact,
  "NestJS": SiNestjs,
  "C#": SiSharp,
  ".NET": SiDotnet,
  "Java": SiOpenjdk,
  "Git": SiGit,
  "Microsoft Azure": SiIcloud,
  "Spring Boot": SiSpring,
  "Docker": SiDocker,
};

