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
  title: "Diverticulitis",
  bannerImage: "/gastroenterology/diverticulitis.png",
  description: `Diverticulitis occurs when small pouches called diverticula, formed along the inner lining of the colon, become inflamed or infected. This condition develops from diverticulosis, where these pouches exist without inflammation. Diverticulitis can cause intense abdominal pain and digestive issues and may range from mild to severe. It is more common in older adults and can result in complications if untreated.`,
  overview: "",

  section_1: [
    {
      title: "",
      description:
        "Tear or injury to the diverticula: This can trigger inflammation or infection.",
    },
    {
      title: "",
      description:
        "Straining during bowel movements: Hard stools may stretch and injure the diverticula.",
    },
    {
      title: "",
      description:
        "Colitis or viral infections: Chronic colon inflammation may predispose diverticula to rupture.",
    },
    {
      title: "",
      description:
        "Bacterial infection: Fecal matter trapped in the diverticula can provide a breeding ground for bacteria.",
    },
    {
      title: "",
      description:
        "Low-fibre diet: A lack of dietary fibre can lead to constipation, increasing pressure on the colon.",
    },
  ],

  data_1: [
    {
      heading: "Pain Management:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Medications may be prescribed to relieve any discomfort after surgery or treatment.",
        },
      ],
    },
    {
      heading: "Follow-Up Appointments:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Regular visits to monitor recovery and address any concerns.",
        },
      ],
    },
    {
      heading: "Dietary Adjustments:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Your healthcare provider may recommend a low-fat diet temporarily to aid digestion.",
        },
      ],
    },
    {
      heading: "Activity Restrictions:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Light activities can usually be resumed within a few days after minimally invasive procedures. However, heavy lifting or strenuous exercises should be avoided until full recovery.",
        },
      ],
    },
  ],

  complications: [
    {
      heading: "Home Treatment for Mild Cases:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Rest and liquid diet: Allows the digestive tract to heal.",
        },
        {
          description: "Antibiotics: Prescribed if there is an infection.",
        },
        {
          description:
            "Over-the-counter pain relief: Extends survival in ALS patients by slowing the progression of the disease.",
        },
        {
          description:
            "Antidepressants/Anxiolytics: Paracetamol/acetaminophen is recommended over NSAIDs to reduce the risk of GI bleeding.",
        },
      ],
    },

    {
      heading: "Hospitalization for Severe or Complicated Cases:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Intravenous antibiotics or antivirals: For infections that need immediate care.",
        },
        {
          description:
            "Fluid and electrolyte management: Through IV drips to maintain hydration.",
        },
        {
          description:
            "Endoscopic procedures: To manage complications like bleeding or abscess drainage.",
        },
        {
          description:
            "Surgery: In chronic or recurrent cases, a bowel resection may be necessary to remove the affected part of the colon.",
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
      Most cases of diverticulitis resolve with early medical intervention, particularly if the condition is mild and uncomplicated. Lifestyle changes such as a high-fibre diet, regular hydration, and exercise can help prevent flare-ups. However, untreated or severe cases can lead to complications such as perforations, abscesses, or fistulas. Early detection and treatment ensure a favourable prognosis, allowing most people to recover fully without long-term consequences.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        "Severe Abdominal Pain: Often occurs suddenly in the upper right abdomen or between the shoulder blades.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Nausea and Vomiting: Especially after eating heavy or fatty meals.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Fever and Chills: May indicate an infection due to bile duct blockage.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Jaundice: Yellowing of the skin and eyes can occur if bile flow is obstructed.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Dark Urine and Pale Stools: Signs of bile not flowing properly.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Medical history and physical exam: A healthcare provider may suspect diverticulitis based on symptoms and abdominal tenderness.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `CT Scan: This imaging test helps identify inflammation, infections, or complications.`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Blood tests: To check for signs of infection or inflammation.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Colonoscopy: Sometimes used to assess the colon directly, though it is avoided during acute flare-ups to reduce the risk of perforation.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        "Stool and urine tests: Used to rule out other conditions like infections or gastrointestinal bleeding.",
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Diverticulitis is a common condition that can affect people of all ages, with most cases resolving on their own within a few days. While it is usually not severe, it can be dangerous for individuals with weaker immune systems, such as children, the elderly, or those with chronic conditions. Managing hydration and rest are essential for recovery. If symptoms persist or worsen, it is important to consult a healthcare provider to avoid complications like dehydration or electrolyte imbalances.
     With good hygiene practices, such as regular hand washing and safe food handling, the risk of contracting diverticulitis can be significantly reduced.
          `,
  },
];

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
        {/* <H2
          text="Types of Cancers of the Digestive System "
          textClass="text-2xl font-semibold mb-4 text-start"
        /> */}
        {/* <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Oesophageal Cancer (Ca Oesophagus)
              </span>
              <br />
              Affects the oesophagus, the tube connecting the throat to the
              stomach
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Stomach Cancer (Ca Stomach)
              </span>
              <br />
              Also known as gastric cancer, originating from the stomach lining.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Colon Cancer (Ca Colon)
              </span>
              <br />
              Develops in the colon, the initial part of the large intestine.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Rectal Cancer (Ca Rectum)
              </span>
              <br />
              Forms in the rectum, the lower part of the large intestine before
              the anus.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Gallbladder Cancer (Ca Gallbladder)
              </span>
              <br />
              Begins in the gallbladder, a small organ beneath the liver that
              stores bile.
            </p>
            <p className="font-light">
              <span className="font-semibold text-xl text-hciPrimary">
                Pancreatic Cancer (Ca Pancreas)
              </span>
              <br />
              Originates in the pancreas, an organ involved in digestion and
              hormone production.
            </p>
          </div>
          <div>
            <img src="/gastroenterology/digestive-system.png" alt="" />
          </div>
        </div> */}
        <H2 title="Causes" className="font-semibold mb-4 text-center" />
        {/* <p className="font-light">
          While the exact cause of gallstones isn’t fully understood, several
          factors may increase the risk:
        </p> */}
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full min-h-[60px] bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              // text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
              textCss="font-light py-4"
              titleCss="text-black font-semibold text-center text-xl py-4"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              // text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-semibold text-center text-xl py-4"
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>

        <div>
          <H2 title="Treatment" className="font-semibold mb-4 text-center" />
          <p className="font-light py-4">
            The treatment approach depends on the severity of the symptoms and
            the size or location of the stones. Options include:
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.complications}
              ulClass="list-none list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div>
          {/* <H2
            text="Lifestyle Tips to Prevent Gallbladder Stones"
            textClass="text-2xl font-semibold mb-4 text-center"
          /> */}
          {/* <p className="font-light">
            While surgery can effectively address existing stones, adopting
            healthy habits can reduce the risk of developing them:
          </p> */}
          {/* <ul className="list-disc list-inside py-4 space-y-2 font-light">
            <li>
              Maintain a Healthy Weight: Gradual weight management helps prevent
              changes in bile composition.
            </li>
            <li>
              Eat a Balanced Diet: Opt for fibre-rich foods like fruits,
              vegetables, and whole grains. Avoid excessive intake of fatty and
              fried foods.
            </li>
            <li>
              Stay Hydrated: Drinking plenty of water helps keep bile flowing
              smoothly.
            </li>
            <li>
              Exercise Regularly: Physical activity promotes healthy digestion
              and overall well-being.
            </li>
            <li>
              Avoid Crash Diets: Losing weight too quickly can increase the risk
              of gallstones.
            </li>
          </ul> */}
          {/* <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          /> */}

          {/* <H2
            text="Recovery and Post-Treatment Care"
            textClass="text-2xl font-semibold mb-4 text-center"
          />
          <p className="font-light">
            After treatment, proper care is essential to ensure a smooth
            recovery and prevent future problems:
          </p> */}
          {/* <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.data_1}
              ulClass="list-none list-outside"
              // boxClass="grid grid-cols-2"
            />
          </div> */}
        </div>

        <Conclusion data={footerData} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;
