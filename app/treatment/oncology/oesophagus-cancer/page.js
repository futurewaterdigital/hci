import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/ui/h2'
import Link from 'next/link'
import H3 from '@/components/ui/h3'


const data = {
  title: 'Oesophagus Cancer',
  description:
    'Oesophagus cancer is a type of cancer that develops in the long, hollow tube connecting the throat to the stomach, known as the oesophagus. It plays a key role in moving food from the mouth to the stomach for digestion. This type of cancer often begins in the cells lining the oesophagus and can spread to other parts of the body if not treated early. It is one of the leading types of cancers in India, particularly affecting individuals over the age of 50, with lifestyle factors and dietary habits contributing significantly to its risk.',

  causes: [
    {
      heading: 'Causes of Oesophagus Cancer',
      description:
        'The exact cause of oesophageal cancer is not fully understood but certain factors can increase the risk of developing it, including:',
      items: [
        {
          title: 'Smoking and Tobacco Use',
          description: 'A leading cause of oesophagus cancer in India.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Heavy Alcohol Consumption',
          description:
            'Long-term alcohol use can irritate the oesophageal lining, increasing cancer risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Gastroesophageal Reflux Disease (GERD)',
          description: `Chronic acid reflux can lead to Barrett's oesophagus, a precursor to oesophageal cancer.'`,
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Dietary Factors',
          description:
            'Diet low in fruits and vegetables or high in processed foods, spicy or salty foods can contribute to its onset.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Obesity',
          description:
            'Excess body weight increases the risk of cancer due to acid reflux and changes in the oesophagus.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: 'Symptoms of Oesophagus Cancer',
      description:
        'Early-stage oesophagus cancer may not show symptoms. However, as the cancer progresses, the following symptoms may appear:',
      items: [
        {
          title: 'Difficulty Swallowing (Dysphagia)',
          description:
            'A common symptom where patients feel as if food is stuck in their throat or chest.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Unexplained Weight Loss',
          description:
            'Significant, unintended weight loss over a short period.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Chest Pain or Discomfort',
          description: 'Pain or pressure in the chest or back.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Chronic Cough or Hoarseness',
          description: 'Especially if it persists for a long time.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Indigestion or Heartburn',
          description:
            'Ongoing heartburn or indigestion that does not improve with medication.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: 'Diagnosis of Oesophagus Cancer',
      description:
        'To diagnose oesophagus cancer, the following tests and procedures are typically used:',
      items: [
        {
          title: 'Endoscopy',
          description:
            'A thin, flexible tube with a camera is inserted into the oesophagus to check for abnormalities.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Biopsy',
          description:
            'During an endoscopy, a tissue sample is taken from the suspicious area and examined under a microscope to check for cancerous cells.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Imaging Tests',
          description:
            'Tests such as CT scans, MRI, PET scans, and barium swallow X-rays help determine the location and extent of the cancer.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Endoscopic Ultrasound',
          description:
            'This combines endoscopy and ultrasound to provide detailed images of the oesophagus and surrounding tissues.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  treatments: [
    {
      heading: 'Treatment for Oesophagus Cancer',
      description: `Treatment options depend on the cancer stage, location, and the patient's overall health. The common treatments for oesophagus cancer include:`,
      items: [
        {
          title: 'Surgery',
          items: [
            {
              name: 'Esophagectomy',
              description:
                'Removal of part or all of the oesophagus, often recommended in early-stage cancer.',
            },
            {
              name: 'Esophagogastrectomy',
              description:
                'Surgery that removes part of the stomach and oesophagus.',
            },
          ],
        },
        {
          title: 'Radiation Therapy',
          description:
            'High-energy rays are used to kill cancer cells or shrink tumors, often combined with chemotherapy.',
        },
        {
          title: 'Chemotherapy',
          description:
            'Drugs that kill cancer cells or stop them from dividing are administered orally or intravenously.',
        },
        {
          title: 'Targeted Therapy',
          description:
            'Involves medications that specifically target cancer cells, often used when the cancer is advanced.',
        },
        {
          title: 'Immunotherapy',
          description: `Boosts the body's immune system to fight the cancer; often used in later stages or in combination with other treatments.`,
        },
        {
          title: 'Endoscopic Treatments',
          description:
            'For very early-stage cancers, treatments such as endoscopic mucosal resection (EMR) may be used to remove small tumors without open surgery.',
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph:
        'The treatment outcomes for oesophagus cancer can vary based on the stage at diagnosis and the treatment approach. Early detection improves the likelihood of successful treatment and survival. It is crucial for individuals to seek medical attention if they experience persistent symptoms associated with oesophagus cancer.',
    },
  ],

  links: [
    {
      text: 'To Consult With The Best Doctor For Treatment Of Oesophagus Cancer, Click Here',
      url: '/best-doctor-oesophagus-cancer-treatment',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In India, Click Here',
      url: '/best-oesophagus-cancer-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In Bangalore, Click Here',
      url: '/best-oesophagus-cancer-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In Chennai, Click Here',
      url: '/best-oesophagus-cancer-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In Delhi, Click Here',
      url: '/best-oesophagus-cancer-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In Hyderabad, Click Here',
      url: '/best-oesophagus-cancer-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Oesophagus Cancer In Mumbai, Click Here',
      url: '/best-oesophagus-cancer-hospital-mumbai',
    },
  ],
}

function OesophagusCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title={data.title} className="text-pink-500" />
      <div className="mt-6">
        <p className="text-gray-600 text-lg font-light">{data.description}</p>
      </div>

      {/* Causes Section */}
      <div className="mt-12">
        <H2
          title={data.causes[0].heading}
          className="text-2xl font-semibold mb-4"
        />
        <p className="text-gray-600 mb-6 font-light">{data.causes[0].description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.causes[0].items.map((cause, idx) => (
            <div key={idx} className={cause.className}>
              <H3 title={cause.title} className="font-semibold mb-2"/>
              <p className="text-sm font-light">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/oesophagus-cancer-info"
          className="text-blue-600 hover:underline"
        >
          To Know More About Oesophagus Cancer And Its Treatment, Click Here
        </Link>
      </div>

      {/* Symptoms Section */}
      <div className="mt-12">
        <H2
          title={data.symptoms[0].heading}
          className="text-2xl font-semibold mb-4"
        />
        <p className="text-gray-600 mb-6 font-light">{data.symptoms[0].description}</p>
        <div className="space-y-2">
          {data.symptoms[0].items.map((symptom, idx) => (
            <div key={idx} className={symptom.className}>
              <strong>{symptom.title}:</strong> {symptom.description}
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="mt-12">
        <H2
          title={data.diagnosis[0].heading}
          className="text-2xl font-semibold mb-4"
        />
        <p className="text-gray-600 mb-6 font-light">{data.diagnosis[0].description}</p>
        <div className="space-y-2">
          {data.diagnosis[0].items.map((test, idx) => (
            <div key={idx} className={test.className}>
              <strong>{test.title}:</strong> {test.description}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/oesophagus-cancer-causes"
          className="text-blue-600 hover:underline"
        >
          To Know More About Oesophagus Cancer And Its Causes And Treatment,
          Click Here
        </Link>
      </div>

      {/* Treatment Section */}
      <div className="mt-12">
        <H2
          title={data.treatments[0].heading}
          className="text-2xl font-semibold mb-6"
        />
        <p className="text-gray-600 mb-6 font-light">{data.treatments[0].description}</p>
        <div className="border border-pink-200 rounded-lg p-6">
          <div className="space-y-6">
            {data.treatments[0].items.map((treatment, idx) => (
              <div key={idx} className="space-y-2">
                <H3 title={treatment.title} className="text-lg font-semibold text-pink-600"/>
                {treatment.items ? (
                  <div className="space-y-2 pl-4">
                    {treatment.items.map((item, i) => (
                      <div key={i}>
                        <span className="font-medium">{item.name}:</span>{' '}
                        {item.description}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 font-light">{treatment.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/oesophagus-cancer-diagnosis"
          className="text-blue-600 hover:underline"
        >
          To Get The Best Diagnosis Of Oesophagus Cancer And Related Issues,
          Click Here
        </Link>
      </div>

      {/* Conclusion */}
      <div className="mt-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <H2
            title={data.conclusion[0].header}
            className="text-xl font-semibold mb-4"
          />
          <p className="text-gray-600 font-light">{data.conclusion[0].paragraph}</p>
        </div>
      </div>

      {/* Links */}
      <div className="mt-8 space-y-4">
        {data.links.map((link, index) => (
          <div key={index} className="text-center">
            <Link href={link.url} className="text-blue-600 hover:underline">
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OesophagusCancer
