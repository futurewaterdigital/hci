import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Parkinson's Disease & Movement Disorders | EMG Testing & Neuro Care",
  description: "Get insights on Parkinson's disease and other movement disorders. Access electromyography (EMG) testing services, understand micrographia, and explore care for neurodegenerative conditions.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "brain damage, neurodegenerative disorders, electromyography, micrographia, emg testing, brain, dystonia",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/parkinsons-disease-and-movement-disorders",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Parkinson's Disease & Movement Disorders | EMG Testing & Neuro Care",
    description: "Get insights on Parkinson's disease and other movement disorders. Access electromyography (EMG) testing services, understand micrographia, and explore care for neurodegenerative conditions.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Parkinson's Disease & Movement Disorders | EMG Testing & Neuro Care",
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
