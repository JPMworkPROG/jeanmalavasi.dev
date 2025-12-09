import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import type { ResumeHeader as ResumeHeaderType } from "../data";

interface ResumeHeaderProps {
  header: ResumeHeaderType;
}

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/resume/JeanMalavasiCurriculo.pdf";
  link.download = "JeanMalavasiCurriculo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function ResumeHeader({ header }: ResumeHeaderProps) {
  const { t } = useTranslation();

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
        <Button
          onClick={handleDownload}
          className="mt-2 bg-primary hover:bg-primary/90 opacity-0 animate-fade-in animation-delay-400 cursor-pointer"
        >
          <Download className="mr-2 h-4 w-4" />
          {t('resume.header.downloadButton')}
        </Button>
      </div>
    </header>
  );
}

