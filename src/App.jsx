import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useLang } from "./context/LangContext";
import i18n from "./data/i18n";

function App() {
  const { lang } = useLang();
  const t = i18n[lang];

  return (
    <>
      {/* ===== HERO ===== */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <h1 className="text-4xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-base opacity-70 mb-6">{t.hero.desc}</p>

          <div className="flex gap-3">
            <a
              href="/assets/CV.pdf"
              download
              className="bg-(--primary) hover:opacity-90 px-5 py-3 rounded-xl text-white flex items-center gap-2"
            >
              Download CV
              <i className="ri-download-line"></i>
            </a>

            <a
              href="#projects"
              className="bg-(--surface) hover:bg-(--border)
              px-5 py-3 rounded-xl"
            >
              {t.nav.projects}
            </a>
          </div>
        </div>

        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-125 md:ml-auto animate__animated animate__fadeInRight animate__delay-3s"
        />
      </div>

      {/* ===== ABOUT ===== */}
      <div className="about mt-32 py-10" id="about">
        <div className="mx-auto xl:w-2/3 p-7 rounded-xl
          bg-(--card) border border-(--border)">
          <p className="opacity-70 mb-10">{t.about.desc}</p>

          <div className="flex gap-6">
            <div>
              <h1 className="text-4xl font-bold">
                4<span className="text-(--primary)">+</span>
              </h1>
              <p>{t.about.proyekselesai}</p>
            </div>
          </div>

          {/* ===== TOOLS ===== */}
          <div className="mt-24">
            <h1
              className="text-4xl font-bold mb-4"
              data-aos="fade-up"
            >
              {t.about.tool}
            </h1>

            <p
              className="opacity-60 mb-10"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {t.about.desctool}
            </p>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {listTools.map((tool, i) => (
                <div
                  key={tool.id}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100} // 👈 lebih smooth
                  className="flex items-center gap-3 p-4 rounded-lg
                  bg-(--surface) border border-(--border)
                  hover:shadow-md hover:scale-[1.02]
                  transition-all duration-300"
                >
                  <img
                    src={tool.gambar}
                    className="w-12 h-12 object-contain"
                    alt={tool.nama}
                  />

                  <div>
                    <h4 className="font-semibold">{tool.nama}</h4>
                    <p className="text-sm opacity-60">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ===== PROJECTS ===== */}
      <div className="proyek mt-32 py-10" id="projects">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          {t.proyek.title}
        </h1>

        <p
          className="text-center opacity-60 mb-14"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {t.proyek.desc}
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {listProyek.map((p) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={p.dad}
              className="rounded-xl overflow-hidden
              bg-(--card) border border-(--border)
              hover:scale-[1.02] transition-transform duration-300"
            >
              <img src={p.gambar} />

              <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{p.nama}</h1>
                <p className="opacity-70 mb-4">{p.desk}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tools.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-md
                      bg-(--surface) border border-(--border)"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {/* GitHub */}
                  <a
                    href={p.github}
                    target="_blank"
                    className="
                      flex-1 py-3 rounded-lg text-center font-medium
                      bg-(--surface) text-(--text)
                      border border-(--border)
                      hover:opacity-90
                      transition
                      dark:bg-(--primary) dark:text-white dark:border-transparent
                    "
                  >
                    {t.proyek.github}
                  </a>

                  {/* Demo */}
                  <a
                    href={p.demo}
                    target="_blank"
                    className="
                      flex-1 py-3 rounded-lg text-center font-medium
                      bg-(--primary) text-white
                      hover:opacity-90
                      transition
                      dark:bg-(--surface) dark:text-(--text)
                      dark:border dark:border-(--border)
                    "
                  >
                    {t.proyek.demo}
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="kontak mt-2 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" >{t.kontak.title}</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" >{t.kontak.desc}</p>
        <form action="https://formsubmit.co/sandanarotama362@gmail.com" method="POST" className=" border border-zinc-700 dark:bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t.kontak.namalengkap}</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t.kontak.email}</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">{t.kontak.pesan}</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required> </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-red-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-red-600 text-white">{t.kontak.kirim}</button>
            </div>
          </div>
        </form>
      </div>

      {/* End Contact Section */}
    </>
  );
}

export default App;
