import type { ComponentType, CSSProperties, ReactElement } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
   icon?: ComponentType<{ className?: string }> | ((props: { className?: string }) => ReactElement);
   text: string;
   className?: string;
   iconClassName?: string;
   style?: CSSProperties;
}

export function Badge({ icon: Icon, text, className, iconClassName, style }: BadgeProps) {
   return (
      <span
         className={cn(
            "flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded bg-primary/10 text-white border border-primary/20",
            className
         )}
         style={style}
      >
         {Icon && <Icon className={cn("h-3.5 w-3.5 text-white", iconClassName)} />}
         {text}
      </span>
   );
}

