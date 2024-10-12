'use client'

import React from 'react'
import { medicalPartners } from '@/utils/data' // Assuming you've updated the data to include hospital and doctor mappings
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ConsultantForm() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    arrows: false,
    className: 'mx-auto',
    slidesToShow: 6,
    slidesToScroll: 6,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024, // For tablet and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For smaller devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full mt-16 px-2 lg:px-0 ">
      <div className="bg-white lg:w-11/12 mx-auto text-center">
        <h3 className="py-4 lg:text-3xl text-2xl p-4 lg:p-4">
          Our Network Hospitals
        </h3>
        <div className="w-full mx-auto p-10 ">
          <Slider {...settings}>
            {medicalPartners.map((partner, index) => (
              <div key={index}>
                <Image
                  src={partner.imageUrl}
                  width={200}
                  height={200}
                  alt={`Partner ${index}`}
                  className="w-full lg:w-11/12"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ConsultantForm
