import React from 'react'
// import { CheckCircle } from 'lucide-react'

function Button({ title, description, boxCss, isList = false }) {
  return (
    <div className={`flex flex-col items-start p-4 ${boxCss || ''}`}>
      <span className="font-medium text-start">{title}</span>

      {isList ? (
        <ul className="list-none space-y-2 w-full text-start pt-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="-mt-1 text-2xl">•</span>
              <span>
                <strong>{item.bold}</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div
          className="font-light text-start pt-2 "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  )
}

export default Button
