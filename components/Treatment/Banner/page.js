import React from 'react'

function Banner({ banner }) {
  return (
    <div className="relative h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }} // Use inline styles for the dynamic URL
      >
        {/* {banner} */}
      </div>
      <div className="absolute h-[150px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0c9] via-[#0E56A0] to-transparent opacity-80"></div>
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
