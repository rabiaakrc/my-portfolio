import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(TranslationContext);

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage("tr")}
        className={`text-custom-purple underline ${
          language === "tr" ? "font-bold" : ""
        }`}
      >
        TÜRKÇE
      </button>
      <span>'YE GEÇ</span>
    </div>
  );
};

export default LanguageSelector;
