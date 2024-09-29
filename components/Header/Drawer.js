'use client'
import React, { useState } from 'react'
import { Drawer } from 'flowbite-react'
import Link from 'next/link'
import { FaArrowCircleRight } from 'react-icons/fa'
import { menu } from '../../utils/data'

function Drawers({ isOpen, handleClose }) {
  const [hoveredIndex, setHoveredIndex] = useState()

  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <Drawer.Header title="Main Menu" />
      <Drawer.Items>
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
  )
}

export default Drawers
