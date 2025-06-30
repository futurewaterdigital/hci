import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Brain Metastases: Diagnosis, Spinal Tap, SRT & Radiation Therapy",
  description: "Learn about brain metastases, spinal tap procedures, and treatment options like SRT, WBRT, and radiation therapy. Discover how to manage secondary brain tumours with advanced neuro-oncology care.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "metastases, brain metastases, spinal tap, seizure, nausea, headache, vomiting, srt, wbrt, radiationtherapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Brain Metastases: Diagnosis, Spinal Tap, SRT & Radiation Therapy",
    description: "Learn about brain metastases, spinal tap procedures, and treatment options like SRT, WBRT, and radiation therapy. Discover how to manage secondary brain tumours with advanced neuro-oncology care.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Brain Metastases: Diagnosis, Spinal Tap, SRT & Radiation Therapy",
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
