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
    <div className="container mx-auto px-4 space-y-6">
      {/* Main Gastro Menu */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8 items-center justify-center text-center uppercase font-semibold text-sm sm:text-base">
        {mainGastro.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="hover:text-hciSecondary transition-colors"
          >
            {item.menu}
          </Link>
        ))}
      </div>

      {/* Section Header */}
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl text-center sm:text-left">
          Other Gastro Conditions
        </h2>
      </div>

      {/* Other Gastro Conditions */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-center justify-center text-center uppercase font-semibold text-sm sm:text-base">
        {otherGastro.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="hover:text-hciSecondary transition-colors"
          >
            {item.menu}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu
