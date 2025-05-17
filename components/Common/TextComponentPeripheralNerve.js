import React from 'react'

function Button({ title, description, boxCss }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-2 ${boxCss || ''
        }`}
    >
      <span className="font-medium">{title}</span>
      <span
        className="font-light"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default Button
