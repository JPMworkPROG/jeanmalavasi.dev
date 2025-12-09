import type { FormationHeader as FormationHeaderType } from "../data";

interface FormationHeaderProps {
  header: FormationHeaderType;
}

export function FormationHeader({ header }: FormationHeaderProps) {
  return (
    <header className="space-y-3 opacity-0 animate-fade-in-up">
      <div className="space-y-3">
        <p className="text-muted-foreground text-sm tracking-widest opacity-0 animate-fade-in animation-delay-200">
          {header.label}
        </p>
        <h1 className="text-4xl font-bold opacity-0 animate-fade-in-up animation-delay-300">
          {header.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl opacity-0 animate-fade-in animation-delay-500">
          {header.description}
        </p>
      </div>
    </header>
  );
}

