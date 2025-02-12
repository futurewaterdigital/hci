import React from 'react'

function Bullets({ data, desc, footerdata, head, footerTitle }) {
  return (
    <div className="py-4">
      {data.map((data, index) => (
        <div
          className="border border-[#D84498] rounded-lg shadow-lg flex flex-col p-4"
          key={index}
        >
          {data && <h2 className="text-lg font-bold mb-4">{data.heading}</h2>}
          {desc && (
            <p className=" mb-4" dangerouslySetInnerHTML={{ __html: desc }} />
          )}
          {head && (
            <p
              className="font-semibold pb-2"
              dangerouslySetInnerHTML={{ __html: head }}
            />
          )}
          <ul className="space-y-4 list-disc list-outside text-hciSecondary">
            {data.aneurysmSymptoms.map((symptom, index) => (
              <li key={index} className="ml-6">
                <p className="text-black">
                  <strong className="text-hciSecondary">{symptom.title}</strong>
                  {symptom.title && ':'} {symptom.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="py-4">
            {footerTitle && <p className="font-semibold">{footerTitle}</p>}
            <p className="">{footerdata}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bullets
