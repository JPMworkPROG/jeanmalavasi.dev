import { ResumeHeader } from "./components/ResumeHeader";
import { ExperienceCard } from "./components/ExperienceCard";
import { experience, resumeHeader, skillIcons } from "./data";

export default function Resume() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-10">
      <ResumeHeader header={resumeHeader} />

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.company} experience={exp} index={index} skillIcons={skillIcons} />
        ))}
      </div>
    </section>
  );
}
