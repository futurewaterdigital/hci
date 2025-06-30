import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Robotic Knee Replacement Surgery & Arthritis Treatment Options",
  description: "Understand robotic knee replacement techniques, surgical types, and rheumatoid arthritis management. Discover minimally invasive options, recovery insights, and specialists near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "robotic knee replacement, knee replacement surgery, rheumatoid arthritis, knee surgery, ra treatment, full knee replacement, Best Orthopedist in india, Best Orthopedist in the city, Best Orthopedist in Bengaluru, Best Orthopedist in Chennai, Best Orthopedist in Mumbai, Best Orthopedist in Hyderabad, Best Orthopedist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Robotic Knee Replacement Surgery & Arthritis Treatment Options",
    description: "Understand robotic knee replacement techniques, surgical types, and rheumatoid arthritis management. Discover minimally invasive options, recovery insights, and specialists near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Robotic Knee Replacement Surgery & Arthritis Treatment Options",
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
