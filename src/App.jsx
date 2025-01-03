import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { TranslationProvider } from "./contexts/TranslationContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LanguageSelector from "./components/LanguageSelector";
import ModeSwitch from "./components/ModeSwitch";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <TranslationProvider>
      <ThemeProvider>
        {/* Sayfa arka planı için dinamik sınıflar */}
        <div className="min-h-screen bg-white dark:bg-[#2A262B] text-gray-900 dark:text-gray-100 transition-colors">
          {/* ModeSwitch ve LanguageSelector birleştirildi */}
          <div className="flex items-center justify-end p-4 bg-white dark:bg-[#2A262B] space-x-4">
            <ModeSwitch />
            <LanguageSelector />
          </div>
          {/* Diğer bileşenler */}
          <Header />
          <Hero />
          <MyComponent/>
          <Profile />
          <Projects />
          <Footer />
        </div>
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default App;
