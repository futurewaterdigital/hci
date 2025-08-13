import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Neurodegenerative Disorders Treatment | ALS, Dementia & Brain Stimulation",
  description: "Discover treatment options for neurodegenerative disorders like ALS and dementia. Explore brain stimulation therapies, deep brain stimulation (DBS) devices, memory care facilities, and the latest ALS treatments.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "dementia, als, dbs, Best Neurologist in india, Best Neurologist in the city, Best Neurologist in Bengaluru, Best Neurologist in Chennai, Best Neurologist in Mumbai, Best Neurologist in Hyderabad, Best Neurologist in Delhi",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/neurodegenerative-disorders",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Neurodegenerative Disorders Treatment | ALS, Dementia & Brain Stimulation",
    description: "Discover treatment options for neurodegenerative disorders like ALS and dementia. Explore brain stimulation therapies, deep brain stimulation (DBS) devices, memory care facilities, and the latest ALS treatments.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Neurodegenerative Disorders Treatment | ALS, Dementia & Brain Stimulation",
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
