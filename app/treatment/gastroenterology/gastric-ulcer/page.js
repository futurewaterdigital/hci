import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/BulletsTwo'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinkGastroenterology from '@/components/cardiacComponents/FooterLinkGastroenterology'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import CausesKnowMore from '@/components/ui/CausesKnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'

const data = {
  title: "Gastric Ulcer",
  bannerImage: "/gastroenterology/gastric-ulcer.png",
  description: `Gastric ulcers are open sores that develop on the inner lining of the stomach, typically due to an imbalance between digestive acids and the stomach’s protective mucus lining. They are a type of peptic ulcer disease (PUD) and can cause significant discomfort, particularly after eating. Gastric ulcers, if untreated, can lead to complications like bleeding or perforation.`,
  overview: "",

  section_1: [
    {
      title: "Helicobacter pylori Infection",
      description: "A bacterial infection that disrupts the stomach lining.",
    },
    {
      title: "Smoking",
      description:
        "Increases acid production and delays healing of existing ulcers.",
    },

    {
      title: "Stress",
      description:
        "Physical or emotional stress can exacerbate symptoms or trigger ulcer development.",
    },
    {
      title: "NSAID Use",
      description:
        "Long-term use of nonsteroidal anti-inflammatory drugs like ibuprofen or aspirin can irritate the stomach lining.",
    },
    {
      title: "Excessive Alcohol Consumption",
      description:
        "Weakens the protective mucus layer, making the stomach more prone to ulcers.",
    },
  ],

  data_1: [
    {
      heading: "Acute Gastric Ulcer:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className="font-semibold">Description:</span> These ulcers form quickly, usually due to severe stress, trauma, or medication use.',
        },
        {
          description:
            '<span className="font-semibold">Symptoms:</span> Sudden onset of sharp abdominal pain, often accompanied by nausea.',
        },
        {
          description:
            '<span className="font-semibold">Treatment:</span> Focuses on relieving symptoms and addressing the trigger, such as medications or stress.',
        },
      ],
    },
    {
      heading: "Chronic Gastric Ulcer:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className="font-semibold">Description:</span> Long-standing ulcers that develop gradually, often due to persistent irritation or infections like H. pylori.',
        },
        {
          description:
            '<span className="font-semibold">Symptoms:</span> Burning or gnawing stomach pain, typically worse on an empty stomach.',
        },
        {
          description:
            '<span className="font-semibold">Treatment:</span> Requires a combination of lifestyle changes, medications, and infection control.',
        },
      ],
    },
    {
      heading: "Bleeding Ulcer:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className="font-semibold">Description:</span>  A severe form of gastric ulcer that erodes a blood vessel, leading to gastrointestinal bleeding.',
        },
        {
          description:
            '<span className="font-semibold">Symptoms:</span> Symptoms include black or tarry stools, vomiting blood, and dizziness.',
        },
        {
          description:
            '<span className="font-semibold">Treatment:</span> Immediate medical intervention is necessary, possibly including endoscopic treatment or surgery.',
        },
      ],
    },
    {
      heading: "Perforated Ulcer:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className="font-semibold">Description:</span> A life-threatening condition where the ulcer creates a hole in the stomach wall, allowing contents to leak into the abdominal cavity.',
        },
        {
          description: '<span className="font-semibold">Symptoms:</span> Sudden, severe abdominal pain and fever.',
        },
        {
          description:
            '<span className="font-semibold">Treatment:</span> Emergency surgery is required to close the perforation and prevent infection.',
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
            "Dietary changes, reducing alcohol and smoking cessation can promote healing.",
        },
      ],
    },

    {
      heading: "Medications:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            '<span className="font-semibold text-hciSecondary">Proton Pump Inhibitors (PPIs):</span> Decrease stomach acid production, allowing the ulcer to heal.',
        },
        {
          description: '<span className="font-semibold text-hciSecondary">Antibiotics:</span> Used to treat H. pylori infection.',
        },
        {
          description:
            '<span className="font-semibold text-hciSecondary">Antacids:</span> Provide quick relief from stomach pain by neutralizing acid.',
        },
        {
          description:
            '<span className="font-semibold text-hciSecondary">H2 Receptor Blockers:</span> Reduce acid production to help manage symptoms.',
        },
      ],
    },
    {
      heading: "Endoscopic Treatment:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "For bleeding ulcers, endoscopy may be used to stop the bleeding with special techniques.",
        },
      ],
    },
    {
      heading: "Surgery:",
      description: "",
      aneurysmSymptoms: [
        {
          description:
            "In rare cases, surgery may be required to treat complications like perforation or non-healing ulcers.",
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
      Gastric ulcers can significantly impact quality of life, but early diagnosis and treatment can prevent complications. Managing lifestyle factors and adhering to prescribed medications are essential for effective treatment. If you experience persistent abdominal pain or symptoms of gastric ulcer, consulting a healthcare professional is vital for appropriate care and recovery.
          `,
    },
  ],

  symptoms: [
    {
      category: "",
      description:
        '<span className="font-semibold">Abdominal Pain:</span> Burning or dull ache, usually located in the upper abdomen, often worsening after meals.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">Nausea or Vomiting:</span> May include vomiting blood in severe cases.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">Bloating and Indigestion:</span> Discomfort and a feeling of fullness after eating.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">Weight Loss:</span> Due to loss of appetite or fear of eating because of pain.',
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">Black or Tarry Stools:</span> A sign of bleeding in the digestive tract.',
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        '<span className="font-semibold">Medical History and Symptoms:</span> Healthcare professionals will assess symptoms, medication use, and lifestyle factors.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `<span className="font-semibold">Endoscopy:</span> A small camera is inserted through the mouth to visually examine the stomach lining and take tissue samples if necessary.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">H. pylori Testing:</span> Blood, stool, or breath tests can confirm the presence of the H. pylori infection.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: "",
      description:
        '<span className="font-semibold">Imaging Tests:</span> In some cases, X-rays or CT scans may be used to detect perforation or obstruction.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
};

const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Gastric ulcers can significantly impact quality of life, but early diagnosis and treatment can prevent complications. Managing lifestyle factors and adhering to prescribed medications are essential for effective treatment. If you experience persistent abdominal pain or symptoms of gastric ulcer, consulting a healthcare professional is vital for appropriate care and recovery.
     `,
  },
];

function GeneralSurgery() {
  return (
    <>
      <Banner image={data.bannerImage} />
      <div className="lg:container mx-auto space-y-4 px-6 lg:px-0">
        <H1 title={data.title} />
        <p dangerouslySetInnerHTML={{ __html: data.description }} className="text-start font-light" />
        <p className="font-light">{data.overview}</p>
        <H2
          title="Types of Gastric Ulcers"
          className="font-medium mb-4 text-center text-2xl"
        />

        <div className="mb-8">
          <DataLists
            divClass="grid md:grid-cols-2 gap-4"
            // key={index}
            // desc={data.complications[0].description}
            data={data.data_1}
            ulClass="list-disc list-outside"
            // boxClass="grid md:grid-cols-2"
          />
        </div>
        <CausesKnowMore title={data.title} />

       
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl pt-12" />
        
        <div className="grid md:grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full min-h-[60px] bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <CausesKnowMore title={data.title} /> */}

        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              // text="Gallstones may not always cause symptoms, but when they obstruct the bile ducts, they can trigger noticeable discomfort, including:"
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl py-4"
              header=""
              data={data.symptoms}
              myclass="grid md:grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div className="space-y-4">
            <DataBoxes
              title="Diagnosis"
              // text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl py-4"
              data={data.diagnosis}
              myclass="grid md:grid-cols-2"
            />
            <IssuesLinks head={data.title} />
          </div>
        </div>

        <div>
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          {/* <p className="font-light py-4">
            The treatment approach depends on the severity of the symptoms and
            the size or location of the stones. Options include:
          </p> */}
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
