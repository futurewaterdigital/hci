import React from 'react'

function h1({ title, className }) {
  return (
    <h1 className={`w-full ${className?className:'font-medium text-[#D84598] text-center mt-8 text-5xl my-12'}`}>
    {title}
  </h1>
  )
}

export default h1