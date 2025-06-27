import React from "react";

export async function generateMetadata({ params }) {
  const { speciality } = params;

  // Define your dynamic titles, descriptions, and keywords
  const metaMap = {
    "cardiac-sciences": {
      title: "Our Cardiologists",
      description: "Meet our expert team of Cardiologists.",
      keywords: "cardiology, heart, doctors, specialists",
    },
    "orthopedics": {
      title: "Our Orthopedic Surgeons",
      description: "Meet our expert team of Orthopedic Surgeons.",
      keywords: "orthopedics, bones, doctors, specialists",
    },
    "neuro-sciences": {
      title: "Our Neurosurgeons",
      description: "Meet our expert team of Neurosurgeons.",
      keywords: "neurosciences, brain, doctors, specialists",
    },
    "oncology": {
      title: "Our Oncologists",
      description: "Meet our expert team of Oncologists.",
      keywords: "oncology, cancer, doctors, specialists",
    },
    "gastroenterology": {
      title: "Our Gastroenterologists",
      description: "Meet our expert team of Gastroenterologists.",
      keywords: "gastroenterology, stomach, doctors, specialists",
    },
    "others": {
      title: "Other Specialists",
      description: "Meet our other medical specialists.",
      keywords: "specialists, doctors, healthcare",
    },
  };

  // Fallback if not found
  const meta = metaMap[speciality] || {
    title: "Our Doctors",
    description: "Meet our expert team of doctors.",
    keywords: "doctors, specialists, healthcare",
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL("https://healthcareinternational.in/"),
    openGraph: {
      url: "https://healthcareinternational.in/",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: "images/homeBanner.jpg",
          width: 800,
          height: 600,
          alt: "Healthcare International",
        },
      ],
    },
    icons: {
      icon: "favicon_io/favicon-32x32.png",
      shortcut: "favicon_io/favicon.ico",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}