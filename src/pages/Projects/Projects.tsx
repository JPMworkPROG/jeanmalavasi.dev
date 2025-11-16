import { ProjectsHeader } from "./components/ProjectsHeader";
import { ProjectCard } from "./components/ProjectCard";
import { projects, projectsHeader } from "./data";

export default function Projects() {
  return (
    <section className="container mx-auto px-6 py-16 space-y-10">
      <ProjectsHeader header={projectsHeader} />

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
