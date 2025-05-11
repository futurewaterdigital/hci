import React from 'react'

function FlexBox({ data }) {
  const count = data.sections.length

  return (
    <div
      className={`grid gap-6 mb-12 ${
        count === 3
          ? 'md:grid-cols-2'
          : count === 1
          ? 'md:grid-cols-1'
          : 'md:grid-cols-2'
      }`}
    >
      {data.sections.map((section, index) => {
        const bgColor = index < 2 ? '#D84397' : '#0e56a0'

        return (
          <div
            key={index}
            style={{ backgroundColor: bgColor }}
            className="text-white p-6 rounded"
          >
            <h3 className="text-xl font-medium mb-4">
              {section.title}
            </h3>
            <p className="font-light">{section.content}</p>
            {section.bullets && (
              <ul className="list-disc list-inside font-light">
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default FlexBox
