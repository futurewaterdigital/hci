import React from "react";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";
import Script from "next/script";

export const metadata = {
  title: "Our Services",
  description: "Healthcare International.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/our-services",
  },
  openGraph: {
    url: "https://healthcareinternational.in/our-services",
    title: "Healthcare International",
    description: "Healthcare International",
    images: [
      {
        url: "/images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Healthcare International",
      },
    ],
  },
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebPage",
          url: "https://www.healthcareinternational.in/about-us",
          name: "About Us",
          description:
            "HCI has forged enduring alliances with some of India’s best known names in healthcare to offer patients a range of advanced treatments and procedures in various cities of their choice. We offer patients access to competent specialists, proven treatment protocols, and the best possible care, giving them the best possible chance of recovery.",
          provider: {
            "@type": "Organization",
            name: "Healthcare International",
            sameAs: "https://www.healthcareinternational.in",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebPage",
          url: "https://www.healthcareinternational.in/our-services",
          name: "Healthcare International Services",
          description:
            "Healthcare International (HCI) is your trusted partner, supporting you at every stage of your medical journey.",
          provider: {
            "@type": "Organization",
            name: "Healthcare International",
            sameAs: "https://www.healthcareinternational.in",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebPage",
          url: "https://www.healthcareinternational.in/contact-us",
          name: "HCI Contact Us",
          description:
            "Healthcare International is committed to building a strong, dependable healthcare universe that supports both patients and partners.",
          provider: {
            "@type": "Organization",
            name: "Healthcare International",
            sameAs: "https://www.healthcareinternational.in/",
          },
        },
      },
    ],
  };

  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* ✅ Structured Data for SEO */}
      <Script id="our-services-itemlist-schema" type="application/ld+json">
        {JSON.stringify(itemListSchema)}
      </Script>
    </>
  );
}
