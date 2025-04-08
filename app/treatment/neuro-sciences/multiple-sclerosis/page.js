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
  title: 'Multiple Sclerosis (MS)',
  bannerImage: '/neuro-sciences/multiple-sclerosis.png',
  description: `Multiple Sclerosis (MS) is a chronic neurological disorder that affects the central nervous system, which includes the brain and spinal cord. It disrupts the flow of information within the brain and between the brain and the body. MS is considered an autoimmune disease, where the body's immune system mistakenly attacks the protective covering of nerve fibers (myelin), leading to communication problems between the brain and the rest of the body. Over time, this can cause permanent damage to the nerves themselves. India is emerging as a hub for advanced treatment options for MS, offering expertise in neurology, cutting-edge therapies, and comprehensive patient care.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Predisposition',
      description:
        'A family history of MS may increase the risk of developing the disease, though it is not directly inherited.',
    },
    {
      title: 'Autoimmune Reaction',
      description:
        'Heart problems, such as atrial fibrillation, can lead to the formation of blood clots that may travel to the brain, resulting in a stroke.',
    },
    {
      title: 'Environmental Factors',
      description:
        'Low levels of Vitamin D, particularly in individuals living in areas with less sunlight, may increase the risk.',
    },
    {
      title: 'Infections',
      description:
        'Some viral infections, such as Epstein-Barr virus (EBV), have been associated with a higher risk of MS.',
    },
    {
      title: 'Smoking',
      description:
        'Smoking increases the risk of MS and can accelerate the progression of the disease in individuals already diagnosed.',
    },
  ],

  complications: [
    {
      heading: 'Disease-modifying Therapies (DMTs)',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'These medications help reduce the frequency and severity of relapses and may slow the progression of MS. They work by modulating or suppressing the immune system to prevent further damage to the myelin sheath. Common DMTs include interferon-beta, glatiramer acetate, and newer oral medications like fingolimod and dimethyl fumarate.',
        },
      ],
    },

    {
      heading: 'Corticosteroids',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Used to reduce inflammation during acute MS attacks, helping to speed up recovery from relapses.',
        },
      ],
    },
    {
      heading: 'Plasma Exchange (Plasmapheresis)',
      description: '',
      aneurysmSymptoms: [
        {
          description: `This treatment is used for severe relapses that do not respond to corticosteroids. It involves removing and treating the blood plasma before returning it to the patient.

            `,
        },
      ],
    },
    {
      heading: 'Physical Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Rehabilitation focuses on strengthening muscles, improving balance, and maintaining mobility. Physical therapy is crucial in managing symptoms like spasticity and fatigue.
`,
        },
      ],
    },
    {
      heading: 'Occupational Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Helps individuals with MS adapt to daily activities and maintain independence.`,
        },
      ],
    },
    {
      heading: 'Medications for Symptom Management:',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Specific medications can be prescribed to manage symptoms such as muscle spasticity, pain, bladder problems, and fatigue.`,
        },
      ],
    },
    {
      heading: 'Stem Cell Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Experimental treatment where a patient's own stem cells are used to rebuild the immune system in severe cases of MS.`,
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
     Multiple Sclerosis is a complex and unpredictable disease that significantly impacts the lives of those affected. While the disease presents unique challenges, advances in treatments and therapies offer hope for better disease management and improved quality of life. India’s healthcare infrastructure, with its access to cutting-edge neurology care and personalized treatment plans, has become a destination for patients seeking high-quality MS treatment. Early diagnosis and an individualized approach to therapy are key to managing MS effectively and slowing its progression.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Numbness or Tingling: Typically in the face, arms, legs, or trunk.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Muscle Weakness: Especially in the limbs, making walking and coordination difficult.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Vision Problems: Blurred or double vision, optic neuritis (inflammation of the optic nerve), or even partial or total vision loss.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Spasticity: Some seizures are accompanied by unusual sensations such as tingling, visual disturbances, or strange smells and sounds.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Cognitive Dysfunction: Problems with memory, attention, and information processing.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Difficulty Walking: Gait problems due to muscle weakness, spasticity, or coordination issues.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Bladder and Bowel Issues: Urgency, frequency, or difficulty controlling urination, as well as constipation.`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Dizziness or Vertigo: Feeling off balance or lightheaded.`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `MRI: Magnetic resonance imaging (MRI) is the most commonly used test to detect areas of demyelination (plaques) in the brain and spinal cord.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Spinal Tap (Lumbar Puncture): Analysis of cerebrospinal fluid can reveal abnormalities in antibodies that are associated with MS.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Evoked Potentials Test: Measures the electrical activity in the brain in response to stimuli and can help detect nerve damage in individuals suspected of having MS.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Blood Tests: Although there is no blood test for MS, these tests help rule out other conditions that may cause similar symptoms, such as infections or inflammatory diseases.`,
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
        <p className="text-start font-light" >{data.description}</p>
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          The exact cause of MS remains unknown, but a combination of genetic,
          environmental, and immune-related factors appears to be involved. Some
          of the possible causes include:
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
                text="The symptoms of MS vary widely depending on the extent and location of nerve damage. Common symptoms include:"
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
                text="Diagnosing MS requires a combination of tests and assessments, as there is no single definitive test for the disease. The process typically includes:"
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
            While there is no cure for MS, a variety of treatments are available
            to manage symptoms, slow the disease’s progression, and improve
            quality of life. Treatments include:
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
