import React from 'react'

function Bullets({
  data,
  desc,
  footerdata,
  head,
  footerTitle,
  ulClass,
  boxClass,
  divClass,
}) {
  return (
    <div className={`${divClass ? divClass : 'py-4 space-y-6'}`}>
      {data?.map((data, index) => (
        <div
          className={`border border-[#D84498] rounded-lg shadow-lg p-4 ${
            boxClass ? boxClass : 'flex flex-col'
          }`}
          key={index}
        >
          {data && (
            <h2 className="text-lg font-semibold mb-4">{data.heading}</h2>
          )}
          {desc && (
            <p
              className="font-light mb-4"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
          {data.description && (
            <p
              className="font-light mb-4"
              dangerouslySetInnerHTML={{
                __html: data.description ? data.description : '',
              }}
            />
          )}
          {head && (
            <p
              className="font-semibold pb-2"
              dangerouslySetInnerHTML={{ __html: head }}
            />
          )}
          <ul
            className={`space-y-4 ${
              ulClass ? ulClass : 'list-disc list-outside'
            } text-hciSecondary`}
          >
            {data.aneurysmSymptoms?.map((symptom, index) => (
              <li key={index} className="ml-6 font-light">
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
            {data.footer && (
              <p
                className="font-light mb-4"
                dangerouslySetInnerHTML={{
                  __html: data.footer ? data.footer : '',
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Bullets
