"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function FooterLink({ head }) {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to homepage
    router.push("/");

    // Wait for navigation to complete then scroll to form
    setTimeout(() => {
      const formElement = document.querySelector("#consultation-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const linkshead = [
    {
      text: `To Get The Best Diagnosis for ${head} and Related issues, click here`,
      url: "", // Replace "#" with the actual link
    },
  ];

  return (
    <div className="text-start space-y-4 my-5">
      {linkshead.map((link, index) => (
        <button
          key={index}
          onClick={handleClick}
          className="text-hciPrimary underline block mb-2 font-semibold capitalize text-lg text-start">
          {link.text}
        </button>
      ))}
    </div>
  );
}
