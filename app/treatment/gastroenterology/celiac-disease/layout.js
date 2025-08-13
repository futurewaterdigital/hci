import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Celiac Disease | Symptoms, Diagnosis & Gluten-Free Diet Management",
  description: "Explore the symptoms and causes of celiac disease, gluten and wheat intolerance, and gut-related issues. Find guidance on testing, non-celiac gluten sensitivity, and managing the condition with a gluten-free diet.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "celiacdisease, celiac, gut infection, glutenfree diet, gluten intolerance, wheat intolerance, gluten, intestine, diarrhoea, nausea",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/gastroenterology/celiac-disease",
  },

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Celiac Disease | Symptoms, Diagnosis & Gluten-Free Diet Management",
    description: "Explore the symptoms and causes of celiac disease, gluten and wheat intolerance, and gut-related issues. Find guidance on testing, non-celiac gluten sensitivity, and managing the condition with a gluten-free diet.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Celiac Disease | Symptoms, Diagnosis & Gluten-Free Diet Management",
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
