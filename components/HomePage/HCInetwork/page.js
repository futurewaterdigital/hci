import React from 'react'
import { hciNetwork } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

function Network() {
  return (
    <div className="py-10">
      <div className="w-11/12 mx-auto">
        <div className="text-center">
          <h4 className="text-3xl font-bold pb-10 font-roboto">
            The HCI network
            <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
          </h4>
          <p className="font-light">
            The HCI an undertaking of GSC Pvt. Ltd network consists of leading
            hospitals and clinics with state-of-the-art infrastructure with
            50,000 enlisted medical beds, accredited by the Joint Commission
            International (JCI). Part of the ecosystem are specialised medical
            centres with expertise in cardiology, oncology, neurology,
            gastroenterology, orthopaedics, organ transplant and more. Included
            are 700 top-tier doctors and surgeons providing compassionate care
            with access to 700 operation theatres. This expanding universe
            ensures patients receive the highest quality of care, irrespective
            of the centre or the speciality they choose.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 py-10">
          {hciNetwork.map((items, index) => (
            <div
              class="p-6 bg-[#EEF7FF] border border-[#EEF7FF] hover:border-[#a3caec] rounded-lg shadow flex flex-col items-center group"
              key={index}
            >
              <Image
                src={items.image}
                width={100}
                height={100}
                alt={`Health Care in ${items.cityName}`}
              />
              <h4 className="text-2xl font-medium text-[#0E56A0] py-4">
                {items.cityName}
              </h4>
              <Link
                href="/"
                class="py-1 px-4 me-2 mb-2 text-1xl font-[30px] text-[#0E56A0] rounded-lg border border-[#0E56A0] group-hover:bg-[#0E56A0] group-hover:text-white opacity-100 z-50 tracking-wider"
              >
                KNOW MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Network
