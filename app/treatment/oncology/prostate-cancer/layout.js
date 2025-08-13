import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Prostate Cancer: Advanced Treatment, Screening & Supportive Care",
  description: "Explore comprehensive prostate cancer care including PSA tests, DRE, brachytherapy, hormone therapy, proton therapy, surgery, and supportive treatments for all stages.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/prostate-cancer"
  },
  keywords: "prostate cancer, signs of prostate cancer, stage 1 prostate cancer symptoms, metastatic prostate cancer, prostate problems, prostatitis treatment, blood, sbrt, protontherapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Prostate Cancer: Advanced Treatment, Screening & Supportive Care",
    description: "Explore comprehensive prostate cancer care including PSA tests, DRE, brachytherapy, hormone therapy, proton therapy, surgery, and supportive treatments for all stages.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Prostate Cancer: Advanced Treatment, Screening & Supportive Care",
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
