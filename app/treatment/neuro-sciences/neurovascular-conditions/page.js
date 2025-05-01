import React from "react";
import Banner from "@/components/Common/Banner";
import H1 from "@/components/ui/h1";
import DataLists from "@/components/cardiacComponents/Bullets";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinks from "@/components/cardiacComponents/FooterLink";
import H2 from "@/components/ui/h2";
import KnowMore from "@/components/ui/KnowMore";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import TextComponent from "@/components/Common/TextComponent";
import IssuesLinks from "@/components/ui/IssuesLinks";

const data = {
  title: "Neurovascular Conditions",
  bannerImage: "/neuro-sciences/neurovascular-conditions.png",
  description: `Neurovascular conditions encompass a range of disorders that affect the blood vessels in the brain, leading to serious health implications. These conditions include strokes, aneurysms, and arteriovenous malformations (AVMs). In India, the prevalence of neurovascular disorders is increasing, making awareness and timely intervention crucial for effective management and recovery.`,
  overview: ``,

  section_1: [
    {
      title: "Hypertension",
      description:
        "High blood pressure is a major risk factor for both strokes and aneurysms, contributing to the weakening of blood vessel walls.",
    },
    {
      title: "Cardiac Conditions",
      description:
        "Heart problems, such as atrial fibrillation, can lead to the formation of blood clots that may travel to the brain, resulting in a stroke.",
    },
    {
      title: "Genetic Factors",
      description:
        "Some neurovascular conditions, such as AVMs and certain types of aneurysms, can have a hereditary component.",
    },

    {
      title: "Lifestyle Factors",
      description:
        "Poor diet, sedentary lifestyle, smoking, and excessive alcohol consumption can contribute to the development of neurovascular diseases.",
    },
  ],

  complications: [
    {
      heading: "Medications",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Antiplatelet agents and anticoagulants may be prescribed to prevent blood clots. In some cases, medications to lower blood pressure and cholesterol are also necessary.",
        },
      ],
    },

    {
      heading: "Surgery:",
      description: "Surgical options may include:",
      aneurysmSymptoms: [
        {
          description:
            "Clipping: For aneurysms, a surgical procedure to place a clip on the neck of the aneurysm to prevent rupture.",
        },
        {
          description:
            "Endovascular Coiling: A minimally invasive procedure where coils are inserted into an aneurysm to promote clotting and prevent blood flow.",
        },
        {
          description:
            "AVM Resection: Surgical removal of arteriovenous malformations to prevent bleeding and restore normal blood flow.",
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
      In India, advances in neurovascular care have led to improved outcomes for patients with these conditions. A multidisciplinary approach involving neurologists, neurosurgeons, and rehabilitation specialists is vital for comprehensive management. Timely diagnosis and intervention can significantly enhance recovery prospects, allowing patients to lead healthier, more active lives. Awareness of risk factors and early symptoms is crucial for effective prevention and management of neurovascular disorders.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        "Sudden Weakness or Numbness: Often affecting one side of the body, particularly the face, arm, or leg.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Speech Difficulties: Trouble speaking or understanding speech, which may manifest as slurred speech.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Vision Changes: Sudden vision loss or blurriness in one or both eyes.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        'Severe Headaches: A sudden and severe headache, often described as a "thunderclap" headache, may indicate an aneurysm or stroke.',
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Loss of Coordination: Difficulty with balance and coordination, which may lead to falls.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description: "Confusion: Sudden confusion or difficulty concentrating.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Neurological Examination: A thorough assessment of neurological function and symptoms.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `CT and MRI Scans: Imaging techniques to visualize the brain and blood vessels, helping to identify strokes, aneurysms, or other abnormalities.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Angiography: A specialized imaging test that uses a contrast dye to visualize blood vessels in the brain, particularly useful for diagnosing aneurysms and AVMs.",
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
        <H2 title={data.description} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light" text="">
          The causes of neurovascular conditions can vary widely depending on
          the specific disorder, but common contributing factors include:
        </p>
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
              boxCss="min-h-[100px] w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* <p>
          In older adults, fractures can also occur from low-energy trauma, such
          as a simple fall, especially if the patient has underlying conditions
          like osteoporosis that weaken bones.
        </p> */}
        <KnowMore title={data.title} />
        <div>
          <div className="grid lg:grid-cols-1 gap-4">
            <div>
              <DataBoxes
                title="Symptoms"
                text="Symptoms of Parkinson's Disease and other movement disorders vary but generally include:"
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                header=""
                textCss="font-light py-4"
                data={data.symptoms}
                myclass="grid grid-cols-2"
              />
              <KnowMore title={data.title} />
            </div>
            <div className="space-y-6">
              <DataBoxes
                title="Diagnosis"
                text="Diagnosing Parkinson’s Disease and movement disorders involves a detailed examination of the patient’s symptoms, medical history, and neurological testing. Common diagnostic methods include:         "
                header=""
                titleCss="text-black font-medium text-center text-2xl pb-4 mt-4"
                textCss="font-light py-4"
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
            className="font-medium mb-4 text-center text-2xl"
          />

          <p className="font-light">
            Treatment options for neurovascular conditions vary based on the
            specific disorder and its severity. Common treatment approaches
            include:
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
