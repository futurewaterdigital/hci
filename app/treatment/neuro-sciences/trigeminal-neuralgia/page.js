import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import DataLists from "@/components/cardiacComponents/BulletsTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import KnowMore from "@/components/ui/KnowMore";
import IssuesLinks from '@/components/ui/IssuesLinks'
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";
// import IssuesLinks from '@/components/ui/IssuesLinks'
const data = {
  title: "Trigeminal Neuralgia",
  bannerImage: "/neuro-sciences/trigeminal-neuralgia.png",
  description: `Trigeminal neuralgia, often referred to as "tic douloureux," is a neurological disorder characterised by sudden, severe, and recurrent facial pain. It primarily affects the trigeminal nerve, which is responsible for sensation in the face and motor functions such as biting and chewing. This condition can have a significant impact on an individual's quality of life, leading to debilitating episodes of pain that can be triggered by everyday activities like talking, eating, or even touching the face. Trigeminal neuralgia is a recognized health issue, particularly among older adults.`,
  overview: ``,

  section_1: [
    {
      title: "Tumours",
      description: `Tumours near the trigeminal nerve can also result in neuralgia.`,
    },
    {
      title: "Multiple Sclerosis (MS)",
      description: `In some cases, the demyelination of the trigeminal nerve associated with MS can lead to this condition.`,
    },
    {
      title: "Trauma",
      description:
        "Previous facial or head injuries may cause changes that lead to trigeminal neuralgia.",
    },
    {
      title: "Nerve Compression",
      description:
        "The most common cause of trigeminal neuralgia is the compression of the trigeminal nerve, often due to blood vessels pressing against it.",
    },
    {
      title: "Idiopathic Factors",
      description: "In many instances, the exact cause remains unknown.",
    },
  ],

  complications: [
    {
      heading: "Medications:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Anticonvulsants, such as carbamazepine and oxcarbazepine, are commonly prescribed to manage pain. Other medications, such as muscle relaxants and antidepressants, may also be effective.",
        },
      ],
    },

    {
      heading: "Surgery:",
      description:
        "In cases where medications do not provide relief, surgical options may be considered, including:",
      aneurysmSymptoms: [
        {
          description: `Microvascular Decompression: A procedure that relieves pressure on the trigeminal nerve by repositioning blood vessels.`,
        },
        {
          description: `Rhizotomy: A procedure that selectively damages the trigeminal nerve to reduce pain sensation.`,
        },
      ],
    },
    {
      heading: "Radiofrequency Ablation:",
      description: "",
      aneurysmSymptoms: [
        {
          description: `A minimally invasive technique that uses heat to destroy nerve fibers causing pain.
            `,
        },
      ],
    },
    {
      heading: "Alternative Therapies:",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Some patients find relief through complementary therapies such as acupuncture, physical therapy, or biofeedback.`,
        },
      ],
    },
    {
      heading: "Gamma Knife, Cyberknife Radiosurgery:",
      description: "",
      aneurysmSymptoms: [
        {
          description: `A type of precise radiation therapy that delivers high-dose radiation to small, specific areas of the brain, causing minimal damage to surrounding healthy tissue.`,
        },
      ],
    },
    {
      heading: "Proton Therapy:",
      description: "",
      aneurysmSymptoms: [
        {
          description: `Uses protons as conventional radiation therapy to minimize damage to surrounding healthy tissue.`,
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
    Access to advanced diagnostic tools and a wide range of treatment options has greatly improved the management of trigeminal neuralgia. Early intervention and a personalized treatment approach are essential for relieving pain and improving the quality of life for those affected by this challenging condition.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description: `Severe Facial Pain: Characterised by intense, stabbing pain on one side of the face, often described as electric shock-like.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Triggers: Pain may be triggered by everyday actions, such as brushing teeth, eating, or even exposure to wind.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Attacks: Episodes can last from a few seconds to several minutes and can occur in quick succession.`,
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: `Location of Pain: Pain is typically located in the areas supplied by the trigeminal nerve, including the cheeks, jaw, teeth, and forehead.`,
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description: `Clinical Evaluation: A thorough examination of the patient's medical history and symptoms is essential for diagnosis.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Neurological Examination: Tests to assess facial sensations and motor functions of the trigeminal nerve.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Imaging Studies: MRI or CT scans may be conducted to rule out underlying conditions such as tumours or structural abnormalities.`,
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
        <p className="text-start font-light">{data.description}</p>
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        {/* <p className="font-light" text="">
          The primary causes of TBIs can be diverse and include:
        </p> */}
        {/* <H2 text="Types" textClass="text-2xl font-semibold mb-4 text-center" />
        <p className="font-light" text="">
          Peripheral nerve tumours can grow within the nerves (intra-neural
          tumours) or press on them from outside (extra-neural tumours). The
          following are common types of benign peripheral nerve tumours:
        </p> */}
        {/* <DataSurgery data={data.section_1} /> */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.section_1.slice(0, 4).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {data.section_1.slice(4, 5).map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>
        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        <CausesKnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                // text="Symptoms of TBI can vary widely depending on the severity of the injury and can manifest immediately or may develop over time. Common symptoms include:"
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                header=""
                data={data.symptoms}
                myclass="grid md:grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div>
              <DataBoxes
                title="Diagnosis"
                // text="Diagnosing TBI typically involves a comprehensive assessment that includes:"
                header=""
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                data={data.diagnosis}
                myclass="grid md:grid-cols-2 "
              />
              {/* <KnowMore title={title} /> */}
              <IssuesLinks head={data.title} />
            </div>
          </div>
        </div>
        <div>
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />

          {/* <p className="font-light">
            The treatment of TBI depends on the severity and specific symptoms
            presented, encompassing a range of approaches:
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
            <div className="grid md:grid-cols-2 gap-4">
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
