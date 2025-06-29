import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Liver Cancer Treatment: Hepatitis Care, Transplants & LFT Testing",
  description: "Explore advanced liver cancer care including hepatitis B & C treatment, liver function tests (LFT), AFP screening, liver transplant options, and hepatectomy procedures.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "hepatitis b, hepatitis c, livercancer, hepatitis d, hepatitis treatment, livertransplant, ebrt, protontherapy, sbrt, liver transplant surgery",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Liver Cancer Treatment: Hepatitis Care, Transplants & LFT Testing",
    description: "Explore advanced liver cancer care including hepatitis B & C treatment, liver function tests (LFT), AFP screening, liver transplant options, and hepatectomy procedures.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Liver Cancer Treatment: Hepatitis Care, Transplants & LFT Testing",
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
