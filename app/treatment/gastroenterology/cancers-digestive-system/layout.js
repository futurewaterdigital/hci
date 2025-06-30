import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Cancers of the Digestive System | Treatment & Symptom Management",
  description: "Explore digestive system cancers and treatment options like pancreatectomy, brachytherapy, and radiation therapy. Get insights on managing GERD, acid reflux, heartburn, and related symptoms with effective medical and natural remedies.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "brachytheraphy, radiationtherapy, pancreatectomy, gerd, colectomy, esophagectomy, acid reflux, heartburn, gastroesophageal reflux disease, indigestion pain, nausea, fatigue, best medicine for acidity in the stomach",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Cancers of the Digestive System | Treatment & Symptom Management",
    description: "Explore digestive system cancers and treatment options like pancreatectomy, brachytherapy, and radiation therapy. Get insights on managing GERD, acid reflux, heartburn, and related symptoms with effective medical and natural remedies.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Cancers of the Digestive System | Treatment & Symptom Management",
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
