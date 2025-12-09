import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { SupportedLanguage } from '@/i18n/config';
import { normalizeLanguage } from '@/i18n/config';

interface LanguageTransitionContextType {
  isTransitioning: boolean;
  justTransitioned: boolean;
  changeLanguage: (newLanguage: SupportedLanguage) => Promise<void>;
  currentLanguage: SupportedLanguage;
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

  const currentLanguage = useMemo(
    () => normalizeLanguage(i18n.language),
    [i18n.language]
  );

  const changeLanguage = useCallback(
    async (newLanguage: SupportedLanguage) => {
      if (isTransitioning || normalizeLanguage(i18n.language) === newLanguage) {
        return;
      }

      setIsTransitioning(true);
      setJustTransitioned(false);

      await new Promise((resolve) => setTimeout(resolve, 200));
      await i18n.changeLanguage(newLanguage);
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
        currentLanguage,
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
