import React from 'react'
import { blogs } from '@/utils/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="py-10">
      <div className="w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            Latest News <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="text-1xl font-light w-6/12 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum the industrys standard dummy text.
          </p>
        </div>

        <div className="grid grid-cols-4 items-center justify-center mx-auto gap-4 py-10">
          {blogs.map((items, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg group overflow-hidden transition-all duration-300 hover:border-[#0E56A0]"
            >
              <Image
                className="rounded transition-transform duration-300 group-hover:scale-105 mx-auto w-full h-72"
                src={items.featureImage}
                alt={items.title} // Added alt text for accessibility
                width={200}
                height={200}
              />
              <div className="p-5">
                <h5 className="text-xl font-normal tracking-tight text-black">
                  {items.title}
                </h5>
                <p
                  className="text-gray-400 font-light py-4"
                  dangerouslySetInnerHTML={{ __html: items.excerpt }}
                />

                <Link
                  href={items.readmore}
                  className="border border-[#0E56A0] group-hover:bg-[#0E56A0] group-hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-[#0E56A0] transition-colors duration-300 cursor-pointer"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
