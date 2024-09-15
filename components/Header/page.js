'use client'
import React, { useState, useEffect } from 'react'
import { Drawer } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { menu } from '../../utils/data'
import { FaArrowCircleRight } from 'react-icons/fa'

export default function Header() {
  const [showContactButton, setShowContactButton] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleClose = () => setIsOpen(false)

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

  // Effect to show the contact button with a delay (used initially)
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
          <div className="relative group flex items-center">
            <div className="">
              <div className="flex min-h-[10vh] items-center justify-center">
                <Image
                  src="/images/menu.svg"
                  width={50}
                  height={50}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer"
                />
              </div>
              <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Main Menu" />
                <Drawer.Items className="">
                  <div className="flex flex-col">
                    {menu.map((items, index) => (
                      <Link
                        className="w-full p-2 py-3 hover:text-white hover:bg-[#D84498] rounded-lg gap-2 my-1 text-lg flex items-center justify-between"
                        key={index}
                        href={items.url}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {items.options}
                        <FaArrowCircleRight
                          className={`transition-opacity duration-300 ${
                            hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </Link>
                    ))}
                  </div>
                </Drawer.Items>
              </Drawer>
            </div>
            <Image
              src="/qr-codes/hci.png"
              className="w-16 ml-12"
              width={200}
              height={200}
              alt="healthcare international in bangalore"
            />
          </div>
        </div>

        <div className="relative h-20 flex justify-center items-center">
          <Link href="/">
            <div className="bg-white h-28 rounded-lg w-64 flex justify-center p-4 ">
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
          <div className="group z-20">
            <form className="mx-auto absolute group-hover:bg-white top-[12px] left-[160px] group-hover:w-[62%] group-hover:lg:w-[62%] group-hover:xl:w-[62%]">
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
            className={`transition-opacity duration-900 ease-in-out ${
              showContactButton ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link
              href="/contact-us"
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
