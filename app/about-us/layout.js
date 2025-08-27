import React from "react";

export const metadata = {
  title: "About Healthcare International - Trusted Global Medical Partner",
  description:
    "Learn more about Healthcare International (HCI), your trusted partner in medical tourism, connecting you to world-class healthcare services across India. Discover our expertise in patient care, hospital networks, and seamless international medical coordination.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/about-us",
  },
  openGraph: {
    url: "https://healthcareinternational.in/about-us",
    title: "About Healthcare International - Trusted Global Medical Partner",
    description:
      "Learn more about Healthcare International (HCI), your trusted partner in medical tourism.",
    images: [
      {
        url: "/images/homeBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare International",
      },
    ],
  },
  icons: {
    icon: "/favicon_io/favicon-32x32.png",
    shortcut: "/favicon_io/favicon.ico",
  },
};

export default function AboutLayout({ children }) {
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
      {children}

      {/* ✅ Pretty-printed schema in View Page Source */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema, null, 2),
        }}
      />
    </>
  );
}
