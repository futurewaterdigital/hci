import React from 'react'
import Banner from '@/components/Common/Banner'
import DataLists from '@/components/cardiacComponents/Bullets'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H2 from '@/components/ui/h2'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'
import H3 from '@/components/ui/h3'

const data = {
  title: "Cancers of the Digestive System",
  bannerImage: "/gastroenterology/cancers-digestive-system.png",
  description: `Cancers of the digestive system affect key organs involved in digestion and nutrient absorption. These cancers originate in the gastrointestinal (GI) tract or nearby organs like the gallbladder and pancreas. Early detection can significantly improve survival outcomes, but in many cases, symptoms develop only in advanced stages.`,
  overview: "",

  section_1: [
    {
      title: "Genetic mutations",
      description: "leading to abnormal cell growth",
    },
    {
      title: "Chronic conditions",
      description: "GERD, inflammatory bowel disease, pancreatitis",
    },
    {
      title: "Dietary factors",
      description: "High-fat, low-fibre, and processed foods",
    },
    {
      title: '',
      description: 'Family history of GI cancers',
    },
    {
      title: "",
      description: "Smoking and alcohol consumption",
    },
    {
      title: "Infections",
      description: "Helicobacter pylori or Hepatitis viruses",
    },
    {
      title: "",
      description: "Obesity and sedentary lifestyle",
    },
  ],

  complications: [
    {
      heading: "Surgery:",
      description:
        "Surgery aims to remove the tumour and any affected surrounding tissues, often the first line of treatment if the cancer is localized.",
      aneurysmSymptoms: [
        {
          description:
            `<span class="font-medium text-hciSecondary">Gastrectomy:</span> Partial or complete removal of the stomach (used for stomach cancer).`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Colectomy:</span> Removal of a section or the entire colon (for colon cancer).`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Pancreatectomy:</span> Removal of the pancreas or part of it (used for pancreatic cancer).`,
        },
        {
          description: `<span class="font-medium text-hciSecondary">Whipple Procedure:</span> A complex surgery that removes parts of the pancreas, bile duct, and stomach (for advanced pancreatic or bile duct cancer).`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Esophagectomy:</span> Removal of a portion of the oesophagus (used in oesophageal cancer).`,
        },
      ],
      footer:
        "Surgeries may also include lymph node removal to check for cancer spread. Laparoscopic or robotic surgeries are often used to minimize recovery time.",
    },

    {
      heading: "Chemotherapy",
      description:
        "Chemotherapy uses drugs to destroy or inhibit cancer cells. It can be administered before surgery (neoadjuvant therapy) to shrink tumours or after surgery (adjuvant therapy) to prevent recurrence.",
      aneurysmSymptoms: [
        {
          description:
            `<span class="font-medium text-hciSecondary">Systemic Chemotherapy:</span> Drugs travel through the bloodstream to attack cancer cells throughout the body.`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Regional Chemotherapy:</span> Targets cancer cells in specific areas of the body.`,
        },
      ],
      footer:
        "Common chemotherapy agents for digestive cancers include 5-FU (fluorouracil), capecitabine, and gemcitabine. Side effects can include fatigue, nausea, hair loss, and low immunity.",
    },
    {
      heading: "Radiation Therapy:",
      description:
        "Radiation therapy involves using high-energy rays to destroy cancer cells or shrink tumours. It is often used in combination with surgery and chemotherapy.",
      aneurysmSymptoms: [
        {
          description:
            `<span class="font-medium text-hciSecondary">External Beam Radiation:</span> A machine directs radiation at the tumour from outside the body.`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Brachytherapy:</span> Radioactive material is placed inside or near the tumour.`,
        },
      ],
      footer:
        "Radiation therapy is particularly useful for oesophageal, rectal, and pancreatic cancers to shrink tumours and relieve symptoms.",
    },
    {
      heading: "Targeted Therapy:",
      description:
        "Targeted therapy uses drugs or substances that specifically target proteins or genes that promote cancer growth.",
      aneurysmSymptoms: [
        {
          description:
            `<span class="font-medium text-hciSecondary">Monoclonal Antibodies:</span> Target specific proteins on cancer cells, such as HER2 (used in stomach cancer).`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Tyrosine Kinase Inhibitors:</span> Block enzymes responsible for cancer cell growth and spread.`,
        },
      ],
      footer:
        "Targeted therapy is less likely to affect normal cells, leading to fewer side effects compared to chemotherapy.",
    },
    {
      heading: "Immunotherapy:",
      description:
        "Immunotherapy enhances the body's natural immune response to fight cancer.",
      aneurysmSymptoms: [
        {
          description:
            `<span class="font-medium text-hciSecondary">Checkpoint Inhibitors:</span> Drugs that block proteins used by cancer cells to evade the immune system.`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Cancer Vaccines:</span> Help the immune system recognize cancer cells.`,
        },
      ],
      footer:
        "This treatment is mainly used in advanced cases where traditional therapies are ineffective.",
    },
    {
      heading: "Palliative Care and Supportive Treatment",
      description:
        "For advanced or metastatic cancers, palliative care focuses on relieving symptoms and improving quality of life. This can include:",
      aneurysmSymptoms: [
        {
          description: `<span class="font-medium text-hciSecondary">Pain management</span> through medications or nerve blocks`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Nutritional support</span> for patients with difficulty eating or swallowing`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Counselling and emotional support</span> for patients and families`,
        },
        {
          description:
            `<span class="font-medium text-hciSecondary">Management of side effects</span> such as fatigue, nausea, or bowel issues`,
        },
      ],
      footer:
        'Palliative care is often integrated with curative treatments to enhance patient comfort.',
    },
  ],

  contact: {
    title: "Contact Us Today",
    head: "Contact HCI for Expert Urological Care",
    content:
      "Take the first step towards better urological health. Reach out to HCI today to schedule a consultation with one of our skilled urologists and begin your path to recovery and better quality of life.",
  },

  symptoms: [
    {
      category: "",
      description: "Unexplained weight loss",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: '',
      description: `Persistent abdominal pain or discomfort`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        `<span class="font-medium">Difficulty swallowing:</span> (especially with oesophageal cancer)`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: "",
      description:
        `<span class="font-medium">Changes in bowel habits:</span> Constipation, diarrhoea, or blood in the stool`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `<span class="font-medium">Bloating</span>, nausea, or vomiting`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `<span class="font-medium">Jaundice</span> (common in gallbladder and pancreatic cancers)`,
      bgColor: 'bg-hciPrimary text-white',
    },
    {
      category: '',
      description: `<span class="font-medium">Loss of appetite</span> and general fatigue`,
      bgColor: 'bg-hciPrimary text-white',
    },
  ],

  diagnosis: [
    {
      category: '',
      description: `<span class="font-medium">Endoscopy/Colonoscopy:</span> Visual examination of the GI tract.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description: `<span class="font-medium">Biopsy:</span> Tissue samples examined under a microscope.`,
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: '',
      description:
        '<span class="font-medium">Imaging Tests:</span> CT scans, MRIs, and PET scans to evaluate tumour size and spread.',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: "",
      description:
        '<span class="font-medium">Blood Tests:</span> Check for tumour markers (e.g., CEA, CA 19-9).',
      bgColor: 'bg-hciSecondary text-white',
    },
    {
      category: "",
      description:
        '<span class="font-medium">Barium Studies:</span> X-ray with contrast to detect abnormalities.',
      bgColor: 'bg-hciSecondary text-white',
    },
  ],
};
const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Digestive system cancers require a tailored treatment approach, combining surgery, chemotherapy, radiation, and targeted or immunotherapy based on the patient’s condition. Early detection remains essential for better outcomes, and advanced treatment options now offer hope for improved survival rates. Additionally, lifestyle modifications like healthy eating, avoiding smoking and alcohol, and routine screenings can reduce the risk of these cancers. At every stage, personalized care and supportive treatments help ensure patients receive the best quality care and maintain their quality of life.`,
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
          text="Types of Cancers of the Digestive System "
          className="font-medium mb-4 text-start text-2xl"
        />
        <div className="grid lg:grid-cols-2 gap-4 ">
          <div>
            <H3 title="Types of Cancers of the Digestive System" className="font-medium mb-4 text-start text-2xl" />
            <div className="space-y-4 border border-gray-300 shadow-lg rounded-lg p-4">

              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Oesophageal Cancer (Ca Oesophagus)
                </span>
                <br />
                Affects the oesophagus, the tube connecting the throat to the
                stomach
              </p>
              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Stomach Cancer (Ca Stomach)
                </span>
                <br />
                Also known as gastric cancer, originating from the stomach lining.
              </p>
              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Colon Cancer (Ca Colon)
                </span>
                <br />
                Develops in the colon, the initial part of the large intestine.
              </p>
              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Rectal Cancer (Ca Rectum)
                </span>
                <br />
                Forms in the rectum, the lower part of the large intestine before
                the anus.
              </p>
              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Gallbladder Cancer (Ca Gallbladder)
                </span>
                <br />
                Begins in the gallbladder, a small organ beneath the liver that
                stores bile.
              </p>
              <p className="font-light">
                <span className="font-medium text-lg text-hciPrimary">
                  Pancreatic Cancer (Ca Pancreas)
                </span>
                <br />
                Originates in the pancreas, an organ involved in digestion and
                hormone production.
              </p>
            </div>
          </div>
          <div className="md:mt-20">
            <img src="/gastroenterology/digestive-system.png" alt="" />
          </div>
        </div>
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        {/* <p className="font-light">
          Several factors can contribute to the development of digestive system
          cancers. Understanding these risk factors is crucial for prevention
          and early detection:
        </p> */}
        <div className="grid md:grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        {/* <KnowMore title={data.title} /> */}
        <p className="text-start text-hciPrimary underline font-semibold capitalize pt-4 text-lg">
          <button className="text-start underline">
            To Know More About Cancers Of The Digestive System And Its Treatment, Click Here
          </button>
        </p>


        <div className="grid lg:grid-cols-1 gap-4">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              // text="Digestive system cancers can present with various symptoms, which may include:"
              textCss="font-light py-4"

              titleCss="text-black font-medium text-center text-xl pb-4 mt-4"
              header=""
              data={data.symptoms}
              myclass="grid md:grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              // text="Proper diagnosis is crucial to determine the right treatment plan. Healthcare providers may use the following methods:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-xl pb-4 mt-4"
              data={data.diagnosis}
              myclass="grid md:grid-cols-2"
            />
          </div>
          <IssuesLinks head={data.title} />
        </div>

        <div>
          <H2
            title="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          <p className="font-light">
            Digestive cancers require a customized approach depending on the
            cancer type, stage, and patient&apos;s condition. Treatment may
            include a combination of surgery, chemotherapy, radiation therapy,
            targeted therapy, and supportive care.
          </p>
          <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          />
        </div>
        <Conclusion data={footerData} />
        <div className="space-y-6 mt-8">
          <FooterLinks head={data.title} />
          <BookButton />
        </div>
      </div>
    </>
  );
}

export default GeneralSurgery;
