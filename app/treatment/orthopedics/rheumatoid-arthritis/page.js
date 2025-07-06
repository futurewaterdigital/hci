'use client'
// generalSurgery.js
import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/BulletsTwo'
import BookButton from '@/components/cardiacComponents/BookButton'
// import FooterLinks from '@/components/cardiacComponents/FooterLink'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H1 from '@/components/ui/h1'
import IssuesLinks from "@/components/ui/IssuesLinks"

const data = {
  title: "Rheumatoid Arthritis",
  bannerImage: "/orthopaedics/rheumatoid-arthritis.png",
  description: `Rheumatoid arthritis (RA) is a chronic autoimmune disorder that primarily affects the joints, causing inflammation, pain, and progressive joint damage. This condition is prevalent worldwide and can significantly impact daily activities and overall quality of life. Unlike osteoarthritis, which is primarily due to wear and tear, rheumatoid arthritis is an autoimmune disease where the body’s immune system mistakenly attacks healthy joint tissues.`,
  overview: ``,

  causes: [
    {
      title: "Genetics",
      description:
        "A family history of RA can increase the likelihood of developing the disease, suggesting a genetic predisposition.",
    },
    {
      title: "Environmental Factors",
      description:
        "Exposure to certain environmental triggers, such as tobacco smoke, pollution, or specific infections, may contribute to the onset of RA.",
    },
    {
      title: "Hormonal Factors",
      description:
        "Hormonal changes may influence the likelihood of developing rheumatoid arthritis, as the condition is more common in women than in men.",
    },
    {
      title: "Immune System Dysfunction",
      description:
        "An abnormal immune response may lead to inflammation in the joints, resulting in the symptoms associated with RA.",
    },
  ],

  complications: [
    {
      heading: "Medications",
      aneurysmSymptoms: [
        {
          description:
            "Nonsteroidal Anti-Inflammatory Drugs (NSAIDs): These can help relieve pain and reduce inflammation.",
        },
        {
          description:
            "Disease-Modifying Antirheumatic Drugs (DMARDs): Medications such as methotrexate help slow disease progression and prevent joint damage.",
        },
        {
          description:
            "Biologic Agents: Targeted therapies that specifically inhibit parts of the immune system, providing relief from symptoms and preventing further joint damage.",
        },
      ],
    },

    {
      heading: "Physical Therapy",
      aneurysmSymptoms: [
        {
          description:
            "Tailored exercise programmes can improve joint flexibility, strengthen surrounding muscles, and enhance overall function.",
        },
      ],
    },
    {
      heading: "Lifestyle Modifications",
      aneurysmSymptoms: [
        {
          description:
            "Maintaining a healthy weight, regular exercise, and a balanced diet can help manage symptoms and improve overall health.",
        },
      ],
    },
    {
      heading: "Surgery",
      aneurysmSymptoms: [
        {
          description:
            "In severe cases, surgical options such as joint replacement or synovectomy may be considered to alleviate pain and restore function.",
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
 Rheumatoid arthritis is a chronic condition that can lead to significant physical and emotional challenges. Early diagnosis and a comprehensive treatment approach are essential for managing symptoms effectively and preventing long-term joint damage. With advancements in therapies and management strategies, many individuals with rheumatoid arthritis can lead fulfilling lives while effectively controlling their symptoms. Regular check-ups and monitoring are vital for optimizing treatment and maintaining joint health.
          `,
    },
  ],
  DataSurgery: {
    headingTitle: "Recovery and Rehabilitation",
    description:
      "Post-surgery recovery from robotic knee replacement tends to be quicker and smoother compared to traditional surgery. Key aspects include:",
    DataLists: [
      {
        title: "Early Mobilization",
        description:
          "Walking with assistance within a day or two post-surgery.",
      },
      {
        title: "Physical Therapy",
        description: "Targeted exercises to restore strength and flexibility.",
      },
      {
        title: "Pain Management",
        description: " Use of medications to manage post-operative pain.",
      },
      {
        title: "Follow-Up Visits",
        description:
          "Regular check-ups to monitor recovery and implant performance.",
      },
      {
        title: "Lifestyle Adjustments",
        description:
          "Advice on resuming activities gradually and avoiding high-impact sports initially.",
      },
    ],
  },

  symptoms: [
    {
      category: "Joint Pain and Swelling",
      description:
        "Persistent pain and swelling in the joints, particularly in the hands, wrists, knees, and feet.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Morning Stiffness",
      description:
        "Stiffness in the joints that lasts for more than an hour after waking up, which is a hallmark of RA.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Fatigue",
      description:
        "A general feeling of tiredness or lack of energy that can affect daily functioning.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Fever",
      description: "Low-grade fever may occur during flare-ups.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Loss of Appetite",
      description:
        "Decreased appetite and weight loss may accompany the disease.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Nodules",
      description:
        "Painless lumps or nodules may develop under the skin, often around pressure points.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Physical Examination",
      description: `A healthcare provider will assess the affected joints for swelling, tenderness, and range of motion.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Blood Tests",
      description:
        "Blood tests, including rheumatoid factor (RF) and anti-citrullinated protein antibodies (anti-CCP), can help confirm the diagnosis.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging Tests",
      description:
        "X-rays or MRI scans may be used to evaluate joint damage and inflammation.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Joint Aspiration",
      description:
        "In some cases, fluid may be removed from the joint for analysis to rule out other conditions.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
  benefits: [
    {
      title: "Higher Accuracy",
      description:
        "Precise implant placement reduces the risk of misalignment and complications.",
    },
    {
      title: "Less Pain and Blood Loss",
      description:
        "Minimally invasive techniques cause less trauma to the surrounding tissues.",
    },
    {
      title: "Faster Recovery",
      description:
        "Patients often experience reduced hospital stays and quicker return to daily activities.",
    },
    {
      title: "Longer Implant Lifespan:",
      description:
        "Enhanced precision contributes to improved joint function and durability.",
    },
    {
      title: "Improved Quality of Life:",
      description:
        "Patients regain mobility, allowing them to resume activities they love.",
    },
  ],
  consideration: [
    {
      title: "",
      description: "Severe and persistent knee pain limiting daily activities.",
    },
    {
      title: "",
      description:
        "Ineffectiveness of non-surgical treatments such as physiotherapy or medications.",
    },
    {
      title: "",
      description: "Knee joint deformity or instability affecting mobility.",
    },
    {
      title: "",
      description: "Chronic inflammation and swelling that does not subside.",
    },
    {
      title: "",
      description:
        "Difficulty walking, climbing stairs, or standing for extended periods.",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-medium mb-4 text-center" />
        <p className="font-light" text="">
          The exact cause of rheumatoid arthritis remains unclear, but several
          factors are believed to contribute to its development:
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {data.causes.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[150px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white"
            />
          ))}
        </div>
        <CausesKnowMore title={data.title} />
        <div>
          {/* <h2 className={`text-2xl font-bold text-center text-hciSecondary py-1`}>
          Treatment
        </h2> */}
          {/* <p>Symptoms</p> */}
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="Rheumatoid arthritis symptoms can vary widely among individuals and may include:"
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid md:grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className='space-y-4'>
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing rheumatoid arthritis typically involves a combination of medical history, physical examination, and specific tests:"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                data={data.diagnosis}
                myclass="grid md:grid-cols-2"
              />
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light">
            The treatment of rheumatoid arthritis aims to manage symptoms,
            reduce inflammation, and prevent joint damage. Options may include:
          </p>
          <DataLists data={data.complications} />
        </div>

        {/* <FlexBoxSection data={data.sec_para_3} /> */}
        {/* <CTaButton data={data} /> */}
        <div className="space-y-6 mt-8">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;
