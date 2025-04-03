import React from 'react'

function Button({ data }) {
  const length = data.length

  return (
    <div
      className={`grid mt-4 items-start mx-auto gap-4 
        ${length === 1 ? 'lg:grid-cols-1' : ''} 
        ${length === 2 ? 'lg:grid-cols-2' : ''} 
        ${length === 3 ? 'lg:grid-cols-3' : ''} 
        ${length === 4 ? 'lg:grid-cols-4' : ''} 
        ${length >= 5 ? 'lg:grid-cols-5' : ''}
        ${length >= 6 ? 'lg:grid-cols-6' : ''}
        ${length >= 7 ? 'lg:grid-cols-7' : ''}
        `}
    >
      {data.map((items, index) => (
        <div
          className={`bg-white border border-hciSecondary text-hciSecondary ${items.minHeight?items.minHeight:'min-h-[100px]'} rounded-xl flex items-center justify-center flex-col p-2 hover:bg-hciSecondary hover:text-white`}
          key={index}
        >
          <span className="font-medium">{items.title}</span>
          <span
            className="text-sm font-light"
            dangerouslySetInnerHTML={{ __html: items.description }}
          />
        </div>
      ))}
    </div>
  )
}

export default Button
