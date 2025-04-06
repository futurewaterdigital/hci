import React from "react";

function Box({
  title,
  data,
  text,
  myclass,
  header,
  titleCss,
  footerData,
  headerCss,
  textCss,
}) {
  return (
    <div className="space-y-0">
      {title && (
        <h2
          className={`${
            titleCss ? titleCss : "text-2xl font-bold text-center text-black"
          }`}
        >
          {title}
        </h2>
      )}
      {text && (
        <div
          className={`font-light ${textCss}`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}

      {header && (
        <h3 className={`font-semibold py-4 ${headerCss}`}>{header}</h3>
      )}

      <div className={`gap-4 ${myclass}`}>
        {data.map((items, index) => (
          <div className={`${items.bgColor} p-4 rounded`} key={index}>
            <h3 className="font-bold">{items.category}</h3>

            <div
              className="font-light"
              dangerouslySetInnerHTML={{ __html: items.description }}
            />
          </div>
        ))}
      </div>
      {footerData && <p className="font-light py-2">{footerData}</p>}
    </div>
  );
}

export default Box;
