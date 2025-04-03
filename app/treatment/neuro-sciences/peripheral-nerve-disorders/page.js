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
  title: 'Peripheral Nerve Disorders',
  bannerImage: '/neuro-sciences/peripheral-nerve-disorders.png',
  description: `Peripheral nerve disorders refer to a range of conditions that affect the peripheral nervous system, which comprises the nerves outside the brain and spinal cord. These disorders can significantly impact an individual’s quality of life, leading to symptoms such as weakness, numbness, and pain. In India, the prevalence of peripheral nerve disorders is rising due to factors like diabetes, trauma, and exposure to toxins.`,
  overview: ``,

  section_1: [
    {
      title: 'Diabetes',
      description:
        'Diabetic neuropathy is one of the most common causes of peripheral nerve disorders, resulting from prolonged high blood sugar levels.',
    },
    {
      title: 'Injuries',
      description:
        'Physical trauma or compression of nerves can lead to peripheral nerve damage.',
    },
    {
      title: 'Infections',
      description:
        'Certain infections, such as Lyme disease or HIV, can affect nerve function.',
    },
    {
      title: 'Toxins',
      description:
        'Exposure to heavy metals, chemicals, or alcohol can result in nerve damage.',
    },
    {
      title: 'Genetic Factors',
      description:
        'Some hereditary conditions can predispose individuals to peripheral nerve disorders.',
    },
  ],

  complications: [
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Pain relievers, anti-seizure medications, and antidepressants may help manage symptoms.',
        },
      ],
    },

    {
      heading: 'Physical Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Rehabilitation exercises can improve strength and coordination, aiding recovery.',
        },
      ],
    },
    {
      heading: 'Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description: `In cases of nerve compression or injury, surgical intervention may be necessary to relieve pressure.
            `,
        },
      ],
    },
    {
      heading: 'Lifestyle Changes',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Managing underlying conditions like diabetes and making dietary adjustments can help prevent further nerve damage.',
        },
      ],
    },
    {
      heading: 'Alternative Therapies:',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Techniques such as acupuncture or massage therapy may provide additional relief.',
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
      In India, specialized medical centres offer comprehensive care for peripheral nerve disorders, employing advanced diagnostic techniques and treatment options. Early intervention is crucial for optimizing outcomes, enabling individuals to lead healthier, more active lives despite their conditions.
          `,
    },
  ],

  symptoms: [
    {
      category: '',
      description:
        'Numbness or Tingling: A common early symptom often described as a “pins and needles” sensation.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Weakness: Difficulty in muscle control or weakness, particularly in the hands or feet.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Pain: Sharp, stabbing, or burning pain that may worsen at night.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Sensitivity: Heightened sensitivity to touch, making normal sensations feel uncomfortable.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description:
        'Loss of Coordination: Difficulty with balance and coordination due to impaired nerve function.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description:
        'Physical Examination: A thorough assessment of symptoms and medical history.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Nerve Conduction Studies: Tests that measure the speed and strength of signals travelling along nerves.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Electromyography (EMG): Evaluates the electrical activity of muscles to identify nerve or muscle disorders.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Blood Tests: To detect underlying conditions such as diabetes or vitamin deficiencies.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Imaging Studies: MRI or ultrasound may be used to identify structural issues affecting the nerves.',
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
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        {/* <p className="font-light" text="">
          The exact cause of benign peripheral nerve tumours is often unclear,
          but some cases are associated with genetic conditions, such as
          neurofibromatosis type 1 (NF1) and neurofibromatosis type 2 (NF2).
          These inherited conditions increase the likelihood of developing nerve
          tumours.
        </p> */}
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-5 gap-4">
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
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                // text="Symptoms depend on the tumor's size, location, and growth rate but can include:"
                textCss="font-light py-4"
                titleCss="text-black font-semibold text-center text-xl py-4"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                // text="Early detection is essential for effective treatment. Diagnostic methods include:"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-semibold text-center text-xl py-4"
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
            Treatment for benign peripheral nerve tumours depends on factors
            such as the type, size, location, and whether the tumour causes
            symptoms. Options include:
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
