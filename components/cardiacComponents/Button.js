import React from 'react'

function Button({ data }) {
  const length = data.length

  return (
    <div
      className={`grid mt-4 items-start container mx-auto gap-4  ${
        data.length ? `lg:grid-cols-${length} ` : 'grid-cols-1'
      }`}
    >
      {data.map((items, index) => (
        <div
          className="bg-white border border-pink-500 text-pink-500 min-h-[150px] rounded-xl flex items-center justify-center flex-col p-2 hover:bg-hciSecondary hover:text-white"
          key={index}
        >
          <span className="font-semibold">{items.title}</span>{' '}
          <span
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: items.description }}
          />
        </div>
      ))}
    </div>
  )
}

export default Button
