import React from 'react'

function Box({ title, data, text, myclass, header, titleCss, footerData }) {
  return (
    <div className="space-y-4">
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
        <div className="py-2" dangerouslySetInnerHTML={{ __html: text }} />
      )}
      {header && <h3 className="text-lg font-semibold py-1">{header}</h3>}
      <div className={`gap-4 mb-12 ${myclass}`}>
        {data.map((items, index) => (
          <div className={`${items.bgColor} p-4 rounded`} key={index}>
            <h3 className="font-bold">{items.category}</h3>
            <div dangerouslySetInnerHTML={{ __html: items.description }} />
          </div>
        ))}
      </div>
      {footerData && <p>{footerData}</p>}
    </div>
  )
}

export default Box
