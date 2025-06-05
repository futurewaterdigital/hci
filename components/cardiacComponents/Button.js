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
          key={index}
          className={`bg-white border border-hciSecondary rounded-xl 
            flex flex-col justify-between p-4 text-hciSecondary
            hover:bg-hciSecondary hover:text-white group
             h-full`} // ✅ Add min-h and h-full here
        >
          <div className="flex-grow flex flex-col items-center justify-start">
            <span className="font-medium capitalize group-hover:text-white text-center py-2">
              {items.title}
            </span>
            <span
              className=" font-light text-center text-black group-hover:text-white"
              dangerouslySetInnerHTML={{ __html: items.description }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Button
