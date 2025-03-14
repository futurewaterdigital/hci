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
  title: 'Seizure Disorders',
  bannerImage: '/neuro-sciences/seizure-disorders.png',
  description: `Seizure disorders, commonly referred to as epilepsy, encompass a range of neurological conditions characterized by recurrent seizures. These seizures result from abnormal electrical activity in the brain and can vary significantly in severity and type. In India, seizure disorders are a pressing health issue, affecting millions and often leading to social stigma and misconceptions. Understanding seizure disorders is essential for effective management and support for those affected.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Factors',
      description: `Certain types of epilepsy have a genetic basis, where inherited mutations can make individuals more susceptible to seizures.`,
    },
    {
      title: 'Metabolic Disorders',
      description: `Imbalances in electrolytes or other metabolic conditions can trigger seizures.`,
    },
    {
      title: 'Brain Injury',
      description:
        'Trauma to the head, stroke, or infections can damage brain tissue and lead to seizure activity.',
    },
    {
      title: 'Substance Abuse',
      description:
        'Withdrawal from alcohol or drugs can provoke seizures in susceptible individuals.',
    },
    {
      title: 'Developmental Disorders',
      description:
        'Conditions like autism and neurofibromatosis are associated with an increased risk of seizures.',
    },
    {
      title: 'Infections',
      description:
        'Meningitis, encephalitis, and other infections affecting the brain can lead to seizure disorders.',
    },
  ],

  complications: [
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Antiepileptic drugs (AEDs) are the primary treatment for controlling seizures. The choice of medication depends on the type of seizures and individual response.',
        },
      ],
    },

    {
      heading: 'Lifestyle Modifications',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Patients are often advised to maintain a healthy lifestyle, including regular sleep patterns, stress management, and avoiding known triggers.`,
        },
      ],
    },
    {
      heading: 'Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description: `In cases where seizures are resistant to medication, surgical options may be considered to remove the seizure focus in the brain.
            `,
        },
      ],
    },
    {
      heading: 'Vagus Nerve Stimulation (VNS)',
      description: '',
      aneurysmSymptoms: [
        {
          description: `A device implanted under the skin sends electrical signals to the brain, helping to reduce seizure frequency.`,
        },
      ],
    },
    {
      heading: 'Ketogenic Diet',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'A high-fat, low-carbohydrate diet has been shown to be effective for some individuals, particularly children with refractory epilepsy.',
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
     In India, raising awareness about seizure disorders is critical to dispelling myths and reducing stigma. Access to comprehensive medical care and support services is essential for improving outcomes for those affected. With advancements in diagnosis and treatment, many individuals with seizure disorders can lead fulfilling lives and effectively manage their condition. Regular follow-ups and education on seizure management play vital roles in ensuring that patients receive the best possible care and support.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description:
        'Generalized Seizures: These affect both sides of the brain and may result in loss of consciousness, muscle rigidity, and jerking movements.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Focal Seizures: These occur in a specific area of the brain and can cause unusual sensations, changes in emotions, or involuntary movements in one part of the body.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Absence Seizures: Characterized by brief lapses in consciousness, often appearing as if the person is staring blankly.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Postictal State: Following a seizure, individuals may experience confusion, fatigue, and headache as their brain recovers.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Medical History: A detailed account of the patient's seizure activity, triggers, and any family history of seizure disorders is essential.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Neurological Examination: An evaluation of cognitive and motor functions helps identify any neurological deficits.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Electroencephalogram (EEG): This test measures electrical activity in the brain and can help detect abnormal patterns associated with seizures.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Imaging Studies: MRI or CT scans may be performed to identify structural abnormalities or injuries in the brain that could be contributing to seizures.`,
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
          Seizure disorders can arise from various underlying factors,
          including:
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
          <div className="grid lg:grid-cols-2 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="The symptoms of seizure disorders can vary widely, depending on the type of seizure experienced. Common manifestations include:"
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
                text="Diagnosing seizure disorders involves a thorough assessment, including:"
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

          <p className="font-light">
            Management of seizure disorders typically includes a combination of
            treatments tailored to the individual's needs:
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
