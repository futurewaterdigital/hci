import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Colon Polyps and Colon Cancer | Symptoms, Prevention & Surgery Options",
  description: "Understand colon polyps and their link to colon cancer. Explore prevention strategies, hereditary conditions like FAP, and advanced treatment options including robotic surgery for colon cancer.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "coloncancer, colonpolyps, Best Gastroentrologist in India, Best Gastroentrologist in the city, Best Gastroentrologist in Bengaluru, Best Gastroentrologist in Chennai, Best Gastroentrologist in Mumbai, Best Gastroentrologist in Hyderabad, Best Gastroentrologist in Delhi",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/gastroenterology/colon-polyps",
  },
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Colon Polyps and Colon Cancer | Symptoms, Prevention & Surgery Options",
    description: "Understand colon polyps and their link to colon cancer. Explore prevention strategies, hereditary conditions like FAP, and advanced treatment options including robotic surgery for colon cancer.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Colon Polyps and Colon Cancer | Symptoms, Prevention & Surgery Options",
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
