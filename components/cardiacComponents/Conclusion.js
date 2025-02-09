import React from 'react'

function Conclusion({ data }) {
  return (
    <>
      {data.map((items, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-center mb-4">
            {items.header}
          </h2>
          <p
            className="text-gray-700 mb-4 font-light"
            dangerouslySetInnerHTML={{ __html: items.paragraph }}
          />
        </div>
      ))}
    </>
  )
}

export default Conclusion
