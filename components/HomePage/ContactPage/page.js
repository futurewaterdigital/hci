import React from 'react'

function ConsultantForm() {
  return (
    <div className="w-full my-20">
      <div className="bg-white  w-9/12 mx-auto text-center rounded-lg drop-shadow-lg border border-grey-100">
        <h3 className="py-4 text-3xl">
          To Get The Best Treatment Options, Please Provide Details
        </h3>
        <div className="w-full mx-auto p-10">
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>City</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Hospital</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected class="text-gray-200">
                    Doctor
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div class="mb-6">
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Medical Conditions"
              ></textarea>
            </div>
            <div>
              <input
                class="block w-full p-2.5 mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
                id="default_size"
                type="file"
              />
            </div>
            <button
              type="submit"
              class="text-[#D84498] focus:ring-4 focus:outline-none focus:ring-[#D84498] font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center border-2 border-[#D84498] hover:bg-[#D84498] hover:text-white"
            >
               Check Availability
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConsultantForm
