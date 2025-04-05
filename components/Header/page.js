'use client'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewSearch from '../../components/Header/searchModal'
import { usePathname } from 'next/navigation'
import Drawer from '../../components/Header/Drawer'

// Debounce utility function
const debounce = (fn, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const placeholders = ['Hospital', 'Doctor', 'Treatment']
  const [currentPlaceholder, setCurrentPlaceholder] = useState(placeholders[0])
  const [index, setIndex] = useState(0)

  // Memoized handler to open the drawer
  const handleOpen = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }, [isOpen])

  // Memoized handler to close the drawer
  const handleClose = useCallback(() => setIsOpen(false), [])

  // Update the placeholder every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 2000) // Change text every 2 seconds

    return () => clearInterval(intervalId)
  }, [placeholders.length])

  useEffect(() => {
    setCurrentPlaceholder(placeholders[index])
  }, [index, placeholders])

  // Debounced scroll handler
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 70) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }, 50) // 50ms debounce delay

    const scrollListener = () => {
      requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  // Memoize the class based on scroll and pathname
  const classnew = useMemo(() => {
    if (pathname === '/') {
      return `z-40 transition-all duration-300  ${
        isScrolled
          ? 'fixed w-full bg-white shadow-lg top-0'
          : 'absolute lg:top-6 w-full bg-red-500'
      }`
    }
    // If not home and not scrolled, no shadow
    return `z-40 w-full bg-white transition-all duration-300 ${
      isScrolled ? 'shadow fixed transition-all duration-300 ease-in-out' : ''
    }`
  }, [pathname, isScrolled])

  return (
    <div className={`${classnew}`}>
      <div
        className={`lg:w-11/12 mx-auto lg:rounded-lg lg:px-6 flex justify-between items-center bg-white`}
      >
        <div className="lg:h-20 flex items-center justify-start gap-10 p-2 lg:w-1/2 w-[100px] ">
          <div className="relative group flex items-center ">
            <div className="flex lg:min-h-[10vh] items-center justify-center cursor-pointer w-[30px] ">
              <Image
                src="/images/menu.svg"
                width={80}
                height={80}
                loading="lazy"
                onClick={handleOpen}
                className="cursor-pointer xl:w-[37px] xl:h-[40px] lg:w-[50px]"
                alt="healthcare international in bangalore"
              />
            </div>
            <Drawer isOpen={isOpen} handleClose={handleClose} />
            <div className="hidden lg:block">
              <Image
                src="/qr-codes/hci.png"
                className="w-16 ml-12"
                width={200}
                height={200}
                alt="healthcare international in bangalore"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          className={`lg:relative flex lg:justify-center items-center z-10 cursor-pointer ${
            pathname === '/' ? 'lg:h-20' : 'lg:h-10 lg:p-12 top-0'
          }`}
        >
          <Link href="/">
            <div
              className={`bg-white lg:rounded-lg lg:w-64 flex justify-center items-center p-4 mx-auto cursor-pointer ${
                pathname === '/'
                  ? 'lg:h-28 xs:h-14 sxs:h-14 sm:h-14'
                  : 'lg:h-10 xs:h-14 sxs:h-14 sm:h-14'
              }`}
            >
              <Image
                src="/images/logo.svg"
                width={500}
                height={100}
                className={`rounded-lg cursor-pointer ${
                  isScrolled
                    ? 'xl:w-9/12 lg:w-[70%] w-[120px] cursor-pointer lg:p-4 transition-all duration-300'
                    : 'xl:w-10/12 lg:w-[70%] w-[120px] cursor-pointer lg:p-4 transition-all duration-300'
                }`}
                loading="lazy"
                alt="healthcare international in bangalore"
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <Link
            href="/contact-us"
            className="lg:w-full py-2 px-2 text-[12px]
                font-medium text-[#D84498] rounded-lg border border-[#D84498] 
                hover:bg-[#D84498] hover:text-white opacity-100 z-30 tracking-[2px] mr-2"
          >
            CONTACT US
          </Link>
        </div>
        <div className="lg:flex items-center justify-end gap-0 w-1/2 hidden">
          <div className="z-20 flex flex-row justify-between">
            <div className="relative flex items-center justify-center right-[40px]">
              <NewSearch currentPlaceholder={currentPlaceholder} />
            </div>
            <div className="flex items-center">
              <Link
                href="/contact-us"
                className="lg:w-full xs:py-2 xs:px-4 lg:px-2 lg:py-2 xl:text-lg lg:text-[12px]
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
