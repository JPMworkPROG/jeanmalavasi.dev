import { useTranslation } from "react-i18next";
import { FormationHeader } from "./components/FormationHeader";
import { FormationCard } from "./components/FormationCard";
import { getFormations, getFormationHeader } from "./data";

export default function Formation() {
   const { t, i18n } = useTranslation();

   return (
      <section className="container mx-auto px-6 py-16 space-y-10" key={i18n.language}>
         <FormationHeader header={getFormationHeader(t)} />

         <div className="grid gap-8">
            {getFormations(t).map((formation, index) => (
               <FormationCard key={formation.title} formation={formation} index={index} />
            ))}
         </div>
      </section>
   );
}
