import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "General Surgery | Gallbladder Treatments & Expert Surgeons Near You",
  description: "Discover expert general surgery services including gallbladder removal, gallstones treatment, and HIDA scan. Visit Healthcare International for advanced surgical care and find a general surgeon near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/others/general-surgery"
  },
  keywords: "healthcareinternational, hci, healthcare international, general surgery, gallbladder, general surgeon near me, gallstones, gall bladder issues, hida scan, cholecystectomy, gall stone symptoms, cholecystitis treatment",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "General Surgery | Gallbladder Treatments & Expert Surgeons Near You",
    description: "Discover expert general surgery services including gallbladder removal, gallstones treatment, and HIDA scan. Visit Healthcare International for advanced surgical care and find a general surgeon near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "General Surgery | Gallbladder Treatments & Expert Surgeons Near You",
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
