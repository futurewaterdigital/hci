import React from 'react'

function Banner({ banner }) {
  return (
    <div className="relative lg:h-screen mt-0 min-h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }} // Use inline styles for the dynamic URL
      >
        {/* {banner} */}
      </div>
      <div className="absolute h-[140px] w-full bottom-0 ">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-80"></div> */}
        {/* <div className="relative flex flex-col items-center h-full text-white">
          <h1 className="text-5xl text-center font-medium">
            You are in {city} city
          </h1>
        </div> */}
      </div>
    </div>
  )
}

export default Banner
