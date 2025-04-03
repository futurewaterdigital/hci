import React from 'react'
import { GoDotFill } from 'react-icons/go'

function Treatment({ data, heading, headingCss }) {
  return (
    <div className="border border-[#D84498] rounded-lg shadow-lg flex flex-col p-4 space-y-8">
      <p dangerouslySetInnerHTML={{ __html: heading }} className={headingCss} />
      {data.map((data, index) => (
        <div className="" key={index}>
          {data && (
            <h2 className={`text-lg font-bold mb-4 text-hciSecondary `}>
              {data.heading}
            </h2>
          )}
          <ul className="space-y-4">
            {data.aneurysmSymptoms.map((symptom, index) => (
              <li key={index} className="flex item-center gap-2 ">
                <GoDotFill color="#D84498" size={10} />
                <p className="font-light">
                  <strong className="text-hciSecondary">{symptom.title}</strong>
                  {symptom.title && ':'} {symptom.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Treatment
