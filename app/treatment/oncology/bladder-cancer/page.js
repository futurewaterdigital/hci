import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/ui/h2'
import Link from 'next/link'
import H3 from '@/components/ui/h3'
const data = {
  title: 'Bladder Cancer',
  description:
    'Bladder cancer is a type of cancer that begins in the tissues of the bladder. Bladder cancer is the fourth common cancer in India. Bladder cancer is becoming increasingly common in India, especially among men over 50 years of age. Early detection and proper treatment can lead to better outcomes and improved prognosis.',

  causes: [
    {
      heading: 'Causes of Bladder Cancer',
      description:
        'Bladder cancer can develop due to several factors. In India, the following are some of the common causes of this type:',
      items: [
        {
          title: 'Smoking',
          description:
            'Using cigarettes and harmful chemicals in tobacco can damage the bladder cells.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Chemical Exposure',
          description:
            'Exposure to industrial chemicals, especially those used in the textile, dye, rubber, and leather industries.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Chronic Bladder Infections',
          description:
            'Recurring urinary tract infections and inflammation can contribute to bladder cancer.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Age and Gender',
          description: 'More common in older adults, especially men.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Family History',
          description:
            'A family history of bladder cancer may increase the likelihood of developing it.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: 'Symptoms of Bladder Cancer',
      description:
        'The symptoms of bladder cancer may be similar to many other conditions but paying attention to these signs is crucial:',
      items: [
        {
          title: 'Blood in Urine',
          description:
            'Blood in urine (hematuria), which may appear pink, red, or cola-colored.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Frequent Urination',
          description: 'Needing to urinate more often than usual.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Pain or Burning During Urination',
          description: 'Discomfort while passing urine.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Pain in Back Pain',
          description: 'Pain may be felt in the lower region of your back.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Urinary Incontinence',
          description: 'Difficulty controlling the flow of urine.',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: 'Diagnosis of Bladder Cancer',
      description: 'Several tests are used to diagnose bladder cancer:',
      items: [
        {
          title: 'Cystoscopy',
          description:
            'A thin tube with a camera is inserted through the urethra to examine the bladder.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Biopsy',
          description:
            'A small sample of tissue is removed during cystoscopy for examination.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Imaging Tests',
          description:
            'CT scans and ultrasounds help assess the extent of the disease.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Urine Cytology',
          description:
            'Examination of urine for cancer cells under a microscope.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  treatments: [
    {
      heading: 'Treatment for Bladder Cancer',
      description:
        'The best type of bladder cancer treatment depends on the stage of the disease. Early-stage tumors can often be treated with less invasive options:',
      items: [
        {
          title: 'Surgery',
          items: [
            {
              name: 'Transurethral Resection (TURBT)',
              description:
                'Used to treat early-stage bladder cancer. It involves removing cancerous tissue through the urethra.',
            },
            {
              name: 'Cystectomy',
              description:
                'If the bladder is removed, the surgeon can create a new way for urine to leave the body, either through a urostomy or a neobladder.',
            },
          ],
        },
        {
          title: 'Chemotherapy',
          description:
            'Anti-cancer drugs either before surgery (neoadjuvant) or after surgery to prevent recurrence. Can be delivered directly to the bladder or through the bloodstream.',
        },
        {
          title: 'Radiation Therapy',
          description:
            'Uses high-energy rays to destroy cancer cells, especially before surgery to shrink tumors.',
        },
        {
          title: 'Immunotherapy',
          description:
            "BCG therapy is given directly through a catheter to help the body's immune system fight bladder cancer.",
        },
        {
          title: 'Targeted Therapy',
          description:
            'Specific drugs are used to target cancer growth through your body system.',
        },
      ],
    },
  ],

  followUp: {
    heading: 'Follow-up Care',
    description:
      'Regular check-ups are necessary post-treatment to detect any recurrence. This includes periodic cystoscopies, urine tests, and imaging to monitor recovery.',
  },

  conclusion: [
    {
      header: 'Conclusion',
      paragraph:
        'Bladder cancer, when diagnosed early, has a high chance of successful treatment. Awareness of the symptoms and risk factors, along with timely medical attention and appropriate treatment, can lead to better outcomes. With proper guidance and support, patients can manage their condition effectively and maintain a good quality of life.',
    },
  ],

  links: [
    {
      text: 'To Consult With The Best Doctor For The Treatment Of Bladder Cancer, Click Here',
      url: '/best-doctor-bladder-cancer-treatment',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In India, Click Here',
      url: '/best-bladder-cancer-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In Bangalore, Click Here',
      url: '/best-bladder-cancer-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In Chennai, Click Here',
      url: '/best-bladder-cancer-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In Delhi, Click Here',
      url: '/best-bladder-cancer-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In Hyderabad, Click Here',
      url: '/best-bladder-cancer-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Bladder Cancer In Mumbai, Click Here',
      url: '/best-bladder-cancer-hospital-mumbai',
    },
  ],
}

function BladderCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title={data.title} className="text-pink-500" />
      <div className="mt-6">
        <p className="text-gray-600 text-lg font-light">{data.description}</p>
      </div>

      {/* Causes Section */}
      <div className="mt-12">
        <H2 title={data.causes[0].heading} className="font-semibold mb-4" />
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
          href="/treatment/oncology/bladder-cancer-info"
          className="text-blue-600 hover:underline"
        >
          To Know More About Bladder Cancer And Its Treatment, Click Here
        </Link>
      </div>

      {/* Symptoms Section */}
      <div className="mt-12">
        <H2 title={data.symptoms[0].heading} className="font-semibold mb-4" />
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
        <H2 title={data.diagnosis[0].heading} className="font-semibold mb-4" />
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
          href="/treatment/oncology/bladder-cancer-causes"
          className="text-blue-600 hover:underline"
        >
          To Know More About Bladder Cancer And Its Causes And Treatment, Click
          Here
        </Link>
      </div>

      {/* Treatment Section */}
      <div className="mt-12">
        <H2 title={data.treatments[0].heading} className="font-semibold mb-6" />
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
                        <span className="font-medium text-pink-600">
                          {item.name}:
                        </span>{' '}
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

      {/* Follow-up Care */}
      <div className="mt-12">
        <H2 title={data.followUp.heading} className="font-semibold mb-4" />
        <p className="text-gray-600 font-light">{data.followUp.description}</p>
      </div>

      {/* Conclusion */}
      <div className="mt-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <H2 title={data.conclusion[0].header} className="font-semibold mb-4" />
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

export default BladderCancer
