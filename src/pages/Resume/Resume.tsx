import { useTranslation } from "react-i18next";
import { ResumeHeader } from "./components/ResumeHeader";
import { ExperienceCard } from "./components/ExperienceCard";
import { getExperience, getResumeHeader, skillIcons } from "./data";

export default function Resume() {
  const { t, i18n } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-16 space-y-10" key={i18n.language}>
      <ResumeHeader header={getResumeHeader(t)} />

      <div className="space-y-8">
        {getExperience(t).map((exp, index) => (
          <ExperienceCard key={exp.company} experience={exp} index={index} skillIcons={skillIcons} />
        ))}
      </div>
    </section>
  );
}
