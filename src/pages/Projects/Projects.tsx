import { useSearch } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ProjectsHeader } from "./components/ProjectsHeader";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectsPagination } from "./components/ProjectsPagination";
import { getProjects, getProjectsHeader } from "./data";
import { PAGINATION_CONFIG, getPaginatedItems } from "@/lib/pagination";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const search = useSearch({ from: "/projects" });
  const currentPage = search.page ?? PAGINATION_CONFIG.DEFAULT_PAGE;
  const projects = getProjects(t);

  const pagination = getPaginatedItems(
    projects,
    currentPage,
    PAGINATION_CONFIG.ITEMS_PER_PAGE
  );

  return (
    <section className="container mx-auto px-6 py-16 flex flex-col" key={i18n.language}>
      <ProjectsHeader header={getProjectsHeader(t)} />

      <div className="flex-1 grid gap-8 mb-10 min-h-160 mt-6">
        {pagination.items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={pagination.startIndex + index}
          />
        ))}
      </div>

      <div className="mt-auto pt-8">
        <ProjectsPagination
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          itemsPerPage={PAGINATION_CONFIG.ITEMS_PER_PAGE}
          totalItems={pagination.totalItems}
        />
      </div>
    </section>
  );
}
