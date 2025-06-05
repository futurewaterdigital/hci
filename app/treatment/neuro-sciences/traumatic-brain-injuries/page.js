import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/CausesKnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import IssuesLinks from '@/components/ui/IssuesLinks'
import H1 from '@/components/ui/h1'
const data = {
  title: "Traumatic Brain Injuries ",
  bannerImage: "/neuro-sciences/traumatic-brain-injuries.png",
  description: `A Traumatic Brain Injury (TBI) refers to damage to the brain resulting from an external mechanical force, which can have significant and lasting effects on a person’s cognitive, physical, and emotional well-being. TBIs are a growing health concern, often linked to road accidents, falls, and sports-related injuries. Understanding TBI is vital for timely intervention and rehabilitation, enhancing recovery and quality of life.`,
  overview: ``,

  section_1: [
    {
      title: "Road Accidents",
      description: `One of the leading causes of TBI, often resulting from high-speed collisions or pedestrian injuries.`,
    },
    {
      title: "Sports Injuries",
      description: `Contact sports, such as football and rugby, carry a higher risk of TBI due to impacts or collisions.`,
    },
    {
      title: "Assaults",
      description:
        "Violence or physical altercations can result in blunt force trauma to the head, leading to TBI.",
    },
    {
      title: "Workplace Accidents",
      description:
        "Injuries sustained in construction or industrial settings can result in head injuries if safety precautions are not followed.",
    },
    {
      title: "Falls",
      description:
        "Common in both older adults and children, falls can lead to severe head injuries, especially in those with weakened bones or balance issues.",
    },
  ],

  complications: [
    {
      heading: "Emergency Care:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Immediate care may involve stabilising the patient and preventing further injury. This could include airway management and controlling bleeding.",
        },
      ],
    },

    {
      heading: "Medications",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Drugs may be prescribed to manage symptoms such as pain, seizures, or swelling in the brain. Corticosteroids might be used to reduce inflammation.`,
        },
      ],
    },
    {
      heading: "Surgery",
      description: "",
      aneurysmSymptoms: [
        {
          description: `In cases of severe TBI, surgical interventions may be necessary to relieve pressure on the brain, remove clotted blood, or repair skull fractures.
            `,
        },
      ],
    },
    {
      heading: "Rehabilitation",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Comprehensive rehabilitation programmes often include physical therapy, occupational therapy, and speech therapy to aid recovery and help individuals regain lost skills.`,
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
     Growing awareness of traumatic brain injury (TBI) and its impact on individuals and families has led to better support systems and expanded treatment options. Access to specialized care and rehabilitation facilities plays a key role in enhancing recovery outcomes. Timely diagnosis and proper management of TBIs can significantly improve quality of life, helping patients reintegrate into society and return to daily routines. Educating the public on prevention strategies, especially in high-risk settings, is essential for reducing the incidence of TBIs.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: `Cognitive Impairment: Difficulties with memory, attention, or concentration.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Physical Symptoms: Headaches, dizziness, nausea, and vomiting may occur.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Emotional Changes: Mood swings, anxiety, and depression can be prevalent in individuals with TBI.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Loss of Consciousness: Varying from brief moments to prolonged periods, depending on the severity of the injury.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Balance Issues: Difficulty with coordination and balance can be indicative of brain injury.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Sensitivity to Light and Noise: Increased sensitivity can occur, causing discomfort.`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description: `Neurological Examination: An evaluation of cognitive function, coordination, and reflexes to assess the extent of brain injury.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Imaging Studies: CT scans or MRI scans are crucial for visualising brain structures and identifying bleeding, swelling, or other abnormalities.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Glasgow Coma Scale (GCS): This scale assesses a patient's level of consciousness and can help determine the severity of the injury.`,
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
          The primary causes of TBIs can be diverse and include:
        </p>
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.slice(0, 4).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {data.section_1.slice(4, 5).map((item, index) => (
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
        {/* <KnowMore title={data.title} /> */}

        <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To Know More About Trigeminal Neuralgia And Its Treatment, Click Here
          </button>
        </p>

        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Symptoms of TBI can vary widely depending on the severity of the injury and can manifest immediately or may develop over time. Common symptoms include:"
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                textCss="font-light py-4"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className="space-y-4">
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing TBI typically involves a comprehensive assessment that includes:"
                header=""
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                textCss="font-light py-4"
                data={data.diagnosis}
                myclass="grid grid-cols-2 h-full"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2 title="Treatment" className="font-medium mb-4 text-center text-2xl" />

          <p className="font-light">
            The treatment of TBI depends on the severity and specific symptoms
            presented, encompassing a range of approaches:
          </p>
          <DataLists
          boxClass={"min-h-[60px]"}
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
