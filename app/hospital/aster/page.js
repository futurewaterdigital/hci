import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/Aster.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const dataFile = [
  {
    header: {
      title: 'Aster',
      className: 'text-4xl font-bold text-pink-500 text-center',
      image: {
        src: 'https://storage.googleapis.com/a1aa/image/sSkwbOAtC9tM6XJAXIBDOUeOxkLzGpxBivU-36QjIPY.jpg',
        alt: 'Aster CMI Hospital Building',
        width: 1200,
        height: 400,
        className: 'w-full h-96 object-cover',
      },
    },
    headers: {
      title:
        'Healthcare International (HCI) and Aster Group of Hospitals: Collaborating for Optimal Health',
      content:
        'One of Healthcare International’s key collaborators in expanding healthcare accessibility is the Aster Group of Hospitals. As the official partner for both domestic and international patient outreach, we proudly work with Aster to connect patients to world-class medical care.',
      className: 'text-center text-hciPrimary text-xl font-bold',
    },

    sections: [
      {
        content: [
          'Aster Hospitals is recognized as one of India’s leading healthcare providers, renowned for its advanced medical infrastructure, exceptional expertise, and compassionate care. Their esteemed panel of doctors and specialists leverage cutting-edge technology and research-based practices to deliver exceptional medical outcomes in a patient-centered environment.',
          'As a leader in the healthcare industry, Aster Hospitals holds prestigious accreditations, like JCI, NABH, and is considered one of the best hospitals in India.',
          'The Aster Group, through its partnership with HCI, offers comprehensive, world-class care tailored to patient needs. The group is dedicated to creating a patient-centric healthcare experience, focusing on delivering high-quality care and achieving the best medical outcomes.',
          'Beyond India, HCI is partnered with all the leading healthcare providers of GCC countries. As one of the largest private healthcare providers in the region, Aster DM Healthcare Limited is collaborating with HCI to offer clinical excellence and a commitment to unparalleled patient care. Aster is among the few global healthcare entities operating across primary, secondary, tertiary, and quaternary care through its extensive network of hospitals, clinics, and pharmacies.',
          'Supported by a team of over 3,000 doctors, Aster DM Healthcare stands by its enduring promise: “We’ll treat you well.”',
          'Together, we are proud to contribute to Aster’s vision of becoming a global benchmark in patient-centric healthcare.',
        ],
      },
      {
        title: 'Our Network Facilities',
        className: 'text-center text-2xl font-bold',
        facilities: [
          {
            name: 'Aster Hospital, Whitefield',
            city: 'Bangalore',
            beds: 506,
            speciality: 'Oncology, Neuro Surgery and Organ Transplant',
          },
          {
            name: 'Aster CMI Hospital',
            city: 'Bangalore',
            beds: 500,
            speciality: 'Multi-speciality',
          },
          {
            name: 'Aster RV Hospital',
            city: 'Bangalore',
            beds: 250,
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
