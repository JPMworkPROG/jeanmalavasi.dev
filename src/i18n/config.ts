import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslations from './locales/pt/translation.json';
import enTranslations from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng: string) => {
        if (lng.startsWith('en')) {
          return 'en';
        }
        if (lng.startsWith('pt')) {
          return 'pt';
        }
        return 'pt';
      },
    },
  });

export default i18n;

