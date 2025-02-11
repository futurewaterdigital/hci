import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const hospitalName = [
  {
    name: 'Apollo',
    link: '/hospital/apollo',
    img: '/hospitals/home_apollo.jpg',
  },
  { name: 'Aster', link: '/hospital/aster', img: '/hospitals/home_aster.jpg' },
  {
    name: 'Fortis',
    link: '/hospital/fortis',
    img: '/hospitals/home_fortis.jpg',
  },
  {
    name: 'Manipal Hospital',
    link: '/hospital/manipal',
    img: '/hospitals/home_manipal.jpg',
  },
  {
    name: 'Max Healthcare',
    link: '/hospital/max',
    img: '/hospitals/home_max.jpg',
  },
]

function HomeHospitals() {
  return (
    <div className="grid grid-cols-5 gap-4 ">
      {hospitalName.map((items, index) => (
        <Link href={items.link} key={index}>
          <div className="rounded-lg border border-hciSecondary min-h-80 hover:shadow-lg hover:scale-105 transition-all ease-in-out ">
            <Image
              src={items.img}
              width={400}
              height={500}
              className="rounded-lg w-full h-full"
            />
            {/* <h2>{items.name}</h2> */}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomeHospitals
