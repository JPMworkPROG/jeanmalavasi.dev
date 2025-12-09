import { Button } from '@/components/ui/button';
import { useLanguageTransition } from '@/contexts/LanguageTransitionContext';

export function LanguageSwitcher() {
   const { currentLanguage, changeLanguage, isTransitioning } = useLanguageTransition();

   const isPortuguese = currentLanguage === 'pt' || currentLanguage.startsWith('pt');

   const toggleLanguage = () => {
      const newLanguage = isPortuguese ? 'en' : 'pt';
      changeLanguage(newLanguage);
   };

   return (
      <Button
         variant="default"
         size="sm"
         onClick={toggleLanguage}
         disabled={isTransitioning}
         aria-label={isPortuguese ? 'Switch to English' : 'Mudar para Português'}
         className="p-2 cursor-pointer bg-transparent hover:bg-primary/30"
      >
         <img
            src={isPortuguese ? '/flags/br.png' : '/flags/usa.png'}
            alt={isPortuguese ? 'Português' : 'English'}
            className="w-6 h-4 object-contain antialiased"
            style={{ imageRendering: 'auto' }}
         />
      </Button>
   );
}

