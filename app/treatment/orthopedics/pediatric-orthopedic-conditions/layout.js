import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Pediatric Orthopedic Conditions | Child Orthopaedic Care & Support",
  description: "Explore paediatric orthopaedic care including bracing, splinting, and specialised treatments for joint, bone, and sports-related conditions. Find trusted orthopaedists and paediatric support near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/pediatric-orthopedic-conditions"
  },
  keywords: "pediatric, orthopedist, bracing, splinting, orthopedic near me, pediatrician near me, sports orthopedic, childrens hospital near me",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Pediatric Orthopedic Conditions | Child Orthopaedic Care & Support",
    description: "Explore paediatric orthopaedic care including bracing, splinting, and specialised treatments for joint, bone, and sports-related conditions. Find trusted orthopaedists and paediatric support near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Pediatric Orthopedic Conditions | Child Orthopaedic Care & Support",
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
