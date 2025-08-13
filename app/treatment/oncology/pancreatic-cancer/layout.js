import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Pancreatic Cancer Treatment: Whipple Procedure & Targeted Therapy",
  description: "Explore advanced care for pancreatic cancer including adenocarcinoma treatment, pancreatectomy, radiation therapy, targeted therapy, and Whipple procedure for stage 4 cases.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/pancreatic-cancer"
  },
  keywords: "pancreatic adenocarcinoma, pancreaticcancer, pnet, parp inhibitor, radiationtherapy, targetedtherapy, whippleprocedure, nausea",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Pancreatic Cancer Treatment: Whipple Procedure & Targeted Therapy",
    description: "Explore advanced care for pancreatic cancer including adenocarcinoma treatment, pancreatectomy, radiation therapy, targeted therapy, and Whipple procedure for stage 4 cases.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Pancreatic Cancer Treatment: Whipple Procedure & Targeted Therapy",
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
