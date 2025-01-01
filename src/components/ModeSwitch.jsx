import React, { useState, useEffect, useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const ModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useContext(TranslationContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer bg-custom-purple`}
        onClick={toggleMode}
      >
        <div
          className={`w-5 h-5 rounded-full shadow-md transform transition-transform ${
            isDarkMode ? "translate-x-6 bg-custom-yellow" : "translate-x-0 bg-custom-yellow"
          }`}
        ></div>
      </div>
      <span
        className={`text-sm font-medium ${
          isDarkMode ? "text-[#D9D9D9]" : "text-[#3A3A3A]"
        }`}
      >
        {isDarkMode ? t("LIGHT") : t("DARK MODE")}
      </span>
    </div>
  );

  
};

export default ModeSwitch;
