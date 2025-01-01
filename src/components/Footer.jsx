import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Footer = () => {
  const { t } = useContext(TranslationContext);

  return (
    <footer className="p-4 text-center bg-gray-200 dark:bg-gray-700">
      <p>{t("footer_text")}</p>
    </footer>
  );
};

export default Footer;
