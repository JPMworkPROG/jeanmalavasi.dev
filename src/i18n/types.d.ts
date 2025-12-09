import 'i18next';

import ptTranslation from './locales/pt/translation.json';

type TranslationResources = typeof ptTranslation;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationResources;
    };
  }
}
