import type { ComponentType } from "react";

interface ExperienceInfoItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string | React.ReactNode;
  secondaryValue?: string;
}

export function ExperienceInfoItem({ icon: Icon, label, value, secondaryValue }: ExperienceInfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <div className="text-sm font-medium">{value}</div>
        {secondaryValue && (
          <p className="text-xs text-muted-foreground">{secondaryValue}</p>
        )}
      </div>
    </div>
  );
}

