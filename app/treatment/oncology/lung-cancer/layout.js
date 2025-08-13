import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Lung Cancer: Diagnosis, Surgery & Advanced Treatment Options",
  description: "Discover treatment options for lung cancer, including pneumonectomy, proton therapy, and targeted therapy. Learn about small cell and non-small cell lung cancer, survival rates, and stage-wise care.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/lung-cancer"
  },
  keywords: "lung cancer, pneumonectomy, protontherapy, targeted therapy, small cell lung cancer, non small cell lung cancer, stage 4 lung cancer, stage 1 lung cancer symptoms, types of lung cancer, stage 4 lung cancer symptoms, lung, small cell carcinoma lung cancer",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Lung Cancer: Diagnosis, Surgery & Advanced Treatment Options",
    description: "Discover treatment options for lung cancer, including pneumonectomy, proton therapy, and targeted therapy. Learn about small cell and non-small cell lung cancer, survival rates, and stage-wise care.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Lung Cancer: Diagnosis, Surgery & Advanced Treatment Options",
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
