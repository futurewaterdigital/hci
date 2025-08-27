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
  // ✅ Example Contact Page Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://www.healthcareinternational.in/contact-us",
    name: "Contact Healthcare International",
    description:
      "Get in touch with Healthcare International for medical tourism inquiries and healthcare solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "Healthcare International",
      url: "https://www.healthcareinternational.in/",
      logo: "https://www.healthcareinternational.in/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXXXXXXXXX",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Tamil"],
      },
    },
  };

  return (
    <>
      {children}

      {/* ✅ Add ContactPage schema (formatted output) */}
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(contactSchema, null, 2)}
      </Script>
    </>
  );
}
