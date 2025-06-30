import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Expert Aesthetic & Plastic Surgery | Rhinoplasty, Tummy Tuck, Fillers",
  description: "Enhance your natural beauty with expert cosmetic and plastic surgery. Services include rhinoplasty, tummy tuck, breast augmentation, liposuction, fillers, and more. Find trusted surgeons near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "cosmetic surgery, plastic surgery, rhinoplasty, tummy tuck, breast implants, blepharoplasty, healthcare international, hci, nose reshaping, eye surgery, fat grafting, chemical peels, laser treatments, contouring",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Expert Aesthetic & Plastic Surgery | Rhinoplasty, Tummy Tuck, Fillers",
    description: "Enhance your natural beauty with expert cosmetic and plastic surgery. Services include rhinoplasty, tummy tuck, breast augmentation, liposuction, fillers, and more. Find trusted surgeons near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Expert Aesthetic & Plastic Surgery | Rhinoplasty, Tummy Tuck, Fillers",
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
