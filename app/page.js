import Script from "next/script";
import Image from "next/image";
import Accordion from "./components/AccordionClient";

export const metadata = {
  title: "SURAT4D — Akses Permainan Online Pilihan dengan Layanan Terpercaya",
  description:
    "SURAT4D menghadirkan akses permainan online dengan tampilan modern, navigasi praktis, serta layanan yang dirancang untuk memberikan pengalaman nyaman bagi pengguna. Temukan informasi permainan, fitur unggulan, dan akses SURAT4D dalam satu platform yang mudah digunakan.",
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
    title: "SURAT4D — Akses Permainan Online Pilihan dengan Layanan Terpercaya",
    description:
      "SURAT4D menghadirkan akses permainan online dengan tampilan modern, navigasi praktis, serta layanan yang dirancang untuk memberikan pengalaman nyaman bagi pengguna. Temukan informasi permainan, fitur unggulan, dan akses SURAT4D dalam satu platform yang mudah digunakan.",
    url: "https://mainsurat.pages.dev/",
    siteName: "SURAT4D",
    images: [
      {
        url: "/surat4d%20akses%20cepat%20tanpa%20lag%20terupdate%20dengan%20visual%20lengkap2026.webp",
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
    url: "https://mainsurat.pages.dev/",
    logo: "https://mainsurat.pages.dev/logo-surat4d.png",
    sameAs: ["https://facebook.com/mainsurat4d/","https://twitter.com/mainsurat4d/"],
              contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+6285373208436",
              contactType: "customer support",
              areaServed: "ID",
              availableLanguage: ["Indonesian","English"]
            }
          ],
  },
};

const benefits = [
  {
    icon: "⚡",
    title: "Proses Cepat",
    text: "Akses layanan yang cepat dan efisien tanpa hambatan.",
  },
  {
    icon: "🛡️",
    title: "Keamanan Terjamin",
    text: "Sistem yang dirancang untuk menjaga kenyamanan dan privasi pengguna.",
  },
  {
    icon: "📱",
    title: "Responsif",
    text: "Tampilan yang nyaman di desktop, tablet, dan smartphone.",
  },
  {
    icon: "💬",
    title: "Support 24 Jam",
    text: "Dukungan pelanggan siap membantu kapan pun dibutuhkan.",
  },
];

const reasons = [
  "Platform modern dengan pengalaman pengguna yang lebih nyaman.",
  "Dukungan pelanggan profesional selama 24 jam sehari.",
  "Akses cepat dan performa yang konsisten di berbagai perangkat.",
  "Sistem keamanan dan privasi yang lebih terjaga untuk pengguna.",
];

const steps = [
  {
    number: "01",
    title: "Daftar Mudah",
    text: "Masuk ke halaman pendaftaran dan mulai proses dengan cepat.",
  },
  {
    number: "02",
    title: "Akses Langsung",
    text: "Nikmati pengalaman akses yang lancar dan responsif kapan saja.",
  },
  {
    number: "03",
    title: "Dukungan Siap Sedia",
    text: "Tim support hadir untuk membantu Anda setiap saat.",
  },
];

const testimonials = [
  {
    quote:
      "Saya sudah menggunakan SURAT4D selama 3 bulan. Prosesnya cepat, situsnya bersih, dan support selalu responsif bahkan di malam hari.",
    name: "Rini W.",
    role: "Member Aktif",
  },
  {
    quote:
      "Tampilan yang simpel tapi terasa profesional. Aksesnya cepat dan lebih nyaman dibanding platform lain yang pernah saya coba.",
    name: "Andi S.",
    role: "Member Aktif",
  },
  {
    quote:
      "Saya suka desainnya yang modern dan mudah dipahami. Kecepatan aksesnya juga terasa lebih baik dibanding layanan lain yang saya gunakan sebelumnya.",
    name: "Dewi K.",
    role: "Pengguna Baru",
  },
  {
    quote:
      "Dukungan pelanggan 24 jam sangat membantu saat saya butuh jawaban cepat. Responnya ramah dan tidak membuat bingung.",
    name: "Fajar N.",
    role: "Member Setia",
  },
  {
    quote:
      "Platform ini terasa lebih aman dan nyaman saat digunakan. Saya merasa lebih tenang karena tampilannya rapi dan sistemnya stabil.",
    name: "Sinta R.",
    role: "Member Aktif",
  },
  {
    quote:
      "Surat4D memberikan pengalaman yang lebih lancar dan cepat. Prosesnya simpel, tampilan enak dilihat, dan customer support selalu siap membantu.",
    name: "Bimo A.",
    role: "User Premium",
  },
];

