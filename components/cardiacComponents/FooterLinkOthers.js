import React from "react";
import Link from "next/link";
export default function FooterLink({ head }) {
  const linkshead = [ 
    {
      text: `To Consult with The Best Doctor For ${head} Treatment , Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In India, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Bangalore, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Chennai, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Delhi, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Hyderabad, Click Here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The Best Hospital For ${head} Treatment In Mumbai, Click Here`,
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
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
}
