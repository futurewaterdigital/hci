import React from "react";
import Banner from "@/components/Common/Banner";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import H2 from "@/components/ui/h2";
import KnowMore from "@/components/ui/KnowMore";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";
import H1 from "@/components/ui/h1";
import IssuesLinks from "@/components/ui/IssuesLinks";

const data = {
  title: "Foot and Ankle Surgery",
  bannerImage: "/orthopaedics/foot-and-ankle-surgery.png",
  description: `Foot and ankle surgery is a specialized field aimed at treating various conditions and injuries affecting the lower extremities, such as fractures, tendon tears, arthritis, and deformities like bunions. Surgery is typically recommended when non-surgical treatments have failed to relieve symptoms, though acute conditions like fractures may require immediate intervention.`,
  overview: `Surgical procedures may involve realigning bones, repairing ligaments, fusing joints, or replacing the ankle joint entirely in cases of severe arthritis. The primary goal is to restore mobility, reduce pain, and prevent further complications, helping patients regain their ability to walk comfortably and perform daily activities without restriction.`,

  causes: [
    {
      title: "Traumatic Injuries:",
      description:
        "Fractures, dislocations, and ligament tears caused by accidents or sports activities.",
    },
    {
      title: "Degenerative Conditions:",
      description:
        "Osteoarthritis and rheumatoid arthritis leading to joint damage and chronic pain.",
    },
    {
      title: "Structural Deformities:",
      description:
        "Bunions, flat feet, and hammertoes that alter the natural alignment of the foot.",
    },
    {
      title: "Tendon or Ligament Injuries:",
      description:
        "Ruptures of the Achilles or posterior tibialis tendons due to overuse or sudden trauma.",
    },
    {
      title: "Nerve Compression Disorders:",
      description:
        "Conditions like tarsal tunnel syndrome causing pain and numbness.",
    },
    {
      title: "Inflammatory Conditions:",
      description:
        "Chronic inflammation such as tendonitis or plantar fasciitis.",
    },
    {
      title: "Congenital Issues:",
      description: "Birth defects or abnormalities in foot structure.",
    },
  ],

  complications: [
    {
      heading: "Ankle Replacement Surgery:",
      aneurysmSymptoms: [
        {
          description:
            "Recommended for severe arthritis to replace the damaged joint with a prosthetic implant.",
        },
        {
          description:
            "Helps restore mobility and reduce chronic pain in the ankle joint.",
        },
      ],
    },

    {
      heading: "Ankle Fusion (Arthrodesis):",
      aneurysmSymptoms: [
        {
          description:
            "Fuses the bones of the ankle joint to eliminate pain caused by arthritis.",
        },
        {
          description:
            "Recommended when joint replacement is not suitable due to bone health or age.",
        },
      ],
    },
    {
      heading: "Posterior Tibialis Tendon Surgery:",
      aneurysmSymptoms: [
        {
          description:
            "Corrects tendon damage that causes flatfoot deformity or instability.",
        },
        {
          description:
            "Involves tendon transfer or repair, depending on the severity of the injury.",
        },
      ],
    },
    {
      heading: "Lateral Ankle Ligament Reconstruction:",
      aneurysmSymptoms: [
        {
          description:
            "Restores stability to the ankle by reconstructing torn ligaments.",
        },
        {
          description:
            "Typically performed on individuals with chronic ankle instability or repeated sprains.",
        },
      ],
    },
  ],

  complications_1: [
    {
      heading: "Achilles Tendon Repair Surgery:",
      aneurysmSymptoms: [
        {
          description:
            "Repairs ruptured or torn Achilles tendons caused by trauma or overuse.",
        },
        {
          description:
            "Helps restore full strength and function to the lower leg.",
        },
      ],
    },
    {
      heading: "Bunion Surgery:",
      aneurysmSymptoms: [
        {
          description:
            "Realigns the bones and tissues around the big toe to correct bunion deformity.",
        },
        {
          description:
            "Reduces pain and restores normal foot shape for improved mobility.",
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
      <p>Foot and ankle surgery offers a pathway to pain relief, improved mobility, and enhanced quality of life for patients suffering from chronic conditions or traumatic injuries. By leveraging advanced surgical techniques, our specialized team aims to provide personalized care for each patient.</p>
      <p>If you are experiencing persistent pain, deformities, or mobility challenges, consulting with a foot and ankle specialist can help determine the most effective treatment plan. Early intervention is essential to prevent further complications and ensure a successful recovery.</p>
      <p>Take the first step towards pain-free movement - schedule a consultation with our expert foot and ankle surgeons today.</p>
      `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        "Persistent Pain: Localized pain in the ankle, foot, or toes that interferes with movement.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Swelling or Inflammation: Chronic swelling that does not subside with rest or medication.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Deformity: Visible misalignment or enlargement, such as bunions or collapsed arches.",
      bgColor: "bg-hciPrimary text-white",
    },

    {
      category: "",
      description:
        "Instability: A sensation of weakness or instability, particularly in the ankle, affecting balance.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Restricted Range of Motion: Difficulty in moving the foot or ankle due to stiffness or joint fusion.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Numbness or Tingling: Indicative of nerve compression or damage.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Difficulty Walking or Bearing Weight: Reduced mobility or pain while walking or standing.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Physical Examination: Assessing joint movement, pain, and deformities.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Imaging Tests: X-rays, MRI, or CT scans to identify fractures, joint issues, or soft tissue damage.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Ultrasound: To detect tendon injuries or inflammation in soft tissues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Blood Tests: Used to identify arthritis or inflammatory conditions.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Gait Analysis: Evaluates walking patterns to identify biomechanical issues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Nerve Conduction Studies: To assess nerve function in cases involving numbness or tingling.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],

  consideration: [
    {
      title: "Physical Therapy:",
      description: "Restores strength, flexibility, and range of motion.",
    },
    {
      title: "Pain Management:",
      description:
        "Use of medications to control pain during the recovery period.",
    },
    {
      title: "Immobilization:",
      description:
        "Casting, splinting, or bracing to protect the surgical site and promote healing.",
    },
    {
      title: "Gradual Weight-Bearing:",
      description:
        "Patients may use crutches or a walker initially, with a gradual return to full weight-bearing activities.",
    },
    {
      title: "Follow-Up Care:",
      description:
        "Regular check-ups to monitor healing and address any complications.",
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
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-start font-light"
        />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="text-2xl font-medium mb-4 text-center" />
        <p className="font-light">
          Foot and ankle conditions requiring surgical intervention can arise
          from a variety of causes, including:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {data.causes.slice(0, 2).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {data.causes.slice(2, 5).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.causes.slice(5, 7).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>

        <CausesKnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms of foot and ankle conditions that may necessitate surgery include:"
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className="space-y-4">
              <DataBoxes
                title="Diagnosis"
                text="Accurate diagnosis is essential to determine the appropriate treatment plan. Diagnostic steps include:"
                boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-2xl"
                data={data.diagnosis}
                myclass="grid grid-cols-2"
              />
              <IssuesLinks title={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-medium mb-4 text-center"
          />

          <p className="font-light">
            Treatment for foot and ankle conditions can vary based on the
            severity of the problem. Surgery is considered when conservative
            measures like medication, physical therapy, or orthotics have not
            provided relief. Common surgical procedures include:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <DataLists
              // des  c="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
              data={data.complications}
            />
            <div>
              <img src="/orthopaedics/ankle-surgery.png" alt="" />
              <DataLists
                // des  c="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
                data={data.complications_1}
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <H2
            title="Recovery and Rehabilitation"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light text-center">
            Recovery after foot and ankle surgery depends on the type of
            procedure performed and the patient’s overall health. Key aspects of
            rehabilitation include:
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 pt-4">
          <Conclusion data={data.conclusion} />
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;
