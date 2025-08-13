import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Cervical Cancer & Hysterectomy Treatments | EBRT, TLH, Da Vinci & More",
  description: "Explore cervical cancer care including EBRT, TLH surgery, uterus operation, and various hysterectomy types—radical, laser, Da Vinci-assisted—with cost insights and recovery tips.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/cervical-cancer"
  },
  keywords: "hpv vaccine, papilloma treatment, targetedtherapy, radiationtherapy, human papillomavirus, papilloma vaccine, human papilloma vaccine",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Cervical Cancer & Hysterectomy Treatments | EBRT, TLH, Da Vinci & More",
    description: "Explore cervical cancer care including EBRT, TLH surgery, uterus operation, and various hysterectomy types—radical, laser, Da Vinci-assisted—with cost insights and recovery tips.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Cervical Cancer & Hysterectomy Treatments | EBRT, TLH, Da Vinci & More",
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
