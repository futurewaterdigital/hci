import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Hematology: Blood Cancer Care, CLL, CML & Bone Marrow Transfusion",
  description: "Explore advanced care for blood cancers like CLL, CML, AML, and DIC. Access bone marrow and blood transfusions, natural remedies, and treatments for leukaemia and myelogenous disorders.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/oncology/hematology"
  },
  keywords: "hematology, bonemarrow biopsy, hematologist near me, bone marrow test, hematologist doctor near me, blood, bone marrow aspiration",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Hematology: Blood Cancer Care, CLL, CML & Bone Marrow Transfusion",
    description: "Explore advanced care for blood cancers like CLL, CML, AML, and DIC. Access bone marrow and blood transfusions, natural remedies, and treatments for leukaemia and myelogenous disorders.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Hematology: Blood Cancer Care, CLL, CML & Bone Marrow Transfusion",
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
