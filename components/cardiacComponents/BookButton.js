"use client";

import React from "react";
import { useRouter } from "next/navigation";

function BookButton() {
  const router = useRouter();

  const handleDoctorClick = (e) => {
    e.preventDefault();
    router.push("/?scrollTo=form");
  };

  return (
    <div className="text-center py-5">
      <button
        onClick={handleDoctorClick}
        className="bg-pink-500 text-white px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-pink-600 transition-colors"
      >
        Book An Appointment
      </button>
    </div>
  );
}

export default BookButton;
