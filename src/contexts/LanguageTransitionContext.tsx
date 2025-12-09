import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageTransitionContextType {
  isTransitioning: boolean;
  justTransitioned: boolean;
  changeLanguage: (newLanguage: string) => Promise<void>;
  currentLanguage: string;
}

const LanguageTransitionContext = createContext<LanguageTransitionContextType | undefined>(undefined);

export function LanguageTransitionProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [justTransitioned, setJustTransitioned] = useState(false);

  useEffect(() => {
    if (justTransitioned) {
      const timer = setTimeout(() => setJustTransitioned(false), 300);
      return () => clearTimeout(timer);
    }
  }, [justTransitioned]);

  const changeLanguage = useCallback(
    async (newLanguage: string) => {
      if (isTransitioning || i18n.language === newLanguage) {
        return;
      }

      setIsTransitioning(true);
      setJustTransitioned(false);

      // Aguarda a animação de fade out (200ms)
      await new Promise((resolve) => setTimeout(resolve, 200));

      // Muda o idioma
      await i18n.changeLanguage(newLanguage);

      // Aguarda um pequeno delay para garantir que o conteúdo foi atualizado
      await new Promise((resolve) => setTimeout(resolve, 50));

      setIsTransitioning(false);
      setJustTransitioned(true);
    },
    [i18n, isTransitioning]
  );

  return (
    <LanguageTransitionContext.Provider
      value={{
        isTransitioning,
        justTransitioned,
        changeLanguage,
        currentLanguage: i18n.language,
      }}
    >
      {children}
    </LanguageTransitionContext.Provider>
  );
}

export function useLanguageTransition() {
  const context = useContext(LanguageTransitionContext);
  if (context === undefined) {
    throw new Error('useLanguageTransition must be used within a LanguageTransitionProvider');
  }
  return context;
}

