import React from 'react'
import Banner from '@/components/Common/Banner'
import BookButton from '@/components/cardiacComponents/BookButton'
import FooterLinks from '@/components/cardiacComponents/FooterLink'
import H2 from '@/components/ui/h2'
import KnowMore from '@/components/ui/KnowMore'
import DataBoxes from '@/components/cardiacComponents/Box'
import Conclusion from '@/components/cardiacComponents/Conclusion'
import TextComponent from '@/components/Common/TextComponent'
import H1 from '@/components/ui/h1'
import IssuesLinks from '@/components/ui/IssuesLinks'
const data = {
  title: "Colon Polyps",
  bannerImage: "/gastroenterology/colon-polyps.png",
  description: `Colon polyps are small growths that form on the inner lining of the colon (large intestine) or rectum. While most colon polyps are benign and do not cause symptoms, some types can develop into colon cancer over time. Routine screenings, such as colonoscopies, are essential for detecting and removing polyps early, significantly reducing the risk of colorectal cancer. Colon polyps can vary in size and shape, with the two main types being pedunculated (having a stalk) and sessile (broad-based).`,
  overview: "",

  section_1: [
    {
      title: "Genetic predisposition",
      description:
        "Conditions such as Familial Adenomatous Polyposis (FAP) and Peutz-Jeghers syndrome can lead to a higher incidence of polyps.",
    },
    {
      title: "Age",
      description:
        "The risk of developing polyps increases with age, particularly after 50.",
    },
    {
      title: "Environmental factors:",
      description:
        "Lifestyle choices such as a high-fat, low-fiber diet, obesity, smoking, and heavy alcohol use can contribute to the development of colon polyps.",
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
            "Gastrectomy: Partial or complete removal of the stomach (used for stomach cancer).",
        },
        {
          description:
            "Colectomy: Removal of a section or the entire colon (for colon cancer).",
        },
        {
          description:
            "Pancreatectomy: Removal of the pancreas or part of it (used for pancreatic cancer).",
        },
        {
          description: `Whipple Procedure: A complex surgery that removes parts of the pancreas, bile duct, and stomach (for advanced pancreatic or bile duct cancer).`,
        },
        {
          description:
            "Esophagectomy: Removal of a portion of the oesophagus (used in oesophageal cancer).",
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
            "Systemic Chemotherapy: Drugs travel through the bloodstream to attack cancer cells throughout the body.",
        },
        {
          description:
            "Regional Chemotherapy: Targets cancer cells in specific areas of the body.",
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
            "External Beam Radiation: A machine directs radiation at the tumour from outside the body.",
        },
        {
          description:
            "Brachytherapy: Radioactive material is placed inside or near the tumour.",
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
            "Monoclonal Antibodies: Target specific proteins on cancer cells, such as HER2 (used in stomach cancer).",
        },
        {
          description:
            "Tyrosine Kinase Inhibitors: Block enzymes responsible for cancer cell growth and spread.",
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
            "Checkpoint Inhibitors: Drugs that block proteins used by cancer cells to evade the immune system.",
        },
        {
          description:
            "Cancer Vaccines: Help the immune system recognize cancer cells.",
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
          description: "Pain management through medications or nerve blocks",
        },
        {
          description:
            "Nutritional support for patients with difficulty eating or swallowing",
        },
        {
          description:
            " Counselling and emotional support for patients and families",
        },
        {
          description:
            "Management of side effects such as fatigue, nausea, or bowel issues",
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

  symptoms: [
    {
      category: "",
      description: "Rectal bleeding: Blood in stool or when wiping.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Changes in bowel habits: Sudden onset of chronic diarrhea or constipation.",
      bgColor: "bg-hciPrimary text-white",
    },
    {
      category: "",
      description:
        "Abdominal pain or discomfort: In some cases, polyps may lead to bowel obstruction or other gastrointestinal issues.",
      bgColor: "bg-hciPrimary text-white",
    },
  ],

  diagnosis: [
    {
      category: "",
      description:
        "Stool tests: These tests check for blood or abnormal DNA in stool samples.",
      bgColor: "bg-hciSecondary text-white",
    },
    {
      category: "",
      description: `Imaging tests: CT colonography (virtual colonoscopy) and barium enemas can also help visualize polyps but are not typically used for removal.`,
      bgColor: "bg-hciSecondary text-white",
    },
  ],
};

const footerData = [
  {
    header: "Conclusion",
    paragraph: `
     Colon polyps are common, especially in older adults, and while many are benign, their potential to develop into cancer makes early detection and removal vital. Regular screenings, lifestyle modifications, and awareness of family history can help reduce the risk of developing colon polyps and subsequent colorectal cancer. If polyps are detected, prompt treatment is essential to prevent complications and ensure a positive outlook.`,
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
        <H2 title="Causes" className="font-medium mb-4 text-center text-2xl" />
        <p className="font-light">
          The exact cause of colon polyps is not entirely understood, but
          genetic mutations play a significant role. Most polyps are sporadic,
          occurring randomly, although some people may have hereditary syndromes
          that increase their likelihood of developing multiple polyps. Risk
          factors for colon polyps include:
        </p>
        <div className="grid grid-cols-2 gap-4">
          {data.section_1.map((item, index) => (
            <TextComponent
              key={index}
              title={item.title}
              description={item.description}
              boxCss="w-full bg-hciYellow hover:bg-hciPrimary hover:text-white items-start justify-center"
            />
          ))}
        </div>
        <KnowMore title={data.title} />

        <div className="grid lg:grid-cols-1 gap-4 pt-8">
          <div className="space-y-4">
            <DataBoxes
              title="Symptoms"
              text="Colon polyps often do not cause noticeable symptoms, making regular screening crucial. However, when symptoms do occur, they may include:"
              titleCss="text-black font-medium text-center text-2xl"
              textCss="font-light py-4"
              header=""
              data={data.symptoms}
              myclass="grid grid-cols-2"
            />
            <KnowMore title={data.title} />
          </div>
          <div>
            <DataBoxes
              title="Diagnosis"
              text="The primary method for diagnosing colon polyps is through a colonoscopy, a procedure that allows a healthcare provider to examine the colon with a lighted camera. If polyps are found, they can often be removed during the same procedure. Other diagnostic tools include:"
              header=""
              textCss="font-light py-4"
              titleCss="text-black font-medium text-center text-2xl"
              data={data.diagnosis}
              myclass="grid grid-cols-2"
            />
          </div>
        </div>
        <IssuesLinks head={data.title} />
        <div>
          <H2
            text="Treatment"
            className="font-medium mb-4 text-center text-2xl"
          />
          <p className="font-light">
            The main treatment for colon polyps is removal during a colonoscopy,
            especially if they are neoplastic (precancerous). The procedure is
            called a polypectomy. Post-removal, polyps are sent for biopsy to
            determine their type and cancer risk. Follow-up screenings will
            depend on the number and type of polyps removed. For patients with a
            history of polyps, surveillance colonoscopies may be scheduled every
            one to ten years based on individual risk factors.
          </p>
          {/* <DataLists
            // desc={data.complications[0].heading}
            data={data.complications}
          /> */}
        </div>

        <Conclusion data={footerData} />
        <FooterLinks head={data.title} />
        <BookButton />
      </div>
    </>
  );
}

export default GeneralSurgery;
