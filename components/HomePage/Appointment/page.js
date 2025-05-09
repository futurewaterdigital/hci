import React from 'react'
import { Datepicker } from 'flowbite-react'

export default function Appointment() {
  return (
    <div className="bg-[#EEB133]">
      <h4 className="text-3xl font-bold pb-2 font-roboto text-center py-8">
        Make an Appointment
      </h4>

      <div className="w-9/12 mx-auto py-4">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-3 justify-center items-center">
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
            <div>
              <input
                type="text"
                id="phone_number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <div className="relative max-w-sm">
                <Datepicker />
              </div>
            </div>
            <div>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              placeholder="Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-[#D84498] focus:ring-4 focus:outline-none focus:ring-[#D84498] font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-2.5 text-center border-2 border-[#D84498] hover:bg-[#D84498] hover:text-white"
          >
             Check Availability
          </button>
        </form>
      </div>
    </div>
  )
}
