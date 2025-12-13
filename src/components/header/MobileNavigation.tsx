import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import "./header.css";
import type { NavigationItem } from "./types";

type MobileNavigationProps = {
   navigation: NavigationItem[];
   currentPath: string;
};

export function MobileNavigation({ navigation, currentPath }: MobileNavigationProps) {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      setIsOpen(false);
   }, [currentPath]);

   return (
      <>
         <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden rounded-md border border-border p-2 transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setIsOpen((prev) => !prev)}
         >
            <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
            <div className="flex flex-col gap-1.5">
               <span
                  className={cn(
                     "block h-0.5 w-6 rounded-full bg-foreground transition-transform",
                     isOpen && "translate-y-2 rotate-45"
                  )}
               />
               <span
                  className={cn(
                     "block h-0.5 w-6 rounded-full bg-foreground transition-opacity",
                     isOpen && "opacity-0"
                  )}
               />
               <span
                  className={cn(
                     "block h-0.5 w-6 rounded-full bg-foreground transition-transform",
                     isOpen && "-translate-y-2 -rotate-45"
                  )}
               />
            </div>
         </button>
         <div
            className={cn(
               "absolute left-0 right-0 top-full md:hidden flex flex-col gap-4 overflow-hidden bg-background border-b border-border px-6 transition-[max-height,opacity,padding] duration-300 z-40",
               isOpen
                  ? "max-h-96 opacity-100 py-4"
                  : "pointer-events-none max-h-0 opacity-0 py-0"
            )}
            aria-hidden={!isOpen}
         >
            {navigation.map((item) => (
               <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                     "text-lg font-medium transition-colors hover:text-primary",
                     currentPath === item.href
                        ? "text-primary border-b border-primary pb-1"
                        : "text-muted-foreground"
                  )}
               >
                  {item.name}
               </Link>
            ))}
         </div>
      </>
   );
}

