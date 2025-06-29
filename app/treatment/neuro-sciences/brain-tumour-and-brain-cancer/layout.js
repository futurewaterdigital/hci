import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Brain Tumour & Brain Cancer: Glioblastoma, Targeted Therapy & CTCs",
  description: "Explore brain tumour and brain cancer treatment options including targeted therapy for glioblastoma. Learn about circulating tumour cells (CTCs), diagnosis, and personalised care approaches.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "",

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Brain Tumour & Brain Cancer: Glioblastoma, Targeted Therapy & CTCs",
    description: "Explore brain tumour and brain cancer treatment options including targeted therapy for glioblastoma. Learn about circulating tumour cells (CTCs), diagnosis, and personalised care approaches.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Brain Tumour & Brain Cancer: Glioblastoma, Targeted Therapy & CTCs",
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