const faqs = [
  {
    question: "Apakah SURAT4D aman digunakan?",
    short: "Keamanan & privasi",
    tag: "Keamanan",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json",
    answer: `Keamanan merupakan prioritas utama di SURAT4D. Kami menerapkan lapisan perlindungan teknis seperti enkripsi pada data sensitif saat transit (HTTPS/TLS) serta pengamanan server dan basis data yang rutin diperbarui. Selain itu, tim kami melakukan pemantauan aktivitas dan audit keamanan berkala untuk mendeteksi dan menanggapi potensi ancaman lebih cepat. Kebijakan privasi dan prosedur penanganan data juga diatur sehingga informasi pribadi pengguna hanya digunakan sebagaimana mestinya dan disimpan dengan standar keamanan yang ketat. Jika Anda memiliki kekhawatiran khusus tentang keamanan akun, tim support dapat membantu langkah-langkah tambahan seperti reset dan verifikasi akun.`,
  },
  {
    question: "Apakah bisa diakses melalui smartphone?",
    short: "Mobile friendly",
    tag: "Mobile",
    lottie: "https://assets10.lottiefiles.com/packages/lf20_tll0j4bb.json",
    answer: `Ya. SURAT4D dikembangkan dengan pendekatan responsif sehingga antarmuka dan alur kerja dioptimalkan untuk layar kecil seperti smartphone dan tablet. Kami memastikan tata letak, tombol, dan formulir mudah dijangkau dengan satu tangan pada perangkat seluler. Fitur-fitur penting seperti akses akun, histori transaksi, serta dukungan tersedia tanpa perlu memperbesar halaman atau menggunakan mode desktop. Untuk pengalaman terbaik, gunakan browser modern yang mendukung JavaScript dan pengaturan keamanan standar.`,
  },
  {
    question: "Apakah layanan pelanggan tersedia setiap hari?",
    short: "Support 24/7",
    tag: "Support",
    lottie: "https://assets3.lottiefiles.com/packages/lf20_jzrzs9eu.json",
    answer: `Benar — layanan pelanggan SURAT4D beroperasi 24 jam sehari, 7 hari seminggu. Tim support kami dilatih untuk menangani pertanyaan umum, membantu pemulihan akses akun, serta memberi panduan terkait fitur dan penggunaan. Untuk kasus yang memerlukan eskalasi (misalnya masalah teknis atau keamanan), tim teknis kami siap bekerja sama untuk menyelesaikan insiden dengan prioritas tinggi. Kami juga menyimpan catatan percakapan agar Anda tidak perlu mengulang informasi saat melakukan tindak lanjut.`,
  },
  {
    question: "Bagaimana cara menghubungi layanan pelanggan?",
    answer: `Ada beberapa saluran yang bisa Anda gunakan: (1) Live Chat langsung di situs untuk jawaban cepat; (2) Telegram resmi kami untuk notifikasi dan bantuan pesan singkat; (3) Formulir kontak di halaman Hubungi Kami untuk pesan tertulis yang lebih rinci; dan (4) email dukungan untuk lampiran atau dokumentasi. Pada setiap saluran, mohon sertakan detail akun dan deskripsi masalah agar tim dapat membantu lebih cepat. Untuk masalah keamanan, hindari membagikan kata sandi atau informasi sensitif melalui chat publik.`,
  },
  {
    question: "Apakah platform memiliki sistem keamanan data?",
    answer: `Ya. Selain enkripsi saat transmisi, SURAT4D menerapkan kontrol akses berbasis peran, backup berkala, dan kebijakan retensi data yang jelas. Data sensitif disimpan secara terpisah dan hanya dapat diakses oleh staf yang berwenang sesuai kebutuhan operasional. Kami juga menerapkan langkah mitigasi terhadap serangan umum seperti percobaan injeksi, CSRF, dan brute-force, serta rutin memperbarui dependensi sistem untuk menutup celah keamanan. Jika ada permintaan terkait penghapusan atau koreksi data pribadi, tim compliance kami dapat memprosesnya sesuai kebijakan yang berlaku.`,
  },
  {
    question: "Apakah platform dapat diakses kapan saja?",
    answer: `Platform dirancang untuk memberikan tingkat ketersediaan tinggi. Infrastruktur kami dioptimalkan untuk menangani beban puncak dan meminimalkan gangguan layanan, termasuk proses pemulihan otomatis untuk beberapa jenis kegagalan. Meskipun kami menargetkan uptime yang tinggi, pemeliharaan terjadwal atau kondisi luar kendali (seperti gangguan pihak ketiga) mungkin memengaruhi akses sementara. Informasi pemeliharaan dan status layanan akan diumumkan melalui halaman status atau kanal komunikasi resmi kami sehingga pengguna dapat mempersiapkan diri jika ada jeda layanan.`,
  },
];


