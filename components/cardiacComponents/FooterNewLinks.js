"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function FooterLink() {
  const pathname = usePathname();
  const router = useRouter();

  // Get the base treatment path (e.g., /treatment/cardiac-sciences)
  const basePath = pathname.split('/').slice(0, 3).join('/');

  const handleDoctorClick = (e) => {
    e.preventDefault();
    // Navigate using router with a query parameter
    router.push(basePath + "?scrollTo=doctors");
  };

  const linkshead = [
    {
      text: `To consult With the best doctor for treatment of hematological disorders, click here`,
      url: `${basePath}?scrollTo=doctors`,
      onClick: handleDoctorClick
    },
    {
      text: `The best hospital for the treatment of Bone Marrow Transplant in India, click here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for the treatment of Bone Marrow Transplant in bangalore, Chennai, Delhi, Hyderabad, Mumbai click here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for CAR-T Cell Therapy in India, click here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for CAR-T Cell Therapy in bangalore, Chennai, Delhi, Hyderabad, Mumbai click here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
  ];

  return (
    <div className="text-start space-y-4">
      {linkshead.map((link, index) => (
       <Link
       key={index}
       className="text-hciPrimary underline block mb-2 font-medium capitalize text-lg"
       href={link.url}
     >
       {link.text}
     </Link>
      ))}
    </div>
  );
}
