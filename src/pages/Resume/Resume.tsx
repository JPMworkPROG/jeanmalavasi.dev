import { ResumeHeader } from "./components/ResumeHeader";
import { ExperienceCard } from "./components/ExperienceCard";
import { experience, resumeHeader, skillIcons } from "./data";

export default function Resume() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-10">
      <ResumeHeader header={resumeHeader} />

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold opacity-0 animate-fade-in-up animation-delay-600">Experiência</h2>
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.company} experience={exp} index={index} skillIcons={skillIcons} />
        ))}
      </div>
    </section>
  );
}
