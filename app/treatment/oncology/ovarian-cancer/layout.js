import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Ovarian Cancer Treatment | Surgery, CA 125, PARP Inhibitors & Proton Therapy",
  description: "Learn about ovarian cancer symptoms, diagnosis, stages, and treatments including hysterectomy, PARP inhibitors, CA 125, proton therapy, and non-surgical options.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "ovarian cancer, ca 125, targeted therapy, hormonetherapy, radiation, radiationtherapy, Best Oncologist in India, Best Oncologist in the city, Best Oncologist in Bengaluru, Best Oncologist in Chennai, Best Oncologist in Mumbai, Best Oncologist in Hyderabad, Best Oncologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Ovarian Cancer Treatment | Surgery, CA 125, PARP Inhibitors & Proton Therapy",
    description: "Learn about ovarian cancer symptoms, diagnosis, stages, and treatments including hysterectomy, PARP inhibitors, CA 125, proton therapy, and non-surgical options.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Ovarian Cancer Treatment | Surgery, CA 125, PARP Inhibitors & Proton Therapy",
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
