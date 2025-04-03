import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/ui/h2'
import Link from 'next/link'
import H3 from '@/components/ui/h3'
const data = {
  title: 'Kidney Cancer',
  description:
    'Kidney cancer, also known as renal cancer, originates in the kidneys, two bean-shaped organs located in the back of the abdomen. The most common type of kidney cancer is renal cell carcinoma (RCC), which starts in the lining of the small tubes in the kidney. Other types include urothelial carcinoma, Wilms tumor (more common in children), and renal sarcoma.',

  causes: [
    {
      heading: 'Causes of Kidney Cancer',
      description:
        "While the exact cause of kidney cancer isn't known, several factors increase the risk of developing it. These include smoking, obesity, high blood pressure, long-term dialysis, family history of kidney cancer, and certain inherited conditions, like von Hippel-Lindau disease.",
      items: [],
    },
  ],

  symptoms: [
    {
      heading: 'Symptoms of Kidney Cancer',
      description:
        'Early kidney cancer often does not present noticeable symptoms. As it progresses, common symptoms may include:',
      items: [
        {
          title: 'Blood in the urine (hematuria)',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Lower back pain (on one side)',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Unexplained weight loss',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Loss of appetite',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Fatigue',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Fever',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Lump or mass in the abdomen',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: 'Diagnosis of Kidney Cancer',
      description: 'Doctors use a variety of tests to diagnose kidney cancer:',
      items: [
        {
          title: 'Imaging Tests',
          description:
            'CT scans, MRIs, and ultrasounds help detect abnormalities in the kidney.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Biopsy',
          description:
            'A small tissue sample is taken for lab analysis to confirm cancer.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Urinalysis',
          description:
            'This test checks for blood or abnormal cells in the urine.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  treatments: [
    {
      heading: 'Treatment for Kidney Cancer',
      description:
        "The treatment of kidney cancer depends on the stage, size and spread of the tumor, as well as the patient's overall health. Options include:",
      items: [
        {
          title: 'Surgery',
          items: [
            {
              name: 'Partial Nephrectomy',
              description:
                'Only the tumor or affected part of the kidney is removed. This is often used when the cancer is small or confined to one area.',
            },
            {
              name: 'Radical Nephrectomy',
              description:
                'Removal of the entire kidney and sometimes surrounding tissues or lymph nodes. This is the standard treatment for larger tumors.',
            },
            {
              name: 'Cryoablation and Radiofrequency Ablation',
              description:
                'For patients who cannot undergo surgery, these methods freeze or heat the tumor to destroy cancerous cells.',
            },
          ],
        },
        {
          title: 'Radiation Therapy',
          items: [
            {
              name: 'External Beam Radiation',
              description:
                "High-energy beams are directed at the cancerous cells from outside the body. Radiation therapy is usually used when surgery isn't an option or if the cancer has spread to other parts of the body.",
            },
          ],
        },
        {
          title: 'Targeted Therapy',
          items: [
            {
              name: 'Angiogenesis Inhibitors',
              description:
                'These drugs block the formation of new blood vessels that tumors need to grow. Examples include sunitinib and pazopanib.',
            },
            {
              name: 'mTOR Inhibitors',
              description:
                'Drugs like everolimus target the mTOR protein, which plays a role in cancer cell growth.',
            },
          ],
        },
        {
          title: 'Immunotherapy',
          items: [
            {
              name: 'Immune Checkpoint Inhibitors',
              description:
                "Drugs such as nivolumab and pembrolizumab work by enhancing the body's immune response to fight cancer. These therapies block proteins that prevent the immune system from attacking cancer cells.",
            },
            {
              name: 'Cytokines',
              description:
                'Older forms of immunotherapy, including interleukin-2, stimulate the immune system to destroy cancer cells.',
            },
          ],
        },
        {
          title: 'Ablation Therapy',
          items: [
            {
              name: 'Cryoablation',
              description:
                'A probe inserted through the skin freezes and kills the cancer cells.',
            },
            {
              name: 'Radiofrequency Ablation',
              description:
                'A needle inserted into the tumor heats and destroys the cancerous tissue.',
            },
          ],
        },
        {
          title: 'Chemotherapy',
          description:
            'While not commonly used for kidney cancer, chemotherapy may be an option for rare types like transitional cell carcinoma.',
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph:
        'Kidney cancer is manageable if detected early, and advancements in treatment options have improved patient outcomes. Consulting a healthcare specialist for early diagnosis and a tailored treatment plan is essential.',
    },
  ],

  links: [
    {
      text: 'To Consult With The Best Doctor For Treatment Of Kidney Cancer, Click Here',
      url: '/best-doctor-kidney-cancer-treatment',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In India, Click Here',
      url: '/best-kidney-cancer-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In Bangalore, Click Here',
      url: '/best-kidney-cancer-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In Chennai, Click Here',
      url: '/best-kidney-cancer-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In Delhi, Click Here',
      url: '/best-kidney-cancer-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In Hyderabad, Click Here',
      url: '/best-kidney-cancer-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Kidney Cancer In Mumbai, Click Here',
      url: '/best-kidney-cancer-hospital-mumbai',
    },
  ],
}

function KidneyCancer() {
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
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/kidney-cancer-info"
          className="text-blue-600 hover:underline"
        >
          To Know More About Kidney Cancer And Its Treatment, Click Here
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
              {symptom.title}
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
          href="/treatment/oncology/kidney-cancer-causes"
          className="text-blue-600 hover:underline"
        >
          To Know More About Kidney Cancer And Its Causes And Treatment, Click
          Here
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

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/kidney-cancer-diagnosis"
          className="text-blue-600 hover:underline"
        >
          To Get The Best Diagnosis Of Kidney Cancer And Related Issues, Click
          Here
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

export default KidneyCancer
