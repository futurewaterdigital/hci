import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gallbladder Stones | Causes, Symptoms, Diagnosis & Treatment Options",
  description: "Discover common causes and symptoms of gallbladder stones. Explore diagnostic tools like HIDA scan, treatment options such as cholecystectomy, non-surgical remedies, and diet tips for gallstone management.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "gallbladder, gallstones, gall bladder issues, hida scan, cholecystectomy, cholelithiasis, gall stone, cholecystitis treatment",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gallbladder Stones | Causes, Symptoms, Diagnosis & Treatment Options",
    description: "Discover common causes and symptoms of gallbladder stones. Explore diagnostic tools like HIDA scan, treatment options such as cholecystectomy, non-surgical remedies, and diet tips for gallstone management.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gallbladder Stones | Causes, Symptoms, Diagnosis & Treatment Options",
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
