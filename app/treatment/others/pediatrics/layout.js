import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Comprehensive Pediatric Asthma Care | Diagnosis & Treatment Options",
  description: "Expert care for children with asthma – from diagnosis and inhaler therapy to allergy management and severe asthma treatment. Find asthma specialists and supportive therapies near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "asthma, peak flow meter, vaccination, pediatrician, newborn",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Comprehensive Pediatric Asthma Care | Diagnosis & Treatment Options",
    description: "Expert care for children with asthma – from diagnosis and inhaler therapy to allergy management and severe asthma treatment. Find asthma specialists and supportive therapies near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Comprehensive Pediatric Asthma Care | Diagnosis & Treatment Options",
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
