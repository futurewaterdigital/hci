import React from "react";

export const metadata = {
  title: "Contact Healthcare International | Get in Touch Today",
  description: "Reach out to Healthcare International for all your medical tourism inquiries. Connect with our team to explore top healthcare services and patient care solutions in India.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Contact Healthcare International | Get in Touch Today",
    description: "Reach out to Healthcare International for all your medical tourism inquiries. Connect with our team to explore top healthcare services and patient care solutions in India.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Contact Healthcare International | Get in Touch Today",
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
