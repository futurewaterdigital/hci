import React from "react";


export const metadata = {
  title: "Heart and Lung Transplant Surgery | Advanced Transplant Care & Treatment",
  description: "Explore expert heart and lung transplant procedures, recovery, and post-operative care. Learn about eligibility, success rates, and trusted transplant hospitals near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "hearttransplant, lungtransplant, heart transplant success rate, first heart transplant, organtransplant, lung, heart",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Heart and Lung Transplant Surgery | Advanced Transplant Care & Treatment",
    description: "Explore expert heart and lung transplant procedures, recovery, and post-operative care. Learn about eligibility, success rates, and trusted transplant hospitals near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Heart and Lung Transplant Surgery | Advanced Transplant Care & Treatment",
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
