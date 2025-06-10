"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLinkTwo({ head }) {
  const pathname = usePathname();

  // Get the base treatment path (e.g., /treatment/cardiac-sciences)
  const basePath = pathname.split('/').slice(0, 3).join('/');

  const linkshead = [
    {
      text: `To Consult The Best Doctor For ${head}, Click Here`,
      url: `${basePath}#doctors`,
    },
    {
      text: `The Best Hospital For ${head} In India, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} In Bangalore, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} In Chennai, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} In Delhi, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} In Hyderabad, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} In Mumbai, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
  ];

  return (
    <div className="text-start space-y-4">
      {linkshead.map((link, index) => (
        <Link
          key={index}
          className="text-hciPrimary underline block mb-2 font-medium capitalize text-lg"
          href={link.url}
          scroll={false}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
