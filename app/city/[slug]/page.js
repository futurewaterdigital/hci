import React from 'react'
import Header from '../../../components/Header/page'
import Banner from '../../../components/Networks/Banner/page'
import Footer from '../../../components/Footer/page'

export default async function City({ params }) {
  let network = []
  let noData = null
  let error = null

  try {
    const res = await fetch(
      `https://cdn.healthcareinternational.in/wp-json/wp/v2/posts?embed&slug=${params.slug}`,
      { next: { revalidate: 60 } } // Optional: Revalidate data every 60 seconds
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    // Sort the data alphabetically if available
    network =
      data.length > 0
        ? data.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered))
        : []
    noData = network.length === 0 ? 'No Data Available' : null
  } catch (err) {
    error = err.message
  }

  return (
    <>
      <Header />
      {error && <div>Error: {error}</div>}
      {noData && <div>{noData}</div>}
      {network.length === 0 ? (
        // Skeleton Loader when no network data is available
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
                <Banner
                  city={params.slug}
                  banner={items.acf.banner.url}
                  name={items.title.rendered}
                />
              ) : (
                <div className="relative h-screen bg-gray-300 animate-pulse"></div>
              )}

              <div className="w-9/12 mx-auto">
                {/* <h1 className="w-full text-[#D84598] lg:text-[60px] text-center font-normal text-[40px]">
                  {items.title.rendered}
                </h1> */}
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
