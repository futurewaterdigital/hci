import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Brain Tumour Treatment | Targeted Therapy for Glioblastoma & Tumour Cells",
  description: "Explore advanced brain tumour treatments including targeted therapy for glioblastoma. Learn about circulating tumor cells and innovative care options to fight brain cancer.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "peripheral edema, giloblastoma, headache, astrocytoma, Best Oncologist in India, Best Oncologist in the city, Best Oncologist in Bengaluru, Best Oncologist in Chennai, Best Oncologist in Mumbai, Best Oncologist in Hyderabad, Best Oncologist in Delhi",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Brain Tumour Treatment | Targeted Therapy for Glioblastoma & Tumour Cells",
    description: "Explore advanced brain tumour treatments including targeted therapy for glioblastoma. Learn about circulating tumor cells and innovative care options to fight brain cancer.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Brain Tumour Treatment | Targeted Therapy for Glioblastoma & Tumour Cells",
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
