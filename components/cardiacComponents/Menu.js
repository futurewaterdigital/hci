import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainCardio = [
    { menu: 'Angioplasty', url: '/treatment/cardiac-sciences/angioplasty' },
    {
      menu: 'Aortic Aneurysm',
      url: '/treatment/cardiac-sciences/aortic-aneurysm',
    },
    {
      menu: 'By-Pass Surgery (CABG)',
      url: '/treatment/cardiac-sciences/coronary-artery-bypass-surgery',
    },
    { menu: 'Angiography', url: '/treatment/cardiac-sciences/angiography' },
  ]

  const othersCardio = [
    {
      menu: 'Congenital Heart Disease (CHD)',
      url: '/treatment/cardiac-sciences/congenital-heart-disease',
    },
    {
      menu: 'Deep Vein Thrombosis (DVT)',
      url: '/treatment/cardiac-sciences/deep-vein-thrombosis',
    },
    {
      menu: 'Heart and Lung Transplant',
      url: '/treatment/cardiac-sciences/heart-and-lung-transplants',
    },
    { menu: 'Heart Failure', url: '/treatment/cardiac-sciences/heart-failure' },
    {
      menu: 'Heart Valve Disease',
      url: '/treatment/cardiac-sciences/heart-valve-disease',
    },
    { menu: 'Pacemakers', url: '/treatment/cardiac-sciences/pacemakers' },
    {
      menu: 'Peripheral Artery Disease (PAD)',
      url: '/treatment/cardiac-sciences/peripheral-artery-disease',
    },
    {
      menu: 'Transcatheter Aortic Valve Replacement (TAVR)',
      url: '/treatment/cardiac-sciences/transcatheter-aortic-valve-replacement',
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
        <h2 className="font-semibold text-2xl">Other Cardiac Conditions</h2>
      </div>
      <div className="grid grid-cols-4 gap-2 items-center justify-center uppercase font-semibold ">
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
