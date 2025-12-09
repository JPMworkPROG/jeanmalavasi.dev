import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Document } from "../data";
import { handleDownload, handleView } from "../../../lib/utils";

interface DocumentCardProps {
   document: Document;
   animationDelay: string;
}

export function DocumentCard({ document, animationDelay }: DocumentCardProps) {
   const { t } = useTranslation();
   const Icon = document.icon;

   return (
      <Card
         className="border-border/60 bg-muted/20 p-6 space-y-4 transition-all duration-300 hover:border-primary/50 hover:bg-muted/40"
         style={{ animationDelay }}
      >
         <div className="flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3">
               <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-2">
               <h3 className="font-semibold">{document.name}</h3>
               <p className="text-sm text-muted-foreground">{t('formation.labels.pdfDocument')}</p>
            </div>
         </div>
         <div className="flex flex-wrap gap-2">
            <Button
               onClick={() => handleView(document.file)}
               className="flex-1 sm:flex-initial bg-primary hover:bg-primary/90 cursor-pointer"
            >
               <FileText className="h-4 w-4 mr-2" />
               {t('formation.labels.view')}
            </Button>
            <Button
               onClick={() => handleDownload(document.file, document.name)}
               className="flex-1 sm:flex-initial bg-primary hover:bg-primary/90 cursor-pointer"
            >
               <Download className="h-4 w-4 mr-2" />
               {t('formation.labels.download')}
            </Button>
         </div>
      </Card>
   );
}

