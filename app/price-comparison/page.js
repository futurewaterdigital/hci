import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/images/price-comparison.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const medicalProcedures = [
  {
    procedure: 'Heart Bypass',
    India: '$5,200',
    'Costa Rica': '$25,000',
    Korea: '$28,900',
    Malaysia: '$11,430',
    Thailand: '$15,121',
    US: '$144,000',
  },
  {
    procedure: 'Angioplasty',
    India: '$3,300',
    'Costa Rica': '$13,000',
    Korea: '$15,200',
    Malaysia: '$5,430',
    Thailand: '$3,788',
    US: '$57,000',
  },
  {
    procedure: 'Heart Valve Replacement',
    India: '$5,500',
    'Costa Rica': '$30,000',
    Korea: '$43,500',
    Malaysia: '$10,580',
    Thailand: '$21,212',
    US: '$170,000',
  },
  {
    procedure: 'Hip Replacement',
    India: '$7,000',
    'Costa Rica': '$12,500',
    Korea: '$14,120',
    Malaysia: '$7,500',
    Thailand: '$7,879',
    US: '$50,000',
  },
  {
    procedure: 'Hip Resurfacing',
    India: '$7,000',
    'Costa Rica': '$12,500',
    Korea: '$15,600',
    Malaysia: '$12,350',
    Thailand: '$15,152',
    US: '$50,000',
  },
  {
    procedure: 'Knee Replacement',
    India: '$6,200',
    'Costa Rica': '$11,500',
    Korea: '$19,800',
    Malaysia: '$7,000',
    Thailand: '$12,297',
    US: '$50,000',
  },
  {
    procedure: 'Spinal Fusion',
    India: '$6,500',
    'Costa Rica': '$11,500',
    Korea: '$15,400',
    Malaysia: '$6,000',
    Thailand: '$9,091',
    US: '$100,000',
  },
  {
    procedure: 'Dental Implant',
    India: '$1,000',
    'Costa Rica': '$900',
    Korea: '$4,200',
    Malaysia: '$345',
    Thailand: '$3,636',
    US: '$2,800',
  },
  {
    procedure: 'Lap Band',
    India: '$3,000',
    'Costa Rica': '$8,500',
    Korea: 'N/A',
    Malaysia: 'N/A',
    Thailand: '$11,515',
    US: '$30,000',
  },
  {
    procedure: 'Breast Implants',
    India: '$3,500',
    'Costa Rica': '$3,800',
    Korea: '$12,500',
    Malaysia: 'N/A',
    Thailand: '$2,727',
    US: '$10,000    ',
  },
  {
    procedure: 'Rhinoplasty',
    India: '$4,000',
    'Costa Rica': '$4,500',
    Korea: '$5,000',
    Malaysia: '$1,293',
    Thailand: '$3,901',
    US: '$8,000',
  },
  {
    procedure: 'Face Lift',
    India: '$4,000',
    'Costa Rica': '$6,000',
    Korea: '$15,300',
    Malaysia: '$3,400',
    Thailand: '$3,697',
    US: '$15,000',
  },
  {
    procedure: 'Hysterectomy',
    India: '$2,500',
    'Costa Rica': '$5,700',
    Korea: '$11,000',
    Malaysia: '$5,250',
    Thailand: '$2,727',
    US: '$15,000',
  },
  {
    procedure: 'Gastric Sleeve',
    India: '$5,000',
    'Costa Rica': '$10,500',
    Korea: 'N/A',
    Malaysia: 'N/A',
    Thailand: '$13,636',
    US: '$28,700',
  },
  {
    procedure: 'Gastric Bypass',
    India: '$5,000',
    'Costa Rica': '$12,500',
    Korea: 'N/A',
    Malaysia: '$9,450',
    Thailand: '$16,667',
    US: '$32,972',
  },
  {
    procedure: 'Liposuction',
    India: '$2,800',
    'Costa Rica': '$3,900',
    Korea: 'N/A',
    Malaysia: '$2,299',
    Thailand: '$2,303',
    US: '$9,000',
  },
  {
    procedure: 'Tummy Tuck',
    India: '$3,000',
    'Costa Rica': '$5,300',
    Korea: 'N/A',
    Malaysia: 'N/A',
    Thailand: '$5,000',
    US: '$9,750',
  },
  {
    procedure: 'Lasik (both eyes)',
    India: '$500',
    'Costa Rica': '$1,800',
    Korea: '$6,000',
    Malaysia: '$477',
    Thailand: '$1,818',
    US: '$4,400',
  },
  {
    procedure: 'Cornea (both eyes)',
    India: 'N/A',
    'Costa Rica': '$4,200',
    Korea: '$7,000',
    Malaysia: 'N/A',
    Thailand: '$1,800',
    US: 'N/A',
  },
  {
    procedure: 'Retina',
    India: '$850',
    'Costa Rica': '$4,500',
    Korea: '$10,200',
    Malaysia: '$3,000',
    Thailand: '$4,242',
    US: 'N/A',
  },
  {
    procedure: 'IVF Treatment',
    India: '$3,250',
    'Costa Rica': '$2,800',
    Korea: '$2,180',
    Malaysia: '$3,819',
    Thailand: '$9,091',
    US: 'N/A',
  },
]
const hotelData = [
  {
    category: '5-Star Hotel',
    Bangalore: '$100',
    Chennai: '$100',
    Delhi: '$133',
    Hyderabad: '$63',
  },
  {
    category: 'Static mean for 3 months (5-star)',
    Bangalore: '$9,000',
    Chennai: '$9,000',
    Delhi: '$11,970',
    Hyderabad: '$5,670',
  },
  {
    category: '3-Star Hotel',
    Bangalore: '$33',
    Chennai: '$27',
    Delhi: '$43',
    Hyderabad: '$43',
  },
  {
    category: 'Static Mean for 3 months (3-star)',
    Bangalore: '$2,970',
    Chennai: '$2,430',
    Delhi: '$3,870',
    Hyderabad: '$3,870',
  },
]

