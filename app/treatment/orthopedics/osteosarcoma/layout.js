import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Osteosarcoma | Treatment Options and Cryosurgery Support",
  description: "Understand osteosarcoma and its treatment options including chemotherapy and cryosurgery. Access support for bone cancer care and explore local cryosurgery services for improved outcomes.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/osteosarcoma"
  },
  keywords: "osteosarcoma, cryosurgery, osteosarcom, wrist bones, bones, tibia, limping, humerus, osteosarcoma treatment, cryotherapy skin tag, chemotherapy for osteosarcoma",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Osteosarcoma | Treatment Options and Cryosurgery Support",
    description: "Understand osteosarcoma and its treatment options including chemotherapy and cryosurgery. Access support for bone cancer care and explore local cryosurgery services for improved outcomes.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Osteosarcoma | Treatment Options and Cryosurgery Support",
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
