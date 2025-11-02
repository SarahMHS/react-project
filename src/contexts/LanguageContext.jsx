import { createContext, useState, useEffect } from "react";
import translations from "../data/translations.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
