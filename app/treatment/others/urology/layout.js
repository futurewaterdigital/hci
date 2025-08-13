import React, { Suspense } from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Expert Urology Care | UTI, ED & Robotic Urological Surgery",
  description: "Comprehensive urology services for UTI, erectile dysfunction (ED), hematuria, and overactive bladder. Advanced treatments, robotic surgery, and discreet care at Healthcare International.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/others/urology"
  },
  keywords: "urology, healthcare international, uti, urinary tract infection, ed, erectile dysfunction, hematuria, blood in urine, robotic surgery, bladder infection, vasectomy near me, hydronephrosis, harder erection supplements",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Expert Urology Care | UTI, ED & Robotic Urological Surgery",
    description: "Comprehensive urology services for UTI, erectile dysfunction (ED), hematuria, and overactive bladder. Advanced treatments, robotic surgery, and discreet care at Healthcare International.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Expert Urology Care | UTI, ED & Robotic Urological Surgery",
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
      <Suspense fallback={<div>Loading Urology content...</div>}>
        {children}
      </Suspense>
      <Footer />
    </>
  );
}
