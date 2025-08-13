import React from "react";


export const metadata = {
  title: "CABG Surgery: Coronary Artery Bypass Procedure, Cost & Techniques",
  description: "Explore advanced angioplasty procedures with Abbott, Synergy, and Xience stents. Learn about heart stent surgery, medical stents, and solutions for heart blockages.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/cardiac-sciences/coronary-artery-bypass-surgery",
  },
  keywords: "cabg, bypass heart, bypass machine, valve repair, heart, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "CABG Surgery: Coronary Artery Bypass Procedure, Cost & Techniques",
    description: "Explore advanced angioplasty procedures with Abbott, Synergy, and Xience stents. Learn about heart stent surgery, medical stents, and solutions for heart blockages.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "CABG Surgery: Coronary Artery Bypass Procedure, Cost & Techniques",
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
