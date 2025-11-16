interface HighlightsListProps {
  highlights: string[];
  baseDelay: number;
  projectIndex: number;
}

export function HighlightsList({ highlights, baseDelay, projectIndex }: HighlightsListProps) {
  return (
    <ul className="space-y-3 text-sm text-muted-foreground">
      {highlights.map((highlight, index) => (
        <li
          key={highlight}
          className="flex items-start gap-3 opacity-0 animate-slide-in-left"
          style={{ animationDelay: `${baseDelay + projectIndex * 0.2 + index * 0.1}s` }}
        >
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}

