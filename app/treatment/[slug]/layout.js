import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Define your dynamic titles, descriptions, and keywords
  const metaMap = {
    "cardiac-sciences": {
      title: "Advanced Cardiac Treatments | Heart Care at HCI",
      description: "Discover world-class cardiac care at Healthcare International. We offer advanced treatments for heart diseases, including surgeries and non-invasive procedures, with expert cardiologists ensuring exceptional outcomes.",
      keywords: "cardiovascular, cardiologist, heart doctor near me, cardiac doctors near me, heart specialist, heart surgeons near me, heart hospitals near me, Best Cardiologist in Bengaluru, Best Cardiologist in Chennai, Best Cardiologist in Mumbai, Best Cardiologist in Hyderabad, Best Cardiologist in Delhi, Best Cardiologist in the city, Best Cardiologist in India",
    },
    "orthopedics": {
      title: "Orthopaedic Treatment in India – Joint & Bone Care | HCI",
      description: "Get access to top orthopaedic care in India with Healthcare International. We connect you to leading hospitals for joint replacement, fracture management, spine surgeries, and sports injury treatments. Benefit from advanced surgical procedures, rehabilitation support, and personalized orthopaedic care.",
      keywords: "orthopedic surgeon, robotic knee replacement, orthopedist, rheumatoid arthritis, osteosarcoma, bone health, Best Orthopedist in india, Best Orthopedist in the city, Best Orthopedist in Bengaluru, Best Orthopedist in Chennai, Best Orthopedist in Mumbai, Best Orthopedist in Hyderabad, Best Orthopedist in Delhi",
    },
    "neuro-sciences": {
      title: "Comprehensive Neuro Treatments in India | Healthcare International",
      description: "Access world-class neurological care through Healthcare International. We connect patients with top hospitals in India, offering advanced treatments for brain, spine, and nerve disorders. Receive expert care from renowned neurologists, supported by state-of-the-art technology and personalized rehabilitation programs.",
      keywords: "neuro, neuro sciences, neurology, Best Neurologist in india, Best Neurologist in the city, Best Neurologist in Bengaluru, Best Neurologist in Chennai, Best Neurologist in Mumbai, Best Neurologist in Hyderabad, Best Neurologist in Delhi",
    },
    "oncology": {
      title: "Advanced Oncology Treatment in India | Healthcare International",
      description: "Explore advanced oncology treatments with Healthcare International. We connect you to leading hospitals in India, providing personalized care for cancer patients with the latest technologies and multidisciplinary expertise. Ensure access to world-class cancer care through seamless coordination.",
      keywords: "breastcancer, rarecancer, breast cancer awareness, breast, womens health, cervical, Best Oncologist in India, Best Oncologist in the city, Best Oncologist in Bengaluru, Best Oncologist in Chennai, Best Oncologist in Mumbai, Best Oncologist in Hyderabad, Best Oncologist in Delhi",

    },
    "gastroenterology": {
      title: "Advanced Gastroenterology Care in India | Healthcare International",
      description: "Discover expert gastroenterology care with Healthcare International. We connect patients with India’s top hospitals offering treatments for upper and lower GI disorders, liver diseases, and digestive health. Access advanced diagnostics, minimally invasive procedures, and personalized care from experienced gastroenterologists for optimal recovery.",
      keywords: "gastroenterology, digestive health, gerd, gut health, acid reflux, gastro, ibs, ulcerative colitis, gastrologist near me, gastroesophageal reflux disease treatments, Best Gastroentrologist in India, Best Gastroentrologist in the city, Best Gastroentrologist in Bengaluru, Best Gastroentrologist in Chennai, Best Gastroentrologist in Mumbai, Best Gastroentrologist in Hyderabad, Best Gastroentrologist in Delhi",
    },
    "others": {
      title: "Specialised Medical Treatments in India | HCI Healthcare",
      description: "Explore a range of specialised treatments offered through Healthcare International. From organ transplants to cosmetic surgeries, get access to world-class care in India. We partner with top hospitals to provide advanced, reliable, and affordable healthcare solutions tailored to your needs.",
      keywords: "plastic surgery, cosmetic surgery, general surgery, plastic surgery near me, pediatric, urology, pediatrician near me, geriatrics care",
    },
  };

  // Fallback if not found
  const meta = metaMap[slug] || {
    title: "Our Doctors",
    description: "Meet our expert team of doctors.",
    keywords: "doctors, specialists, healthcare",
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    metadataBase: new URL("https://healthcareinternational.in/"),
    alternates: {
      canonical: `https://healthcareinternational.in/treatment/${slug}`,
    },
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
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </>
  );
}