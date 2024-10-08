import React from 'react'
import { whyHCI } from '@/utils/data'
import Image from 'next/image'

export default function whoHCI() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8 bg-[#FFE7B6]">
      <h4 className="text-3xl font-bold pb-0 font-roboto">
        Why HCI? <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
      </h4>
      <div className="pt-24 w-10/12 gap-10 grid lg:grid-cols-3 mx-auto grid-cols-1">
        {whyHCI.map((items, index) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow justify-center mx-auto mt-10 lg:mt-0"
            key={index}
          >
            <div className="flex items-center justify-center relative">
              <Image
                className="rounded-t-lg w-36 absolute"
                src={items.icon}
                alt={items.title}
                width={150}
                height={150}
              />
            </div>

            <div className="p-5 mt-16">
              <h5 className="mb-2 text-[25px] font-normal tracking-tight text-[#0E56A0]">
                {items.title}
              </h5>

              <p
                className="mb-3 font-light text-[#333333] text-[16px]"
                dangerouslySetInnerHTML={{ __html: items.excerpt }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
