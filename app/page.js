export const metadata = {
  title: "Beranda SURAT4D | Pengalaman Layanan Digital yang Aman",
  description:
    "SURAT4D menghadirkan pengalaman layanan digital modern dengan akses cepat, dukungan pelanggan 24 jam, dan sistem keamanan yang terpercaya.",
  keywords: [
    "SURAT4D",
    "layanan digital modern",
    "platform digital Indonesia",
    "dukungan pelanggan 24 jam",
    "keamanan digital",
  ],
  alternates: {
    canonical: "https://mainsurat.pages.dev/",
  },
  openGraph: {
    title: "Beranda SURAT4D | Pengalaman Layanan Digital yang Aman",
    description:
      "SURAT4D menghadirkan pengalaman layanan digital modern dengan akses cepat, dukungan pelanggan 24 jam, dan sistem keamanan yang terpercaya.",
    url: "https://mainsurat.pages.dev/",
    siteName: "SURAT4D",
    images: [
      {
        url: "/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "SURAT4D layanan digital modern",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SURAT4D",
  url: "https://mainsurat.pages.dev/",
  description:
    "Platform digital Indonesia yang memberikan layanan modern, akses cepat, dukungan pelanggan 24 jam, dan pengalaman pengguna yang aman.",
  publisher: {
    "@type": "Organization",
    name: "SURAT4D",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0b1022] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="flex-none p-5 text-center border-b border-blue-900 bg-[#0e1630]">
        <img src="/logo.png" alt="Logo SURAT4D" className="mx-auto h-12" />
      </nav>

      <div className="flex-grow overflow-y-auto p-4 flex flex-col items-center">
        <section className="w-full max-w-lg mt-2">
          <div className="relative border-2 border-blue-500 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(30,58,138,0.5)]">
            <img
              src="/banner.webp"
              alt="Banner layanan digital SURAT4D"
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="w-full max-w-lg mt-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Layanan Digital Modern untuk Pengguna yang Mengutamakan Kecepatan dan Keamanan
          </h1>

          <p className="mt-4 text-sm text-gray-300">
            SURAT4D hadir sebagai platform digital yang fokus pada kenyamanan pengguna, kemudahan akses, dan kualitas layanan yang terus berkembang sesuai kebutuhan teknologi modern.
          </p>
        </section>

        <section className="w-full max-w-sm mt-6 flex gap-4">
          <a
            href="https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=surat4dcom.zendesk.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 py-3 rounded-lg font-bold text-center"
          >
            LIVE CHAT
          </a>

          <a
            href="https://t.me/maxwinslotsurat4d"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-sky-600 py-3 rounded-lg font-bold text-center"
          >
            TELEGRAM
          </a>
        </section>

        <section className="w-full max-w-lg mt-6 grid grid-cols-2 gap-4">
          <div className="bg-[#0e1630] p-4 rounded-xl border border-blue-900 text-center">
            <div className="text-xl mb-1">⚡</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase">
              Proses Cepat
            </div>
          </div>

          <div className="bg-[#0e1630] p-4 rounded-xl border border-blue-900 text-center">
            <div className="text-xl mb-1">🛡️</div>
            <div className="text-[10px] font-bold text-blue-400 uppercase">
              Keamanan Terjamin
            </div>
          </div>
        </section>

        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-blue-400 font-bold border-b border-blue-800 pb-2 mb-4">
            Kenapa Memilih SURAT4D?
          </h2>

          <ul className="text-sm space-y-2 text-gray-300">
            <li>• Platform dengan sistem modern yang responsif di berbagai perangkat.</li>
            <li>• Dukungan pelanggan profesional selama 24 jam.</li>
            <li>• Akses cepat dan pengalaman pengguna yang konsisten.</li>
            <li>• Fokus pada keamanan, kenyamanan, dan kualitas layanan.</li>
          </ul>
        </section>

        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Tentang SURAT4D</h2>

          <div className="text-sm text-gray-300 space-y-4">
            <p>
              SURAT4D hadir sebagai platform digital yang berfokus pada kenyamanan pengguna, kemudahan akses, dan kualitas layanan yang terus dikembangkan mengikuti kebutuhan teknologi modern.
            </p>

            <p>
              Dengan tampilan yang sederhana dan sistem yang responsif, pengguna dapat mengakses layanan melalui berbagai perangkat tanpa kendala berarti.
            </p>

            <p>
              Tim pengelola secara berkala melakukan pembaruan untuk menjaga stabilitas sistem dan kualitas pengalaman pengguna.
            </p>
          </div>
        </section>

        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Komitmen Keamanan & Layanan</h2>

          <div className="text-sm text-gray-300 space-y-4">
            <p>
              Experience: Berpengalaman dalam menghadirkan platform digital yang stabil dan mudah digunakan.
            </p>

            <p>
              Expertise: Dukungan tim profesional yang berfokus pada kualitas layanan dan kenyamanan pengguna.
            </p>

            <p>
              Trust: Sistem keamanan modern dan enkripsi data untuk membantu menjaga privasi pengguna.
            </p>
          </div>
        </section>

        <section className="w-full max-w-lg mt-6 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Keunggulan Platform</h2>

          <ul className="text-sm text-gray-300 space-y-2">
            <li>✓ Tampilan modern dan mudah digunakan.</li>
            <li>✓ Optimal untuk desktop dan mobile.</li>
            <li>✓ Dukungan pelanggan 24 jam.</li>
            <li>✓ Sistem keamanan terenkripsi.</li>
            <li>✓ Performa cepat dan responsif.</li>
            <li>✓ Pembaruan sistem secara berkala.</li>
          </ul>
        </section>

        <section className="w-full max-w-lg mt-6 mb-8 bg-[#0e1630] p-6 rounded-xl border border-blue-900">
          <h2 className="text-lg font-bold text-blue-400 mb-4">Pertanyaan Umum (FAQ)</h2>

          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-bold text-white">Q: Apakah SURAT4D aman digunakan?</p>
              <p>A: Sistem menggunakan teknologi keamanan modern untuk membantu melindungi aktivitas pengguna.</p>
            </div>

            <div>
              <p className="font-bold text-white">Q: Apakah dapat diakses melalui smartphone?</p>
              <p>A: Ya, platform telah dioptimalkan untuk berbagai perangkat mobile.</p>
            </div>

            <div>
              <p className="font-bold text-white">Q: Apakah layanan pelanggan tersedia setiap hari?</p>
              <p>A: Ya, dukungan pelanggan tersedia selama 24 jam.</p>
            </div>

            <div>
              <p className="font-bold text-white">Q: Bagaimana cara menghubungi layanan pelanggan?</p>
              <p>A: Melalui Live Chat dan Telegram yang tersedia pada halaman utama.</p>
            </div>

            <div>
              <p className="font-bold text-white">Q: Apakah platform memiliki sistem keamanan data?</p>
              <p>A: Ya, data diproses menggunakan sistem keamanan dan enkripsi modern.</p>
            </div>

            <div>
              <p className="font-bold text-white">Q: Apakah platform dapat diakses kapan saja?</p>
              <p>A: Platform dirancang agar dapat diakses selama 24 jam.</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="flex-none p-4 border-t border-blue-900 bg-[#0b1022]">
        <div className="max-w-sm mx-auto flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://suratsekarang.com/?ref=linkhk/"
              className="bg-blue-600 text-center py-4 rounded-xl font-bold"
            >
              DAFTAR
            </a>

            <a
              href="https://suratsekarang.com/?ref=linkhk/"
              className="bg-blue-700 text-center py-4 rounded-xl font-bold border border-blue-600"
            >
              LOGIN
            </a>
          </div>

          <p className="text-center text-xs text-gray-400">
            SURAT4D merupakan platform digital yang mengutamakan keamanan, kenyamanan, dan kualitas layanan untuk memberikan pengalaman pengguna yang optimal.
          </p>

          <p className="text-center text-[10px] text-gray-500">
            © 2026 SURAT4D. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

