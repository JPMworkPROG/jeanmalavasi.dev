import { FormationHeader } from "./components/FormationHeader";
import { FormationCard } from "./components/FormationCard";
import { formations, formationHeader } from "./data";

export default function Formation() {
   return (
      <section className="container mx-auto px-6 py-16 space-y-10">
         <FormationHeader header={formationHeader} />

         <div className="grid gap-8">
            {formations.map((formation, index) => (
               <FormationCard key={formation.title} formation={formation} index={index} />
            ))}
         </div>
      </section>
   );
}
