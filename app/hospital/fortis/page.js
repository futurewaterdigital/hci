import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/Fortis.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const dataFile = [
  {
    header: {
      title: 'Fortis',
      className: 'text-6xl font-bold text-pink-500 font-roboto text-center',
    },
    headers: {
      title:
        'Healthcare International (HCI) and Fortis Healthcare Limited: Elevating Healthcare, Together',
      content:
        'Fortis Healthcare is a prominent integrated healthcare service provider in India, recognized as one of the largest and fastest-growing hospital networks in Asia. Established in 1996 with its first hospital in Mohali, Punjab, Fortis has expanded its reach significantly, operating over 54 healthcare facilities across India, as well as in Dubai, Mauritius, and Sri Lanka. The network encompasses approximately 10,000 beds and over 400 diagnostic centers, catering to a diverse range of medical needs.',
      className: 'text-center text-hciPrimary text-lg font-normal mb-8',
    },

    sections: [
      {
        title: 'Accreditations and Specialties',
        content:
          'Fortis hospitals are accredited by the Joint Commission International (JCI) and the National Accreditation Board for Hospitals & Healthcare Providers (NABH), ensuring high standards of healthcare delivery. The flagship facility, Fortis Memorial Research Institute (FMRI), has been recognized globally for its advanced medical technology and comprehensive care across multiple specialties, including oncology, cardiac sciences, organ transplants, and robotic surgeries.',
      },
      {
        title: 'Commitment to Medical Tourism',
        content:
          'Fortis Healthcare has made significant strides in attracting international patients, having treated over 200,000 medical tourists across 20 specialties. The organization is dedicated to providing world-class medical services that combine cutting-edge technology with compassionate care, positioning India as a leading destination for medical tourism.',
      },
      {
        title: 'Vision and Mission',
        content: [
          "The vision of Fortis Healthcare is encapsulated in its motto: 'Saving & Enriching Lives'. This commitment drives the organization to continuously enhance accessibility and affordability in healthcare while maintaining a focus on quality and patient satisfaction. Fortis aims to be the preferred choice for patients seeking advanced medical care both within India and globally.",
          'Overall, Fortis Healthcare stands out as a beacon of excellence in the Indian healthcare landscape, offering state-of-the-art facilities and specialized medical services that cater to both domestic and international patients.',
        ],
      },
      {
        title: 'Our Network Facilities',
        facilities: [
          {
            name: 'Fortis Hospital, Bannerghatta Road',
            city: 'Bangalore',
            beds: 284,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Fortis Memorial Research Institute, Gurugram',
            city: 'Gurugram',
            beds: 311,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Fortis Hospital, Vasantkunj',
            city: 'Delhi',
            beds: 162,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Fortis Hospital, Mulund',
            city: 'Mumbai',
            beds: 400,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Fortis Escort Heart Institute',
            city: 'Delhi',
            beds: 310,
            speciality: 'Cardiology',
          },
          {
            name: 'Fortis Hospital, Shalimarbagh',
            city: 'Delhi',
            beds: 262,
            speciality: 'Multi-speciality',
          },
        ],
      },
    ],
  },
]

function Page() {
  return (
    <>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="py-8 text-center">
        <h1 className={dataFile[0].header.className}>
          {dataFile[0].header.title}
        </h1>
      </div>
      <div className="bg-[#F1F8FF] min-h-80 flex items-center justify-center">
        <div className="container">
          <p className={dataFile[0].headers.className}>
            {dataFile[0].headers.title}
          </p>
          <p className="font-light">{dataFile[0].headers.content}</p>
        </div>
      </div>
      <main className="container mx-auto px-6 py-12">
        {dataFile[0].sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2
              className={`text-2xl text-gray-800 font-bold mb-4 ${
                section.title === 'Our Network Facilities' && 'text-center'
              }`}
            >
              {section.title}
            </h2>
            {Array.isArray(section.content) ? (
              section.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-gray-700 mb-4">{section.content}</p>
            )}
            {section.facilities && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.facilities.map((facility, i) => (
                  <div key={i} className="bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-hciSecondary font-bold mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-gray-700 mb-1">City: {facility.city}</p>
                    <p className="text-gray-700 mb-1">
                      No. of Beds: {facility.beds}
                    </p>
                    <p className="text-gray-700">
                      Speciality: {facility.speciality}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
        <div className="text-center">
          <BookButton />
        </div>
      </main>
    </>
  )
}

export default Page
