import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Hero = () => {
  const { t } = useContext(TranslationContext);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white dark:bg-gray-900">
      {/* Metin Bölümü */}
      <div className="flex-1 text-left space-y-4">
        <div className="flex items-center space-x-2">
          <span className="w-12 h-[2px] bg-[#3438CA]"></span>
          <p className="text-[#3438CA] text-lg font-medium">{t("Almila Su")}</p>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("creative_thinker")}
        </h1>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("minimalism_lover")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Hi, I'm Almila. I'm a full-stack developer. If you are looking for a
          Developer who to craft solid and scalable frontend products with
          great user experiences. Let's shake hands with me.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-[#3730A3] text-white rounded-md hover:bg-purple-600">
            {t("hire_me")}
          </button>
          <button className="flex items-center px-6 py-2 bg-white text-[#3730A3] rounded-md hover:bg-gray-100">
            <span className="mr-2">
              <img
                src="src/images/github.png"
                alt="Github"
                className="w-5 h-5"
              />
            </span>
            Github
          </button>
          <button className="flex items-center px-6 py-2 bg-white text-[#3730A3] rounded-md hover:bg-gray-100">
            <span className="mr-2">
              <img
                src="src/images/LinkedIn.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </span>
            Linkedin
          </button>
        </div>
      </div>


      

      {/* Görsel Bölümü */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-16">
        <div className="rounded-xl overflow-hidden">
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
