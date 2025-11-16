import { Badge } from "@/components/ui/badge";
import type { TechStackItem } from "../data";

interface TechStackListProps {
  techStack: TechStackItem[];
  baseDelay: number;
  projectIndex: number;
}

export function TechStackList({ techStack, baseDelay, projectIndex }: TechStackListProps) {
  return (
    <div className="opacity-0 animate-fade-in" style={{ animationDelay: `${baseDelay + projectIndex * 0.2}s` }}>
      <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">Stack principal</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {techStack.map(({ label, Icon }, index) => (
          <Badge
            key={label}
            icon={Icon}
            text={label}
            style={{ animationDelay: `${baseDelay + 0.1 + projectIndex * 0.2 + index * 0.05}s` }}
          />
        ))}
      </div>
    </div>
  );
}