function page() {
  const countries = [
    'India',
    'Costa Rica',
    'Korea',
    'Malaysia',
    'Thailand',
    'US',
  ]
  const places = ['Bangalore', 'Chennai', 'Delhi', 'Hyderabad']

  return (
    <>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="container mx-auto p-6">
        <section className="relative py-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-pink-500 font-roboto">
              Cost Comparison
            </h1>
          </div>
        </section>

        <section className="container mx-auto px-6">
          <p class=" mb-8 font-light">
            The heavily subsidized treatment costs are a big reason why people
            are considering travelling abroad to avail the best medical
            facilities at only a fraction of what they have to pay in their home
            countries. Countries like India are able to afford world-class
            medical care at hugely discounted rates, thanks to the low cost of
            infrastructure and the ever lower doctor-patient ratio.
          </p>
          <p class=" mb-8 font-light">
            As per a cost comparison study by the American Medical Association,
            a knee replacement surgery will cost $40,000 in the US; $10,000 in
            Thailand and $13,000 in Singapore, but $6,500 in India. Similarly,
            in the US for a bone marrow transplant you will have to pay around
            $400,000; in the UK $150,000; but in India it will cost just
            $30,000. No matter what treatment you opt for, you are going to save
            around 70-75% of the total cost including health or medical
            services, wellness travel, accommodation and food services.
          </p>
          <p class=" mb-8 font-light">
            For easy reference, below is a chart for the cost comparison:
          </p>

          <div class="overflow-x-auto">
            <table className="min-w-full bg-white border border-hciPrimary">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="py-2 px-4 border border-hciPrimary font-roboto">
                    Procedures
                  </th>
                  {countries.map((country) => (
                    <th
                      key={country}
                      className="py-2 px-4 border border-hciPrimary font-roboto"
                    >
                      {country} ($)
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {medicalProcedures.map((procedure) => (
                  <tr key={procedure.procedure}>
                    <td className="py-2 px-4 border border-hciPrimary">
                      {procedure.procedure}
                    </td>
                    {countries.map((country) => (
                      <td
                        key={country}
                        className={`py-2 px-4 border border-hciPrimary ${
                          country === 'India' ? 'bg-hciYellow' : ''
                        }`}
                      >
                        {procedure[country] ? procedure[country] : 'N/A'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="max-w-6xl mx-auto text-center mt-12">
            <p class="font-light mb-8">
              The cost of treatment in India is much lower, almost three times
              less expensive in comparison to a number of western countries such
              as the United States and the United Kingdom. Just opt for
              healthcare tourism services through Healthcare International and
              get the best of healthcare services. We, at Healthcare
              International have been offering excellent assistance to foreign
              patients who visit India to avail advanced surgery treatments at
              low cost operations. Lower cost does not mean any compromise in
              quality. We are dedicated to offering the most advanced treatments
              in the world at reasonable costs so that you can fulfill your
              dream of leading a healthy life.
            </p>
            <p class="font-light mb-8">
              Irrespective of excessively lower costs, the quality of health
              care that you get here includes top-class medicines, state-of-art
              technology, internationally accredited doctors, experienced staff,
              and even excellent food service and world-class accommodation
              options. That is not all. You can even combine your medical
              procedure with a vacation or leisure activities such as
              Ayurveda/Spa sessions, beach or backwaters holiday, other beauty
              procedures, Yoga or spiritual vacation and so on. In India, you
              get the best of medical, healthcare and wellness travel services
              and that too at absolutely affordable rates.
            </p>
          </div>

          <h2 class="text-3xl text-pink-600 font-bold mb-4">
            Hotel Expenses in India
          </h2>
          <div class="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-pink-600 text-white">
                  <th className="py-2 px-4 border border-hciPrimary">Place</th>
                  {places.map((place) => (
                    <th
                      key={place}
                      className="py-2 px-4 border border-hciPrimary"
                    >
                      {place}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hotelData.map((item) => (
                  <tr key={item.category}>
                    <td className="py-2 px-4 border border-hciPrimary">
                      {item.category}
                    </td>
                    {places.map((place) => (
                      <td
                        key={place}
                        className="py-2 px-4 border border-hciPrimary"
                      >
                        {item[place]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="py-12">
            <BookButton />
          </div>
        </section>
      </div>
    </>
  )
}

export default page
