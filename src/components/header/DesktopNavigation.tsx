import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import "./header.css";
import type { NavigationItem } from "./types";

type DesktopNavigationProps = {
   navigation: NavigationItem[];
   currentPath: string;
};

export function DesktopNavigation({ navigation, currentPath }: DesktopNavigationProps) {
   return (
      <div className="hidden gap-8 md:flex">
         {navigation.map((item) => (
            <Link
               key={item.name}
               to={item.href}
               className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  currentPath === item.href
                     ? "text-primary border-b-2 border-primary pb-1"
                     : "text-muted-foreground"
               )}
            >
               {item.name}
            </Link>
         ))}
      </div>
   );
}

