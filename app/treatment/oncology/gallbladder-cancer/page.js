import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/ui/h2'
import Link from 'next/link'
import H3 from '@/components/ui/h3'

const data = {
  title: 'Gallbladder Cancer',
  description:
    'Gallbladder cancer is a rare but aggressive form of cancer that originates in the gallbladder, a small organ located between the liver that stores bile. Although it is uncommon, gallbladder cancer poses a significant health concern, particularly in certain populations, including those in India. Early detection is crucial for improving treatment outcomes, as this cancer is often diagnosed at an advanced stage.',

  causes: [
    {
      heading: 'Causes of Gallbladder Cancer',
      subheading:
        'Several factors contribute to the development of gallbladder cancer, including:',
      items: [
        {
          title: 'Gallstones',
          description:
            'The presence of gallstones is one of the most significant risk factors associated with gallbladder cancer. Chronic irritation and inflammation caused by gallstones may lead to cellular changes.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Obesity',
          description:
            'Higher body mass index (BMI) is associated with an increased risk of developing gallbladder cancer.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Diet',
          description:
            'A diet high in fat and low in fruits and vegetables may contribute to the risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Chronic Inflammation',
          description:
            'Conditions like chronic cholecystitis (inflammation of the gallbladder) or biliary dyskinesia can increase the risk of gallbladder cancer due to ongoing inflammation.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Family History',
          description:
            'A family history of gallbladder cancer or other related cancers may increase cancer risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Age and Gender',
          description:
            'Gallbladder cancer is more common in women and tends to occur in individuals over the age of 65.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Genetic Factors',
          description:
            'Certain genetic conditions, such as Lynch syndrome or familial adenomatous polyposis, can also increase the risk of gallbladder cancer.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: 'Symptoms of Gallbladder Cancer',
      description:
        'Gallbladder cancer often presents no symptoms in its early stages, making early detection challenging. When symptoms do occur, they may include:',
      items: [
        {
          title: 'Abdominal Pain',
          description:
            'Pain in the upper right abdomen, often radiating to the back or shoulder blade',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Nausea and Vomiting',
          description:
            'Feeling nauseous or experiencing vomiting, especially after meals',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Loss of Appetite',
          description:
            'Significant decrease in appetite or unexplained weight loss',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Jaundice',
          description:
            'Yellowing of the skin and eyes, indicating a possible blockage of bile ducts',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Itchy Skin',
          description:
            'Generalized itching may occur due to bile accumulation in the bloodstream',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Bloating',
          description:
            'A feeling of fullness or bloating in the abdomen, often accompanied by pain',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: 'Diagnosis of Gallbladder Cancer',
      description:
        'Diagnosing gallbladder cancer typically involves a series of evaluations and tests, including:',
      items: [
        {
          title: 'Imaging Tests',
          items: [
            'Ultrasound: A non-invasive test that uses sound waves to create images of the gallbladder and surrounding organs',
            'CT Scan: Provides detailed cross-sectional images to detect abnormalities in the gallbladder area',
            'MRI: Offers high-resolution images of soft tissues, including the gallbladder and nearby organs',
          ],
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Biopsy',
          description:
            'Tissue samples may be taken during an endoscopic procedure to confirm the presence of cancer cells',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
        {
          title: 'Blood Tests',
          description:
            'Liver function tests and tumor markers like CA 19-9 may be assessed to evaluate the extent of disease and the presence of cancer',
          className: 'bg-pink-500 text-white p-2 rounded',
        },
      ],
    },
  ],

  treatments: [
    {
      heading: 'Surgery',
      description: '',
      items: [
        {
          title: 'Cholecystectomy',
          description: `The surgical removal of the gallbladder is the primary treatment for early-stage gallbladder cancer. Depending on the cancer's extent, nearby tissue or organs may also be removed.'`,
        },
        {
          title: 'Laparoscopic Surgery',
          description:
            'Minimally invasive techniques may be employed for gallbladder removal, leading to shorter recovery times.',
        },
      ],
    },
    {
      heading: 'Radiation Therapy',
      description:
        'Radiation therapy uses high-energy rays to target and destroy cancer cells. It may be employed after surgery to eliminate any remaining cancer cells, especially if there is a high risk of recurrence.',
      items: [
        {
          title: 'Proton Therapy',
          description:
            'A form of radiation therapy that uses protons to deliver targeted radiation, minimizing damage to surrounding healthy tissue. This approach can be beneficial for patients with localized gallbladder cancer.',
        },
        {
          title: 'Brachytherapy',
          description:
            'In select cases, internal radiation therapy may be used where radioactive material is placed near or within the tumor to deliver a higher dose of radiation to cancer cells while sparing normal tissues.',
        },
      ],
    },
    {
      heading: 'Chemotherapy',
      description:
        'Chemotherapy utilizes powerful drugs to kill or stop the growth of cancer cells. It is often used in advanced stages of gallbladder cancer or as adjuvant therapy following surgery to reduce the risk of recurrence.',
      items: [],
    },
    {
      heading: 'Targeted Therapy',
      description:
        'Targeted therapies focus on specific pathways and mechanisms that cancer cells use to grow and survive. Medications that target specific genetic mutations or proteins associated with gallbladder cancer may be considered.',
      items: [],
    },
    {
      heading: 'Palliative Care',
      description:
        'For patients with advanced gallbladder cancer, palliative care is vital to improve quality of life. This approach focuses on relieving symptoms, managing pain, and providing emotional support.',
      items: [],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph:
        'Gallbladder cancer is a challenging condition that requires timely diagnosis and comprehensive treatment. Despite its rarity, its incidence is rising, particularly in certain demographics in India. Awareness of risk factors, symptoms, and the importance of regular check-ups is essential for early detection. Treatment advancements, including surgery, targeted therapies, and innovative radiation options like Proton Therapy, offer hope for improved outcomes. High-quality care and comprehensive treatment planning are essential for optimal results.',
    },
  ],

  links: [
    {
      text: 'To Consult With The Best Doctor For Treatment Of Gallbladder Cancer, Click Here',
      url: '/best-doctor-gallbladder-cancer-treatment',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In India, Click Here',
      url: '/best-gallbladder-cancer-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In Bangalore, Click Here',
      url: '/best-gallbladder-cancer-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In Chennai, Click Here',
      url: '/best-gallbladder-cancer-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In Delhi, Click Here',
      url: '/best-gallbladder-cancer-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In Hyderabad, Click Here',
      url: '/best-gallbladder-cancer-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Gallbladder Cancer In Mumbai, Click Here',
      url: '/best-gallbladder-cancer-hospital-mumbai',
    },
  ],
}

function GallbladderCancer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Title title={data.title} />
      <div className="mt-6">
        <p className="text-gray-600 text-lg font-light">{data.description}</p>
      </div>
      {/* Causes Section */}
      <div className="mt-12">
        <H2 title={data.causes[0].heading} className="font-semibold mb-4" />
        <p className="text-gray-600 mb-6 font-light">{data.causes[0].subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.causes[0].items.map((cause, idx) => (
            <div key={idx} className={cause.className}>
              <H3 title={cause.title} className="font-semibold mb-2"/>
              <p className="text-sm">{cause.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/treatment/oncology/gallbladder-cancer-info"
            className="text-blue-600 hover:underline"
          >
            To Know More About Gallbladder Cancer And Its Treatment, Click Here
          </Link>
        </div>
      </div>

      {/* Symptoms Section */}
      <div className="mt-12">
        <H2 title={data.symptoms[0].heading} className="font-semibold mb-4" />
        <p className="text-gray-600 mb-6 font-light">{data.symptoms[0].description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="space-y-4">
          {data.diagnosis[0].items.map((test, idx) => (
            <div key={idx} className={test.className}>
              <strong>{test.title}</strong>
              {test.items ? (
                <ul className="list-disc pl-5 mt-2">
                  {test.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="font-light">{test.description}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/treatment/oncology/gallbladder-cancer-diagnosis"
            className="text-blue-600 hover:underline"
          >
            To Get The Best Diagnosis Of Gallbladder Cancer And Related Issues,
            Click Here
          </Link>
        </div>
      </div>
      {/* Treatments Section */}
      <div className="mt-12">
        <H2 title="Treatment for Gallbladder Cancer" className="font-semibold mb-6 text-center" />
        <p className="text-gray-600 mb-6 font-light">
          The treatment approach for gallbladder cancer depends on the stage of
          the disease, the patient&apos;s overall health, and their preferences.
          Treatment options may include:
        </p>
        <div className="space-y-6">
          {data.treatments.map((treatment, index) => (
            <div
              key={index}
              className="border border-pink-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <H3 title={treatment.heading} className="text-lg font-semibold mb-3 text-pink-600"/>
              {treatment.description && (
                <p className="text-gray-600 mb-4 font-light">{treatment.description}</p>
              )}
              {treatment.items && treatment.items.length > 0 && (
                <div className="space-y-4">
                  {treatment.items.map((item, idx) => (
                    <div key={idx} className="text-gray-600">
                      <strong>{item.title}: </strong>
                      {item.description}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Conclusion */}
      <div className="mt-12">
        <div className="bg-gray-50 p-6 rounded-lg">
          <H2 title="Conclusion" className="font-semibold mb-4" />
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

export default GallbladderCancer
