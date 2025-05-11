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
  title: 'Chiari Malformation',
  bannerImage: '/neuro-sciences/chiari-malformation.png',
  description: `Chiari malformation is a structural defect in the brain that occurs when the lower part of the brain, known as the cerebellum, extends into the spinal canal. This condition can lead to various neurological symptoms and complications, making early diagnosis and management essential. Chiari malformation is becoming more widely acknowledged as a serious medical condition, especially in those who have neurological symptoms that cannot be explained.`,
  overview: ``,

  section_1: [
    {
      title: "Congenital Factors",
      description:
        "Chiari malformation is often present at birth and may result from abnormal development of the brain and spinal cord during fetal growth.",
    },
    {
      title: "Genetic Factors",
      description:
        "Some individuals may have a genetic predisposition to Chiari malformation, which can run in families.",
    },
    {
      title: "Acquired Factors",
      description:
        "In some cases, Chiari malformation may develop later in life due to conditions that affect the structure of the skull or spine, such as spinal cord injury, trauma, or tumours.",
    },
  ],

  complications: [
    {
      heading: "Observation",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "In mild cases where symptoms are minimal, regular monitoring may be sufficient.",
        },
      ],
    },

    {
      heading: "Medications",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Pain management and medications to address specific symptoms, such as headaches or dizziness.",
        },
      ],
    },
    {
      heading: "Physical Therapy",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Rehabilitation exercises may help improve coordination and strength.

            `,
        },
      ],
    },
    {
      heading: "Surgery",
      description: "",
      aneurysmSymptoms: [
        {
          description: `In cases where symptoms are severe or progressive, surgical intervention may be necessary. The most common procedure is posterior fossa decompression, which involves removing a small section of bone at the back of the skull to relieve pressure on the cerebellum and improve CSF flow.
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
      The recognition and treatment of Chiari malformation is growing, with advancements in diagnostic imaging and surgical techniques. Early intervention and a multidisciplinary approach involving neurologists, neurosurgeons, and rehabilitation specialists are essential for optimizing outcomes and improving the quality of life for individuals affected by this condition. With appropriate care, many patients can manage their symptoms effectively and lead fulfilling lives.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: `Headaches: Often severe and worsening with coughing, sneezing, or straining.
`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Neck Pain: Pain or discomfort in the neck area.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Dizziness or Imbalance: Feeling lightheaded or having difficulty maintaining balance.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Numbness and Tingling: Sensations of numbness or tingling in the arms or legs.
`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Visual Disturbances: Blurred or double vision.
`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Difficulty with Coordination: Challenges with fine motor skills or coordination.
`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Sleep Apnoea: Breathing difficulties during sleep.
`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Clinical Evaluation",
      description: `
Diagnosis typically begins with a thorough medical history and physical examination, focusing on neurological function.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging Studies",
      description: `
MRI scans are the most effective diagnostic tool, allowing for detailed imaging of the brain and spinal cord to assess the extent of the malformation.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "CT Scans",
      description: `
These may also be used to evaluate structural changes in the skull and spine.`,
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

console.log(data.complications[0].heading);

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p className="text-start font-light" >{data.description}</p>
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light" text="">
          The exact cause of Chiari malformation is not always clear, but
          several factors may contribute to its development:
        </p>
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-3 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[120px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        {/* <KnowMore title={data.title} /> */}

        <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To Know More About Chiari Malformation And Its Treatment, Click Here
          </button>
        </p>
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Symptoms of Chiari malformation can vary widely, depending on the severity of the condition and whether it causes obstruction of cerebrospinal fluid (CSF) flow. Common symptoms include:"
                titleCss="text-black font-medium text-center text-2xl"
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
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
              />
              {/* <IssuesLinks head={data.title} /> */}
              <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
                <button className="text-start underline">
                  To Get The Best Diagnosis For Chiari Malformation And Related Issues, Click Here
                </button>
              </p>
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          <p className="font-light">
            Treatment for Chiari malformation depends on the severity of
            symptoms and their impact on the individual&apos;s quality of life.
            Options may include:
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
  );
}

export default GeneralSurgery;
