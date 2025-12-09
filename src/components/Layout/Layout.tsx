import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { DesktopNavigation as HeaderDesktopNavigation } from "@/components/header/DesktopNavigation";
import { MobileNavigation as HeaderMobileNavigation } from "@/components/header/MobileNavigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useLanguageTransition } from "@/contexts/LanguageTransitionContext";
import type { NavigationItem } from "@/components/header/types";
import "./Layout.css";

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

   const mainClassName = isTransitioning 
      ? 'language-transitioning' 
      : justTransitioned 
      ? 'language-transitioned' 
      : '';

   return (
      <div className={`min-h-screen bg-background language-transition ${isTransitioning ? 'transitioning' : ''}`}>
         <header className="border-b border-border backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-6">
               <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0">
                  <Link to="/" className="text-2xl font-bold font-mono">
                     JeanMalavasi<span className="text-primary">.dev</span>
                  </Link>
                  <div className="flex items-center gap-4">
                     <HeaderDesktopNavigation navigation={navigation} currentPath={location.pathname} />
                     <div className="hidden md:block">
                        <LanguageSwitcher />
                     </div>
                  </div>
                  <div className="flex items-center gap-4 md:hidden">
                     <LanguageSwitcher />
                     <HeaderMobileNavigation navigation={navigation} currentPath={location.pathname} />
                  </div>
               </div>
            </nav>
         </header>
         <main className={mainClassName}>{children}</main>
      </div>
   );
}
