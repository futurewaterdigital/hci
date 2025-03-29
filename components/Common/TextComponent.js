import React from 'react'

function Button({ title, description, boxCss }) {
  return (
    <div
      className={`flex  flex-col p-2 ${
        boxCss ? boxCss : ' items-center justify-center'
      }`}
    >
      <span className="font-semibold">{title}</span>
      <span
        className="font-light"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default Button
