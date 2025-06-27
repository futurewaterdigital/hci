import React from "react";
import Banner from "@/components/Common/Banner";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataSurgery from "@/components/cardiacComponents/Button";
import DataLists from "@/components/cardiacComponents/Bullets";
import FooterLinkTwo from "@/components/cardiacComponents/FooterLinkTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
import IssuesLinks from "@/components/ui/IssuesLinks";
import CausesLink from "@/components/ui/CausesLink";
import Conclusion from "@/components/cardiacComponents/Conclusion";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import H3 from "@/components/ui/h3";

const bannerImage = "/cardio/aortic.png";

const title = "Aortic Aneurysm";
const vascularConditions = [
  {
    category: "Atherosclerosis",
    description:
      "Buildup of plaque in arteries that makes them stiff and narrow.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "Connective tissue disorders",
    description:
      "Genetic conditions like Marfan syndrome or Ehlers-Danlos syndrome that weaken connective tissues.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "Infections",
    description:
      "Rarely, conditions like syphilis can affect the aortic walls.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "High blood pressure (hypertension)",
    description: "Increases the stress on the arterial walls over time.",
    bgColor: "bg-hciYellow",
  },
  {
    category: "Trauma or injury",
    description:
      "Aortic aneurysms can develop after severe chest or abdominal injuries.",
    bgColor: "bg-hciYellow",
  },
];
const riskFactor = [
  {
    title: "Smoking",
    description: "",
    minHeight: "h-[80px]",
  },
  {
    title: "Age over 65 years",
    description: "",
    minHeight: "h-[80px]",
  },
  {
    title: "Male sex (men are more prone to abdominal aneurysms)",
    description: "",
    minHeight: "h-[80px] text-center",
  },
  {
    title: "Family history of aneurysms",
    description: "",
    minHeight: "h-[80px]",
  },
  {
    title: "High cholesterol and hypertension",
    description: "",
    minHeight: "h-[80px] text-center",
  },
];
const symptomsData = [
  {
    heading: "Symptoms of a Growing Aortic Aneurysm",
    aneurysmSymptoms: [
      {
        title: "",
        description: "Chest, back, or abdominal pain",
      },
      {
        title: "",
        description:
          "Difficulty swallowing or shortness of breath (for thoracic aneurysms)",
      },
      {
        title: "",
        description:
          "Feeling of fullness after eating small meals (abdominal aneurysms)",
      },
      {
        title: "",
        description: "Swelling in the face, arms, or neck",
      },
    ],
  },
];
const symptomsRData = [
  {
    heading: "Symptoms of a Ruptured Aortic Aneurysm (Medical Emergency)",
    aneurysmSymptoms: [
      {
        title: "",
        description: "Sudden, severe chest or abdominal pain",
      },
      {
        title: "",
        description: "Rapid heart rate",
      },
      {
        title: "",
        description: "Lightheadedness or dizziness",
      },
      {
        title: "",
        description: "Loss of consciousness",
      },
    ],
  },
];
const diagnosticTests = [
  {
    category: "Ultrasound",
    description: "Frequently used to detect abdominal aneurysms.",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "MRI and MRI Angiography",
    description:
      "Help detect aneurysms and examine their impact on nearby structures.",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "CT Scan and CT Angiography",
    description:
      "Provide detailed images of the aorta to detect aneurysms and assess their size.",
    bgColor: "bg-hciPrimary text-white",
  },
  {
    category: "X-rays",
    description: "May incidentally reveal thoracic aneurysms.",
    bgColor: "bg-hciPrimary text-white",
  },
];
const medicalManagement = [
  {
    category: "Blood pressure management",
    description:
      "Use of medications to control hypertension and reduce strain on the aorta.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Cholesterol management",
    description:
      "Statins to help lower cholesterol levels, reducing plaque buildup.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Lifestyle changes",
    description:
      "Quitting smoking, eating heart-healthy foods, and exercising regularly can slow aneurysm growth.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Monitoring",
    description:
      "Routine imaging tests are recommended to track aneurysm size and progression.",
    bgColor: "bg-hciSecondary text-white",
  },
];
const surgicalTreatment = [
  {
    category: "Open Aneurysm Repair:",
    description:
      "The damaged section of the aorta is removed and replaced with a synthetic graft. This approach is more invasive but effective, especially for ruptured aneurysms.",
    bgColor: "bg-hciSecondary text-white",
  },
  {
    category: "Endovascular Aneurysm Repair (EVAR or TEVAR):",
    description:
      "A minimally invasive procedure where a catheter is used to insert a stent graft into the aorta. The graft reinforces the artery wall and prevents further bulging",
    bgColor: "bg-hciSecondary text-white",
  },
];
const complications = [
  {
    heading: "Potential Complications",
    aneurysmSymptoms: [
      {
        title: "Endoleak:",
        description:
          "Leakage of blood around the graft used during endovascular repair.",
      },
      {
        title: "Blood clots:",
        description: "Formation of clots around the graft or within the aorta.",
      },
      {
        title: "",
        description: "Infections at the surgical site or graft infection.",
      },
      {
        title: "Graft migration:",
        description: "The stent graft may shift from its original position",
      },
      {
        title: "Control blood pressure and cholesterol:",
        description:
          "Medications and lifestyle adjustments can reduce arterial damage.",
      },
    ],
  },
];
const prevention = [
  {
    heading: "",
    aneurysmSymptoms: [
      {
        title: "Quit smoking:",
        description:
          "Tobacco use is a major risk factor.",
      },
      {
        title: "Eat a balanced diet:",
        description:
          " A heart-healthy diet helps prevent atherosclerosis.",
      },
      {
        title: "Exercise regularly:",
        description:
          "Physical activity improves cardiovascular health.",
      },
      {
        title: "Routine screenings:",
        description:
          "High-risk individuals should undergo regular imaging tests to catch aneurysms early.",
      },
    ],
  },
];
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
      Aortic aneurysms are serious conditions that may develop silently
            but pose life-threatening risks if they rupture. Early detection
            through regular screening and monitoring is essential for
            individuals with risk factors. With medical management, lifestyle
            changes, and timely surgical interventions, patients can effectively
            manage an aneurysm and reduce the risk of complications. Seeking
            immediate care for any signs of rupture is critical for survival and
            improved outcomes.`,
  },
];

export default function page() {
  return (
    <div>
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-8 px-6">
        <H1 title={title} />
        <div className="py-8 space-y-6">
          <p className="text-start font-light">
            An aortic aneurysm occurs when a section of the aorta, the
            body&apos;s largest artery, becomes weak and bulges out, forming a
            balloon-like structure. The aorta carries oxygen-rich blood from the
            heart to the rest of the body. Depending on the location, the
            aneurysm can form in:
          </p>
          <ul className="list-disc list-inside text-start">
            <li>
              <strong>Abdominal aorta (Abdominal Aortic Aneurysm, AAA)</strong>
            </li>
            <li>
              <strong>Thoracic aorta (Thoracic Aortic Aneurysm, TAA)</strong>
            </li>
          </ul>
          <p className="text-start font-light">
            Aortic aneurysms can develop silently, without noticeable symptoms,
            but if they rupture, they can cause life-threatening complications,
            including internal bleeding.
          </p>

          <DataBoxes
            title="Causes"
            text="Several factors can contribute to the weakening of the aortic wall, leading to an aneurysm. Common causes include:"
            textCss="font-light py-2"
            data={vascularConditions}
            titleCss="text-2xl text-center font-medium"
            myclass="grid lg:grid-cols-2"
          />

          <CausesLink head={title} />
          <H2
            title="Risk Factors Include"
            className="text-center font-medium mt-8 text-2xl"
          />
          <DataSurgery data={riskFactor} boxClass=""/>
          <div>
            <H2
              title="Symptoms"
              className="text-center font-medium mt-8 text-2xl"
            />
            <p className="mt-4 text-start font-light">
              Aortic aneurysms often remain asymptomatic until they enlarge or
              rupture. Symptoms vary based on the aneurysm&apos;s location and
              size.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <DataLists data={symptomsData} boxClass="md:h-[250px]" />
              <DataLists data={symptomsRData} boxClass="md:h-[250px]" />
            </div>

            <p className="mt-4 text-start font-light">
              If an aneurysm ruptures, it requires immediate medical attention,
              as internal bleeding can be fatal without prompt intervention.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <DataBoxes
            title="Diagnosis"
            titleCss="text-2xl text-center mb-4 font-medium"
            text="Since many aneurysms are asymptomatic, they are often discovered during routine check-ups or imaging tests conducted for other conditions."
            header="Common diagnostic tests include:"
            headerCss="text-xl -mt-6"
            textCss="min-h-12"
            data={diagnosticTests}
            myclass="grid lg:grid-cols-2"
          />
          <p className="text-start font-light">
            Regular screening is recommended for individuals with high-risk
            factors, such as smokers or those with a family history of
            aneurysms.
          </p>
          <IssuesLinks head={title} />
          <H2
            title="Treatment"
            className="text-center font-medium mt-8 text-2xl"
          />
          <div>
            <p className="text-start font-light">
              The treatment approach depends on the aneurysm&apos;s size,
              location, and risk of rupture.
            </p>

            <div className="grid lg:grid-cols-1 gap-4">
              <DataBoxes
                title=""
                text=""
                header="Medical Management (for small, unruptured aneurysms):"
                headerCss="text-xl"
                data={medicalManagement}
                myclass="grid md:grid-cols-2 grid-cols-1"
              />
              <DataBoxes
                title=""
                text=""
                header="Surgical Treatment (for large or at-risk aneurysms):"
                headerCss="text-xl"
                data={surgicalTreatment}
                myclass="grid md:grid-cols-2 grid-cols-1"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-4">
              <H3 title="Recovery and Complications after Surgery" />
              <p className="md:h-20 font-light">
                Recovery from aneurysm surgery can take several weeks to months,
                depending on the procedure type. Patients receive close
                follow-up to monitor for complications and ensure the aneurysm
                does not recur or grow.
              </p>
              <DataLists data={complications} boxClass="md:h-[340px]" />
            </div>
            <div className="space-y-4">
              <H3 title="Prevention" />
              <p className="h-20 font-light">
                While not all aortic aneurysms can be prevented, adopting
                healthy habits can reduce the risk of developing them:
              </p>
              <DataLists data={prevention} boxClass="h-[340px]" />
            </div>
          </div>
        </div>

        <div className="py-0 space-y-6 mt-8">
          <Conclusion data={footerData} />
          <FooterLinkTwo head="Aortic Aneurysm" />
          <BookButton />
        </div>
      </main>
    </div>
  );
}
