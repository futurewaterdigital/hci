import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Gynecology & Infertility | Menopause & UTI Treatments | Healthcare International",
  description: "Explore expert care in gynecology, infertility, menopause, and UTI treatments at Healthcare International. Consult endocrinologists near you for hormone support, supplements, and personalised care.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "healthcare international, hci, menstrual health, pregnancy, menstrual, pregnancy symptoms, pregnancy test, abnormal bleeding, ovarian cysts, menopause, uti, hormonal assessment, ovulation",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Gynecology & Infertility | Menopause & UTI Treatments | Healthcare International",
    description: "Explore expert care in gynecology, infertility, menopause, and UTI treatments at Healthcare International. Consult endocrinologists near you for hormone support, supplements, and personalised care.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Gynecology & Infertility | Menopause & UTI Treatments | Healthcare International",
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
