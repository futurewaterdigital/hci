import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gastric and Peptic Ulcers | H. Pylori Testing & Treatment Options",
  description: "Explore causes and treatments for gastric and peptic ulcers, including H. pylori infections. Find information on test kits, medication, antibiotics, and effective management strategies.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "gastriculcer, pepticulcer, hpylori, nausea, vomiting, Best Gastroentrologist in India, Best Gastroentrologist in the city, Best Gastroentrologist in Bengaluru, Best Gastroentrologist in Chennai, Best Gastroentrologist in Mumbai, Best Gastroentrologist in Hyderabad, Best Gastroentrologist in Delhi",
  alternates: { 
    canonical: "https://healthcareinternational.in/treatment/gastroenterology/gastric-ulcer",
  },

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gastric and Peptic Ulcers | H. Pylori Testing & Treatment Options",
    description: "Explore causes and treatments for gastric and peptic ulcers, including H. pylori infections. Find information on test kits, medication, antibiotics, and effective management strategies.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gastric and Peptic Ulcers | H. Pylori Testing & Treatment Options",
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
