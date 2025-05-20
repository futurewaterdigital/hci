import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/Heart-valve.png";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataLists from "@/components/cardiacComponents/Bullets";
import FooterLinks from "@/components/cardiacComponents/FooterLinkGastroenterology";
import BookButton from "@/components/cardiacComponents/BookButton";
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from "@/components/ui/CausesKnowMore";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import H3 from "@/components/ui/h3";
const title = "Heart Valve Disease";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import IssuesLinks from "@/components/ui/IssuesLinks";

const valveMalfunction = [
  {
    category: "Stenosis",
    description:
      "Valve leaflets thicken, stiffen, or fuse together, narrowing the valve opening and restricting blood flow.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Regurgitation",
    description:
      "The valve does not close tightly, causing blood to leak backward.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Prolapse",
    description:
      "Floppy valve flaps bulge backward, sometimes leading to regurgitation.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Atresia:",
    description:
      "A valve fails to form properly,creating a solid sheet of tissue that blocks blood flow (commonly affects the pulmonary valve).",
    bgColor: "bg-hciSecondary text-white",
  },
];
const commonCauses = [
  {
    category: "Congenital defects",
    description: "Present at birth",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "Infections",
    description: "Rheumatic fever, infective endocarditis",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "Age-related degeneration",
    description: "Calcification or stiffening of valves",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "Heart conditions",
    description: "Heart attack, coronary artery disease",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "Chronic diseases",
    description: "Hypertension, diabetes, or high cholesterol",
    bgColor: "bg-hciPrimary text-white",
  },
];
const valveConditionsData = [
  {
    heading: `Symptoms`,
    aneurysmSymptoms: [
      {
        title: "",
        description:
          "Shortness of breath, especially during activity or lying down",
      },
      {
        title: "",
        description: "Fatigue and weakness",
      },
      {
        title: "",
        description: "Chest pain or discomfort",
      },
      {
        title: "",
        description: "Dizziness or fainting (syncope)",
      },
      {
        title: "",
        description: "Swelling in the ankles, feet, or abdomen (edema)",
      },
      {
        title: "",
        description: "Palpitations or irregular heartbeat",
      },
    ],
  },
];
const adviceData = [
  {
    title: `When to Seek Medical Advice`,
    paragraph: `If you experience any of these symptoms, it's important to consult a healthcare professional. A cardiologist - specializing in heart diseases can conduct a thorough evaluation to diagnose the condition and recommend treatment.`,
  },
];
const medicationsData = [
  {
    heading: `Medications`,
    aneurysmSymptoms: [
      {
        title: "",
        description: "Diuretics to reduce fluid build-up",
      },
      {
        title: "",
        description: "Blood pressure medications to manage hypertension",
      },
      {
        title: "",
        description: "Anticoagulants to prevent blood clots",
      },
      {
        title: "",
        description: "Beta-blockers to regulate heart rate",
      },
    ],
  },
];
const lifestyleChangesData = [
  {
    heading: `Lifestyle Changes`,
    aneurysmSymptoms: [
      {
        title: "",
        description: "Eating a heart-healthy diet",
      },
      {
        title: "",
        description: "Exercising regularly (under medical supervision)",
      },
      {
        title: "",
        description: "Avoiding tobacco and limiting alcohol",
      },
    ],
  },
];
const surgicalProceduresData = [
  {
    heading: `Surgical Procedures`,
    aneurysmSymptoms: [
      {
        title: "Valve Repair:",
        description:
          "Preferred when the valve structure can be preserved. Techniques include reshaping leaflets or repairing tears.",
      },
      {
        title: "Valve Replacement:",
        description:
          "If repair isn't feasible, the valve is replaced with a mechanical valve or a bioprosthetic valve (from animal tissue).",
      },
      {
        title: "Transcatheter Aortic Valve Replacement (TAVR):",
        description: "A less invasive procedure for high-risk patients.",
      },
    ],
  },
];
const cardiacTests = [
  {
    category: "Echocardiogram",
    description: "An ultrasound of the heart to assess valve function",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "Electrocardiogram (ECG)",
    description: "Detects irregular heart rhythms",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "Chest X-ray",
    description: "Shows the heart's size and condition of the lungs",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "Cardiac MRI or CT scan",
    description: "Provides detailed images of the heart",
    bgColor: "bg-hciYellow text-black",
  },
  {
    category: "Cardiac catheterization",
    description:
      "Measures pressures within the heart chambers and evaluates blood flow",
    bgColor: "bg-hciYellow text-black",
  },
];
const heartConditions = [
  {
    category: "Heart failure",
    description: "Reduced ability of the heart to pump blood efficiently",
    bgColor: "bg-hciLightBlue ",
  },
  {
    category: "Stroke",
    description: "Blood clots forming in the heart may travel to the brain",
    bgColor: "bg-hciLightBlue ",
  },
  {
    category: "Arrhythmias",
    description: "Irregular heartbeats, including atrial fibrillation",
    bgColor: "bg-hciLightBlue ",
  },
  {
    category: "Infective endocarditis",
    description: "Infections affecting the heart's inner lining",
    bgColor: "bg-hciLightBlue ",
  },
  {
    category: "Death",
    description: "In severe cases, untreated valve disease can be fatal",
    bgColor: "bg-hciLightBlue ",
  },
];
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Heart valve disease is a serious condition, but with early detection and appropriate treatment, many individuals can manage symptoms effectively and improve their quality of life. Regular check-ups and following the treatment plan are essential for preventing complications. If you experience symptoms such as breathlessness, chest pain, or irregular heartbeat, consult a cardiologist promptly. Early intervention can help prevent the disease from progressing and improve long-term outcomes.
      `,
  },
];

export default function page() {
  return (
    <div>
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-8 px-6">
        <div className="space-y-4">
          <H1 title={title} />
          <p className="text-start font-light">
            Heart Valve Disease occurs when one or more valves in the heart fail
            to function properly, disrupting the flow of blood through the heart
            and to the rest of the body. The heart contains four valves—aortic,
            mitral, pulmonary, and tricuspid—which ensure that blood flows in
            the correct direction. However, valve malfunction may involve
            incomplete opening or closing, affecting circulation and potentially
            leading to serious complications. Depending on the severity and the
            affected valve, treatment options may range from lifestyle
            modifications to surgical interventions, such as valve repair or
            replacement.
          </p>
        </div>
        <div className="space-y-4 mt-8">
          {/* <h2 className="text-2xl font-medium text-center text-hciSecondary">
            Causes
          </h2> */}
          <H3
            title="Causes"
            className="text-2xl font-regular font-roboto text-center font-medium"
          />
          <p className="text-start font-light">
            Heart valve disease can occur due to congenital defects, infections,
            or age-related changes. Understanding the anatomy and function of
            the heart&apos;s valves helps clarify how these conditions develop.
            Each valve has leaflets (or cusps) that open and close with every
            heartbeat to maintain proper blood flow.
          </p>
          <div className="grid lg:grid-cols-1 lg:gap-4">
            <DataBoxes
              title=""
              text=""
              header="Key types and causes of valve malfunction include:"
              headerCss="font-medium text-xl"
              data={valveMalfunction}
              myclass="grid grid-cols-2"
            />
            <DataBoxes
              title=""
              text=""
              header="Common causes:"
              headerCss="font-medium text-xl"
              data={commonCauses}
              myclass="grid grid-cols-2"
            />
          </div>
          {/* <KnowMore title={title} /> */}
          <CausesKnowMore title={title} />

        </div>
        <div className="space-y-4 mt-5">
          <div className="grid grid-cols-1 gap-4">
            <DataLists
              desc="Heart valve disease may remain asymptomatic for many years, but as the condition progresses, symptoms can emerge, including:"
              data={valveConditionsData}
            />
          </div>
          <div className="">
            {adviceData.map((items, index) => (
              <div
                className="border border-[#D84498] rounded-lg shadow-lg flex flex-col p-4"
                key={index}>
                <h2 className="font-medium text-lg pb-2">{items.title}</h2>
                <p className="font-light">{items.paragraph}</p>
              </div>
            ))}
          </div>
          <KnowMore title={title} />
        </div>
        <div className="grid lg:grid-cols-1 gap-4">
          <div className="pt-12 space-y-4">
            <DataBoxes
              title="Diagnosis"
              titleCss="font-medium text-xl"
              text="The diagnostic process involves a combination of physical examinations, imaging, and other tests to determine the extent and nature of the valve disease. Common diagnostic tools include:"
              header=""
              textCss="font-light py-4"
              data={cardiacTests}
              myclass="grid grid-cols-2"
            />

            <IssuesLinks head={title} />
          </div>

          <div className="py-2">
            <H2
              title="Treatment Options"
              className={`font-medium text-xl pb-[22px]`}
            />
            <p className="font-light">
              Treatment depends on the severity, the affected valve, and the
              patient’s overall health. Options include:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <DataLists boxClass="h-[250px]" data={medicationsData} />
              <DataLists boxClass="h-[250px]" data={lifestyleChangesData} />
            </div>
            <div className="grid grid-cols-1">
              <DataLists data={surgicalProceduresData} />
            </div>
          </div>
          <div>
            <DataBoxes
              title="Complications"
              titleCss="font-medium text-xl"
              text="If untreated, heart valve disease may lead to severe complications, such as:"
              header=""
              textCss="font-light py-4"
              data={heartConditions}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <div className="space-y-4 mt-4">
          <Conclusion data={footerData} />
          <FooterLinks head="Heart Valve Disease" />
          <BookButton />
        </div>
      </main>
    </div>
  );
}
