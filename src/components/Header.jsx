import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Header = () => {
  const { t } = useContext(TranslationContext);

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-[#2A262B] mr-24">
      {/* Logo */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-500 text-lg font-bold transform rotate-45">
        A
      </div>

 
      <div className="flex items-center space-x-8 flex-grow justify-end">
        <nav className="flex space-x-8 text-gray-700 dark:text-gray-300">
          <a href="#skills" className="hover:text-purple-500">
            {t("about_me_title")}
          </a>
          <a href="#projects" className="hover:text-purple-500">
            {t("projects_title")}
          </a>
        </nav>

        <button className="px-6 py-2 bg-white text-[#3730A3] border border-[#3730A3] rounded-md hover:bg-purple-950 hover:text-white mr-8">
          {t("hire_me")}
        </button>
      </div>
    </header>
  );
};

export default Header;
