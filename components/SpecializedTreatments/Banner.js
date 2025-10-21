'use client'
import React from 'react'
import H1 from '@/components/ui/h1'

const Banner = () => {
  return (
    <div
      className="relative h-[100vh] lg:h-[740px]"
      id="home"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-right bg-no-repeat md:bg-[url('/specialized-treatments/nigeria-banner.webp')] bg-[url('/specialized-treatments/nigeria-mob-banner.webp')] bg-cover"></div>

      {/* Optional Gradient Overlay (uncomment if needed) */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-90"></div> */}

      {/* Content */}
      <div className="relative flex flex-col items-center justify-end h-full text-white px-4 sm:px-8 md:px-16 lg:px-36 pb-12 text-center">
        <H1
          title="Expert advisory and treatment from the most reputed specialists in India, The Middle East and ASEAN countries."
          className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-snug"
        />
      </div>
    </div>
  )
}

export default Banner
