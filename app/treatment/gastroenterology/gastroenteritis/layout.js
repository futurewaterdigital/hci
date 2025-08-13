import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gastroenteritis: Causes, Symptoms & Treatment Options",
  description: "Get insights on gastroenteritis, commonly known as stomach flu. Explore symptoms, causes, and available treatments including detox and gut health support.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "stomach flu, detoxification, detox, gastroenteritis treatments, stomach bug symptoms, nausea, vomiting, diarrhoea",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/gastroenterology/gastroenteritis",
  },
 
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gastroenteritis: Causes, Symptoms & Treatment Options",
    description: "Get insights on gastroenteritis, commonly known as stomach flu. Explore symptoms, causes, and available treatments including detox and gut health support.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gastroenteritis: Causes, Symptoms & Treatment Options",
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
