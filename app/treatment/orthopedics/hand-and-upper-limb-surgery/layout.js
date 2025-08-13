import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Hand and Upper Limb Surgery | Splinting and Bracing Solutions",
  description: "Explore treatments for hand and upper limb conditions with a range of splints and braces including thumb, finger, wrist, and spica splints. Find support for injuries, rheumatoid arthritis, and post-surgical care with custom and ready-made options.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/hand-and-upper-limb-surgery"
  },
  keywords: "splinting, bracing, sprain, osteomyelitis, osteomyelitis disease, hand injuries, wrist bones, wrist, wrist brace, finger splint, thumb splint, wrist splint, mallet finger splint, pinky finger splint, ring splint, spica splint, broken finger splint, index finger splint, plantar fascia night splint, thermoplastic splint, finger extension splint, little finger splint, ribbond splint",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Hand and Upper Limb Surgery | Splinting and Bracing Solutions",
    description: "Explore treatments for hand and upper limb conditions with a range of splints and braces including thumb, finger, wrist, and spica splints. Find support for injuries, rheumatoid arthritis, and post-surgical care with custom and ready-made options.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Hand and Upper Limb Surgery | Splinting and Bracing Solutions",
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
