import { Button } from '@/components/ui/button';
import { useLanguageTransition } from '@/contexts/LanguageTransitionContext';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/i18n/config';

export function LanguageSwitcher() {
   const { currentLanguage, changeLanguage, isTransitioning } = useLanguageTransition();
   const { t } = useTranslation();

   const isPortuguese = currentLanguage === 'pt';

   const toggleLanguage = () => {
      const newLanguage: SupportedLanguage = isPortuguese ? 'en' : 'pt';
      changeLanguage(newLanguage);
   };

   const ariaLabel = isPortuguese
      ? t('languageSwitcher.ariaLabel.switchToEnglish')
      : t('languageSwitcher.ariaLabel.switchToPortuguese');

   const flagAlt = isPortuguese
      ? t('languageSwitcher.flags.portugueseAlt')
      : t('languageSwitcher.flags.englishAlt');

   return (
      <Button
         variant="default"
         size="sm"
         onClick={toggleLanguage}
         disabled={isTransitioning}
         aria-label={ariaLabel}
         className="p-2 cursor-pointer bg-transparent hover:bg-primary/30"
      >
         <img
            src={isPortuguese ? '/flags/br.png' : '/flags/usa.png'}
            alt={flagAlt}
            className="w-6 h-4 object-contain antialiased"
            style={{ imageRendering: 'auto' }}
         />
      </Button>
   );
}
