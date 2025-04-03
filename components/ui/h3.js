import React from 'react'

function h3({ title ,className}) {
  return (
    <h2 className={`text-xl font-bold text-black mt-8 ${className}`}>
    {title}
  </h2>
  )
}

export default h3