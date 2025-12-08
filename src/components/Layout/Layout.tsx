import type { ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { DesktopNavigation as HeaderDesktopNavigation } from "@/components/header/DesktopNavigation";
import { MobileNavigation as HeaderMobileNavigation } from "@/components/header/MobileNavigation";
import type { NavigationItem } from "@/components/header/types";
import "./Layout.css";

const navigation: NavigationItem[] = [
   { name: "Inicio", href: "/" },
   { name: "Curriculo", href: "/resume" },
   { name: "Formação", href: "/formation" },
   { name: "Projetos", href: "/projects" },
   { name: "Contato", href: "/contacts" },
];

export default function Layout({ children }: { children: ReactNode }) {
   const location = useLocation();

   return (
      <div className="min-h-screen bg-background">
         <header className="border-b border-border backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-6">
               <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0">
                  <Link to="/" className="text-2xl font-bold font-mono">
                     JeanMalavasi<span className="text-primary">.dev</span>
                  </Link>
                  <HeaderDesktopNavigation navigation={navigation} currentPath={location.pathname} />
                  <HeaderMobileNavigation navigation={navigation} currentPath={location.pathname} />
               </div>
            </nav>
         </header>
         <main>{children}</main>
      </div>
   );
}
