import React from "react";

function h3({ title, className }) {
  return (
    <h2 className={`font-medium text-black mt-6 ${className?className:'font-medium text-2xl'}`}>
      {title}
    </h2>
  );
}

export default h3;
