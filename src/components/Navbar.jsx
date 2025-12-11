import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  // Delay agar navbar muncul setelah preloader selesai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 2000); // delay 1.5 detik (ubah sesuai durasi preloader kamu)

    return () => clearTimeout(timer);
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Jika belum waktunya tampil → jangan render navbar
  if (!showNavbar) return null;

  return (
    <div className="navbar py-7 flex justify-between items-center md:sticky md:top-0 md:z-50">
      <div className="logo">
        <h1 className="text-3xl font-bold text-white p-1 md:bg-transparent md:text-white">
          Muhamad Sanda Narotama
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
        md:translate-x-0 md:opacity-100 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all 
        md:transition-none z-40
        ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}
      >
        <li><a href="#home" className="sm:text-lg text-base font-medium">Beranda</a></li>
        <li><a href="#about" className="sm:text-lg text-base font-medium">Tentang</a></li>
        <li><a href="#projects" className="sm:text-lg text-base font-medium">Proyek</a></li>
        <li><a href="#contact" className="sm:text-lg text-base font-medium">Kontak</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
