import React from 'react'
// import { CheckCircle } from 'lucide-react' // Optional: icon lib

function Button({ title, description, boxCss, isList = false }) {
  return (
    <div className={`flex flex-col items-center p-4 ${boxCss || ''}`}>
      <span className="font-medium text-center">{title}</span>

      {isList ? (
        <ul className="list-none space-y-2 w-full text-start pt-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="-mt-1 text-2xl">•</span> {/* or use <CheckCircle size={16} /> */}
              <span>
                <strong>{item.bold}</strong> {item.text}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <span className="font-light text-center pt-2">{description}</span>
      )}
    </div>
  )
}

export default Button
