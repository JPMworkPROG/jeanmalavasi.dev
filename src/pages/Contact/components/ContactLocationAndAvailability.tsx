import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { LocationAndAvailability as LocationAndAvailabilityType } from "../data";

interface LocationAndAvailabilityProps {
  locationAndAvailability: LocationAndAvailabilityType;
}

export function ContactLocationAndAvailability({ locationAndAvailability }: LocationAndAvailabilityProps) {
  const buttonClass = "transition-transform duration-300 hover:scale-105 active:scale-95";

  return (
    <Card className="border-border/60 bg-card p-4 sm:p-8 space-y-6 opacity-0 animate-fade-in animation-delay-1000">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{locationAndAvailability.title}</h2>
        <p className="text-muted-foreground">{locationAndAvailability.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {locationAndAvailability.items.map((item) => {
          const Icon = item.icon;

          if (item.href) {
            return (
              <Button key={item.label} variant="outline" asChild>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </a>
              </Button>
            );
          }

          return (
            <Button key={item.label} variant="outline" className={buttonClass}>
              <Icon className="mr-2 h-4 w-4" />
              <span className="flex flex-col items-start">
                <span>{item.label}</span>
                {item.value && <span className="text-xs text-muted-foreground">{item.value}</span>}
              </span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

