import React, { useContext } from "react";
import { TranslationContext } from "../contexts/TranslationContext";

const Profile = () => {
  const { t } = useContext(TranslationContext);

  return (
    <section className="p-8 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold">{t("about_me_title")}</h2>
      <p className="mt-4">{t("about_me_description")}</p>
    </section>
  );
};

export default Profile;
