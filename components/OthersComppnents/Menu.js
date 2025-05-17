import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainCardio = [
    { menu: 'General Surgery', url: '/treatment/others/general-surgery' },
    {
      menu: 'Gynecology & Infertility',
      url: '/treatment/others/gynecology-infertility',
    },
    {
      menu: 'multi-organ transplant',
      url: '/treatment/others/multi-organ-donation-transplantation',
    },
    { menu: 'pediatrics', url: '/treatment/others/pediatrics' },
  ]

  const othersCardio = [
    {
      menu: 'plastic surgery',
      url: '/treatment/others/aesthetic-cosmetic-plastic-surgery',
    },
    {
      menu: 'sports medicine',
      url: '/treatment/others/sports-medicine',
    },
    {
      menu: 'urology',
      url: '/treatment/others/urology',
    },
  ]

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex gap-8 items-center justify-center uppercase font-semibold ">
        {mainCardio.map((item, index) => (
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
        <h2 className="font-semibold text-2xl">Other Conditions</h2>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center uppercase font-semibold w-5/12 mx-auto">
        {othersCardio.map((item, index) => (
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
