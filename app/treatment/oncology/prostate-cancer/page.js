import React from 'react'
import Title from '@/components/cardiacComponents/Title'
import H2 from '@/components/ui/h2'
import Link from 'next/link'
import H3 from '@/components/ui/h3'
const data = {
  title: 'Prostate Cancer',
  description:
    'Prostate cancer is one of the most common cancers in men, and early detection can significantly improve treatment outcomes. It originates in the prostate gland, which is responsible for producing seminal fluid. While prostate cancer typically grows slowly, it can become aggressive in some cases and spread to other parts of the body.',

  causes: [
    {
      heading: 'Causes of Prostate Cancer',
      description:
        'The exact causes of prostate cancer are not fully understood, but several risk factors can contribute to its development:',
      items: [
        {
          title: 'Age',
          description:
            'The risk of prostate cancer increases significantly after age 50.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Family History',
          description:
            'Men with a family history of prostate cancer are at higher risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Genetic Mutations',
          description:
            'Inherited mutations, such as those in the BRCA1 or BRCA2 genes, can increase the risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Lifestyle Factors',
          description:
            'Obesity, smoking, and lack of physical activity may contribute to a higher likelihood of developing prostate cancer.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
        {
          title: 'Diet',
          description:
            'A diet high in red meat and dairy products, with low fruit and vegetable intake, can increase the risk.',
          className: 'bg-yellow-100 p-4 rounded-lg',
        },
      ],
    },
  ],

  symptoms: [
    {
      heading: 'Symptoms of Prostate Cancer',
      description:
        'In its early stages, prostate cancer may not present any noticeable symptoms. However, as the disease progresses, symptoms may include:',
      items: [
        {
          title:
            'Difficulty urinating or frequent urination, especially at night',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Weak or interrupted urine flow',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Blood in urine or semen',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Pain or discomfort in the pelvic area',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
        {
          title: 'Erectile dysfunction',
          className: 'bg-blue-700 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  diagnosis: [
    {
      heading: 'Diagnosis of Prostate Cancer',
      description:
        'Prostate cancer is diagnosed through several methods, often starting with a physical examination and screening tests:',
      items: [
        {
          title: 'Digital Rectal Exam (DRE)',
          description:
            'A physical examination to check the prostate for abnormalities.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Prostate-Specific Antigen (PSA) Test',
          description:
            'A blood test that measures PSA levels, which may be elevated in men with prostate cancer.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Biopsy',
          description:
            'If the PSA or DRE indicates possible cancer, a biopsy is performed to confirm the diagnosis.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
        {
          title: 'Imaging Tests',
          description:
            'MRI, CT scans, or bone scans may be used to determine the extent of the cancer.',
          className: 'bg-pink-500 text-white p-2 rounded mb-2',
        },
      ],
    },
  ],

  treatments: [
    {
      heading: 'Treatment of Prostate Cancer',
      description:
        "Treatment for prostate cancer depends on the stage and grade of the disease, as well as the patient's overall health. The most common treatments include:",
      items: [
        {
          title: 'Surgery',
          description:
            'Radical Prostatectomy: Removal of the prostate gland, often used for early-stage cancer.',
        },
        {
          title: 'Hormone Therapy',
          description:
            'Hormone therapy is used to lower testosterone levels, as the hormone stimulates prostate cancer growth.',
        },
        {
          title: 'Chemotherapy',
          description:
            'Chemotherapy may be used in cases where the cancer has spread beyond the prostate and is no longer responding to hormone therapy.',
        },
        {
          title: 'Radiation Therapy',
          description:
            'Radiation therapy plays a crucial role in treating prostate cancer, particularly for patients who are not candidates for surgery or those with localized tumors. The latest advancements in radiation therapy allow for more precise treatments, minimizing side effects and improving patient outcomes.',
        },
        {
          title: 'Proton Therapy',
          description:
            'Proton therapy is an advanced form of radiation that uses protons instead of traditional X-rays to target cancer cells. Its precision ensures that the surrounding healthy tissues, such as the bladder and rectum, are spared from excessive radiation exposure. Proton therapy allows for higher doses of radiation to be delivered directly to the tumor, reducing side effects and improving long-term outcomes for prostate cancer patients.',
        },
        {
          title: 'CyberKnife Treatment',
          description:
            "CyberKnife is a non-invasive robotic system that delivers targeted radiation with pinpoint accuracy. It tracks the prostate's movement in real-time during treatment, ensuring that radiation is precisely delivered while avoiding nearby healthy tissues. CyberKnife treatment for prostate cancer is typically completed in fewer sessions compared to traditional radiation therapy, offering a quicker and more convenient option for patients. The treatment is painless and does not require surgery or anesthesia.",
        },
      ],
    },
  ],

  advantages: [
    {
      heading: 'Advantages of Proton Therapy and CyberKnife',
      items: [
        {
          title: 'No Incision',
          description:
            'These non-invasive treatments eliminate the need for surgical procedures.',
        },
        {
          title: 'No Blood Loss',
          description:
            'With no surgery involved, there is no risk of blood loss.',
        },
        {
          title: 'No Pain',
          description:
            'Both treatments are painless, offering comfort to patients during therapy.',
        },
        {
          title: 'No Admission',
          description:
            'Proton Therapy and CyberKnife are typically performed on an outpatient basis, allowing patients to return home the same day.',
        },
      ],
    },
  ],

  conclusion: [
    {
      header: 'Conclusion',
      paragraph:
        'Prostate cancer treatment has advanced significantly with the introduction of cutting-edge radiation techniques like Proton Therapy and CyberKnife, offering more precise, effective, and patient-friendly options. These advancements find the cancer is targeted while minimizing damage to surrounding tissues, improving patient outcomes and quality of life. Early diagnosis and a personalized treatment plan are crucial for managing prostate cancer effectively, offering hope for a successful recovery.',
    },
  ],

  links: [
    {
      text: 'To Consult With The Best Doctor For Treatment Of Prostate Cancer, Click Here',
      url: '/best-doctor-prostate-cancer-treatment',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In India, Click Here',
      url: '/best-prostate-cancer-hospital-india',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In Bangalore, Click Here',
      url: '/best-prostate-cancer-hospital-bangalore',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In Chennai, Click Here',
      url: '/best-prostate-cancer-hospital-chennai',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In Delhi, Click Here',
      url: '/best-prostate-cancer-hospital-delhi',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In Hyderabad, Click Here',
      url: '/best-prostate-cancer-hospital-hyderabad',
    },
    {
      text: 'For The Best Hospital For The Treatment Of Prostate Cancer In Mumbai, Click Here',
      url: '/best-prostate-cancer-hospital-mumbai',
    },
  ],
}

function ProstateCancer() {
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
              <p className="text-sm">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/treatment/oncology/prostate-cancer-info"
          className="text-blue-600 hover:underline"
        >
          To Know More About Prostate Cancer And Its Treatment, Click Here
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
          href="/treatment/oncology/prostate-cancer-causes"
          className="text-blue-600 hover:underline"
        >
          To Know More About Prostate Cancer And Its Causes And Treatment, Click
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
                <p className="text-gray-600 font-light">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="mt-12">
        <H2
          title={data.advantages[0].heading}
          className="text-2xl font-semibold mb-6"
        />
        <div className="border border-pink-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.advantages[0].items.map((advantage, idx) => (
              <div key={idx} className="bg-pink-50 p-4 rounded-lg">
                <H3 title={advantage.title} className="font-semibold text-pink-600 mb-2"/>
                <p className="text-gray-600 font-light">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
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

export default ProstateCancer
