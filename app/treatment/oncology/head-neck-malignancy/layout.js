import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Head and Neck Malignancy: Surgery, Radiation & Targeted Therapy",
  description: "Get comprehensive treatment for head and neck malignancies including surgery, radiation therapy, EGFR inhibitors, and advanced targeted therapies for optimal cancer care.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "oropharyngealcancer, nasopharyngealcancer, headache, radiationtherapy, targeted therapy, Best Oncologist in India, Best Oncologist in the city, Best Oncologist in Bengaluru, Best Oncologist in Chennai, Best Oncologist in Mumbai, Best Oncologist in Hyderabad, Best Oncologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Head and Neck Malignancy: Surgery, Radiation & Targeted Therapy",
    description: "Get comprehensive treatment for head and neck malignancies including surgery, radiation therapy, EGFR inhibitors, and advanced targeted therapies for optimal cancer care.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Head and Neck Malignancy: Surgery, Radiation & Targeted Therapy",
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
