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
      menu: 'Head and Neck Malignancy',
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
      url: '/treatment/oncology/genitourinary-cancer',
    },
    // {
    //   menu: 'Skin Cancer',
    //   url: '/treatment/oncology/skin-cancer',
    // },
  ]

  const otherGastro = [
    {
      menu: 'Pediatric',
      url: '/treatment/oncology/pediatric-cancer',
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
    <div className="md:container mx-auto md:space-y-8 space-y-4">
      <div className="flex flex-wrap md:gap-8 gap-4 justify-center uppercase font-semibold">
        {mainGastro.slice(0, 6).map((item, index) => (
          <Link
            key={index}
            className="hover:text-hciSecondary cursor-pointer"
            href={item.url}
          >
            {item.menu}
          </Link>
        ))}
      </div>

      {/* Remaining 2 items in a second row */}
      <div className="flex md:gap-8 justify-center uppercase font-semibold">
        {mainGastro.slice(6).map((item, index) => (
          <Link
            key={index}
            className="hover:text-hciSecondary cursor-pointer"
            href={item.url}
          >
            {item.menu}
          </Link>
        ))}
      </div>
      <p className='md:container mx-auto text-start font-light pb-4'>At Healthcare International (HCI), we specialize in addressing the unique needs of Adult Patients, Pediatric, Advanced & Recurrent, and Rare Cancers. Each type presents distinct challenges, requiring personalized approaches and individually curated solutions by a cancer management team. Our extensive network and team of skilled oncologists, advanced diagnostic tools, and innovative treatment options ensure compassionate, effective care tailored to every patient’s journey. Whether treating young children, managing complex cases, or tackling rare and difficult-to-diagnose cancers, HCI is committed to delivering hope, healing, and improved outcomes.</p>

      <div>
        <h2 className="font-semibold text-2xl">
          Other Oncology Conditions
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center uppercase font-semibold pb-4">
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
