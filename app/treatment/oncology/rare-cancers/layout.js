import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Rare Cancer Treatment: Osteosarcoma, Rhabdomyosarcoma & Laser Therapy Options",
  description: "Get expert care for rare cancers like osteosarcoma and rhabdomyosarcoma. Discover advanced therapies including cold laser therapy, LLLT, and liposarcoma treatment. Find laser therapy near you for pain relief and recovery.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "rarecancer, rhabdomyosarcoma, liposarcoma, osteosarcoma, neuroendocrinetumor, leukocoria, nausea, retinoblastoma, angiosarcoma, car t, radiationtherapy, protontherapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Rare Cancer Treatment: Osteosarcoma, Rhabdomyosarcoma & Laser Therapy Options",
    description: "Get expert care for rare cancers like osteosarcoma and rhabdomyosarcoma. Discover advanced therapies including cold laser therapy, LLLT, and liposarcoma treatment. Find laser therapy near you for pain relief and recovery.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Rare Cancer Treatment: Osteosarcoma, Rhabdomyosarcoma & Laser Therapy Options",
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
