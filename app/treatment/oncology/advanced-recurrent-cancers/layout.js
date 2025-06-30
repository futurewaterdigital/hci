import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Advanced & Recurrent Cancer: Radiation Therapy and Technological Advancements",
  description: "Explore comprehensive treatment for advanced and recurrent cancers with cutting-edge radiation therapy, including options for prostate cancer, lung cancer, and melanoma. Know about side effects and advancements in medical physics and radiation therapy technologist programmes.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "metastaticcancer, genetictesting, radiationtherapy, lung, liver, car t",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Advanced & Recurrent Cancer: Radiation Therapy and Technological Advancements",
    description: "Explore comprehensive treatment for advanced and recurrent cancers with cutting-edge radiation therapy, including options for prostate cancer, lung cancer, and melanoma. Know about side effects and advancements in medical physics and radiation therapy technologist programmes.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Advanced & Recurrent Cancer: Radiation Therapy and Technological Advancements",
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
