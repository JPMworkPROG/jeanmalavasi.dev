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
  SiNextdotjs,
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
    startDate: "jul de 2021",
    endDate: "o momento",
    duration: "4 anos 6 meses",
    achievements: [
      "Projetou e implementou um sistema de monitoramento de alarmes críticos em ambiente IoT, processando +500 mil eventos mensais, integrando regras de negócio e notificações automatizadas — reduzindo em 80% as falhas críticas não detectadas e diminuindo o tempo médio de resposta de 3–5 horas para ~20 minutos.",
      "Redesenhou a arquitetura do banco MSSQL para um modelo otimizado para dados hierárquicos e reestruturou o backend para operar sobre a nova estrutura, reduzindo o tempo médio de consultas complexas de 2m10s para 35s (redução de ~73%) e melhorando a performance de operações pesadas em até 4×.",
      "Desenvolveu e documentou integrações entre sistemas legados de gestão de locais, máquinas e pontos de inspeção e a plataforma IoT, criando APIs REST que processam +2 milhões de registros/mês. A solução eliminou divergências entre bases, garantiu sincronização em tempo real (<1s) e aumentou a confiabilidade operacional dos dados em >95%.",
      "Implementou dois pipelines críticos de telemetria, integrando Dynapredict e PI System, suportando +10 mil medições/hora, com mapeamento dinâmico de IDs, filtragem de duplicidades, formatação em lote e envio resiliente via APIs. A solução aumentou a taxa de entrega bem-sucedida para 99,8%, reduziu falhas de ingestão em >90% e habilitou monitoramento completo via Prometheus.",
    ],
    skills: ["Node.js", "TypeScript", "JavaScript", "ReactJs", "NextJs", "NestJS", "C#", ".NET", "Java", "Spring Boot", "Git", "Microsoft Azure", "Docker"],
  },
];

export type SkillIconsRecord = Record<string, ComponentType<{ className?: string }>>;

export const skillIcons: SkillIconsRecord = {
  "Node.js": SiNodedotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "ReactJs": SiReact,
  "NextJs": SiNextdotjs,
  "NestJS": SiNestjs,
  "C#": SiSharp,
  ".NET": SiDotnet,
  "Java": SiOpenjdk,
  "Git": SiGit,
  "Microsoft Azure": SiIcloud,
  "Spring Boot": SiSpring,
  "Docker": SiDocker,
};

