'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menu } from '../../utils/data'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showContactButton, setShowContactButton] = useState(true)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const placeholders = [
    'Search for Hospital',
    'Search for Doctor',
    'Search for Treatment City',
  ]
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 2000) // Change text every 2 seconds

    return () => clearInterval(intervalId) // Clean up on unmount
  }, [])

  useEffect(() => {
    setCurrentPlaceholder(placeholders[index])
  }, [index])

  // Effect to show the contact button with a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContactButton(true)
    }, 3000) // 3-second delay

    return () => clearTimeout(timer) // Clean up on unmount
  }, [])

  return (
    <div className="z-50 absolute w-full mx-auto top-10">
      <div className="bg-white w-11/12 mx-auto rounded-lg grid grid-cols-3 px-6">
        <div className="h-20 flex items-center justify-start gap-10 p-2">
          <div>
            <button
              type="button"
              className="group h-12 w-12 rounded-lg border-0"
              data-drawer-target="drawer-form"
              data-drawer-show="drawer-form"
              aria-controls="drawer-form"
              onClick={toggleDrawer}
            >
              <div className="grid justify-items-center gap-[4px]">
                <span className="h-1 w-8 rounded-full bg-[#D84498] transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
                <span className="h-1 w-8 rounded-full bg-[#D84498] group-hover:scale-x-0 transition"></span>
                <span className="h-1 w-8 rounded-full bg-[#D84498] group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
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
                Main Menu
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
              {menu.map((items, index) => (
                <div
                  className="w-full p-2 hover:border-b hover:bg-gray-100 hover:border-gray-200 border-b border-white gap-2 mt-1"
                  key={index}
                >
                  <Link
                    href={items.url}
                    className="text-black hover:text-blue-800  font-medium rounded-0 text-lg"
                  >
                    {items.options}
                  </Link>
                </div>
              ))}

              <div className="absolute flex items-center justify-between bottom-4 w-full">
                <div className="flex mt-4 justify-center sm:mt-0">
                  {/* Social Media Links */}
                </div>
              </div>
            </div>
          </div>

          <div className="relative group flex items-center">
            <Image
              src="/qr-codes/hci.png"
              className="w-16"
              width={200}
              height={200}
              alt="healthcare international in bangalore"
            />
          </div>
        </div>

        <div className="relative h-20 flex justify-center items-center">
          <Link href="/">
            <div className="bg-white h-28 rounded-lg w-64 flex justify-center p-4">
              <Image
                src="/images/logo.png"
                width={500}
                height={100}
                className="rounded-lg"
              />
            </div>
          </Link>
        </div>

        <div className="relative flex items-center justify-end gap-0">
          <div className="group">
            <form className="mx-auto absolute group-hover:bg-white top-[12px] left-[120px] group-hover:w-[70%] group-hover:lg:w-[62%] group-hover:xl:w-[70%]">
              {/* Input Container */}
              <div className="relative flex items-center z-50 transition-all duration-1000 ease-in-out bg-white group-hover:bg-white group-hover:bg-opacity-50">
                <input
                  type="search"
                  id="default-search"
                  className="block w-0 group-hover:w-full p-4 pe-10 text-sm text-gray-900 border-0 bg-transparent transition-[width,padding] duration-500 ease-in-out group-hover:border-b-blue-500 hover:border-b-2 focus:ring-0 focus:border-b-blue-500"
                  placeholder={currentPlaceholder}
                  required
                />
                <div className="absolute inset-y-0 end-0 flex items-center pe-3 transition-transform duration-500 group">
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

          {/* Contact Us Button with Delay and Fade Effect */}
          <div
            className={`transition-opacity duration-1000 ease-in-out ${
              showContactButton ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/"
              className="sm:py-1 sm:px-1 sm:me-1 sm:mb-1 md:py-2 md:px-4 md:me-2 md:mb-2 py-2 px-4 me-2 mb-2 text-lg font-medium text-[#D84498] rounded-lg border border-[#D84498] hover:bg-[#D84498] hover:text-white opacity-100 z-50 tracking-[2px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
