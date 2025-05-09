import React from 'react'

function SimpleLists({ data, heading, subHeading, headingCss }) {
  return (
    <section className="p-4">
      <h2 className={`text-2xl font-bold mb-4 ${headingCss}`}>{heading}</h2>
      <p className="mb-4 font-light">{subHeading}</p>
      <ul className="list-disc list-inside space-y-2 font-light ml-2 text-hciSecondary">
        {data.map((items, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: items.title }} />
        ))}
      </ul>
    </section>
  )
}

export default SimpleLists
