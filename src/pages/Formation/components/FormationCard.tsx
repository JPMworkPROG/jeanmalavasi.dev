import { Card } from "@/components/ui/card";
import { Calendar, Building2 } from "lucide-react";
import { FormationInfoItem } from "./FormationInfoItem";
import { DocumentCard } from "./DocumentCard";
import type { Formation } from "../data";
import { getAnimationDelay, ANIMATION_DELAYS } from "@/lib/utils";

interface FormationCardProps {
   formation: Formation;
   index: number;
}

export function FormationCard({ formation, index }: FormationCardProps) {
   const baseDelay = ANIMATION_DELAYS.LONG;
   const increment = ANIMATION_DELAYS.SHORT;
   const documentBaseDelay = 1.1;

   return (
      <div
         className="opacity-0 animate-fade-in-up-scroll"
         style={{ animationDelay: getAnimationDelay(baseDelay, index, increment) }}
      >
         <Card className="overflow-hidden border-border/60 bg-card transition-transform duration-300 hover:shadow-lg">
            <div className="space-y-6 p-6 lg:p-10">
               <div
                  className="space-y-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.2, index, increment) }}
               >
                  <div className="space-y-2">
                     <h2 className="text-3xl font-semibold">{formation.title}</h2>
                     <p className="text-lg text-primary font-medium">{formation.degree}</p>
                  </div>
                  <p className="text-muted-foreground">{formation.description}</p>
               </div>

               <div
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.3, index, increment) }}
               >
                  <FormationInfoItem icon={Building2} label="Instituição" value={formation.institution} />
                  <FormationInfoItem
                     icon={Calendar}
                     label="Período"
                     value={`${formation.startDate} - ${formation.endDate}`}
                  />
               </div>

               <div
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: getAnimationDelay(baseDelay + 0.4, index, increment) }}
               >
                  <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground mb-4">
                     Documentos
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                     {formation.documents.map((doc, docIndex) => (
                        <DocumentCard
                           key={doc.name}
                           document={doc}
                           animationDelay={`${documentBaseDelay + index * increment + docIndex * 0.1}s`}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </Card>
      </div>
   );
}

