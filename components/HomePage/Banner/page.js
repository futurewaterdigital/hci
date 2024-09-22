import React from 'react'
import Link from 'next/link'
import { bannerContent } from '../../../utils/data'

function Banner() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/banner.png')]"></div>
      <div className="absolute lg:h-[300px] w-full bottom-0 h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E56A0] via-[#0E56A0] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <p className="text-4xl text-center">
            The Best Doctors and Hospitals for your
          </p>
          <h1 className="text-5xl text-center font-medium pt-8 lg:pt-2">
            Medical Condition Guided by Us
          </h1>

          <div className="grid lg:grid-cols-3 gap-4 p-[4.4em] lg:min-w-9/12 max-w-full lg:grid-flow-row grid-flow-col overflow-auto lg:overflow-visible">
            {bannerContent.map((items, index) => (
              <Link
                key={index}
                type="button"
                href={items.linkUrl}
                class="w-[270px] text-center lg:text-start py-4 px-6 me-2 mb-2 text-[28px] font-light text-[#0E56A0] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-[#0E56A0] hover:text-white focus:z-10 focus:ring-4 focus:ring-[#0E56A0]"
              >
                {items.treatment}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
