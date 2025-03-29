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
  title: 'Pediatric Orthopedic Conditions',
  bannerImage: '/orthopaedics/pediatric-orthopedic-conditions.png',
  description: `Pediatric orthopedic conditions refer to disorders affecting the musculoskeletal system of children, including bones, joints, and muscles. These conditions can significantly impact growth, physical development, and a child’s ability to engage in everyday activities. Timely diagnosis and proper care are crucial in ensuring optimal outcomes and preventing long-term complications.`,
  overview: `This section explores common pediatric orthopedic conditions, their causes, symptoms, diagnostic methods, and treatment options to help families navigate these challenges effectively.`,

  causes: [
    {
      title: 'Congenital Issues',
      description:
        'Conditions such as clubfoot and developmental dysplasia of the hip (DDH) are present from birth.',
    },
    {
      title: 'Injuries and Trauma',
      description:
        'Falls, sports activities, or accidents may lead to fractures or joint dislocations.',
    },
    {
      title: 'Genetic or Hereditary Factors',
      description:
        'Certain conditions, such as scoliosis, may run in families.',
    },
    {
      title: 'Infections and Inflammation',
      description:
        'Diseases like Osgood-Schlatter involve inflammation at the growth plates.',
    },
    {
      title: 'Overuse and Improper Growth Patterns',
      description:
        'Repeated strain on joints or muscles during growth spurts can contribute to some orthopedic conditions.',
    },
  ],

  complications: [
    {
      heading: 'Non-Surgical Treatment',
      aneurysmSymptoms: [
        {
          description:
            'Physical Therapy: Helps restore strength, flexibility, and range of motion.',
        },
        {
          description:
            'Bracing or Splinting: Corrective devices are used for conditions like scoliosis or clubfoot.',
        },
        {
          description:
            'Activity Modification: Reducing activities that exacerbate symptoms.',
        },
        {
          description:
            'Medications: Pain management and anti-inflammatory medications for discomfort.',
        },
      ],
    },

    {
      heading: 'Surgical Treatment',
      aneurysmSymptoms: [
        {
          description:
            'Closed Reduction: For conditions like DDH, realigning bones without major incisions.',
        },
        {
          description:
            'Osteotomy: Cutting and realigning bones to improve joint function.',
        },
        {
          description:
            'Fracture Fixation: Using pins or plates to stabilize broken bones.',
        },
        {
          description:
            'Spinal Surgery: For severe scoliosis cases, to correct and stabilize the spine.',
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
      Understanding pediatric orthopedic conditions helps parents, caregivers, and healthcare providers take appropriate steps toward treatment and prevention. Timely medical intervention ensures children experience better physical development and improved quality of life. If you notice any of the above symptoms or have concerns about your child’s musculoskeletal health, consult a pediatric orthopedic specialist promptly.
          `,
    },
  ],

  symptoms: [
    {
      category: 'Pain or Swelling',
      description:
        'Persistent pain in bones, joints, or muscles, especially after an injury.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Difficulty in Movement',
      description:
        'Stiffness, reduced range of motion, or inability to walk or bear weight properly.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Deformities',
      description:
        'Visible misalignment of limbs, curvature of the spine, or uneven leg lengths.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Growth Issues',
      description: 'Delays in motor development or abnormal growth patterns.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: 'Recurring Injuries',
      description:
        'Injuries occurring frequently in the same areas can indicate underlying orthopedic problems.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: 'Clinical Examination',
      description:
        'Doctors assess physical symptoms such as pain, swelling, or deformity.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Imaging Studies',
      description:
        'X-rays, ultrasound, MRI, or CT scans help confirm structural issues.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Genetic Testing',
      description:
        'For hereditary conditions like scoliosis, additional genetic evaluation may be recommended.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: 'Growth Monitoring',
      description:
        'Tracking developmental milestones can identify abnormalities early.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],

  consideration: [
    {
      title: 'Regular Check-ups',
      description:
        'Routine pediatric visits help detect developmental issues early.',
    },
    {
      title: 'Safe Practices in Sports',
      description:
        'Proper warm-up routines and protective gear minimize injuries.',
    },
    {
      title: 'Nutritional Support',
      description: 'A diet rich in calcium and vitamin D supports bone health.',
    },
    {
      title: 'Emotional Support',
      description:
        'Helping children and families cope with the psychological impact of orthopedic conditions ensures holistic well-being.',
    },
    {
      title: 'Rehabilitation',
      description:
        'Comprehensive physiotherapy aids recovery and promotes mobility post-treatment.',
    },
  ],
  consideration_1: [
    {
      title: 'Persistent Pain',
      description:
        'Lasting discomfort or swelling, especially after an injury.',
    },
    {
      title: 'Visible Deformity',
      description: 'Abnormal alignment of limbs, joints, or posture.',
    },
    {
      title: 'Difficulty Walking or Moving',
      description: 'Inability to bear weight or move joints comfortably.',
    },
    {
      title: 'Growth Concerns',
      description:
        'Delayed developmental milestones or uneven growth patterns.',
    },
    {
      title: 'Recurring Injuries',
      description:
        'Frequent injuries in the same area requiring further evaluation.',
    },
  ],
}

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
          Pediatric orthopedic conditions can develop from multiple factors,
          including:
        </p>
        <div className="grid grid-cols-5 gap-4">
          {data.causes.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[150px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white"
            />
          ))}
        </div>
        <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p>
        <KnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Common symptoms of an acetabular fracture include:"
                titleCss="text-black font-semibold text-center"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Proper diagnosis is essential to determine the severity and pattern of the fracture. Healthcare providers typically perform the following:"
                header=""
                titleCss="text-black font-semibold text-center"
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
            The choice of treatment depends on the condition&apos;s severity,
            the child&apos;s age, and overall health. Both non-surgical and
            surgical interventions are considered.
          </p>
          <DataLists
            desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
            data={data.complications}
          />
        </div>
        <div className="space-y-4">
          <H2 text="Prevention and Support" />
          <p className="font-light text-center">
            Prevention strategies can reduce the risk of pediatric orthopedic
            issues and improve outcomes. Some key recommendations include:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <H2 text="When to See a Doctor?" />
          <p className="font-light text-center">
            Consult a doctor if your child experiences any of the following:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              {data.consideration_1.slice(0).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            {/* <div className="grid grid-cols-2 gap-4">
              {data.consideration_1.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div> */}
          </div>
        </div>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  )
}

export default GeneralSurgery
