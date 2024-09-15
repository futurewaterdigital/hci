import React from 'react'
import { locations } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

export default function contactUs() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8">
      <div className="pt-0 w-10/12 gap-10">
        <h4 className="text-3xl font-bold pb-10 font-roboto">
          Contact Us <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
        </h4>
        <p className="font-light">
          Healthcare International is committed to building a strong, dependable
          healthcare universe that supports both patients and partners. Whether
          you are an individual seeking quality medical services in a city of
          your preference in India or a partner that shares our passion and
          philosophy to offer quality services, we are just a call away. Do get
          in touch with us so our team can connect with you to offer all the
          knowledge you need to make an informed decision.
        </p>
      </div>

      <div className="pt-0 w-10/12 gap-10">
        <div className="pt-28 w-10/12 gap-4 grid grid-cols-3 mx-auto">
          {locations.map((items, index) => (
            <div
              className="bg-white border border-gray-200 border-t-0 rounded-lg shadow-lg shadow-b shadow-custom justify-center"
              key={index}
            >
              <div className="flex items-center bg-red-500 justify-center relative">
                <Image
                  className="rounded-t-lg w-40 absolute text-center"
                  src={items.icon}
                  alt={items.title}
                  width={100}
                  height={100}
                />
              </div>

              <div className="p-5 mt-20">
                <h5 className="mb-2 text-[25px] font-normal tracking-tight text-[#0E56A0]">
                  {items.title}
                </h5>

                {/* Only show the link if items.url exists */}
                {items.url ? (
                  <Link href={items.url}>
                    <p
                      className="mb-3 font-normal text-[#333333] text-[18px]"
                      dangerouslySetInnerHTML={{ __html: items.excerpt }}
                    />
                  </Link>
                ) : (
                  // Show only the excerpt if the URL is missing, and no "no" text.
                  <p
                    className="mb-3 font-normal text-[#333333] text-[18px]"
                    dangerouslySetInnerHTML={{ __html: items.excerpt }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
