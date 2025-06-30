import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gastroesophageal Reflux Disease (GERD): Symptoms & Treatment Options",
  description: "Understand gastroesophageal reflux disease (GERD), acid reflux, and heartburn. Discover effective treatment options, over-the-counter medicines, and remedies to manage symptoms.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "gerd, gastroesophageal reflux disease, acid reflux, heartburn, reflux, laryngitis, Best Gastroentrologist in India, Best Gastroentrologist in the city, Best Gastroentrologist in Bengaluru, Best Gastroentrologist in Chennai, Best Gastroentrologist in Mumbai, Best Gastroentrologist in Hyderabad, Best Gastroentrologist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gastroesophageal Reflux Disease (GERD): Symptoms & Treatment Options",
    description: "Understand gastroesophageal reflux disease (GERD), acid reflux, and heartburn. Discover effective treatment options, over-the-counter medicines, and remedies to manage symptoms.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gastroesophageal Reflux Disease (GERD): Symptoms & Treatment Options",
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
