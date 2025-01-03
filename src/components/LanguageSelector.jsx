import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useContext(TranslationContext);

  return (
    <div className="flex items-center space-x-2 " style={{ marginRight: "6rem" }}>
      <button
        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
        className={`text-custom-purple underline  ${language === "tr" ? "font-bold" : ""}`}
      >
        {language === "tr" ? t("language_switch_en") : t("language_switch_tr")}
      </button>
      <span>'YE GEÇ</span>
    </div>
  );
};

export default LanguageSelector;
