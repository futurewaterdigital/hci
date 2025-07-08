import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Diverticulitis and Diverticular Disease | Symptoms, Diet & Treatment Options",
  description: "Understand diverticulitis and diverticular disease including colonic and sigmoid diverticulosis. Get insights on symptoms, recommended diet plans, and available treatment options for better digestive health.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "diverticulosis, diverticular disease, nausea, diverticula, Best Gastroentrologist in India, Best Gastroentrologist in the city, Best Gastroentrologist in Bengaluru, Best Gastroentrologist in Chennai, Best Gastroentrologist in Mumbai, Best Gastroentrologist in Hyderabad, Best Gastroentrologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Diverticulitis and Diverticular Disease | Symptoms, Diet & Treatment Options",
    description: "Understand diverticulitis and diverticular disease including colonic and sigmoid diverticulosis. Get insights on symptoms, recommended diet plans, and available treatment options for better digestive health.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Diverticulitis and Diverticular Disease | Symptoms, Diet & Treatment Options",
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
