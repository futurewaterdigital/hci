import React from "react";
import Banner from "@/components/Common/Banner";
import DataLists from "@/components/cardiacComponents/BulletsTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
// import FooterLinks from "@/components/cardiacComponents/FooterLink";
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import H2 from "@/components/ui/h2";
import KnowMore from "@/components/ui/KnowMore";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";
import H1 from "@/components/ui/h1";
import IssuesLinks from "@/components/ui/IssuesLinks";

const data = {
  title: "Spinal Disorders",
  bannerImage: "/orthopaedics/spinal.jpeg",
  description: `Spinal disorders encompass a range of conditions that affect the spine, including the vertebrae, intervertebral discs, and surrounding tissues. These disorders can lead to significant pain, discomfort, and functional limitations, impacting individuals quality of life. Spinal disorders are a major health concern, with both conservative and surgical treatment options available to help manage symptoms and improve function.`,
  overview: ``,

  causes: [
    {
      title: "Degenerative Changes",
      description:
        "Age-related wear and tear on the spine can lead to conditions such as degenerative disc disease and spinal stenosis.",
    },
    {
      title: "Injuries",
      description:
        "Traumatic injuries from accidents, falls, or sports can result in fractures, dislocations, or herniated discs.",
    },
    {
      title: "Posture and Ergonomics",
      description:
        "Poor posture and improper ergonomics during daily activities can contribute to chronic back pain and spinal disorders.",
    },
    {
      title: "Genetic Predisposition",
      description:
        "Certain hereditary conditions, such as scoliosis, can affect spinal alignment and function.",
    },
    {
      title: "Infections and Tumours",
      description:
        "In rare cases, infections or tumours can develop in the spinal region, causing pain and neurological symptoms.",
    },
  ],

  complications: [
    {
      heading: "Conservative Management:",
      aneurysmSymptoms: [
        {
          description:
            "Physical Therapy: Tailored exercises and stretches to strengthen the muscles supporting the spine, improve flexibility, and alleviate pain.",
        },
        {
          description:
            "Medications: Pain relievers, anti-inflammatory drugs, and muscle relaxants to manage symptoms.",
        },
        {
          description:
            "Lifestyle Modifications: Encouragement of weight management, regular exercise, and ergonomic adjustments to reduce strain on the spine.",
        },
      ],
    },
    {
      heading: "Surgical Interventions:",
      aneurysmSymptoms: [
        {
          description:
            "Discectomy: Removal of a herniated disc to relieve pressure on nerves.",
        },
        {
          description:
            "Laminectomy: Surgical removal of a portion of the vertebra to alleviate spinal canal narrowing.",
        },
        {
          description:
            "Spinal Fusion: A procedure that permanently connects two or more vertebrae, providing stability and reducing pain.",
        },
      ],
    },
    {
      heading: "Alternative Therapies:",
      aneurysmSymptoms: [
        {
          description:
            "Techniques such as acupuncture or massage therapy may provide additional relief.",
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
      Spinal disorders can significantly impact an individual's daily life and overall health. Early diagnosis and a comprehensive treatment plan are crucial for effective management and improving quality of life. With advancements in medical technology and rehabilitation strategies, many individuals with spinal disorders can achieve symptom relief and regain function, allowing them to return to their normal activities. Regular follow-up care and adherence to treatment recommendations are vital for optimizing recovery and preventing future complications.
          `,
    },
  ],

  symptoms: [
    {
      category: "Back Pain",
      description:
        "Persistent or acute pain in the lower, middle, or upper back, often exacerbated by movement or specific positions.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Radiating Pain",
      description:
        "Pain that radiates down the legs or arms, commonly associated with conditions such as sciatica or cervical radiculopathy.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Numbness and Tingling",
      description:
        "Altered sensations in the limbs due to nerve compression or irritation.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Muscle Weakness",
      description:
        "Weakness in the arms or legs, which may indicate nerve involvement.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Limited Mobility",
      description:
        "Stiffness or reduced range of motion in the spine, affecting daily activities.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Medical History and Physical Examination",
      description:
        "A thorough assessment of symptoms,medical history, and a physical examination to evaluate spinal alignment and function.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Imaging Tests",
      description:
        "X-rays and MRI scans to determine the extent of cartilage loss and joint damage.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "X-rays",
      description:
        "Useful for visualizing structural abnormalities and alignment issues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "MRI",
      description:
        "Provides detailed images of soft tissues, including discs, nerves, and spinal cord, helping to identify herniations or other issues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "CT Scans",
      description:
        "Can be used to obtain cross-sectional images of the spine, especially in complex cases.",
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
        <p
          dangerouslySetInnerHTML={{__html: data.description}}
          className="text-start font-light"
        />
        <p className="font-light">{data.overview}</p>
        <H2
          title="Causes of Spinal Disorders"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light" text="">
          Spinal disorders can arise from various factors, including:
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
        <CausesKnowMore title={data.title} />
        <div className="space-y-8 pt-8">
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms associated with spinal disorders can vary widely but may include:"
                titleCss="text-black font-medium text-center text-2xl"
                textCss="font-light py-4 min-h-[80px]"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className="space-y-4">
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing spinal disorders typically involves a comprehensive evaluation, including:"
                header=""
                titleCss="text-black font-medium text-center text-2xl"
                textCss="font-light py-4 min-h-[80px]"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
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
            Treatment for spinal disorders depends on the specific condition,
            severity, and the patient&apos;s overall health. Options may
            include:
          </p>
          <DataLists data={data.complications} />
        </div>
        <div className="space-y-8">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;
