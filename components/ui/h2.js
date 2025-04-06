import React from "react";

function h2({ title, className }) {
  return <h2 className={`text-2xl mt-8 font-light ${className}`}>{title}</h2>;
}

export default h2;
