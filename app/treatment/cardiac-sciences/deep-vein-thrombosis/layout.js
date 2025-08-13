import React from "react";


export const metadata = {
  title: "DVT Treatment | Signs of DVT in Leg, Causes & DVT Clinic Near You",
  description: "know about deep vein thrombosis (DVT), its causes, symptoms of DVT in leg, early-stage signs, and venous thrombosis. Find expert DVT doctors and clinics near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/cardiac-sciences/deep-vein-thrombosis",
  },
  keywords: "dvt, leg swelling, venous thrombosis, venography, early stage dvt symptoms leg, heart, signs of dvt, swelling in ankles, feet swelling, heart failure swollen feet, swelling of the knee, foot swelling, dvt causes",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "DVT Treatment | Signs of DVT in Leg, Causes & DVT Clinic Near You",
    description: "know about deep vein thrombosis (DVT), its causes, symptoms of DVT in leg, early-stage signs, and venous thrombosis. Find expert DVT doctors and clinics near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "DVT Treatment | Signs of DVT in Leg, Causes & DVT Clinic Near You",
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
