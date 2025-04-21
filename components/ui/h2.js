import React from "react";

function h2({ title, className }) {
  return <h2 className={`${className ? className : 'text-2xl font-medium mt-8'}`}>{title}</h2>;
}

export default h2;
