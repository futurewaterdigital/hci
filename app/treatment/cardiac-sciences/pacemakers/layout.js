import React from "react";


export const metadata = {
  title: "Pacemaker of the Heart | Abbott, Medtronic, Micra & Dual Chamber Pacemakers",
  description: "Discover types of pacemakers including Micra, Abbott, Medtronic, and Boston Scientific. Know pacemaker costs, dual chamber options, surgery details, and nearby pacemaker doctors.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "pacemaker, pace maker machine, pace makers, heart, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Pacemaker of the Heart | Abbott, Medtronic, Micra & Dual Chamber Pacemakers",
    description: "Discover types of pacemakers including Micra, Abbott, Medtronic, and Boston Scientific. Know pacemaker costs, dual chamber options, surgery details, and nearby pacemaker doctors.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Pacemaker of the Heart | Abbott, Medtronic, Micra & Dual Chamber Pacemakers",
      },
    ],
  },
  icons: {
    icon: "favicon_io/favicon-32x32.png",
    shortcut: "favicon_io/favicon.ico",
  },
};

export default function RootLayout({children}) {
  return (
    <>

      {children}
 
    </>
  );
}
