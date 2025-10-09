'use client'
import React from 'react'
import Link from 'next/link'

const Contact = () => {
  const contacts = [
    {
      title: "Phone",
      value: "+91 9008 764 954",
      link: "tel:+919008764954",
      type: "external"
    },
    {
      title: "Email",
      value: "info@healthcareinternational.in",
      link: "mailto:info@healthcareinternational.in",
      type: "external"
    },
    {
      title: "Website",
      value: "healthcareinternational.in",
      link: "https://healthcareinternational.in",
      type: "link"
    }
  ]

  return (
    <div className="text-center pb-10 container mx-auto">
      <h3 className="text-lg font-semibold mb-6">
        Healthcare International’s Patient Coordinators are here to help you.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {contacts.map((item, index) =>
          item.type === "link" ? (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md rounded-lg p-10 bg-white hover:shadow-lg transition block"
            >
              <h3 className="text-[#0E56A0] font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-gray-800">{item.value}</p>
            </Link>
          ) : (
            <a
              key={index}
              href={item.link}
              className="shadow-md rounded-lg p-10 bg-white hover:shadow-lg transition block"
            >
              <h3 className="text-[#0E56A0] font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-gray-800">{item.value}</p>
            </a>
          )
        )}
      </div>
    </div>
  )
}

export default Contact
