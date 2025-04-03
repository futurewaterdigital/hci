import React from 'react'
import Banner from '@/components/Common/Banner'
import Title from '@/components/cardiacComponents/Title'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Neurodegenerative Disorders',
  bannerImage: '/neuro-sciences/neurodegenerative-disorders.png',
  description: `Neurodegenerative disorders are a group of debilitating conditions that primarily affect the neurons in the brain and spinal cord. These disorders lead to progressive deterioration of nerve cells, which can result in problems related to movement (ataxia), mental functioning (dementia), and overall neurological health. In India, the demand for treatment of neurodegenerative disorders is rising, with specialized centers offering advanced therapies and patient care. These disorders include Alzheimer's disease, Parkinson's disease, Huntington's disease, Amyotrophic Lateral Sclerosis (ALS), and others.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Mutations',
      description: `Inherited genetic defects or mutations can increase the risk of certain neurodegenerative diseases like Huntington's disease or familial forms of ALS and Alzheimer's.`,
    },
    {
      title: 'Oxidative Stress',
      description: `Damage to cells caused by free radicals and other reactive molecules can lead to the degeneration of neurons.`,
    },
    {
      title: 'Protein Misfolding',
      description: `Abnormal accumulation and clumping of proteins in the brain can damage neurons, leading to diseases such as Alzheimer's and Parkinson's.`,
    },
    {
      title: 'Mitochondrial Dysfunction',
      description: `Impaired energy production within cells can trigger neuronal damage, contributing to neurodegenerative conditions.`,
    },
    {
      title: 'Environmental Factors',
      description: `Exposure to toxins, chemicals, or certain metals may contribute to the development of these disorders.`,
    },
    {
      title: 'Aging',
      description: `Advancing age is one of the most significant risk factors for neurodegenerative diseases like Alzheimer's and Parkinson's.`,
    },
  ],

  complications: [
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Cholinesterase Inhibitors: Used in Alzheimer's disease to help maintain cognitive function by preventing the breakdown of acetylcholine, a neurotransmitter involved in learning and memory.`,
        },
        {
          description: `Levodopa: The most common drug for treating Parkinson's disease, it helps replenish dopamine, the neurotransmitter that is deficient in the disorder.`,
        },
        {
          description: `Riluzole: Extends survival in ALS patients by slowing the progression of the disease.`,
        },
        {
          description: `⦁  Antidepressants/Anxiolytics: These drugs help manage the psychological symptoms associated with many neurodegenerative diseases.`,
        },
      ],
    },

    {
      heading: 'Physical Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Helps maintain mobility and muscle strength, and manage symptoms such as tremors, balance issues, and muscle stiffness.',
        },
      ],
    },
    {
      heading: 'Occupational Therapy:',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Assists patients in adapting to the challenges of daily living and preserving independence for as long as possible.
            `,
        },
      ],
    },
    {
      heading: 'Speech Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Often necessary for patients with speech and swallowing difficulties, common in conditions like ALS and Parkinson’s.',
        },
      ],
    },
    {
      heading: 'Deep Brain Stimulation (DBS)',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'A surgical treatment for Parkinson’s disease and other movement disorders where electrodes are implanted in the brain to regulate abnormal impulses.',
        },
      ],
    },
    {
      heading: 'Stem Cell Therapy:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Experimental treatments using stem cells to repair damaged neurons and promote brain regeneration are being researched for neurodegenerative conditions.',
        },
      ],
    },
    {
      heading: 'Supportive Care:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Palliative care focuses on improving the patient’s quality of life by managing symptoms, providing psychological support, and assisting with decision-making regarding long-term care.',
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
      Neurodegenerative disorders are challenging, both for the patients who suffer from them and for their caregivers. However, India has developed an extensive network of neurological centers equipped to provide advanced, specialized care for these complex conditions. From symptomatic management to experimental therapies, patients can access a wide range of treatment options designed to enhance their quality of life. Early diagnosis, consistent treatment, and a multidisciplinary approach are key in managing these disorders and slowing their progression.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Memory Loss: Especially in disorders like Alzheimer's disease, where cognitive decline is prominent.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Motor Symptoms: Tremors, muscle rigidity, difficulty walking, and coordination issues are common in disorders such as Parkinson's disease.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Speech and Swallowing Difficulties: Many neurodegenerative conditions affect the muscles involved in speech and swallowing, leading to slurred speech and difficulty eating.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Cognitive Impairment: A decline in thinking abilities, reasoning, judgment, and problem-solving is seen in diseases like Alzheimer's and frontotemporal dementia.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Personality Changes: Some conditions, like frontotemporal dementia, result in dramatic shifts in personality and behavior.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Muscle Weakness: Progressive muscle weakness is characteristic of diseases such as ALS.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Fatigue: Persistent tiredness and exhaustion are common across many neurodegenerative disorders.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Neurological Examination: A thorough assessment of motor skills, coordination, reflexes, and cognitive abilities by a neurologist.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `MRI and CT Scans: Brain imaging techniques to detect changes in brain structure, such as atrophy, which is common in many neurodegenerative conditions.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `PET Scans: Used to observe brain activity and detect abnormalities associated with disorders like Alzheimer's disease.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Genetic Testing: Helpful in diagnosing inherited conditions like Huntington’s disease or familial ALS.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Electromyography (EMG): Tests nerve and muscle function, particularly useful for diagnosing ALS and related disorders.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Cerebrospinal Fluid (CSF) Analysis: Examines the fluid around the brain and spinal cord for signs of disease markers, like abnormal proteins in Alzheimer's or prion diseases.`,
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
        <H2 title={data.description} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          The exact cause of many neurodegenerative disorders is often unknown,
          but factors include:
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
                text="Symptoms of neurodegenerative disorders vary widely depending on the specific disease but often include:"
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
                text="Diagnosing neurodegenerative disorders typically involves a combination of clinical evaluations, imaging tests, and laboratory work. Some common diagnostic methods include:"
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
          <H2 title="Treatment" className="font-semibold mb-4 text-center" />

          <p className="font-light">
            While there is currently no cure for neurodegenerative disorders,
            treatments are available to manage symptoms, slow disease
            progression, and improve quality of life. Some common treatment
            options include:
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
