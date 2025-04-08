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
  title: 'Spinal Cord Disorders',
  bannerImage: '/neuro-sciences/spinal-cord-disorders.png',
  description: `Spinal cord disorders encompass a wide range of conditions that affect the spinal cord, a crucial part of the central nervous system responsible for transmitting signals between the brain and the rest of the body. These disorders can lead to significant physical and neurological impairments, impacting movement, sensation, and even autonomic functions like breathing and heart rate. In India, specialized hospitals offer advanced treatments for various spinal cord disorders, attracting patients from around the world due to high-quality care at affordable costs.`,
  overview: ``,

  section_1: [
    {
      title: 'Traumatic Injury',
      description:
        'Accidents, falls, or sports injuries can lead to spinal cord damage.',
    },
    {
      title: 'Degenerative Diseases',
      description:
        'Disorders like degenerative disc disease, spinal stenosis, and spondylosis result from age-related wear and tear.',
    },
    {
      title: 'Tumors',
      description:
        'Benign or malignant growths within or around the spinal cord can compress nerves and disrupt function.',
    },
    {
      title: 'Autoimmune Conditions',
      description:
        'Multiple sclerosis and transverse myelitis involve the immune system attacking the spinal cord.',
    },
    {
      title: 'Infections',
      description:
        'Conditions such as spinal tuberculosis (Pott’s disease) or viral infections can damage the spinal cord.',
    },
    {
      title: 'Congenital Disorders',
      description:
        'Birth defects such as spina bifida can lead to lifelong spinal cord dysfunction.',
    },
  ],

  complications: [
    {
      heading: 'Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Surgical intervention is often required to remove tumors, stabilize fractures, decompress compressed nerves, or correct deformities in the spine. Minimally invasive techniques are often employed to reduce recovery times and minimize complications.',
        },
      ],
    },

    {
      heading: 'Physical Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Rehabilitation plays a crucial role in helping patients regain mobility, strength, and independence. Physical therapy focuses on improving muscle strength, coordination, and flexibility.',
        },
      ],
    },
    {
      heading: 'Spinal Fusion',
      description: '',
      aneurysmSymptoms: [
        {
          description: `In cases of instability, surgeons may perform a spinal fusion to join two or more vertebrae to prevent abnormal movement and stabilize the spine.

            `,
        },
      ],
    },
    {
      heading: 'Decompression Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description: `This procedure involves removing pressure from the spinal cord caused by herniated discs, bone spurs, or other sources of compression.
`,
        },
      ],
    },
    {
      heading: 'Steroid Injections',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Corticosteroid injections help reduce inflammation and pain in conditions like spinal stenosis or disc herniation.`,
        },
      ],
    },
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Depending on the condition, medications such as pain relievers, muscle relaxants, anti-inflammatory drugs, and nerve pain medications may be prescribed.
`,
        },
      ],
    },
    {
      heading: 'Rehabilitation',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Following surgery or other treatments, rehabilitation programs focus on helping patients regain mobility, function, and quality of life. Occupational therapy, physical therapy, and assistive devices may be part of the rehabilitation process.`,
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
      Spinal cord disorders require prompt diagnosis and comprehensive treatment to prevent irreversible damage and improve patient outcomes. With state-of-the-art diagnostic tools and advanced treatment options, including minimally invasive spine surgeries and tailored rehabilitation programs, India has become a leading destination for spinal cord disorder treatment. Early intervention and personalized care plans are key to maximizing recovery and improving quality of life for patients affected by spinal cord disorders.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description: `Pain: Persistent back pain or neck pain that may radiate to the arms, legs, or chest.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Weakness or Paralysis: Loss of muscle strength or complete paralysis in the limbs or torso.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Numbness or Tingling:  Sensory changes such as numbness, tingling, or a burning sensation in the extremities.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Loss of Coordination:  Difficulty with balance, walking, or performing coordinated movements.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Bladder or Bowel Dysfunction: Loss of control over bladder and bowel functions due to nerve damage.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `Difficulty Breathing: In severe cases, respiratory issues may occur if the injury affects the nerves controlling the diaphragm.
`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `Magnetic Resonance Imaging (MRI): Provides detailed images of the spinal cord, helping to identify injuries, tumors, infections, or degenerative conditions.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Computed Tomography (CT) Scan: Offers cross-sectional images of the spine and spinal cord, often used to evaluate bone abnormalities or fractures.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `X-rays: Useful for assessing structural issues such as fractures or abnormal spine alignment.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Myelography: An imaging test using contrast dye to visualize the spinal cord and surrounding tissues, often used to diagnose spinal stenosis or herniated discs.
`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Electromyography (EMG): Measures the electrical activity in muscles to assess nerve damage and muscle function.`,
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
        <p className="text-start font-light" >{data.description}</p>
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Spinal cord disorders can result from various causes, including:
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
                text="The symptoms of spinal cord disorders vary depending on the location and severity of the condition. Common symptoms include:"
                titleCss="text-black font-semibold text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing spinal cord disorders involves a thorough clinical evaluation and advanced imaging techniques:"
                header=""
                titleCss="text-black font-semibold text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              {/* <KnowMore title={title} /> */}
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-semibold mb-4 text-center" />

          <p className="font-light">
            Treatment for spinal cord disorders varies depending on the
            underlying cause, severity of the condition, and overall health of
            the patient. The primary goals are to reduce pain, restore function,
            and prevent further damage to the spinal cord. Common treatment
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
