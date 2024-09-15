import React from 'react'
import Image from 'next/image'
import { valueHCI } from '@/utils/data'

export default function ourValue() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center py-8">
      <div className="pt-0 w-10/12 gap-10 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center relative">
            <Image
              src="/images/our-values.png"
              width={800}
              height={800}
              className="z-50"
              alt="Assisting patients in india"
            />
            <div className="absolute bg-[#FFE7B6] h-[27em] w-[37em] left-[9px] top-1 rounded-2xl p-10">
              Assisting patients
            </div>
          </div>
        </div>

        <div className="flex justify-start flex-col items-start gap-2">
          <h4 className="text-3xl font-bold pb-4 font-roboto">
            Our values <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          {valueHCI.map((items, index) => (
            <div className="bg-[#EEB133] p-4 text-start rounded-lg" key={index}>
              <h2 className="font-semibold text-xl">{items.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: items.excerpt }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
