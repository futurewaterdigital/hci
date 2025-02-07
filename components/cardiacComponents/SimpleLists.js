import React from 'react'

function SimpleLists({ data, heading, subHeading }) {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <p className="mb-4">{subHeading}</p>
      <ul className="list-disc list-inside space-y-2">
        {data.map((items, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: items.title }} />
        ))}
      </ul>
    </section>
  )
}

export default SimpleLists