export default function Home() {
  return (
    <main id="main" className="min-h-screen flex flex-col bg-[#0b1022] text-white">
      {/* Site structured data moved to layout.js */}

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        }) }}
      />

      <Script
        id="webpage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SURAT4D — Akses Permainan Online Pilihan",
          headline: "Layanan Digital Modern yang Cepat, Aman, dan Mudah Diakses",
          description: "SURAT4D hadir untuk memberikan pengalaman digital yang lebih nyaman, lebih aman, dan lebih responsif untuk kebutuhan Anda sehari-hari.",
          url: "https://mainsurat.pages.dev/",
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": "https://mainsurat.pages.dev/",
          },
          image: {
            "@type": "ImageObject",
            url: "https://mainsurat.pages.dev/surat4d%20akses%20cepat%20tanpa%20lag%20terupdate%20dengan%20visual%20lengkap2026.webp",
          },
        }) }}
      />

      <nav aria-label="Primary" className="sticky top-0 z-20 flex-none border-b border-blue-900/80 bg-[#0e1630]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
          <Image src="/logo-surat4d.png" alt="Logo SURAT4D" width={160} height={48} className="h-12 w-auto object-contain" priority />
        </div>
      </nav>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-5xl px-4 py-3">
        <ol className="flex items-center gap-2 text-sm text-slate-300">
          <li>
            <a href="/" className="hover:underline" aria-current="page">Beranda</a>
          </li>
          <li className="text-slate-500">/</li>
          <li>
            <a href="#info" className="hover:underline">Info</a>
          </li>
          <li className="text-slate-500">/</li>
          <li>
            <a href="https://suratsekarang.com/register?ref=linkhk" className="hover:underline" target="_blank" rel="noopener noreferrer nofollow">Daftar</a>
          </li>
        </ol>
      </nav>

      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Beranda", item: "https://mainsurat.pages.dev/" },
            { "@type": "ListItem", position: 2, name: "Info", item: "https://mainsurat.pages.dev/#info" },
            { "@type": "ListItem", position: 3, name: "Daftar", item: "https://suratsekarang.com/register?ref=linkhk" }
          ]
        }) }}
      />

      <div className="flex-grow p-4 sm:p-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
            {/* Hero header removed per request */}

          <section className="glass-panel overflow-hidden rounded-[28px] border border-blue-900/70 px-4 py-6 sm:px-6 md:px-8 md:py-8">
            <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="text-center md:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">
                  Platform Digital Terpercaya
                </div>

                <h1 className="section-title text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                  Layanan Digital Modern yang Cepat, Aman, dan Mudah Diakses
                </h1>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base md:mx-0">
                  SURAT4D hadir untuk memberikan pengalaman digital yang lebih nyaman, lebih aman, dan lebih responsif untuk kebutuhan Anda sehari-hari.
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-slate-300 md:justify-start">
                  <span className="pill rounded-full px-3 py-1.5">24/7 Support</span>
                  <span className="pill rounded-full px-3 py-1.5">Akses Cepat</span>
                  <span className="pill rounded-full px-3 py-1.5">Keamanan Modern</span>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-[24px] border border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                  <Image
                    src="/surat4d-access-2026.webp"
                    alt="SURAT4D layanan digital modern"
                    width={1200}
                    height={630}
                    className="h-full w-full object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://suratsekarang.com/register?ref=linkhk"
                    className="btn-shimmer flex-1 rounded-xl bg-gradient-to-r from-slate-700 via-blue-600 to-sky-500 px-5 py-3 text-center text-sm font-bold text-white shadow-2xl shadow-sky-500/20 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Daftar SURAT4D (buka di tab baru)"
                  >
                    DAFTAR SEKARANG
                  </a>
                  <a
                    href="https://suratsekarang.com/login?ref=linkhk"
                    className="btn-shimmer flex-1 rounded-xl border border-blue-400/50 bg-slate-900/90 px-5 py-3 text-center text-sm font-bold text-blue-100 transition hover:border-blue-300 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Login SURAT4D (buka di tab baru)"
                  >
                    LOGIN
                  </a>
                </div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.title} className="glass-panel rounded-2xl border border-blue-900/70 p-5 text-center">
                <div className="mb-3 text-2xl">{item.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-blue-300">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-300">{item.text}</p>
              </div>
            ))}
          </section>

          <section className="glass-panel rounded-[28px] border border-blue-900/70 p-5 sm:p-6 md:p-8">
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Kenapa memilih kami</p>
              <h2 className="section-title mt-2 text-2xl font-black text-white sm:text-3xl">
                Solusi digital yang fokus pada kenyamanan dan kepercayaan
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reasons.map((reason, index) => (
                <div key={reason} className="flex items-start gap-3 rounded-2xl border border-blue-900/60 bg-[#0d1325] p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-sm font-bold text-blue-300">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-[28px] border border-blue-900/70 p-5 sm:p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Proses</p>
                <h2 className="section-title mt-2 text-2xl font-black text-white sm:text-3xl">Cara mulai dengan SURAT4D</h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="rounded-2xl border border-blue-900/60 bg-[#0d1325] p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">{step.number}</div>
                  <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-[28px] border border-blue-900/70 p-5 sm:p-6 md:p-8">
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Keunggulan</p>
              <h2 className="section-title mt-2 text-2xl font-black text-white sm:text-3xl">Yang selalu kami prioritaskan</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
                ["⚡", "Kecepatan Akses", "Desain yang ringan dan responsif untuk pengalaman lebih lancar."],
                ["🧩", "Sederhana & Jelas", "Antarmuka yang mudah dipahami tanpa membingungkan pengguna."],
                ["🔒", "Keamanan Fokus", "Privasi dan kenyamanan pengguna menjadi prioritas utama."],
                ["💬", "Respon Cepat", "Tim support selalu siap membantu dengan cepat dan ramah."],
                ["📈", "Performa Stabil", "Sistem terus diperbarui agar tetap nyaman digunakan."],
                ["📱", "Mobile Friendly", "Tersedia dengan tampilan yang optimal di berbagai perangkat."],
              ].map(([icon, title, text]) => (
                <div key={title} className="rounded-2xl border border-blue-900/60 bg-[#0d1325] p-5">
                  <div className="text-2xl">{icon}</div>
                  <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-[28px] border border-blue-900/70 p-5 sm:p-6 md:p-8">
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Testimoni</p>
              <h2 className="section-title mt-2 text-2xl font-black text-white sm:text-3xl">Apa kata pengguna</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((person) => (
                <div key={person.name} className="rounded-3xl border border-blue-900/60 bg-[#0d1325] p-5 text-slate-200">
                  <p className="text-sm leading-7">“{person.quote}”</p>
                  <div className="mt-5 border-t border-blue-900/60 pt-4">
                    <p className="font-semibold text-white">{person.name}</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-blue-300">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-[28px] border border-blue-900/70 p-6 sm:p-8 md:p-10">
            <div className="mb-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">FAQ</p>
              <h2 className="section-title mt-2 text-2xl font-extrabold text-white sm:text-3xl">Pertanyaan yang sering ditanyakan</h2>
              <p className="mt-2 max-w-2xl mx-auto text-sm text-slate-300">Kami rangkum jawaban singkat dan jelas untuk membantu Anda memahami layanan dengan cepat.</p>
            </div>

            {/* Modern portrait accordion */}
            <div className="mx-auto max-w-3xl">
              <Accordion items={faqs} />
            </div>
          </section>
        </div>
      </div>

      {/* Lokasi section removed */}

      <footer className="flex-none border-t border-blue-900 bg-[#0b1022] p-6">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-sky-300 mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Profil & Pengaturan</a></li>
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Informasi Legal</a></li>
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Panduan Masuk</a></li>
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Kebijakan Privasi</a></li>
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Syarat Layanan</a></li>
                <li><a href="https://mainsurat.pages.dev/" className="hover:text-sky-300 transition">Bantuan & FAQ</a></li>
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-semibold text-sky-300 mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Telegram: <a href="https://t.me/maxwinslotsurat4d" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">@maxwinslotsurat4d (chat)</a></li>
                <li>WhatsApp: <a href="https://wa.me/6283849139110" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">Chat via WA +62 838-4913-9110</a></li>
              </ul>
            </div>

            {/* Logo / Branding */}
            <div className="flex flex-col items-center justify-center text-center">
              <a href="/" aria-label="SURAT4D homepage" className="block">
                <Image src="/logo-surat4d.png" alt="SURAT4D" width={160} height={48} className="h-20 w-auto object-contain mx-auto" priority />
              </a>
              <p className="mt-3 text-xs text-gray-400">© {new Date().getFullYear()} SURAT4D. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

