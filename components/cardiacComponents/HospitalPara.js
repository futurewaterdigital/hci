import React from 'react'
import H2 from '@/components/cardiacComponents/H2'

function HospitalPara({ dataFile }) {
  return (
    <div className="lg:container mx-auto mt-6 space-y-12 px-6 lg:px-0">
      {dataFile[0].sections.map((section, index) => (
        <section key={index} className="mb-12 space-y-6">
          <H2 text={section.title} textClass="text-start font-medium" />
          {/* <h2 className="text-2xl text-gray-800 font-bold mb-4 font-roboto"></h2> */}
          {section.content && (
            <p className="text-gray-700 font-light">{section.content}</p>
          )}
          {section.desc && (
            <p className="text-gray-700 font-light">{section.desc}</p>
          )}
          {section.stats && (
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(section.stats).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong>{' '}
                  <span className="font-light">{value}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}

export default HospitalPara
