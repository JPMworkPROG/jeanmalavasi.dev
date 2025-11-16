import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SocialLinks as SocialLinksType } from "../data";

interface SocialLinksProps {
  socialLinks: SocialLinksType;
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  const buttonClass = "transition-transform duration-300 hover:scale-105 active:scale-95";

  return (
    <Card className="border-border/60 bg-card p-8 space-y-6 opacity-0 animate-fade-in animation-delay-1000">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{socialLinks.title}</h2>
        <p className="text-muted-foreground">{socialLinks.description}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.links.map((link) => {
          const Icon = link.icon;

          if (link.href) {
            return (
              <Button key={link.label} variant="outline" asChild>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {link.label}
                </a>
              </Button>
            );
          }

          return (
            <Button key={link.label} variant="outline" className={buttonClass}>
              <Icon className="mr-2 h-4 w-4" />
              <span className="flex flex-col items-start">
                <span>{link.label}</span>
                {link.value && <span className="text-xs text-muted-foreground">{link.value}</span>}
              </span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
}

