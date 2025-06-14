import React from "react";
import Banner from "@/components/Common/Banner";
import DataLists from "@/components/cardiacComponents/BulletsTwo";
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
  title: "Osteosarcoma",
  bannerImage: "/orthopaedics/osteosarcoma.png",
  description: `Osteosarcoma, or osteogenic sarcoma, is a rare but aggressive form of cancer that begins in the bones. Initially, the cancer cells resemble normal bone cells, but over time, they form tumors that produce immature and diseased bone tissue. Osteosarcoma primarily affects adolescents, with the average age of diagnosis around 15 years.`,
  overview: `This type of cancer typically targets long bones, especially those undergoing rapid growth, such as:`,
  data1: [
    {
      title: "Femur",
      description: "The thigh bone",
    },
    {
      title: "Tibia",
      description: "(shin bone) near the knee",
    },
    {
      title: "Humerus",
      description: "(upper arm bone) near the shoulder",
    },
  ],
  data2: [
    {
      title: "High-grade:",
      description:
        "Fast-growing and likely to spread (common in children and teens).",
    },
    {
      title: "Intermediate-grade:",
      description: "Moderate growth (e.g., periosteal osteosarcoma).",
    },
    {
      title: "Low-grade:",
      description: "Slow-growing and less likely to spread.",
    },
  ],
  data3: [
    {
      title: "",
      description: "Osteoblastic, Chondroblastic, and Fibroblastic variants.",
    },
    {
      title: "",
      description: "Telangiectatic and Small cell osteosarcomas.",
    },
  ],
  data4: [
    {
      title: "",
      description: "Tumor size and whether it has metastasized.",
    },
    {
      title: "",
      description: "Response to treatment.",
    },
    {
      title: "",
      description: `Patient's age and general health.`,
    },
  ],
  causes: [
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
      title: "Bone Infarction:",
      description: "Interrupted blood supply to bones.",
    },
    {
      title: "Growth Spurts:",
      description: "Rapid skeletal growth during adolescence.",
    },
  ],

  treatment_data: [
    {
      heading: "Surgery (Limb-Salvage or Amputation):",
      aneurysmSymptoms: [
        {
          description:
            "In limb-salvage surgery, the tumor and some healthy bone are removed while preserving the limb. Amputation is necessary when the tumor is large or the limb can’t be saved, and the patient will receive a prosthetic limb.",
        },
      ],
    },
    {
      heading: "Radiation Therapy:",
      aneurysmSymptoms: [
        {
          description:
            "External or internal radiation may be used when surgery isn’t feasible or to target residual cancer cells. Bone-seeking radiopharmaceuticals like samarium or radium may also be used to deliver radiation directly to cancer sites.",
        },
      ],
    },
    {
      heading: "Cryosurgery:",
      aneurysmSymptoms: [
        {
          description:
            "In this procedure, liquid nitrogen is applied to freeze and destroy cancer cells. It’s sometimes used as an alternative to surgery.",
        },
      ],
    },
    {
      heading: "Immunotherapy (Experimental):",
      aneurysmSymptoms: [
        {
          description:
            "Some clinical trials are exploring immunotherapy to enhance the body’s immune response to cancer cells. These therapies are not yet standard but show promise in advanced cases.",
        },
      ],
    },
  ],
  treatment_data_1: [
    {
      heading: "Chemotherapy:",
      aneurysmSymptoms: [
        {
          description:
            "Chemotherapy drugs kill cancer cells and are often administered both before surgery (neoadjuvant therapy) to shrink the tumor and after surgery (adjuvant therapy) to prevent recurrence.",
        },
      ],
    },
    {
      heading: "Targeted Therapy:",
      aneurysmSymptoms: [
        {
          description:
            "These drugs block proteins that are essential for cancer cell survival. Kinase inhibitors, mTOR inhibitors, and monoclonal antibodies are common targeted therapies for osteosarcoma.",
        },
      ],
    },
    {
      heading: "Rehabilitation and Physiotherapy:",
      aneurysmSymptoms: [
        {
          description:
            "Post-surgery, patients undergo rehabilitation to regain strength, mobility, and function. Physiotherapy helps adapt to limb loss or prosthetics.",
        },
      ],
    },
    {
      heading: "Rotationplasty:",
      aneurysmSymptoms: [
        {
          description:
            "In cases where part of a limb must be removed, rotationplasty involves rotating the lower leg 180 degrees and attaching it to the thigh, with the ankle functioning as a new knee. This procedure allows for better prosthetic fitting.",
        },
      ],
    },
  ],
  treatment_data_2: [
    {
      heading: "Psychosocial Support:",
      aneurysmSymptoms: [
        {
          description:
            "Mental health care, including counseling and support groups, is provided to manage emotional challenges during and after treatment.",
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
      While osteosarcoma is a challenging diagnosis, advances in treatment have significantly improved outcomes. With proper management through a multidisciplinary healthcare team, many individuals achieve recovery and can lead fulfilling lives. Regular follow-ups are essential to monitor for recurrence or treatment-related side effects. Early detection and prompt treatment remain critical for improving survival rates.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: "Persistent bone pain or tenderness.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Swelling or lumps that may feel warm to the touch.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Limited joint movement or difficulty using the affected limb.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Limping, especially if the cancer affects the leg.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Fractures occurring after minimal trauma.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Occasionally, fever without other symptoms.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Pain is often more severe at night or during physical activity.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "Blood Tests:",
      description:
        "These check organ function (kidneys, liver) and overall blood counts. While there’s no specific blood test to detect bone tumors, abnormal markers may guide further testing.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "X-Ray:",
      description:
        "X-rays help identify abnormal growths or tumors in bones and are often the first imaging step in diagnosis. They can reveal bone destruction or irregular new bone formation.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Computed Tomography (CT) Scan:",
      description:
        "CT scans combine multiple X-ray images to produce detailed cross-sectional views of the body. These are crucial for checking whether the cancer has spread to the lungs or other organs.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Magnetic Resonance Imaging (MRI):",
      description:
        "MRIs provide a clearer image of soft tissues, helping doctors see the tumor’s boundaries and plan surgeries accurately. It’s commonly used if an X-ray shows abnormal growth.",
      bgColor: "bg-hciSecondary text-white",
    },

    {
      category: "Bone Scan:",
      description:
        "A small amount of radioactive material is injected into the bloodstream to detect bone disorders. It highlights areas of high bone activity, indicating tumors.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "PET-CT Scan:",
      description:
        "This scan detects areas of high glucose uptake, often corresponding to cancer cells. It combines PET and CT images to locate tumors with precision.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Biopsy (Core Needle or Surgical):",
      description:
        " In a biopsy, a small tissue sample is taken from the tumor and examined under a microscope to confirm the presence and type of cancer cells.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "Staging Tests:",
      description:
        "These additional scans (MRI, CT, bone scan) help determine if the cancer has spread (metastasized) to other parts of the body, aiding in treatment planning.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],

  consideration: [
    {
      title: "Regular Check-ups",
      description:
        "Routine pediatric visits help detect developmental issues early.",
    },
    {
      title: "Safe Practices in Sports",
      description:
        "Proper warm-up routines and protective gear minimize injuries.",
    },
    {
      title: "Nutritional Support",
      description: "A diet rich in calcium and vitamin D supports bone health.",
    },
    {
      title: "Emotional Support",
      description:
        "Helping children and families cope with the psychological impact of orthopedic conditions ensures holistic well-being.",
    },
    {
      title: "Rehabilitation",
      description:
        "Comprehensive physiotherapy aids recovery and promotes mobility post-treatment.",
    },
  ],
  consideration_1: [
    {
      title: "Persistent Pain",
      description:
        "Lasting discomfort or swelling, especially after an injury.",
    },
    {
      title: "Visible Deformity",
      description: "Abnormal alignment of limbs, joints, or posture.",
    },
    {
      title: "Difficulty Walking or Moving",
      description: "Inability to bear weight or move joints comfortably.",
    },
    {
      title: "Growth Concerns",
      description:
        "Delayed developmental milestones or uneven growth patterns.",
    },
    {
      title: "Recurring Injuries",
      description:
        "Frequent injuries in the same area requiring further evaluation.",
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
        {/* <H2 text="Causes" textClass="text-2xl font-medium mb-4 text-center" /> */}
        {/* <p className="font-light" text="">
          Pediatric orthopedic conditions can develop from multiple factors,
          including:
        </p> */}
        <div className="grid grid-cols-3 gap-4">
          {data.data1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[50px] w-full border rounded-lg border-hciSecondary flex items-center justify-center text-center"
            />
          ))}
        </div>
        <p className="font-light" text="">
          In rare cases, osteosarcoma can also develop in the pelvis, jaw,
          skull, or even within soft tissues.
        </p>
        <H2
          title="Types of Osteosarcoma"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light text-center" text="">
          Osteosarcoma can be classified based on how aggressively it grows:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {data.data2.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[50px] w-full border rounded-lg border-hciSecondary flex items-center justify-center text-center"
            />
          ))}
        </div>

        {/* <H2
          text="Types of Osteosarcoma"
          textClass="text-2xl font-medium mb-4 text-center"
        /> */}
        <p className="font-light text-center" text="">
          Common subtypes include:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {data.data3.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[50px] w-full border rounded-lg border-hciSecondary flex items-center justify-center text-center"
            />
          ))}
        </div>
        <H2 title="Causes" className="text-2xl font-medium mb-4 text-center" />
        <p className="font-light" text="">
          The exact cause of osteosarcoma is unknown, but certain factors
          increase the risk:
        </p>

        <div className="grid grid-cols-4 gap-4">
          {data.causes.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white"
            />
          ))}
        </div>
        {/* <p className="font-light" text="">
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        <CausesKnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div className="space-y-4">
              <DataBoxes
                title="Symptoms"
                text="The symptoms of osteosarcoma can vary but often include:"
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-xl"
                header=""
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className="space-y-4">
              <DataBoxes
                title="Diagnosis"
                text="Accurate diagnosis is essential to determine the extent and progression of osteosarcoma. Healthcare providers use several diagnostic tests, as detailed below:"
                header=""
                textCss="font-light py-4"
                titleCss="text-black font-medium text-center text-xl"
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
            The treatment strategy for osteosarcoma typically combines surgery,
            chemotherapy, and sometimes radiation. The goal is to remove the
            tumor, prevent spread, and preserve function.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <DataLists
              //   desc="In limb-salvage surgery, the tumor and some healthy bone are removed while preserving the limb. Amputation is necessary when the tumor is large or the limb can’t be saved, and the patient will receive a prosthetic limb."
              data={data.treatment_data}
              ulClass="list-none list-outside"
            />
            <DataLists
              //   desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
              data={data.treatment_data_1}
              ulClass="list-none list-outside"
            />
          </div>
          <div className="my-6">
            <DataLists
              //   desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
              data={data.treatment_data_2}
              ulClass="list-none list-outside"
            />
          </div>
          <p className="font-light">
            These diagnostic and treatment strategies are tailored according to
            the patient&apos;s health, the tumor&apos;s location, and whether
            the cancer has spread, ensuring the most effective care.
          </p>
          {/* <DataLists
            desc="If the fracture is unstable or involves displaced bone fragments, surgery is typically required:"
            data={data.complications}
          /> */}
        </div>
        <H2
          title="Prognosis"
          className="text-2xl font-medium mb-4 text-center"
        />
        <p className="font-light text-start" text="">
          The outlook for osteosarcoma depends on several factors:
        </p>
        <div className="grid grid-cols-3 gap-4">
          {data.data4.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[50px] w-full rounded-lg border border-hciSecondary flex items-center justify-center text-center"
            />
          ))}
        </div>
        <p className="font-light text-center" text="">
          If the cancer has not spread, survival rates are approximately 70%.
          However, if the disease has metastasized to other organs (like the
          lungs), survival rates drop to around 30-50%.
        </p>

        {/* <div className="space-y-4">
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

        {/* <div className="space-y-4">
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
                  boxCss="border-hciPrimary text-hciPrimary h-[150px] w-full hover:bg-hciPrimary hover:text-white"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.consideration_1.slice(3, 5).map((item, index) => (
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
