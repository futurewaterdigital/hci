import React from "react";
import Script from "next/script"; // ✅ Needed for JSON-LD injection

export const metadata = {
  title: "Contact Healthcare International | Get in Touch Today",
  description:
    "Reach out to Healthcare International for all your medical tourism inquiries. Connect with our team to explore top healthcare services and patient care solutions in India.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/contact-us",
  },
  openGraph: {
    url: "https://healthcareinternational.in/contact-us",
    title: "Contact Healthcare International | Get in Touch Today",
    description:
      "Reach out to Healthcare International for all your medical tourism inquiries. Connect with our team to explore top healthcare services and patient care solutions in India.",
    images: [
      {
        url: "/images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Contact Healthcare International | Get in Touch Today",
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
      {children}

      {/* ✅ Add ContactPage schema (formatted output) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema, null, 2), // formatted
        }}
      />
    </>
  );
}
