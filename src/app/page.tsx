// app/(landing)/page.tsx (Next.js App Router yapısına uygun)

"use client";

import Image from "next/image";

export default function LandingHero() {
  return (
    <main className="min-h-screen w-full bg-[#002244] text-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-[#f5f5f5] text-black">
        <div className="font-bold text-xl">Logo</div>
        <ul className="flex gap-6 text-sm">
          <li>Hakkımızda</li>
          <li>Blog Yazıları</li>
          <li>İletişim</li>
          <li>Eğitim Kadromuz</li>
          <li>
            <button className="text-xs">Giriş</button>
          </li>
          <li>
            <button className="text-xs bg-[#f5f5f5] hover:bg-blue-600 hover:text-white">Kayıt Ol</button>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col items-center justify-center h-[60vh] px-4">
<div className="relative z-10 mt-6">
  <Image
    src="/logo.svg"
    alt="VIP Kadro"
    width={400}
    height={200}
    className="mx-auto md:flex-auto xl:flex-auto max-w-[260px] h-auto object-contain"
  />
</div>
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-2">
          Başarıya Giden Yolda Yanınızdayız
        </h1>
        <p className="max-w-xl text-center text-sm md:text-base text-gray-300">
          TYT ve AYT sınavlarına hazırlıkta uzman kadromuzla, başarıyı hedefliyoruz. Siz de aramıza katılmaya davetlisiniz.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 text-sm">Giriş Yap</button>
          <button className="text-sm text-white border-white hover:bg-white hover:text-black">
            Şifremi Unuttum
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-8 py-16 bg-[#033366]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Öğrenci Bilgi Sistemi Girişi
          </h2>
          <p className="text-sm text-gray-300 max-w-md">
            Öğrenci Bilgi Sistemi'ne giriş yaparak derslerinizi takip edin ve başarıyı yakalayın.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-white text-black hover:bg-gray-200 text-sm">Giriş Yap</button>
            <button className="text-sm text-white border-white hover:bg-white hover:text-black">
              Şifremi Unuttum
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/student-system-illustration.png"
            alt="Öğrenci Bilgi Sistemi"
            width={300}
            height={200}
            className="rounded shadow"
          />
        </div>
      </section>
    </main>
  );
}
