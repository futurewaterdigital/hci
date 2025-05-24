"use client";
import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/peripheral-artery-disease.png";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataLists from "@/components/cardiacComponents/Bullets";
import FooterLinks from "@/components/cardiacComponents/FooterLinkGastroenterology";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import { useRouter } from "next/navigation";


const data = {
  title: "Peripheral Artery Disease (PAD)",
}

const padConditionsList = [
  {
    category: "",
    description: "Smoking Increases PAD risk by 400%.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Age 50 years and above.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Diabetes",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Family or Personal History Includes vascular diseases",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "High Cholesterol & High Blood Pressure",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "African American ethnicity",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Obesity and poor diet",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Sedentary Lifestyle & Chronic Kidney Disease",
    bgColor: "bg-hciYellow",
  },
];

const padSymptoms = [
  {
    heading: "Symptoms",
    aneurysmSymptoms: [
      {
        title: "Intermittent claudication:",
        description:
          "Pain or cramping in the legs during activity, which subsides with rest",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        // title: "Cold feet or legs",
        description: "Cold feet or legs",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Skin colour changes",
        description: "(red or bluish discoloration)",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Sores or ulcers",
        description: "on the feet or toes that do not heal",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Numbness or tingling",
        description: "in the legs or feet",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Weak or absent pulses",
        description: "in the affected limbs",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "In severe cases: Gangrene",
        description: " (tissue death)",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];
const padDiagnosis = [
  {
    heading: "Diagnosis",
    aneurysmSymptoms: [
      {
        title: "Ankle-Brachial Index (ABI): ",
        description:
          "Measures blood pressure differences between the arms and legs",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Vascular ultrasound",
        description: "Checks for blockages in blood vessels",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Pulse Volume Recording (PVR):",
        description: "Assesses blood flow",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Angiography:",
        description: "Involves injecting dye to identify arterial blockages",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];
const lifestyleChanges = [
  {
    heading: "Lifestyle Changes",
    aneurysmSymptoms: [
      {
        title: "Quit smoking:",
        description: "This is the most important step in managing PAD",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Exercise:",
        description:
          "Regular walking can improve circulation and ease symptoms",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Healthy diet:",
        description: "Focus on high-fiber, low-fat foods, and avoid trans fats",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Manage chronic conditions:",
        description: "Control diabetes, hypertension, and cholesterol levels",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];
const medicationsData = [
  {
    heading: "Medications",
    aneurysmSymptoms: [
      {
        title: "",
        description: "Antiplatelet drugs e.g., aspirin, clopidogrel to reduce blood clot risk",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Statins to control cholesterol",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Cilostazol to improve walking distance and reduce leg pain",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Medications for high blood pressure and diabetes helps in managing PAD-related conditions",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];
const minimallyInvasiveSurgery = [
  {
    heading: "Minimally Invasive Procedures or Surgery",
    aneurysmSymptoms: [
      {
        title: "Angioplasty:",
        description: "Opens narrowed arteries using a balloon",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Stent placement:",
        description: "Keeps arteries open",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Atherectomy:",
        description: "Removes plaque buildup",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Peripheral artery bypass surgery:",
        description: "Creates a bypass around blocked arteries",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Recovery time:",
        description:
          "Minimally invasive treatments may require only a few days, while bypass surgery might need six to eight weeks.",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];

export default function page() {
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
    <div className="pt-12">
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-0 px-6">
        <H1 title="Peripheral Artery Disease (PAD)" />
        <div className="lg:py-4">
          <p className="mt-4 text-start font-light">
            Peripheral Artery Disease (PAD) is a circulatory condition
            characterized by the narrowing or blockage of arteries, primarily in
            the legs and arms, due to plaque buildup. This plaque consists of
            fats, cholesterol, and other substances. As arteries narrow,
            oxygen-rich blood struggles to reach tissues, leading to pain,
            tissue damage, and other complications. PAD not only affects
            mobility but also increases the risk of cardiovascular events like
            heart attacks and strokes.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 pt-8 mb-4">
            <DataBoxes
              titleCss=""
              title="Causes"
              text="PAD occurs primarily due to atherosclerosis, where fatty deposits
            build up on arterial walls. Over time, this plaque narrows the
            arteries, impeding blood flow. Some key risk factors for PAD
            include:"
              header=""
              data={padConditionsList}
              myclass="grid lg:grid-cols-2"
            />
          </div>
          <CausesKnowMore title={data.title} />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <DataLists
              desc="Many individuals with PAD experience no symptoms initially. However, as the disease progresses, the following symptoms may appear:"
              data={padSymptoms}
              footerdata="Complications can arise if PAD is untreated, such as non-healing wounds or even the need for amputation in advanced stages."
              boxClass="min-h-[550px]"
            />
            <KnowMore title="Peripheral Artery Disease (PAD)" />
          </div>
          <div>
            <DataLists
              desc="Diagnosing PAD involves a combination of medical history, physical examination, and diagnostic tests, such as:"
              data={padDiagnosis}
              footerdata=""
              boxClass="min-h-[550px]"
            />
            <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
              <button onClick={handleClick} className="text-start underline">
                To get the best diagnosis for Peripheral Artery Disease
                (PAD) and related issues, click here
              </button>
            </p>
            {/* <KnowMore title="Peripheral Artery Disease (PAD)" /> */}
          </div>
        </div>
        <div>
          <p className="font-bold pt-16 text-center text-2xl">Treatment</p>
          <p className="py-2">The goal of PAD treatment is to alleviate symptoms, prevent disease progression, and lower the risk of heart attacks and strokes. Treatment approaches include:</p>
          <div className="grid lg:grid-cols-3 gap-4 Cilostazol">
            <DataLists
              desc=""
              data={lifestyleChanges}
              footerdata=""
              boxClass="min-h-[400px]"
            />
            <DataLists
              desc=""
              data={medicationsData}
              footerdata=""
              boxClass="min-h-[400px]"
            />
            <DataLists
              desc=""
              data={minimallyInvasiveSurgery}
              footerdata=""
              boxClass="min-h-[400px]"
            />
          </div>
        </div>

        <div className="py-0">
          <H2 title="Conclusion" className="text-center text-2xl font-bold mt-8" />
          <p className="mt-4 text-start font-light">
            Peripheral Artery Disease (PAD) is a lifelong condition, but with
            early detection and proper management, patients can significantly
            improve their quality of life and reduce the risk of complications.
            Quitting smoking, exercising regularly, following a healthy diet,
            and controlling chronic conditions are essential to slowing disease
            progression. Timely medical interventions, including medications or
            surgical procedures, can help maintain mobility and prevent severe
            outcomes like gangrene or amputation. Regular follow-ups with
            healthcare providers are crucial for ongoing care and preventing
            cardiovascular events associated with PAD.
          </p>
        </div>
        <div className="space-y-4 mt-8">
          <FooterLinks head=" Peripheral Artery Disease (PAD)" />
          <BookButton />
        </div>
      </main>
    </div>
  );
}
