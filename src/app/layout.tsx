import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NZ-لمعلم | نظام إدارة متكامل للمبيعات والمخزون",
    template: "%s | NZ-لمعلم",
  },
  description:
    "نظام متكامل للمبيعات والمخزون والعملاء والتقارير مصمم خصيصاً للسوق الليبي والعربي. برنامج نقاط بيع، إدارة مخزون، محاسبة، ERP مع دعم الباركود والميزان.",
  keywords: [
    "برنامج مبيعات",
    "برنامج مخزون",
    "برنامج نقاط بيع",
    "برنامج سوبر ماركت",
    "برنامج محاسبة",
    "برنامج ERP",
    "POS Libya",
    "ERP Libya",
    "Inventory Management",
    "Retail POS System",
    "نظام إدارة متكامل",
    "برنامج بيع",
    "برنامج إدارة مخزون",
    "نظام نقاط البيع",
    "برنامج محلات تجارية",
  ],
  authors: [{ name: "NZ-84" }],
  creator: "NZ-84",
  publisher: "NZ-84",
  metadataBase: new URL("https://nz-limalam.com"),
  openGraph: {
    type: "website",
    locale: "ar_LY",
    alternateLocale: "en_US",
    siteName: "NZ-لمعلم",
    title: "NZ-لمعلم | نظام إدارة متكامل للمبيعات والمخزون",
    description:
      "نظام متكامل للمبيعات والمخزون والعملاء والتقارير مصمم خصيصاً للسوق الليبي والعربي",
    url: "https://nz-limalam.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NZ-لمعلم - نظام إدارة متكامل",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nz_limalam",
    creator: "@nz_limalam",
    title: "NZ-لمعلم | نظام إدارة متكامل",
    description:
      "نظام متكامل للمبيعات والمخزون والعملاء والتقارير مصمم خصيصاً للسوق الليبي والعربي",
    images: ["/images/og-image.png"],
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
  alternates: {
    canonical: "https://nz-limalam.com",
    languages: {
      "ar-LY": "https://nz-limalam.com",
      "en-US": "https://nz-limalam.com/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NZ-لمعلم",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Android",
    description:
      "نظام متكامل للمبيعات والمخزون والعملاء والتقارير مصمم خصيصاً للسوق الليبي والعربي",
    offers: {
      "@type": "Offer",
      price: "49",
      priceCurrency: "LYD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
    },
    author: { "@type": "Organization", name: "NZ-84" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125",
      bestRating: "5",
    },
  };

  return (
    <html
      lang="ar"
      dir="rtl"
      className={cairo.variable}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
