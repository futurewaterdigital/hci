import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gallbladder Cancer: Surgery, Brachytherapy & Proton Therapy Options",
  description: "Learn about gallbladder cancer treatment including cholecystectomy, lap and open surgery, brachytherapy, and proton therapy options near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/gallbladder-cancer"
  },
  keywords: "gallbladder, bile, gallstones, chronic inflammation, cholecystitis, familial adenomatous, cholecystectomy, Best Oncologist in India, Best Oncologist in the city, Best Oncologist in Bengaluru, Best Oncologist in Chennai, Best Oncologist in Mumbai, Best Oncologist in Hyderabad, Best Oncologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gallbladder Cancer: Surgery, Brachytherapy & Proton Therapy Options",
    description: "Learn about gallbladder cancer treatment including cholecystectomy, lap and open surgery, brachytherapy, and proton therapy options near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gallbladder Cancer: Surgery, Brachytherapy & Proton Therapy Options",
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
