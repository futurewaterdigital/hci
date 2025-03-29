import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/cardiacComponents/H2'
import Link from 'next/link'

const data = {
  title: 'GI Cancer',
  subtitle: 'Genitourinary Cancer',
  description:
    'Gastrointestinal (GI) cancer refers to a group of cancers that affect the digestive system and associated organs. These cancers can develop in any part of the gastrointestinal tract, from the esophagus to the rectum.',

  cancerTypes: [
    {
      name: 'BOWEL CANCER',
      link: '/treatment/oncology/bowel-cancer',
    },
    {
      name: 'GALLBLADDER CANCER',
      link: '/treatment/oncology/gallbladder-cancer',
    },
    {
      name: 'LIVER CANCER',
      link: '/treatment/oncology/liver-cancer',
    },
    {
      name: 'OESOPHAGUS CANCER',
      link: '/treatment/oncology/oesophagus-cancer',
    },
    {
      name: 'PANCREATIC CANCER',
      link: '/treatment/oncology/pancreatic-cancer',
    },
  ],
}

function GICancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="relative h-[400px] w-full mb-8">
        <img
          src="/oncology/gi-cancer-banner.png"
          alt="GI Cancer Visualization"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-500 mb-2">
          {data.subtitle}
        </h1>
        <Title title={data.title} className="text-3xl text-gray-800" />
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Cancer Types Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {data.cancerTypes.map((cancer, index) => (
          <Link
            key={index}
            href={cancer.link}
            className="px-6 py-3 text-sm font-medium text-pink-600 hover:text-pink-800 transition-colors"
          >
            {cancer.name}
          </Link>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <H2
              text="Understanding GI Cancer"
              textClass="text-2xl font-semibold mb-4"
            />
            <p className="text-gray-600">
              GI cancer encompasses various types of cancers affecting the
              digestive system. Early detection and proper treatment are crucial
              for better outcomes. Each type of GI cancer may present different
              symptoms and require specific treatment approaches.
            </p>
          </div>
        </div>

        {/* Right Column - Quick Links */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <H2 text="Quick Access" textClass="text-2xl font-semibold mb-4" />
            <div className="space-y-3">
              {data.cancerTypes.map((cancer, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <Link
                    href={cancer.link}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Learn more about {cancer.name.toLowerCase()}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <H2
          text="Additional Resources"
          textClass="text-2xl font-semibold mb-4 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Diagnosis</h3>
            <p className="text-gray-600">
              Learn about various diagnostic methods for GI cancers including
              endoscopy, imaging, and laboratory tests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Treatment Options</h3>
            <p className="text-gray-600">
              Explore different treatment approaches including surgery,
              chemotherapy, radiation therapy, and targeted treatments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Support Services</h3>
            <p className="text-gray-600">
              Access support services including counseling, nutrition advice,
              and support groups for patients and families.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-12">
        <H2 text="Get Expert Care" textClass="text-2xl font-semibold mb-4" />
        <p className="text-gray-600 mb-6">
          Connect with our specialists to get comprehensive care for GI cancer.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  )
}

export default GICancer
