import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Profile = () => {
  const { t } = useContext(TranslationContext);

  return (
    <section className="p-8 bg-white text-black dark:bg-[#2A262B] ">
      <div className="max-w-4xl ml-8">
        <h1 className="text-3xl font-bold text-[#1F2937] mb-8 dark:text-[#AEBCCF]">{t("profile_title")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#4338CA] mb-4 dark:text-[#B7AAFF]">{t("profile_section_title")}</h2>
            <ul className="space-y-2 dark:text-[#FFFFFF]">
              <li className="flex">
                <span className="w-40 font-semibold">{t("birth_date")}:</span>
                <span>24.03.1996</span>
              </li>
              <li className="flex">
                <span className="w-40 font-semibold">{t("city_of_residence")}:</span>
                <span>Ankara</span>
              </li>
              <li className="flex">
                <span className="w-40 font-semibold">{t("education_status")}:</span>
                <span>Hacettepe Üniv. Biyoloji</span>
              </li>
              <li className="flex">
                <span className="w-40 font-semibold">{t("preferred_role")}:</span>
                <span>Frontend, UI</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#4338CA] mb-4 dark:text-[#B7AAFF]">{t("profile_about_me_title")}</h2>
            {/* whitespace-pre-line sınıfı ile satır sonlarını işliyoruz */}
            <p className="text-gray-700 mb-4 whitespace-pre-line dark:text-[#FFFFFF]">
              {t("profile_about_me_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
