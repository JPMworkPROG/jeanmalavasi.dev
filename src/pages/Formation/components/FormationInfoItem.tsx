import type { ComponentType } from "react";

interface FormationInfoItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export function FormationInfoItem({ icon: Icon, label, value }: FormationInfoItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-primary/10 p-2 mt-0.5">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-1">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

