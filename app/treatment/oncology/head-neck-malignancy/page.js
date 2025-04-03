import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
// import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
// import TextComponent from '@/components/Common/TextComponent'
import Link from 'next/link'
import H3 from '@/components/ui/h3'


const data = {
  title: 'Head and Neck Malignancy',
  bannerImage: '/oncology/head-neck-malignancy.png',
  description: `Head and neck malignancies encompass cancers that originate in the mouth, throat, nose, salivary glands, thyroid, and larynx (voice box) in the region. These cancers can impact vital functions such as breathing, swallowing, speaking, and facial movement. Arising from the complexity of head and neck region, multidisciplinary treatment approach is necessary to restore both function and quality of life.`,
  overview: '',

  cancer_types: [
    {
      heading: 'Oral Cancers',
      description:
        'Develop in the lips, tongue, gums, inner lining of the cheeks, floor of mouth, and palate.',
      aneurysmSymptoms: [
        {
          description:
            'Signs include non-healing sores, swelling, and difficulty eating.',
        },
      ],
    },
    {
      heading: 'Oropharyngeal Cancer',
      description: 'Affects the back of the mouth, tonsils, and soft palate.',
      aneurysmSymptoms: [
        {
          description:
            'Symptoms include sore throat, voice changes, and difficulty swallowing.',
        },
      ],
    },
    {
      heading: 'Laryngeal Cancer',
      description:
        'Originates in the voice box, affecting breathing and vocalization.',
      aneurysmSymptoms: [
        { description: 'Hoarseness and chronic coughing are common symptoms.' },
      ],
    },
    {
      heading: 'Nasopharyngeal Cancer',
      description: 'Occurs in the upper throat behind the nose.',
      aneurysmSymptoms: [
        {
          description:
            'Causes ringing ears, headaches, and often nasal congestion.',
        },
      ],
    },
    {
      heading: 'Salivary Gland Tumors',
      description: 'Develops in the major or minor salivary glands.',
      aneurysmSymptoms: [
        { description: 'May include swelling and facial numbness.' },
      ],
    },
    {
      heading: 'Thyroid Cancer',
      description:
        'Affects the thyroid gland which may affect hormone production.',
      aneurysmSymptoms: [
        {
          description:
            'Often presents with neck mass and swallowing difficulties.',
        },
      ],
    },
  ],

  causes: [
    {
      category: 'Tobacco and Alcohol Use',
      description:
        'Heavy use of tobacco (smoking, chewing) and alcohol consumption are major risk factors',
      bgColor: 'bg-pink-500 text-white',
    },
    {
      category: 'HPV Infection',
      description:
        'Human papillomavirus is increasingly linked to certain types of head and neck cancers',
      bgColor: 'bg-pink-500 text-white',
    },
    {
      category: 'Sun Exposure',
      description: 'Prolonged sun exposure increases risk for lip cancers',
      bgColor: 'bg-pink-500 text-white',
    },
    {
      category: 'Environmental Hazards',
      description:
        'Exposure to asbestos, wood dust, and other industrial pollutants',
      bgColor: 'bg-pink-500 text-white',
    },
    {
      category: 'Genetics and Family History',
      description:
        'Some individuals have genetic predisposition to these cancers',
      bgColor: 'bg-pink-500 text-white',
    },
    {
      category: 'Poor Oral Hygiene and Diet Deficiency',
      description:
        'Chronic irritation and nutritional deficiencies may contribute to cancer risk',
      bgColor: 'bg-pink-500 text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Physical Examination',
      description:
        'Detailed examination of visible lesions or areas in the mouth and throat',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
    {
      category: 'Endoscopy',
      description:
        'Flexible scope is used to examine deeper tissues in the throat and larynx',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
    {
      category: 'Imaging Studies',
      description:
        'MRI, CT scan, and PET scans help determine cancer size and spread',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
    {
      category: 'Biopsy',
      description: 'Tissue samples are examined to confirm malignancy',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
    {
      category: 'HPV Testing',
      description: 'Specific screening for HPV-positive oropharyngeal cancers',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
    {
      category: 'Ultrasound and Fine Needle Aspiration',
      description: 'Common for examining thyroid nodules',
      bgColor: 'bg-yellow-50 text-gray-800',
    },
  ],

  treatments: [
    {
      heading: 'Surgery',
      description:
        'Usually involves excising along with affected tissues or lymph nodes',
      aneurysmSymptoms: [
        {
          description:
            'Options range from minimally invasive procedures to more extensive surgeries',
        },
        {
          description:
            'May include reconstructive surgery to restore function after removal of large tumors',
        },
        {
          description:
            'Minimally invasive options are used when possible to preserve appearance and function',
        },
      ],
    },
    {
      heading: 'Radiation Therapy',
      description: 'High-energy beams target the cancer cells',
      aneurysmSymptoms: [
        {
          description:
            'External beam radiation therapy (EBRT) is commonly used',
        },
        {
          description:
            'Intensity-modulated radiation therapy (IMRT) precisely focuses radiation to minimize side effects',
        },
        {
          description:
            'Can be combined with surgery or chemotherapy for better outcomes',
        },
      ],
    },
    {
      heading: 'Chemotherapy',
      description: 'Anti-cancer drugs destroy cancer cells',
      aneurysmSymptoms: [
        {
          description:
            'Commonly used for advanced cancers or when surgery is not possible',
        },
        { description: 'Often combined with radiation (chemoradiation)' },
      ],
    },
    {
      heading: 'Targeted Therapy',
      description:
        'Focuses on specific molecules involved in cancer growth (e.g., cetuximab)',
      aneurysmSymptoms: [
        { description: 'Less toxic compared to chemotherapy' },
        { description: 'Often used for recurrent or metastatic cases' },
      ],
    },
    {
      heading: 'Immunotherapy',
      description: 'Uses the immune system to fight cancer cells effectively',
      aneurysmSymptoms: [
        {
          description:
            'Checkpoint inhibitors have shown promising results for certain types of head and neck cancers',
        },
        {
          description:
            'Pembrolizumab and nivolumab are used for advanced or recurrent disease',
        },
      ],
    },
    {
      heading: 'Rehabilitation And Support',
      description:
        'Speech Therapy: Helps patients regain speech function after surgery or treatment',
      aneurysmSymptoms: [
        {
          description:
            'Swallowing Support: Crucial for maintaining nutrition and preventing complications',
        },
        {
          description:
            'Psychological counseling and support to manage emotional well-being',
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `Head and neck cancers require multidisciplinary management integrating surgery, radiation therapy, chemotherapy, targeted therapy, and immunotherapy. Comprehensive diagnosis and staging helps guide the selection of primary and adjunctive therapies based on specific type and extent of disease. Early detection is key to optimal outcomes. If you have risk factors such as smoking, alcohol use, or HPV exposure, regular check-ups with healthcare providers can significantly improve prognosis through early intervention.`,
    },
  ],

  best_hospitals: [
    { city: 'Delhi', url: '/best-head-neck-cancer-hospital-delhi' },
    { city: 'Mumbai', url: '/best-head-neck-cancer-hospital-mumbai' },
    { city: 'Bangalore', url: '/best-head-neck-cancer-hospital-bangalore' },
    { city: 'Hyderabad', url: '/best-head-neck-cancer-hospital-hyderabad' },
    { city: 'Kolkata', url: '/best-head-neck-cancer-hospital-kolkata' },
  ],
}

function HeadNeckMalignancy() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-6 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 title={data.description} className="text-start font-light" />

        <H2
          title="Types of Head and Neck Malignancies"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {data.cancer_types.map((cancer, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <H3 title={cancer.heading} className="text-lg font-semibold mb-2"/>
              <p className="text-gray-700 mb-2 font-light">{cancer.description}</p>
              {cancer.aneurysmSymptoms.map((symptom, idx) => (
                <p key={idx} className="text-sm text-gray-600 font-light">
                  {symptom.description}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <H2 title="Causes" className="text-xl font-semibold mb-4" />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.causes}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/treatment/oncology/head-neck-cancer-info"
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors text-sm"
              >
                To Know More About A Head And Neck Malignancy And Its Treatment,
                Click Here
              </Link>
            </div>
          </div>
          <div>
            <H2 title="Diagnosis" className="text-xl font-semibold mb-4" />
            <div className="space-y-2">
              <DataBoxes
                title=""
                header=""
                data={data.diagnosis}
                myclass="grid grid-cols-1 gap-2"
              />
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/treatment/oncology/head-neck-diagnosis"
                className="inline-block px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors text-sm"
              >
                To Get The Best Diagnosis Of Head And Neck Malignancy And
                Related Issues, Click Here
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <img
            src="/oncology/head-neck-brain-image.png"
            alt="Brain imaging showing head and neck cancer"
            className="rounded-lg shadow-md w-full object-cover h-64"
          />
        </div>

        <H2
          title="Treatment"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {data.treatments.slice(0, 4).map((treatment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <H3 title={treatment.heading} className="text-lg font-semibold text-blue-600 mb-2"/>
              <p className="text-gray-700 mb-2 font-light">{treatment.description}</p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {data.treatments.slice(4, 6).map((treatment, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <H3 title={treatment.heading} className="text-lg font-semibold text-blue-600 mb-2"/>
              <p className="text-gray-700 mb-2 font-light">{treatment.description}</p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                {treatment.aneurysmSymptoms.map((symptom, idx) => (
                  <li key={idx}>{symptom.description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/treatment/oncology/head-neck-treatment"
            className="inline-block px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            To Know More About A Head And Neck Malignancy And Its Causes And
            Treatment, Click Here
          </Link>
        </div>

        <Conclusion data={data.conclusion} />

        <H2
          title="To Consult With The Best Doctor For Treatment Of A Head And Neck Malignancy, Click Here"
          className="text-xl font-semibold mb-4 text-center text-pink-600"
        />

        <div className="space-y-2 mb-8">
          {data.best_hospitals.map((hospital, index) => (
            <div
              key={index}
              className="text-center py-2 border-b border-pink-100 last:border-0"
            >
              <Link
                href={hospital.url}
                className="text-pink-500 hover:text-pink-700"
              >
                For The Best Hospital For The Treatment Of A Head And Neck
                Malignancy In {hospital.city}, Click Here
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/book-appointment"
            className="inline-block px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors font-semibold"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>

        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default HeadNeckMalignancy
