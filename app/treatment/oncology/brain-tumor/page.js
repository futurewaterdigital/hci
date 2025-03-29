import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/cardiacComponents/H2'
import Link from 'next/link'

const data = {
  title: 'Brain Tumor',
  bannerImage: '/oncology/brain-tumor-banner.png',
  description:
    'A brain tumor occurs when abnormal cells form within the brain. There are two main types of tumors: malignant (cancerous) tumors and benign tumors. Brain tumors can be primary (starting in the brain) or metastatic (cancer spreading from other parts of the body).',
  overview: '',

  main_menu: [
    {
      menu: 'What is brain tumor?',
      url: '/treatment/oncology/brain-tumor/what-is-brain-tumor',
    },
    {
      menu: 'What is brain cancer?',
      url: '/treatment/oncology/brain-tumor/what-is-brain-cancer',
    },
    { menu: 'Symptoms', url: '/treatment/oncology/brain-tumor/symptoms' },
    { menu: 'Causes', url: '/treatment/oncology/brain-tumor/causes' },
    {
      menu: 'Locations and Types',
      url: '/treatment/oncology/brain-tumor/locations-and-types',
    },
    {
      menu: 'Brain Tumors in Children',
      url: '/treatment/oncology/brain-tumor/brain-tumors-in-children',
    },
    { menu: 'Diagnosis', url: '/treatment/oncology/brain-tumor/diagnosis' },
    { menu: 'Treatment', url: '/treatment/oncology/brain-tumor/treatment' },
    { menu: 'Prognosis', url: '/treatment/oncology/brain-tumor/prognosis' },
  ],

  common_cancers: [
    {
      title: 'Breast Cancer',
      description:
        'The most common cancer among women, locally advanced or metastatic breast cancer (MBC) requires a multi-disciplinary approach. HER2-positive, ER/PR-negative breast cancer (TNBC), hormone-positive and other subtypes each demand specialized approaches.',
    },
    {
      title: 'Advanced and Recurrent Colorectal',
      description:
        'Advanced colorectal cancer often spreads to the liver or lungs requiring approach to target specific mutations including KRAS, NRAS and BRAF. We utilize innovative surgical and radiation techniques for optimal outcomes.',
    },
    {
      title: 'Ovarian Cancer',
      description:
        'Commonly discovered through screening and considered one of the most challenging to treat due to recurrence and chemotherapy resistance. Our approach combines cytoreductive surgery with targeted therapy for platinum-resistant cases.',
    },
    {
      title: 'Lung and Head Cancers',
      description:
        'Often detected in later stages with poor prognosis, we conduct extensive molecular testing for EGFR, ALK, ROS1 and PD-L1 to determine targeted and immunotherapy approaches for personalized treatment.',
    },
  ],

  india_cancer_stats: [
    {
      title: 'Breast Cancer',
      description:
        'The most common cancer in India with highest incidence rate among women. Triple-negative breast cancer (TNBC) has higher prevalence in Indian population than global averages.',
    },
    {
      title: 'Oral Cancer',
      description:
        'India has highest oral cancer rates due to tobacco use (smoking and chewing), with 60% detected in advanced stages with poor prognosis.',
    },
    {
      title: 'Recurrent Colorectal Cancer',
      description:
        'Rising incidence in urban populations with up to 30-40% recurrence rates despite successful initial treatment, often requiring multimodal approaches.',
    },
  ],

  symptoms_factors: [
    {
      title: 'Tumor Characteristics',
      description: 'Aggressive tumor biology with rapid cellular division',
    },
    {
      title: 'Treatment Resistance',
      description:
        'Cancer cells that develop mechanisms to evade standard treatments',
    },
    {
      title: 'Late Stage Diagnosis',
      description:
        'Detection after cancer has already metastasized to other organs',
    },
    {
      title: 'Genetic Factors',
      description:
        'Inherited gene mutations that predispose to aggressive cancer forms',
    },
  ],

  treatment_options: [
    {
      heading: 'Chemotherapy and Radiation',
      description:
        'Strategic use of cytotoxic drugs to destroy cancer cells or shrink tumors before surgery',
      aneurysmSymptoms: [
        {
          description:
            'Combination chemotherapy protocols targeting specific cancer pathways',
        },
        { description: 'Dose-dense regimens for aggressive recurrent cases' },
        {
          description:
            'Integration with radiation therapy for localized tumors',
        },
        { description: 'Hypofractionated protocols for patient convenience' },
      ],
    },
    {
      heading: 'Targeted Therapy and Immunotherapy',
      description:
        'Precisely targets specific molecules involved in cancer growth or stimulates immune system to fight cancer',
      aneurysmSymptoms: [
        {
          description:
            'Monoclonal antibodies that target specific cellular receptors',
        },
        {
          description:
            'Checkpoint inhibitors that unleash immune response against cancer cells',
        },
        {
          description:
            'Small molecule inhibitors that block specific growth pathways',
        },
        {
          description:
            'CAR-T cell therapies for eligible hematological malignancies',
        },
      ],
    },
    {
      heading: 'Palliative Care',
      description:
        'Focuses on providing relief from symptoms and improving quality of life',
      aneurysmSymptoms: [
        {
          description:
            'Advanced pain management protocols tailored to individual needs',
        },
        {
          description:
            'Nutritional support to counter cachexia and maintain strength',
        },
        { description: 'Psychological support for patients and caregivers' },
        {
          description:
            'Integration with curative approaches for better outcomes',
        },
      ],
    },
  ],

  surgical_approaches: [
    {
      heading: 'Salvage Surgery',
      description: 'Surgical intervention after failure of primary therapy',
      aneurysmSymptoms: [
        {
          description:
            'Used for isolated recurrences that can be surgically addressed',
        },
        { description: 'Often combined with intraoperative radiation therapy' },
      ],
    },
    {
      heading: 'Cytoreductive Surgery',
      description: 'Removal of as much tumor burden as possible',
      aneurysmSymptoms: [
        { description: 'Particularly beneficial in peritoneal carcinomatosis' },
        {
          description:
            'May be combined with HIPEC (Hyperthermic Intraperitoneal Chemotherapy)',
        },
      ],
    },
    {
      heading: 'Minimally Invasive Techniques',
      description: 'Laparoscopic and robotic approaches for suitable cases',
      aneurysmSymptoms: [
        {
          description:
            'Faster recovery and reduced postoperative complications',
        },
        { description: 'Enhanced precision in difficult anatomical locations' },
      ],
    },
  ],

  barriers: [
    {
      heading: 'Awareness',
      description: 'Low awareness about cancer symptoms and treatment options',
      aneurysmSymptoms: [
        {
          description:
            'Delays in seeking medical attention leading to advanced presentations',
        },
        {
          description:
            'Limited understanding of long-term follow-up importance',
        },
      ],
    },
    {
      heading: 'Access to Healthcare',
      description: 'Uneven distribution of cancer centers across India',
      aneurysmSymptoms: [
        { description: 'Concentration of specialized centers in major cities' },
        {
          description:
            'Transportation and accommodation challenges for rural patients',
        },
      ],
    },
    {
      heading: 'Financial Considerations',
      description: 'High cost of advanced cancer treatments',
      aneurysmSymptoms: [
        { description: 'Limited insurance coverage for novel therapies' },
        {
          description:
            'Catastrophic health expenditure affecting treatment completion',
        },
      ],
    },
    {
      heading: 'Cultural and Social Factors',
      description: 'Stigma and cultural beliefs affecting treatment decisions',
      aneurysmSymptoms: [
        {
          description:
            'Preference for alternative medicines delaying conventional treatment',
        },
        { description: 'Fatalistic attitudes toward cancer diagnosis' },
      ],
    },
  ],

  risk_factors: [
    {
      category: '',
      description:
        'Inadequate treatment of the primary cancer leading to residual cancer cells',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Genetic mutations causing resistance to standard treatment protocols',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Advanced stage at initial diagnosis increasing likelihood of microscopic spread',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnostics: [
    {
      heading: 'Advanced Imaging',
      description: 'High-resolution scanning technologies',
      aneurysmSymptoms: [
        { description: 'PET-CT for metabolic activity assessment' },
        {
          description:
            'MRI with contrast enhancement for soft tissue evaluation',
        },
        { description: 'Whole-body imaging for metastasis detection' },
      ],
    },
    {
      heading: 'Molecular Diagnostics',
      description: 'Genetic and biomarker analysis',
      aneurysmSymptoms: [
        {
          description:
            'Next-generation sequencing for comprehensive genomic profiling',
        },
        { description: 'Liquid biopsies to detect circulating tumor DNA' },
        {
          description:
            'Expression profiling for personalized treatment selection',
        },
      ],
    },
    {
      heading: 'Tissue Sampling',
      description: 'Obtaining specimens for analysis',
      aneurysmSymptoms: [
        { description: 'Image-guided biopsies for difficult-to-access tumors' },
        { description: 'Endoscopic ultrasound-guided fine needle aspiration' },
        { description: 'Sentinel node evaluation for recurrent disease' },
      ],
    },
  ],

  best_hospitals: [
    { city: 'Delhi', url: '/best-cancer-hospital-delhi' },
    { city: 'Mumbai', url: '/best-cancer-hospital-mumbai' },
    { city: 'Bangalore', url: '/best-cancer-hospital-bangalore' },
    { city: 'Chennai', url: '/best-cancer-hospital-chennai' },
    { city: 'Hyderabad', url: '/best-cancer-hospital-hyderabad' },
    { city: 'Pune', url: '/best-cancer-hospital-pune' },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `The management of advanced and recurrent cancers is highly complex and requires a multidisciplinary approach. With significant advancements in molecular diagnostics, targeted therapies, and immunotherapy, many patients now have improved outcomes and quality of life. At HCI, our comprehensive approach combines cutting-edge treatments with personalized care to address each patient's unique needs. We remain committed to advancing cancer care through research, innovation, and dedicated clinical excellence to give our patients the best possible chance for recovery.`,
    },
  ],

  types: {
    heading: 'Types of Brain Tumors',
    items: [
      {
        title: 'Primary Brain Tumors',
        description:
          'These tumors start in the brain tissue and can be either malignant or benign.',
        subtypes: [
          'Gliomas',
          'Meningiomas',
          'Pituitary Adenomas',
          'Schwannomas',
          'Medulloblastomas',
        ],
      },
      {
        title: 'Secondary Brain Tumors',
        description:
          'These tumors start elsewhere in the body and spread to the brain, commonly from lung cancer, breast cancer, kidney cancer, and melanoma.',
      },
    ],
  },

  symptoms: {
    heading: 'Common Symptoms',
    description:
      "Symptoms vary depending on the tumor's size, location, and growth rate. Common signs include:",
    items: [
      'Headaches that become more frequent and severe',
      'Unexplained nausea or vomiting',
      'Vision problems, such as blurred vision, double vision, or loss of peripheral vision',
      'Gradual loss of sensation or movement in arms or legs',
      'Difficulty with balance',
      'Speech difficulties',
      'Confusion in everyday matters',
      'Personality or behavior changes',
      "Seizures, especially in someone who doesn't have a history of seizures",
      'Hearing problems',
    ],
  },

  diagnosis: {
    heading: 'Diagnosis Methods',
    description:
      'Several tests and procedures are used to diagnose brain tumors:',
    methods: [
      {
        name: 'Neurological Exam',
        description:
          'Checking vision, hearing, balance, coordination, and reflexes',
      },
      {
        name: 'Imaging Tests',
        items: [
          'MRI (Magnetic Resonance Imaging)',
          'CT Scan',
          'PET Scan',
          'Angiogram',
        ],
      },
      {
        name: 'Biopsy',
        description: 'Surgical removal of a small sample of tissue for testing',
      },
    ],
  },

  treatments: {
    heading: 'Treatment Options',
    description: 'Treatment depends on type, size, and location of the tumor:',
    options: [
      {
        name: 'Surgery',
        description:
          'When possible, surgical removal of the brain tumor is the first treatment option.',
        details: [
          'Craniotomy - Opening the skull to remove tumor',
          'Minimally invasive surgery',
          'Awake brain surgery',
          'Laser interstitial thermal therapy',
        ],
      },
      {
        name: 'Radiation Therapy',
        types: [
          'External beam radiation',
          'Proton therapy',
          'Stereotactic radiosurgery',
          'Brachytherapy',
        ],
      },
      {
        name: 'Chemotherapy',
        description:
          'Using drugs to kill cancer cells, can be oral or intravenous',
      },
      {
        name: 'Targeted Drug Therapy',
        description: 'Focuses on specific abnormalities within cancer cells',
      },
      {
        name: 'Immunotherapy',
        description: 'Helps your immune system fight cancer cells',
      },
    ],
  },

  rehabilitation: {
    heading: 'Rehabilitation Services',
    services: [
      'Physical therapy',
      'Occupational therapy',
      'Speech therapy',
      'Cognitive rehabilitation',
    ],
  },

  hospitals: [
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In India, Click Here',
      url: '/best-brain-tumor-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In Bangalore, Click Here',
      url: '/best-brain-tumor-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In Chennai, Click Here',
      url: '/best-brain-tumor-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In Delhi, Click Here',
      url: '/best-brain-tumor-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In Hyderabad, Click Here',
      url: '/best-brain-tumor-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Brain Tumor In Mumbai, Click Here',
      url: '/best-brain-tumor-hospital-mumbai',
    },
  ],
}

