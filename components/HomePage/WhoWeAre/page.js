import React from 'react'

export default function WhoWeAre() {
  return (
    <div className="mt-0 flex flex-col justify-center items-center text-center">
      <div className="pt-0 w-10/12 gap-10">
        <h4 className="text-3xl font-bold pb-10 font-roboto">
          Who We Are <hr className="w-28 mx-auto h-1 bg-[#D84498]" />
        </h4>
        <p className="font-light">
          Welcome to HCI an undertaking of GSC Private Limited, a company with
          an established network of world-class healthcare facilities and
          experts across the globe including 600 international clinicians across
          15 countries. HCI envisages leveraging this ecosystem to offer
          comprehensive support to patients from various countries seeking
          expert healthcare services in India.
        </p>
        <p className="py-4 font-light">
          Patients are offered competent advice on travel, selection of
          hospitals, and choosing of procedures and specialists ensuring
          complete comfort, safety and authenticity. With HCI, your journey to
          wellness and recovery begins on the right note.
        </p>
      </div>
      <div className="md:grid lg:w-5/6 xl:w-4/6 mx-auto lg:h-56 lg:grid grid-cols-2 rounded-3xl group my-12 p-4 lg:p-0">
        <div className="h-56 text-start md:text-right lg:text-right p-4 bg-[#F1F8FF] transition-colors duration-300 ease-in-out group-hover:bg-[#D84498] lg:rounded-l-3xl md:rounded-l-3xl">
          <h5 className="text-4xl py-4 text-[#0E56A0] group-hover:text-white">
            Vision
          </h5>
          <p className="text-black font-roboto font-light group-hover:text-white">
            To create a global platform that unites
            <br />
            healthcare providers and bridges the gap <br />
            between caregivers and patients.
          </p>
        </div>
        <div className="h-56 text-left p-4 bg-[#D84498] transition-colors duration-300 ease-in-out group-hover:bg-[#F1F8FF] lg:rounded-r-3xl md:rounded-r-3xl ">
          <h5 className="text-4xl py-4 text-white group-hover:text-[#0E56A0]">
            Mission
          </h5>
          <p className="text-white font-roboto font-light group-hover:text-black">
            To create an ecosystem consisting of world-class facilities,
            specialists, and protocols capable of delivering competent
            healthcare with integrity and transparency that would be recognised
            as the gold standard in its space.
          </p>
        </div>
      </div>
    </div>
  )
}
