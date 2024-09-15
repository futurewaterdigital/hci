import React from 'react'
import { whyHCI } from '@/utils/data'
import Image from 'next/image'

export default function whoHCI() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8 bg-[#FFE7B6]">
      <h4 className="text-3xl font-bold pb-10 font-roboto">
        Why HCI? <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
      </h4>
      <div className="pt-28 w-10/12 gap-10 grid grid-cols-3 mx-auto">
        {whyHCI.map((items, index) => (
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow justify-center"
            key={index}
          >
            <div className="flex items-center justify-center relative">
              <Image
                class="rounded-t-lg w-40 absolute"
                src={items.icon}
                alt={items.title}
                className="text-center"
                width={150}
                height={150}
              />
            </div>

            <div class="p-5 mt-20">
              <h5 class="mb-2 text-[25px] font-normal tracking-tight text-[#0E56A0]">
                {items.title}
              </h5>

              <p
                class="mb-3 font-light text-[#333333] text-[16px]"
                dangerouslySetInnerHTML={{ __html: items.excerpt }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
