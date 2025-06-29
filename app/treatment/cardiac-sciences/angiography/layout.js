import React from "react";


export const metadata = {
  title: "Angiography & Aorta Surgery | Stents for Heart Blockage & Aneurysms",
  description: "Know about angiography, aneurysms, AAA surgery, and aorta surgery. Explore stent options including Abbott, Synergy, Xience Alpine, DJ stent, and heart stent surgery.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "aneurysms, heart, stent, aneurysm causes, claudication, aorta, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Angiography & Aorta Surgery | Stents for Heart Blockage & Aneurysms",
    description: "Know about angiography, aneurysms, AAA surgery, and aorta surgery. Explore stent options including Abbott, Synergy, Xience Alpine, DJ stent, and heart stent surgery.",
    images: [
      {
        url: "/cardio/angiography.png",
        width: 800,
        height: 600,
        alt: "Angiography & Aorta Surgery | Stents for Heart Blockage & Aneurysms",
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
