import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "ACL, PCL & MCL Surgeries: Injury Management & Recovery",
  description: "Understand treatment options for ACL, PCL, and MCL injuries. Explore surgical procedures, therapy methods, and recovery support for ligament damage and knee stability restoration.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/surgeries"
  },
  keywords: "acl, mcl, pcl, medial collateral ligament, ligament, knee, joints",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "ACL, PCL & MCL Surgeries: Injury Management & Recovery",
    description: "Understand treatment options for ACL, PCL, and MCL injuries. Explore surgical procedures, therapy methods, and recovery support for ligament damage and knee stability restoration.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "ACL, PCL & MCL Surgeries: Injury Management & Recovery",
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
