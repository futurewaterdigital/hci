import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Chiari Malformation : Symptoms, Types & Advanced Treatments",
  description: "Explore Chiari malformation, including Type 1 and Arnold-Chiari malformation. Know about symptoms, diagnosis, and the latest treatments for Chiari 1 malformation.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "chiari malformation, chiari treatment, chiari 1 malformation, chiari one malformation, brain, cerebellum, cerebrospinal fluid",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Chiari Malformation : Symptoms, Types & Advanced Treatments",
    description: "Explore Chiari malformation, including Type 1 and Arnold-Chiari malformation. Know about symptoms, diagnosis, and the latest treatments for Chiari 1 malformation.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Chiari Malformation : Symptoms, Types & Advanced Treatments",
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
