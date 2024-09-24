'use client'
import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/page'
import Banner from '../../../components/Networks/Banner/page'
import Footer from '../../../components/Footer/page'

export default function City({ params }) {
  const [selectedCategory] = useState(params.slug) // Default to the first category
  const [network, setNetworks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&slug=${selectedCategory}`
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

  return (
    <>
      <Header />

      {loading ? (
        // Skeleton Loader
        <>
          <div className="animate-pulse">
            <div className="relative h-screen bg-gray-300"></div>
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
              {items.acf && items.acf.banner && items.acf.banner.url ? (
                // If banner URL exists
                <Banner city={params.slug} banner={items.acf.banner.url} />
              ) : (
                // Skeleton Placeholder if no banner URL
                <div className="relative h-screen bg-gray-300 animate-pulse"></div>
              )}

              <div className="w-9/12 mx-auto">
                <div className="">
                  <h1 className="w-full text-[#D84598] text-[60px] text-center font-normal">
                    {items.title.rendered}
                  </h1>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: items.content.rendered }}
                  className="font-light"
                />
              </div>
            </React.Fragment>
          ))}
        </>
      )}

      <Footer />
    </>
  )
}
