import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://suratxmrlufu.pages.dev"),
  title: {
    default: "SURAT4D — Akses Permainan Online Pilihan dengan Layanan Terpercaya",
    template: "%s | SURAT4D",
  },
  description:
    "SURAT4D menghadirkan akses permainan online dengan tampilan modern, navigasi praktis, serta layanan yang dirancang untuk memberikan pengalaman nyaman bagi pengguna. Temukan informasi permainan, fitur unggulan, dan akses SURAT4D dalam satu platform yang mudah digunakan.",
  keywords: [
    "SURAT4D",
    "SURAT4D AKSES",
    "LOGIN SURAT4D",
    "SURAT4D DAFTAR",
    "SURAT4D ALTERNATIF",
  ],
  alternates: {
    canonical: "https://suratxmrlufu.pages.dev/",
  },
  verification: {
    google: "Rjok25XKnyydWvMR10Iw7ypwr8VEUW3hDvf--Za_Txo",
  },
  openGraph: {
    title: "SURAT4D — Akses Permainan Online Pilihan dengan Layanan Terpercaya",
    description:
      "SURAT4D menghadirkan akses permainan online dengan tampilan modern, navigasi praktis, serta layanan yang dirancang untuk memberikan pengalaman nyaman bagi pengguna. Temukan informasi permainan, fitur unggulan, dan akses SURAT4D dalam satu platform yang mudah digunakan.",
    url: "https://suratxmrlufu.pages.dev/",
    siteName: "SURAT4D",
    images: [
      {
        url: "/logo-surat4d.png",
        width: 1200,
        height: 630,
        alt: "SURAT4D platform digital Indonesia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAT4D — Akses Permainan Online Pilihan dengan Layanan Terpercaya",
    description:
      "SURAT4D menghadirkan akses permainan online dengan tampilan modern, navigasi praktis, serta layanan yang dirancang untuk memberikan pengalaman nyaman bagi pengguna. Temukan informasi permainan, fitur unggulan, dan akses SURAT4D dalam satu platform yang mudah digunakan.",
    images: ["/logo-surat4d.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo-surat4d.png",
    apple: "/logo-surat4d.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1022",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://suratxmrlufu.pages.dev/" />
        <Script
          id="site-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SURAT4D",
            url: "https://suratxmrlufu.pages.dev/",
            description: "Platform digital Indonesia yang memberikan layanan modern, akses cepat, dukungan pelanggan 24 jam, dan pengalaman pengguna yang aman.",
            publisher: {
              "@type": "Organization",
              name: "SURAT4D",
              url: "https://suratxmrlufu.pages.dev/",
              logo: "https://suratxmrlufu.pages.dev/logo-surat4d.png",
              sameAs: ["https://facebook.com/mainsurat4d/","https://twitter.com/mainsurat4d/"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+6285373208436",
                  contactType: "customer support",
                  areaServed: "ID",
                  availableLanguage: ["Indonesian","English"]
                }
              ]
            }
          }) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}