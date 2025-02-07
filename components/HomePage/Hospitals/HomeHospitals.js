import React from 'react'
import Link from 'next/link'
const hospitalName = [
  { name: 'Apollo', link: '/hospital/apollo' },
  { name: 'Aster', link: '/hospital/aster' },
  { name: 'Fortis', link: '/hospital/fortis' },
  { name: 'Manipal Hospital', link: '/hospital/manipal' },
  { name: 'Max Healthcare', link: '/hospital/max' },
]

function HomeHospitals() {
  return (
    <div className="grid grid-cols-5 gap-4 ">
      {hospitalName.map((items, index) => (
        <Link href={items.link} key={index}>
          <div className="rounded-lg border border-hciSecondary min-h-80 shadow-lg">
            <img src="" />
            <h2>{items.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default HomeHospitals
