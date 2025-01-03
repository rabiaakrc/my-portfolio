import React, { createContext, useState } from "react";

// Çeviri metinleri
const translations = {
  en: {
    about_me_title: "Skills",
    about_me_description:
      "Hi, I'm a passionate developer with experience in React and full-stack development.",
    projects_title: "Projects",
    footer_text: "© 2024 My Portfolio. All rights reserved.",
    view_project: "View Project",
    hire_me: "Hire Me",
    mycomponent_creative_thinker:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mycomponent_creative_lover:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    mycomponent_creative_hero:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creative_thinker: "Creative thinker",
    minimalism_lover: "Minimalism lover",
    hero_description:
      "Hi, I'm Almila. I'm a full-stack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences, let's shake hands.",
    profile_title: "Profile",
    profile_section_title: "Profile",
    birth_date: "Birth Date",
    city_of_residence: "City of Residence",
    education_status: "Education Status",
    preferred_role: "Preferred Role",
    profile_about_me_title: "About Me",
    profile_about_me_description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMinima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    mycomponent_title: "Skills",
    mycomponent_skill_js: "JavaScript: A fundamental technology for modern web development.",
    mycomponent_skill_react: "React.js: A popular library for building user interfaces.",
    mycomponent_skill_node:
      "Node.js: For building powerful server-side JavaScript applications.",
    projects_title: "Projects",
    view_project: "View Project",
    workintech_description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. Created with vanilla JS, SCSS, and Parcel Bundler.",
    random_jokes_description:
      "A customizable platform to fetch random jokes and display them interactively. Built with React and integrated with an API.",
    journey_description:
      "A personal dashboard project for tracking tasks and projects efficiently. Utilizes modern frontend technologies.",
    footer_heading: "Let’s work together on your next product.",
    personal_blog: "Personal Blog",
    github: "GitHub",
    linkedin: "LinkedIn",
    language_switch_en: "English",
    language_switch_tr: "Türkçe",
  },
  tr: {
    about_me_title: "Yetenekler",
    about_me_description:
      "Merhaba, React ve full-stack geliştirme konusunda deneyimli tutkulu bir geliştiriciyim.",
    projects_title: "Projeler",
    footer_text: "© 2024 Portföyüm. Tüm hakları saklıdır.",
    view_project: "Projeyi Görüntüle",
    hire_me: "Beni İşe Al",
    mycomponent_creative_thinker: "JavaScript: Modern web geliştirme için temel bir teknoloji.",
    mycomponent_creative_lover: "React.js: Kullanıcı arayüzleri geliştirmek için popüler bir kütüphane.",
    mycomponent_creative_hero: "Node.js: Sunucu tarafında güçlü JavaScript uygulamaları geliştirmek için.",
    creative_thinker: "Yaratıcı düşünür",
    minimalism_lover: "Minimalizm sever",
    hero_description:
      "Merhaba, ben Almila. Full-stack geliştiricisiyim. Güçlü ve ölçeklenebilir frontend ürünleri geliştirmek için bir geliştirici arıyorsanız, el sıkışalım.",
    profile_title: "Profil",
    profile_section_title: "Profil",
    birth_date: "Doğum Tarihi",
    city_of_residence: "İkamet Şehri",
    education_status: "Eğitim Durumu",
    preferred_role: "Tercih Ettiği Rol",
    profile_about_me_title: "Hakkımda",
    profile_about_me_description:
      "Lorem ipsum, elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.\n\nMinima, bir suçlama olmaksızın çözüm yolu arayanları cezbediyor. Woluptatius eff quam voltuos değer.",
    mycomponent_title: "Yetenekler",
    mycomponent_skill_js: "JavaScript: Modern web geliştirme için temel bir teknoloji.",
    mycomponent_skill_react:
      "React.js: Kullanıcı arayüzleri geliştirmek için popüler bir kütüphane.",
    mycomponent_skill_node:
      "Node.js: Sunucu tarafında güçlü JavaScript uygulamaları geliştirmek için.",
    projects_title: "Projeler",
    view_project: "Projeyi Görüntüle",
    workintech_description:
      "Kullanıcılarınızın kabul veya reddedecekleri çerezleri seçmelerine olanak tanıyan basit, özelleştirilebilir, minimal bir çerez eklentisi. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur.",
    random_jokes_description:
      "Rastgele şakalar almak ve bunları etkileşimli olarak görüntülemek için özelleştirilebilir bir platform. React ile oluşturulmuş ve bir API ile entegre edilmiştir.",
    journey_description:
      "Görevleri ve projeleri verimli bir şekilde takip etmek için kişisel bir kontrol paneli projesi. Modern frontend teknolojilerini kullanır.",
    footer_heading: "Birlikte çalışalım ve sonraki ürününüzü geliştirelim.",
    personal_blog: "Kişisel Blog",
    github: "GitHub",
    linkedin: "LinkedIn",
    language_switch_en: "English",
    language_switch_tr: "Türkçe",
  },
};

// TranslationContext oluşturuluyor
export const TranslationContext = createContext();

// TranslationProvider bileşeni
export const TranslationProvider = ({ children }) => {
  // Varsayılan dil: İngilizce
  const [language, setLanguage] = useState("en");

  // Çeviri anahtarını döndüren fonksiyon
  const t = (key) => {
    // Çevirilerden mevcut dil için anahtarı döndür
    return translations[language]?.[key] || key; // Anahtar bulunamazsa kendisini döndür
  };

  // Context sağlayıcı
  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
