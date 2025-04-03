import React from 'react'
import H3 from '@/components/ui/h3'

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
      {data.sections.map((section, index) => (
        <div
          key={index}
          className={`${section.bgColor} text-white p-6 rounded ${
            count === 3 && index === 2 && index === 1 ? 'md:col-span-2' : ''
          }`}
        >
          <H3 title={section.title} className="text-xl font-semibold mb-4"/>
          <p className="font-light">{section.content}</p>
          {section.bullets && (
            <ul className="list-disc list-inside font-light">
              {section.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default FlexBox
