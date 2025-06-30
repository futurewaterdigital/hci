import React from "react";
import Banner from "@/components/Common/Banner";
import DataLists from "@/components/cardiacComponents/BulletsTwo";
import BookButton from "@/components/cardiacComponents/BookButton";
import FooterLinkGastroenterology from "@/components/cardiacComponents/FooterLinkGastroenterology";
import H2 from "@/components/ui/h2";
import DataBoxes from "@/components/cardiacComponents/Box";
import Conclusion from "@/components/cardiacComponents/Conclusion";
// import TextComponent from '@/components/Common/TextComponent'
import H1 from "@/components/ui/h1";
import IssuesLinks from "@/components/ui/IssuesLinks";
import KnowMore from "@/components/ui/KnowMore";
import CausesKnowMore from "@/components/ui/CausesKnowMore";

const data = {
  title: "Gastroenteritis",
  bannerImage: "/gastroenterology/gastroenteritis.png",
  description: `Gastroenteritis, commonly known as the "stomach flu", refers to the inflammation of the stomach and intestines. It causes discomfort and symptoms like nausea, vomiting, abdominal pain, and diarrhoea. The condition is often caused by infections—viral, bacterial, or parasitic—or exposure to toxic substances. Although it is generally self-limiting, it can become serious in vulnerable populations, such as young children, the elderly, or those with weakened immune systems.`,
  overview: "",

  section_1: [
    {
      title: "Autoimmune response:",
      description:
        "The immune system mistakenly attacks healthy cells in the colon, causing inflammation.",
    },
    {
      title: "Genetic predisposition:",
      description:
        "People with a family history of UC or other IBDs are at higher risk.",
    },
    {
      title: "Gut microbiome imbalance:",
      description: "Alterations in gut bacteria may trigger inflammation.",
    },
    {
      title: "Environmental triggers:",
      description:
        "Factors like stress, infections, and diet may not cause UC directly but can provoke flare-ups.",
    },
    {
      title: "Risk factors:",
      description:
        "UC is more prevalent in younger individuals (15–30 years) and those over 60. It is also more common among people of Ashkenazi Jewish descent.",
    },
  ],

  data_9: [
    {
      heading: "Infectious gastroenteritis:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Caused by viruses, bacteria, parasites, or fungi.",
        },
      ],
    },
    {
      heading: "Chemical gastroenteritis:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Triggered by toxic chemicals, contaminated food or water, medications, or excessive alcohol consumption.",
        },
      ],
    },
  ],

  data_10: [
    {
      heading: "Intestinal symptoms:",

      description: "",
      aneurysmSymptoms: [
        {
          description: "Diarrhoea (sometimes watery)",
        },
        {
          description: "Nausea and vomiting",
        },
        {
          description: "Abdominal cramps and pain",
        },
        {
          description: "Loss of appetite",
        },
      ],
    },
    {
      heading: "Systemic symptoms:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Chills and body aches",
        },
        {
          description: "Fatigue and weakness",
        },
        {
          description: "Fever",
        },
      ],
    },
  ],

  data_2: [
    {
      heading: "Viral Infections",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Norovirus (most common cause worldwide)",
        },
        {
          description: "Rotavirus",
        },
        {
          description: "Adenovirus",
        },
      ],
    },
    {
      heading: "Bacterial Infection:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Escherichia coli (E. coli)",
        },
        {
          description: "Salmonella",
        },
        {
          description: "Clostridioides difficile (C. diff)",
        },
        {
          description: "Shigella",
        },
      ],
    },
    {
      heading: "Parasitic Infections:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Giardia",
        },
        {
          description: "Cryptosporidium",
        },
      ],
    },
    {
      heading: "Fungal Infections:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Candida species",
        },
      ],
    },
    {
      heading: "Chemical Exposure:",
      description: "",
      aneurysmSymptoms: [
        {
          description: "Contaminated food and water",
        },
        {
          description:
            "Overuse of alcohol or nonsteroidal anti-inflammatory drugs (NSAIDs)",
        },
        {
          description: "Plant toxins (e.g., poisonous mushrooms)",
        },
      ],
    },
  ],
  data_3: [
    {
      heading: "Untreated GERD can lead to:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "Esophagitis: Inflammation that can cause bleeding or ulcers.",
        },
        {
          description:
            "Esophageal Stricture: Narrowing of the esophagus due to scar tissue, leading to swallowing difficulties.",
        },
        {
          description: `Barrett's Esophagus: Precancerous changes in the esophageal lining, increasing the risk of esophageal cancer.`,
        },
      ],
    },
  ],

  complications: [
    {
      heading: "Home Management:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className= "font-semibold text-hciSecondary">Hydration:</span> Drink water, oral rehydration solutions, or clear broths.',
        },
        {
          description:
            '<span className= "font-semibold text-hciSecondary">Diet:</span> Follow the BRAT diet (Bananas, Rice, Applesauce, Toast) to reduce gastrointestinal stress.',
        },
        {
          description:
            '<span className= "font-semibold text-hciSecondary">Avoid irritants:</span> Limit alcohol, caffeine, and dairy products during recovery.',
        },
      ],
    },

    {
      heading: "Medical Treatment:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className= "font-semibold text-hciSecondary">Intravenous fluids:</span> If dehydration is severe.',
        },
        {
          description: `<span className= "font-semibold text-hciSecondary">Medications:</span> 
          <ul className= "list-disc list-inside">
          <li>Antiemetics to control vomiting.</li>
          <li>Antidiarrheal agents (in some cases).</li>
          <li>Antibiotics or antiparasitic drugs for specific infections.</li>
          </ul>
          `,
        },
      ],
    },
    {
      heading: "For Chemical Gastroenteritis:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className= "font-semibold text-hciSecondary">Detoxification:</span> If poisoning is involved, medical intervention may be needed to remove the toxins.',
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
     Gastroenteritis is a common condition that can affect people of all ages, with most cases resolving on their own within a few days. While it is usually not severe, it can be dangerous for individuals with weaker immune systems, such as children, the elderly, or those with chronic conditions. Managing hydration and rest are essential for recovery. If symptoms persist or worsen, it is important to consult a healthcare provider to avoid complications like dehydration or electrolyte imbalances.
     With good hygiene practices, such as regular hand washing and safe food handling, the risk of contracting gastroenteritis can be significantly reduced.
          `,
    },
  ],

  symptoms: [
    {
      category: "Abdominal Pain:",
      description:
        "A common symptom, often described as a burning sensation or discomfort in the upper abdomen.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Nausea or Vomiting:",
      description: "Can occur, sometimes accompanied by a loss of appetite.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Bloating and Indigestion:",
      description:
        "Feelings of fullness and discomfort after eating are common.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Loss of Appetite:",
      description: "May lead to unintended weight loss in some individuals.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "Black or Tarry Stools:",
      description:
        "Can indicate bleeding in the stomach and should prompt immediate medical attention.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        '<span className= "font-semibold">Stool tests:</span> To detect viral, bacterial, or parasitic infections.',
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `<span className= "font-semibold">Blood tests:</span> To assess dehydration or other underlying health issues`,
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description:
        '<span className= "font-semibold">Electrolyte panel:</span> To monitor for imbalances caused by dehydration.',
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Gastroenteritis is a common condition that can affect people of all ages, with most cases resolving on their own within a few days. While it is usually not severe, it can be dangerous for individuals with weaker immune systems, such as children, the elderly, or those with chronic conditions. Managing hydration and rest are essential for recovery. If symptoms persist or worsen, it is important to consult a healthcare provider to avoid complications like dehydration or electrolyte imbalances.
     With good hygiene practices, such as regular hand washing and safe food handling, the risk of contracting gastroenteritis can be significantly reduced.
          `,
  },
];

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

        <div className="grid md:grid-cols-2 gap-4 pt-12">
          <div>
            <H2
              title="There are two main Types of Gastroenteritis"
              className="font-medium mb-4 text-start text-2xl"
            />

            <div className="mb-8">
              <DataLists
                divClass="grid grid-cols-1 gap-4"
                // key={index}
                // desc={data.complications[0].description}
                data={data.data_9}
                ulClass="list-disc list-outside"
                boxClass="min-h-[80px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src="/gastroenterology/gastroenteritis_1.png" alt="" />
          </div>
        </div>

        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />

        <p className="font-light">
          Gastroenteritis can be caused by infections or exposure to toxins.
          Below are the common causes:
        </p>
        <div className="grid grid-cols-1 gap-4">
          <DataLists
            divClass="grid md:grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_2}
            ulClass="list-disc list-outside"
            boxClass="bg-hciYellow "
          />
          <CausesKnowMore title={data.title} />
        </div>
        <H2
          title="Symptoms"
          className="font-medium mb-4 text-center text-2xl pt-12"
        />
        <p className="font-light">
          The hallmark symptoms of gastroenteritis are a combination of
          intestinal and systemic effects:
        </p>
        <div className="mb-8 space-y-4">
          <DataLists
            divClass="grid md:grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_10}
            ulClass="list-disc list-outside"
          // boxClass="grid md:grid-cols-2"
          />

        
        </div>
        <p className="font-light">
          These symptoms tend to appear suddenly, with diarrhoea or vomiting often being the first indicators. While most cases resolve within a few days, severe or persistent symptoms may indicate complications.
          <KnowMore title={data.title} />
        </p>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <DataBoxes
              title="Diagnosis"
              text="In most cases, healthcare providers diagnose gastroenteritis based on symptoms and medical history. However, additional tests may be required to confirm the cause or rule out other conditions, including:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl"
              data={data.diagnosis}
              myclass="grid grid-cols-1"
            />
          </div>
          <IssuesLinks head={data.title} />
        </div>

        <div>
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          <p className="font-light mb-6">
            The treatment of gastroenteritis primarily focuses on managing
            symptoms and preventing dehydration. Most cases resolve within 1–3
            days with rest and supportive care.
          </p>
          <div className="mb-8">
            <DataLists
              divClass="grid grid-cols-1 gap-4"
              // key={index}
              // desc={data.complications[0].description}
              data={data.complications}
              ulClass="list-disc list-outside"
            // boxClass="grid md:grid-cols-2"
            />
          </div>
        </div>

        <Conclusion data={footerData} />
        <FooterLinkGastroenterology head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;
