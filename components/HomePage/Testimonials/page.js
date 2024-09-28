'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('7') // Default to the first category
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noData, setNoData] = useState(null)

  const categories = [
    { category: 'PATIENTS', id: 'testimonials', categoryId: '7' },
    { category: 'DOCTORS', id: 'testimonialsdoctors', categoryId: '9' },
    { category: 'HOSPITALS', id: 'testimonialshospitals', categoryId: '8' },
  ]

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&categories=${selectedCategory}&status=publish`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.length > 0) {
          setTestimonials(data)
          console.log(data)
          setNoData(null)
        } else {
          setNoData('No Data Available')
          setTestimonials([])
        }
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [selectedCategory])

  const handleTestimonials = (id) => {
    setSelectedCategory(id)
  }

  const getButtonClass = (id) => {
    return `border border-pink-500 font-medium rounded-lg text-sm px-16 lg:py-2.5 py-4 text-center me-2 mb-2 md:w-auto sms:w-[400px] sxs:w-[250px] ${
      id === selectedCategory
        ? 'bg-pink-500 text-white'
        : 'hover:bg-hciSecondary hover:text-white text-[#D84498]'
    }`
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="py-10">
      <div className="w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            Testimonials <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="text-1xl lg:w-11/12 mx-auto font-bold ">
            Discover the transformative power of our services through the
            inspiring stories of our patients and partners.
          </p>
        </div>
        <div>
          <div className="grid sms:grid-cols-1 md:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 py-10 mx-auto xl:w-7/12 md:w-11/12 sm:w-11/12">
            {categories.map((item) => (
              <div
                key={item.categoryId}
                className="flex justify-end items-center mx-auto"
                id={item.id}
              >
                <button
                  type="button"
                  className={getButtonClass(item.categoryId)}
                  onClick={() => handleTestimonials(item.categoryId)}
                >
                  {item.category}
                </button>
              </div>
            ))}
          </div>
        </div>
        {loading ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sms:grid-cols-1 grid-cols-1 items-center justify-center mx-auto gap-4 py-10 xl:w-11/12 lg:w-full">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  className="bg-white border border-gray-200 rounded-lg hover:border-[#D84498] group relative animate-pulse"
                  key={index}
                >
                  <div className="w-24 h-24 my-3 rounded-full mx-auto bg-gray-200"></div>
                  <div className="p-5">
                    <h5 className="text-xl font-normal tracking-tight text-black bg-gray-200 h-6 w-3/4 rounded"></h5>
                    <p className="py-3 font-light text-gray-400 text-[12px] h-[150px] bg-gray-200 rounded"></p>
                  </div>
                  <div className="absolute mt-[-35px] right-4 bg-gray-200 h-6 w-12 rounded"></div>
                </div>
              ))}
          </div>
        ) : (
          <>
            {noData ? (
              <div className="py-10 w-11/12 text-center mx-auto">
                <p className="text-xl font-light">{noData}</p>
              </div>
            ) : (
              <div className="overflow-x-scroll whitespace-nowrap scrollbar-hide py-10">
                <div className="xl:inline-flex lg:inline-flex gap-4 sms:grid-cols-1 sms:grid xs:grid xs:grid-cols-3">
                  {testimonials.map((item, index) => (
                    <div
                      className="bg-white border border-gray-200 rounded-lg hover:border-[#D84498] group relative inline-block mx-auto xl:w-[100%] lg:w-[380px] md:w-[380px] "
                      key={index}
                    >
                      <Image
                        className="w-24 h-24 my-3 rounded-full shadow-lg mx-auto"
                        src={item.featured_media_url}
                        alt={item.title.rendered}
                        width={100}
                        height={100}
                      />
                      <div className="p-5">
                        <h5
                          className="text-xl font-normal tracking-tight text-black group-hover:text-[#D84498]"
                          dangerouslySetInnerHTML={{
                            __html: item.title.rendered,
                          }}
                        />
                        {item.categories[0] === 9 && (
                          <p className="text-gray-500 text-sm text-wrap">
                            {item.acf.designation ? item.acf.designation : ''}
                          </p>
                        )}
                        {item.categories[0] === 8 && (
                          <p className="text-gray-500 text-sm text-wrap">
                            {item.acf.designation ? item.acf.designation : ''}
                          </p>
                        )}
                        <p
                          className="py-3 font-light text-gray-800 text-[14px] lg:h-[190px] xl:h-[190px] md:h-[190px] sms:h-[190px] text-wrap sxs:h-[300px]"
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                        />
                      </div>
                      <div className="absolute mt-[-35px] right-4">
                        <Image
                          src="/images/quotes.svg"
                          alt={item.title.rendered}
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
