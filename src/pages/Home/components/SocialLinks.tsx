import type { SocialLink } from "../data";

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-3">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

