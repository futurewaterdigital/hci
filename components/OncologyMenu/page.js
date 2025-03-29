import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainGastro = [
    {
      menu: 'Brain Tumor',
      url: '/treatment/oncology/brain-tumor',
    },
    {
      menu: 'Cancer in Women',
      url: '/treatment/oncology/cancer-in-women',
    },
    {
      menu: 'GI Cancer',
      url: '/treatment/oncology/gi-cancer',
    },
    {
      menu: 'Head & Neck Cancer',
      url: '/treatment/oncology/head-neck-malignancy',
    },
    {
      menu: 'Hematology',
      url: '/treatment/oncology/hematology',
    },
    {
      menu: 'Lung Cancer',
      url: '/treatment/oncology/lung-cancer',
    },
    {
      menu: 'Genitourinary Cancer',
      url: '/treatment/oncology/gynecological-cancers',
    },
  ]

  const otherGastro = [
    {
      menu: 'Pediatric',
      url: '/treatment/oncology/pediatric',
    },
    {
      menu: 'Advanced & recurrent',
      url: '/treatment/oncology/advanced-recurrent-cancers',
    },
    {
      menu: 'Rare ',
      url: '/treatment/oncology/rare-cancers',
    },
  ]

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex gap-8 items-center justify-center uppercase font-semibold ">
        {mainGastro.map((item, index) => (
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
        <h2 className="font-semibold text-2xl">
          Other Gastroenterological Conditions
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-2 items-center justify-center uppercase font-semibold ">
        {otherGastro.map((item, index) => (
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
