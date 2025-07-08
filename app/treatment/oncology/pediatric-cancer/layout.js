import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Pediatric Cancer Care: Retinoblastoma Treatment & Proton Therapy Options",
  description: "Discover advanced pediatric cancer care with targeted therapies including retinoblastoma treatment, radiation therapy, and access to proton therapy centres near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "pediatriccancer, wilmstumor, childhoodcancer, retinoblastoma, osteosarcoma, neuroblastoma, bone marrow, ewing sarcoma, radiationtherapy, protontherapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Pediatric Cancer Care: Retinoblastoma Treatment & Proton Therapy Options",
    description: "Discover advanced pediatric cancer care with targeted therapies including retinoblastoma treatment, radiation therapy, and access to proton therapy centres near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Pediatric Cancer Care: Retinoblastoma Treatment & Proton Therapy Options",
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
