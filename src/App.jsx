import DataImage from "./data";
import { listTools,listProyek } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 ">
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        
        <h1 className="text-4xl/tight font-bold mb-6">Hi, Saya Muhamad Sanda Narotama</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya memiliki ketertarikan yang kuat dalam bidang Web Development, khususnya sebagai Backend dan Fullstack Developer. Berpengalaman menggunakan Laravel, CodeIgniter 3, PHP, JavaScript, dan MySQL dalam membangun berbagai aplikasi, mulai dari sistem absensi berbasis QR, aplikasi pencatatan keuangan, hingga sistem perizinan menara BTS dan penggajian karyawan.</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a
            href="/assets/CV.pdf"
            download
            className="bg-red-600 px-4 py-3 rounded-xl hover:bg-red-700 flex items-center gap-2 text-white transition"
          >
            Download CV
            <i className="ri-download-line ri-lg"></i>
          </a>

          <a href="#projects" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInRight animate__delay-3s"  />
      </div>
      {/* End Hero Section */}

      {/* About Me */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once ="true">
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Muhamad Sanda Narotama, seorang Web Developer yang suka ngulik hal-hal seputar pemrograman dan desain digital. Saya biasanya bekerja membuat website, aplikasi .

            Saya selalu percaya kalau tampilan yang bagus harus didukung fungsi yang lancar. Jadi, setiap proyek yang saya kerjakan sebisa mungkin nggak cuma enak dilihat, tapi juga nyaman dipakai dan bener-bener membantu penggunanya.

            Saya adalah lulusan Bina Sarana Informatika pada program studi Sistem Informasi, dan bersyukur bisa menyelesaikannya dengan IPK 3.86. Dengan pengalaman lebih dari 4 tahun, saya terus belajar dan berkembang supaya bisa bikin karya yang makin keren dan bermanfaat.</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">4 <span className="text-red-700">+</span></h1>
                <p>proyek Selesai</p>
              </div>
            </div>
          </div>
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once ="true">Tools yang dipakai</h1>
            <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once ="true">Berikut ini yang biasa saya pakai untuk pembuatan website ataupun design</p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
              {listTools.map((tool) => (
                <div className="flex items-center gap-2 p-3 border-zinc-600 rounded-md hover:bg-zinc-800 group "
                key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once ="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
                <div>
                  <h4 className="font-bold ">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
      {/* End About Me */}

      {/* Projects Section */}
      <div className="proyek mt-32 py-10" id="projects">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once ="true">Proyek Saya</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once ="true">Berikut ini beberapa proyek yg telah saya buat .</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
           <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once ="true">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index ) => (
                  <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between gap-3">
                <a
                  href={proyek.github}
                  target="_blank"
                  className="bg-zinc-700 flex-1 text-center p-3 rounded-lg border border-zinc-600 hover:bg-zinc-600">
                  Lihat GitHub
                </a>
                <a
                  href={proyek.demo}
                  target="_blank"
                  className="bg-red-700 flex-1 text-center p-3 rounded-lg border border-zinc-600 hover:bg-red-600"
                >
                  Demo Website
                </a>
              </div>
            </div>
           </div>
          ))}
        </div>
      </div>
      {/* End Projects Section */}

      {/* Contact Section */}
      <div className="kontak mt-2 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once ="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once ="true">Mari Bergabung dengan saya.</p>
        <form action="https://formsubmit.co/sandanarotama362@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once ="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Kesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required> </textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-red-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-red-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>

      {/* End Contact Section */}
    </>
  );
}

export default App;
