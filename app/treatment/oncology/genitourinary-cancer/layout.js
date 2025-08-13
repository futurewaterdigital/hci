import React from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export const metadata = {
  title: "Cerebral Palsy",
  description: "Healthcare International.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/genitourinary-cancer"
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
