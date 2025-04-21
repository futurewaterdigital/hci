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
import IssuesLinks from '@/components/ui/IssuesLinks'


const data = {
  title: "Cerebral Palsy",
  bannerImage: "/neuro-sciences/cerebral-palsy.png",
  description: `Cerebral palsy (CP) is a group of neurological disorders that affect movement, muscle tone, and posture, primarily caused by abnormal brain development or damage to the developing brain. It is one of the most common causes of motor disability in childhood, significantly impacting a person’s ability to move and maintain balance and posture. In India, cerebral palsy poses considerable challenges to affected individuals and their families, necessitating comprehensive care and support.`,
  overview: ``,

  section_1: [
    {
      title: "Prenatal Factors",
      description:
        "Many cases of cerebral palsy result from complications during pregnancy, such as infections, exposure to toxins, or insufficient oxygen supply to the brain.",
    },
    {
      title: "Postnatal Factors",
      description:
        "Brain injuries occurring after birth, such as infections, head trauma, or lack of oxygen due to drowning or choking, can also lead to cerebral palsy.",
    },
    {
      title: "Birth Complications",
      description:
        "Factors such as premature birth, low birth weight, or complications during delivery can increase the risk of developing CP.",
    },
    {
      title: "Genetic Factors",
      description:
        "While most cases are due to environmental influences, some may have a genetic component, predisposing the child to brain abnormalities.",
    },
  ],

  complications: [
    {
      heading: "Physical Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Aimed at improving mobility and coordination through tailored exercises and activities.",
        },
      ],
    },

    {
      heading: "Occupational Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Helps individuals develop skills for daily living and encourages independence in everyday activities. Helps individuals develop skills for daily living and encourages independence in everyday activities.",
        },
      ],
    },
    {
      heading: "Speech Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Assists those with communication challenges, focusing on improving speech and language skills.

            `,
        },
      ],
    },
    {
      heading: "Medications",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Muscle relaxants, anticonvulsants, or pain management medications may be prescribed to alleviate symptoms.
`,
        },
      ],
    },
    {
      heading: "Surgical Options",
      description: "",
      aneurysmSymptoms: [
        {
          description: `In certain cases, surgical interventions may be considered to improve mobility or correct anatomical issues, such as orthopedic surgeries to enhance limb function or selective dorsal rhizotomy to reduce spasticity.`,
        },
      ],
    },
    {
      heading: "Assistive Devices",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Wheelchairs, braces, or other adaptive technologies can enhance mobility and independence.
`,
        },
      ],
    },
  ],

  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert Urological Care",
    content:
      "Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.",
  },

  conclusion: [
    {
      header: "Conclusion",
      paragraph: `
      In India, early diagnosis and intervention play a crucial role in managing cerebral palsy. A multidisciplinary approach involving healthcare professionals, therapists, and support services is essential for providing comprehensive care and enhancing the quality of life for individuals living with this condition. Support from families and communities also plays a vital role in empowering individuals with cerebral palsy to achieve their full potential.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: `Motor Impairments: Individuals with cerebral palsy may experience stiffness or weakness in muscles, leading to difficulties with movement and coordination.
`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Spasticity: This is the most common type, characterised by tight or stiff muscles, resulting in jerky movements.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Ataxia: Involves balance and coordination issues, causing unsteady movements.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Dyskinetic Movements: Involves involuntary movements, including twisting or repetitive motions.

`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Associated Conditions: Many individuals may also have cognitive impairments, seizures, visual or hearing impairments, and speech difficulties.
`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Clinical Evaluation",
      description: `
Diagnosis typically begins with a thorough assessment of the child’s development and motor skills.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Medical History",
      description: `
A comprehensive review of the mother’s pregnancy, birth history, and the child’s developmental milestones is essential.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Neurological Examination",
      description: `
A thorough examination to assess muscle tone, reflexes, and coordination.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging Studies",
      description: `
MRI or CT scans may be used to identify any abnormalities in brain structure.
`,
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p className="text-start font-light" >{data.description}</p>
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        {/* <p className="font-light" text="">
          Spinal cord disorders can result from various causes, including:
        </p> */}
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
        <div className='pt-6'>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                // text="The symptoms of spinal cord disorders vary depending on the location and severity of the condition. Common symptoms include:"
                titleCss="text-black font-medium text-center text-2xl pb-4"
                textCss="font-light py-4"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className='space-y-6'>
              <DataBoxes
                title="Diagnosis"
                // text="Diagnosing spinal cord disorders involves a thorough clinical evaluation and advanced imaging techniques:"
                header=""
                titleCss="text-black font-medium text-center text-2xl pb-4"
                textCss="font-light py-4"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          {/* <p className="font-light">
            Treatment for spinal cord disorders varies depending on the
            underlying cause, severity of the condition, and overall health of
            the patient. The primary goals are to reduce pain, restore function,
            and prevent further damage to the spinal cord. Common treatment
            options include:
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
  );
}

export default GeneralSurgery;
