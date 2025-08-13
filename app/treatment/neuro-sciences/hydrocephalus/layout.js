import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Hydrocephalus Treatment & CSF Management | Endoscopic Third Ventriculostomy",
  description: "Discover treatment options for hydrocephalus, including cerebrospinal fluid (CSF) management and endoscopic third ventriculostomy. Explore how RNS can help in managing hydrocephalus symptoms.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "etv, ultrasound, nausea, headache, csf, cerebrospinal fluid, cluster headaches",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/hydrocephalus",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Hydrocephalus Treatment & CSF Management | Endoscopic Third Ventriculostomy",
    description: "Discover treatment options for hydrocephalus, including cerebrospinal fluid (CSF) management and endoscopic third ventriculostomy. Explore how RNS can help in managing hydrocephalus symptoms.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Hydrocephalus Treatment & CSF Management | Endoscopic Third Ventriculostomy",
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
