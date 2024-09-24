import React from 'react'

function Banner() {
  return (
    <div className="relative h-[90vh]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/abouts-us.png')]"></div>
      <div className="absolute h-[170px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E56A0] via-[#0E56A0] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <h1 className="lg:text-5xl text-4xl text-center font-medium">
            A Comprehensive Solution
          </h1>
          <p className="lg:text-5xl text-4xl font-medium text-center">
            For Over A Thousand Diseases
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
