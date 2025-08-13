import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Acetabular Fracture and ORIF Surgery Options",
  description: "Explore surgical solutions for acetabular fractures, including open reduction and internal fixation (ORIF) techniques. Covers procedures for wrist, ankle, clavicle, distal radius, and patella, along with potential complications and recovery insights.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/acetabular-fractures"
  },
  keywords: "open reduction, orif, clavicle open reduction internal fixation, clavicle orif, distal radius orif, intern fixation, pelvis, hip, orif surgery, ankle open reduction, ankle orif, fracture open reduction, open reduction and external fixation, open reduction and internal fixation, open reduction external fixation, hip joint, open reduction internal fixation complications, open reduction internal fixation patella",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Acetabular Fracture and ORIF Surgery Options",
    description: "Explore surgical solutions for acetabular fractures, including open reduction and internal fixation (ORIF) techniques. Covers procedures for wrist, ankle, clavicle, distal radius, and patella, along with potential complications and recovery insights.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Acetabular Fracture and ORIF Surgery Options",
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
      <Header />
      {children}
      <Footer />
    </>
  );
}
