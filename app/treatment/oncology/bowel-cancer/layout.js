import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Bowel Cancer: Symptoms, Treatment & IBD Care | Crohn's & Ulcerative Colitis",
  description: "Understand bowel cancer and its link to Crohn's disease and ulcerative colitis. Explore symptoms, diagnosis, latest treatments, and diet tips for long-term management.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/bowel-cancer"
  },
  keywords: "coloncancer, rectalcancer, gicancer, fit, fobt, crohn's disease, colectomy, radiationtherapy, targetedtherapy, protontherapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Bowel Cancer: Symptoms, Treatment & IBD Care | Crohn’s & Ulcerative Colitis",
    description: "Understand bowel cancer and its link to Crohn's disease and ulcerative colitis. Explore symptoms, diagnosis, latest treatments, and diet tips for long-term management.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Bowel Cancer: Symptoms, Treatment & IBD Care | Crohn’s & Ulcerative Colitis",
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
