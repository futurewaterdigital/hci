import React from "react";


export const metadata = {
  title: "Angioplasty & Heart Stent Surgery | Abbott, Xience, Synergy Stents",
  description: "Explore advanced angioplasty procedures with Abbott, Synergy, and Xience stents. Learn about heart stent surgery, medical stents, and solutions for heart blockages.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "heart, stent, pci, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Angioplasty & Heart Stent Surgery | Abbott, Xience, Synergy Stents",
    description: "Explore advanced angioplasty procedures with Abbott, Synergy, and Xience stents. Learn about heart stent surgery, medical stents, and solutions for heart blockages.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Angioplasty & Heart Stent Surgery | Abbott, Xience, Synergy Stents",
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
