import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gastritis: Types, Causes & Treatment Approaches",
  description: "Understand different forms of gastritis including acute, erosive, and atrophic. Explore symptoms, causes, and available treatments for effective relief and digestive health management.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "acute gastritis, atrophic gastritis, erosive gastritis, acute pangastritis, nausea, vomiting",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gastritis: Types, Causes & Treatment Approaches",
    description: "Understand different forms of gastritis including acute, erosive, and atrophic. Explore symptoms, causes, and available treatments for effective relief and digestive health management.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gastritis: Types, Causes & Treatment Approaches",
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
