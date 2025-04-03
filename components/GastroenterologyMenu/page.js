import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainGastro = [
    {
      menu: 'Cancers of the Digestive System',
      url: '/treatment/gastroenterology/cancers-digestive-system',
    },
    {
      menu: 'Colon polyps',
      url: '/treatment/gastroenterology/colon-polyps',
    },
    {
      menu: 'Gallbladder Stone',
      url: '/treatment/gastroenterology/gallbladder-stones',
    },
  ]

  const otherGastro = [
    {
      menu: 'Celiac Disease',
      url: '/treatment/gastroenterology/celiac-disease',
    },
    {
      menu: 'Gastroesophageal Reflux Disease (GERD)',
      url: '/treatment/gastroenterology/gastroesophageal-reflux-disease',
    },
    {
      menu: 'Gastritis',
      url: '/treatment/gastroenterology/gastritis',
    },
    {
      menu: 'Gastroenteritis',
      url: '/treatment/gastroenterology/gastroenteritis',
    },
    {
      menu: 'Diverticulitis',
      url: '/treatment/gastroenterology/diverticulitis',
    },
    {
      menu: 'Gastric Ulcer',
      url: '/treatment/gastroenterology/gastric-ulcer',
    },
    {
      menu: 'Ulcerative colitis (UC)',
      url: '/treatment/gastroenterology/ulcerative-colitis',
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
