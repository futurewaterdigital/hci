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
      text: `To Consult with The Best Doctor For ${head} Click Here`,
      url: `${basePath}?scrollTo=doctors`,
      onClick: handleDoctorClick
    },
    {
      text: `The Best Hospital For ${head} In India, Click Here`,
      url: "#",
    },
    {
      text: `The Best Hospital For ${head} In Bangalore, Click Here`,
      url: "#",
    },
    {
      text: `The Best Hospital For ${head} In Chennai, Click Here`,
      url: "#",
    },
    {
      text: `The Best Hospital For ${head} In Delhi, Click Here`,
      url: "#",
    },
    {
      text: `The Best Hospital For ${head} In Hyderabad, Click Here`,
      url: "#",
    },
    {
      text: `The Best Hospital For ${head} In Mumbai, Click Here`,
      url: "#",
    },
  ];

  return (
    <div className="text-start space-y-4">
      {linkshead.map((link, index) => (
        <Link
          key={index}
          className="text-hciPrimary underline block mb-2 font-medium capitalize text-lg"
          href={link.url}
          onClick={link.onClick}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
