import { Card } from "@/components/ui/card";
import type { StackMindsetItem } from "../data";
import { getAnimationDelay, ANIMATION_DELAYS } from "../../../lib/utils";

interface StackMindsetSectionProps {
  items: StackMindsetItem[];
}

export function StackMindsetSection({ items }: StackMindsetSectionProps) {
  return (
    <div className="space-y-6 opacity-0 animate-fade-in-up-scroll animation-delay-500">
      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {items.map(({ title, description, Icon }, index) => (
          <div
            key={title}
            className="opacity-0 animate-fade-in-up-scroll transition-transform duration-300 hover:-translate-y-2 h-full"
            style={{ animationDelay: getAnimationDelay(1.0, index, ANIMATION_DELAYS.BASE) }}
          >
            <Card className="p-8 space-y-4 border-border/60 bg-card/60 h-full flex flex-col">
              <Icon className="h-8 w-8 text-primary" aria-hidden />
              <p className="text-lg font-semibold">{title}</p>
              <p className="text-sm text-muted-foreground grow">{description}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

