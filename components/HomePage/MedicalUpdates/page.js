'use client'
import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
import Image from 'next/image'

export default function Blogs() {
  const [blogs, setBlogs] = useState([]) // State to store fetched blogs
  const [loading, setLoading] = useState(true) // State for loading status
  const [error, setError] = useState(null) // State for error handling

  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Fetching data when the component mounts
    fetch(
      'https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&categories=2&status=publish'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        // Sort by date in descending order and slice to get the latest 3 posts
        const sortedBlogs = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3)
        setBlogs(sortedBlogs) // Update blogs state with fetched data
        setLoading(false) // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, []) // Empty dependency array to run the effect only once on mount

  if (loading) {
    return (
      <div className="py-10 w-11/12 text-center mx-auto">
        <div className="text-3xl font-bold pb-10 font-roboto">
          <h4 className="animate-pulse bg-gray-200 h-8 w-60 mx-auto rounded"></h4>
          <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
        </div>
        <p className="text-1xl font-light w-6/12 mx-auto">
          <span className="animate-pulse bg-gray-200 h-6 w-full block rounded"></span>
        </p>
        <div className="grid grid-cols-3 items-center justify-center mx-auto gap-4 py-10 w-11/12">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white group overflow-hidden transition-all duration-300 hover:border-[#0E56A0] text-start h-full animate-pulse"
              >
                <div className="bg-gray-200 w-full h-50"></div>
                <div className="pt-5 py-4">
                  <h5 className="bg-gray-200 h-6 w-3/4 rounded"></h5>
                  <p className="bg-gray-200 h-4 w-1/4 rounded my-2"></p>
                  <p className="bg-gray-200 h-24 w-full rounded"></p>
                  <div className="bg-gray-200 h-8 w-32 rounded mt-4"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error}</div> // Display error message if any
  }

  return (
    <div className="py-10" id="medical-updates">
      <div className="lg:w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            Medical Updates <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="text-1xl font-light lg:w-6/12 mx-auto">
            Update yourself with the latest happenings and knowledge in the
            field of healthcare. Stay updated with expert analyses, trends, and
            all the information that you may want to know to stay ahead in
            medical knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center mx-auto gap-4 py-10 w-11/12">
          {blogs.map((item, index) => {
            const excerptText = item.excerpt.rendered.replace(
              /(<([^>]+)>)/gi,
              ''
            ) // Strip HTML tags
            const isLong = excerptText.length > 233
            const displayedText = isExpanded
              ? excerptText
              : excerptText.slice(0, 233)
            return (
              <div
                key={index}
                className="bg-white group overflow-hidden transition-all duration-300 hover:border-[#0E56A0] text-start h-full"
              >
                <Image
                  className="transition-transform duration-300 group-hover:scale-105 mx-auto w-full h-50"
                  src={item.featured_media_url}
                  alt={item.title.rendered}
                  width={150}
                  height={150}
                />
                <div className="pt-5 py-4">
                  <h5 className="text-xl font-normal tracking-tight text-black">
                    {item.title.rendered}
                  </h5>
                  <p>{new Date(item.date).toLocaleDateString()}</p>
                  <p className="text-gray-400 font-light py-4 h-auto">
                    {displayedText}
                  </p>
                  {isLong && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[#0E56A0] border border-[#0E56A0] group-hover:bg-[#0E56A0] group-hover:text-white font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 transition-colors duration-300 cursor-pointer"
                    >
                      {isExpanded ? 'SHOW LESS' : 'READ MORE'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
