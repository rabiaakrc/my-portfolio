import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Hero = () => {
  const { t } = useContext(TranslationContext);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 bg-white dark:bg-[#2A262B]">
      {/* Text Section */}
      <div className="flex-1 text-left space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <span className="w-12 h-[2px] bg-[#3438CA] dark:bg-[#B7AAFF]"></span>
          <p className="text-[#3438CA] text-lg font-medium dark:text-[#B7AAFF]">{t("Almila Su")}</p>
        </div>

        {/* Headings */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-[#AEBCCF]">
          {t("creative_thinker")}
        </h1>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-[#AEBCCF]">
          {t("minimalism_lover")}
        </h2>

        {/* Description */}
        <p className="text-gray-700 dark:text-[#FFFFFF]">{t("hero_description")}</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-[#3730A3] text-white rounded-md hover:bg-purple-600 dark:bg-[#BAB2E7] dark:text-[#000000]">
            {t("hire_me")}
          </button>
          <a
            href="https://github.com/rabiaakrc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 bg-white text-[#3730A3] rounded-md hover:bg-gray-100 dark:bg-[#383838] dark:text-[#E1E1FF]"
          >
            <img
              src="src/images/github.png"
              alt="Github"
              className="w-5 h-5 mr-2"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/rabia-karaca-3243401a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-2 bg-white text-[#3730A3] rounded-md hover:bg-gray-100 dark:bg-[#383838] dark:text-[#E1E1FF]"
          >
            <img
              src="src/images/LinkedIn.png"
              alt="LinkedIn"
              className="w-5 h-5 mr-2"
            />
            Linkedin
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-8 lg:mt-0 lg:ml-16">
        <div className="rounded-xl overflow-hidden ">
          <img
            src="src/images/image.png"
            alt="Hero"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
