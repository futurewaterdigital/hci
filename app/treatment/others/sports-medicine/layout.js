import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Advanced Sports Medicine Care | Knee Cartilage & Injury Treatment",
  description: "Get expert treatment for sports-related injuries including knee cartilage damage, chondromalacia patella, and meniscus issues. Non-surgical and regenerative options available.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "injury prevention, physical rehabilitation, exercise counselling, shoulder injuries, nutritionist, nutritionist near me, asthma",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Advanced Sports Medicine Care | Knee Cartilage & Injury Treatment",
    description: "Get expert treatment for sports-related injuries including knee cartilage damage, chondromalacia patella, and meniscus issues. Non-surgical and regenerative options available.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Advanced Sports Medicine Care | Knee Cartilage & Injury Treatment",
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
