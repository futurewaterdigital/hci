import React from "react";
import Link from "next/link";
export default function FooterLink({ head }) {
  const linkshead = [
    {
      text: `To Consult with The Best Doctor For ${head} Click Here`,
      url: "#",
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
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
