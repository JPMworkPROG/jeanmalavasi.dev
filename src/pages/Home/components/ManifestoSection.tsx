import { Card } from "@/components/ui/card";
import type { ManifestoData } from "../data";
import { getAnimationDelay, ANIMATION_DELAYS } from "../../../lib/utils";

interface ManifestoSectionProps {
  manifestoData: ManifestoData;
  pillars: string[];
}

export function ManifestoSection({ manifestoData, pillars }: ManifestoSectionProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start opacity-0 animate-fade-in-up-scroll animation-delay-500">
      <div className="space-y-5 opacity-0 animate-slide-in-left animation-delay-700">
        <p className="text-sm font-semibold tracking-[0.3em] text-primary">{manifestoData.label}</p>
        <h2 className="text-3xl font-semibold">{manifestoData.title}</h2>
        <p className="text-muted-foreground text-lg">
          {manifestoData.description}
        </p>
        <ul className="space-y-3 text-muted-foreground">
          {pillars.map((pillar, index) => (
            <li
              key={index}
              className="flex gap-3 opacity-0 animate-slide-in-left"
              style={{ animationDelay: getAnimationDelay(ANIMATION_DELAYS.BASE, index) }}
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              <span>{pillar}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="opacity-0 animate-slide-in-right animation-delay-800">
        <Card className="space-y-4 border-primary/30 bg-primary/5 p-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground">{manifestoData.collaborationCard.label}</p>
          <div className="space-y-3 text-muted-foreground">
            {manifestoData.collaborationCard.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/80">{manifestoData.collaborationCard.signature}</p>
        </Card>
      </div>
    </div>
  );
}

