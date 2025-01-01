import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Projects = () => {
  const { t } = useContext(TranslationContext);

  const projects = [
    { name: "Project 1", description: "Description 1", link: "#" },
    { name: "Project 2", description: "Description 2", link: "#" },
    { name: "Project 3", description: "Description 3", link: "#" },
  ];

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold">{t("projects_title")}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm">
            <h4 className="text-xl font-bold">{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500">
              {t("view_project")}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
