import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Epilepsy Treatment & Seizure Management | Brain Stimulation & DBS",
  description: "Explore effective treatment options for epilepsy, including deep brain stimulation (DBS), brain stimulation devices, and seizure management strategies. Learn about different types of seizures and find expert epileptologists near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "chiari malformation, chiari treatment, chiari 1 malformation, chiari one malformation, brain, cerebellum, cerebrospinal fluid",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Epilepsy Treatment & Seizure Management | Brain Stimulation & DBS",
    description: "Explore effective treatment options for epilepsy, including deep brain stimulation (DBS), brain stimulation devices, and seizure management strategies. Learn about different types of seizures and find expert epileptologists near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Epilepsy Treatment & Seizure Management | Brain Stimulation & DBS",
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
