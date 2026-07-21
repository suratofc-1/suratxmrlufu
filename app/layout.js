import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mainsurat.pages.dev"),
  title: {
    default: "SURAT4D | Solusi Layanan Digital yang Nyaman dan Aman",
    template: "%s | SURAT4D",
  },
  description:
    "SURAT4D adalah platform digital Indonesia yang menawarkan layanan modern, akses cepat, dukungan pelanggan 24 jam, dan sistem keamanan yang terpercaya.",
  keywords: [
    "SURAT4D",
    "SURAT4D AKSES",
    "LOGIN SURAT4D",
    "SURAT4D DAFTAR",
    "SURAT4D ALTERNATIF",
  ],
  alternates: {
    canonical: "https://mainsurat.pages.dev/",
  },
  verification: {
    google: "OoCTB5Tyzd2T1mYa3noTO5eAnc4BHilbv7rUwJJsvVQ",
  },
  openGraph: {
    title: "SURAT4D | Solusi Layanan Digital yang Nyaman dan Aman",
    description:
      "Temukan layanan digital yang cepat, aman, dan mudah diakses dengan dukungan pelanggan 24 jam.",
    url: "https://mainsurat.pages.dev/",
    siteName: "SURAT4D",
    images: [
      {
        url: "/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "SURAT4D platform digital Indonesia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAT4D | Solusi Layanan Digital yang Nyaman dan Aman",
    description:
      "Temukan layanan digital yang cepat, aman, dan mudah diakses dengan dukungan pelanggan 24 jam.",
    images: ["/thumbnail.webp"],
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
    icon: "/logo.png",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}