import React from 'react'

function Button({ title, description, boxCss }) {
  return (
    <div
      className={`rounded-sm flex  flex-col p-2 ${
        boxCss ? boxCss : ' items-center justify-center'
      }`}
    >
      <span className="font-semibold">{title}</span>
      <span
        className="text-sm"
        //   dangerouslySetInnerHTML={{ __html:  }}
      >
        {description}
      </span>
    </div>
  )
}

export default Button
