import React from "react";

function Conclusion({ data }) {
  return (
    <>
      {data.map((items, index) => (
        <div key={index} className="">
          <h2 className="text-2xl text-center font-medium mb-4">{items.header}</h2>
          <div
            className="text-gray-700 mb-4 font-light space-y-2"
            dangerouslySetInnerHTML={{ __html: items.paragraph }}
          />
        </div>
      ))}
    </>
  );
}

export default Conclusion;
