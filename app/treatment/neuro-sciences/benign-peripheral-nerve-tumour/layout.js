import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Benign Peripheral Nerve Tumour: Schwannoma, Perineurioma & Advanced Therapies",
  description: "Learn about benign peripheral nerve tumours like schwannoma and perineurioma. Explore treatment options including SRS, EBRT, MTF SRS, and cutting-edge proton therapy for safer, more precise care.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "schwannoma, perineurioma, srs, brain, spinal cord, nerve, ebrt, protontherapy",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/benign-peripheral-nerve-tumour",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Benign Peripheral Nerve Tumour: Schwannoma, Perineurioma & Advanced Therapies",
    description: "Learn about benign peripheral nerve tumours like schwannoma and perineurioma. Explore treatment options including SRS, EBRT, MTF SRS, and cutting-edge proton therapy for safer, more precise care.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Benign Peripheral Nerve Tumour: Schwannoma, Perineurioma & Advanced Therapies",
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
