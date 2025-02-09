'use client'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Header from '../../components/Header/page'
import Footer from '../../components/Footer/page'

export default function Page({ params }) {
  const [network, setNetworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noData, setNoData] = useState(null)

  const cache = useRef(new Map()) // Cache to store API responses

  useEffect(() => {
    const selectedCategory = params.slug

    // Check if data is already cached to prevent redundant API calls
    if (cache.current.has(selectedCategory)) {
      setNetworks(cache.current.get(selectedCategory))
      setLoading(false)
      return
    }

    setLoading(true)
    fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&slug=${selectedCategory}&_fields=title,content,acf.banner`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.length > 0) {
          // Sort the data if necessary
          const sortedData = data.sort((a, b) =>
            a.title.rendered.localeCompare(b.title.rendered)
          )
          setNetworks(sortedData)
          cache.current.set(selectedCategory, sortedData) // Cache the response
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
  }, [params.slug])

  return (
    <>
      <Header />
      {error && <p className="text-red-500">{error}</p>}
      {noData && <p className="text-gray-500">{noData}</p>}

      {loading ? (
        // Skeleton Loader
        <>
          <div className="animate-pulse">
            <div className="w-9/12 mx-auto mt-10">
              <div className="h-10 bg-gray-300 w-full mb-4"></div>
              <div className="h-6 bg-gray-300 w-full mb-2"></div>
              <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-300 w-1/2 mb-2"></div>
            </div>
          </div>
        </>
      ) : (
        // Actual Content
        <>
          {network.map((items, index) => (
            <React.Fragment key={index}>
              {/* {items.acf?.banner?.url ? (
                <Banner city={params.slug} banner={items.acf.banner.url} />
              ) : (
                <div className="relative h-screen bg-gray-300 animate-pulse"></div>
              )} */}

              <div className="w-9/12 mx-auto pt-40">
                <h1 className="w-full text-[#D84598] lg:text-[60px] font-normal text-[40px] text-start">
                  {items.title.rendered}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: items.content.rendered }}
                  className="font-light"
                />
              </div>
            </React.Fragment>
          ))}
          <div className="w-9/12 mx-auto text-start pt-12 ">
            <Link
              href="/"
              className="bg-[#D84598] px-8 py-4 text-white rounded-lg"
            >
              Back
            </Link>
          </div>
        </>
      )}
      <Footer />
    </>
  )
}
