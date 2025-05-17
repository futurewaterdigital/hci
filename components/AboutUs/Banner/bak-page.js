import React from 'react'
import Link from 'next/link'

import { bannerContent } from '../../../utils/data'

function Banner() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/banner.png')]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E56A0] via-[#0E56A0] to-transparent opacity-80"></div>
      <div className="relative flex flex-col items-center h-full text-white top-52">
        <p className="text-4xl text-center font-light">
          The Best Doctors and Hospitals for your
        </p>
        <h1 className="text-5xl text-center font-medium">
          Medical Condition Guided by Us
        </h1>
      </div>

      <div className="absolute inset-0 grid grid-cols-5 ">
        {bannerContent.map((item, index) => (
          <div
            key={index} // Add unique key for each item
            className="relative flex justify-center items-center group flex-col p-4 group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <h2 className="text-white text-2xl relative transition-colors font-bold mt-40 leading-8">
              {item.treatment} {/* Use dynamic content */}
            </h2>
            <div className="group-hover:visible invisible pt-5 flex flex-col items-center gap-5">
              <p className="text-xl text-white text-center font-light">
                {item.treatmentDesc} {/* Use dynamic content */}
              </p>
              <Link
                href="/"
                className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-white  rounded-full border border-white group-hover:bg-[#D84498] opacity-100 z-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner
