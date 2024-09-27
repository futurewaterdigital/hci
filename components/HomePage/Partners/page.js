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
    speed: 2000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
  }

  return (
    <div className="w-full mt-20 px-2 lg:px-0">
      <div className="bg-white lg:w-11/12 mx-auto text-center">
        <h3 className="py-4 lg:text-3xl text-2xl p-4 lg:p-4">
          Our Network Hospitals
        </h3>
        <div className="w-full mx-auto p-10">
          <Slider {...settings}>
            {medicalPartners.map((partner, index) => (
              <div key={index}>
                <Image src={partner.imageUrl} width={200} height={200} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ConsultantForm
