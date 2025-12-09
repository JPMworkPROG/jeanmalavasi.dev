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

export const getResumeHeader = (t: (key: string) => string): ResumeHeader => ({
  label: t('resume.header.label'),
  title: t('resume.header.title'),
  description: t('resume.header.description'),
});

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

export const getExperience = (t: (key: string) => string): Experience[] => [
  {
    company: t('resume.experience.senseup.company'),
    position: t('resume.experience.senseup.position'),
    location: t('resume.experience.senseup.location'),
    type: t('resume.experience.senseup.type'),
    startDate: t('resume.experience.senseup.startDate'),
    endDate: t('resume.experience.senseup.endDate'),
    duration: t('resume.experience.senseup.duration'),
    achievements: [
      t('resume.experience.senseup.achievements.0'),
      t('resume.experience.senseup.achievements.1'),
      t('resume.experience.senseup.achievements.2'),
      t('resume.experience.senseup.achievements.3'),
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

