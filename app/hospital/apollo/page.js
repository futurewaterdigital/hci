import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/APCC.png'
import BookButton from '@/components/cardiacComponents/BookButton'

const dataFile = [
  {
    header: {
      title: 'Apollo',
      className: 'text-4xl font-bold text-pink-600 text-center py-8',
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
          hospitals: 72,
          beds: '10,000+',
          pharmacies: '5,000+',
          primaryCareClinics: '378+',
          diagnosticCenters: '1,500+',
          telemedicineCenters: 200,
          medicalEducationCenters: '15+',
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
      className: 'text-center text-2xl font-bold text-gray-800 py-8',
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
          name: 'Apollo Proton Cancer Centre',
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
      button: {
        text: 'Book an Appointment',
        className: 'mt-6 bg-pink-600 text-white px-6 py-3 rounded-full',
      },
    },
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
            <h2 className="text-2xl text-gray-800 font-bold mb-4 font-roboto">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 mb-4">{section.content}</p>
            )}
            {section.desc && (
              <p className="text-gray-700 mb-4">{section.desc}</p>
            )}
            {section.stats && (
              <ul className="list-disc list-inside text-gray-700">
                {Object.entries(section.stats).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <section>
          <h2 className={dataFile[0].networkFacilities.className}>
            {dataFile[0].networkFacilities.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataFile[0].networkFacilities.facilities.map((facility, i) => (
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
        </section>
        <div className="text-center mt-6">
          <BookButton />
        </div>
      </main>
    </>
  )
}

export default Page
