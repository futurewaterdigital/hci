"use client";
import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/DeepVeinThrombosis.png";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataSurgery from "@/components/cardiacComponents/Button";
import TreatmentBox from "@/components/cardiacComponents/TreatmentBox";
import FooterLinks from "@/components/cardiacComponents/FooterLinkGastroenterology";
import BookButton from "@/components/cardiacComponents/BookButton";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import { useRouter } from "next/navigation";

const title = "Deep Vein Thrombosis (DVT)";

const conditionsData = [
  {
    category: "",
    description: `<strong>Genetic Predisposition</strong> (family history of clots)`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Obesity or older age</strong> (over 60 years)`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description:
      "<strong>Prolonged Immobility</strong> (long travel, surgery recovery, bed rest)",
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Use of Hormonal Therapies</strong> such as birth control pills`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Trauma</strong> or injury to veins`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Smoking</strong> or tobacco use`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Pregnancy</strong> and <strong>postpartum period</strong>`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description:
      "Autoimmune Conditions like <strong>lupus</strong> or <strong>inflammatory bowel disease</strong>",
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>Cancer</strong> or <strong>chemotherapy treatments</strong>`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
  {
    category: "",
    description: `<strong>COVID-19</strong> infection`,
    bgColor: "bg-hciLightBlue text-hciPrimary",
  },
];
const symptomsDVT = [
  {
    category: "",
    description: `Swelling in the affected leg or arm`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `Pain or tenderness when standing or walking`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `Warmth in the affected area`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `Redness or discoloration of the skin`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `Enlarged surface veins`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `If the clot affects other areas, such as the abdomen or brain, it can cause abdominal pain, severe headaches, or seizures.`,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
  {
    category: "",
    description: `<p ><strong class="font-light">When a clot moves to the lungs, signs of pulmonary embolism (PE) can develop, including:</strong></p>
    <ul class="list-disc list-inside ml-2">
    <li>Chest pain and shortness of breath</li>
    <li>Lightheadedness or fainting</li>
    <li>Coughing up blood</li>
    </ul>
    `,
    bgColor: "bg-hciSecondary text-white",
    minHeight: "min-h-[100px] text-center",
  },
];
const diagnosisDVT = [
  {
    category: "",
    description: `<strong>Duplex ultrasound:</strong> Non-invasive test to detect blood clots in veins using sound waves.`,
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: `<strong>Venography:</strong> An invasive test using dye injection to visualize vein blockages.`,
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: `<strong>MRI/MRV:</strong> Offers detailed images of veins and organs for further diagnosis.`,
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: `<strong>CT Scan:</strong> Often used to identify clots in deep veins or to detect pulmonary embolism.`,
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: `If a clotting disorder is suspected, blood tests may also be conducted.`,
    bgColor: "bg-hciYellow",
  },
];
const surgeryData = [
  {
    title: "",
    description: `<strong>Stay active:</strong><span class="text-black"> Avoid sitting or lying down for long periods.</span>`,
    minHeight: "min-h-[100px] text-center",
  },
  {
    title: "",
    description: `<strong>Use compression stockings</strong><span class="text-black"> after surgery if recommended.</span>`,
    minHeight: "min-h-[100px] text-center",
  },
  {
    title: "",
    description: `<strong>Quit smoking</strong><span class="text-black"> and manage conditions like obesity and hypertension.</span>`,
    minHeight: "min-h-[100px] text-center",
  },
  {
    title: "",
    description: `<strong>Hydrate</strong><span class="text-black"> during long flights or car rides.</span>`,
    minHeight: "min-h-[100px] text-center",
  },
  {
    title: "",
    description: `<strong>Take medications as prescribed</strong><span class="text-black"> to prevent clotting.</span>`,
    minHeight: "min-h-[100px] text-center",
  },
];
const treatmentData = [
  {
    heading: "Anticoagulants (blood thinners):",
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "These medications prevent further clotting and help the body break down existing clots over time. Common examples include warfarin, heparin, and oral Xa inhibitors.",
      },

      {
        title: "",
        description:
          "Duration of anticoagulation depends on individual risk factors, typically ranging from 3-6 months or indefinitely in some cases.",
      },
    ],
  },
  {
    heading: "Compression Stockings:",
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "Worn to reduce swelling and improve blood circulation. These help prevent the recurrence of DVT and alleviate symptoms like pain and leg heaviness.",
      },
    ],
  },
  {
    heading: "Inferior Vena Cava (IVC) Filter:",
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "A filter may be placed in the large vein (vena cava) if blood thinners cannot be used or are ineffective. This prevents clots from reaching the lungs.",
      },
    ],
  },
  {
    heading: "Lifestyle Recommendations:",
    aneurysmSymptoms: [
      {
        title: "",
        description: "Elevating legs periodically to reduce swelling",
      },
      {
        title: "",
        description: "Wearing compression stockings daily",
      },
      {
        title: "",
        description:
          "Staying hydrated and avoiding activities that increase the risk of injury",
      },
      {
        title: "",
        description:
          "Moving frequently during long journeys to prevent clot formation",
      },
    ],
  },
  {
    heading: "Hospitalization or Outpatient Care:",
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "Treatment may vary based on the severity of DVT. Some patients require hospital care, while others are treated at home with blood thinners.",
      },
    ],
  },
];
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
      DVT is a manageable condition if timely diagnosis and proper treatment.
      However, delayed or inadequate treatment can lead to complications,
      including pulmonary embolism or post-thrombotic syndrome. By adhering to
      treatment plans, using preventive strategies, and maintaining regular
      follow-ups with healthcare providers, individuals can minimize the risks
      and improve their quality of life.`,
  },
];

function page() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to homepage
    router.push("/");

    // Wait for navigation to complete then scroll to form
    setTimeout(() => {
      const formElement = document.querySelector("#consultation-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div>
      <div className="relative">
        <Banner image={bannerImage} />
      </div>
      <div className="lg:container mx-auto p-6">
        <div className="space-y-4">
          <H1 title={title} />
          <p className="text-start font-light">
            Deep Vein Thrombosis (DVT) is a medical condition where a blood clot
            (thrombus) forms in a vein located deep inside the body, typically
            in the legs, thighs, or pelvis. However, it can also occur in other
            areas such as the arms, brain, or abdominal organs. When blood flow
            is sluggish or there is damage, clots may form obstructing blood
            circulation. While DVT cases may not always be life-threatening, it
            can result in severe issues if the clot travels to the lungs,
            causing pulmonary embolism (PE), a potentially fatal condition.
          </p>
        </div>
      </div>
      <section className="lg:container mx-auto px-6">
        <p className="font-light">
          <strong className="font-medium">Post-thrombotic syndrome</strong> may
          develop in some individuals, causing chronic pain and swelling and
          leading to skin ulcers or other skin damage to veins.
        </p>
        <div className="py-4">
          <H2
            title="Key characteristics of DVT include:"
            className="font-semibold"
          />
          <ul className="list-disc list-inside text-hciSecondary space-y-2 font-medium ml-2 mt-4">
            <li>
              <span className="font-medium text-hciPrimary">
                Blood Pooling in Veins
              </span>
            </li>
            <li>
              <span className="font-medium text-hciPrimary">
                Chronic Swelling and Pain
              </span>
            </li>
            <li>
              <span className="font-medium text-hciPrimary">
                Skin Discoloration or Pigmentation Changes
              </span>
            </li>
            <li>
              <span className="font-medium text-hciPrimary">
                Development of Venous Ulcers
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <DataBoxes
            title="Causes"
            data={conditionsData}
            text="Several factors increase the risk of developing DVT, including:"
            header=""
            myclass="grid lg:grid-cols-2"
            titleCss="text-2xl font-bold text-center mt-8"
            textCss="font-medium py-4"
          />
          {/* <KnowMore title={title} /> */}
          <CausesKnowMore title={title} />
        </div>
      </section>

      <section className="container mx-auto py-8 px-6">
        <div className="grid lg:grid-cols-1 gap-4">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              data={symptomsDVT}
              text="Many people with DVT do not experience symptoms. However, when present, symptoms may include:"
              textCss="font-light py-4"
              header=""
              myclass="grid grid-cols-2"
              titleCss="text-2xl font-bold text-center mt-8"
            />
            <KnowMore title={title} />
          </div>
          <div className="space-y-4">
            <DataBoxes
              title="Diagnosis"
              titleCss="text-2xl font-bold text-center mt-8"
              textCss="font-light py-4"
              data={diagnosisDVT}
              text="A healthcare provider will conduct a physical exam, review medical history, and use imaging tests to diagnose DVT. The primary diagnostic tests include:"
              header=""
              myclass="grid grid-cols-2"
            />
            {/* <KnowMore title={title} /> */}
            <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
              <button onClick={handleClick} className="text-start underline">
                To get the best diagnosis for Deep Vein Thrombosis (DVT) and
                related issues, click here
              </button>
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6">
        <H2
          title="Prevention"
          className="text-center text-2xl font-bold space-y-4"
        />
        <p className="text-center font-light">To reduce the risk of DVT:</p>
        <DataSurgery data={surgeryData} />
      </section>
      <section className="container mx-auto py-8 px-6">
        <H2
          title="Treatment and Management"
          className="text-center text-2xl font-bold mb-4"
        />
        <TreatmentBox
          data={treatmentData}
          heading="The primary goals of DVT treatment are to prevent the clot from
            getting bigger, avoid clot migration to the lungs, and reduce the
            risk of future clots. Treatments include:"
          headingCss="font-light"
        />
      </section>
      <section className="container mx-auto py-2 px-6 space-y-6">
        <Conclusion data={footerData} />
        <FooterLinks head={title} />
        <BookButton />
      </section>
    </div>
  );
}

export default page;
