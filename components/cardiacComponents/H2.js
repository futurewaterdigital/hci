import React from 'react'

function H2({ text, textClass }) {
  return (
    <h2
      className={`${
        textClass ? textClass : 'text-center font-semibold text-xl'
      }`}
    >
      {text}
    </h2>
  )
}

export default H2
