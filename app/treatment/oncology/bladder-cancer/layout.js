import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Bladder Cancer: Diagnosis, Treatment & Surgery Options",
  description: "lung cancer, pneumonectomy, protontherapy, targeted therapy, small cell lung cancer, non small cell lung cancer, stage 4 lung cancer, stage 1 lung cancer symptoms, types of lung cancer, stage 4 lung cancer symptoms, lung, small cell carcinoma lung cancer",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/bladder-cancer"
  },
  keywords: "bladder cancer, urinary bladder cancer, cystoscopy, urothelial carcinoma, bladder, smoking, cystoscopy procedure, protontherapy, targeted therapy",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Bladder Cancer: Diagnosis, Treatment & Surgery Options",
    description: "lung cancer, pneumonectomy, protontherapy, targeted therapy, small cell lung cancer, non small cell lung cancer, stage 4 lung cancer, stage 1 lung cancer symptoms, types of lung cancer, stage 4 lung cancer symptoms, lung, small cell carcinoma lung cancer",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Bladder Cancer: Diagnosis, Treatment & Surgery Options",
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
