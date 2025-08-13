import React from "react";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page";

export const metadata = {
  title: "About Healthcare International - Trusted Global Medical Partner",
  description: "Learn more about Healthcare International (HCI), your trusted partner in medical tourism, connecting you to world-class healthcare services across India. Discover our expertise in patient care, hospital networks, and seamless international medical coordination.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/about-us",
  },
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Healthcare International",
    description: "Healthcare International",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Healthcare International",
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
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
