import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Neurovascular Conditions | AVM, Hypertension & Pulmonary Care",
  description: "Explore care for neurovascular conditions including arteriovenous malformation (AVM), hypertension, and pulmonary hypertension. Understand symptoms, treatments, and options to manage and monitor blood pressure effectively.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "arteriovenous malformation, hypertension, avm, blood pressure, pulmonary hypertension, hypertension symptoms, pulmonary hypertension treatment, pulmonary hypertension symptoms, pulmonary arterial hypertension, hypertension treatments, hypertension headache, most accurate blood pressure monitor, lower blood pressure naturally, normal blood pressure for women, systolic blood pressure, reduce blood pressure, blood pressure doctor near me, diastolic blood pressure",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Neurovascular Conditions | AVM, Hypertension & Pulmonary Care",
    description: "Explore care for neurovascular conditions including arteriovenous malformation (AVM), hypertension, and pulmonary hypertension. Understand symptoms, treatments, and options to manage and monitor blood pressure effectively.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Neurovascular Conditions | AVM, Hypertension & Pulmonary Care",
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
