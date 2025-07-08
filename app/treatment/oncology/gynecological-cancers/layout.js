import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gynecological Cancer | Hysterectomy Surgery, TVS Ultrasound & Uterus Operation",
  description: "Explore gynecological cancer treatments including hysterectomy, uterus operation, and TVS ultrasound. Know costs, recovery, and find top hysterectomy surgeons near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gynecological Cancer | Hysterectomy Surgery, TVS Ultrasound & Uterus Operation",
    description: "Explore gynecological cancer treatments including hysterectomy, uterus operation, and TVS ultrasound. Know costs, recovery, and find top hysterectomy surgeons near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gynecological Cancer | Hysterectomy Surgery, TVS Ultrasound & Uterus Operation",
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
