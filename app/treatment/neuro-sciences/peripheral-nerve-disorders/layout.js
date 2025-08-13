import React from "react";
import Header from "../../../../components/Header/page";
import Footer from "../../../../components/Footer/page";

export const metadata = {
  title: "Peripheral Nerve Disorders: Seizures, EMG Testing & Expert Epileptologist Care",
  description: "Understand peripheral nerve disorders, seizure types like tonic-clonic and petit mal, and get EMG testing near you. Find expert epileptologists and personalised PNES and seizure treatment options.",
  metadataBase: new URL("https://healthcareinternational.in/"),
  keywords: "seizure, electromyography, epileptologist near me, pnes treatment, focal seizure, tonic clonic seizure, febrile seizure, petit mal seizure, seizure causes, brain seizures, types of epileptic seizures, fever seizure, seizure doctor, emg machine, generalized tonic clonic seizure, tonic clonic seizure treatment",
  alternates: {
    canonical: "https://healthcareinternational.in/treatment/neuro-sciences/peripheral-nerve-disorders",
  },

  openGraph: {
    url: "https://healthcareinternational.in/",
    title: "Peripheral Nerve Disorders: Seizures, EMG Testing & Expert Epileptologist Care",
    description: "Understand peripheral nerve disorders, seizure types like tonic-clonic and petit mal, and get EMG testing near you. Find expert epileptologists and personalised PNES and seizure treatment options.",
    images: [
      {
        url: "images/homeBanner.jpg",
        width: 800,
        height: 600,
        alt: "Peripheral Nerve Disorders: Seizures, EMG Testing & Expert Epileptologist Care",
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
