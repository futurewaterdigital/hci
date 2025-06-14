import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainOrtho = [
    {
      menu: 'ACL, PCL, and MCL Surgeries',
      url: '/treatment/orthopedics/surgeries',
    },
    {
      menu: 'Joint Replacement Surgery',
      url: '/treatment/orthopedics/joint-replacement-surgery',
    },
    {
      menu: 'Robotic Knee Replacement Surgery',
      url: '/treatment/orthopedics/robotic-knee-replacement-surgery',
    },
    {
      menu: 'Spinal Disorders',
      url: '/treatment/orthopedics/spinal-disorders',
    },
  ]

  const othersOrtho = [
    {
      menu: 'Acetabular Fractures',
      url: '/treatment/orthopedics/acetabular-fractures',
    },
    {
      menu: 'Foot and Ankle Surgery',
      url: '/treatment/orthopedics/foot-and-ankle-surgery',
    },
    {
      menu: 'Hand and Upper Limb Surgery',
      url: '/treatment/orthopedics/hand-and-upper-limb-surgery',
    },
    { menu: 'Osteosarcoma', url: '/treatment/orthopedics/osteosarcoma' },
    {
      menu: 'Pediatric Orthopedic Conditions',
      url: '/treatment/orthopedics/pediatric-orthopedic-conditions',
    },
    {
      menu: 'Rheumatoid Arthritis',
      url: '/treatment/orthopedics/rheumatoid-arthritis',
    },
    {
      menu: 'Sports Injuries',
      url: '/treatment/orthopedics/sports-injuries',
    },
  ]

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex gap-8 items-center justify-center uppercase font-semibold ">
        {mainOrtho.map((item, index) => (
          <Link
            key={index}
            className="hover:text-hciSecondary cursor-pointer"
            href={item.url}
          >
            {item.menu}
          </Link>
        ))}
      </div>
      <div>
        <h2 className="font-semibold text-2xl">Other Orthopedic Conditions</h2>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center uppercase font-semibold ">
        {othersOrtho.map((item, index) => (
          <Link
            key={index}
            className="hover:text-hciSecondary cursor-pointer"
            href={item.url}
          >
            {item.menu}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu
