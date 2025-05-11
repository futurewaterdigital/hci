"use client";
import React from "react";
import {useRouter} from "next/navigation";

function BookButton() {
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

  return (
    <div className="text-center py-5">
      <button
        onClick={handleClick}
        className="bg-pink-500 text-white px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-pink-600 transition-colors">
        Book An Appointment
      </button>
    </div>
  );
}

export default BookButton;
