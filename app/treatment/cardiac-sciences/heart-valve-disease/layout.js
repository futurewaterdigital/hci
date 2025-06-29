import React from "react";


export const metadata = {
  title: "Heart Valve Disease (HVD) | Internal Bleeding Causes & Signs",
  description: "Explore heart valve disease (HVD), its link to internal bleeding, causes of internal blood loss, and signs of bleeding inside the body. Learn symptoms, diagnosis, and treatment options.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "valve repair, atresia, heart, mitral valve repair surgery, mvr surgery, mitral clipping, mitral repair",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Heart Valve Disease (HVD) | Internal Bleeding Causes & Signs",
    description: "Explore heart valve disease (HVD), its link to internal bleeding, causes of internal blood loss, and signs of bleeding inside the body. Learn symptoms, diagnosis, and treatment options.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Heart Valve Disease (HVD) | Internal Bleeding Causes & Signs",
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
