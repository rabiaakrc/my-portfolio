import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Footer = () => {
  const { t } = useContext(TranslationContext);

  return (
    <footer className="w-full max-w-[1440px] h-[209px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 bg-[#F9F9F9] dark:bg-[#141414]">
      {/* Sol Kısım */}
      <div className="flex flex-col items-start transform translate-x-9">
        <h4 className="text-[32px] font-bold text-[#1F2937] mb-6 leading-[40px] dark:text-[#AEBCCF]">
          {t("footer_heading")}
        </h4>
        <a
          href="mailto:almilasucode@gmail.com"
          className="text-[#AF0C48] underline flex items-center gap-2 text-[16px] font-medium leading-[16px] mt-2 dark:text-[#BAB2E7]"
        >
          <span>👉</span> almilasucode@gmail.com
        </a>
      </div>

      {/* Sağ Kısım */}
      <div className="flex gap-6 text-[#0A0A14] md:ml-auto mt-24 pr-16">
        <a
          href="#"
          className="hover:underline text-[18px] font-medium leading-[16px] dark:text-[#E1E1FF]"
        >
          {t("personal_blog")}
        </a>
        <a
          href="https://github.com/rabiaakrc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#00AB6B] text-[18px] font-medium leading-[16px]"
        >
          {t("github")}
        </a>
        <a
          href="https://www.linkedin.com/in/rabia-karaca-3243401a4/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-[#0077B5] text-[18px] font-medium leading-[16px]"
        >
          {t("linkedin")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
