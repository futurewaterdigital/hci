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
  title: "Hand and Upper Limb Surgery",
  bannerImage: "/orthopaedics/hand-and-upper-limb-surgery.png",
  description: `Hand and upper limb surgery is a specialized field focused on treating injuries and conditions that affect the hand, wrist, forearm, and elbow. These areas are critical for performing daily tasks, and any impairment can significantly impact a person’s quality of life. Injuries may result from road traffic accidents, workplace incidents, or sports activities, and the prompt restoration of function is essential for a successful recovery.`,
  overview: `Our Department of Hand & Upper Limb Surgery addresses acute injuries, chronic conditions, congenital anomalies, nerve and tendon disorders, as well as post-injury complications such as contractures and deformities. With expertize in microsurgical techniques and reconstructive procedures, our department provides a wide range of treatment options to restore mobility, function, and quality of life.`,

  causes: [
    {
      title: "Road Traffic and Workplace Accidents:",
      description: "Fractures, lacerations, or crush injuries.",
    },
    {
      title: "Sports Injuries:",
      description: "Sprains, dislocations, and tendon ruptures.",
    },
    {
      title: "Congenital Anomalies:",
      description: "Birth defects like syndactyly, polydactyly, and club hand.",
    },
    {
      title: "Repetitive Stress Injuries:",
      description:
        "Carpal tunnel syndrome, trigger finger, and de Quervain’s disease.",
    },
    {
      title: "Neurological Conditions:",
      description: `Brachial plexus injuries, Erb's palsy, and cerebral palsy.`,
    },
    {
      title: "Arthritis and Degenerative Conditions:",
      description: `Rheumatoid hand deformities and joint replacements.`,
    },
    {
      title: "Infectious Conditions:",
      description: `Abscesses, tendon sheath infections, and osteomyelitis.`,
    },
  ],

  complications: [
    {
      heading: "Non-Surgical Treatment",
      aneurysmSymptoms: [
        {
          description:
            "Splinting and Bracing: To immobilize the affected area and promote healing.",
        },
        {
          description:
            "Physical Therapy: Restores strength and range of motion.",
        },
        {
          description:
            "Medication: Pain relievers, anti-inflammatory drugs, or antibiotics for infections.",
        },
        {
          description:
            "Injections: Corticosteroids to reduce inflammation (e.g., for trigger finger or carpal tunnel syndrome).",
        },
      ],
    },

    {
      heading: "Surgical Treatment",
      aneurysmSymptoms: [
        {
          description:
            "Fracture Fixation: Using plates, screws, or pins to stabilize bones and ensure proper healing.",
        },
        {
          description:
            "Nerve and Tendon Repairs: Restoring damaged structures through microsurgery.",
        },
        {
          description:
            "Carpal Tunnel Release: Relieving pressure on the median nerve.",
        },
        {
          description:
            "Tendon Transfers: Used for conditions like claw hand and brachial plexus injuries.",
        },
        {
          description:
            "Hand and Upper Limb Surgery: Replacing damaged joints in cases of severe arthritis.",
        },
        {
          description:
            "Congenital Anomaly Corrections: Surgery for conditions such as syndactyly, polydactyly, or club hand.",
        },
        {
          description:
            "Reconstructive Surgery: Restoring function and appearance after trauma.",
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
      <p>If you are experiencing pain, deformities, or limited movement in your hand, wrist, or elbow, seek professional medical attention to avoid further complications. Early diagnosis and timely treatment are critical for optimal outcomes.</p>
      <p>Your journey to recovery begins with expert care. Contact us today to book an appointment with our specialized hand surgeons and take the first step towards a pain-free and functional life.</p>
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        "Pain or Stiffness: Persistent pain in the hand, wrist, or elbow that limits mobility.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Numbness or Tingling: A common sign of nerve compression (e.g., carpal tunnel syndrome).",
      bgColor: "bg-hciPrimary text-white",
    },

    {
      category: "",
      description:
        "Deformity or Swelling: Visible abnormalities in the hand or fingers.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Limited Range of Motion: Difficulty performing simple tasks like gripping or writing.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Weakness or Paralysis: Loss of strength, especially after trauma or nerve injury.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Contractures: Fingers or joints locked in a bent position due to tendon or muscle issues.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Delayed Healing or Non-Union of Fractures: Indicating the need for surgical correction.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Physical Examination: To assess joint mobility, strength, and deformities.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Imaging Studies: X-rays, MRI, CT scans, or ultrasound to identify fractures, tendon tears, or nerve damage.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Electromyography (EMG) and Nerve Conduction Studies: To assess nerve function and identify conditions like carpal tunnel syndrome.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Blood Tests: For inflammatory or infectious conditions affecting joints or tissues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Clinical History: Understanding the patient’s medical history, previous injuries, and daily activities helps guide the diagnosis.",
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
      title: "Physiotherapy and Rehabilitation Exercises:",
      description: "To enhance mobility and rebuild strength.",
    },
    {
      title: "Pain Management:",
      description:
        "Medications or nerve blocks to manage post-operative discomfort.",
    },
    {
      title: "Splinting or Casting:",
      description: "To protect the surgical site and promote proper healing.",
    },
    {
      title: "Follow-Up Care:",
      description:
        "Regular consultations to monitor healing and address complications.",
    },
    {
      title: "Lifestyle Modifications:",
      description:
        "Adjusting daily activities to prevent re-injury or stress on the affected area.",
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
          Several conditions and injuries may require hand and upper limb
          surgery. These include:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {data.causes.slice(0, 2).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[90px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {data.causes.slice(2, 5).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[90px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {data.causes.slice(5, 7).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[90px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>

        <CausesKnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Symptoms that may indicate a need for hand or upper limb surgery include:"
                titleCss="text-black font-medium text-center text-xl"
                textCss="font-light py-4"
                header=""
                data={data.symptoms}
                myclass="grid md:grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="The diagnosis of hand and upper limb conditions involves a thorough evaluation, including:"
                header=""
                titleCss="text-black font-medium text-center text-xl"
                textCss="font-light py-4"
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
            Treatment plans are tailored to each patient’s needs, focusing on
            restoring function, reducing pain, and preventing further
            complications. Common procedures include:
          </p>
          <DataLists
            bgColor="min-h-[150px]"
            // desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
            data={data.complications}
          />
        </div>
        <div className="space-y-4">
          <H2
            title="Recovery and Rehabilitation"
            className="text-2xl font-medium mb-4 text-center"
          />
          <p className="font-light text-center">
            Post-surgery recovery focuses on restoring function, strength, and
            mobility. Key aspects include:
          </p>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center  "
                />
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[100px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center  "
                />
              ))}
            </div>
          </div>
        </div>
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
