'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Network() {
  const [selectedCategory] = useState('10') // Default to the first category
  const [network, setNetworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noData, setNoData] = useState(null)
  // const [canScrollLeft, setCanScrollLeft] = useState(false)
  // const [canScrollRight, setCanScrollRight] = useState(true)

  const scrollContainerRef = useRef(null)

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
          const sortedData = data.sort((a, b) =>
            a.title.rendered.localeCompare(b.title.rendered)
          ) // Alphabetical sort
          setNetworks(sortedData)
          setNoData(null)
        } else {
          setNoData('No Data Available')
          setNetworks([])
        }
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [selectedCategory])

  // const handleScroll = () => {
  //   const container = scrollContainerRef.current
  //   setCanScrollLeft(container.scrollLeft > 0)
  //   setCanScrollRight(
  //     container.scrollLeft + container.clientWidth < container.scrollWidth
  //   )
  // }

  // const scroll = (direction) => {
  //   const container = scrollContainerRef.current
  //   const scrollAmount = direction === 'left' ? -300 : 300
  //   container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  // }

  return (
    <div className="py-10 z-10 relative">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            The HCI Network
            <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="font-light">
            The HCI, an undertaking of GSC Pvt. Ltd, consists of leading
            hospitals and clinics with state-of-the-art infrastructure with
            50,000 enlisted medical beds, accredited by the Joint Commission
            International (JCI). The ecosystem includes specialised medical
            centres with expertise in cardiology, oncology, neurology, and more.
            Included are 700 top-tier doctors and surgeons providing
            compassionate care with access to 700 operation theatres.
          </p>
        </div>

        <div className="py-10 z-10 relative">
          {error && <p>{error}</p>}
          {noData && <p>{noData}</p>}

          {/* Arrows */}
          {/* {canScrollLeft && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-20"
              onClick={() => scroll('left')}
            >
              ◀
            </button>
          )}
          {canScrollRight && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-20"
              onClick={() => scroll('right')}
            >
              ▶
            </button>
          )} */}

          <div
            className="flex gap-4 overflow-x-scroll scrollbar-hide"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {loading
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[#EEF7FF] border border-[#EEF7FF] rounded-lg shadow flex flex-col items-center animate-pulse"
                    >
                      <div className="bg-gray-300 h-24 w-24 mb-4 rounded-full"></div>
                      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  ))
              : network.map((items, index) => (
                  <div
                    className="min-w-[250px] p-6 bg-[#EEF7FF] border border-[#EEF7FF] hover:border-[#a3caec] rounded-lg shadow flex flex-col items-center group"
                    key={index}
                  >
                    <Image
                      src={items.featured_media_url}
                      width={100}
                      height={100}
                      alt={`Health Care in ${items.title.rendered}`}
                    />
                    <h4 className="text-2xl font-medium text-[#0E56A0] py-4">
                      {items.title.rendered}
                    </h4>
                    <Link
                      href={`city/${items.slug}`}
                      className="py-1 px-4 me-2 mb-2 text-1xl font-[30px] text-[#0E56A0] rounded-lg border border-[#0E56A0] group-hover:bg-[#0E56A0] group-hover:text-white opacity-100 z-20 tracking-wider"
                    >
                      KNOW MORE
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Network
