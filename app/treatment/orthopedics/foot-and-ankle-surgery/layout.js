import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Foot and Ankle Surgery | Fusion and Gait Analysis",
  description: "Discover advanced foot and ankle surgery options, including arthrodesis, ankle and subtalar fusion, and triple arthrodesis. Understand the role of gait analysis and 3D gait lab assessments in treatment planning and recovery.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "gait analysis, arthrodesis, ankle fusion, subtalar fusion, rheumatoid arthritis, Best Orthopedist in india, Best Orthopedist in the city, Best Orthopedist in Bengaluru, Best Orthopedist in Chennai, Best Orthopedist in Mumbai, Best Orthopedist in Hyderabad, Best Orthopedist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Foot and Ankle Surgery | Fusion and Gait Analysis",
    description: "Discover advanced foot and ankle surgery options, including arthrodesis, ankle and subtalar fusion, and triple arthrodesis. Understand the role of gait analysis and 3D gait lab assessments in treatment planning and recovery.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Foot and Ankle Surgery | Fusion and Gait Analysis",
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
