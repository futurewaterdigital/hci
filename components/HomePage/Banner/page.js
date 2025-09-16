'use client'

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import H1 from '@/components/ui/h1'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'

// Global cache to prevent re-fetching
const cache = new Map()

function Banner() {
  const [selectedCategory] = useState('11')
  const [network, setNetworks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [noData, setNoData] = useState(null)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

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
          cache.set(selectedCategory, sortedData)
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
    <div className="relative lg:h-screen h-[100vh]" id="home">
      {/* Optimized Background Image */}
      <Image
        src="/images/homeBanner.jpg"
        alt="Medical Background"
        fill
        className="object-cover"
        priority={true} // Improve LCP
      />

      <div className="absolute lg:h-[300px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-80"></div>

        <div className="relative flex flex-col items-center lg:h-full text-white p-4">
          <p className="lg:text-4xl text-center text-2xl">
            The Best Doctors and Hospitals for your
          </p>

          <H1
            title="Medical Condition Guided by Us"
            className="text-5xl font-semibold lg:text-[60px] text-[40px] text-center"
          />

          {error && (
            <p className="text-red-500 text-center mt-4">{error}</p>
          )}
          {noData && (
            <p className="text-center text-gray-300 mt-4">{noData}</p>
          )}

          {/* Desktop Grid */}
          {!loading && network.length > 0 && (
            <div className="hidden lg:grid lg:grid-cols-3 gap-4 lg:p-[4.4em] lg:min-w-9/12 max-w-full lg:grid-flow-row mt-10 lg:mt-0">
              {network.map((items, index) => (
                <Link
                  key={index}
                  href={`treatment/${items.slug}`}
                  className="w-[270px] text-center lg:text-start py-4 px-6 text-[28px] font-light text-[#0E56A0] bg-white rounded-lg border border-gray-200 hover:bg-[#0E56A0] hover:text-white shadow"
                >
                  {items.title.rendered}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Slider */}
          <div className="lg:hidden w-full mt-6 px-6">
            <div className="relative max-w-[280px] mx-auto">

              {/* Show Loading Message Before Swiper Renders */}
              {loading ? (
                <div className="block text-center py-4 px-6 text-lg font-light text-gray-500 bg-white rounded-lg min-h-[70px] flex items-center justify-center mx-2">
                  Loading...
                </div>
              ) : network.length > 0 ? (
                <Swiper
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                  }}
                  spaceBetween={0}
                  slidesPerView={1}
                  centeredSlides={true}
                  loop={false}
                  lazy={true}
                  preloadImages={false}
                  className="w-full"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    375: { slidesPerView: 1, spaceBetween: 0 },
                    425: { slidesPerView: 1, spaceBetween: 0 },
                  }}
                >
                  {network.map((items, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={`treatment/${items.slug}`}
                        className="block text-center py-4 px-6 text-lg font-light text-[#0E56A0] bg-white rounded-lg border border-gray-200 hover:bg-[#0E56A0] hover:text-white shadow-md transition-colors duration-200 min-h-[70px] flex items-center justify-center mx-2"
                      >
                        {items.title.rendered}
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="block text-center py-4 px-6 text-lg font-light text-gray-500 bg-white rounded-lg min-h-[70px] flex items-center justify-center mx-2">
                  No items available
                </div>
              )}

              {/* Navigation Arrows */}
              {!loading && network.length > 0 && (
                <>
                  <button
                    ref={prevRef}
                    className="absolute top-1/2 -translate-y-1/2 -left-10 z-20 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <MdOutlineArrowBackIosNew className="text-[#0E56A0] text-xl" />
                  </button>

                  <button
                    ref={nextRef}
                    className="absolute top-1/2 -translate-y-1/2 -right-10 z-20 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <MdOutlineArrowForwardIos className="text-[#0E56A0] text-xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
