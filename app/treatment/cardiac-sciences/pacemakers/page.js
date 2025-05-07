import React from "react";
import Banner from "@/components/Common/Banner";
const bannerImage = "/cardio/peacemaker.png";
import DataBoxes from "@/components/cardiacComponents/Box";
import DataLists from "@/components/cardiacComponents/Bullets";
import FooterLinkTwo from "@/components/cardiacComponents/FooterLinkTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
import H2 from "@/components/ui/h2";
import H1 from "@/components/ui/h1";
import Conclusion from "@/components/cardiacComponents/Conclusion";
const title = "Pacemakers";

const heartConditionsList = [
  {
    category: "Heart arrhythmias",
    description:
      "Irregular heartbeats such as atrial fibrillation or bradycardia.",
    bgColor: "bg-hciSecondary text-white ",
  },
  {
    category: "Heart blocks",
    description: "Delayed or interrupted electrical signals in the heart.",
    bgColor: "bg-hciSecondary text-white ",
  },
  {
    category: "Heart failure",
    description: "Improving coordination in heartbeats to enhance blood flow.",
    bgColor: "bg-hciSecondary text-white ",
  },
  {
    category: "Post-heart attack recovery",
    description: "Supporting damaged heart muscles.",
    bgColor: "bg-hciSecondary text-white ",
  },
];
const heartsConditionsList = [
  {
    category: "",
    description: "Persistent chest pain or pressure",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Rapid or slow heartbeats (tachycardia or bradycardia)",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Irregular or skipped heartbeats",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Dizziness, fainting, or lightheadedness",
    bgColor: "bg-hciYellow",
  },
  {
    category: "",
    description: "Fatigue, shortness of breath, or swelling in the limbs",
    bgColor: "bg-hciYellow",
  },
];
const procedureDetails = [
  {
    heading: `Procedure Details`,
    aneurysmSymptoms: [
      {
        title: "Catheter-based approach (for leadless pacemakers)",
        description: "Inserted via a catheter through a vein.",
        bgColor: "bg-purple-100 p-4 rounded-md",
      },
      {
        title: "Transvenous approach",
        description:
          "Leads are threaded through a vein to the heart, with the device placed under the chest skin.",
        bgColor: "bg-purple-100 p-4 rounded-md",
      },
      {
        title: "Surgical approach",
        description:
          "Leads are attached directly to the heart during open surgery, with the device implanted in the abdomen or chest.",
        bgColor: "bg-purple-100 p-4 rounded-md",
      },
    ],
  },
];
const valveConditionsData = [
  {
    heading: `Types of Pacemakers`,
    aneurysmSymptoms: [
      {
        title: "Leadless pacemakers",
        description:
          "Small, wire-free devices implanted directly in the heart.",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Single-chamber pacemakers",
        description: "A single wire connects to one heart chamber.",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Dual-chamber pacemakers",
        description: "Wires connect to two chambers for synchronized beats.",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
      {
        title: "Biventricular pacemakers",
        description:
          "Three wires for treating heart failure by improving coordination between heart chambers.",
        bgColor: "bg-blue-100 p-4 rounded-md",
      },
    ],
  },
];
const adviceData = [
  {
    title: `Pacemakers vs. Implantable Cardioverter Defibrillators (ICDs)`,
    paragraph: `While pacemakers regulate heart rhythms, ICDs are designed to detect and correct life-threatening arrhythmias by delivering a shock to reset the heart's rhythm. Some ICDs also function as pacemakers.`,
  },
];
const riskDetails = [
  {
    heading: `Risks and Complications`,
    aneurysmSymptoms: [
      {
        title: "",
        description: "Allergic reactions to materials or medications.",
        bgColor: "bg-red-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Lead displacement or malfunction.",
        bgColor: "bg-red-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Blood clots or infections.",
        bgColor: "bg-red-100 p-4 rounded-md",
      },
      {
        title: "",
        description: "Rarely, new arrhythmias.",
        bgColor: "bg-red-100 p-4 rounded-md",
      },
    ],
  },
];
const benfitsDetails = [
  {
    heading: `Benefits of Pacemakers`,
    aneurysmSymptoms: [
      {
        title: "",
        description: "Improved heart rhythm and functionality.",
        bgColor: "bg-green-100 p-4 rounded-md",
      },
      {
        title: "",
        description:
          "Alleviation of symptoms like chest pain, fainting, and fatigue.",
        bgColor: "bg-green-100 p-4 rounded-md",
      },
      {
        title: "",
        description:
          "Reduced risk of heart-related complications and sudden cardiac arrest.",
        bgColor: "bg-green-100 p-4 rounded-md",
      },
    ],
  },
];
const recoveryDetails = [
  {
    heading: `Recovery and Maintenance`,
    aneurysmSymptoms: [
      {
        title: "Battery life",
        description:
          "Pacemakers typically last 10–15 years. Replacement involves a less-invasive procedure.",
        bgColor: "bg-gray-100 p-4 rounded-md",
      },
      {
        title: "Life expectancy",
        description:
          "Many patients with pacemakers enjoy normal or near-normal life spans, depending on their overall health.",
        bgColor: "bg-gray-100 p-4 rounded-md",
      },
      {
        title: "Follow-up care",
        description:
          "Regular check-ups are essential to monitor device function and battery levels.",
        bgColor: "bg-gray-100 p-4 rounded-md",
      },
    ],
  },
];
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
    Pacemakers represent a transformative technology for those with heart
          rhythm disorders, enabling them to lead healthier, more active lives.
  `,
  },
];

export default function page() {
  return (
    <div className="pt-12">
      <Banner image={bannerImage} />
      <main className="lg:container mx-auto py-0 px-6">
        <div className="space-y-8">
          <div className="space-y-4 mt-6">
            <H1 title="Pacemakers" />
            <p className="text-start font-light">
              Pacemakers are medical devices implanted in the body to regulate
              heart rhythms, ensuring that the heart beats at a normal pace.
              These devices are designed to manage and treat various heart
              rhythm disorders, improving overall heart functionality and
              quality of life.
            </p>
          </div>
          <div className="space-y-4">
            <H2
              title="What are Pacemakers?"
              className="text-center text-black font-medium text-2xl"
            />
            <p className="text-start font-light">
              Pacemakers are small devices placed under the skin, often in the
              chest, to help control abnormal heart rhythms. They emit
              electrical pulses to stimulate the heart when it beats too slowly
              or irregularly, restoring a steady rhythm. These devices can be
              life-saving, preventing complications from arrhythmias and other
              heart conditions.
            </p>
          </div>
          <div className="space-y-4">
            <H2
              title="How do Pacemakers Work?"
              className="text-center text-black font-medium text-2xl"
            />
            <p className="mt-4 text-start font-light">
              The heart’s natural electrical system signals the heart chambers
              to pump blood in a coordinated rhythm. When this system
              malfunctions, a pacemaker steps in to send electrical impulses
              that ensure the heart contracts at the right time and in the
              proper sequence.
            </p>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-1 gap-4 pt-12">
            <DataBoxes
              titleCss="text-xl font-medium"
              title="What Conditions do Pacemakers Treat?"
              text="Pacemakers are used to address several conditions, including:"
              header=""
              textCss="font-light py-2"
              data={heartConditionsList}
              myclass="grid grid-cols-2"
            />
            <DataBoxes
              titleCss="text-xl font-medium"
              title="Signs you might need a Pacemaker"
              text="Some symptoms that may indicate the need for a pacemaker include:"
              header=""
              textCss="font-light py-2"
              data={heartsConditionsList}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-4">
          <DataLists
            desc="The type of pacemaker depends on the condition it’s meant to treat:"
            data={valveConditionsData}
          />
        </div>
        <div className="py-6">
          {adviceData.map((items, index) => (
            <div
              className="border border-[#D84498] rounded-lg shadow-lg flex flex-col p-4"
              key={index}
            >
              <H2 title={items.title} className="font-medium" />
              <p className="font-light">{items.paragraph}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          <DataLists
            desc="Pacemaker implantation methods vary based on the type of device:"
            data={procedureDetails}
            footerdata="These procedures are relatively quick, lasting between one and five
            hours."
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <DataLists
            desc="While pacemaker implantation is generally safe, potential risks include:"
            data={riskDetails}
            boxClass="h-[300px]"
          />
          <DataLists desc="" data={benfitsDetails} boxClass="h-[300px]" />
        </div>
        <div>
          <DataLists
            desc="While pacemaker implantation is generally safe, potential risks include:"
            data={recoveryDetails}
          />
        </div>

        <div className="space-y-4 mt-8">
          <Conclusion data={footerData} />
          <FooterLinkTwo head={title} />
          <BookButton />
        </div>
      </main>
    </div>
  );
}
