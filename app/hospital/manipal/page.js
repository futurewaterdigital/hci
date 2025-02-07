import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/Manipal.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const dataFile = [
  {
    header: {
      title: 'Manipal',
      className: 'text-4xl font-bold text-pink-600 text-center',
    },
    headers: {
      title:
        'Healthcare International (HCI) and Manipal Hospitals: Your Partners in Health and Wellness',
      content:
        'Healthcare International (HCI) is proud to partner with the renowned Manipal Group of Hospitals, a collaboration that exemplifies HCI’s mission to connect patients with world-class healthcare providers. Together, HCI and Manipal Hospitals work to deliver exceptional medical care, leveraging shared values of innovation, patient-centricity, and excellence.',
      className: 'text-center text-hciPrimary text-xl font-bold mb-4',
    },
    sections: [
      {
        title: 'The Legacy of Manipal Hospitals',
        content:
          'The legacy of Manipal Hospitals dates back to 1953, when Dr. T.M.A. Pai, the visionary founder of the Manipal Education and Medical Group (MEMG), established Kasturba Medical College in Manipal, Karnataka. In 1991, Manipal Hospitals was officially launched with its flagship 650-bed hospital at Old Airport Road, Bangalore. Today, with over 10,500 beds across 37 hospitals, Manipal Hospitals is one of India’s leading healthcare providers.',
      },
      {
        title: 'Core Values: A Patient-first Philosophy',
        content:
          'At the heart of Manipal Hospitals’ success lies its unwavering “patient-first” ethos, rooted in the belief that every life is priceless. Every doctor is a human care expert, consistently going above and beyond to deliver compassionate care. This commitment is reflected in countless stories of resilience, determination, and healing.',
      },
      {
        title: 'The Importance of Collaboration with HCI',
        content:
          'HCI’s partnership with Manipal Hospitals plays a critical role in expanding access to quality healthcare. Through this collaboration, HCI connects patients to Manipal’s extensive expertise, cutting-edge technology, and compassionate care. This synergy ensures that patients receive comprehensive and effective treatment, whether for cancer or other complex medical conditions.',
      },
      {
        title: 'A Shared Vision for Healthcare Excellence',
        content:
          'Together, HCI and Manipal Hospitals are redefining healthcare standards, making advanced medical care accessible to patients across the globe. This partnership reinforces HCI’s dedication to bridging healthcare gaps and delivering transformative care experiences.',
      },
      {
        title: 'Our Network Facilities',
        facilities: [
          {
            name: 'Manipal Hospital, Old Airport Road',
            city: 'Bangalore',
            beds: 600,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Manipal Hospital, Whitefield',
            city: 'Bangalore',
            beds: 280,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Manipal Hospital, Varthur',
            city: 'Bangalore',
            beds: 150,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Manipal Hospital, Sarjapur',
            city: 'Bangalore',
            beds: 206,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Manipal Hospital, Dwarka',
            city: 'Delhi',
            beds: 380,
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
              className={`text-2xl text-gray-800 font-bold mb-4 font-roboto ${
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
