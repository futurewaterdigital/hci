import React from 'react'
// import Link from 'next/link'
import { bannerContent } from '../../../utils/data'

function Banner() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/banner.png')]"></div>
      <div className="absolute h-[300px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E56A0] via-[#0E56A0] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <p className="text-4xl text-center">
            The Best Doctors and Hospitals for your
          </p>
          <h1 className="text-5xl text-center font-medium">
            Medical Condition Guided by Us
          </h1>

          <div className="grid grid-cols-3 gap-4 p-20">
            {bannerContent.map((items, index) => (
              <button
                key={index}
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-[30px] font-light text-[#0E56A0] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#0E56A0] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#0E56A0]"
              >
                {items.treatment}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
