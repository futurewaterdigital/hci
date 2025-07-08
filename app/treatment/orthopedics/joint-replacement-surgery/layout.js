import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Joint Replacement Surgery & Rheumatoid Arthritis Care",
  description: "Explore treatment options for rheumatoid arthritis and joint damage. Find information on knee and hip replacement procedures, surgical advancements, recovery methods, and arthritis management.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "arthroplasty, rheumatoid arthritis, knee replacement, ra treatment, hip replacement cost, Best Orthopedist in india, Best Orthopedist in the city, Best Orthopedist in Bengaluru, Best Orthopedist in Chennai, Best Orthopedist in Mumbai, Best Orthopedist in Hyderabad, Best Orthopedist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Joint Replacement Surgery & Rheumatoid Arthritis Care",
    description: "Explore treatment options for rheumatoid arthritis and joint damage. Find information on knee and hip replacement procedures, surgical advancements, recovery methods, and arthritis management.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Joint Replacement Surgery & Rheumatoid Arthritis Care",
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
