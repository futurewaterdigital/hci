import React from 'react'

function Box({ title, data, text, myclass, header, titleCss, footerData }) {
  return (
    <div className="space-y-0">
      {title && (
        <h2
          className={`${
            titleCss
              ? titleCss
              : 'text-2xl font-bold text-center text-hciSecondary'
          }`}
        >
          {title}
        </h2>
      )}
      {text && (
        <div
          className="min-h-12 font-light"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {header && <h3 className="text-lg font-semibold py-4">{header}</h3>}
      <div className={`py-6 gap-4 ${myclass}`}>
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
      {footerData && <p>{footerData}</p>}
    </div>
  )
}

export default Box
