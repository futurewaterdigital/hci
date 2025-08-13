import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Cerebral Palsy: Managing Dyskinetic Movement & Anticonvulsant Therapy",
  description: "Understand cerebral palsy and its symptoms, including dyskinetic movements. Discover treatment options like anticonvulsants, therapies, and personalised care plans.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "cerebral palasy, brain, seizure, anticovulsants, dyskinetic movement, Best Neurologist in india, Best Neurologist in the city, Best Neurologist in Bengaluru, Best Neurologist in Chennai, Best Neurologist in Mumbai, Best Neurologist in Hyderabad, Best Neurologist in Delhi",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/cerebral-palsy",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Cerebral Palsy: Managing Dyskinetic Movement & Anticonvulsant Therapy",
    description: "Understand cerebral palsy and its symptoms, including dyskinetic movements. Discover treatment options like anticonvulsants, therapies, and personalised care plans.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Cerebral Palsy: Managing Dyskinetic Movement & Anticonvulsant Therapy",
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
