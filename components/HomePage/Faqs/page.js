'use client'
import React, { useState } from 'react'
import { faqs } from '@/utils/data'

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleAccordionClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index)
  }

  return (
    <div className="py-10">
      <div className="w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-2 font-roboto">
            FAQs <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
        </div>

        <div className="items-center justify-center mx-auto py-10 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow bg-base-200 my-4 shadow-md"
            >
              <input
                type="radio"
                name="my-accordion"
                checked={selectedIndex === index}
                onChange={() => handleAccordionClick(index)}
                className="hidden"
              />
              <div
                className="collapse-title text-xl font-normal cursor-pointer bg-[#EEB133] font-roboto"
                onClick={() => handleAccordionClick(index)}
              >
                {item.title}
              </div>
              <div
                className={`collapse-content ${
                  selectedIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
