import React from 'react'

function Banner() {
  return (
    <div className="relative h-[90vh]">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/abouts-us-new.jpg')]"></div>
      <div className="absolute h-[170px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E56A0] via-[#0E56A0] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <p className="text-4xl text-center">A Comprehensive Solution</p>
          <h1 className="text-5xl text-center font-medium pt-8 lg:pt-2">
            For Over A Thousand Diseases
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
