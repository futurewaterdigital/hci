import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Trigeminal Neuralgia and Rhizotomy Options | Symptoms & Procedures",
  description: "Understand trigeminal neuralgia (tic douloureux), its symptoms, and treatment options including radiofrequency and endoscopic rhizotomy. Explore procedures, potential side effects, and surgical considerations.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "tic douloureux, rhizotomy, ms, multiple sclerosis, trauma, trigeminalnerve",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/trigeminal-neuralgia",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Trigeminal Neuralgia and Rhizotomy Options | Symptoms & Procedures",
    description: "Understand trigeminal neuralgia (tic douloureux), its symptoms, and treatment options including radiofrequency and endoscopic rhizotomy. Explore procedures, potential side effects, and surgical considerations.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Trigeminal Neuralgia and Rhizotomy Options | Symptoms & Procedures",
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
