import React from 'react'

function Banner() {
  return (
    <div className="relative h-[100vh]">
      <div className="absolute inset-0 bg-center  bg-no-repeat bg-[url('/mobile/abouts-us-new.jpg')] bg-cover lg:hidden"></div>
      <div className="absolute inset-0 bg-right  bg-no-repeat bg-[url('/images/abouts-us-new.jpg')] bg-cover hidden lg:block"></div>
      <div className="absolute h-[170px] w-full bottom-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e57a0] via-[#0e57a0cf] to-transparent opacity-80"></div>
        <div className="relative flex flex-col items-center h-full text-white">
          <p className="lg:text-4xl text-3xl text-center">
            A Comprehensive Solution
          </p>
          <h1 className="lg:text-5xl text-3xl text-center font-medium lg:pt-2">
            For Over A Thousand Diseases
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
