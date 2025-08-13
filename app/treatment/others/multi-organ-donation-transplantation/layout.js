import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Multi-Organ Donation & Transplantation | Liver, Kidney, Heart & Lung Transplants",
  description: "Discover advanced multi-organ transplantation services including liver, kidney, heart, lung, and pancreas transplants. Learn about costs, living donors, and success rates at leading hospitals.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/others/multi-organ-donation-transplantation"
  },
  keywords: "asthma, peak flow meter, vaccination, pediatrician, newborn",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Multi-Organ Donation & Transplantation | Liver, Kidney, Heart & Lung Transplants",
    description: "Discover advanced multi-organ transplantation services including liver, kidney, heart, lung, and pancreas transplants. Learn about costs, living donors, and success rates at leading hospitals.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Multi-Organ Donation & Transplantation | Liver, Kidney, Heart & Lung Transplants",
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
