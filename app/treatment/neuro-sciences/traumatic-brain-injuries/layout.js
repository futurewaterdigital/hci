import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Traumatic Brain Injury (TBI) | Symptoms, Diagnosis & Recovery",
  description: "Explore traumatic brain injury (TBI), its assessment using the Glasgow Coma Scale (GCS), and recovery strategies for head trauma. Understand how TBIs are managed and treated.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "tbi, glasgow coma scale, gcs, brain, tbis, recovery from head trauma, Best Neurologist in india, Best Neurologist in the city, Best Neurologist in Bengaluru, Best Neurologist in Chennai, Best Neurologist in Mumbai, Best Neurologist in Hyderabad, Best Neurologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Traumatic Brain Injury (TBI) | Symptoms, Diagnosis & Recovery",
    description: "Explore traumatic brain injury (TBI), its assessment using the Glasgow Coma Scale (GCS), and recovery strategies for head trauma. Understand how TBIs are managed and treated.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Traumatic Brain Injury (TBI) | Symptoms, Diagnosis & Recovery",
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
