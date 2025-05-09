import React from 'react'
import Banner from '@/components/Common/Banner'
import H1 from '@/components/ui/h1'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'

const data = {
  title: 'Pituitary Tumours',
  bannerImage: '/neuro-sciences/pituitary-tumours.png',
  description: `Pituitary tumours are abnormal growths that develop in the pituitary gland, a small gland located at the base of the brain. The pituitary gland plays a crucial role in regulating various hormonal functions in the body, affecting growth, metabolism, and reproductive processes. Although many pituitary tumours are benign (non-cancerous), they can still have significant effects on health, leading to various symptoms and complications. In India, awareness and understanding of pituitary tumours are essential for timely diagnosis and effective management.`,
  overview: ``,

  section_1: [
    {
      title: 'Genetic Factors',
      description:
        'Certain genetic conditions, such as Multiple Endocrine Neoplasia (MEN) syndromes, increase the risk of developing pituitary tumours.',
    },
    {
      title: 'Family History',
      description:
        'A family history of pituitary or endocrine tumours may predispose individuals to similar conditions.',
    },
    {
      title: 'Hormonal Imbalances',
      description:
        'Disruptions in hormone regulation may play a role in tumour formation.',
    },
    {
      title: 'Autoimmune Conditions',
      description:
        'Autoimmune Conditions:Multiple sclerosis and transverse myelitis involve the immune system attacking the spinal cord.',
    },
   
  ],

  complications: [
    {
      heading: 'Surgery',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Transsphenoidal surgery is often the preferred method to remove the tumour through the nose or the back of the throat. This approach is less invasive and can lead to quicker recovery.',
        },
      ],
    },

    {
      heading: 'Radiation Therapy',
      description: '',
      aneurysmSymptoms: [
        {
          description:
            'Used when surgery is not possible or to target residual tumour cells after surgery. Techniques like stereotactic radiosurgery can deliver precise radiation to the tumour while sparing surrounding healthy tissue.',
        },
      ],
    },
    {
      heading: 'Medications',
      description: '',
      aneurysmSymptoms: [
        {
          description: `Depending on the type of tumour, medications may be prescribed to help control hormone production or shrink the tumour. For example, dopamine agonists are effective for prolactin-secreting tumours.
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
      In India, the management of pituitary tumours involves a multidisciplinary approach, including neurologists, endocrinologists, and neurosurgeons. Early detection and treatment are vital to prevent complications and improve patient outcomes. Regular monitoring and follow-ups are essential to manage any hormonal changes and assess for potential recurrence of the tumour. With advancements in diagnostic and therapeutic techniques, patients with pituitary tumours can expect improved quality of life and effective management of their condition.
          `,
    },
  ],

  symptoms: [
    {
      category: 'Headaches',
      description:
        'Persistent headaches that may be associated with increased pressure in the skull.',
      bgColor: 'text-black',
    },
    {
      category: 'Vision Problems',
      description:
        'Blurred or double vision, or peripheral vision loss, often due to pressure on the optic nerves.',
      bgColor: 'text-black',
    },
    {
      category: 'Hormonal Changes',
      description:
        `
      <p>Tumours may lead to an overproduction or underproduction of hormones, causing a range of symptoms, such as:</p>
        <li class="text-hciSecondary"><span class="font-medium">Cushing&apos;s Disease:</span> <span class='text-black'>Caused by excessive production of cortisol, leading to weight gain, high blood pressure, and diabetes.</span></li>
        <li class="text-hciSecondary"><span class="font-medium">Acromegaly:</span> <span class='text-black'>Caused by excess growth hormone, resulting in enlarged hands, feet, and facial features.</span></li>
        <li class="text-hciSecondary"><span class="font-medium">Prolactinoma:</span> <span class='text-black'>A type of tumour that produces excess prolactin, causing menstrual irregularities in women and erectile dysfunction in men.</span></li>
`,
      bgColor: 'text-black',
    },
    {
      category: 'Fatigue',
      description:
        'Unexplained fatigue or weakness due to hormonal imbalances.',
      bgColor: 'text-black',
    },
   
  ],

  diagnosis: [
    {
      category: '',
      description:
        'Medical History and Physical Examination: A thorough evaluation of symptoms and a physical exam to assess for signs of hormonal imbalance.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `Imaging Studies: MRI or CT scans are crucial for visualising the pituitary gland and identifying the presence of tumours.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        'Hormonal Testing: Blood tests are conducted to measure hormone levels and assess any imbalances.',
      bgColor: 'bg-hciSecondary text-white',
    },
   
  ],
}

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />

        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light" text="">
        The exact cause of pituitary tumours is often unknown, but several factors may contribute to their development:

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
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
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
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms of pituitary tumours can vary widely depending on the type of tumour and its size. Common symptoms include:"
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
                text="Diagnosing pituitary tumours typically involves several steps:"
                titleCss="text-black font-medium text-center text-2xl py-4"
                header=""
                textCss="font-light py-4"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          <p className="font-light">
          The treatment of pituitary tumours depends on the type, size, and whether the tumour is causing hormonal imbalances or other complications. Common treatment options include:

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
