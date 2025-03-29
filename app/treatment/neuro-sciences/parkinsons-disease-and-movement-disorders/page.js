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
  title: 'Parkinson’s Disease and Movement Disorders',
  bannerImage: '/neuro-sciences/parkinson-disease-movement-disorders.png',
  description: `Parkinson’s Disease (PD) and other movement disorders are neurological conditions that affect the brain’s ability to control movement. Parkinson’s Disease is a progressive disorder that leads to tremors, stiffness, and difficulty with balance and coordination. Movement disorders also include conditions such as dystonia, tremor, and ataxia, which can severely impact an individual’s quality of life. India is increasingly recognized as a destination for world-class treatment of Parkinson’s and movement disorders, offering access to expert neurologists and advanced therapeutic options.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Factors',
      description:
        'A small percentage of Parkinson’s cases are linked to genetic mutations, particularly in families with a history of the disease.',
    },
    {
      title: 'Brain Damage',
      description:
        'Movement disorders can arise from brain injuries, strokes, or neurodegenerative diseases.',
    },
    {
      title: 'Environmental Triggers',
      description:
        'Exposure to toxins like pesticides or heavy metals may increase the risk of developing Parkinson’s Disease.',
    },
    {
      title: 'Medications',
      description:
        'Some drugs, particularly those used for psychiatric conditions, can cause drug-induced movement disorders.',
    },
    {
      title: 'Age',
      description:
        'Parkinson’s is more common in individuals over the age of 60, though early-onset cases can occur.',
    },
    {
      title: 'Autoimmune Conditions',
      description:
        'Certain autoimmune diseases may trigger abnormal movement patterns.',
    },
  ],

  complications: [
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'The most common treatment for Parkinson’s involves drugs that increase dopamine levels or mimic its effects in the brain. Levodopa, combined with carbidopa, is the gold standard medication for Parkinson’s. Other medications help manage symptoms like tremors, stiffness, and slow movement.',
        },
      ],
    },

    {
      heading: 'Deep Brain Stimulation (DBS)',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'For patients with advanced Parkinson’s or movement disorders that do not respond to medication, DBS involves implanting electrodes in the brain that send electrical impulses to help regulate abnormal movements.',
        },
      ],
    },
    {
      heading: 'Physical Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Exercises to improve mobility, flexibility, and balance are essential in managing movement disorders. Speech therapy may also be needed for those with speech impairments.
            `,
        },
      ],
    },
    {
      heading: 'Botox Injections',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Botulinum toxin (Botox) is used to treat conditions like dystonia by temporarily relaxing overactive muscles.
            `,
        },
      ],
    },
    {
      heading: 'Occupational Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Helps patients adapt to daily tasks and maintain independence as symptoms progress.
            `,
        },
      ],
    },
    {
      heading: 'Surgical Options',
      description: '',
      aneurysmSymptoms: [
        {
          description: `In some cases of severe movement disorders, surgery to remove parts of the brain or to implant devices may be recommended.
            `,
        },
      ],
    },
    {
      heading: 'Lifestyle Changes',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Regular exercise, a healthy diet, and reducing stress can help manage symptoms and slow the progression of Parkinson’s and other movement disorders.
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
      Parkinson’s Disease and movement disorders are complex conditions that significantly affect a person’s daily life. India’s specialized treatment centers offer comprehensive care, from diagnosis to advanced treatments like DBS and medication management. Early diagnosis and a multi-disciplinary approach are crucial in effectively managing these disorders, helping patients maintain their independence and quality of life for as long as possible.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description:
        'Tremors: Uncontrollable shaking, often starting in the hands or fingers.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Muscle Rigidity: Stiff muscles that can limit movement and cause discomfort.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Bradykinesia: Slowness of movement, making simple tasks difficult and time-consuming.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Postural Instability: Impaired balance and coordination, leading to falls.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Gait Changes: A shuffling walk or difficulty starting and stopping movement.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Dystonia: Involuntary muscle contractions causing twisting and repetitive movements.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Involuntary Movements: Such as tremors, jerks, or tics, often associated with other disorders like dystonia or essential tremor.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Speech and Writing Difficulties: Soft speech, slurred words, and small, cramped handwriting (micrographia).',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description:
        'Neurological Examination: Assessment of motor function, coordination, and reflexes.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `MRI/CT Scan: Imaging tests help rule out other conditions that may be causing symptoms, such as strokes or tumors.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'DaTscan: A specialized imaging test used to assess dopamine levels in the brain, aiding in the diagnosis of Parkinson’s Disease.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Genetic Testing: May be recommended if a family history of Parkinson’s or another movement disorder is present.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Blood Tests: These are used to rule out other conditions that may cause similar symptoms, such as thyroid problems or vitamin deficiencies.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Electromyography (EMG): This test measures muscle activity and may help diagnose other movement disorders like dystonia.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
}

console.log(data.complications[0].heading)

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
          The exact cause of Parkinson’s Disease is still unknown, but various
          factors may contribute to its development. Other movement disorders
          may also have different origins. Common causes include:
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
                text="Symptoms of Parkinson’s Disease and other movement disorders vary but generally include:"
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
                text="Diagnosing Parkinson’s Disease and movement disorders involves a detailed examination of the patient’s symptoms, medical history, and neurological testing. Common diagnostic methods include:         "
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
            While there is no cure for Parkinson’s Disease or most movement
            disorders, treatments focus on managing symptoms and improving
            quality of life. Options include:
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
