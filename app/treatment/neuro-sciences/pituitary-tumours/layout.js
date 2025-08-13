import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Pituitary Tumour: Hormonal Testing, Prolactinoma & Cushing’s Disease Care",
  description: "Learn about pituitary tumours, acromegaly, and prolactinoma. Get hormone tests like cortisol, estrogen, AMH, FSH, LH, and full hormone panels. Book hormone check-ups and tests near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "acromegaly, cushing's disease, hormonal testing, prolactinoma, cortisol test, perimenopause test, menopause test, estrogen, fsh test, pituitary gland, lh test, prolactin test, amh test near me, dht test",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/pituitary-tumours",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Pituitary Tumour: Hormonal Testing, Prolactinoma & Cushing’s Disease Care",
    description: "Learn about pituitary tumours, acromegaly, and prolactinoma. Get hormone tests like cortisol, estrogen, AMH, FSH, LH, and full hormone panels. Book hormone check-ups and tests near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Pituitary Tumour: Hormonal Testing, Prolactinoma & Cushing’s Disease Care",
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
