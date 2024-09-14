import React from 'react'
import { testimonials } from '@/utils/data'
import Link from 'next/link'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="py-10">
      <div className="w-11/12 text-center mx-auto">
        <div>
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            Testimonials <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="text-1xl font-light w-6/12 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum the industrys standard dummy text.
          </p>
        </div>
        <div className="grid grid-cols-3 py-10">
          <div className="flex justify-end items-center">
            <button
              type="button"
              class="border border-[#D84498] hover:bg-[#D84498] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-[#D84498] "
            >
              Patients
            </button>
          </div>
          <div className="">
            <button
              type="button"
              class="border border-[#D84498] hover:bg-[#D84498] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Doctors
            </button>
          </div>
          <div className="flex justify-start items-center">
            <button
              type="button"
              class="border border-[#D84498] hover:bg-[#D84498] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              Hospitals
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center justify-center mx-auto gap-4 py-10">
          {testimonials.map((items, index) => (
            <div
              class=" bg-white border border-gray-200 rounded-lg hover:border-[#D84498] group"
              key={index}
            >
              <Image
                class="w-24 h-24 my-3 rounded-full shadow-lg mx-auto"
                src={items.profile}
                alt=""
                width={100}
                height={100}
              />
              <div class="p-5">
                <h5 class="text-xl font-normal tracking-tight text-black group-hover:text-[#D84498]">
                  {items.name}
                </h5>
                <p className="text-gray-400 font-light">{items.designation}</p>

                <p
                  class="py-3 font-light text-gray-400 "
                  dangerouslySetInnerHTML={{ __html: items.description }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link href="" className="text-[#D84498]">
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  )
}
