import React from "react";

function Title({ title, className }) {
  return (
    // <h1 className="w-full text-[#D84598] lg:text-[60px] text-center font-normal text-[30px]">
    //   {title}
    // </h1>
    <h1 className={`lg:text-4xl font-bold text-center mt-6 ${className} `}>
      {title}
    </h1>
  );
}

export default Title;
