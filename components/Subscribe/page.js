import React from 'react'

function page() {
  return (
      <div className='py-8'>
          
          <h6 className="text-black font-medium text-xl pb-4">Subscribe & Stay Updated</h6>
          <form>
          <div className="grid gap-6 mb-6 justify-center items-center">
                  <div className='grid grid-cols-2 gap-2'>
            <div>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Email"
                required
              />
                  </div>
                  </div>
            <div>
              <input
                type="text"
                id="email_address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Email Address"
                required
              />
                  </div>
                  
              </div>
              <div className='w-full'>
              <button
            type="submit"
            className="text-[#D84498] focus:ring-4 focus:outline-none focus:ring-[#D84498] font-medium rounded-lg text-sm w-full  px-20 py-2.5 text-center border-2 border-[#D84498] hover:bg-[#D84498] hover:text-white uppercase"
          >
            subscribe
                  </button>
                  </div>
                  </form>
    </div>
  )
}

export default page