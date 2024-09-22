'use client'
import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
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
    return `border border-pink-500 font-medium rounded-lg text-sm px-16 py-2.5 text-center me-2 mb-2 ${
      id === selectedCategory
        ? 'bg-pink-500 text-white'
        : 'hover:bg-hciSecondary hover:text-white text-[#D84498]'
    }`
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     categories.forEach((category) => {
  //       const section = document.getElementById(category.id)
  //       if (section) {
  //         const { top, bottom } = section.getBoundingClientRect()
  //         if (top >= 0 && bottom <= window.innerHeight) {
  //           setSelectedCategory(category.categoryId)
  //         }
  //       }
  //     })
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [categories])

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
          <p className="text-1xl font-light lg:w-6/12 mx-auto">
            Experience the inspiring stories from our patients and partners with
            their actual experience of excellence and impact of our service.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 py-10 mx-auto lg:w-7/12">
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
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center mx-auto gap-4 py-10 w-11/12">
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
              <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center mx-auto lg:gap-4 gap-10 py-10 w-11/12">
                {testimonials.map((item, index) => (
                  <div
                    className="bg-white border border-gray-200 rounded-lg hover:border-[#D84498] group relative"
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
                      <p
                        className="py-3 font-light text-gray-400 text-[12px] h-[150px]"
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
            )}
          </>
        )}
      </div>
    </div>
  )
}
