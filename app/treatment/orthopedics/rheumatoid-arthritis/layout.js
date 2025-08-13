import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Rheumatoid Arthritis: Causes, Symptoms & Advanced Treatment Options",
  description: "Understand rheumatoid arthritis (RA), its symptoms, causes, and treatment options including medications, therapies, and self-care tips. Find experienced RA doctors and specialists near you.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/orthopedics/rheumatoid-arthritis"
  },
  keywords: "rheumatoid arthritis, ra, arthritis in fingers, rheumatoid arthritis treatment, rheumatoid arthritis self care, rheumatoid arthritis doctors near me, ra treatment, ra doctors near me, ra medications, rheumatoid arthritis diagnosis, rheumatoid arthritis medications, rheumatoid arthritis doctor, rheumatoid arthritis causes, treatment for rheumatoid arthritis in fingers, seronegative rheumatoid arthritis, rheumatoid arthritis therapies, best treatment for rheumatoid arthritis, rheumatoid arthritis dr near me, rheumatoid arthritis hands, rheumatoid arthritis in knees symptoms, rheumatoid arthritis injections, supplements for rheumatoid arthritis, rheumatoid arthritis specialist near me, ra disease",
  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Rheumatoid Arthritis: Causes, Symptoms & Advanced Treatment Options",
    description: "Understand rheumatoid arthritis (RA), its symptoms, causes, and treatment options including medications, therapies, and self-care tips. Find experienced RA doctors and specialists near you.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Rheumatoid Arthritis: Causes, Symptoms & Advanced Treatment Options",
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
