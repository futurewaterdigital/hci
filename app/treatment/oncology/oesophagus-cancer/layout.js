import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Oesophagus Cancer Treatment: Esophagectomy & Radiation Therapy",
  description: "Get expert care for oesophageal cancer with treatments like esophagectomy, esophagogastrectomy, and bladder cancer radiation therapy for complex cases.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/oesophagus-cancer"
  },
  keywords: "esophagectomy, esophagogastrectomy, protontherapy, oesophagus, gerd, gastroesophageal reflux disease, acid reflux, heartburn",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Oesophagus Cancer Treatment: Esophagectomy & Radiation Therapy",
    description: "Get expert care for oesophageal cancer with treatments like esophagectomy, esophagogastrectomy, and bladder cancer radiation therapy for complex cases.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Oesophagus Cancer Treatment: Esophagectomy & Radiation Therapy",
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
