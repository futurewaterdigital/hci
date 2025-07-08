import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Spinal Disorders: Cervical Radiculopathy & Laminectomy Treatments",
  description: "Explore treatment options for spinal disorders including cervical radiculopathy and laminectomy with or without fusion. Access therapy details, specialist care, and cost-related insights.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "cervical radiculopathy, laminectomy, radiculopathy treatment, spinal cord, Best Orthopedist in india, Best Orthopedist in the city, Best Orthopedist in Bengaluru, Best Orthopedist in Chennai, Best Orthopedist in Mumbai, Best Orthopedist in Hyderabad, Best Orthopedist in Delhi",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Spinal Disorders: Cervical Radiculopathy & Laminectomy Treatments",
    description: "Explore treatment options for spinal disorders including cervical radiculopathy and laminectomy with or without fusion. Access therapy details, specialist care, and cost-related insights.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Spinal Disorders: Cervical Radiculopathy & Laminectomy Treatments",
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
