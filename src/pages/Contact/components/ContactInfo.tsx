import { Card } from "@/components/ui/card";
import { ContactInfoItem } from "./ContactInfoItem";
import type { ContactInfo as ContactInfoType } from "../data";

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

export function ContactInfo({ contactInfo }: ContactInfoProps) {
  return (
    <Card className="border-border/60 bg-card p-4 sm:p-8 space-y-6">
      <div className="space-y-2 opacity-0 animate-fade-in animation-delay-800">
        <h2 className="text-2xl font-semibold">{contactInfo.title}</h2>
        <p className="text-muted-foreground">{contactInfo.description}</p>
      </div>

      <div className="space-y-4 opacity-0 animate-fade-in animation-delay-900">
        {contactInfo.items.map((item) => (
          <ContactInfoItem key={item.label} item={item} />
        ))}
      </div>
    </Card>
  );
}

