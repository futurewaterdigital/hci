import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Stroke | Types, Emergency Care & Treatment Options",
  description: "Understand stroke types including hemorrhagic stroke and brain attack. Explore treatments such as TPA (Tissue Plasminogen Activator), craniotomy, and care for intracerebral hemorrhage.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "brain attack, hemorrhagic stroke, tpa, tissue plasminogen activator, craniotomy, brain, plaque, headache, intracerebral hemorrhage treatments",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/stroke",
  },
  
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Stroke | Types, Emergency Care & Treatment Options",
    description: "Understand stroke types including hemorrhagic stroke and brain attack. Explore treatments such as TPA (Tissue Plasminogen Activator), craniotomy, and care for intracerebral hemorrhage.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Stroke | Types, Emergency Care & Treatment Options",
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
