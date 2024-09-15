'use client'
import React, { useState, useEffect } from 'react'

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const handleAccordionClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index)
  }

  const [faqs, setFaqs] = useState([]) // State to store fetched FAQs
  const [loading, setLoading] = useState(true) // State for loading status
  const [error, setError] = useState(null) // State for error handling

  useEffect(() => {
    // Fetching data when the component mounts
    fetch(
      'https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&categories=6&status=publish'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setFaqs(data) // Update FAQs state with fetched data
        setLoading(false) // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, []) // Empty dependency array to run the effect only once on mount

  if (loading) {
    return (
      <div className="pb-4">
        <div className="w-11/12 text-center mx-auto">
          <div>
            <h4 className="text-3xl font-bold pb-2 font-roboto">
              <span className="animate-pulse bg-gray-200 h-8 w-60 mx-auto rounded"></span>
              <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
            </h4>
          </div>

          <div className="items-center justify-center mx-auto py-10 text-left">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="collapse my-4 shadow-md animate-pulse bg-gray-200"
                >
                  <div className="collapse-title bg-gray-300 h-10 rounded mb-2"></div>
                  <div className="collapse-content bg-gray-300 h-24 rounded"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div> // Display error message if any
  }

  return (
    <div className="pb-4">
      <div className="w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-2 font-roboto">
            FAQs <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
        </div>

        <div className="items-center justify-center mx-auto py-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow my-4 shadow-md ${
                selectedIndex === index ? 'bg-white' : 'bg-base-200'
              }`}
            >
              <input
                type="radio"
                name="my-accordion"
                checked={selectedIndex === index}
                onChange={() => handleAccordionClick(index)}
                className="hidden"
              />
              <div
                className={`collapse-title text-xl font-normal cursor-pointer font-roboto ${
                  selectedIndex === index
                    ? 'bg-[#EEB133] text-black'
                    : 'bg-white'
                } hover:bg-[#EEB133]`}
                onClick={() => handleAccordionClick(index)}
              >
                {item.title.rendered}
              </div>
              <div
                className={`collapse-content ${
                  selectedIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p
                  className="font-light py-6"
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
