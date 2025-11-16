import type { ContactInfoItem as ContactInfoItemType } from "../data";

interface ContactInfoItemProps {
  item: ContactInfoItemType;
}

export function ContactInfoItem({ item }: ContactInfoItemProps) {
  const Icon = item.icon;
  const content = item.href ? (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {item.value}
    </a>
  ) : (
    <p className="text-muted-foreground">{item.value}</p>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-primary/10 p-3">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-medium">{item.label}</p>
        {content}
      </div>
    </div>
  );
}

