import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/Aster.png'
import BookButton from '@/components/cardiacComponents/BookButton'
import Title from '@/components/cardiacComponents/Title'
import NetworkFacilities from '@/components/cardiacComponents/NetworkFacilities'
import HospitalPara from '@/components/cardiacComponents/HospitalPara'
import BlueHeader from '@/components/cardiacComponents/BlueHeader'

const dataFile = [
  {
    header: {
      title: 'Aster',
      className: 'text-4xl font-bold text-pink-500 text-center',
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
        ],
      },
      {
        content: [
          'As a leader in the healthcare industry, Aster Hospitals holds prestigious accreditations, like JCI, NABH, and is considered one of the best hospitals in India.',
        ],
      },
      {
        content: [
          'The Aster Group, through its partnership with HCI, offers comprehensive, world-class care tailored to patient needs. The group is dedicated to creating a patient-centric healthcare experience, focusing on delivering high-quality care and achieving the best medical outcomes.',
        ],
      },
      {
        content: [
          'Beyond India, HCI is partnered with all the leading healthcare providers of GCC countries. As one of the largest private healthcare providers in the region, Aster DM Healthcare Limited is collaborating with HCI to offer clinical excellence and a commitment to unparalleled patient care. Aster is among the few global healthcare entities operating across primary, secondary, tertiary, and quaternary care through its extensive network of hospitals, clinics, and pharmacies.',
        ],
      },
      {
        content: [
          'Supported by a team of over 3,000 doctors, Aster DM Healthcare stands by its enduring promise: “We’ll treat you well.”',
        ],
      },
      {
        content: [
          'Together, we are proud to contribute to Aster’s vision of becoming a global benchmark in patient-centric healthcare.',
        ],
      },
    ],
    networkFacilities: {
      title: 'Our Network Facilities',
      className: 'text-center text-2xl font-bold text-gray-800 py-8',
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
  },
]

function Page() {
  return (
    <>
      <Banner image={bannerImage} />
      <div className="lg:container mx-auto mt-6 space-y-12">
        <Title title={dataFile[0].header.title} />
      </div>
      <BlueHeader dataFile={dataFile} />
      <HospitalPara dataFile={dataFile} />
      {/* end here */}

      <div className="lg:container mx-auto px-6 space-y-12 mt-6">
        <NetworkFacilities dataFile={dataFile} />
        <BookButton />
      </div>
    </>
  )
}

export default Page
