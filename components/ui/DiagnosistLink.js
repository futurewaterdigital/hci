
"use client";
import React from "react";
import { useRouter } from "next/navigation";

function DiagnosistLink({ title }) {
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

  return (
    <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
      <button onClick={handleClick} className="text-start underline">
        {/* To know more about {title}  and its treatment, click here */}
        For The Best Diagnosis Of {title} And Related Issues, Click Here
      </button>
    </p>
  );
}

export default DiagnosistLink;
