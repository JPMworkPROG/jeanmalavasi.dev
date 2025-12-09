import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslations from './locales/pt/translation.json';
import enTranslations from './locales/en/translation.json';

export const resources = {
  pt: {
    translation: ptTranslations,
  },
  en: {
    translation: enTranslations,
  },
} as const;

export const DEFAULT_LANGUAGE = 'pt' as const;
export type SupportedLanguage = 'pt' | 'en';

export const normalizeLanguage = (lng: string): SupportedLanguage => {
  return lng?.toLowerCase().startsWith('en') ? 'en' : 'pt';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['pt', 'en'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: normalizeLanguage,
    },
  });

export default i18n;
