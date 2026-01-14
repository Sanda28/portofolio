import { useState, useEffect } from "react";
import { useLang } from "../context/LangContext";
import i18n from "../data/i18n";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { lang, dark, toggleLang, toggleTheme } = useLang();
  const t = i18n[lang];

  // === SCROLL EFFECT ===
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300
      ${
        scrolled
          ? "bg-(--bg)/80 backdrop-blur-md shadow-md border-b border-(--border)"
          : "bg-transparent"
      }`}
    >
      <div className="navbar py-6 px-6 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="text-xl md:text-3xl font-bold text-(--text)">
          Muhamad Sanda Narotama
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          <li><a href="#home" className="hover:text-(--primary)">{t.nav.home}</a></li>
          <li><a href="#about" className="hover:text-(--primary)">{t.nav.about}</a></li>
          <li><a href="#projects" className="hover:text-(--primary)">{t.nav.projects}</a></li>
          <li><a href="#contact" className="hover:text-(--primary)">{t.nav.contact}</a></li>

          {/* DARK MODE */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center
            border border-(--border) hover:bg-(--surface) transition"
          >
            <span className="text-lg">
              {dark ? "🌙" : "☀️"}
            </span>
          </button>

          {/* LANGUAGE */}
          <div
            onClick={toggleLang}
            className="relative flex items-center w-20 h-10 rounded-full
            border border-(--border) cursor-pointer overflow-hidden
            bg-(--surface)"
          >
            <span
              className={`absolute top-1 left-1 w-9 h-8 rounded-full
              bg-(--primary) transition-transform duration-300
              ${lang === "en" ? "translate-x-9" : ""}`}
            />
            <span className={`relative z-10 w-1/2 text-center text-xs font-bold ${lang === "id" ? "text-white" : "text-(--muted)"}`}>
              ID
            </span>
            <span className={`relative z-10 w-1/2 text-center text-xs font-bold ${lang === "en" ? "text-white" : "text-(--muted)"}`}>
              EN
            </span>
          </div>
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-2xl"
        >
          {openMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${openMenu ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-(--bg)">
          <li><a onClick={() => setOpenMenu(false)} href="#home">{t.nav.home}</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#about">{t.nav.about}</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#projects">{t.nav.projects}</a></li>
          <li><a onClick={() => setOpenMenu(false)} href="#contact">{t.nav.contact}</a></li>

          {/* ACTIONS MOBILE */}
          <div className="flex gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-(--border)"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            <button
              onClick={toggleLang}
              className="px-4 py-2 border border-(--border) rounded-md"
            >
              {lang === "id" ? "EN" : "ID"}
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
