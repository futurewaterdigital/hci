import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/APCC.png'
import BookButton from '@/components/cardiacComponents/BookButton'
import Title from '@/components/cardiacComponents/Title'
import NetworkFacilities from '@/components/cardiacComponents/NetworkFacilities'
import HospitalPara from '@/components/cardiacComponents/HospitalPara'
import BlueHeader from '@/components/cardiacComponents/BlueHeader'

const dataFile = [
  {
    header: {
      title: 'Apollo',
      className: 'text-4xl font-bold text-pink-600 text-center',
    },
    headers: {
      title:
        'Healthcare International (HCI) and Apollo Group of Hospitals: Partners in Healthcare Excellence',
      content:
        'Healthcare International (HCI) takes immense pride in its strategic collaboration with the Apollo Group of Hospitals, a partnership that reflects HCI’s dedication to enhancing global healthcare accessibility. By joining forces with Apollo, HCI ensures seamless access to world-class medical care for both domestic and international patients, fostering trust, innovation, and excellence in healthcare delivery.',
      className: 'text-center text-hciPrimary text-xl font-bold py-8',
    },

    sections: [
      {
        title: 'The Legacy of Apollo Hospitals',
        content:
          'Established in 1983 by Dr. Prathap C. Reddy, widely regarded as the architect of modern Indian healthcare, Apollo Hospitals introduced India’s first corporate hospital, revolutionizing private healthcare. Today, Apollo is Asia’s leading integrated healthcare services provider, with a robust presence across the medical spectrum, including hospitals, pharmacies, primary care and diagnostic clinics, and innovative retail health models.',
        desc: 'With over 10,000 beds across 73 hospitals, 5,000+ pharmacies, and 378+ primary care clinics, Apollo remains anchored in its core values of clinical excellence, affordable care, and advanced technology.',
      },
      {
        title: 'Innovation at the Forefront',
        content:
          'Apollo Hospitals consistently sets benchmarks in medical innovation. It was among the first globally to seamlessly integrate technology into healthcare. A testament to this is the Apollo Proton Cancer Centre in Chennai, which introduced South East Asia’s first Proton Therapy facility, a transformative leap in cancer care.',
        desc: 'Since its inception, Apollo has touched the lives of over 150 million patients from 140 countries, offering compassionate, patient-centric care through its hallmark “Tender Loving Care” (TLC) philosophy. Initiatives such as the "Billion Hearts Beating Foundation" further highlight Apollo’s commitment to preventive healthcare and heart health awareness.',
      },
      {
        title: 'A Vision for Accessible Healthcare: HCI’s Role',
        content:
          'HCI’s partnership with Apollo embodies a shared vision of expanding healthcare accessibility and providing cutting-edge medical solutions to patients worldwide. As Apollo’s official partner for international and domestic patient outreach, HCI plays a critical role in bridging geographical gaps, enabling patients to access Apollo’s advanced care and expertise.',
      },
      {
        title: 'Apollo Hospitals at a Glance',
        stats: {
          Hospitals: 72,
          Beds: '10,000+',
          Pharmacies: '5,000+',
          PrimaryCareClinics: '378+',
          DiagnosticCenters: '1,500+',
          TelemedicineCenters: 200,
          MedicalEducationCenters: '15+',
        },
      },
      {
        title: 'A Commitment to Excellence',
        content:
          'Together, HCI and Apollo Hospitals are redefining healthcare standards, setting benchmarks for trust, innovation, and patient-centered care. This partnership continues to drive forward the vision of making world-class healthcare accessible to all, delivering hope, healing, and excellence.',
      },
    ],

    networkFacilities: {
      title: 'Our Network Facilities',
      className: 'text-center text-2xl font-bold text-gray-800',
      facilities: [
        {
          name: 'Indraprastha Apollo Hospital',
          city: 'Delhi',
          beds: 710,
          speciality: 'Multi-speciality',
        },
        {
          name: 'The Apollo Hospital, Bannerghatta Road',
          city: 'Bangalore',
          beds: 250,
          speciality: 'Multi-speciality, Cyberknife facility',
        },
        {
          name: 'Apollo Hospitals, Greams Road',
          city: 'Chennai',
          beds: 560,
          speciality: 'Multi-speciality',
        },
        {
          name: 'Apollo Cancer Centre',
          city: 'Chennai',
          beds: 300,
          speciality: 'Comprehensive cancer care',
        },
        {
          name: 'Apollo Proton Cancer Centre & Apollo Hospitals Jubilee Hills',
          city: 'Chennai',
          beds: 150,
          speciality:
            'Most advanced cancer care in South-East Asia, Proton Therapy treatment',
        },
        {
          name: 'Apollo Hospitals, Navi Mumbai',
          city: 'Mumbai',
          beds: 500,
          speciality: 'Multi-speciality',
        },
        {
          name: 'Apollo Hospitals, Jubilee Hills',
          city: 'Hyderabad',
          beds: 550,
          speciality: 'Multi-speciality, with best Rehab centre',
        },
      ],
    },
  },
]

function Page() {
  return (
    <>
      <Banner image={bannerImage} />
      <div className="lg:container mx-auto my-6 space-y-12">
        <Title title={dataFile[0].header.title} />
      </div>
      <BlueHeader dataFile={dataFile} />
      <div className="lg:container mx-auto mt-6 space-y-12">
        <HospitalPara dataFile={dataFile} />
        <NetworkFacilities dataFile={dataFile} />
        <BookButton />
      </div>
    </>
  )
}

export default Page
