import type { ComponentType } from "react";
import { FileText, GraduationCap } from "lucide-react";

export interface FormationHeader {
  label: string;
  title: string;
  description: string;
}

export const formationHeader: FormationHeader = {
  label: "Formação Acadêmica",
  title: "Educação e Certificações",
  description: "Documentos oficiais da minha formação acadêmica e certificações profissionais.",
};

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

export const formations: Formation[] = [
  {
    title: "Ciência da Computação",
    degree: "Bacharelado",
    institution: "Universidade de Vila Velha - UVV",
    startDate: "Janeiro de 2019",
    endDate: "Janeiro de 2023",
    description: "Formação acadêmica em Ciência da Computação, com foco em desenvolvimento de software, algoritmos e estruturas de dados.",
    documents: [
      {
        name: "Diploma",
        file: "/formation/diploma.pdf",
        type: "pdf",
        icon: GraduationCap,
      },
      {
        name: "Histórico Escolar",
        file: "/formation/historicoFaculdade.pdf",
        type: "pdf",
        icon: FileText,
      },
    ],
  },
];

