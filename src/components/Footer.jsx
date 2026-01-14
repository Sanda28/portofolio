import { useLang } from "../context/LangContext";
import i18n from "../data/i18n";

const Footer = () => {
  const { lang } = useLang();
  const t = i18n[lang];

  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6  md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold ">Portfolio</h1>
      <div className="flex gap-7 ">
        <a href="#home">{t.nav.home}</a>
        <a href="#about">{t.nav.about}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Sanda28/" target="_blank">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/narotamasanda/" target="_blank">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="www.linkedin.com/in/muhamad-sanda-narotama-24a9622b93" target="_blank">
            <i className="ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
