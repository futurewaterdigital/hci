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
  title: 'Epilepsy',
  bannerImage: '/neuro-sciences/epilepsy.png',
  description: `Epilepsy is a neurological disorder characterized by recurrent, unprovoked seizures caused by abnormal electrical activity in the brain. It affects millions of people worldwide and can vary significantly in terms of frequency and severity. Epilepsy is treatable, and many individuals with the condition lead normal, productive lives. India is well-regarded for its advanced epilepsy care, attracting patients globally due to its specialized treatment centers and expert neurologists.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Factors',
      description:
        'Some types of epilepsy run in families, suggesting a hereditary component.',
    },
    {
      title: 'Developmental Disorders',
      description:
        'Conditions like autism or neurofibromatosis may be associated with epilepsy.',
    },
    {
      title: 'Head Injuries',
      description:
        'Trauma to the head due to accidents, falls, or sports injuries can lead to the onset of epilepsy.',
    },
    {
      title: 'Prenatal Injury',
      description:
        'Brain damage due to prenatal conditions such as oxygen deprivation, poor maternal nutrition, or infections can result in epilepsy.',
    },
    {
      title: 'Brain Conditions',
      description:
        'Brain tumors, strokes, or infections like meningitis can trigger seizures.',
    },
    {
      title: 'Infections',
      description:
        'Certain infections such as encephalitis, HIV, or viral brain infections can cause epilepsy.',
    },
  ],

  complications: [
    {
      heading: 'Anti-seizure Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'The first line of treatment, these drugs help control seizures by stabilizing brain activity. Many patients achieve complete seizure control with medication alone.',
        },
      ],
    },

    {
      heading: 'Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'In cases where medications do not work, surgery may be considered. This involves removing the area of the brain where seizures originate or interrupting the pathways through which seizures spread.',
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
      heading: 'Ketogenic Diet',
      description: '',
      aneurysmSymptoms: [
        {
          description: `A high-fat, low-carbohydrate diet has been shown to help control seizures in some patients, particularly children with certain types of epilepsy.
`,
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
    {
      heading: 'Deep Brain Stimulation (DBS)',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Electrodes are implanted in specific areas of the brain to regulate abnormal electrical signals and reduce seizure frequency.`,
        },
      ],
    },
    {
      heading: 'Lifestyle Management',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Stress management, regular sleep patterns, and avoiding known seizure triggers (such as flashing lights or alcohol) are critical for managing epilepsy.
`,
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
      Epilepsy is a complex condition that requires a tailored treatment approach to ensure optimal outcomes. India’s epilepsy treatment centers offer comprehensive care, from diagnosis to advanced surgical options, ensuring a better quality of life for patients. Early diagnosis and effective management play a crucial role in preventing complications and enabling individuals with epilepsy to lead fulfilling lives.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Seizures: Repeated episodes of convulsions, staring spells, or uncontrolled muscle movements.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Loss of Awareness: A seizure may cause a temporary loss of consciousness or awareness of surroundings.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Jerking Movements: Involuntary movements, typically in the arms, legs, or face.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Confusion: Following a seizure, individuals may feel disoriented or have trouble recalling what happened.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Sensory Disturbances: Some seizures are accompanied by unusual sensations such as tingling, visual disturbances, or strange smells and sounds.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Electroencephalogram (EEG): A test that records the brain's electrical activity and identifies abnormal patterns associated with seizures.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `MRI/CT Scan: Imaging tests that provide detailed pictures of the brain to detect structural abnormalities, tumors, or damage.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Blood Tests: These can help rule out other potential causes of seizures, such as infections or metabolic disorders.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Neurological Examination:
Tests assessing reflexes, motor abilities, and coordination help evaluate neurological function.
`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Video EEG Monitoring: In some cases, patients undergo prolonged EEG monitoring combined with video recording to capture seizure activity and pinpoint the affected brain areas.`,
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
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
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
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Epilepsy is characterized by seizures, which can take various forms depending on the affected brain regions. Common symptoms include:
"
                titleCss="text-black font-semibold text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Epilepsy diagnosis involves a comprehensive evaluation of the patient’s medical history, seizure patterns, and diagnostic tests. These include:"
                header=""
                titleCss="text-black font-semibold text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
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

          <p className="font-light">
            Treatment for epilepsy aims to control seizures and improve the
            patient&apos;s quality of life. The choice of treatment depends on
            the type of epilepsy, the frequency of seizures, and the
            patient&apos;s overall health. Common treatment options include:
          </p>
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
