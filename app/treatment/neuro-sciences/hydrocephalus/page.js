import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/cardiacComponents/H2'
import KnowMore from '@/components/cardiacComponents/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Hydrocephalus',
  bannerImage: '/neuro-sciences/hydrocephalus.png',
  description: `Hydrocephalus is a neurological condition characterized by an abnormal accumulation of cerebrospinal fluid (CSF) in the ventricles of the brain. This buildup can lead to increased pressure within the skull, resulting in various symptoms that can affect individuals of all ages. In India, hydrocephalus is a significant health concern, particularly among infants and the elderly, and can arise from congenital conditions, infections, or injuries.`,
  overview: ``,

  section_1: [
    {
      title: 'Tumours',
      description:
        'Brain tumours may obstruct the pathways of CSF, causing fluid accumulation.',
    },
    {
      title: 'Normal Pressure Hydrocephalus',
      description:
        'This form can occur in older adults and may develop gradually, often mistaken for other conditions like dementia.',
    },
    {
      title: 'Trauma',
      description:
        'Head injuries can result in bleeding or scarring that interferes with CSF circulation.',
    },
    {
      title: 'Infections',
      description:
        'Infections such as meningitis can disrupt the normal flow of cerebrospinal fluid, leading to hydrocephalus.',
    },
    {
      title: 'Congenital Conditions',
      description:
        'Hydrocephalus can be present at birth due to genetic factors or developmental abnormalities in the brain.',
    },
  ],

  complications: [
    {
      heading: 'Shunt Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'The most common treatment involves surgically placing a shunt system to drain excess CSF from the brain to another part of the body, where it can be absorbed.',
        },
      ],
    },

    {
      heading: 'Endoscopic Third Ventriculostomy (ETV)',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'A minimally invasive procedure that creates a new pathway for CSF flow, often used when shunt placement is not ideal.',
        },
      ],
    },
    {
      heading: 'Vagus Nerve Stimulation (VNS):',
      description: '',
      aneurysmSymptoms: [
        {
          description: `A device implanted under the skin sends electrical impulses to the vagus nerve, helping reduce seizure frequency in some patients.

            `,
        },
      ],
    },
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description: `While no medications can cure hydrocephalus, diuretics may be prescribed to reduce fluid production in some cases.
`,
        },
      ],
    },
    {
      heading: 'Monitoring',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Regular follow-ups are essential to assess the effectiveness of the treatment and detect any complications.`,
        },
      ],
    },
    {
      heading: 'Responsive Neurostimulation (RNS)',
      description: '',
      aneurysmSymptoms: [
        {
          description: `This treatment involves implanting a device that monitors brain activity and delivers electrical pulses to prevent seizures before they start.`,
        },
      ],
    },
  ],

  contact: {
    title: 'Contact Us Today',
    head: 'Contact HCI for Expert Urological Care',
    content:
      'Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.',
  },

  conclusion: [
    {
      header: 'Conclusion',
      paragraph: `
      In India, healthcare facilities are increasingly equipped to manage hydrocephalus, offering a range of treatment options tailored to individual needs. Early diagnosis and intervention are crucial for optimising outcomes, helping individuals lead healthier lives and preventing long-term complications associated with the condition.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Increased Head Size: In infants, a rapid increase in head circumference may be noticeable.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Nausea and Vomiting: These symptoms can arise due to increased intracranial pressure.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Headaches: Persistent headaches, particularly in older children and adults, may be a common complaint.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Vision Problems: Blurred or double vision may occur due to pressure on the optic nerve.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Cognitive Impairments: Difficulty in concentrating, memory issues, or behavioural changes can be observed.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Physical Examination: A thorough assessment of symptoms and medical history, including neurological evaluation.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Imaging Studies: MRI and CT scans are critical for visualising the brain's structure and identifying fluid accumulation.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Ultrasound: In infants, cranial ultrasound can be used to detect hydrocephalus and monitor the size of the ventricles.`,
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

// console.log(data.complications[0].heading)

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} />
        <H2 text={data.description} textClass="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 text="Causes" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Epilepsy can result from various factors, although in many cases, the
          exact cause remains unknown. Common causes include:
        </p>
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[150px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        <KnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Epilepsy is characterized by seizures, which can take various forms depending on the affected brain regions. Common symptoms include:
"
                titleCss="text-black font-semibold text-center"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Epilepsy diagnosis involves a comprehensive evaluation of the patient’s medical history, seizure patterns, and diagnostic tests. These include:"
                header=""
                titleCss="text-black font-semibold text-center"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              {/* <KnowMore title={title} /> */}
            </div>
          </div>
        </div>
        <div>
          <H2
            text="Treatment"
            textClass="text-2xl font-semibold mb-4 text-center"
          />

          {/* <p className="font-light">
            Treatment for epilepsy aims to control seizures and improve the
            patient’s quality of life. The choice of treatment depends on the
            type of epilepsy, the frequency of seizures, and the patient's
            overall health. Common treatment options include:
          </p> */}
          <DataLists
            desc={data.complications[0].description}
            data={data.complications}
          />
        </div>
        {/* <div className="space-y-4">
          <H2 text="When to Consider Robotic Knee Replacement?" />
          <p className="font-light text-center">
            Consult a doctor if you experience:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
          </div>
        </div> */}

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery
