import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Projects = () => {
  const { t } = useContext(TranslationContext);

  const projects = [
    {
      name: "Workintech",
      key: "workintech",
      technologies: ["react", "redux", "axios"],
      github: "https://github.com/rabiaakrc",
      live: "#",
      image: "src/images/workintech.png",
    },
    {
      name: "Random Jokes",
      key: "random_jokes",
      technologies: ["react", "redux", "axios"],
      github: "https://github.com/rabiaakrc",
      live: "#",
      image: "src/images/random.png",
    },
    {
      name: "Journey",
      key: "journey",
      technologies: ["react", "redux", "axios"],
      github: "https://github.com/rabiaakrc",
      live: "#",
      image: "src/images/journey.png",
    },
  ];

  return (
    <section id="projects" className="p-8 dark:bg-[#2A262B] ml-8">
      {/* Başlık */}
      <h3 className="text-3xl font-bold mb-6 dark:bg-[#2A262B] dark:text-[#AEBCCF]">
        {t("projects_title")}
      </h3>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {projects.map((project) => (
          <div
            key={project.key}
            className="bg-white flex flex-col justify-between items-center w-full md:w-[300px] h-[449px] gap-[18px] dark:bg-[#2A262B] transform"
          >
            {/* Görsel */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[180px] object-cover"
            />

            {/* Başlık ve Açıklama */}
            <div className="flex flex-col items-center text-center dark:bg-[#2A262B]">
              <h4 className="text-xl font-semibold text-[#4338CA] dark:bg-[#2A262B] dark:text-[#AEBCCF]">
                {project.name}
              </h4>
              <p className="mt-2 font-inter text-sm dark:text-[#FFFFFF] leading-[17.5px] dark:bg-[#2A262B]">
                {t(`${project.key}_description`)}
              </p>
            </div>

            {/* Teknolojiler */}
            <div className="flex flex-col items-center dark:bg-[#2A262B]">
              <div className="flex justify-center items-center gap-2 dark:bg-[#2A262B]">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="border border-[#3730A3] text-[#3730A3] px-3 py-1 rounded-md text-[14px] leading-[14px] font-inter font-medium tracking-[-0.05em] dark:text-[#8F88FF] dark:bg-[#383838]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bağlantılar */}
            <div className="flex justify-between items-center w-full px-4 dark:bg-[#2A262B]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3730A3] underline font-inter font-medium text-[16px] leading-[16px] dark:bg-[#2A262B] dark:text-[#E1E1FF]"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="text-[#3730A3] underline font-inter font-medium text-[16px] leading-[16px] dark:text-[#E1E1FF]"
              >
                {t("view_project")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
