import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Seizure Disorders | Diagnosis, Types & Treatment Options",
  description: "Explore types of seizure disorders including focal, tonic-clonic, and febrile seizures. Access information on encephalitis, PNES treatment, vagus nerve stimulators, and find specialists near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "seizure, encephalitis, epileptologist near me, febrile convulsions, pnes treatment, vagus stimulator, vns stimulator",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/seizure-disorders",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Seizure Disorders | Diagnosis, Types & Treatment Options",
    description: "Explore types of seizure disorders including focal, tonic-clonic, and febrile seizures. Access information on encephalitis, PNES treatment, vagus nerve stimulators, and find specialists near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Seizure Disorders | Diagnosis, Types & Treatment Options",
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
