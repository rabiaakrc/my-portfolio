import React, { createContext, useState } from "react";

// Çeviri metinleri
const translations = {
  en: {
    about_me_title: "Skills",
    about_me_description: "Hi, I'm a passionate developer with experience in React and full-stack development.",
    projects_title: "Projects",
    footer_text: "© 2024 My Portfolio. All rights reserved.",
    view_project: "View Project",
    hire_me: "Hire Me",
    creative_thinker: "Creative thinker",
    minimalism_lover: "Minimalism lover",
  },
  tr: {
    about_me_title: "Yetenekler",
    about_me_description: "Merhaba, React ve full-stack geliştirme konusunda deneyimli tutkulu bir geliştiriciyim.",
    projects_title: "Projeler",
    footer_text: "© 2024 Portföyüm. Tüm hakları saklıdır.",
    view_project: "Projeyi Görüntüle",
    hire_me: "Beni İşe Al",
    creative_thinker: "Yaratıcı düşünür",
    minimalism_lover: "Minimalizm sever",
  },
};

// TranslationContext oluşturuluyor
export const TranslationContext = createContext();

// TranslationProvider bileşeni
export const TranslationProvider = ({ children }) => {
  // Varsayılan dil: İngilizce
  const [language, setLanguage] = useState("en");

  // Çeviri fonksiyonu
  const t = (key) => {
    return translations[language][key] || key; // Anahtar bulunamazsa kendisini döndürür
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
