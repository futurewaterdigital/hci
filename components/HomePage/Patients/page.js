import React from 'react'
import Image from 'next/image'

export default function Patients() {
  return (
    <div className="h-[43em] lg:h-[35em] relative mx-auto flex justify-center items-center bg-[#EEF7FF] lg:bg-transparent">
      <div className="lg:absolute w-full lg:h-[35em]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wavepath"
              d="M 0 2000 0 500 Q 150 371 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z"
            />
          </defs>
          <g>
            <use xlinkHref="#wavepath" y="-332" fill="#EEF7FF"></use>
          </g>
        </svg>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-11/12 absolute lg:h-[30em] gap-4 lg:mt-4 p-4 lg:p-0">
        <div className="flex flex-col justify-center lg:w-9/12 order-2 lg:order-1">
          <h4 className="text-3xl font-bold pb-10 font-roboto lg:text-left">
            Assisting Patients <hr className="w-28 h-1 bg-[#D84498]" />
          </h4>
          <p className="font-light">
            Patients can benefit from HCI’s vast, proven ecosystem to connect
            with service providers in various locations across India. They can
            choose the location and the specialist they wish to receive their
            treatment from. Further, HCI provides logistical support including
            travel, accommodation, and local transportation assistance. The
            patient is also offered support in areas such as follow-up care
            including post-treatment and monitoring. We are committed to making
            medical tourism a hassle-free and positive experience for all
            stakeholders concerned.
          </p>
        </div>
        <div className="flex justify-center items-center relative order-1 lg:order-2">
          <Image
            src="/images/patients.png"
            width={800}
            height={800}
            className="z-20"
            alt="Assisting patients in india"
          />
          {/* <div className="absolute bg-[#B8DEFF] h-[53vh] w-[47vw] lg:right-0 md:right-0 top-12 rounded-2xl p-10">
            Assisting patients
          </div> */}
        </div>
      </div>
    </div>
  )
}
