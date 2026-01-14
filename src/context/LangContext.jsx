import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("id");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    const savedTheme = localStorage.getItem("theme");

    if (savedLang) setLang(savedLang);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "id" ? "en" : "id";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <LangContext.Provider value={{ lang, dark, toggleLang, toggleTheme }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
