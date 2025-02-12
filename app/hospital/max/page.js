import React from 'react'
import Banner from '@/components/Common/Banner'
const bannerImage = '/hospitals/max.png'
import BookButton from '@/components/cardiacComponents/BookButton'
import Title from '@/components/cardiacComponents/Title'
import NetworkFacilities from '@/components/cardiacComponents/NetworkFacilities'
import HospitalPara from '@/components/cardiacComponents/HospitalPara'
import BlueHeader from '@/components/cardiacComponents/BlueHeader'

const dataFile = [
  {
    header: {
      title: 'Max',
      className: 'text-4xl font-bold text-pink-500 text-center py-8',
    },

    headers: {
      title:
        'Healthcare International (HCI) and Max Group of Hospitals: Allies in Superior Healthcare',
      content:
        "Healthcare International (HCI) is honoured to include the esteemed Max Group of Hospitals in its panel of trusted healthcare partners. This collaboration represents HCI's dedication to providing world-class healthcare solutions by connecting patients to industry-leading medical institutions. By working closely with Max Healthcare, HCI ensures access to exceptional medical care tailored to the diverse needs of patients across India and globally.",
      className: 'text-center text-hciPrimary text-xl font-bold py-8',
    },

    sections: [
      {
        title: 'About Max Healthcare Institute Limited',
        content:
          "Max Healthcare is one of India's largest and most respected healthcare organizations, operating 22 healthcare facilities with over 5,000 beds, 30+ specialties, and 6,000+ clinicians. Max Healthcare is at the forefront of delivering comprehensive, patient-centred care.",
      },
      {
        title: 'Top Facilities in the Max Healthcare Network',
        content:
          "Max Healthcare is one of India's largest and most respected healthcare organizations, operating 22 healthcare facilities with over 5,000 beds, 30+ specialties, and 6,000+ clinicians. Max Healthcare is at the forefront of delivering comprehensive, patient-centred care.",
      },
      {
        title: "The Importance of HCI's Collaboration with Max Healthcare",
        content:
          "HCI's partnership with Max Healthcare is integral to its mission of connecting patients with world-class medical care. This collaboration ensures that patients have access to Max Healthcare's extensive network of state-of-the-art facilities, cutting-edge technology, and renowned clinical expertise. Whether addressing complex medical conditions or providing routine care, HCI and Max Healthcare work together to deliver outcomes that prioritize patient well-being and satisfaction.",
      },
      {
        title: 'A Shared Vision for Excellence in Healthcare',
        content:
          'Through its collaboration with Max Healthcare, HCI reaffirms its commitment to redefining healthcare standards by bridging gaps in accessibility and delivering unparalleled care. This partnership embodies a shared vision of innovation, compassion, and excellence, empowering patients to receive top-tier medical services with confidence.',
      },
    ],
    networkFacilities: {
      title: 'Our Network Facilities',
      className: 'text-center text-2xl font-bold text-gray-800',
      facilities: [
        {
          name: 'Max Super Speciality Hospital, Vaishali',
          city: 'Delhi',
          beds: 370,
          speciality: 'Oncology, Transplant, Neurosurgery',
        },
        {
          name: 'BLK Max Super Speciality Hospital',
          city: 'Delhi',
          beds: 650,
          speciality: 'Multi-speciality',
        },
        {
          name: 'Max Nanavati Hospital',
          city: 'Mumbai',
          beds: 350,
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
    // <>
    //   <div className="relative">
    //     <Banner image={bannerImage} />
    //   </div>
    //   <div className="py-8 text-center">
    //     <h1 className={dataFile[0].header.className}>
    //       {dataFile[0].header.title}
    //     </h1>
    //   </div>
    //   <div className="bg-[#F1F8FF] min-h-80 flex items-center justify-center">
    //     <div className="container">
    //       <p className={dataFile[0].headers.className}>
    //         {dataFile[0].headers.title}
    //       </p>
    //       <p className="font-light">{dataFile[0].headers.content}</p>
    //     </div>
    //   </div>
    //   <main className="container mx-auto px-6 py-12">
    //     {dataFile[0].sections.map((section, index) => (
    //       <section key={index} className="mb-12">
    //         <h2
    //           className={`text-2xl text-gray-800 font-bold mb-4 font-roboto ${
    //             section.title === 'Our Network Facilities' && 'text-center'
    //           }`}
    //         >
    //           {section.title}
    //         </h2>
    //         {Array.isArray(section.content) ? (
    //           section.content.map((paragraph, idx) => (
    //             <p key={idx} className="text-gray-700 mb-4">
    //               {paragraph}
    //             </p>
    //           ))
    //         ) : (
    //           <p className="text-gray-700 mb-4">{section.content}</p>
    //         )}
    //         {section.facilities && (
    //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {section.facilities.map((facility, i) => (
    //               <div key={i} className="bg-white shadow-md rounded-lg p-6">
    //                 <h3 className="text-hciSecondary font-bold mb-2">
    //                   {facility.name}
    //                 </h3>
    //                 <p className="text-gray-700 mb-1">City: {facility.city}</p>
    //                 <p className="text-gray-700 mb-1">
    //                   No. of Beds: {facility.beds}
    //                 </p>
    //                 <p className="text-gray-700">
    //                   Speciality: {facility.speciality}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         )}
    //       </section>
    //     ))}
    //     <div className="text-center">
    //       <BookButton />
    //     </div>
    //   </main>
    // </>
  )
}

export default Page
