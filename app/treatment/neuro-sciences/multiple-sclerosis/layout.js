import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Multiple Sclerosis Treatment & Diagnosis | Disease Modifying Therapies & Plasma Exchange",
  description: "Explore treatment options for multiple sclerosis (MS), including disease-modifying therapies (DMT), plasma exchange, and corticosteroids. Learn about MS diagnosis, PPMS, and topical corticosteroid treatments like clobetasol and triamcinolone.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "multiplesclerosis, ms, spinal tap, disease modifying therapies, dmt, plasma exchange, corticosteroids, clobetasol, triamcinolone cream, ppms",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Multiple Sclerosis Treatment & Diagnosis | Disease Modifying Therapies & Plasma Exchange",
    description: "Explore treatment options for multiple sclerosis (MS), including disease-modifying therapies (DMT), plasma exchange, and corticosteroids. Learn about MS diagnosis, PPMS, and topical corticosteroid treatments like clobetasol and triamcinolone.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Multiple Sclerosis Treatment & Diagnosis | Disease Modifying Therapies & Plasma Exchange",
      },
    ],
  },
  icons: {
    icon: "favicon_io/favicon-32x32.png",
    shortcut: "favicon_io/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
