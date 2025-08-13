import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Kidney Cancer: Diagnosis, Robotic Surgery & Treatment Options",
  description: "Learn about kidney cancer care including nephrectomy, cryoablation, robotic surgery, urinalysis tests, Wilms tumour, RCC, and urothelial carcinoma diagnosis.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/kidney-cancer"
  },
  keywords: "chromophobe rcc, kidneycancer, renalcancer, kidneytumor, kidneys, rcc, robotic surgery",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Kidney Cancer: Diagnosis, Robotic Surgery & Treatment Options",
    description: "Learn about kidney cancer care including nephrectomy, cryoablation, robotic surgery, urinalysis tests, Wilms tumour, RCC, and urothelial carcinoma diagnosis.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Kidney Cancer: Diagnosis, Robotic Surgery & Treatment Options",
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
