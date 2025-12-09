import type { TFunction } from "i18next";

export interface NotFoundData {
  title: string;
  heading: string;
  description: string;
  backToHome: string;
  viewProjects: string;
}

export function getNotFoundData(t: TFunction): NotFoundData {
  return {
    title: t('notFound.title'),
    heading: t('notFound.heading'),
    description: t('notFound.description'),
    backToHome: t('notFound.backToHome'),
    viewProjects: t('notFound.viewProjects'),
  };
}

