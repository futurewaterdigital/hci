import React from 'react'

export default function ListBox({ data }) {
  const countLength = data.benefits.length
  return (
    <div
      className={`grid grid-cols-1 gap-6 mt-6 ${
        countLength === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'
      }`}
    >
      {data.benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-hciYellow p-6 rounded min-h-36 flex flex-col items-center justify-center"
        >
          {benefit.title && (
            <h4 className="text-lg font-bold mb-2 text-center">
              {benefit && benefit.title}
            </h4>
          )}
          <p className="text-center">{benefit.desc}</p>
        </div>
      ))}
    </div>
  )
}
