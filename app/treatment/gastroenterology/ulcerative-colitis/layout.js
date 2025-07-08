import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Ulcerative Colitis: Causes, Symptoms & Treatment Approaches",
  description: "Explore ulcerative colitis, a chronic inflammatory bowel condition. Understand symptoms, possible causes, treatment options, and supportive therapies for managing intestinal inflammation.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "ulcerative colitis, ibd, uc treatment, intestinal inflammation, inflamed intestines treatment, natural remedies for colitis, nausea, fever, diarrhoea",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Ulcerative Colitis: Causes, Symptoms & Treatment Approaches",
    description: "Explore ulcerative colitis, a chronic inflammatory bowel condition. Understand symptoms, possible causes, treatment options, and supportive therapies for managing intestinal inflammation.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Ulcerative Colitis: Causes, Symptoms & Treatment Approaches",
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
