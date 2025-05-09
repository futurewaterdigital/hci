"use client";
import React from "react";
import {useRouter} from "next/navigation";
export default function FooterLink() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to homepage
    router.push("/");

    // Wait for navigation to complete then scroll to form
    setTimeout(() => {
      const formElement = document.querySelector("#consultation-form");
      if (formElement) {
        formElement.scrollIntoView({behavior: "smooth"});
      }
    }, 100);
  };

  const linkshead = [
    {
      text: `To consult With the best doctor for treatment of hematological disorders, click here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for the treatment of Bone Marrow Transplant in India, click here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for the treatment of Bone Marrow Transplant in bangalore, Chennai, Delhi, Hyderabad, Mumbai click here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for CAR-T Cell Therapy in India, click here`,
      url: "#", // Replace "#" with the actual link
    },
    {
      text: `The best hospital for CAR-T Cell Therapy in bangalore, Chennai, Delhi, Hyderabad, Mumbai click here`,
      url: "#", // Replace "#" with the actual link
    },
  ];

  return (
    <div className="text-start space-y-4">
      {linkshead.map((link, index) => (
        <button
          key={index}
          onClick={handleClick}
          className="text-hciPrimary underline block mb-2 font-medium capitalize text-lg">
          {link.text}
        </button>
      ))}
    </div>
  );
}
