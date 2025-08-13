import React from "react";


export const metadata = {
  title: "TAVR Procedure | Abnormal Heart Rhythm, Atrial Flutter & Valve Replacement",
  description: "Understand how TAVR helps treat abnormal heart rhythms, atrial flutter, and supraventricular tachycardia. Consult heart rhythm specialists for bleeding heart and irregular heartbeat issues.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/cardiac-sciences/transcatheter-aortic-valve-replacement",
  },
  keywords: "pad, claudication, leg cramps, hardening of the arteries, muscle cramps treatment, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "TAVR Procedure | Abnormal Heart Rhythm, Atrial Flutter & Valve Replacement",
    description: "Understand how TAVR helps treat abnormal heart rhythms, atrial flutter, and supraventricular tachycardia. Consult heart rhythm specialists for bleeding heart and irregular heartbeat issues.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "TAVR Procedure | Abnormal Heart Rhythm, Atrial Flutter & Valve Replacement",
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

      {children}

    </>
  );
}
