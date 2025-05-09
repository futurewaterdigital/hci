import React from 'react'

export default function ListBox({ data }) {
  const countLength = data.benefits.length
  // console.log(countLength)
  return (
    <div
      className={`grid  gap-6 mt-6 ${
        countLength === 3
          ? 'md:grid-cols-3'
          : countLength === 4
          ? 'md:grid-cols-4'
          : countLength === 5
          ? 'md:grid-cols-5'
          : countLength === 6
          ? 'md:grid-cols-3'
          : countLength === 8
          ? 'md:grid-cols-4'
          : 'grid-cols-1' // You can add a fallback class here if needed
      }`}
    >
      {data.benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-hciYellow p-6 rounded-lg min-h-36 flex flex-col shadow-lg"
        >
          {benefit.title && (
            <h4 className="text-lg font-medium mb-2 text-center">
              {benefit && benefit.title}
            </h4>
          )}
          <p className="text-center font-light">{benefit.desc}</p>
        </div>
      ))}
    </div>
  )
}
