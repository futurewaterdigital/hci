import React from 'react'

export default function aSubscribe() {
  return (
    <div className="relative h-96 flex items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/subscribe.png')]"></div>
      <div className="absolute inset-0 bg-[#0E56A0] opacity-80"></div>
      <div className="relative flex flex-col items-center text-white w-6/12 mx-auto">
        <h4 className="text-3xl font-bold py-4 font-roboto">
          Subscribe & Stay updated <hr className="w-28 mx-auto h-1 bg-white" />
        </h4>
        <p className="text-xl text-center py-4 font-thin">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum the industrys standard dummy text.
        </p>
        <button
          type="button"
          class="border border-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          Subscribe
        </button>
      </div>
    </div>
  )
}
