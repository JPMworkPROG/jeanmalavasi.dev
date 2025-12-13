import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { DesktopNavigation as HeaderDesktopNavigation } from "@/components/header/DesktopNavigation";
import { MobileNavigation as HeaderMobileNavigation } from "@/components/header/MobileNavigation";
import { LanguageSwitcher } from "@/components/header/LanguageSwitcher";
import { useLanguageTransition } from "@/contexts/LanguageTransitionContext";
import type { NavigationItem } from "@/components/header/types";

export default function Layout({ children }: { children: ReactNode }) {
   const location = useLocation();
   const { t } = useTranslation();
   const { isTransitioning, justTransitioned } = useLanguageTransition();

   const navigation: NavigationItem[] = [
      { name: t('nav.home'), href: "/" },
      { name: t('nav.resume'), href: "/resume" },
      { name: t('nav.formation'), href: "/formation" },
      { name: t('nav.projects'), href: "/projects" },
      { name: t('nav.contact'), href: "/contacts" },
   ];

   const languageTransition = isTransitioning
      ? 'language-transitioning'
      : justTransitioned
         ? 'language-transitioned'
         : '';

   return (
      <div className={`min-h-screen bg-background language-transition ${isTransitioning ? 'transitioning' : ''}`}>
         <header className="border-b border-border backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-6 relative">
               <div className="flex items-center justify-between gap-4">
                  <Link to="/" className="text-xl md:text-2xl font-bold font-mono shrink-0 min-w-0">
                     JeanMalavasi<span className="text-primary">.dev</span>
                  </Link>
                  <div className="flex items-center gap-2 md:gap-4 shrink-0">
                     <HeaderDesktopNavigation navigation={navigation} currentPath={location.pathname} />
                     <div className="hidden md:block">
                        <LanguageSwitcher />
                     </div>
                     <div className="flex items-center gap-2 md:hidden">
                        <LanguageSwitcher />
                        <HeaderMobileNavigation navigation={navigation} currentPath={location.pathname} />
                     </div>
                  </div>
               </div>
            </nav>
         </header>
         <main className={languageTransition}>{children}</main>
      </div>
   );
}
