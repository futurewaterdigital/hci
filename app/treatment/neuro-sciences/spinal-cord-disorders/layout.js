import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Spinal Cord Disorders: Cervical Damage & Treatment Options",
  description: "Explore spinal cord disorders, including cervical spinal cord damage and available treatments. Learn about symptoms, spinal cord damage recovery, and advanced care options.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "inflamation, surgery, recovery, spinal cord, apoptosis, regeneration, multiple sclerosis, disorder, spinal canal, spinal column, pott's disease, spinal muscular atrophy",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/spinal-cord-disorders",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Spinal Cord Disorders: Cervical Damage & Treatment Options",
    description: "Explore spinal cord disorders, including cervical spinal cord damage and available treatments. Learn about symptoms, spinal cord damage recovery, and advanced care options.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Spinal Cord Disorders: Cervical Damage & Treatment Options",
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
