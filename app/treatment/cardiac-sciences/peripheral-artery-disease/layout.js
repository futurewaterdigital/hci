import React from "react";


export const metadata = {
  title: "Peripheral Artery Disease (PAD) | ABI Test, PVR & PAD Treatment Options",
  description: "Know about PAD symptoms, treatment, and diagnostic tests like Pulse Volume Recording (PVR) and Ankle Brachial Index (ABI). Find ABI tests and PAD treatment centres near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "pad, claudication, leg cramps, hardening of the arteries, muscle cramps treatment, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Peripheral Artery Disease (PAD) | ABI Test, PVR & PAD Treatment Options",
    description: "Know about PAD symptoms, treatment, and diagnostic tests like Pulse Volume Recording (PVR) and Ankle Brachial Index (ABI). Find ABI tests and PAD treatment centres near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Peripheral Artery Disease (PAD) | ABI Test, PVR & PAD Treatment Options",
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
