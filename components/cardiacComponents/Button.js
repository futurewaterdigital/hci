import React from 'react'

function Button({ data }) {
  return (
    <div
      className={`grid grid-cols-${data.length} mt-4 space-x-2 mx-auto items-center justify-center `}
    >
      {data.map((items, index) => (
        <span
          className="bg-white border border-pink-500 text-pink-500 px-4 min-h-[80px] rounded-xl flex items-center justify-center flex-col p-2 hover:bg-hciSecondary hover:text-white"
          key={index}
        >
          <span className="font-semibold">{items.title}</span>{' '}
          <span
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: items.description }}
          />
        </span>
      ))}
    </div>
  )
}

export default Button