function BrainTumor() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Banner Image */}
      <div className="relative h-[400px] w-full mb-8">
        <img
          src="/oncology/brain-tumor-banner.png"
          alt="Brain Tumor Visualization"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Title and Description */}
      <div className="text-center mb-12">
        <Title title={data.title} className="text-4xl text-pink-500" />
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Types Section */}
      <div className="mb-12">
        <H2 text={data.types.heading} textClass="text-2xl font-semibold mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.types.items.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              {type.subtypes && (
                <ul className="list-disc list-inside text-gray-600">
                  {type.subtypes.map((subtype, idx) => (
                    <li key={idx}>{subtype}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="mb-12 bg-blue-50 rounded-lg p-8">
        <H2
          text={data.symptoms.heading}
          textClass="text-2xl font-semibold mb-6"
        />
        <p className="text-gray-600 mb-6">{data.symptoms.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.symptoms.items.map((symptom, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700">{symptom}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="mb-12">
        <H2
          text={data.diagnosis.heading}
          textClass="text-2xl font-semibold mb-6"
        />
        <p className="text-gray-600 mb-6">{data.diagnosis.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.diagnosis.methods.map((method, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">{method.name}</h3>
              {method.description && (
                <p className="text-gray-600">{method.description}</p>
              )}
              {method.items && (
                <ul className="list-disc list-inside text-gray-600">
                  {method.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Treatment Section */}
      <div className="mb-12">
        <H2
          text={data.treatments.heading}
          textClass="text-2xl font-semibold mb-6"
        />
        <p className="text-gray-600 mb-6">{data.treatments.description}</p>
        <div className="space-y-6">
          {data.treatments.options.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{option.name}</h3>
              {option.description && (
                <p className="text-gray-600 mb-4">{option.description}</p>
              )}
              {option.details && (
                <ul className="list-disc list-inside text-gray-600">
                  {option.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
              {option.types && (
                <ul className="list-disc list-inside text-gray-600">
                  {option.types.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rehabilitation Section */}
      <div className="mb-12 bg-gray-50 rounded-lg p-8">
        <H2
          text={data.rehabilitation.heading}
          textClass="text-2xl font-semibold mb-6"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.rehabilitation.services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-700 text-center">{service}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hospital Links */}
      <div className="mb-12">
        <H2
          text="Find Treatment Centers"
          textClass="text-2xl font-semibold mb-6 text-center"
        />
        <div className="space-y-4">
          {data.hospitals.map((hospital, index) => (
            <div key={index} className="text-center">
              <Link
                href={hospital.url}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {hospital.text}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-12">
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

export default BrainTumor
