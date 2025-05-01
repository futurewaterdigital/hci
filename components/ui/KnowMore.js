"use client";
import React from "react";
import {useRouter} from "next/navigation";

function KnowMore({title}) {
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
    <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
      <button onClick={handleClick}>
        To know more about {title} and its causes and treatment, click here.
      </button>
    </p>
  );
}

export default KnowMore;
