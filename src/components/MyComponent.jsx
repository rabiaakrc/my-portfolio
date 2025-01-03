import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const MyComponent = () => {
  const { t } = useContext(TranslationContext);

  const skills = [
    {
      title: "JavaScript",
      description: t("mycomponent_creative_thinker"),
    },
    {
      title: "React.js",
      description: t("mycomponent_creative_lover"),
    },
    {
      title: "Node.js",
      description: t("mycomponent_creative_hero"),
    },
  ];

  return (
    <section id="skills" className="p-8 bg-white dark:bg-[#2A262B]">
      {/* Hedeflenen bölüme id eklendi */}
      <div className="ml-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#AEBCCF] mb-8">
          {t("about_me_title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-[#2A262B] -ml-6 dark:text-[#AEBCCF]"
            >
              <h3 className="text-xl font-bold text-[#3438CA] mb-4 dark:text-[#B7AAFF]">
                {skill.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyComponent;
