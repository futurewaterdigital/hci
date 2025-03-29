import React from 'react'
import Link from 'next/link'

function Menu() {
  const mainNeuro = [
    {
      menu: 'Benign peripheral nerve tumour',
      url: '/treatment/neuro-sciences/benign-peripheral-nerve-tumour',
    },
    {
      menu: 'Brain Metastases',
      url: '/treatment/neuro-sciences/brain-metastases',
    },
    {
      menu: 'Brain Tumour and Brain Cancer',
      url: '/treatment/neuro-sciences/brain-tumour-and-brain-cancer',
    },
    {
      menu: 'Pituitary Tumours',
      url: '/treatment/neuro-sciences/pituitary-tumours',
    },
    {
      menu: 'Peripheral Nerve Disorders',
      url: '/treatment/neuro-sciences/peripheral-nerve-disorders',
    },
    {
      menu: 'Spinal Cord Disorders',
      url: '/treatment/neuro-sciences/spinal-cord-disorders',
    },
  ]

  const otherNeuro = [
    {
      menu: 'Cerebral Palsy',
      url: '/treatment/neuro-sciences/cerebral-palsy',
    },
    {
      menu: 'Chiari Malformation',
      url: '/treatment/neuro-sciences/chiari-malformation',
    },
    {
      menu: 'Epilepsy',
      url: '/treatment/neuro-sciences/epilepsy',
    },
    { menu: 'Hydrocephalus', url: '/treatment/neuro-sciences/hydrocephalus' },
    {
      menu: 'Multiple Sclerosis (MS)',
      url: '/treatment/neuro-sciences/multiple-sclerosis',
    },
    {
      menu: 'Neurodegenerative Disorders',
      url: '/treatment/neuro-sciences/neurodegenerative-disorders',
    },
    {
      menu: "Parkinson's Disease and Movement Disorders",
      url: '/treatment/neuro-sciences/parkinsons-disease-and-movement-disorders',
    },
    {
      menu: 'Seizure Disorders',
      url: '/treatment/neuro-sciences/seizure-disorders',
    },
    {
      menu: 'Trigeminal Neuralgia',
      url: '/treatment/neuro-sciences/trigeminal-neuralgia',
    },
    {
      menu: 'Stroke',
      url: '/treatment/neuro-sciences/stroke',
    },
    {
      menu: 'Traumatic Brain Injuries (TBI)',
      url: '/treatment/neuro-sciences/traumatic-brain-injuries',
    },
  ]

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex gap-8 items-center justify-center uppercase font-semibold ">
        {mainNeuro.map((item, index) => (
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
          Other Neurological Conditions
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-2 items-center justify-center uppercase font-semibold ">
        {otherNeuro.map((item, index) => (
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
