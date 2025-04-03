import React from 'react'

function h2({ title ,className}) {
  return (
    <h2 className={`text-2xl font-bold text-black mt-8 ${className}`}>
    {title}
  </h2>
  )
}

export default h2