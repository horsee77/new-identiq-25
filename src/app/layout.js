import "../../public/assets/css/plugins/fontawesome.css";
import "../../public/assets/css/plugins/magnifying-popup.css";
import "../../public/assets/css/plugins/swiper.css";
import "../../public/assets/css/plugins/metismenu.css";
import "../../public/assets/css/vendor/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "../../public/assets/css/style.css";

import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://identiq.com.br"),
  title: "Identiq | Verificação de Identidade, KYC e Antifraude",
  description:
    "Plataforma de verificação de identidade, KYC e prevenção a fraudes para empresas. Onboarding seguro, biometria, validação de documentos e compliance.",
  applicationName: "Identiq",
  authors: [{ name: "Identiq" }],
  keywords: [
    "verificação de identidade",
    "KYC",
    "antifraude",
    "prevenção a fraudes",
    "biometria",
    "validação de documentos",
    "compliance",
    "AML",
    "screening",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/images/fav.png",
    shortcut: "/assets/images/fav.png",
    apple: "/assets/images/fav.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://identiq.com.br/",
    siteName: "Identiq",
    title: "Identiq | Verificação de Identidade, KYC e Antifraude",
    description:
      "Verificação de identidade e prevenção a fraudes para empresas. KYC, biometria, validação de documentos e compliance.",
    images: [
      {
        url: "/assets/images/og/identiq-og.png",
        width: 1200,
        height: 630,
        alt: "Identiq - Verificação de Identidade, KYC e Antifraude",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Identiq | Verificação de Identidade, KYC e Antifraude",
    description:
      "Verificação de identidade e prevenção a fraudes para empresas. KYC, biometria, validação de documentos e compliance.",
    images: ["/assets/images/og/identiq-og.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1220",
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Identiq",
    url: "https://identiq.com.br/",
    logo: "https://identiq.com.br/assets/images/logo/identiq-logo.png",
    description:
      "Plataforma de verificação de identidade, KYC e prevenção a fraudes para empresas.",
    sameAs: [
      "https://www.linkedin.com/company/identiq",
      "https://www.instagram.com/identiq",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Identiq",
    url: "https://identiq.com.br/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://identiq.com.br/busca?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="pt-BR">
      <body className="index-one">
        {children}

        {/* JSON-LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Preconnects (se realmente usar Google Fonts no projeto) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Scripts do template */}
        <Script src="/assets/js/plugins/smooth-scroll.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}