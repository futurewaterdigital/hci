import React from 'react'

function Banner({ banner, name }) {
  return (
    <div className="relative h-[74vh]">
      <div
        className="absolute inset-0 bg-contain bg-top bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${banner})` }} // Use inline styles for the dynamic URL
      >
        {/* {banner} */}
      </div>
      <div className="absolute h-[140px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center text-white h-screen">
          <h1
            className="text-[90px] text-center font-medium"
            style={{ opacity: 0.75 }}
          >
            {name}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
