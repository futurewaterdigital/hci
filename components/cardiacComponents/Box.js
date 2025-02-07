import React from 'react'

function Box({ title, data, text, myclass, header }) {
  return (
    <div className="py-0">
      <h2 className={`text-2xl font-bold text-center text-hciSecondary`}>
        {title}
      </h2>
      <div className="py-2" dangerouslySetInnerHTML={{ __html: text }} />
      {header && <h3 className="text-lg font-semibold py-1">{header}</h3>}
      <div className={`gap-4 mb-12 ${myclass}`}>
        {data.map((items, index) => (
          <div className={`${items.bgColor} p-4 rounded`} key={index}>
            <h3 className="font-bold">{items.category}</h3>
            <div dangerouslySetInnerHTML={{ __html: items.description }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Box
