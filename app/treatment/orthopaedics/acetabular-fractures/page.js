import React from "react";
import Banner from "@/components/Common/Banner";
import Title from "@/components/cardiacComponents/Title";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";

import KnowMore from "@/components/ui/KnowMore";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";

const data = {
  title: "Acetabular Fractures",
  bannerImage: "/orthopaedics/acetabular-fractures.png",
  description: `Acetabular fractures refer to breaks in the socket of the hip joint, known as the acetabulum. This joint is part of the pelvis and interacts with the femoral head (upper thigh bone) to form the "ball-and-socket" structure that allows smooth movement. These fractures are less common than hip fractures involving the femur but can severely impair mobility and joint function. Due to the structural complexity of the hip, acetabular fractures often require surgical intervention and may lead to complications such as arthritis if not managed correctly.`,
  overview: ``,

  causes: [
    {
      title: "",
      description: "Motor vehicle accidents",
    },
    {
      title: "",
      description: "Falls from significant heights",
    },
    {
      title: "",
      description: "Direct impact to the hip area",
    },
  ],

  complications: [
    {
      heading: "Non-Surgical Treatment",
      aneurysmSymptoms: [
        {
          description:
            "Walking aids (crutches or walkers) to avoid weight-bearing on the affected leg for 8 to 12 weeks.",
        },
        {
          description:
            "Positioning devices like abduction pillows or knee immobilizers to restrict hip movement.",
        },
        {
          description:
            "Pain management through non-steroidal anti-inflammatory drugs (NSAIDs) or prescribed medications.",
        },
        {
          description:
            "Blood thinners to reduce the risk of blood clots, especially during the recovery period.",
        },
      ],
    },

    {
      heading: "Surgical Treatment",
      aneurysmSymptoms: [
        {
          description:
            "Open Reduction and Internal Fixation (ORIF): Bone fragments are repositioned and held together with plates and screws to promote healing.",
        },
        {
          description:
            "Total Hip Replacement: If the acetabulum or cartilage is too damaged to repair, the joint may be replaced with artificial components.",
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
      category: "",
      description: "Severe hip pain that may intensify with movement.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Swelling and bruising around the hip or pelvis area.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Restricted mobility, making it difficult or impossible to walk or stand.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Numbness or tingling down the leg, indicating potential nerve involvement.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Weakness in the affected leg, especially if the sciatic nerve is compromised.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Physical examination to assess hip mobility, nerve function, and surrounding soft tissues.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "X-ray imaging to identify the location of the fracture and whether bone fragments are displaced.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "CT scan (Computed Tomography) for detailed, cross-sectional imaging to evaluate the extent of the injury, including cartilage damage and other structural concerns.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "MRI scans may be used if soft tissue or ligament damage is suspected.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],

  consideration: [
    {
      title: "Post-traumatic arthritis",
      description:
        "Damage to the cartilage can cause wear and tear in the hip joint over time.",
    },
    {
      title: "Blood clots",
      description:
        "Limited mobility increases the risk of clot formation in the legs.",
    },
    {
      title: "Sciatic nerve injury",
      description:
        "Nerve damage can lead to “foot drop,” impairing the ability to lift the foot while walking.",
    },
    {
      title: "Infections",
      description:
        "Infections may occur at the surgical site or deeper within the wound, often requiring further intervention.",
    },
    {
      title: "Avascular necrosis (osteonecrosis):",
      description:
        "Interrupted blood supply can cause bone tissue to die, leading to joint collapse.",
    },
  ],
};

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <Title title={data.title} className="text-4xl text-pink-500" />
        <p
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="text-start font-light"
        />
        <p className="font-light">{data.overview}</p>
        <H2
          title="Causes of Acetabular Fractures"
          className="text-2xl font-semibold mb-4 text-center"
        />
        <p className="font-light">
          Acetabular fractures typically occur from high-energy trauma, such as:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {data.causes.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[50px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
            />
          ))}
        </div>
        <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p>
        <KnowMore title={data.title} />
        <div className="space-y-8 pt-8">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="Common symptoms of an acetabular fracture include:"
                textCss="font-light py-4 min-h-[80px]"
                titleCss="text-black font-semibold text-center text-xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-1"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                text="Proper diagnosis is essential to determine the severity and pattern of the fracture. Healthcare providers typically perform the following:"
                header=""
                titleCss="text-black font-semibold text-center text-xl"
                textCss="font-light py-4 min-h-[80px]"
                data={data.diagnosis}
                myclass="grid grid-cols-1"
              />
              {/* <KnowMore title={title} /> */}
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="text-2xl font-semibold mb-4 text-center"
          />

          <p className="font-light">
            The treatment approach depends on the severity and stability of the
            fracture.
          </p>
          <DataLists
            desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
            data={data.complications}
          />
        </div>
        <div className="space-y-8">
          <div>
            <H2
              title="When to Consider Robotic Knee Replacement?"
              className="text-center"
            />
            <p className="font-light text-center">
              Consult a doctor if you experience:
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {data.consideration.slice(0, 3).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[120px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration.slice(3, 5).map((item, index) => (
                <TextComponent
                  key={`remaining-${index}`}
                  title={item.title}
                  description={item.description}
                  boxCss="border-hciPrimary border shadow-sm rounded-lg text-hciPrimary h-[120px] w-full hover:bg-hciPrimary hover:text-white flex items-center justify-center text-center"
                />
              ))}
            </div>
          </div>
        </div>

        <Conclusion data={data.conclusion} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;
