import React from "react";


export const metadata = {
  title: "Heart Failure Treatment | CHF, Ejection Fraction & Cardiac Care",
  description: "Understand heart failure (CHF), its symptoms, causes, and treatment options including diastolic heart failure, low ejection fraction, and advanced cardiac care for all age groups.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "aneurysms, heart, stent, aneurysm causes, claudication, aorta, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Heart Failure Treatment | CHF, Ejection Fraction & Cardiac Care",
    description: "Understand heart failure (CHF), its symptoms, causes, and treatment options including diastolic heart failure, low ejection fraction, and advanced cardiac care for all age groups.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Heart Failure Treatment | CHF, Ejection Fraction & Cardiac Care",
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
