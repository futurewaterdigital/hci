'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

function Banner() {
  const [selectedCategory] = useState('11')
  const [network, setNetworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noData, setNoData] = useState(null)

  // Caching API results in memory
  const cache = new Map()

  useEffect(() => {
    if (cache.has(selectedCategory)) {
      setNetworks(cache.get(selectedCategory))
      setLoading(false)
      return
    }

    setLoading(true)
    fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&categories=${selectedCategory}&status=publish&_fields=title,slug,date`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.length > 0) {
          const sortedData = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          )
          setNetworks(sortedData)
          setNoData(null)
          cache.set(selectedCategory, sortedData) // Caching the result
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

  return (
    <div className="relative h-screen" id="home">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/homeBanner.jpg')]"></div>
      <div className="absolute lg:h-[300px] w-full bottom-0 h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <p className="text-4xl text-center">
            The Best Doctors and Hospitals for your
          </p>
          <h1 className="text-5xl text-center font-medium pt-8 lg:pt-2">
            Medical Condition Guided by Us
          </h1>
          {error && <p>{error}</p>}
          {noData && <p>{noData}</p>}
          {loading ? (
            <div className="grid lg:grid-cols-3 gap-4 p-[4.4em] lg:min-w-9/12 max-w-full lg:grid-flow-row grid-flow-col overflow-auto lg:overflow-visible">
              {Array(6)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-[270px] h-[60px] bg-gray-200 animate-pulse rounded-lg"
                  ></div>
                ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-4 p-[4.4em] lg:min-w-9/12 max-w-full lg:grid-flow-row grid-flow-col overflow-auto lg:overflow-visible">
              {network.map((items, index) => (
                <Link
                  key={index}
                  type="button"
                  href={`treatment/${items.slug}`}
                  className="w-[270px] text-center lg:text-start py-4 px-6 me-2 mb-2 text-[28px] font-light text-[#0E56A0] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#0E56A0] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#0E56A0]"
                >
                  {items.title.rendered}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner
