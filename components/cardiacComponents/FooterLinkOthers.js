"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function FooterLink({ head }) {
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
      text: `To Consult with The Best Doctor For ${head} Treatment , Click Here`,
      url: `${basePath}?scrollTo=doctors`,
      onClick: handleDoctorClick
    },
    {
      text: `The Best Hospital For ${head} Treatment In India, Click Here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Bangalore, Click Here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Chennai, Click Here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Delhi, Click Here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Hyderabad, Click Here`,
      url: "/?scrollTo=hospital", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Mumbai, Click Here`,
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
