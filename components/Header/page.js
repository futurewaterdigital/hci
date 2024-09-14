'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="z-50 absolute w-full mx-auto top-16">
      <div className="bg-white w-11/12 mx-auto rounded-lg grid grid-cols-3">
        <div className="h-24 flex items-center justify-start gap-10 p-2">
          <div>
            <button
              type="button"
              class="group h-12 w-12 rounded-lg border border-gray-400"
              data-drawer-target="drawer-form"
              data-drawer-show="drawer-form"
              aria-controls="drawer-form"
              onClick={toggleDrawer}
            >
              <div class="grid justify-items-center gap-1.5">
                <span class="h-1 w-8 rounded-full bg-gray-600 transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
                <span class="h-1 w-8 rounded-full bg-gray-600 group-hover:scale-x-0 transition"></span>
                <span class="h-1 w-8 rounded-full bg-gray-600 group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
              </div>
            </button>

            <div
              id="drawer-form"
              className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
                isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
              } bg-white w-80`}
              tabIndex="-1"
              aria-labelledby="drawer-form-label"
            >
              <h5
                id="drawer-label"
                className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
              >
                <svg
                  className="w-3.5 h-3.5 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                </svg>
                New event
              </h5>
              <button
                type="button"
                onClick={toggleDrawer}
                aria-controls="drawer-form"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <form className="mb-6">
                <div className="mb-6">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Apple Keynote"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write event description..."
                  ></textarea>
                </div>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                    </svg>
                  </div>
                  <input
                    datePicker=""
                    datePickerAutoHide
                    datePickerButtons=""
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                    placeholder="Select date"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="guests"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Guests
                  </label>
                  <input
                    type="text"
                    id="guests"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add guests"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create event
                </button>
              </form>
            </div>
          </div>

          <div className="relative group flex items-center">
            <img src="/qr-codes/sample.png" className="w-20" />
          </div>
        </div>
        <div className="relative h-24 flex justify-center items-center">
          <div className="bg-white h-28 rounded-lg w-64 flex justify-center p-4">
            <Image
              src="/images/logo.png"
              width={500}
              height={100}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-10">
          <div className="w-[230px] group">
            <form className="max-w-sm mx-auto">
              <div className="relative flex items-center  z-50">
                {/* <!-- Search input initially hidden --> */}
                <input
                  type="search"
                  id="default-search"
                  className="block w-0 group-hover:w-[230px] p-4 pe-10 text-sm text-gray-900 border-0 bg-transparent transition-all duration-300  group-hover:border-b-blue-500 hover:border-b-2 focus:ring-0 focus:border-b-blue-500"
                  placeholder="Search Doctors, Treatments, Hospitals"
                  required
                />
                {/* <!-- Search icon on the right --> */}
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 transition-transform duration-300 group">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>
          <div>
            <Link
              href="/"
              className="py-2.5 px-5 me-2 mb-2 text-lg font-medium text-[#D84498] rounded-lg border border-[#D84498] hover:bg-[#D84498] hover:text-white opacity-100 z-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
