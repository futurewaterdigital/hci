import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/Fortis.png'
import BookButton from '@/components/cardiacComponents/BookButton'
import Title from '@/components/cardiacComponents/Title'
import NetworkFacilities from '@/components/cardiacComponents/NetworkFacilities'
import HospitalPara from '@/components/cardiacComponents/HospitalPara'
import BlueHeader from '@/components/cardiacComponents/BlueHeader'

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
    ],
    networkFacilities: {
      title: 'Our Network Facilities',
      className: 'text-center text-2xl font-bold text-gray-800 py-8',
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
