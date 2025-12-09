import type { ComponentType } from "react";
import { FileText, GraduationCap } from "lucide-react";

export interface FormationHeader {
  label: string;
  title: string;
  description: string;
}

export const getFormationHeader = (t: (key: string) => string): FormationHeader => ({
  label: t('formation.header.label'),
  title: t('formation.header.title'),
  description: t('formation.header.description'),
});

export interface Document {
  name: string;
  file: string;
  type: string;
  icon: ComponentType<{ className?: string }>;
}

export interface Formation {
  title: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  documents: Document[];
}

export const getFormations = (t: (key: string) => string): Formation[] => [
  {
    title: t('formation.computerScience.title'),
    degree: t('formation.computerScience.degree'),
    institution: t('formation.computerScience.institution'),
    startDate: t('formation.computerScience.startDate'),
    endDate: t('formation.computerScience.endDate'),
    description: t('formation.computerScience.description'),
    documents: [
      {
        name: t('formation.computerScience.documents.diploma.name'),
        file: t('formation.computerScience.documents.diploma.file'),
        type: "pdf",
        icon: GraduationCap,
      },
      {
        name: t('formation.computerScience.documents.transcript.name'),
        file: t('formation.computerScience.documents.transcript.file'),
        type: "pdf",
        icon: FileText,
      },
    ],
  },
];

