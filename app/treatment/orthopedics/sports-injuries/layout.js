import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Sports Injuries: Treatment, Recovery & Specialist Care Near You",
  description: "Explore effective treatments for sports injuries, from bone fracture healing to advanced orthopaedic care. Locate top sports injury hospitals and specialists near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/sports-injuries"
  },
  keywords: "sportsinjury, how to heal bone fracture fast, how to heal a broken bone, a sports injury, ligament tears, ligament, knee ligaments, sprain, knee joint ligaments, ankle ligament sprain, joint, pulled ankle ligament",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Sports Injuries: Treatment, Recovery & Specialist Care Near You",
    description: "Explore effective treatments for sports injuries, from bone fracture healing to advanced orthopaedic care. Locate top sports injury hospitals and specialists near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Sports Injuries: Treatment, Recovery & Specialist Care Near You",
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
