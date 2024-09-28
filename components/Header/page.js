'use client'
import React, { useState, useEffect } from 'react'
import { Drawer } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { menu } from '../../utils/data'
import { FaArrowCircleRight } from 'react-icons/fa'
import Search from '../../utils/Search/SearchBar'
import { usePathname } from 'next/navigation'
// import clsx from 'clsx'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false) // To track scroll status

  const handleClose = () => setIsOpen(false)

  const placeholders = ['Hospital', 'Doctor', 'Treatment']
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

  // Detect scroll position and update the header state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true) // Trigger full width and sticky on scroll
      } else {
        setIsScrolled(false) // Reset to original position
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (pathname === '/') {
    var classnew = `z-40 transition-all duration-300 ${
      isScrolled
        ? 'fixed w-full bg-white shadow-lg top-0'
        : 'absolute w-full lg:top-4'
    }`
  } else {
    var classnew = `fixed z-40 w-full bg-white transition-all duration-300`
  }

  return (
    // <div
    //   className={`z-40 transition-all duration-300 ${
    //     isScrolled
    //       ? 'fixed w-full bg-white shadow-lg top-0'
    //       : ' w-full lg:top-4'
    //   }`}
    // >
    <div className={classnew}>
      <div className="lg:w-11/12 mx-auto lg:rounded-lg px-6 flex justify-between items-center bg-white">
        <div className="h-20 flex items-center justify-start gap-10 p-2 lg:w-1/2 w-[100px]">
          <div className="relative group flex items-center">
            <div className="">
              <div className="flex min-h-[10vh] items-center justify-center cursor-pointer">
                <Image
                  src="/images/menu.svg"
                  width={80}
                  height={80}
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer xl:w-[37px] xl:h-[40px] lg:w-[50px]"
                />
              </div>
              <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="Main Menu" />
                <Drawer.Items className="">
                  <div className="flex flex-col">
                    {menu.map((items, index) => (
                      <Link
                        className="w-full p-2 lg:py-3 hover:text-white hover:bg-[#D84498] rounded-lg gap-2 my-1 text-lg flex items-center justify-between"
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
            <div className="">
              <Image
                src="/qr-codes/hci.png"
                className={`w-16 ml-12 `}
                width={200}
                height={200}
                alt="healthcare international in bangalore"
              />
            </div>
          </div>
        </div>

        <div
          className={`lg:relative flex lg:justify-center items-center z-20 cursor-pointer ${
            pathname === '/' ? 'lg:h-20' : 'lg:h-10 p-12 top-0'
          }`}
        >
          <Link href="/">
            <div
              className={`bg-white lg:rounded-lg lg:w-64 flex justify-center items-center p-4 mx-auto cursor-pointer ${
                pathname === '/' ? 'lg:h-28' : 'lg:h-10'
              }`}
            >
              <Image
                src="/images/logo.svg"
                width={500}
                height={100}
                className={`rounded-lg cursor-pointer ${
                  isScrolled
                    ? 'xl:w-8/12 lg:w-[70%] w-[100px] cursor-pointer p-4'
                    : 'xl:w-10/12 lg:w-[70%] w-[100px] cursor-pointer p-4'
                } `}
              />
            </div>
          </Link>
        </div>

        <div className="lg:flex items-center justify-end gap-0 w-1/2 hidden">
          <div className="z-20 flex flex-row justify-between">
            <div className="relative flex items-center justify-center right-[40px]">
              <Search currentPlaceholder={currentPlaceholder} />
            </div>

            <div className="flex items-center">
              <Link
                href="/contact-us"
                className="lg:w-full xs:py-2 xs:px-4 lg:px-2 lg:py-2 lg:text-lg lg:text-[12px]
                font-medium text-[#D84498] rounded-lg border border-[#D84498] 
                hover:bg-[#D84498] hover:text-white opacity-100 z-50 tracking-[2px]"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
