'use client'

import React from 'react'
import { medicalPartners } from '@/utils/data'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { usePathname } from 'next/navigation'
import Hospitals from '@/components/HomePage/Hospitals/HomeHospitals'

// Define the type for a Partner
interface Partner {
  imageUrl: string;
}

const Partners: React.FC = () => {
  const pathname = usePathname()

  const settings = {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full mt-16 px-2 lg:px-0">
      <div className="bg-white lg:w-11/12 mx-auto text-center">
        <h3 className="py-4 lg:text-3xl text-2xl p-4 lg:p-4">
          Our Network Hospitals
        </h3>

        {/* Conditionally render Hospitals component if on homepage */}
        {pathname === '/' && (
          <div>
            <Hospitals />
          </div>
        )}

        {/* Partners Slider */}
        <div className="w-full mx-auto p-10">
          <Slider {...settings}>
            {medicalPartners.map((partner: Partner, index: number) => (
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

export default Partners
