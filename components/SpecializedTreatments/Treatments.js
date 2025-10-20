'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const treatments = [
  { title: "Cardiac Sciences", img: "/specialized-treatments/cardiac-science.png", link: "/treatment/cardiac-sciences" },
  { title: "Oncology", img: "/specialized-treatments/oncology.png", link: "/treatment/oncology" },
  { title: "Neurosciences", img: "/specialized-treatments/neurosciences.png", link: "/treatment/neuro-sciences" },
  { title: "Gastroenterology", img: "/specialized-treatments/gastroenterology.png", link: "/treatment/gastroenterology" },
  { title: "Orthopedics", img: "/specialized-treatments/orthopedic.png", link: "/treatment/orthopedics" },
  { title: "Other Conditions", img: "/specialized-treatments/other-conditions.png", link: "/treatment/others" },
]

const Treatments = () => {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-xl sm:text-2xl lg:text-5xl font-semibold leading-snug px-2 sm:px-6">
          Bespoke medical solutions for your medical problems
          <br className="hidden sm:block" /> by a team of the best experts, curated by HCI.
        </p>

        <hr className="w-32 sm:w-48 lg:w-64 h-1 mx-auto my-6 bg-[#D84498] border-0 rounded" />

        <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-2">
          Specialized Treatments In
        </h3>
      </div>

      {/* Responsive Grid Layout */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 
        md:max-w-6xl 
        mx-auto
      ">
        {treatments.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="
              flex flex-col bg-white shadow-md rounded-lg overflow-hidden 
              hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out
            "
          >
            <div className="w-full h-48 sm:h-56 md:h-60 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Treatments
